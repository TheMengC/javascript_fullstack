<template>
  <div class="child">
    <h3>兄弟组件1(监听兄弟组件2)</h3>
    <div>
      这是从父组件拿来的数据：{{title}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>

</style>