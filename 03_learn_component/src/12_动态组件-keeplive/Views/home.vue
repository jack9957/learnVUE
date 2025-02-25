<template>
  <div class="app">home组件</div>
  <h2>当前计数 {{ currentIndex }}</h2>
  <button @click="currentIndex++">+1</button>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
    }
  },
  created() {
    console.log('home create')
  },
  unmounted() {
    console.log('home unmounted')
  }
}
</script>

<style scoped>
</style>
