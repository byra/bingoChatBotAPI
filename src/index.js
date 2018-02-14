var express = require('express');
const uuidv1 = require('uuid/v1');

var app = express();

app.listen(3030);

app.get('/', function(req,res, next){
    return res.send("Still Workes?" + uuidv1());
});