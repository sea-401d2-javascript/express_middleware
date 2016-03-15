'use strict';
let express = require('express');
let app = express();

app.use((req, res, next) => {
  console.log('request received');
  next();
});

let router = express.Router();

router.route('/')
  .get((req, res) => {
    console.log('get request received');
    res.json('get request received');
    res.end();
  })
  .post((req, res) => {
    console.log('post request received');
    res.json('post request received');
    res.end();
  });

app.use('/', router);

app.listen(3000, () => {
  console.log('Listening at port 3000');
});
