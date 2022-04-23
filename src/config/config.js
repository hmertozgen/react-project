import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
