import { watch } from 'vue'

export function useWatchCharacters(valueToWatch) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === 100) {
      alert('Note cannot be longer than 100 characters')
    }
  })
}
