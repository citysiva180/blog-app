import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT,
  storageBucket: process.env.REACT_APP_FB_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER,
  appId: process.env.REACT_APP_FB_APP,
  measurementId: process.env.REACT_APP_FB_MESUREMENT,
});

const AuthContext = createContext();

//This is a custom hook thought by developers at skill thrive
//Now we are building a hook which will give the auth to the child components
// once given, the child components will re-render the proper results

export const useAuth = () => {
  return useContext(AuthContext);
};

//Provider Hook that creates the auth object and handles state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const sendSignInLinkToEmail = (email) => {
    return firebase.auth().sendSignInLinkToEmail(email, {
      url: "http://localhost:3000/confirm",
      handleCodeInApp: true.then(() => {
        return true;
      }),
    });
  };
  const signInWithEmailLink = (email, code) => {
    return firebase
      .auth()
      .sendSignInLinkToEmail(email, code)
      .then((result) => {
        setUser(result.user);
        return true;
      });
  };
  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  //Subscribe to user on Mount
  // Because this sets state in the call back. Which will cause any component
  // that utilizes this  hook to re-render with the latest auth object

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    //cleanup subscription
    return () => unsubscribe();
  }, []);

  const values = {
    user,
    isAuthenticating,
    sendSignInLinkToEmail,
    signInWithEmailLink,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
