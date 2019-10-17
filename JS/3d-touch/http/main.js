var http = require('http'); // node 底层 核心库 
var fs = require('fs');
var path = require('path');
// console.log(http);
// web服务本质是  有n人来访问网站 request 
// 网站的开发者， 响应用户的请求 res 问答  
http.createServer(function(req, res) {
  console.log(req.url);
  if(req.url == '/images/sloth.png'){
    console.log('图片');
    res.writeHead(200, {'Content-type':'image/png'});
    let imgStream = fs.createReadStream(
      path.join(__dirname, 'sloth.png')
    );
    imgStream.pipe(res);
    return;
  }
//   res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
//   res.write("汪汪汪");
let fileStream = fs.createReadStream(path.join(__dirname,'index.html'));
fileStream.pipe(res);
}) //创建web服务
.listen(8080)