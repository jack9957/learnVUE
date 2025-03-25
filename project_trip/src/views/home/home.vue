<template>
  <div class="appContainer">
    <navBar></navBar>
    <div class="content">
      <h2>当前城市: {{ cityStore.currentCity.cityName }}</h2>
      <div @click="jumpToCityClick">jumpToCity</div>
      <div>
        <h2>热门推荐</h2>
        <div class="hotSuggest">
          <template v-for="(item, index) in hotSuggests" :key="index">
            <div class="cityName">{{ item.tagText.text }}</div>
          </template>
        </div>
        <h2>热门分类</h2>
        <div class="hotSuggest">
          <template v-for="(item, index) in hotCategory" :key="index">
            <div class="cityName">{{ item.title }}</div>
          </template>
        </div>
      </div>
      <template v-for="item in 100">
        <div>{{ item }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import navBar from "./components/nav-bar.vue";
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const router = useRouter()
const jumpToCityClick = () => {
  router.push('/city')
}

const cityStore = useCityStore()

const homeStore = useHomeStore()
homeStore.fetchHomeHotSuggestsData()
homeStore.fetchHomeHotCategoryData()
const { hotSuggests, hotCategory } = storeToRefs(homeStore)
console.log(hotSuggests)
console.log(hotCategory)

</script>

<style lang="less" scoped>
.appContainer {
  padding-bottom: 60px;
}

.hotSuggest {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  .cityName {
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    background-color: #fff4ec;
    margin: 10px 5px;
    text-align: center;
    padding: 3px 8px;
  }
}
</style>