import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBmZrQIbT_VgV8tYI_BDAG_qesUCse5TJs',
  authDomain: 'noteball-cd7b0.firebaseapp.com',
  projectId: 'noteball-cd7b0',
  storageBucket: 'noteball-cd7b0.appspot.com',
  messagingSenderId: '31053881881',
  appId: '1:31053881881:web:5202ba607844c13eaac088'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
