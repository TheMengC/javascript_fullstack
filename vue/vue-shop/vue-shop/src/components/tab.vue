<template>
  <div>
    <div class="main-div app-view-wrapper">
      <router-view />
    </div>
    <van-tabbar v-model="active" @change="changeTabbar(active)" active-color="#b4282d" inactive-color="#666">
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
          normal: require('@/images/ic_menu_choice_nor.png'),
          active: require('@/images/ic_menu_choice_pressed.png')
        },
        {
          name: '专题',
          normal: require('@/images/ic_menu_topic_nor.png'),
          active: require('@/images/ic_menu_topic_pressed.png')
        },
        {
          name: '分类',
          normal: require('@/images/ic_menu_sort_nor.png'),
          active: require('@/images/ic_menu_sort_pressed.png')
        },
        {
          name: '购物车',
          normal: require('@/images/ic_menu_shoping_nor.png'),
          active: require('@/images/ic_menu_shoping_pressed.png')
        },
        {
          name: '我的',
          normal: require('@/images/ic_menu_me_nor.png'),
          active: require('@/images/ic_menu_me_pressed.png')
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
        this.$router.push({ name: 'Topic' })
        break
        case 2:
        this.$router.push({ name: 'Sort' })
        break
        case 3:
        this.$router.push({ name: 'ShopCart' })
        break
        case 4:
          this.$router.push({ name: 'User' })
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabbar-item {
  font-size: .5rem;
}
.main-div {
  position: relative;
  max-width: 64rem;
  margin: 0 auto;
}
</style>