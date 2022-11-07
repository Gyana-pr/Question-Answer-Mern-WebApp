// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKT6VJHmC-50K1Baa2ngOD7KjM3jpeBPw",
  authDomain: "question-answer-ba8d2.firebaseapp.com",
  projectId: "question-answer-ba8d2",
  storageBucket: "question-answer-ba8d2.appspot.com",
  messagingSenderId: "1076106125343",
  appId: "1:1076106125343:web:5ddcbc21bcf945fde9b52a",
  measurementId: "G-F1J09KQ30X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};