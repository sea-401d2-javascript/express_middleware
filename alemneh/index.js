'use strict';
let express = require('express');
let app = express();
let parser = require('./parser.js');


app.use(parser);

app.post('/', (req, res) => {
  res.send(req.body);
  res.end();
});

app.listen(3000, () => {
  console.log('Server up on port 3000');
});
