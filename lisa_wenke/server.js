'use strict';
//call packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//create inline database
var db = {

  unicorns: [
    {
      id: '001',
      name: 'Franz',
      powers: 'x-ray vision',
      color: 'green'
    },
    {
      id: '002',
      name: 'Luther',
      powers: 'time travel',
      color: 'magenta'
    },
    {
      id: '003',
      name: 'Hertz',
      powers: 'shoots lightening bolts of rainbows',
      color: 'yellow'
    }
  ]

};

//configure bodyParser

app.use(bodyParser.json());
//set port
var port = process.env.PORT || 3000;

//routes for API
  //get an instance for the express router
var router = express.Router();

app.use('/api', router);

router.use(function(req,res, next){
  console.log('middleware working');
  next();
});

router.route('/unicorns')
  .post((req, res)=>{
    db.unicorns.push(req.body);
    let unicorn = req.body;
      // if(err) {
      //   res.json('404 Not Found');
    res.json({
      message: 'a new unicorn has been created',
      status: true,
      data: unicorn
    });
  })
  .get((req, res)=> {
    console.log('GET processed for /unicorn');
    res.json({
      message: 'unicorn request processed',
      status: true,
      data: db.unicorns
    });
  });

// router.route('/unicorns/:id')
//     .get((req, res)=>{
//       let unicorn = db.unicorns[0][req.params.id];
//       res.json({
//         message: 'unicorn ID request processed',
//         status: true,
//         data: unicorn
//       });
//     })
//     .put((req, res)=>{
//       for(var i = 0; i < db.unicorns.length; i++){
//         db.unicorns[req.params.id[i]] = req.body;
//       }
//       // let unicornId = req.body;
//       res.json({
//         message: 'unicorn has been updated',
//         status: true,
//         data: db.unicorns[req.params.id[i]]
//       });
//
//     });
//

  // });

//start the server
app.listen(port);
console.log('magic is happening on ' + port);
