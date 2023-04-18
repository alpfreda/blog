import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

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
      const decoratedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      resolve(decoratedData)
    } catch (error) {
      reject(error)
    }
  })
}

const postData = (collectionName: string, data: any) => {
  const docRef = collection(db, collectionName)

  return new Promise(async (resolve, reject) => {
    try {
      const result = await addDoc(docRef, data)
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

const usePost = (collectionName: string) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const fetch = async (data: any) => {
    try {
      setLoading(true)
      setSuccess(null)
      setError(null)
      const json = await postData(collectionName, data)
      setLoading(false)
      setSuccess(json)
    } catch (err) {
      setLoading(false)
      setError(err)
    }
  }

  return { fetch, loading, success, error }
}

export { db, fetchLists, fetchById, usePost }
