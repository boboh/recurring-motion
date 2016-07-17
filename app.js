var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./config');
var port = '3000';
var server = http.createServer(app);
var knexfile = require('./knexfile');
var knex = require('knex')(knexfile.development);

server.listen(port);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('index');
});

app.post('/',function(req,res){
  knex('swims')
      .insert({distance: req.body.distance})
      .then(function(){
        res.render('logswim', {swimDistance: req.body.distance});
      })
      .catch(function(error){
        console.error(error);
        res.send(error);
      });
});

app.get('/about',function(req,res){
  res.render('about');
});

module.exports = app;