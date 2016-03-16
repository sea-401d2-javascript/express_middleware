'use strict';

let express = require('express');
let app = express();
let config = require('./config/env');
let parseFn = require('./lib/parseFn');

let db = {
  series: [
    {
      name: 'The Wire',
      network: 'HBO'
    },
    {
      name: 'Breaking Bad',
      network: 'AMC'
    }
  ]
};

app.use((req, res, next) => {
  console.log('request received');
  next();
});

app.post('/series', (req, res) => {
  parseFn.parseJsonFn(req, res, () => {
    db.series.push(req.body);
    console.log(db.series);
    res.end();
  });
});

app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});
