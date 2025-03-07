<template>
  <div class="appContainer">
    <h2>App Content</h2>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/user/123">用户123</router-link>
      <router-link to="/user/456">用户456</router-link>
    </div>
    <div>
      <span @click="homeSpanClick">首页</span>
      <button @click="aboutBtnClick">关于</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function homeSpanClick() {
  router.push({
    path: '/home'
  })
}
function aboutBtnClick() {
  router.push({
    path: '/about',
    query: {
      name: 'jack',
      age: 18
    }
  })
}
</script>

<style scoped>
.router-link-active {
  color: red;
  font-size: 18px;
  line-height: 18px;
}
</style>