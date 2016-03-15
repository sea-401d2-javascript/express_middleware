'use strict';

let express = require('express');
let app = express();
let apiRouter = express.Router();
let bodyParser = require('body-parser');
let config = require(__dirname + '/config/env.js');
require(__dirname + '/routes/companies-routes.js')(apiRouter);

app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(422).send('Invalid JSON');
});

app.listen(config.PORT, () => {
  console.log('server started on port ' + config.PORT);
});