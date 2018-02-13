var express = require('express');

var app = express();

app.listen(3030);

app.get('/', function(req,res, next){
    return res.send("Workes");
});