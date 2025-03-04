<template>
  <div class="app">
    <Home></Home>
    <hr>
    <about></about>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';
export default {
  components: {
    Home,
    About
  }
}
</script>

<style scoped>
</style>
