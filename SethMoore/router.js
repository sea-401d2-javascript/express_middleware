'use strict';

const express = require('express');
const reqParser = require('./lib/req-parser.js');
const app = express();


let db = {
  cities: [
    {
      id: 1,
      name: 'Seattle'
    },
    {
      id: 2,
      name: 'Portland'
    },
    {
      id: 3,
      name: 'San Francisco'
    }
  ]
};

app.use(reqParser);

app.route('/cities')
  .get((req, res) => {
    res.json({
      status: true,
      data: db.cities
    });
    res.end();
  })
  .post((req, res) => {
    console.log(req.body);
    res.end();
  });

app.listen(3000, () => {
  console.log('server started');
});
