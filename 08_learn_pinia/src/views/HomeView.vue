<template>
  <div class="app">
    <h2>Home View</h2>
    <h2>当前计数: {{ counterStore.counter }}</h2>
    <button @click="incrementClick">+1</button>
  </div>
</template>

<script setup>
import useCounter from '@/pinia/home';

const counterStore = useCounter()

function incrementClick() {
  counterStore.counter++
}

</script>

<style scoped>
</style>
