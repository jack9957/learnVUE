import axios from "axios"
/**
 * 把axios简单封装下,方便使用
*/

class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({...config, method: 'get'})
  }

  post(config) {
    return this.request({...config, method: 'post'})
  }
}

export default new HYRequest('https://crjn-smartpos-test.xlpayment.com:7443')