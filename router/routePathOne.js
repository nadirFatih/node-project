var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../public/html/pathOne.html'));
    console.log('PathOne Called with GET method !!!');
});

router.post('/',function(req,res){
    res.send('Post Calling in pathOne Page')
});


router.get('/one', function(req,res){
    res.sendFile(path.join(__dirname,'../public/html/pathOneOne.html'));
    console.log('PathOneOne Called with GET method !!!');
});

router.post('/one',function(req,res){
    res.send('Post Calling in pathOneOne Page')
});




module.exports = router;