// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO9GbnzuCV1rAg8gV7IIuWWlBsrp95d2w",
  authDomain: "nazzala.firebaseapp.com",
  projectId: "nazzala",
  storageBucket: "nazzala.firebasestorage.app",
  messagingSenderId: "1096563608444",
  appId: "1:1096563608444:web:4889bdce7f73fe119eb2f9",
  measurementId: "G-MPC6N4W5TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);