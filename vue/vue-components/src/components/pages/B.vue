<template>
  <div class="b-test">
    B{{name}}
    <div>
      <testC></testC>
    </div>
  </div>
</template>

<script>
import C from './C'
export default {
  inject: ['name'],
  components: {
    'testC': C
  },
  mounted() {
    console.log(this.name)
  }
}
</script>

<style>

</style>