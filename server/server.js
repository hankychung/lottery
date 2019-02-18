const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const path = require('path')
const views = require('koa-views')

const app = new Koa()
const router = new Router()
const staticRouter = new Router()
app.use(async (ctx, next) => {
  console.log(ctx.path)
  await next()
})



app.use(views(path.resolve(__dirname, '../www/dist'), {extension: 'html'}))


router.all(/\.js$/, static(path.resolve(__dirname, '../www/dist')))
staticRouter.all('*', async (ctx, next) => {
  await ctx.render('index') //注意要加await
  await next()
})



router.use('/lottery', staticRouter.routes())
app.use(router.routes())


app.listen('8888')

console.log('listening')