const sidebar = [
  {
    text: "Node基础",
    collapsable: false,
    children: ["/guide/简介.md", "/guide/Stream.md"],
  },
  {
    text: "Koa框架",
    collapsable: false,
    children: [
      "/guide/Koa框架/01-简介.md",
      "/guide/Koa框架/02-路由.md",
      "/guide/Koa框架/03-请求数据获取.md",
      "/guide/Koa框架/04-静态资源加载.md",
      "/guide/Koa框架/05-跨域中间件.md",
      "/guide/Koa框架/06-数据库操作.md",
      "/guide/Koa框架/07-模板引擎.md",
      "/guide/Koa框架/08-文件上传.md",
      "/guide/Koa框架/09-JWT鉴权.md",
    ],
  },
];

module.exports = sidebar;
