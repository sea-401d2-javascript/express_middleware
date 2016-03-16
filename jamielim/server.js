'use strict';

let express = require('express');
let app = express();
let apiRouter = express.Router();
let parser = require(__dirname + '/lib/parser.js');
let config = require(__dirname + '/config/env.js');
require(__dirname + '/routes/companies-routes.js')(apiRouter);

app.use(parser);
app.use('/api', apiRouter);

app.listen(config.PORT, () => {
  console.log('server started on port ' + config.PORT);
});