<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                   <textarea
                      v-model="newNote"  
                      class="textarea"
                      placeholder="Add a new note"
                      ref="newNoteInputFocus"
                    />
                </div>
                </div>
                <Note
                    v-for="note in notes"
                    :key="note.id"
                    :note="note"
                    @deleteClicked="deleteNote"
                />
                <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                      @click.prevent="addNewNote"
                      :disabled="!newNote"
                      class="button is-link has-background-success">Add New Note
                      </button>
                </div>
                
            </div>
        </div>

        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'

const notes = ref([
    {
        id: 'id1',
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Magnam repellendus temporibus dolorem reprehenderit obcaecati quis nemo, itaque neque provident iusto adipisci, minus, odio numquam tenetur suscipit laudantium laborum ullam voluptatibus?",
    },
    {
        id: 'id2',
        content: "Magnam repellendus temporibus dolorem reprehenderit obcaecati quis nemo, itaque neque provident iusto adipisci, minus, odio numquam tenetur suscipit laudantium laborum ullam voluptatibus?",
    }
])

const newNote = ref('')
const newNoteInputFocus = ref(null)

const addNewNote = () => {
    const note = {
        id: Date.now().toString(),
        content: newNote.value
    }

    notes.value.unshift(note)
    newNote.value = ''
    newNoteInputFocus.value.focus()
    
}

const deleteNote = (id) => {
    notes.value = notes.value.filter(note => note.id !== id)
}  

</script>