<template>
  <div class="appContainer">
    <h2 ref="titleRef">标题</h2>
    <button ref="buttonRef">按钮</button>

    <showInfo ref="showInfoRef"></showInfo>
    <button @click="btnClick">打印showInfo</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo
  },
  setup() {
    const titleRef = ref()
    const buttonRef = ref()
    // 在vue3中,通过引入的方式,拿到组件的声明周期
    onMounted(() => {
      console.log(titleRef.value)
      console.log(buttonRef.value)
    })

    const showInfoRef = ref()
    function btnClick() {
      showInfoRef.value.showInfo()
    }
    return {
      titleRef,
      buttonRef,
      btnClick,
    }
  }
}
</script>

<style scoped>
</style>