
// ip 黑名单
const blackListIP = [
    '192.0.162.21'
];

function watcherIP (app) {
    if (!app.proxy) {
        app.proxy = true;
    };
    let forbidden = false;
    return async function serve (ctx, next) {
        let ip =  ctx.request.ip, ips = ctx.request.ips;
        // 检测 是否有反向代理
        if ('X-Forwarded-For' in ctx.request.header) {
            forbidden = !!(ips.some(_ip => blackListIP.smoe(blackIP => blackIP === _ip)));
        } else {
            forbidden = !!(blackListIP.some(_ip => _ip === ip))
        }
        if (forbidden) {
            ctx.response.status = 403; // 只能发送默认的 message ;
            ctx.body = '您无权访问'
        } else {
            await next()
        }
    }

}

module.exports = watcherIP;
