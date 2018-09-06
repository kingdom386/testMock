import fetch from './index'

/**
 * @param param 请求传递的参数
 */
export function getMockData (data) {
  return fetch({
    url: '/userInfo',
    method: 'post',
    data
  })
}
