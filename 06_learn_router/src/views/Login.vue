<template>
  <div class="appContainer">
    <h2>登录页面</h2>
    <button @click="loginBtnClick">点击登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function loginBtnClick() {
  localStorage.setItem('token', 'coderJack')
  router.push({
    path: '/order'
  })
}
</script>

<style scoped>
</style>