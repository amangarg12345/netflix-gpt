// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt33DTKhRmtaG3elqu68Zyy3FMu7qTo88",
  authDomain: "netflix-gpt-aman.firebaseapp.com",
  projectId: "netflix-gpt-aman",
  storageBucket: "netflix-gpt-aman.appspot.com",
  messagingSenderId: "5372406912",
  appId: "1:5372406912:web:a6b1ad7a69d70f715e4a65",
  measurementId: "G-QG4489ZBHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);