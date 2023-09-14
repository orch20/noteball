<template>
    <div class="card mb-4">
        <div class="card-content">
        <div class="content">
            {{ note.content }}
            <div class="has-text-right has-text-grey-ligth">
                <small>{{ characterLength }}</small>
            </div>
        </div>
        </div>
        <footer class="card-footer">
        <RouterLink :to="`/edit-note/${note.id}`" class="card-footer-item">Edit</RouterLink>
        <a
          @click.prevent="modal.deleteNote = true"
          class="card-footer-item"
          href="#"
          >Delete</a>
        </footer>
        <ModelDeleteNote
        v-if="modal.deleteNote"
        v-model="modal.deleteNote"
        :noteId="note.id"
        />
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
// import { useStoreNotes } from '@/stores/storeNotes';
import ModelDeleteNote from './ModelDeleteNote.vue';

// const storeNotes = useStoreNotes()

const { note } = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const characterLength = computed(() => {
    const length = note.content.trim().length
    return `${length} ${length === 1 ? 'character' : 'characters'}`
})

// modals
const modal = reactive({
    deleteNote: false
})

</script>