<template>
  <div>
    <showInfo name="jack" age="18"></showInfo>
    <showInfo name="roce" age="16"></showInfo>
  </div>
</template>

<script>
import showInfo from './showInfo.vue';
export default {
  components: {
    showInfo,
  }
}
</script>

<style scoped>
</style>
