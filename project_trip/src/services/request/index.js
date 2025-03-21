import axios from "axios";
import { base_url, timeout } from "./config";

class JKRequest {
  constructor(base_url, timeout) {
    this.instance = axios.create({
      baseURL: base_url,
      timeout: timeout
    })

    this.instance.interceptors.response.use((response) => {
      if (response.status === 200) {
        return response.data
      }else{
        return Promise.reject(response)
      }
    },(error) => {
      return Promise.reject(error)
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(resolve).catch(reject)
    })
  }

  get(url, params={}) {
    return this.request({
      url: url,
      method: 'get',
      params: params,
    })
  }

  post(url, params={}) {
    return this.request({
      url: url,
      method: 'post',
      params: params,
    })
  }
}

export default new JKRequest(base_url, timeout)