<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清空</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选
      <input type="checkbox" v-model="allDone" />
      {{ active }} / {{ all }}
    </div>
    <div>
      css引用js变量，变色
      <h3 @click="add">{{ count }}</h3>
    </div>
    <div>
      <h3 @click="toggle">点击切换全屏</h3>
    </div>
  </div>
</template>

<script setup>
import { useTodos } from './hooks/useTodoList'
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'
const { title, todos, addTodo, clear, active, all, allDone } = useTodos()
const { isFullscreen, enter, exit, toggle } = useFullscreen()

let count = ref(1)
let color = ref('red')

function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}
</script>

<style lang="scss" scoped>
h3 {
  color: v-bind(color);
}
</style>
