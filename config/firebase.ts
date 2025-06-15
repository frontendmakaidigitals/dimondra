import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAZeDuHjvZ94F4489trh86_HUQR-4CWDJ4",
  authDomain: "expreiment-284ae.firebaseapp.com",
  projectId: "expreiment-284ae",
  storageBucket: "expreiment-284ae.firebasestorage.app",
  messagingSenderId: "406779587772",
  appId: "1:406779587772:web:371191ac36b8653bdbf4b9",
  measurementId: "G-NJM2QPVWQ4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

