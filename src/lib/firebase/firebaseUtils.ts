import { db, storage } from './firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const addDocument = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: Timestamp.now()
    })
    return { id: docRef.id, ...data }
  } catch (error) {
    console.error('Error adding document:', error)
    throw error
  }
}

export const uploadFile = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, path)
    const snapshot = await uploadBytes(storageRef, file)
    const url = await getDownloadURL(snapshot.ref)
    return url
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
} 