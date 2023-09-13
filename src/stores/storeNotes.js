import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      {
        id: 'id1',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Magnam repellendus temporibus dolorem reprehenderit obcaecati quis nemo, itaque neque provident iusto adipisci, minus, odio numquam tenetur suscipit laudantium laborum ullam voluptatibus?'
      },
      {
        id: 'id2',
        content:
          'Magnam repellendus temporibus dolorem reprehenderit obcaecati quis nemo, itaque neque provident iusto adipisci, minus, odio numquam tenetur suscipit laudantium laborum ullam voluptatibus?'
      }
    ]
  }),
  //   getters: {
  //     doubleCount: (state) => state.count * 2
  //   },
  actions: {
    addNewNote(newNote) {
      const note = {
        id: Date.now().toString(),
        content: newNote
      }

      this.notes.unshift(note)
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id)
    }
  }
})
