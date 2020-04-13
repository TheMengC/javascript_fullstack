<template>
  <div class="index">
    <div class="search">
      <div @click="map">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '南昌'
    }
  },
  methods: {
    map() {
      this.$router.push({path: '/map'})
    }
    
  }
}
</script>

<style lang="less" scoped>
@import './home.less';
</style>