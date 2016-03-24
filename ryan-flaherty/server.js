'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var parserfy = require(__dirname + '/lib/parserfy');

app.post('/post', parserfy, (req, res) => {
  res.send(req.body);
  res.end();
});

app.listen(port, function() {
  console.log('Server listening on port ' + (port || 3000));
});


