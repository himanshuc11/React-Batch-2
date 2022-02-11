// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDT1ZnRqS3MT9jRyjFcq6y64ue8TKzO58",
  authDomain: "react2-fe60c.firebaseapp.com",
  projectId: "react2-fe60c",
  storageBucket: "react2-fe60c.appspot.com",
  messagingSenderId: "261692574459",
  appId: "1:261692574459:web:5dbc3c3f76221a19c37e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app