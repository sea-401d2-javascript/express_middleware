'use strict';

let db = {
  companies: [
    {
      id: 0,
      name: 'Amazon'
    },
    {
      id: 1,
      name: 'Apple'
    },
    {
      id: 2,
      name: 'Google'
    }
  ]
};

module.exports = (apiRouter) => {
  apiRouter.route('/companies')
    .post((req, res) => {
      db.companies.push(req.body);
      res.json({
        status: true,
        data: db.companies
      });
    });
};