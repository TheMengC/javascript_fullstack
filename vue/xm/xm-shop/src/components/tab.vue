<template>
  <div>
    <div class="main-div app-view-wrapper">
      <router-view />
    </div>
    <van-tabbar v-model="active" @change="changeTabbar(active)" active-color="#ff6700" inactive-color="#000">
      <van-tabbar-item v-for="(item,index) in icon" :key="index">
        <span>{{item.name}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      nowPath: '', //当前路径
      icon: [
        {
          name: '首页',
          normal: require('@/assets/img/home.png'),
          active: require('@/assets/img/home_xs.png')
        },
        {
          name: '分类',
          normal: require('@/assets/img/category.png'),
          active: require('@/assets/img/category_xs.png')
        },
        {
          name: '购物车',
          normal: require('@/assets/img/cart.png'),
          active: require('@/assets/img/cart_xs.png')
        },
        {
          name: '我的',
          normal: require('@/assets/img/user.png'),
          active: require('@/assets/img/user_xs.png')
        }
      ]
    }
  },
  created() {},
  methods: {
    changeTabBarActive() {
      this.nowPath = this.$route.path
      if (this.nowPath == '/cart') {
        this.active = 2
      }
    },
    changeTabbar(active) {
      switch (active) {
        case 0:
          this.$router.push({ name: 'Home' })
          break
        case 1:
        this.$router.push({ name: 'Class' })
        break
        case 2:
        this.$router.push({ name: 'ShopCart' })
        break
        case 3:
          this.$router.push({ name: 'User' })
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabbar-item {
  font-size: 1rem;
}
.main-div {
  position: relative;
  max-width: 32rem;
  margin: 0 auto;
}
</style>