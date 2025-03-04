<template>
  <div class="app">home计数</div>
  <button @click="hotClick">首页-热门</button>
  <button @click="popularClick">首页-流行</button>
  <button @click="songClick">首页-歌曲</button>
</template>

<script>
import useTitle from '../hooks/useTitle';
export default {
  setup() {
    const title = useTitle('首页')
    
    function hotClick() {
      title.value = '首页-热门'
    }
    function popularClick() {
      title.value = '首页-流行'
    }
    function songClick() {
      title.value = '首页-歌曲'
    }
    return {
      hotClick,
      popularClick,
      songClick
    }
  }
}
</script>

<style scoped>
</style>
