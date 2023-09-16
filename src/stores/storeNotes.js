import { defineStore } from 'pinia'
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'firebase/firestore'
import { db } from '@/js/firebase.js'
import { useStoreAuth } from '@/stores/storeAuth.js'

let notesCollectionRef
let notesCollectionQuery

let getNotesSnapshot = null

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [],
    notesLoaded: false
  }),
  getters: {
    getNoteContent() {
      return (id) => this.notes.find((note) => note.id === id).content
    },
    totalNotesCount() {
      return () => this.notes.length
    },
    totalCharactersCount() {
      return () => this.notes.reduce((acc, note) => acc + note.content.length, 0)
    }
  },
  actions: {
    init() {
      //initialize database refs
      const authStore = useStoreAuth()
      notesCollectionRef = collection(db, 'users', authStore.user.id, 'notes')
      notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))
      this.getNotesFromDb()
    },
    async getNotesFromDb() {
      // const querySnapshot = await getDocs(collection(db, 'notes'))
      // querySnapshot.forEach((doc) => {
      //   const note = {
      //     id: doc.id,
      //     content: doc.data().content
      //   }
      //   this.notes.push(note)
      // })

      getNotesSnapshot = onSnapshot(
        notesCollectionQuery,
        (querySnapshot) => {
          this.notesLoaded = false
          const notes = []
          querySnapshot.forEach((doc) => {
            const note = {
              id: doc.id,
              content: doc.data().content,
              date: doc.data().date
            }
            notes.push(note)
          })
          this.notes = notes
          this.notesLoaded = true
        },
        (error) => {
          console.log(error.message)
        }
      )
    },

    clearNotes() {
      this.notes = []
      if (getNotesSnapshot) getNotesSnapshot() // unsubscribe from any active listener
    },

    async addNewNote(newContent) {
      const date = new Date().getTime().toString()
      await addDoc(notesCollectionRef, {
        content: newContent,
        date
      })
    },
    async deleteNote(id) {
      await deleteDoc(doc(notesCollectionRef, id))
    },
    async updateNoteContent(id, newContent) {
      const noteDocRef = doc(notesCollectionRef, id)
      await updateDoc(noteDocRef, { content: newContent })
    }
  }
})
