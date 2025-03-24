<template>
  <div class="appContrain topPage">
    <div class="top">
      <van-search v-model="searchValue" show-action shape="round" placeholder="城市/区域/位置" @search="onSearch"
        @cancel="onCancel" />
      <van-tabs v-model:active="tabActive" color="#ff9852">
        <template v-for="(value, key, index) in allCities" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(item, index) in allCities[tabActive]?.cities" :key="index">
        <div>{{ item.group }}</div>
        <template v-for="(item, index) in item.cities" :key="index">
          <div>{{ item.cityName }}</div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';

const router = useRouter()

// 搜索栏
const searchValue = ref('')
const onSearch = (val) => {
  console.log('onsearch: ', val)
}
const onCancel = () => {
  router.back()
}

// 标签栏
const tabActive = ref('')

// const tabData = ref({})
// getCityAll().then((res) => {  
//   tabData.value = res.data
// }).catch((err) => {
//   console.log(err)
// })
// 从cityStore中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取选中标签后的城市group
const currentCityGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>