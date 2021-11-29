const Koa  = require('koa');
const app = new Koa();

const static = require('koa-static');

// 黑名单ip  禁止访问；
const watcherIP = require('./watcherIP');
app.use(watcherIP(app));
// app.use( async (ctx, next) => {
//     console.log('add');
//    await next()
// })

app.use(async (ctx, next) => {
    next()
    if (ctx.path == '/login') {
        ctx.body = '登录成功'
    }
})

app.use(static(__dirname + '/staticPage'));

app.listen(8000);