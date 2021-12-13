<template>
  <button @click="add">更新vuex中count的数据</button>
  <div>{{ count }}</div>
  <div>翻倍vuex中的count：{{ double }}</div>
  <button @click="asyncAdd">asyncAddAction</button>
  <div>派发action来延迟一秒更新store中的count：{{ count * 2 }}</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)

function add() {
  store.commit('add')
}

function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>

<style lang="scss" scoped></style>
