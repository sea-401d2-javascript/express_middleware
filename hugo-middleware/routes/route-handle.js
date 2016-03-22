'use strict';

let dataArray = [];

module.exports = (middleRouter) => {
  middleRouter.route('/products')
  .get((req, res) => {
    console.log('GET route hit for products');
    res.write('here would be some products and stuff');
    res.end();
  })
  .post((req, res, next) => {
    console.log('POST route hit for products');
    // console.log(req);
    console.log('req body is', req.body);
    if (req.header('Content-Type') !== 'application/json') {
      res.status(500).send({error: 'Invalid JSON!! \n'})
      res.end();
    } else {
      next();
    };
}, (req, res) => {
    req.on('data', (data) => {
      dataArray.push(data);
      console.log('data array is: ',dataArray);
    });
    req.on('end', () => {
      let bufConcat = Buffer.concat(dataArray);
      req.body = bufConcat.toString();
      console.log('req body is ', req.body);
      res.write(bufConcat.toString());
      console.log('buf to string is ', bufConcat.toString());
      res.end();
    });
  });
  middleRouter.route('/products/:id')
  .get((req, res) => {
    console.log('GET route hit for products/:id');
    res.end();
  });
}
