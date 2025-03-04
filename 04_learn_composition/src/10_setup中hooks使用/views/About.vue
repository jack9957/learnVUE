<template>
  <div class="app">about计数:{{ counter }}</div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import useCounter from '../hooks/useCounter';
export default {
  setup() {
    const {counter, increment, decrement} = useCounter()
    return {
      counter,
      increment,
      decrement
    }
  }
}
</script>

<style scoped>
</style>
