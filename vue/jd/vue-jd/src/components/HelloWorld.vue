
<template>
  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      me: []
    }
  },
  created () {
    this.$http.get('http://rap2api.taobao.org/app/mock/240578/example/1577068073286')
    .then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>