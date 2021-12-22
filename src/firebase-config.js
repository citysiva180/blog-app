// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, googleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq3emWXT1c0sGns-pARrj1gEAO7N3yZXo",
  authDomain: "blog-project-3d395.firebaseapp.com",
  projectId: "blog-project-3d395",
  storageBucket: "blog-project-3d395.appspot.com",
  messagingSenderId: "131399498615",
  appId: "1:131399498615:web:5c6ccedcd6453e42bf3f72",
  measurementId: "G-QL52VGX95P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
