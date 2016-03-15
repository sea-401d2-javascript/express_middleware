'use strict';

let express = require('express');
let app = express();
let apiRouter = express.Router();
var url = require('url');
let dataParser = require('./lib/data-parser');

// Student Routes
require('./routes/students-route')(apiRouter);
// Teacher Routes
require('./routes/teachers-route')(apiRouter);

// next call back inside of data-parser
app.use('/', dataParser, apiRouter, (req, res) => {
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
