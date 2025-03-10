<template>
  <div class="app">
    首页计数: {{ $store.state.counter }}
    <hr>
    <Home></Home>
  </div>
</template>

<script setup>
import Home from './views/Home.vue';
</script>

<style scoped>
</style>
