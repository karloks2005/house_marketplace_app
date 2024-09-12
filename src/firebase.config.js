
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCte182a9-WxP5y8H8f9_deN1eyTI-yVNc",
  authDomain: "house-marketplace-app-d54bf.firebaseapp.com",
  projectId: "house-marketplace-app-d54bf",
  storageBucket: "house-marketplace-app-d54bf.appspot.com",
  messagingSenderId: "55030081690",
  appId: "1:55030081690:web:b30201da86a6edbf86d723",
  measurementId: "G-LV9TJQJK89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);