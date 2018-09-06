// 引入mockjs
import Mock from 'mockjs'
// 登录的用户信息
const userInfos = {
  'list|1-20': [{
    'id|+1': 1,
    'name|1': ['John', 'David', 'Smith', 'Jack']
  }]
}

Mock.mock(/\/userInfo/, 'post', userInfos)
