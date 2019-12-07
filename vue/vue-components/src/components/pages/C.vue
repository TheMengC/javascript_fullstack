<template>
  <div class="c-test">Age:{{app.userInfo.age}}
    <!-- <button @click="changApp">change</button> -->
  </div>
</template>

<script>
export default {
inject: ['app'],
methods:{
  // changApp() {
  //   app.userInfo.age = 16
  // }
}
}
</script>

<style>

</style>