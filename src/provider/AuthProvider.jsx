import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../utils/firebase/firebase.config";

// create context and set auth outside of components body
const auth = getAuth(app);
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register function
  const registerHandler = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login function
  const loginHandler = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout handler
  const logOutHandler = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    registerHandler,
    loginHandler,
    logOutHandler,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
