/*var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    if (req.url == '/'){
     fs.readFile('index.html',function(err,data){

            res.write(data);
            res.end('Bu index Sayfa Sonu');
        })
    }else if(req.url=='/login'){

        fs.readFile('login.html',function(err,data){

            res.write(data);
            res.end('Bu Login sayfa Sonu');
        })

    }else{

        res.write('Bu Link Yönledirmesi Yapılmamış...');
        res.write('Nodemon Deneme');
        res.end(' Sayfa Sonu');

    }

    })
    console.log('server on running on port 8000');
    server.listen(8000);
*/
var express = require('express');
var path = require('path');
var fs = require('fs');

var app =  express();

app.use('/public',express.static(path.join(__dirname,'public')));

var indexController = function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
    console.log('index.html sayfası çağırıldı...');
}

var loginController = function(req,res){
    res.sendFile(path.join(__dirname,'login.html'));
    console.log('login.html sayfası çağırıldı...');
}

app.get('/',indexController);
app.get('/login',loginController);

    /*fs.readFile('index.html',function(err,data){
        
        res.write(data);
        res.end('Mesaj Bitti!!');
        console.log('index Html Çağırıldı !!!')
    });*/

    /*
    fs.readFile('login.html',function(err,data){

        res.write(data);
        res.end('Mesaj Bitti !!!');
        console.log('login.html çağırıldı...');

    });*/



app.listen(8000,function(){

    console.log('Server on listening 8000 Port.');

});






    
    



