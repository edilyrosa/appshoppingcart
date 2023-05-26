import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyClM3cadYy5PYr27FjcsZmuKS0PiG4weqY",
    authDomain: "appshoppingcart-575f4.firebaseapp.com",
    projectId: "appshoppingcart-575f4",
    storageBucket: "appshoppingcart-575f4.appspot.com",
    messagingSenderId: "759799460556",
    appId: "1:759799460556:web:aa82b73b1a268b03aa4869",
    measurementId: "G-41Y179T7RZ" 
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };

