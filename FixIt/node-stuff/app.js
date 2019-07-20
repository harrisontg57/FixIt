var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, X-http-method-override");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next(); // we need to call it to pass control for other handlers
  });

var userService = require('./userService');
app.use('/users', userService);

module.exports = app;