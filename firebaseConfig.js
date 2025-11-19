// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAKZ2Z-oZesDuFkQ5YqwLATGjXXdIrak8",
  authDomain: "aureacommerce-mobile.firebaseapp.com",
  projectId: "aureacommerce-mobile",
  storageBucket: "aureacommerce-mobile.firebasestorage.app",
  messagingSenderId: "893653268870",
  appId: "1:893653268870:web:8dbf39aff482f5ef3b5407",
  measurementId: "G-DC3H4CWV0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Auth, para que possamos autenticar os usuários do sistema
export const auth = getAuth(app);