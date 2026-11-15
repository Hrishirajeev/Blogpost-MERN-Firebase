
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDH0drtu_l7eavG0m-VhSXtQQWHA-oiA9g",
  authDomain: "blogportfolio-90fd7.firebaseapp.com",
  projectId: "blogportfolio-90fd7",
  storageBucket: "blogportfolio-90fd7.firebasestorage.app",
  messagingSenderId: "841165605955",
  appId: "1:841165605955:web:15b7ebe85c53b59865d8f6"
};

var app = initializeApp(firebaseConfig);

export var auth = getAuth(app);
export var googleProvider = new GoogleAuthProvider();
