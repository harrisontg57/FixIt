var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, X-http-method-override, content-type");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next(); // we need to call it to pass control for other handlers
});


var userService = require('./userService');
var mapService = require('./mapService');
var chatService = require('./chatService');
var db = require('./index');
var User = require('./users');
var Pin = require('./pins');
var Chat = require('./chats');
//app.use('/', routes);
app.use('/users', userService);
app.use('/pins', mapService);
app.use('/chats', chatService);
//app.use('/', mapService);
app.use(express.json());

app.post("/users", function(req, res){
    console.log("Posting... ", req.body);
    db.query('INSERT INTO users_table(first_name, last_name, email, username, password) VALUES($firstname, $lastname, $email, $username, $password)',
    {$firstname: req.body.firstName, $lastname: req.body.lastName, $Email: req.body.email, $username: req.body.username, $password: req.body.password});
    res.send("post sent");
    
});

app.post("/pins", function(req, res){
    console.log("Posting pins... ", req.body);
    db.query(`INSERT INTO broken_signs(sign_type, condition, latitude, longitude) VALUES($sign_type, $condition, $latitude, $longitude);`,
    {$sign_type: req.body.sign_type, $condition: req.body.condition, $latitude: req.body.latitude, $longitude: req.body.longitude})
    res.send(req.body);
})

app.post("/chats", function(req, res){
    console.log("Posting chats... ", req.body);
    db.query(`INSERT INTO chats(dtime, username, message) VALUES($date, $username, $message);`,
    {$date: req.body.date, $username: req.body.date, $message: req.body.message})
    res.send(req.body);
})

module.exports = app;