<template>
  <div class="appContainer">
    <h2>信息是: {{ name }} - {{ age }}</h2>
    <button @click="age++">更改age</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup() {
    const info = reactive({
      name: 'kobe',
      age: 18
    })
    // 这样直接解构的数据,就不是响应式数据了
    // const {name, age} = info

    // 如果想保持响应式数据,需要用到toRefs
    // const {name, age} = toRefs(info)
    
    // 如果想解构某一个数据,让其保持响应性,用toRef
    const age = toRef(info, 'age')

    return {
      name, 
      age,
    }
  }
}
</script>

<style scoped>
</style>