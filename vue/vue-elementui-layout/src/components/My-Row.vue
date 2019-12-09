<script>
// render jsx
export default {
  //不用写在template
  render(h) {
    // return (
    //   <div class="my-el-row">
    //     123
    //     <slot></slot>
    //   </div>
    // )
    // 标签名 组件名
    // 标签上的属性 class style width
    // 子节点
    const tag = this.tag || 'div';

    return h(tag, {class: 'my-el-row'}, this.$slots.default)
  },
  props: {
    tag: String
  }
}
</script>

<style scoped>
.my-el-row{
  width: 100%;
}
</style>