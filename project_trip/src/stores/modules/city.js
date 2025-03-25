import { getCityAll } from "@/services";
import { defineStore } from "pinia";

const useCityStore = defineStore('city', {
  state: () => ({
    // 网络请求的所有城市数据
    allCities: {},
    // 当前选中的城市对象
    currentCity: {},
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore