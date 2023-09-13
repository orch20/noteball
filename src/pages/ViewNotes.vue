<template>
    <div class="notes">
        
        <AddAndEditNote
            v-model="newNote"
            ref="addAndEditNoteRef"
            placeholder="Type a new note"
        >
           <template v-slot:buttons>
                <button
                    class="button is-link has-background-success"
                    @click="addNewNote"
                    :disabled="!newNote"
                >
                    Add New Note
                </button>
           </template>
        </AddAndEditNote>
        <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
            />       
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import AddAndEditNote from '@/components/Notes/AddAndEditNote.vue'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addAndEditNoteRef = ref(null)

const addNewNote = () => {
    storeNotes.addNewNote(newNote.value)
    newNote.value = ''
    addAndEditNoteRef.value.focusTextarea()
    
}

</script>