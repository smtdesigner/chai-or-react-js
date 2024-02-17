import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDLOQPZDzZNkLQuh5JAu8YOgzEyC20bgwo",
  authDomain: "mychat-26a2c.firebaseapp.com",
  projectId: "mychat-26a2c",
  storageBucket: "mychat-26a2c.appspot.com",
  messagingSenderId: "352775685189",
  appId: "1:352775685189:web:94b390bee2da05b8580f2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();

