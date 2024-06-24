// src/components/Firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcan4zMX67Kwm3HVEO_kk_id65snj03CA",
    authDomain: "photography-website-31817.firebaseapp.com",
    projectId: "photography-website-31817",
    storageBucket: "photography-website-31817.appspot.com",
    messagingSenderId: "313389382783",
    appId: "1:313389382783:web:3213062c6a23e740fd534a",
    measurementId: "G-7HRYJGTCRS"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export default db; // Exporting db as default
