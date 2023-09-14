<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>                 
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ numberOfNotes }}</td>
                </tr>
                <tr>
                        <td>Number of Character (of all notes)</td>
                        <td>{{ numberOfCharacters }}</td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes';

const storeNotes = useStoreNotes();

const numberOfNotes = storeNotes.totalNotesCount()
const numberOfCharacters = storeNotes.totalCharactersCount()

</script>