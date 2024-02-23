import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApfmNq7bumznjbRJvre-j6UY2pY2luAjg",
  authDomain: "http-request-da0ed.firebaseapp.com",
  databaseURL: "https://http-request-da0ed-default-rtdb.firebaseio.com",
  projectId: "http-request-da0ed",
  storageBucket: "http-request-da0ed.appspot.com",
  messagingSenderId: "193387706640",
  appId: "1:193387706640:web:84f3dbcfa5381f13dccd95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
