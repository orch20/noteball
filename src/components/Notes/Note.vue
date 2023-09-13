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
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item" @click.prevent="handelDeleteClicked">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const { note } = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['deleteClicked'])

const handelDeleteClicked = () => {
    emit('deleteClicked', note.id)
}

const characterLength = computed(() => {
    const length = note.content.length
    return `${length} ${length === 1 ? 'character' : 'characters'}`
})

</script>