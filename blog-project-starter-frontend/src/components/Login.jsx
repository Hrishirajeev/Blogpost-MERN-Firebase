import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  var navigate = useNavigate();

  function handleGoogleLogin() {
    signInWithPopup(auth, googleProvider)
      .then(function () {
        navigate("/home");
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to BlogPortfolio
      </h1>

      <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Continue with Google
      </button>
    </div>
  );
}

export default Login;