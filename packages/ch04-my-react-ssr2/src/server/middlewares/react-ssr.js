// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import routeList from '../../client/router/route-config';
import App from '../../client/router/index';

export default (ctx, next) => {

  console.log('ctx.request.path', ctx.request.path);

  const path = ctx.request.path;

  let context = {};

  const html = renderToString(<StaticRouter location={path} context={context}>
    <App routeList={routeList}></App>
  </StaticRouter>);

  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">${html}</div>
</body>
</html>
<script type="text/javascript"  src="/index.js"></script>
`;

  return next();
}
