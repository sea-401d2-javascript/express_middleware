'use strict';

let express = require('express');
let app = express();
let middleware = require('./middleware.js');

let db = {
  villains: [
    {
      id: 0, 
      name: 'Trelain'
    },
    {
      id: 1,
      name: 'Kor'
    },
    {
      id: 3,
      name: 'Khan'
    }
  ]
};

app.use(middleware);

app.post('/', (req, res, next) => {
  db.villains.push(req.body);
  let villain = req.body ;
  res.json({
    status: true,
    data:villain
  });
});

app.listen(3000, () =>{
  console.log('Server started on 3000');
});

