 /* eslint-disable */
 import './App.css';
 import { useEffect, useState } from 'react';
import { database } from './firebase/firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot, query, where, orderBy,
  serverTimestamp,
  getDoc,
  updateDoc
} from 'firebase/firestore'
 import Login from "./Pages/Login/Login";
const colRef = collection(database, 'data')
function App() {
  const [data, setData] = useState([])
  function fetchData() {
    onSnapshot(colRef, (snapshot) => {
      let arr = []
      snapshot.docs.forEach((doc) => {
          arr.push({...doc.data(), id: doc.id})
      });
      setData(arr)
      console.log(arr)
    })
  }
  useEffect(() => {
    // fetchData()
  }, [])
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
