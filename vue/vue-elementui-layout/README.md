## babel  
js的语法编译器
class关键字  -> babel -> es5 的代码
里面有丰富的插件机制
vue 提供了 babel-plugin-transform-vue-jsx 负责将 template 编译为 js

```js
<el-row>
  <el-col>12</el-col>
</el-row>

h("el-row", [h("el-col", ["12"])]);
```
```js
<template>
  <div class="my-el-row">
    123
    <slot name="a"></slot>
  </div>
</template>
```