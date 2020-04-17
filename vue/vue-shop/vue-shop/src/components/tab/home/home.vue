<template>
  <div class="index">
    <!-- 头部搜索 -->
    <div class="search">
      <div @click="map">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
    <!-- 轮播图 -->
  </div>
</template>

<script>
import { get } from '../../../utils/index'
export default {
  data() {
    return {
      cityName: '南昌'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    map() {
      this.$router.push({path: '/map'})
    },
    async getData () {
      const data = await get('/index/index')  //http://localhost:3000/shop/index/index
      console.log(data)
    }
    
  }
}
</script>

<style lang="less" scoped>
@import './home.less';
</style>