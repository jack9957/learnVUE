<template>
  <div class="app">
    <h2>Home View</h2>
    <h2>当前记数: {{ counterStore.counter }}</h2>
    <button @click="incrementClick">改变counter</button>
  </div>
</template>

<script setup>
import useCounter from '@/pinia/home';

const counterStore = useCounter()

function incrementClick() {
  counterStore.incrementNum(10)
}

</script>

<style scoped>
</style>
