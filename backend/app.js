require('babel-polyfill')
// import path from 'path'
const Koa = require('koa')
// import send from 'koa-send'
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const convert = require('koa-convert')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = new Koa()

// use native promise
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/react-redux-shop')
mongoose.connection.on('error', console.error.bind(console, '连接数据库失败'))

app.use(bodyParser())
/* 创建 application/x-www-form-urlencoded 编码解析 */

// session
app.keys = ['forever']
app.use(convert(session(app)))

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async (ctx, next) => {
  // await send(ctx, ctx.path, {})
  if (ctx.status === 404) {
    await next()
  }
})

routes(app)

app.listen(3000, '127.0.0.1')
