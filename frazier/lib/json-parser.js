'use strict';

module.exports = (request, response, next) => {
  request.on('data', (data) => {
    var requestBody;
    try{
      requestBody = JSON.parse(data);
      // console.log('requestBody is', requestBody);
      request.body = requestBody;
      next();
    } catch (err) {
      response.statusCode = 400;
      response.write('invalid json');
      response.end();
    }
  });
};
