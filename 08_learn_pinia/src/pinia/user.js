import { defineStore } from 'pinia'

const useUser = defineStore('user', {
  state: () => ({
    name: 'jake',
    age: 18
  })
})

export default useUser