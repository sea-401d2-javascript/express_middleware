'use strict';

var express = require('express');
var app = express();
var users = express.Router();

var Parser = function(req, res, next){
  req.on('data', function(data) {
    req.body = data.toString()
    try {
      JSON.parse(req.body)
    } catch (err) {
      console.log('invalid JSON');
    }
  })
  req.on('end', function(){
    next()
  })
}

app.use(Parser);

app.post('/', function(req, res){
    res.json(req.body)
    res.end()
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
})
