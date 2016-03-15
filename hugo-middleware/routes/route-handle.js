'use strict';

let bodyParser = require('body-parser');
// app.use(bodyParser.json());


module.exports = (middleRouter) => {
  middleRouter.route('/products')
  .get((req, res) => {
    console.log('GET route hit for products');
    res.end();
  })
  .post((err, req, res, next) => {
    console.log('POST route hit for products');
    if (err) {
      res.status(500).send({error: 'Invalid JSON!!'})
      res.end();
    } else {
    next();
  };
  }, (req, res) => {
    req.on('data', (data) => {
      let productPost = req.body;
      res.json(productPost)
      res.end();
    });
  });
  middleRouter.route('/products/:id')
  .get((req, res) => {
    console.log('GET route hit for products/:id');
  })
  // .put((req, res) => {
  //   console.log('PUT route hit for products/:id');
  // })
  // .delete((req, res) => {
  //   console.log('DELETE route hit for products/:id');
  // })
}
