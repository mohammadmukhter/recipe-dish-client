import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../utils/firebase/firebase.config";

// create context and set auth outside of components body
const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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

  //   google sign in provider
  const googleHandler = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   github sign in provider
  const githubHandler = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //   logout handler
  const logOutHandler = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    registerHandler,
    loginHandler,
    logOutHandler,
    googleHandler,
    githubHandler,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
