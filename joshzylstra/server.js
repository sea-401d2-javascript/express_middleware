'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let fs = require('fs');

let contents = fs.readFileSync('data.json');
let jsonData = JSON.parse(contents);
//console.log(contents)
//console.log(jsonData)

app.use(bodyParser.json());

app.use((req, res, next) => {
  try {
    let jsonData = JSON.parse(contents)
    //console.log(jsonData)
    req.body = jsonData
    console.log(req.body)
}
  catch (err) {
       console.log("Json Not Valid");
       res.status(400).send('Not Valid JSON')
//     }
}
})

app.listen(3000, () => {
  console.log('server started boiii, turn up for Pattys Day')
})
