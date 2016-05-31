'use strict';

let express = require('express');
let app = express();

app.use((req, res, next) => {
  req.body = [];
  if(req.method === 'GET') return next();
  req.on('data',(chunk) => {
    req.body.push(chunk);
  }).on('end', function(){
    try {
      req.body = JSON.parse(Buffer.concat(req.body).toString());
      console.log(req.body);
      next();
    } catch (e){
      res.status(400).send('Invalid json');
      return res.end();
    }
  });
});

app.post('/screams',(req, res) =>{
  if(req.body){
    res.json(req.body)
  }
  res.end();
});

app.listen(3000);
