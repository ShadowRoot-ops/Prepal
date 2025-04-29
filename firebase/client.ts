// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhGn4laCRPESpMIJfT9EyvxJWnoX29wLU",
  authDomain: "newpal-c5041.firebaseapp.com",
  projectId: "newpal-c5041",
  storageBucket: "newpal-c5041.firebasestorage.app",
  messagingSenderId: "564192139762",
  appId: "1:564192139762:web:5617d93fc8b5ec3487336b",
  measurementId: "G-J6LN7YGWED",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
