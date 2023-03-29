import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
require('dotenv').config()

const { FIREBASE_API_KEY, FIREBASE_AUTH_DOM, FIREBASE_PROJ_ID, FIREBASE_BUCKET, FIREBASE_SENDER, FIREBASE_APP_ID, FIREBASE_MEASURE } = process.env

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOM,
    projectId: FIREBASE_PROJ_ID,
    storageBucket: FIREBASE_BUCKET,
    messagingSenderId: FIREBASE_SENDER,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASURE
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)