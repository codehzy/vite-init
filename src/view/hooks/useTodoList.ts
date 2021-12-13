import { computed } from 'vue'
import { useStorage } from './useStorage'

export const useTodos = () => {
  const { title, todos } = useStorage()

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = ''
  }

  function clear() {
    todos.value = todos.value.filter((v) => !v.done)
  }

  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length
  })

  let all = computed(() => {
    return todos.value.length
  })

  let allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (value: boolean) {
      todos.value.forEach((todo) => {
        todo.done = value
      })
    },
  })

  return { title, todos, addTodo, clear, active, all, allDone }
}
