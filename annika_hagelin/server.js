'use strict';
const express = require('express');
const bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.body.data);
  try {
    req.body = JSON.parse(req.body.data);
    next();
  } catch(err) {
    console.log('invalid json');
    res.status(400).send('invalid json');
  }
});

app.post('/', (req, res) => res.status(200).send());

app.listen(3000, () => console.log('server speaking'));
