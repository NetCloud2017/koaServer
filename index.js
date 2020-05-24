const Koa  = require('koa');
const app = new Koa();

const static = require('koa-static');

// app.use(async ctx => {
//     ctx.body = 'Helllo World'
// })
// app.use( async (ctx, next) => {
//     console.log('add');
//    await next()
// })


app.use(static(__dirname + '/staticPage'));

app.listen(8000);