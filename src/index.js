var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '54.213.230.201',
    socketPath: '/var/run/mysqld/mysqld.sock',
    user     : 'boingo',
    password : 'boingo@123',
    database : 'boingo'
});
var app = express();


app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods',"GET, PUT, POST, DELETE");
    res.header('Access-Control-Allow-Headers',"Content-Type");
    next();
});

app.listen(3030);

app.get('/login', function(req,res, next){

    var email = req.query.email;
    var password = req.query.password;
    connection.query("SELECT email from users where email= ?",[email] , function (err, rows, fields) {
        if(rows[0]){
            connection.query("SELECT password from users where email= ?",[rows[0].email] , function (err, rows, fields) {
                if(rows[0].password === password){
                    res.end(JSON.stringify({login:true}));
                }
                else{
                    res.end(JSON.stringify({login:false}));
                }
            });
        }
        else{
            res.end(JSON.stringify({login:false}));
        }
    });
});

app.get('/hello', function(req, res, next){
    console.log("yo yo");
   return res.json({a:1});
});