
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../AuthContext";

function Navbar() {
  var navigate = useNavigate();
  var authData = useAuth();
  var user = authData.user;
  var loading = authData.loading;

  function handleLogout() {
    signOut(auth).then(function () {
      navigate("/home");
    });
  }

  return (
    <nav className="bg-[#faf9f6] px-6 md:px-14 py-6 flex justify-between items-center">

      <Link to="/home" className="text-2xl font-bold text-[#303d35]">
        Personal<span className="text-[#a17c5b]">.</span>
      </Link>

      <div className="flex items-center gap-5 md:gap-10 text-sm font-medium text-[#555b52]">

        <Link to="/home" className="hover:text-[#a17c5b]">
          Home
        </Link>

        <Link to="/blogs" className="hover:text-[#a17c5b]">
          Stories
        </Link>

        {!loading && !user && (
          <>
            <Link to="/login" className="hover:text-[#a17c5b]">
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-[#303d35] text-white px-5 py-3 rounded-full hover:bg-[#526456]"
            >
              Sign Up
            </Link>
          </>
        )}

        {!loading && user && (
          <button
            onClick={handleLogout}
            className="bg-[#303d35] text-white px-5 py-3 rounded-full hover:bg-[#526456]"
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
