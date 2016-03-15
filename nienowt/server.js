'use strict';

let express = require('express');
let app = express();
let shoutRouter = express.Router();

let db = {
  screams : [
    {
      id:0,
      name:'AHh!'
    },
    {
      id:1,
      name:'DAAA!'
    }
  ]
}



app.use('/screams',(req, res, next) => {
 req.body = [];
 if(req.method === 'GET') return next();

 req.on('data',(chunk) => {
   req.body.push(chunk)
 }).on('end', function(){
   req.body = JSON.parse(Buffer.concat(req.body).toString());
   console.log('req.body' ,req.body)
   next();
   })
 })

shoutRouter.route('/screams')
.get((req,res) => {
  res.json({
    status: true,
    data: db.screams
  })
})
  .post((req, res) =>{
    let scream = req.body.name;
    db.screams.push(req.body)
    console.log(req.body)
    res.end();
  })


app.use('/', shoutRouter)

app.listen(3000);
