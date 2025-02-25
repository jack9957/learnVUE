<template>
  <div>当前计数: {{ counter }}</div>
  <AddCounter @addClickMethod="addClickMethod"></AddCounter>
  <sub-counter @subClickMethod="subClickMethod"></sub-counter>
  <sub-counter @subClickMethod="subClickMethod"></sub-counter>
</template>

<script>
import AddCounter from './AddCounter.vue';
import SubCounter from './SubCounter.vue';
export default {
  components: { AddCounter, SubCounter },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addClickMethod(e) {
      this.counter += e
    },
    subClickMethod(e) {
      this.counter -= e
    },
  }
}
</script>

<style scoped>
</style>
