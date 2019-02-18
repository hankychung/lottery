const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const path = require('path')
const views = require('koa-views')

const app = new Koa()
const router = new Router({
  prefix: '/lottery'
})
app.use(router.routes())
app.use(views(path.resolve(__dirname, '../www/dist'), {extension: 'html'}))


router.all('*', ctx => {
  ctx.render('index')
})


app.listen('8888')

console.log('listening')