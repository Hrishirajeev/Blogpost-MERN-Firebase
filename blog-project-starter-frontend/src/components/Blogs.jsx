
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./common/Footer";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";

function Blogs() {
  var authData = useAuth();
  var user = authData.user;

  // Replace this with your Google email
  var adminEmail = "hrishirajeev24@gmail.com";

  var isAdmin = user && user.email === adminEmail;

  var [blogs, setBlogs] = useState([]);
  var [newTitle, setNewTitle] = useState("");
  var [newContent, setNewContent] = useState("");

  function fetchBlogs() {
    axios.get("http://localhost:5000/api/blogs")
      .then(function (res) {
        setBlogs(res.data);
      })
      .catch(function () {
        console.log("Error fetching blogs");
      });
  }

  useEffect(function () {
    window.scrollTo(0, 0);
    fetchBlogs();
  }, []);

  function handleLike(blogId) {
    axios.patch("http://localhost:5000/api/blogs/like/" + blogId)
      .then(function () {
        fetchBlogs();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleNewBlogSubmit(event) {
    event.preventDefault();

    var today = new Date();
    var date = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    auth.currentUser.getIdToken().then(function (token) {
  axios.post(
    "http://localhost:5000/api/blogs",
    {
      newTitle: newTitle,
      date: date,
      newContent: newContent,
      likes: 0
    },
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  ).then(function () {
    setNewTitle("");
    setNewContent("");
    fetchBlogs();
  }).catch(function (error) {
    alert("Unable to add blog");
    console.log(error);
  });
});
  }

  return (
    <div className="blog-section py-14">
      <h2 className="text-center text-5xl font-bold mb-14">
        Latest <span className="text-orange-400">Blogs</span> 📚
      </h2>

      {isAdmin && (
        <div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
          <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Blog Title"
              value={newTitle}
              onChange={function (event) {
                setNewTitle(event.target.value);
              }}
              className="p-2 border rounded"
              required
            />

            <textarea
              placeholder="Blog Content"
              value={newContent}
              onChange={function (event) {
                setNewContent(event.target.value);
              }}
              className="p-2 border rounded"
              rows="4"
              required
            />

            <button type="submit" className="bg-orange-400 text-white p-2 rounded">
              Add Blog
            </button>
          </form>
        </div>
      )}

      <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
        {blogs.map(function (blog) {
          return (
            <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-2xl text-gray-800 mb-3">
                {blog.newTitle}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
              <p className="text-gray-600 mb-4">{blog.newContent}</p>
              <span
                className="text-blue-500 cursor-pointer"
                onClick={function () {
                  handleLike(blog._id);
                }}
              >
                Like
              </span>
              <span className="ml-2">{blog.likes} Likes</span>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;
