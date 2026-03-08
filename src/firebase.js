// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDD-EqUFIuAZi6PxA8ulY5JH8ChYl21SlE",
  authDomain: "web-site-f8218.firebaseapp.com",
  projectId: "web-site-f8218",
  storageBucket: "web-site-f8218.firebasestorage.app",
  messagingSenderId: "654230306941",
  appId: "1:654230306941:web:744a875d9e616d5a15b114",
  measurementId: "G-DP7R04QHRL"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);