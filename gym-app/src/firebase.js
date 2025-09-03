// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXe31En8LxvswXct-NtFv8qPEga2bXojY",
  authDomain: "corefit-72560.firebaseapp.com",
  projectId: "corefit-72560",
  storageBucket: "corefit-72560.firebasestorage.app",
  messagingSenderId: "857192716384",
  appId: "1:857192716384:web:d12ff2d070f3cf32cecb05",
  measurementId: "G-G95Z43MG6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firestore
const db = getFirestore(app);

export { db };
