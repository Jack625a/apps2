// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'; //dependencia para autentificacion

const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app) //configuracion de la autentificacion