// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm4gN68qnc4_8qsMsgdaudLYT6GZiVd9o",
  authDomain: "netflixgpt-4e7f9.firebaseapp.com",
  projectId: "netflixgpt-4e7f9",
  storageBucket: "netflixgpt-4e7f9.firebasestorage.app",
  messagingSenderId: "435848725340",
  appId: "1:435848725340:web:21274e8401c53f4411f799",
  measurementId: "G-283X7N8XX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();