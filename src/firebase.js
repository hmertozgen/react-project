import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIHsBbSJGpap72x8UJ4CwHq2B5QPHJHFY",
  authDomain: "react-project-6148e.firebaseapp.com",
  projectId: "react-project-6148e",
  storageBucket: "react-project-6148e.appspot.com",
  messagingSenderId: "846115522155",
  appId: "1:846115522155:web:e65db6dbf07bb0db3c932e",
  measurementId: "G-MPS13RB13V",
};

const firebaseApp = firebase.initialApp(firebaseConfig);

const db = firebaseApp.firesote();

const auth = firebase.auth();

const provider = new firebase.auth.googleAuthProvider();

export default db;
export { auth, provider };
