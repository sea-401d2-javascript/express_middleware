module.exports = exports = (req, res, next) => {
  var jsonString = '';

  req.on('data', (data) => {
    jsonString = data.toString();//stringify buffer to stringified JSON object
  });

  req.on('end', () => { //on end of request run this call back
    try {
      req.body = JSON.parse(jsonString);//set res.body to parsed JSON object
      next();
    } catch(e) { //if this does not work send this error with out breaking server
      res.send('invalid JSON');
      res.end()
    }
  });
};
