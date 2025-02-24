<template>
  <div>
    <button @click="subClick(1)">-1</button>
    <button @click="subClick(5)">-5</button>
    <button @click="subClick(10)">-10</button>
  </div>
</template>

<script>
export default {
  emits: ["subClickMethod"],
  methods: {
    subClick(e) {
      this.$emit("subClickMethod", e)
    }
  }
}
</script>

<style scoped>
</style>
