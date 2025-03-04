<template>
  <div class="app"></div>
  <h2>当前姓名是{{ name }}</h2>
  <button @click="name='kobe'">点击更改姓名</button>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  setup() {
    const name = ref('jack')

    watch(name, (newValue, oldValue)=>{
      console.log(newValue)
      console.log(oldValue)
    })

    return {
      name
    }
  },
}
</script>

<style scoped>
</style>
