// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_8lkCUNMK7seGEB9pR9E67zJJgyPI4O0",
  authDomain: "ema-john-simple-68a7a.firebaseapp.com",
  projectId: "ema-john-simple-68a7a",
  storageBucket: "ema-john-simple-68a7a.appspot.com",
  messagingSenderId: "539271966389",
  appId: "1:539271966389:web:81f6f773d428c97d3b58fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);