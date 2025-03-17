import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')

// axios.request({
//   url: 'https://crjn-smartpos-test.xlpayment.com:7443/pos-api/gyq/adv/list?location=banner'
// }).then(res => {
//   console.log('=====')
//   console.log(res)
// })

axios.request({
  url: 'https://crjn-smartpos-test.xlpayment.com:7443/pos-api/gyq/user/info',
  headers: {
    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDIyODk5MTksInVzZXJfaWQiOjEwMDAwfQ.vG9fsrc7102GJVmDq0ay-V5W56KbHRh28LSHEeV75Ps'
  },
  method: 'post'
}).then(res => {
  console.log('=====')
  console.log(res)
})