'use strict';

module.exports = function(req, res, next) {
  /**
  * Represents a Middleware to parse json
  * @param {object} req - The request object from the client
  * @param {object} res - The respone object form the Server
  * @param {function} next - The callback to move on to the next handler
  */
  req.on('data', (data) => {
    req.body = JSON.parse(data);
    if(!(typeof req.body === 'object')) {
      res.status(400).send({error: 'Invalid JSON'});
      res.end();
    }
    next();
  });
};
