<template>
    <div class="card mb-4">
        <div class="card-content">
        <div class="content">
            {{ note.content }}
            <div class="columns is-mobile has-text-grey-ligth">
                <small class="column">{{ formattedDate }}</small>
                <small class="column has-text-right">{{ characterLength }}</small>
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
import ModelDeleteNote from './ModelDeleteNote.vue';
import { useDateFormat } from '@vueuse/core'

const { note } = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const characterLength = computed(() => {
    const length = note.content.length
    return `${length} ${length === 1 ? 'character' : 'characters'}`
})

const formattedDate = computed(() => {
    const date = new Date(parseInt(note.date))
    const formatted = useDateFormat(date, 'DD.MM.YY    HH:mm')
    return formatted.value
})

// modals
const modal = reactive({
    deleteNote: false
})

</script>