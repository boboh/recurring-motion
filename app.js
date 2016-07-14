var express = require('express');
var app = express();
var http = require('http');

var port = '3000';
var server = http.createServer(app);
server.listen(port);

app.get('/',function(req,res){
  res.send("How far did you swim today?");
});

module.exports = app;