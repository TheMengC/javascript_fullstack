## 
浏览器接收到 html 解析为 DOM
遇到 css 解析为 cssom
把 dom cssom 合在一起 生成一棵 渲染树
根据 样式 计算位置 开始渲染 布局

domContentloaded 就是当 html 解析完之后发生的

有一些标签 img link script 会 引入外部资源， 会在 解析完 html 之后， 开始请求资源