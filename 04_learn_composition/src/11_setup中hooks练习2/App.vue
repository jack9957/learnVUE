<template>
  <div class="app">
    <button @click="currentPage = 'home'">首页btn</button>
    <button @click="currentPage = 'about'">关于btn</button>
    <component :is="currentPage"></component>
  </div>
</template>

<script>
import {ref} from 'vue'
import Home from './views/Home.vue';
import About from './views/About.vue';
export default {
  components: {
    Home,
    About
  },
  setup() {
    const currentPage = ref('home')
    return {
      currentPage
    }
  },
}
</script>

<style scoped>
</style>
