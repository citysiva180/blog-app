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
