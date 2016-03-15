'use strict';
var express = require('express');
var app = express();

var myParser = function (req, res, next) {
  req.on('data', (data) => {
    // var newData = data.toString();
    //console.log(data);
    req.body = data.toString();
    console.log(req.header('content-type'));
    try {
      JSON.parse(req.body);
    } catch (err) {
      console.log('invalid json');

    }
    // if(req.header('content-type') != ('application/json'))
    // console.log(req.body);
  });
  req.on('end', function ()  {
    next();
  });

  // next();
  // console.log(newData)
  // req.body = req.myParser
  // res.send('invalid json')
};

app.use(myParser);
//
// app.use(function(err, req, res, next) {
//   console.log('not valid json');
//   next();
// });

app.post('/', function (req, res) {
  // res.writeHead(200, {'Content-Type': 'application/json'});
  // res.write(JSON.stringify(req.body));
  res.json(req.body);
  console.log('req.body in post ' + req.body);
  res.end();
});

app.listen(3000, () => console.log('server was started'));
