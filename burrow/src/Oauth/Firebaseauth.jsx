// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP0cGW-wTFLUV41EgfrkBHLq0S49zunb0",
  authDomain: "authentication-413216.firebaseapp.com",
  projectId: "authentication-413216",
  storageBucket: "authentication-413216.appspot.com",
  messagingSenderId: "460270845967",
  appId: "1:460270845967:web:370761b88df01700e2637a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export {app,auth}