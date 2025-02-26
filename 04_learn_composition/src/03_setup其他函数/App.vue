<template>
  <div class="appContainer">
    <ShowInfo :showInfo="info" :roShowInfo="roInfo" @changeInfoClick="changeInfoClick"
      @changeRoInfoClick="changeRoInfoClick">
    </ShowInfo>
  </div>
</template>

<script>
import { reactive, readonly } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
  setup() {
    const info = reactive({ name: 'jack', age: '18' })
    function changeInfoClick(e) {
      info.name = e
    }

    // readonly修饰的对象,是不允许被修改的. roInfo不能被修改,但是info可以被修改
    // 当info被修改了,roInfo也会被修改
    const roInfo = readonly(info)
    function changeRoInfoClick(e) {
      info.name = e
    }
    return {
      info,
      changeInfoClick,
      roInfo,
      changeRoInfoClick,
    }
  }
}
</script>

<style scoped>
</style>