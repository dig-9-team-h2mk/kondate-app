// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3vczNQy7NAMZbViM-1ZPS6f0mkFTDwY0",
  authDomain: "kondate-app-login.firebaseapp.com",
  projectId: "kondate-app-login",
  storageBucket: "kondate-app-login.firebasestorage.app",
  messagingSenderId: "244122667006",
  appId: "1:244122667006:web:162ed0aaa49b270c31a2af",
  measurementId: "G-EZLS6KXG71",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
