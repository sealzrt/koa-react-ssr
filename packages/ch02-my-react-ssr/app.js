//web 服务启动入口文件 放在根目录方便以后的部署

// const {reactServerMiddleware} = require('./dist/src/server/middlewares/react-ssr-01');
const reactServerMiddleware  = require('./dist/src/server/middlewares/react-ssr-02').default;
const Koa = require('koa2');
const koaStatic =require('koa-static');
const path = require('path');

const app = new Koa();


//设置可访问的静态资源
app.use(koaStatic(
        path.join(__dirname, './dist/static')
));

console.log( path.join(__dirname, './dist/static'));

//ssr 中间件
app.use(reactServerMiddleware);

//启动服务
app.listen(9001, function(){
  console.log('server start. 9001, http://localhost:9001');
});
