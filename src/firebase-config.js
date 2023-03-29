import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOM, REACT_APP_FIREBASE_PROJ_ID, REACT_APP_FIREBASE_BUCKET, REACT_APP_FIREBASE_SENDER, REACT_APP_FIREBASE_APP_ID, REACT_APP_FIREBASE_MEASURE } = process.env

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOM,
    projectId: REACT_APP_FIREBASE_PROJ_ID,
    storageBucket: REACT_APP_FIREBASE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_SENDER,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASURE
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)