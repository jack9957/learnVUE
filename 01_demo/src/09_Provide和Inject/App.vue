<template>
  <div class="app">
    <Home></Home>
  </div>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
export default {
  components: {
    Home,
  },
  data() {
    return {
      message: 'hello app'
    }
  },
  // 可以这么写
  // provide: {
  //   name: 'jack',
  //   age: 18,
  // },
  // 不过,一般都是写成函数形式
  provide() {
    return {
      name: 'jack',
      age: 18,
      message: computed(() => {
        // 写成函数形式,才能访问到this
        return this.message
      })
    }
  }
}
</script>

<style scoped>
</style>
