import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBG5UmmexjAz52IfTosBMnf5MWM4cQTGgQ",
    authDomain: "tn-react-viernes-mayo-2025.firebaseapp.com",
    projectId: "tn-react-viernes-mayo-2025",
    storageBucket: "tn-react-viernes-mayo-2025.firebasestorage.app",
    messagingSenderId: "216249569539",
    appId: "1:216249569539:web:5646924747c268fd3d9936"
};


const app = initializeApp(firebaseConfig);

//FIRESTORE nos permite tener una base de datos

//Obtener la constante database de nuestra app (basicamente un objeto de acceso a la base de datos de nuestra aplicacion)
const database = getFirestore(app)

export default database