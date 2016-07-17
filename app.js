var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./config');
var port = '3000';
var server = http.createServer(app);

server.listen(port);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  //res.send("How far did you swim today?");
  res.render('index');
});

app.post('/',function(req,res){
  //console.log(req.body.distance);
  //res.send("Nice work on the "+req.body.distance+" meters. Thanks for letting us know");
  res.render('logswim', {swimDistance: req.body.distance})
});

app.get('/about',function(req,res){
  res.render('about');
});

module.exports = app;