// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFe9lt8AfdfHXxyMVTJrnY6Asf7P3miJ8",
  authDomain: "sneha-portfolio-showcase.firebaseapp.com",
  projectId: "sneha-portfolio-showcase",
  storageBucket: "sneha-portfolio-showcase.firebasestorage.app",
  messagingSenderId: "16623795497",
  appId: "1:16623795497:web:b21760ae0b14e1d01dcb38",
  measurementId: "G-2QNBM17QJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);