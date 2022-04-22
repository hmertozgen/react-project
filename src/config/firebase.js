// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateCurrentUser,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
// } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { async } from "@firebase/util";
// import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIHsBbSJGpap72x8UJ4CwHq2B5QPHJHFY",
  authDomain: "react-project-6148e.firebaseapp.com",
  projectId: "react-project-6148e",
  storageBucket: "react-project-6148e.appspot.com",
  messagingSenderId: "846115522155",
  appId: "1:846115522155:web:e65db6dbf07bb0db3c932e",
  measurementId: "G-MPS13RB13V",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fs = firebase.storage();
const storage = firebase.storage();

export { auth, fs, storage };
