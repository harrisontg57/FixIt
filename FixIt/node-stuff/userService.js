var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var User = require('./users');

router.get('/', function (req, res) {
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
    User.loginUser(function(err, rows){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(rows);
            console.log("loginPost",rows);
        }
    });
});

router.post('/users', function (req, res) {
    User.registerUser(function(err,rows){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json("post",rows);
            console.log("Post: ",rows);
        }
    });
});

module.exports = router;