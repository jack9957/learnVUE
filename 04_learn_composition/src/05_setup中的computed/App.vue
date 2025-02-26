<template>
  <div class="appContainer">
    <h2>{{ fullName }}</h2>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  setup() {
    const names = reactive({
      firstName: 'kobe',
      lastName: 'jamess',
    })
    // 定义个names,使用的时候返回一个全名
    const fullName = computed(() => {
      return names.firstName + " " + names.lastName
    })
    // 在computed中写箭头函数,相当于重写它的get方法

    return {
      fullName
    }
  }
}
</script>

<style scoped>
</style>