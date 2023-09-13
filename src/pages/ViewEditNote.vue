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
                    <button class="button is-link is-light" @click="$router.back()">
                        Cancel
                    </button>
                    <button
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
import AddAndEditNote from '@/components/Notes/AddAndEditNote.vue' 

const noteContent = ref('')


</script>
