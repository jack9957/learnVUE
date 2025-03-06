<template>
  <div class="appContainer">
    <h2>home</h2>
    <h2>==========</h2>
    <h2>路由的嵌套使用</h2>
    <router-link to="/home/menu">菜单</router-link>
    <router-link to="/home/song">歌单</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
</style>