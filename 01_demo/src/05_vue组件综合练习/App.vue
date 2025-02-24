<template>
  <div class="app">
    <TabControl :titleArray="titleList" @clickTitle="selectTitle"></TabControl>
    <h2>{{ titleList[currentIndex] }}信息</h2>
  </div>
</template>

<script>
import TabControl from './components/TabControl.vue';
export default {
  components: {
    TabControl
  },
  data() {
    return {
      titleList: ['衣服','鞋子','裤子'],
      currentIndex: 0,
    }
  },
  methods: {
    selectTitle(e) {
      this.currentIndex = e
    },
  },
}
</script>

<style scoped>
</style>
