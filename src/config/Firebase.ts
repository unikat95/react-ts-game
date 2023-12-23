import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo5mABctvVZOT9w8LtiQJOOkAFPEVf9kM",
  authDomain: "react-ts-game-9efa1.firebaseapp.com",
  projectId: "react-ts-game-9efa1",
  storageBucket: "react-ts-game-9efa1.appspot.com",
  messagingSenderId: "144031844889",
  appId: "1:144031844889:web:087f5fe5fcfe9db9513888",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
