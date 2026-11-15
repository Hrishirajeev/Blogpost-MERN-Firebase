
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

var AuthContext = createContext();

export function AuthProvider(props) {
  var [user, setUser] = useState(null);
  var [loading, setLoading] = useState(true);

  useEffect(function () {
    var unsubscribe = onAuthStateChanged(auth, function (currentUser) {
      setUser(currentUser);
      setLoading(false);
    });

    return function () {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user: user, loading: loading }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
