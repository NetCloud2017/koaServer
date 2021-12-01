const Koa  = require('koa');
const app = new Koa();
const router = require('koa-router')();
const static = require('koa-static');

// 黑名单ip  禁止访问；
const watcherIP = require('./watcherIP');
app.use(watcherIP(app));
// app.use( async (ctx, next) => {
//     console.log('add');
//    await next()
// })

router.post('/update', (ctx) => {
    console.log('123');
    ctx.body = '更新成功了'
})
app.use(router.routes())
app.use(async (ctx, next) => {
    next()
    if (ctx.path == '/login') {
        ctx.body = '登录成功'
    }
})

app.use(static(__dirname + '/staticPage'));

app.listen(8000);