import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn5-UYnD0bS_RWiZd0rb1a_eaYvTsUA14",
  authDomain: "ladvoice-c9668.firebaseapp.com",
  projectId: "ladvoice-c9668",
  storageBucket: "ladvoice-c9668.firebasestorage.app",
  messagingSenderId: "489699567221",
  appId: "1:489699567221:web:9c074f8d14cb97cf7a7a3c",
  measurementId: "G-P0BJJ7NHWM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)