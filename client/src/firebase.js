import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mern-estate-2d606.firebaseapp.com",
    projectId: "mern-estate-2d606",
    storageBucket: "mern-estate-2d606.appspot.com",
    messagingSenderId: "152368466986",
    appId: "1:152368466986:web:403fc42522dc555d5cc753"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);