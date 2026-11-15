
import React from "react";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function AppContent() {
  var authData = useAuth();
  var user = authData.user;
  var loading = authData.loading;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-4 md:px-10 bg-[#faf9f6] rounded-md min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />

        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route
          path="/login"
          element={user ? <Navigate to="/home" /> : <Login />}
        />

        <Route
          path="/signup"
          element={user ? <Navigate to="/home" /> : <Signup />}
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
