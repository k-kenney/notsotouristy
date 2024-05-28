// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { VITE_FIREBASE_KEY } from "@env";

const firebaseConfig = {
  apiKey: {VITE_FIREBASE_API_KEY},
  authDomain: "notsotouristy-775b9.firebaseapp.com",
  projectId: "notsotouristy-775b9",
  storageBucket: "notsotouristy-775b9.appspot.com",
  messagingSenderId: "611304357856",
  appId: "1:611304357856:web:83e6db90dad3b44ff13585",
  measurementId: "G-BW146F8Y37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);