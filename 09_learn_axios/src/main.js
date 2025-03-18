import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import hyRequest from './service'

createApp(App).mount('#app')

// axios.request({
//   url: 'https://crjn-smartpos-test.xlpayment.com:7443/pos-api/gyq/adv/list?location=banner'
// }).then(res => {
//   console.log('=====')
//   console.log(res)
// })

// axios.request({
//   url: 'https://crjn-smartpos-test.xlpayment.com:7443/pos-api/gyq/user/info',
//   headers: {
//     token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDIyODk5MTksInVzZXJfaWQiOjEwMDAwfQ.vG9fsrc7102GJVmDq0ay-V5W56KbHRh28LSHEeV75Ps'
//   },
//   method: 'post'
// }).then(res => {
//   console.log('=====')
//   console.log(res)
// })

// all的用法
// axios.all([
//   axios.get('https://crjn-smartpos-test.xlpayment.com:7443/pos-api/gyq/adv/list', {
//     params: {
//       location: 'banner'
//     }
//   }),
//   axios.get('https://crjn-smartpos-test.xlpayment.com:7443/pos-api/gyq/adv/list', {
//     params: {
//       location: 'banner'
//     }
//   })
// ]).then(res => {
//   // 这里的res是数组,顺序对应上面的网络请求结果
//   console.log(res)
// })

// 创建axios实例,进行网络请求,这样更加灵活可配
// const instance = axios.create()
// // 进行基本配置
// instance.defaults.baseURL = ''
// instance.defaults.timeout = 10000
// instance.request({
//   url: '',
//   method: 'get',
//   params: {}
// })

// 通过拦截器进行拦截
// instance.interceptors.request.use((config) => {
//   console.log('请求成功的话,会走这里的拦截')
//   // 可以在这里设置header等情况
// }, () => {
//   console.log('请求失败的话,会走这里的拦截')
// })

// instance.interceptors.response.use(() => {
//   console.log('响应成功的话,会走这里的拦截')
//   // 可以在这里先对服务器数据基本处理
// }, () => {
//   console.log('响应失败的话,会走这里的拦截')
// })

hyRequest.get({
  url: '/pos-api/gyq/adv/list',
  params: {
    location: 'banner'
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})