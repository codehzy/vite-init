import { ref, watchEffect } from 'vue'

interface todoType {
  title: string
  done: boolean
}

export const useStorage = () => {
  let title = ref('')
  let todos = ref<Array<todoType>>(
    JSON.parse(localStorage.getItem('todos') || '[]')
  )

  watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  })

  return { title, todos }
}
