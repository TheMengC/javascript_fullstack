// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000, () => {
//   console.log('server is running')
// })

const Koa = require('koa')
const app = new Koa()

const main = ctx => {
  ctx.response.body = 'hello world'
}

app.use(main)

app.listen(3000)