import { setTimeout } from 'core-js'
import {ref, onMounted} from 'vue'

export default function useCounter() {
  const counter = ref(0)
  function increment() {
    counter.value++
  }
  function decrement() {
    counter.value--
  }
  onMounted(()=>{
    setTimeout(()=>{
      counter.value = 100
    }, 1000)
  })
  return {
    counter,
    increment,
    decrement
  }
}