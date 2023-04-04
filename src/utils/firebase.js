/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain:process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.VUE_APP_FIREBASE_PROJECT_ID,
    appId:process.env.VUE_APP_FIREBASE_APP_ID


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, GoogleAuthProvider,db };