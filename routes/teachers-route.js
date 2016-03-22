'use strict';

module.exports = (apiRouter) => {
  apiRouter.route('/teachers')
    .get((req, res) => {
      res.write('Hello Teacher');
      res.end();
    })
    .post((req, res) => {
      console.log('Request body sent to /teachers', req.body);
      res.end();
      })

  apiRouter.route('/teacher/:id')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    });
};
