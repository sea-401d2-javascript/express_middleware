'use strict';
//call packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//configure bodyParser
app.use(bodyParser.json());
//set port
var port = process.env.PORT || 3000;

//routes for API
  //get an instance for the express router
var unicornRouter = express.Router();
//test if router is working
unicornRouter.get('/', function(req, res){
  res.json({message: 'MAGICAL'});
});
//register routes
app.use('/tests', unicornRouter);
//start the server
app.listen(port);
console.log('magic is happening on ' + port);
