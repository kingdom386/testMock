<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
import { getMockData } from '@/fetch/api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '获取Mockjs数据（模拟请求后端接口）',
      userInfos: {}
    }
  },
  mounted () {
    this.userInfo()
  },
  methods: {
    userInfo () {
      getMockData().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    border: none
  }
</style>
