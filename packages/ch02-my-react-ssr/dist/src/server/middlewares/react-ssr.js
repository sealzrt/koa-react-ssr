"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactServerMiddleware = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../../client/pages/index"));

var _server = require("react-dom/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /src/server/middlewares/react-ssr.js
//完成 react ssr 工作的中间件
//引入Index 组件
// export default (ctx, next) => {
//
//   const html = renderToString(<Index/>);
//
//   ctx.body = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>my react ssr</title>
// </head>
// <body>
//     <div id="root">
//        ${html} <span>测试内容</span>
//     </div>
// <script type="text/javascript"  src="index.js"></script>
// </body>
// </html>
// `;
//
//   return next();
// }
var reactServerMiddleware = function reactServerMiddleware(ctx, next) {
  var html = (0, _server.renderToString)(_react.default.createElement(_index.default, null));
  ctx.body = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>my react ssr</title>\n</head>\n<body>\n    <div id=\"root\">".concat(html, "</div>\n<script type=\"text/javascript\"  src=\"index.js\"></script>\n</body>\n</html>\n");
  return next();
};

exports.reactServerMiddleware = reactServerMiddleware;