'use strict';

function reqParser(req, res, next) {
  var body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', (err) => {
    if (err) return console.log(err);
    try {
      JSON.parse(Buffer.concat(body).toString());
    } catch (e) {
      res.status(400).send('invalid json');
      return res.end();
    }
    req.body = JSON.parse(Buffer.concat(body).toString());
    next();
  });
}

module.exports = reqParser;
