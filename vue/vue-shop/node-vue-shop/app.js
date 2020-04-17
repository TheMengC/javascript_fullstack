const Koa = require('koa')
const config = require('./config')

const app = new Koa()

const router = require('./routers/index')

app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is running at port ${config.port}`)
})