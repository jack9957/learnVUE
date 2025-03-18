import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      counter: 100
    }
  },
  mutations: {
    incrementCounter(state) {
      state.counter++
    }
  },
  actions: {

  },
  modules: {
    
  }
})

export default store