import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import app from "../firebase/firebase.config";





export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password, name, url) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };



      const googleSignIn = () => {
        setLoading(true);
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider);
      };



      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };


      const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (logUser) => {
          console.log(logUser);
          setUser(logUser);
          setLoading(false);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
      };
    


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;