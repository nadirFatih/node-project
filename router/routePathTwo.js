var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../public/html/pathTwo.html'));
    console.log('PathTwo Called with GET method !!!');
});

router.post('/',function(req,res){
    res.send('Post Calling in pathTwo Page')
});

router.get('/one', function(req,res){
    res.sendFile(path.join(__dirname,'../public/html/pathTwoOne.html'));
    console.log('PathTwoOne Called with GET method !!!');
});

router.post('/one',function(req,res){
    res.send('Post Calling in pathTwoOne Page')
});





module.exports = router;