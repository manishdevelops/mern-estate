// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mern-estate-69676.firebaseapp.com",
    projectId: "mern-estate-69676",
    storageBucket: "mern-estate-69676.appspot.com",
    messagingSenderId: "532530882804",
    appId: "1:532530882804:web:587f20629d0d08e94596a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);