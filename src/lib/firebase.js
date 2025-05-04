// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Gfdilz7cVoyOaStBPA1qfo-9D_nJhoU",
  authDomain: "go-mall-cf10d.firebaseapp.com",
  projectId: "go-mall-cf10d",
  storageBucket: "go-mall-cf10d.appspot.com",
  messagingSenderId: "1095172279152",
  appId: "1:1095172279152:web:32114126bb8601af2cddb5",
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);



export { app,auth, db };
