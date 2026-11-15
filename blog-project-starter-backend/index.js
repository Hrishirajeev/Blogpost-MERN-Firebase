require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

var adminApp = require("firebase-admin/app");
var adminAuth = require("firebase-admin/auth");

// Firebase Admin setup
var serviceAccount = require("./blogportfolio-90fd7-firebase-adminsdk-fbsvc-84d5462b78.json");

adminApp.initializeApp({
  credential: adminApp.cert(serviceAccount)
});

var app = express();

app.use(cors());
app.use(bodyParser.json());

// Admin Google email
var adminEmail = "hrishirajeev24@gmail.com";

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(function () {
    console.log("MongoDB Connected Successfully");
  })
  .catch(function (error) {
    console.log("MongoDB Connection Error:", error);
  });

// Blog schema
var blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number
});

var Blog = mongoose.model("Blog", blogSchema);

// Verify Firebase login
function verifyUser(req, res, next) {
  var token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Login required" });
  }

  var idToken = token.split(" ")[1];

  adminAuth.getAuth().verifyIdToken(idToken)
    .then(function (decodedToken) {
      req.user = decodedToken;
      next();
    })
    .catch(function (error) {
      console.log(error);
      res.status(401).json({ message: "Invalid login" });
    });
}

// Verify admin
function verifyAdmin(req, res, next) {
  if (req.user.email !== adminEmail) {
    return res.status(403).json({ message: "Admin access only" });
  }

  next();
}

// Get blogs - everyone
app.get("/api/blogs", function (req, res) {
  Blog.find({})
    .then(function (blogs) {
      res.json(blogs);
    })
    .catch(function (error) {
      res.status(500).json({ message: error.message });
    });
});

// Like blogs - everyone
app.patch("/api/blogs/like/:id", function (req, res) {
  Blog.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } },
    { new: true }
  )
    .then(function (blog) {
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json(blog);
    })
    .catch(function (error) {
      res.status(500).json({ message: error.message });
    });
});

// Add blog - admin only
app.post("/api/blogs", verifyUser, verifyAdmin, function (req, res) {
  var blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date: req.body.date,
    likes: 0
  });

  blog.save()
    .then(function (newBlog) {
      res.status(201).json(newBlog);
    })
    .catch(function (error) {
      res.status(400).json({ message: error.message });
    });
});

// Edit blog - admin only
app.put("/api/blogs/:id", verifyUser, verifyAdmin, function (req, res) {
  Blog.findByIdAndUpdate(
    req.params.id,
    {
      newTitle: req.body.newTitle,
      newContent: req.body.newContent
    },
    { new: true }
  )
    .then(function (blog) {
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json(blog);
    })
    .catch(function (error) {
      res.status(400).json({ message: error.message });
    });
});

// Delete blog - admin only
app.delete("/api/blogs/:id", verifyUser, verifyAdmin, function (req, res) {
  Blog.findByIdAndDelete(req.params.id)
    .then(function (blog) {
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json({ message: "Blog deleted successfully" });
    })
    .catch(function (error) {
      res.status(500).json({ message: error.message });
    });
});

// Start server
app.listen(5000, function () {
  console.log("Server running on port 5000");
});
