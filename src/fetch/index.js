import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store/index'
import qs from 'qs'

// 封装axios
const timeout = 8000
const baseUrl = '192.168.0.1/'

const server = axios.create({
  url: baseUrl,
  timeout: timeout
})

// 拦截器
server.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    Message({
      type: 'error',
      message: '请求出错！'
    })
    return Promise.reject(error)
  }
)

server.interceptors.response.use(
  res => {
    if (res.status === 200) {
      Message({
        type: 'success',
        message: '请求成功！！'
      })
      return res.data
    } else {
      Message({
        type: 'error',
        message: '请求出错！'
      })
    }
  },
  error => {
    Message({
      type: 'error',
      message: '请求出错！'
    })
    return Promise.reject(error)
  }
)

export default server
