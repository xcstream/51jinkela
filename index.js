const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require("body-parser");
const serveStatic = require('serve-static')
const static = serveStatic('public' )

app.set('view engine', 'pug')
var helmet = require('helmet');

app.use(helmet());
app.use(session({
    secret: 'www.51jinkela.com',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: true, maxAge: 87654321}
}))

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(static);

var port = 4500
app.listen(port)
console.log('http://localhost:'+port)
