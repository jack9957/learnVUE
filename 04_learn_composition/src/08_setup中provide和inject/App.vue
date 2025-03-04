<template>
  <div class="app"></div>
  <ShowMessage></ShowMessage>
  <button @click="name = 'kobe'">点击更改姓名</button>
</template>

<script>
import { ref, provide } from 'vue'
import ShowMessage from './ShowMessage.vue';

export default {
  components: {
    ShowMessage
  },
  setup() {
    const name = ref('jack')
    provide('name', name)
    provide('age', 18)

    return {
      name
    }
  },
}

</script>

<style scoped>
</style>
