import { initializeApp } from "firebase/app"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, setLogLevel } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
  measurementId: process.env.firebaseMeasurementId,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// setLogLevel('debug')
const fetchById = (collectionName: string, id: string) => {
  const docRef = doc(db, collectionName, id)

  return new Promise(async (resolve, reject) => {
    try {
      const data = await getDoc(docRef)
      resolve(data.data())
    } catch (error) {
      reject(error)
    }
  })
}

const fetchLists = (collectionName: string) => {
  const collectionRef = collection(db, collectionName)

  return new Promise(async (resolve, reject) => {
    try {
      const data = await getDocs(collectionRef)
      const decoratedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      resolve(decoratedData)
    } catch (error) {
      reject(error)
    }
  })
}


const postData = (collectionName: string, postData: any) => {
  const docRef = collection(db, collectionName)

  return new Promise(async (resolve, reject) => {
    try {
      const data = await addDoc(docRef, postData)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export { db, fetchLists, fetchById, postData }