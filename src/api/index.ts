import axios, { AxiosRequestConfig } from 'axios'
import store from '@/store/vuex'
import { getToken } from './auth'
// import { Message } from 'element3'
import { useMessage } from 'naive-ui'

const service = axios.create({
  baseURL: '/', // url = base url + request url
  timeout: 5000, // request timeout
})

service.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = getToken()
    if (token) {
      // For reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
      // @ts-ignore
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.log(error, 'Have Error') // for debug`
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    // Invalid token
    const message = useMessage()

    function createMessage() {
      message.info("I don't know why nobody told you how to unfold your love", {
        duration: 5000,
      })
    }

    if (res.code === 401) {
      createMessage()
      return Promise.reject(new Error(res.data || 'Error'))
    }
    if (res.code !== 20000) {
      console.log('接口信息报错', res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('接口信息报错' + error)
    return Promise.reject(error)
  }
)

export default service
