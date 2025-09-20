// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBOObF9adKwo_1zkL3hes6YLKeDIVWjqaE",
  authDomain: "placemate-9dfed.firebaseapp.com",
  projectId: "placemate-9dfed",
  storageBucket: "placemate-9dfed.appspot.com",
  messagingSenderId: "211756068056",
  appId: "1:211756068056:web:61fc25c65d1bb93a6ffbad",
  measurementId: "G-37YR29YT21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
