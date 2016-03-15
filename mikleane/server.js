'use strict';

let express = require('express');
let app = express();



var Parser = function(req, res, next) {
  req.on('data',(data) => {
    req.body = data.toString();
    // res.json(req.body);
    // console.log(req.body);
    try {
      JSON.parse(req.body);
    } catch (err) {
      console.log('invalid JSON');
    }
  });
  req.on('end', ()=> {
    next();
  });
};
// if (JSON.parse(data) = true) {
//   run above
// } else {
//   console.log('this is not json');
// }
//


// function IsJsonString(str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }
// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
//   next();
// });
// if (err) {
//   res.send('invalid JSON')
//   setErrorStatus (err,400)
// }

app.use(Parser);

app.post('/', function (req, res){
  // res.writeHead(200, {'content-type': 'application/json'});
//   req.on('data',(data) => {
//     var newData = JSON.parse(data);
  res.json(req.body);
  console.log('What is this:' + req.body);
  res.end();
});

app.listen(3000, () => {
  console.log('server started');
});
