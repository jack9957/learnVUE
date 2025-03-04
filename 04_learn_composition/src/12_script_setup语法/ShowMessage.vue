<template>
  <div class="app">
    <h2>Message.{{ name }}--{{ age }}</h2>
    <button @click="btnClick">点击给父组件传值</button>
  </div>
</template>

<script setup>
// 这种形式下,默认定义了defineProps函数
defineProps({
  name: {
    type: String,
    default: "默认值",
  },
  age: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["showMessageBtnClick"]);

function btnClick() {
  emits("showMessageBtnClick", "传递的内容");
}
</script>

<style scoped></style>
