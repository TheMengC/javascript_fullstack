<template>
  <div class="tab">
    <router-link to="/recommend" tag="div" class="tab-item">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link to="/singer" tag="div" class="tab-item">
      <span class="tab-link">分类</span>
    </router-link>
    <router-link to="/rank" tag="div" class="tab-item">
      <span class="tab-link">购物车</span>
    </router-link>
    <router-link to="/search" tag="div" class="tab-item">
      <span class="tab-link">未登录</span>
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
          jd: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png',
          unJdUn: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png'
        },
        {
          class: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png',
          unClass: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png'
        },
        {
         unShop: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png'
        },
        {
          unLogin: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png'
        },
        {
          mine: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png',
          unMine: 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png'

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

<style>

</style>