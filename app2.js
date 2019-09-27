
var express = require('express');
var app = express();
var path = require('path');

var routePathOne = require('./router/routePathOne');
var routePathTwo = require('./router/routePathTwo');

app.use('/public',express.static(path.join(__dirname,'public')));
//************************************************* */
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'public/html/index.html'));
    console.log('Home Page Called with GET method !!!');
});

app.post('/',function(req,res){
    res.send('Post Calling in Home Page');
});
//************************************************** */
app.use('/pathOne',routePathOne);
app.use('/pathTwo',routePathTwo);


app.listen(8000,function(){
    console.log('Server Running On Port 8000');
});