<template>
  <div class="home">
    <div class="header">
      <div class="header-wrapper">
        <div>
          <img :src="logo" alt="">
        </div>
        <div>
          <input type="text" placeholder="搜索商品名称">
          <span class="search"></span>
        </div>
        <div>
          <img :src="user" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('@/assets/img/logo.png'),
      user: require('@/assets/img/user.png'),
    }
  }
}
</script>

<style lang="less" scoped>
@import './home.less';
</style>