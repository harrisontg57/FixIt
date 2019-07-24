var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, X-http-method-override, content-type");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next(); // we need to call it to pass control for other handlers
});


var userService = require('./userService');
var db = require('./index');
var User = require('./users');
app.use('/users', userService);
app.use(express.json());

app.post("/users", function(req, res){
    console.log("Posting... ", req.body);
    db.query('INSERT INTO users_table(first_name, last_name, email, username, password) VALUES($firstname, $lastname, $email, $username, $password)',
    {$firstname: req.body.firstname, $lastname: req.body.lastname, $Email: req.body.email, $username: req.body.username, $password: req.body.password});
    res.send("post sent");
    
});

module.exports = app;