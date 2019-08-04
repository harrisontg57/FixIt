var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Chat = require('./chats')

router.get('/', function(req, res){
    console.log("getting chats...");
    Chat.getChats(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
            console.log("Chats: ",rows);
        }
    });
});

router.post('/', function(req, res){
    console.log("Posting chat router post...")
    Chat.postChats(req.body,function(err, rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.json(req.body);
            console.log("Chats: ", rows);
        }
    });
});

module.exports = router;