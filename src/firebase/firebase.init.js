import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_ei3vbwK6QLyjMpupQ5h7K_zrUoztaYE",
  authDomain: "simple-firebase-2-ebe73.firebaseapp.com",
  projectId: "simple-firebase-2-ebe73",
  storageBucket: "simple-firebase-2-ebe73.firebasestorage.app",
  messagingSenderId: "1069737251200",
  appId: "1:1069737251200:web:a7de93f0e3c418f964b165",
  measurementId: "G-TB3V0H0K58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
