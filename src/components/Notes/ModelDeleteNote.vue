<template>
    <div class="modal is-active" p-2>
      <div class="modal-background"></div>
      <div v-on-click-outside="closeModal" class="modal-card" >
        <header class="modal-card-head">
          <p class="modal-card-title">Would you like to delete a note?</p>
          <button @click="closeModal" class="delete" aria-label="close"></button>
        </header>
        
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button @click="closeModal" class="button">No</button>
          <button @click="handelDeleteNote(noteId)" class="button is-danger">Yes</button>
        </footer>
      </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, onUnmounted } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import { useStoreNotes } from '@/stores/storeNotes';

defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}

const handelKeyboard = (e) => {
    if (e.key === 'Escape') closeModal()
}


onMounted(() => {
    document.addEventListener('keyup', handelKeyboard)
})

onUnmounted(() => {
    document.removeEventListener('keyup', handelKeyboard)
})

// delete note
const storeNotes = useStoreNotes()

const handelDeleteNote = (noteId) => {
    storeNotes.deleteNote(noteId)
}
</script>