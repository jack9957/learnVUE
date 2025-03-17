import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore('counter', {
  state: () => ({
    counter: 100,
    friends: [
      {id: 111, name: 'kobe'},
      {id: 112, name: 'jamles'},
      {id: 113, name: 'jack'},
    ]
  }),
  getters: {
    // 1.基本使用
    doubleCount(state) {
      return state.counter*2
    },

    // 2.获取getters中的其他数据
    doubleCountAddOne(state) {
      return this.doubleCount + 1
    },

    // 3.接受参数的,返回函数的getter
    findFriendById(state) {
      return function(id) {
        return state.friends.find(e=>e.id===id)
      }
    },

    // 4.获取其他store
    showMessage(state) {
      const userStore = useUser()
      return `${userStore.name}` + state.counter
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    incrementNum(num) {
      this.counter += num
    },
    // 模拟网络请求
    async fetchHomeMutilDataAction() {
      // 通过async和await的方式,写法更加简洁
      const res = await fetch("输入一个网络请求的路径")
      const data = await res.json()
    }, 
  },
})

export default useCounter