## 渲染
```js
document.body.style.backgroundColor = 'red'
setTimeout(() => {
  document.body.style.backgroundColor = 'yellow'
}, 0);
```
-  先看到 red
   在看到 blue
   说明： 在 setTimeout  之前会发生一次  样式计算  浏览器并渲染它

