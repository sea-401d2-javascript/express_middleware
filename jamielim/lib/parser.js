'use strict';

module.exports = function(req, res, next) {
  var JSONstring = '';
  req.on('data', (data) => {
    JSONstring += data.toString();
  });
  req.on('end', () => {
    if (!JSONstring) {
      return next();
    }
    try {
      req.body = JSON.parse(JSONstring);
      next();
    } catch(err) {
      console.error(err.stack);
      return res.status(422).send({message: 'Invalid JSON'});
    }
  });
};