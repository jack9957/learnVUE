<template>
  <div class="appContainer">
    <h2>ShowInfo</h2>
  </div>
</template>

<script>
export default {
  setup() {
    function showInfo() {
      console.log('show info message')
    }
    return {
      showInfo
    }
  }
}
</script>

<style scoped>
</style>