'use strict';

module.exports = (req, res, next) => {
  var data = '';
  req.on('data', function(chunk) {
    data += chunk;
  });
  req.on('end', function() {
    try {
      req.body = JSON.parse(data);
      console.log('parserfy input formated as JSON');
      next();
    }
    catch (err) {
      console.log('parserfy input not formated as JSON, returned as empty object');
      return res.json({});
    }
  });
};


