## 静态资源
不会随着服务运行而改变的东西
html css js jpg png ...

请求的 url 和 文件在磁盘上的 路径 一一对应 起来
:8888/logo.png   ->  404   (没找到)
:8888/static/js/home.js  ->  read  -> res   (找到了)

比如:
nginx

file:///D:/javascript_fullstack/node/static-resource-server/index.html
浏览器双击打开
file 协议  ./  ../


放到服务器上面   http协议