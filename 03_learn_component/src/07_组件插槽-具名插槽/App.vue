<template>
  <div class="app"></div>
  <!-- 具名插槽 -->
   <h2>具名插槽</h2>
  <NavBar>
    <template v-slot:left>
        <button>left</button>
    </template>
    <template v-slot:center>
      <a href="#">百度一下</a>
    </template>
    <template v-slot:right>
      <i>右边</i>
    </template>
  </NavBar>

  <!-- 动态插槽 -->
   <h2>动态插槽</h2>
   <NavBar>
    <template v-slot:[dynamicsSlot]>
      <button>注册按钮</button>
    </template>
   </NavBar>
   <button @click="dynamicsSlot = 'left'">left</button>
   <button @click="dynamicsSlot = 'center'">center</button>
   <button @click="dynamicsSlot = 'right'">right</button>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar
  },
  data() {
    return {
      dynamicsSlot: 'left'
    }
  }
}
</script>

<style scoped>
</style>
