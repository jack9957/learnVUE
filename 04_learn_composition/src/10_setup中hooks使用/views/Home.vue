<template>
  <div class="app">home计数:{{ counter }}</div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import useCounter from '../hooks/useCounter';
export default {
  setup() {
    return {
      ...useCounter()
    }
  }
}
</script>

<style scoped>
</style>
