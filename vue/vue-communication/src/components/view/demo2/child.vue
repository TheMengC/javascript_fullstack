<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接收到的数据是：</p>
    <div>
      string:<span class="red">{{sendMsg}}</span>
    </div>
    <div>
      number:<span class="red">{{sendNum}}</span>
    </div>
    <div>
      <ul class="red">
        <li v-for="item in sendObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sendMsg: {
      type: String,
      required: true
    },
    sendNum: {
      type: Number,
      required: false
    },
    sendObj: {
      //声明验证类型
      validator (val) {
        //判断数据是简单数据类型 还是复杂数据类型
        if (Object.prototype.toString.call(val) === '[object Array]' || 
            Object.prototype.toString.call(val) === '[object object]') {
              return true
        }
      }
    }
  }
}
</script>

<style>
.red{
  color: red;
}
</style>