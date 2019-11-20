<template>
  <div class="footer">
    footer
  </div>
</template>

<script>
import {open} from './notifiation.js'
export default {
  mounted () {
    setTimeout(() => {
      open({
        title: 'title1',
        content: 'content1'
      })
      open({
        title: 'title2',
        content: 'content2'
      })
    }, 3000);
  }
}
</script>

<style scoped>
.footer{
  position: fixed;
  bottom: 0;
}
</style>