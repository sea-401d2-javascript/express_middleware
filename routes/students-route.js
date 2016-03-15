'use strict';

module.exports = (apiRouter) => {
  apiRouter.route('/students')
    .get((req, res) => {
      res.write('Hello Students!');
      res.end();
    })
    .post((req, res) => {
      console.log('Request body sent to /students', req.body);
      res.writeHead(200, {'content-type': 'text/html'});
      res.end();
    });

  apiRouter.route('/students/:id')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    });
};
