<template>
  <div class="appContainer">
    <router-view></router-view>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->
    app
    <tabBar></tabBar>
  </div>
</template>

<script setup>
import tabBar from "./components/tabBar/tab-bar.vue";
</script>

<style scoped>
</style>