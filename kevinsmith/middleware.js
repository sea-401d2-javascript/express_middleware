'use strict';

function middleware(req, res, next) {
  req.on('data', (data) =>{
    try {
      req.body = JSON.parse(data.toString());
    } catch (err) {
      return res.status(400).send('invalid json');
    }// try-catch
    next(); 
  });// on  
}// export

module.exports = middleware;