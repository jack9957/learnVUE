<template>
  <div class="appContainer">
    <h2>当前信息: {{ message }}</h2>
    <button @click="changeMessage">点击更改信息</button>
    <hr>
    <h2>当前账户{{ account.username }}, 密码是{{ account.password }}</h2>
    <button @click="changeAccount">点击更改账户</button>
    <hr>
    <h2>当前计数是{{ counter }}</h2>
    <button @click="changeCounter">点击更改计数</button>

    <hr>
    <h2>当前计数是{{ info.counter }}</h2>
    <button @click="info.counter++">点击更改计数</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    // 1.这种数据是静态的。不是响应式的，更改后，不能及时显示在页面上
    let message = "hello, world"
    const changeMessage = () => {
      message = "你好呀,未来"
      console.log(message)
    }

    // 2.需要被包裹后，才能变成响应式数据。（reactive只用来包裹复杂数据）
    const account = reactive({
      username: '李银河',
      password: '123456'
    })
    const changeAccount = () => {
      account.username = '李东北'
    }

    // 3. 简单的数据需要用ref包裹，变成响应数据
    const counter = ref(100)
    const changeCounter = () => {
      counter.value = 999
    }
    
    // 4. 针对ref浅层解包的测试
    const info = reactive({
      counter
    })
    return {
      message,
      changeMessage,
      account,
      changeAccount,
      counter,
      changeCounter,
      info,
    }
  }
}
</script>

<style scoped>
</style>