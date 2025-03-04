<template>
  <div class="app">
    <h2>我是ShowMessage</h2>
    <h2>姓名: {{ name }}, 年龄: {{ age }}</h2>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const name = inject('name')
    const age = inject('age')
    return {
      name,
      age
    }
  },
}
</script>

<style scoped>
</style>