// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsb10V84rdCqJa5NpOnLzYJpJipo0rud0",
  authDomain: "integration-4020a.firebaseapp.com",
  projectId: "integration-4020a",
  storageBucket: "integration-4020a.firebasestorage.app",
  messagingSenderId: "899187805223",
  appId: "1:899187805223:web:3ae485b8a6de2c27dd1202",
  measurementId: "G-T69X91QTQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
