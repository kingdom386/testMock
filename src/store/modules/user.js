const user = {
  state: {
    token: '',
    user: {}
  },
  mutation: {
    // 设置用户的token信息
    SET_USER_TOKEN (token) {
      this.state.token = token
      if (!window.localStorage.getItem('token')) {
        window.localStorage.setItem('token', token)
      }
    },
    GET_USER_TOKEN () {
      // 获取用户的token信息
    },
    // 设置用户其他的信息
    SET_USER_INFO (role) {
      this.user = role
    }
  }
}

export default user
