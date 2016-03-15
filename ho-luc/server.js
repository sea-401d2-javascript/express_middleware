'use strict'

let express = require('express');
let app = express();

app.use('/locations', (req, res, next) => {
  req.on('data', (data, err) => {
    try {
      req.body = JSON.parse(data);
    }
    catch(err) {
      res.status(400)
      res.test = 400;
    }
  })
  next();
});

app.post('/locations', (req, res, next) => {
  req.on('data', (data, err) => {
    if(err) {throw err}
    let location = req.body;
    // console.log(res.test);
    if (res.test === 400) {
      res.end();
    }
    res.json({
      status: 200,
      data: location
    })
    res.end();
  })
})

app.listen(3000, () => {
  console.log('server started on port 3000');
})
module.exports = app;
