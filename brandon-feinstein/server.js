var express = require('express');
var app = express();
var jsonParse = require(__dirname + "/lib/json-parser");

app.use(jsonParse); //mounts middleware function

app.post('/sendjson', (req, res) => { //HTTP request method POST for /sendjson route and callback
  res.json(req.body); //on response send and JSON response of the reqeuest body (the JSON object you are POSTing in your request)
  res.end(); //ends response process
})

app.listen(3000, () => { //same as http.server.listen();
  console.log('server up');
});
