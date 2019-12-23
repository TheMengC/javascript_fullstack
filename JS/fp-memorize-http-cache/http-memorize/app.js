var Koa = require('koa');
var Router = require('koa-router');
var koaStatic = require('koa-static');

var app = new Koa();
var router = new Router();

// app.use(koaStatic(__dirname))
// 把磁盘上的文件路径  映射为  网络url
// app1.js   localhost:8090/app1.js

router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body =( `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="app"></div>
      <script src="/app1.js"></script>
    </body>
    </html>
  `)
});
router.get('/app1.js', async (ctx) => {
  console.log('app1.js 请求')
  const fs = require('fs')
  const content = fs.readFileSync('./app1.js', 'utf-8')
  const time = Date.now() + 1000 * 30 // 30s
  ctx.set('cache-control', 'public, max-age=30') //30s a-> serverA -> serverB
  ctx.body = content
})
app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen(8090, () => {
    console.log('8090 server is running')
  })
