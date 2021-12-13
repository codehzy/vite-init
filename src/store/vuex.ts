import { createStore } from 'vuex'

interface Obj {
  count: number
}

const store = createStore({
  state() {
    return {
      count: 666,
    }
  },
  getters: {
    double(state: Obj) {
      return state.count * 2
    },
  },
  mutations: {
    add(state: Obj) {
      state.count++
    },
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    },
  },
})

export default store
