!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("koa2")},function(e,t){e.exports=require("koa-static")},function(e,t){e.exports={wdsPort:9002,nodeServerPort:9001,asyncComponentKey:"__IS_ASYNC_COMP_FLAG__"}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n(2),i=n(1);class s extends o.a.Component{constructor(e){super(e),console.log(this.props)}handlerClick(){alert("一起来玩 react 服务端渲染")}render(){return o.a.createElement("div",{onClick:this.handlerClick},"首页")}}class l extends o.a.Component{constructor(e){super(e)}render(){return o.a.createElement("div",null,o.a.createElement("span",null,"列表页"))}}class u extends o.a.Component{constructor(e){super(e)}render(){return o.a.createElement("div",null,o.a.createElement("span",null,"关于"))}}var p=[{path:"/",component:s,exact:!0},{path:"/index",component:s,exact:!0},{path:"/list",component:l,exact:!0},{path:"/about",component:u,exact:!0}];class d extends o.a.Component{constructor(e){super(e)}render(){return o.a.createElement("div",null,o.a.createElement(i.NavLink,{to:"/index",style:{marginLeft:"10px"}},"首页"),o.a.createElement(i.NavLink,{style:{marginLeft:"10px"},onClick:this.click,to:"/list"},"列表页"),o.a.createElement(i.NavLink,{to:"/about",style:{marginLeft:"10px"}},"关于"),this.props.children)}}var f=Object(c.withRouter)(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=function({routeList:e}){return o.a.createElement(f,null,o.a.createElement(i.Switch,null,e.map(e=>o.a.createElement(i.Route,m({exact:!0,key:e.path},e)))))},x=n(4),h=n.n(x),y=n(5),b=n.n(y),g=n(6);const E=n.n(g).a.nodeServerPort||process.env.PORT,O=new h.a;O.use(b()("./dist/static")),O.use((e,t)=>{console.log("ctx.request.path",e.request.path);const n=e.request.path;const r=Object(a.renderToString)(o.a.createElement(c.StaticRouter,{location:n,context:{}},o.a.createElement(v,{routeList:p})));return e.body=`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>my react ssr</title>\n</head>\n<body>\n    <div id="root">${r}</div>\n</body>\n</html>\n<script type="text/javascript"  src="/index.js"><\/script>\n`,t()}),O.listen(E,(function(){console.log("server is start .","http://localhost:"+E)}))}]);