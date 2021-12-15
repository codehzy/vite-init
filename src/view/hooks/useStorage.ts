import { ref, watchEffect } from 'vue'

interface todoType {
  title: string
  done: boolean
}

export const useStorage = () => {
  let title = ref('')
  let nice = ref('nice')
  let todos = ref<todoType[]>(JSON.parse(localStorage.getItem('todos') || '[]'))

  watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
    localStorage.setItem('Token', JSON.stringify(nice))
  })

  return { title, todos, nice }
}
