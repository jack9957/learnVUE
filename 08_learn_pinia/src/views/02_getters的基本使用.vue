<template>
  <div class="app">
    <h2>Home View</h2>
    <h2>doubleCounter: {{ counterStore.doubleCount }}</h2>
    <h2>doubleCounterAddOne: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>findFriendById: {{ counterStore.findFriendById(111) }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>
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
