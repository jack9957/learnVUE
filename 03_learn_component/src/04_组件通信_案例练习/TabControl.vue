<template>
  <div class="appContain">
    <template>
      <div class="tabItem" v-for="(item, index) in titleList" :key="item" @click="clickItem(index)"></div>
    </template>
  </div>
</template>

<script>
  export default {
    emits: ["clickItem"],
    props: {
      titleList: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      clickItem(index) {
        this.currentIndex = index
      },
    },
  }
</script>

<style scoped>
.appContain {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.appContain {
  text-align: center;
}
</style>
