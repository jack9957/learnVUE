<template>
  <div class="app">
    <div class="left">
      <slot name="left">left</slot>
    </div>

    <div class="center">
      <slot name="center">center</slot>
    </div>

    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.app {
  display: flex;
  height: 44px;
}
.left {
  width: 30%;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
  flex: 1;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  width: 30%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
