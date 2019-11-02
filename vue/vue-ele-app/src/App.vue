<template>
  <div id="app">
    <!-- 头部 -->
    <v-header :seller="seller"></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
          // this.seller = res.data.data
          // 数组合并用concat(), 对象合并用Object.assigin()
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style>

</style>
