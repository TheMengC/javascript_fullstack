const Koa = require('koa')
const KoaStatic = require('koa-static')
const Router = require('Koa-router')
const app = new Koa()
var router = new Router()

app.use(KoaStatic(__dirname + '/static'))
let sessionTable = {}
router.get('/login', (ctx, next) => {
  // ctx.router available
  // 后端 通过 Set-Cookie
  // 验证通过 存住用户的登录状态 session
  sessionTable = {
    sessionId: 0001,
    uid: 001,
    islogin: true
  }
  ctx.cookies.set('islogin', true, {
    maxAge: 1000 * 60
  })
  ctx.body = {code: 0}
});
router.get('/islogin', async (ctx) => {
  const sid = ctx.cookies.get('sessionId')
  const session = sessionTable.find(s => s.sessionId == sid)
  if(session) {
    const uid = sessionTable.uid;
    ctx.body = {
      code: 0,
      uid
    } 
  }else {
      ctx.body = {
        code: 1,
        msg: '未登录'
      }
  }
}) 

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('8080 server is running')
})