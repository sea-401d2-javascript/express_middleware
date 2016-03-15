'use strict';
var express = require('express');
var app = express();
var middle = require('./middle.js');



app.use(middle);
app.post('/otters', (req, res)=> {
  console.log(req.body);
  var test = JSON.stringify(req.body);
  res.write(test);
  res.end();
});



app.listen(3000, function(){
  console.log('Port 3000 listening...');
});
