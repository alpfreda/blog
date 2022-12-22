import { initializeApp } from "firebase/app"
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

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

export { db, fetchLists, fetchById }