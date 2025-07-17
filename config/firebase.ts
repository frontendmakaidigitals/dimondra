import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrb-cztRvxg3x7ZxHS-nSBbrx9ea1Hb4g",
  authDomain: "dimondra-backend.firebaseapp.com",
  projectId: "dimondra-backend",
  storageBucket: "dimondra-backend.firebasestorage.app",
  messagingSenderId: "559178153167",
  appId: "1:559178153167:web:5d72ef4471e085268e8bba",
  measurementId: "G-T19Q1TEGWS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
