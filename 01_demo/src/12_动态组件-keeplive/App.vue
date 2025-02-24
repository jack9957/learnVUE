<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="index">
        <button :class="{ active: item === currentTab }" @click="clickTab(item)">{{ item }}</button>
      </template>
    </div>

    <div class="view">
      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import home from './Views/home.vue';
import About from './Views/About.vue';
import Category from './Views/Category.vue';

export default {
  components: {
    home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      currentTab: 'home',
    }
  },
  methods: {
    clickTab(item) {
      this.currentTab = item
    }
  },
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
