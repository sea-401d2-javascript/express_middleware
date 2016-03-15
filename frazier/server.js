'use strict';
var jsonParser = require(__dirname + '/lib/json-parser.js');
var express = require('express');
var app = express();

app.post('/', jsonParser, (request, response) => {
  console.log(request.body);
  response.statusCode = 200;
  response.end();
});

app.listen(3000, () => {
  console.log('started on 3000');
});
