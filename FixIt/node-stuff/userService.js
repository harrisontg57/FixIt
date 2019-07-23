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
            console.log("getPost",rows);
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
            res.json(req.body);
            console.log(user);
            console.log("loginPost",rows);
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
            //console.log(user);
            console.log("Post: ",rows);
        }
    });
});

module.exports = router;