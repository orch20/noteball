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

        <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success" max="100"/>
        <template v-else>
        <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
        />
        </template>  
        <div v-if="!storeNotes.notes.length" class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
            No notes yet...
        </div>


        
    </div>
</template>

<script setup>
import { ref} from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import AddAndEditNote from '@/components/Notes/AddAndEditNote.vue'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addAndEditNoteRef = ref(null)

const addNewNote = () => {
    storeNotes.addNewNote(newNote.value)
    newNote.value = ''
    addAndEditNoteRef.value.focusTextarea()
    
}

useWatchCharacters(newNote)

</script>