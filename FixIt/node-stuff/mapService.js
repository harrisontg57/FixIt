var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Pin = require('./pins')

router.get('/', function(req, res){
    console.log("getting pins...");
    Pin.getPins(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
            console.log("Pins: ",rows);
        }
    });
});

router.post('/', function(req, res){
    console.log("Posting pin router post...")
    Pin.postPins(req.body,function(err, rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.json(req.body);
            console.log("Pins: ", rows);
        }
    });
});

module.exports = router;