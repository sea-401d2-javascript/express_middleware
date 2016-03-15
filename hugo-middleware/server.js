'use strict';
let express = require('express');
let app = express();
let config = require(__dirname + '/config/env');

let middleRouter = express.Router();
require(__dirname + '/routes/route-handle')(middleRouter);

app.use('/api', middleRouter);
app.listen(config.PORT, () => {
  console.log('listening on port ${config.PORT}');
});
