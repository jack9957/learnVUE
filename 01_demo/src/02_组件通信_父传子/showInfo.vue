<template>
  <div>
    <h2>姓名: {{ name }}, 年龄: {{ age }}</h2>
  </div>
</template>

<script>
export default {
    /*
    1. 数组的写法
    弊端：1、不能对类型校验 2、没有默认值
    */ 
    // props: ["name", "age"],
    // 2. 对象写法
    props: {
        name: {
            type: String,
            default: '',
            required: true,
        },
        age: {
            type: String,
            default: '',
            required: true,
        }
    }
}
</script>

<style scoped>
</style>
