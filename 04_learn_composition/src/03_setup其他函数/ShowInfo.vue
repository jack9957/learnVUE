<template>
  <div class="appContainer">
    <h2>信息是: {{ showInfo }}</h2>

    <!-- 在vue组件中,可以直接修改父组件传递过来的响应式数据,但是不推荐这么做.因为不符合单项数据流规范 -->
    <button @click="showInfo.name = 'kobe'">修改name按钮1(不推荐)</button>
    <!-- 正确的做法应该是,子组件通知父组件,让父组件去修改 -->
    <button @click="changeInfoBtnClick">修改name按钮2(推荐)</button>
    <hr>
    <!-- 为了解决有人会违背单项数据流规范而随意修改,引入readonly -->
    <h2>只读信息是: {{ roShowInfo }}</h2>
    <button @click="roShowInfo.name = 'jamess'">修改name按钮1(不推荐)</button>
    <button @click="changeRoInfoBtnClick">修改name按钮2(推荐)</button>
  </div>
</template>

<script>
export default {
  props: {
    showInfo: {
      type: Object,
      default: () => ({})
    },
    roShowInfo: {
      type: Object,
      default: () => ({})
    },
  },
  emits: ['changeInfoClick', 'changeRoInfoClick'],
  setup(props, content) {
    function changeInfoBtnClick() {
      content.emit('changeInfoClick', 'kobe')
    }

    function changeRoInfoBtnClick() {
      content.emit('changeRoInfoClick', 'jamess')
    }

    return {
      changeInfoBtnClick,
      changeRoInfoBtnClick,
    }
  },
}
</script>

<style scoped>
</style>