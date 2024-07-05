// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEKiorfDGGkEst2tpIwY5jfJkFX78I2vA",
  authDomain: "subastaexamen.firebaseapp.com",
  projectId: "subastaexamen",
  storageBucket: "subastaexamen.appspot.com",
  messagingSenderId: "597096526583",
  appId: "1:597096526583:web:0c2a9e09158998560319f2",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
const authApp = getAuth(app);
const storageApp = getStorage(app);
const firestoreApp = getFirestore(app);

// Exporta los servicios necesarios
export { authApp, storageApp, firestoreApp, serverTimestamp };
