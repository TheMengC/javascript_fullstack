<template>
  <div class="tab">
    <router-link to="/recommend" tag="div" class="tab-item">
      <img :src="tab.jd" class="image">
      <!-- <img src="" class="image"> -->
    </router-link>
    <router-link to="/singer" tag="div" class="tab-item">
      <img src="" class="image">
      <img src="" class="image">
    </router-link>
    <router-link to="/rank" tag="div" class="tab-item">
      <img src="" class="image">
      <img src="" class="image">
    </router-link>
    <router-link to="/search" tag="div" class="tab-item">
      <img src="" class="image">
      <img src="" class="image">
    </router-link>  
  </div>  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      tab: {
        jd: require("./../image/shouye-select.png")
      }
      // tab: [
      //   {
      //     jd: require("./../image/shouye-select.png"),
      //     unJd: require("../image/shouye.png")
      //   },
      //   {
      //     class: require("../image/class.png"),
      //     unClass: require("../image/class-select.png")
      //   },
      //   {
      //    unShop: require("../image/shop.png")
      //   },
      //   {
      //     unLogin: require("../image/unLogin.png")
      //   },
      //   {
      //     mine: require("../image/mine-select.png"),
      //     unMine: require("../image/mine.png")
      //   }
      // ]
    }
  },
  // created () {
  //   this.$http.get('http://rap2api.taobao.org/app/mock/240578/example/1577068073286')
  //   .then(res => {
  //     console.log(res)
  //   })
  // }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.tab{
  width: 100%;
  height: 2rem;
  display:flex;
}
.tab-item{
  flex: 1;
}
.image{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>