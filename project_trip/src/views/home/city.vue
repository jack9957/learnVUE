<template>
  <div class="appContrain topPage">
    <van-search
    v-model="searchValue"
    show-action
    shape="round"
    placeholder="城市/区域/位置"
    @search="onSearch"
    @cancel="onCancel"
  />
  <van-tabs v-model:active="tabActive" color="#ff9852">
    <van-tab title="国内" @click-tab="onTabClick"></van-tab>
    <van-tab title="海外"></van-tab>
  </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getCityAll } from "@/services";

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
const tabActive = ref(0)
const onTabClick = () => {

}
const tabData = ref([])
getCityAll().then((res) => {
  console.log('城市的数据')
  console.log(res)
}).catch((err) => {
  console.log(err)
})


</script>

<style scoped>

</style>