<template>
  <div class="header">
    header
    <Notification :visiable="visiable" title="通知" content="放假了"/>
  </div>
</template>

<script>
import Notification from './Notification'
export default {
  data () {
    return {
      visiable:true
    }
  },
  mounted () {
    setTimeout(() => {
      this.visiable = false
    }, 3000);
  },
  components: {
    Notification
  }
}
</script>

<style scoped>
.header{
  position: fixed;
  top: 0;
}
</style>