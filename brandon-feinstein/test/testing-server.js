var express = require('express');
var app = express();

var jsonParse = require(__dirname + '/../lib/json-parser');
app.use(jsonParse); //mounts middleware function

app.post('/test', (req, res) => {
  res.send('POST request sent to /test');
});
//app.post('/test', jsonParse, (req, res)) where jsonParse function is inserted.
app.post('/testfn', (req, res) => {
  req.body = JSON.stringify(req.body);
  console.log(req.body);
  res.send(req.body);
  res.end();
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
