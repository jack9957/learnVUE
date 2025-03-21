<template>
  <div class="appContainer">
    <navBar></navBar>
    <div @click="jumpToCityClick">jumpToCity</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import navBar from "./components/nav-bar.vue";

const router = useRouter()
const jumpToCityClick = () => {
  router.push('/city')
}
</script>

<style scoped>
</style>