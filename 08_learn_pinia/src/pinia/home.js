import { defineStore } from 'pinia'

const useCounter = defineStore('counter', {
  state: () => ({
    counter: 100,
  })
})

export default useCounter