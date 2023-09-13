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
        <a href="#" class="card-footer-item" @click.prevent="storeNotes.deleteNote(note.id)">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes()

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

</script>