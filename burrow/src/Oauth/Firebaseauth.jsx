// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwK8pDvLhrU9zsBhIf8bsypSrvMyJMomU",
  authDomain: "playo-7b60a.firebaseapp.com",
  projectId: "playo-7b60a",
  storageBucket: "playo-7b60a.firebasestorage.app",
  messagingSenderId: "1064634008246",
  appId: "1:1064634008246:web:06468a48dd394ac09f9c17",
  measurementId: "G-MJ4KR8Z2PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export {app,auth}