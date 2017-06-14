const 网站 = require('express')()
const 会话 = require('express-session')
const 解析器 = require("body-parser");
const 静态文件服务 = require('serve-static')
const 静态文件目录 = 静态文件服务('public' )
const 头盔 = require('helmet');

网站.set('view engine', 'pug')

网站.use(头盔());
网站.use(会话({
    secret: '美国圣地亚哥' + Math.random(),
    resave: true,
    saveUninitialized: true,
    cookie: {secure: true, maxAge: 87654321}
}))

网站.use(解析器.json({ type: 'application/json' }))
网站.use(解析器.urlencoded({ extended: false }));
网站.use(静态文件目录);

var 端口 = 4500
网站.listen(端口)
console.log('http://localhost:'+端口)
