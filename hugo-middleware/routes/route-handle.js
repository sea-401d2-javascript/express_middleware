'use strict';

module.exports = (middleRouter) => {
  middleRouter.route('/products')
  .get((req, res) => {
    console.log('GET route hit for products');
  })
  .post((req, res) => {
    console.log('POST route hit for products');
  });
  middleRouter.route('/products/:id')
  .get((req, res) => {
    console.log('GET route hit for products/:id');
  })
  .put((req, res) => {
    console.log('PUT route hit for products/:id');
  })
  .delete((req, res) => {
    console.log('DELETE route hit for products/:id');
  })
}
