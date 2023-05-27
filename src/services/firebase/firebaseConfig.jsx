
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2XJ82Y2FHArQrd3t-Z28rRCs5bcd1Esk",
  authDomain: "pf-scudaletti-reactjs.firebaseapp.com",
  projectId: "pf-scudaletti-reactjs",
  storageBucket: "pf-scudaletti-reactjs.appspot.com",
  messagingSenderId: "589948515028",
  appId: "1:589948515028:web:918f70568d924097de4141",
  measurementId: "G-P3H6KS5SNN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);