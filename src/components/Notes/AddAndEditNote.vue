<template>
    <div class="card p-4 mb-5"
        :class="`has-background-${bgColor}-dark`"    
    >
        <div class="field">
            <div class="control">
                <label v-if="label" class="label has-text-white"  >{{ label }}</label>
                <textarea
                    v-model="modelValue"
                    @input="$emit('update:modelValue', modelValue)"
                    @change="modelValue = ''"
                    class="textarea"
                    :placeholder="placeholder"
                    ref="textareaRef"
                    v-autofocus
                    
                />
            </div>
            </div>
            <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {vAutofocus} from '@/directives/vAutofocus'

const modelValue = ref(props.modelValue)
const textareaRef = ref(null)

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholder: {
        type: String,
        default: 'Type a new note'
    },
    label: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['update:modelValue'])

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})



</script>