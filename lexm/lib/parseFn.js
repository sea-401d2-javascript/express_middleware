'use strict';

var parseJsonFn = (req, res, next) => {
  req.on('data', (data) => {
    try {
      var parsedJSON = JSON.parse(data);
      req.body = parsedJSON;
      next();
    }
    catch(err) {
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.write('invalid json');
      res.end();
    }
  })
}

exports.parseJsonFn = parseJsonFn;
