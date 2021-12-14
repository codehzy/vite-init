<template>
  <div>
    <transition name="modal">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">哥，你啥也没输入！</div>
      </div>
    </transition>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清空</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li v-for="todo in todos" :key="todo.title">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }"> {{ todo.title }}</span>
        </li>
      </transition-group>
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
    <Rate v-model="score" theme="blue">课程平分 </Rate>
    <Rate v-model="score" theme="red">工作评分</Rate>
    <Rate v-model="score" theme="green">习惯评分</Rate>
    <div>
      <div class="box" :style="{ width: width + 'px' }"></div>
      <div class="box1" :style="{ width: width + 'px' }"></div>
      <button @click="change">click</button>
    </div>
    <p></p>
    <div>
      <button @click="toggleTitle">vue3显示隐藏动画效果</button>
      <transition name="fade">
        <h3 v-if="showTitle">你好 Vue3</h3>
      </transition>
    </div>
    <vueFamilary />
    <Heading :level="3">hello h函数</Heading>
  </div>
</template>

<script setup>
import { useTodos } from './hooks/useTodoList'
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'
import Rate from './component/rate.vue'
import vueFamilary from './component/vueFamilary.vue'
import Heading from './component/Heading.tsx'

const { title, todos, addTodo, clear, active, all, allDone, showModal } =
  useTodos()
const { isFullscreen, enter, exit, toggle } = useFullscreen()

let count = ref(1)
let color = ref('red')
let score = ref(Math.random() * 5)
let width = ref(100)
let showTitle = ref(true)
function change() {
  width.value += 100
}

function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}

function update(num) {
  score.value = num
}

function toggleTitle() {
  showTitle.value = !showTitle.value
}
</script>

<style lang="scss" scoped>
h3 {
  color: v-bind(color);
}

.box {
  background: blueviolet;
  height: 10px;
  transition: width 1s linear;
}

.box1 {
  width: 10px;
  height: 10px;
  position: relative;
  background: #d88986;
  animation: move 2s linear infinite;
}

@keyframes move {
  0% {
    left: 0px;
  }
  50% {
    left: 100px;
  }
  100% {
    left: 0;
  }
}

.fade-enter-active,
.fade.enter-active {
  transition: opacity 2s linear;
}

.fade.enter-from,
.fade-enter-to {
  opacity: 0;
}

.info-wrapper {
  position: fixed;
  top: 0;
}
.info {
  color: white;
  background: #d88986;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}

.flip-list-move {
  transition: transform 2s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 2s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
