<template>
  <div class="appContain">
    <!-- 1. input的v-model. 以下的两种写法是同意义(v-model 默认帮我们做了两件事) -->
    <!-- <input type="text" v-model="message"> -->
    <!-- <input type="text" v-bind:value="message" @input="message = $event.target.value"> -->

    <!-- 2. 组件的v-model(默认名称 modelValue) -->
     <!-- <counter v-model="appCounter"></counter> -->
     <counter :model-value="appCounter" @update:model-value="appCounter = $event"></counter>
     
  </div>
</template>

<script>
import Counter from './Counter.vue';
export default {
  components: {
    Counter
  },
  data() {
    return {
      appCounter: 100,
    }
  }
}
</script>

<style scoped>
</style>
