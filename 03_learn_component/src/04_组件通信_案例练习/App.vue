<template>
  <div class="appContain">
    <tab-control :titleList="titleList" @clickItem="clickTabItem"></tab-control>
    <h2>{{ titleList[currentIndex].title }}</h2>
  </div>
</template>

<script>
import TabControl from './TabControl.vue';
export default {
  components: { TabControl },
  data() {
    return {
      titleList: [
        {'title':'衣服'},
        {'title':'裤子'},
        {'title':'鞋子'},
      ],
      currentIndex: 0,
    }
  },
  methods: {
    clickTabItem(index) {
      this.currentIndex = index
    },
  }
}
</script>

<style scoped>
</style>
