<template>
  <van-index-bar class="cityGroup" :sticky="false" :index-list="indexList">
    <van-index-anchor index="热门" />
    <div class="list">
      <template v-for="(city, index) in groupData?.hotCities" :key="index">
        <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
      </template>
    </div>
    <template v-for="(group, index1) in groupData?.cities" :key="index1">
      <van-index-anchor :index="group.group" />
      <template v-for="(city, index2) in group?.cities" :key="index2">
        <van-cell :title="city.cityName" @click="cityClick(city)" />
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { computed } from "vue";
import { useRouter } from "vue-router";

// 接受外界传值
const prop = defineProps({
  groupData: {
    type: Object,
    defalut: () => ({})
  }
})

// 监听groupData的变化
const indexList = computed(() => {
  const list = prop.groupData?.cities.map(item => item.group)
  list?.unshift('#')
  return list
})

const router = useRouter()
const cityStore = useCityStore()
// 监听点击事件
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}

</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  .city {
    width: calc((100% - 50px) * 0.25);
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    background-color: #fff4ec;
    margin: 10px 5px;
    text-align: center;
  }
}
</style>