 -live-server
  http服务
  http协议是web 的底层

  -node 内建http模块
  http.createServer((req, res) => {
      console.log(req.url);
  }).listen(1314)
  一直伺服

- http  fs  path  node 内置模块
 index.html
 sloth.png
 一切皆是资源  用 url 表示
 /                   index.html
 /images/sloth.png    sloth.png
 区别  req.url
 文件类型不一样   text/html     image/png
 res.writeHead(200, {'Content-Type':'text/html;charset = utf-8'})