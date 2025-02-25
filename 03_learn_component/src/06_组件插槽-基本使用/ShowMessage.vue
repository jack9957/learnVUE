<template>
  <div class="app">
    <h2>{{ title }}</h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '我的默认标题'
    }
  }
}
</script>

<style scoped>
</style>
