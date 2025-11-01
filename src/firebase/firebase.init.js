import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChyksasIVJGAum74V3Y6SYLUmZWufh5nc",
  authDomain: "smart-deals-1d09a.firebaseapp.com",
  projectId: "smart-deals-1d09a",
  storageBucket: "smart-deals-1d09a.firebasestorage.app",
  messagingSenderId: "732541717632",
  appId: "1:732541717632:web:9a4aaeef561dce25caaa65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
