<template>
  <div class="app">
    首页计数: {{ $store.state.counter }}
    <hr>
    <Home></Home>
    <hr>
    <button v-on:click="incrementClick">+1</button>
  </div>
</template>

<script setup>
import Home from './views/Home.vue';
import { useStore } from 'vuex'
const store = useStore()
function incrementClick() {
  store.commit('incrementCounter')
}
</script>

<style scoped>
</style>
