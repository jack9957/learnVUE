<template>
  <div class="appContainer">
    <router-view></router-view>
    <!-- 隐藏底部tabBar,方式一,通过获取当前路由信息中hideTabBar属性实现 -->
    <!-- <tabBar v-if="!route.meta.hideTabBar"></tabBar> -->
    <!-- 隐藏底部tabBar,方式二,通过布局的方式实现,common.css文件中的topPage属性设置 -->
    <tabBar></tabBar>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import tabBar from "./components/tabBar/tab-bar.vue";
const route = useRoute()
</script>

<style scoped>
</style>