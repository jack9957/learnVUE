<template>
  <div class="appContain">
    <h2>{{ modelValue }}</h2>
    <button @click="changeCounter">改变当前计数</button>
  </div>
</template>

<script>
  export default {
    emits: ['update:modelValue'],
    props: {
      modelValue: {
        type: Number,
        default: 0,
      }
    },
    methods: {
      changeCounter() {
        this.$emit('update:modelValue', 999)
      }
    }
  }
</script>

<style scoped>
</style>
