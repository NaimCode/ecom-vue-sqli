/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAR9MQ5r3rgUypB-592Ta7TqBc9oB2WqnE",
    authDomain: "ecom-vue.firebaseapp.com",
    projectId: "ecom-vue",
    storageBucket: "ecom-vue.appspot.com",
    messagingSenderId: "258019880990",
    appId: "1:258019880990:web:3e13984ce3d09d05023e0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, GoogleAuthProvider,db };