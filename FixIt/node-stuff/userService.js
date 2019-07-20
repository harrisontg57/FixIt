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
        }
    });
});

router.post('/', function(req, res){
    User.loginUser(function(err, rows){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    User.registerUser(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

module.exports = router;