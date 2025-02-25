<template>
  <div>
    <button @click="addClick(1)">+1</button>
    <button @click="addClick(5)">+5</button>
    <button @click="addClick(10)">+10</button>
  </div>
</template>

<script>
export default {
  methods: {
    addClick(e) {
      /*
      1、第一个参数是绑定的事件名称
      2、第二个参数是传递的参数
      */ 
      this.$emit("addClickMethod", e)
    }
  }
}
</script>

<style scoped>
</style>
