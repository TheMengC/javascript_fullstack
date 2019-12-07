<template>
  <div class="a-test">
    AAAAAAAAAAAAAAAAA
    <testB></testB>
  </div>
</template>

<script>
import B from './B'
export default {
  provide:{
    name: '蜗牛'
  },
  components: {
    'testB': B
  },
  data() {
    return {
      // name: '蜗牛'
    }
  }
}
</script>

<style>

</style>