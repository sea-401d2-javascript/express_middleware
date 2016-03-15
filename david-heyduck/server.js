'use strict';

let express = require('express');
let bodyParser = require('body-parser');
// let errorHandler = require('error-handler');

let app = express();
let users = express.Router();

let database = {
  users: [
    {
      name: 'David',
      age: 24,
      gender: 'Male'
    },
    {
      name: 'Marz',
      age: 23,
      gender: 'Female'
    }
  ]
}

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('A request has been made');
  next()
})

app.get('/', (req, res) => {
  res.json({
    status: true,
    data: database.shoes
  })
})

app.post('/', (req, res) => {
  try {
    database.users.push(req.body)
    let user = req.body
    res.json({
      status: true,
      data: user
    })
  }
  catch console.log('Invalid JSON');
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
