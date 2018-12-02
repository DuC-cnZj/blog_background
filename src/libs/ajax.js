import axios from 'axios'
import router from '../router'
import { getToken, setToken } from '@/libs/util'

// 创建实例时设置配置的默认值
var instance = axios.create({
  baseURL: process.env.VUE_APP_URL
})

// 在实例已创建后修改默认值
// instance.defaults.headers.common['Authorization'] = getToken() || ''

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = getToken() || ''
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    console.log(error)

    if (error.response) {
      if (error.response.status === 401) {
        if (router.currentRoute.name !== 'login') {
          if (getToken() !== '' || getToken() !== undefined) {
            Message.error('登陆过期请重新登陆！')
          }
          setToken('')
          router.push({
            name: 'login'
          })
        }
      }
    } else {
      if (error.message === 'Network Error') {
        Message.error('请检查网络是否通畅')
      }
    }

    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance