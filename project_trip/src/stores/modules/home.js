import { getHomeHotCategory, getHomeHotSuggests } from '@/services'
import { defineStore } from "pinia";

const useHomeStore = defineStore('home', {
  state: () => ({
    // 热门推荐的标签数据
    hotSuggests: [],
    // 热门分类的数据
    hotCategory: [],
  }),
  actions: {
    async fetchHomeHotSuggestsData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchHomeHotCategoryData() {
      const res = await getHomeHotCategory()
      this.hotCategory = res.data
    },
  }
})

export default useHomeStore