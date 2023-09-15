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

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: []
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
    async getNotesFromDb() {
      // const querySnapshot = await getDocs(collection(db, 'notes'))
      // querySnapshot.forEach((doc) => {
      //   const note = {
      //     id: doc.id,
      //     content: doc.data().content
      //   }
      //   this.notes.push(note)
      // })

      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content
          }
          notes.push(note)
        })
        this.notes = notes
      })
    },

    async addNewNote(newContent) {
      const date = Date.now().toString()

      await addDoc(notesCollectionRef, {
        content: newContent,
        date
      })
    },
    async deleteNote(id) {
      // this.notes = this.notes.filter((note) => note.id !== id)
      await deleteDoc(doc(db, 'notes', id))
    },
    async updateNoteContent(id, newContent) {
      // const note = this.notes.find((note) => note.id === id)
      // note.content = content
      const noteDocRef = doc(db, 'notes', id)
      await updateDoc(noteDocRef, { content: newContent })
    }
  }
})
