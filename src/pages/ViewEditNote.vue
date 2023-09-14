<template>
    <div class="edit-note">
        <AddAndEditNote
                v-model="noteContent"
                bgColor="link"
                ref="addAndEditNoteRef"
                placeholder="Edit Note"
                label="Edit Note"
            >
               <template v-slot:buttons>
                    <button class="button is-link is-light mr-2" @click="$router.back()">
                        Cancel
                    </button>
                    <button
                        @click="handelSaveClick"
                        class="button is-link has-background-link"
                        :disabled="!noteContent"
                        
                    >
                        Save Note
                    </button>
               </template>
            </AddAndEditNote>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useRoute, useRouter } from 'vue-router'
import AddAndEditNote from '@/components/Notes/AddAndEditNote.vue' 

const storeNotes = useStoreNotes()
const router = useRouter()
const route = useRoute()
const id = route.params.id

const noteContent = ref('')




noteContent.value = storeNotes.getNoteContent(id)

const handelSaveClick = () => {
    storeNotes.updateNoteContent(id, noteContent.value)
    router.push('/')
}


</script>
