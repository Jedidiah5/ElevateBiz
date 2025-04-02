import { auth } from './firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    console.error('Error signing in with Google:', error)
    throw error
  }
}

export const signOut = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
} 