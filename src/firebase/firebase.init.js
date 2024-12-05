// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaAuE7w4Fqc_Hfr6Cy60i7yZXh5gKnWp0",
  authDomain: "simple-firebase-64c45.firebaseapp.com",
  projectId: "simple-firebase-64c45",
  storageBucket: "simple-firebase-64c45.firebasestorage.app",
  messagingSenderId: "410728562941",
  appId: "1:410728562941:web:b52f2cb2ce3a28d99dfe94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
