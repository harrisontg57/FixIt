var express = require('express');
const sqlite3 = require('sqlite3').verbose();
var app = express();
const passport = require('passport');
const session = require('express-session');

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, X-http-method-override");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next(); // we need to call it to pass control for other handlers
});

app.use(express.json());

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

require('./passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

var initDB = require('./db-init');

var server = app.listen(3000, function(){
  console.log("Start listening at port 3000");
  initDB((res) =>{
    console.log("DB init finished with following errors:");
    console.log(res);
  });
})