<template>
  <div class="app">
    <ShowMessage title="我是标题">
      <button>我的按钮</button>
    </ShowMessage>

    <ShowMessage title="我是标题">
      <a href="#">百度一下</a>
    </ShowMessage>

    <ShowMessage title="我是标题">
      <img src="@/img/zhang.jpg" alt="">
    </ShowMessage>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
export default {
  components: {
    ShowMessage
  },
}
</script>

<style scoped>
</style>
