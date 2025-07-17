// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "isalah-project.firebaseapp.com",
    projectId: "isalah-project",
    storageBucket: "isalah-project.firebasestorage.app",
    messagingSenderId: "278396268390",
    appId: "1:278396268390:web:0a6e7894a6c3b2a52722a7",
    measurementId: "G-HN7KMZFQ1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);