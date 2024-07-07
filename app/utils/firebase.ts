// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYc0kzuW-TGdfwK3sVjdvKJTdoNgwEEjM",
  authDomain: "stordemo-6f2e7.firebaseapp.com",
  projectId: "stordemo-6f2e7",
  storageBucket: "stordemo-6f2e7.appspot.com",
  messagingSenderId: "891258582499",
  appId: "1:891258582499:web:032679d8d706c402f39cd6",
  measurementId: "G-CMCMBPJMXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
