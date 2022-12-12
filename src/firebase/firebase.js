 /* eslint-disable */
import {initializeApp} from 'firebase/app'
import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot, query, where, orderBy,
    serverTimestamp,
    getDoc,
    updateDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAtFPNG13c2G8c-ejoJxd6pzC1R8kL2GUo",
    authDomain: "gidratsikl-crud.firebaseapp.com",
    projectId: "gidratsikl-crud",
    storageBucket: "gidratsikl-crud.appspot.com",
    messagingSenderId: "383187625556",
    appId: "1:383187625556:web:64a1c2c856159c19e92fc1"
  };
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);