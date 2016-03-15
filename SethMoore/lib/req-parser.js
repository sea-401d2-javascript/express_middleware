'use strict';

function reqParser(req, res, next) {
  var body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', (err) => {
    if (err) {
      console.log(err);
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.write('invalid json');
      res.end();
      return next();
    }
    req.body = JSON.parse(Buffer.concat(body).toString());
    next();
  });
}

module.exports = reqParser;
