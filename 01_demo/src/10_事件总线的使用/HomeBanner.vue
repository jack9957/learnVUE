<template>
  <div class="app">
    我是{{ name }}, 今年{{ age }}岁. 信息是 {{ message }}
  </div>
</template>

<script>
export default {
  inject: ['name', 'age', 'message']
}
</script>

<style scoped>
</style>
