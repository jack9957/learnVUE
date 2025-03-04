<template>
  <div class="app"></div>
  <ShowMessage :name="name" :age="18" @showMessageBtnClick="messageBtnClick">showMessage1</ShowMessage>
  <ShowMessage>showMessage1</ShowMessage>
  <ShowMessage>showMessage2</ShowMessage>
  <button @click="changeNameBtnClick">改变name</button>
</template>

<script setup>
import { ref } from 'vue'
import ShowMessage from './ShowMessage'

  const name = ref('jack')
  function changeNameBtnClick() {
    name.value = 'jamess'
  }

  function messageBtnClick(payload) {
     console.log('接受到子组件传值:',payload)
  }


</script>

<style scoped>
</style>
