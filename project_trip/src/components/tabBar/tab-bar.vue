<template>
  <div class="appContainer">
    <template v-for="(item, index) in tabBarItems" :key="index">
      <div class="tabbar-item" :class="{active: currentIndex === index}" @click="tabBarItemclick(index)">
        {{ item.title }}
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import tabBarItems from '@/assets/data/tabbar'

const router = useRouter()
const currentIndex = ref(0)
function tabBarItemclick(index) {
  router.push(tabBarItems[index].path)
  currentIndex.value = index
}
</script>

<style lang="less" scoped>
.appContainer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background: #fff;
  display: flex;
  .tabbar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #f3f3f3;
    &.active {
      color: var(--primary-color);
    }
  }
}
</style>