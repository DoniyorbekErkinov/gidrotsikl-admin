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
    fetchData()
  }, [])
  return (
    <div className="App">
      {data.map(e => (
        <h1 key={e}>{e.title}</h1>
      ))}
    </div>
  );
}

export default App;
