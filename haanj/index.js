'use strict';
let express = require('express');
let app = express();

app.post('/', (req, res, next) => {
  console.log('request received');
  let jsonObject = '';

  req.on('data', (data) => {
    jsonObject += data;
  });
  req.on('end', () => {
    try {
      jsonObject = JSON.parse(jsonObject);
      req.body = jsonObject;
      next();
    }
    catch(e) {
      next(e);
    }
  });
});


let router = express.Router();

router.route('/')
  .get((req, res) => {
    console.log('get request received');
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('get request received');
    res.end();
  })
  .post((req, res) => {
    console.log('post request received');
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('post request received');
    res.end();
  });

app.use((err, req, res, next) => {
  console.log('Thar be errs!!');
  console.log(err);
  res.status(500).send('Something broke! Probably invalid JSON');
  res.end();
});

app.use('/', router);


app.listen(3000, () => {
  console.log('Listening at port 3000');
});
