'use strict';

function dataParser(req, res, next) {
  req.on('data', (data) =>  {
    console.log('TEST DATA:::::', data);
    try {
      var parsedData = JSON.parse(data)
      req.body = parsedData;
      } catch (e) {
      res.json({
        status: 400,
        message: 'Invalid JSON format'
      });
      console.log('Invalid JSON data');
    }
    finally {}
    next();
  });
};

module.exports = dataParser;
