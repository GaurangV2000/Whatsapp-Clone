// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBzU8YpCuYJz2vXn_2spweUXpIuPZqlILc",
  authDomain: "whatsapp-clone-f1936.firebaseapp.com",
  projectId: "whatsapp-clone-f1936",
  storageBucket: "whatsapp-clone-f1936.appspot.com",
  messagingSenderId: "602417852050",
  appId: "1:602417852050:web:452e664183463d9c97c04b",
  measurementId: "G-HGHWC71VHG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

