<template>
  <div class="appContainer">
    <h2>{{ counter }}</h2>
    <button @click="incounter">+1</button>
    <button @click="decounter">-1</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import useCounter from './hooks/useCounter';
export default {
  setup() {
    // 方式1
    // const counter = ref(100)
    // const incounter = () => {
    //   counter.value++
    // }
    // const decounter = () => {
    //   counter.value--
    // }
    // return {counter, incounter, decounter}

    // 方式2
    // const {counter, incounter, decounter} = useCounter()
    // return {counter, incounter, decounter}

    // 方式3
    return {
      ...useCounter()
    }
  }
}
</script>

<style scoped>
</style>

