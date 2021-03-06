var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var User = require('./users');

router.get('/', function (req, res) {
    console.log("getting users...")
    User.getUsers(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
            console.log("Users: ",rows);
        }
    });
});

router.post('/users', function(req, res){
    console.log("validating info...")
    User.loginUser(req.body, function(err, rows){
        if(err){
            res.status(400).json(err);
        }
        else{
            if(rows.length<1){
                console.log("Account not found")
            }else{
                console.log("account found");
                res.json(req.body);
                console.log("loginPost",rows);
            }
        }
    });
    User.alterLogin(req.body, function(err, rows){
        console.log("altering loggedIn")
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
            console.log("loggedIn ", rows);
        }
    });
});

router.post('/', function (req, res) {
    console.log("registering new user...")
    User.registerUser(req.body, function(err,rows){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
            console.log("Post: ",rows);
        }
    });
});

module.exports = router;