'use strict';

let express = require('express');
let app = express();



var Parser = function(req, res, next) {
  req.on('data',(data) => {
    req.body = data.toString();
    try {
      JSON.parse(req.body);
    } catch (err) {
      console.log('invalid JSON');
    }
  });
  req.on('end', ()=> {
    next();
  });
};

app.use(Parser);

app.post('/', function (req, res){
  res.json(req.body);
  res.end();
});

app.listen(3000, () => {
  console.log('server started');
});
