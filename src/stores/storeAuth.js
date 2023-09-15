import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/js/firebase.js'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {}
  }),
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.router.push({ name: 'notes' })
        } else {
          this.user = {}
          this.router.replace({ name: 'auth' })
        }
      })
    },
    registerUser(credencials) {
      createUserWithEmailAndPassword(auth, credencials.email, credencials.password)
        .then((userCredential) => {
          const user = userCredential.user
          // console.log('User: ', user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          // console.log('Error: ', errorCode, errorMessage)
        })
    },
    loginUser(credencials) {
      signInWithEmailAndPassword(auth, credencials.email, credencials.password)
        .then((userCredential) => {
          const user = userCredential.user
          // console.log('User: ', user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          // console.log('Error: ', errorCode, errorMessage)
        })
    },

    logoutUser() {
      signOut(auth)
        .then(() => {
          // console.log('User signed out')
        })
        .catch((error) => {
          // An error happened.
          // console.log('Errorsdfsfds: ', error.message)
        })
    }
  }
})
