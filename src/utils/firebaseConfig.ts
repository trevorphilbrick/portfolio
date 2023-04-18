import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "portfolio-8b661.firebaseapp.com",
    projectId: "portfolio-8b661",
    storageBucket: "portfolio-8b661.appspot.com",
    messagingSenderId: "194119104372",
    appId: "1:194119104372:web:ba606ce3f9ceeb0c0e9e21",
    measurementId: "G-H1VEXE0DS6",
  };

export const fbApp = initializeApp(firebaseConfig);
export const db = getFirestore(fbApp);
