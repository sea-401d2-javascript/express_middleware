'use strict';

module.exports = function(req, res, next) {
  var body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });

  req.on('end', (err) => {
    if (err) throw err;
    try {
      req.body = JSON.parse(Buffer.concat(body).toString());
    } catch (e) {
      req.body = 'Improper JSON';
    }
    next();
  });
};
