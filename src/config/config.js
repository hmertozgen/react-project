import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
export default app;
