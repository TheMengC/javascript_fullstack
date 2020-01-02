<template>
  <div class="tab">
    <router-link to="/recommend" tag="div" class="tab-item">
      <i class="image">{{tab.jd}}</i>
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
      tab: [
        {
          jd: require("../image/shouye-select.png"),
          unJd: require("../image/shouye-select.png")
        },
        {
          class: require("../image/shouye-select.png"),
          unClass: require("../image/shouye-select.png")
        },
        {
         unShop: require("../image/shouye-select.png")
        },
        {
          unLogin: require("../image/shouye-select.png")
        },
        {
          mine: require("../image/shouye-select.png"),
          unMine: require("../image/shouye-select.png")

        }
      ]
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
image{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>