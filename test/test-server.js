'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var expect = require('chai').expect;
var request = chai.request;
var url = require('url');
let express = require('express');
let app = express();
let apiRouter = express.Router();

// Student Routes
require(__dirname + '/../routes/students-route')(apiRouter);
// Teacher Routes
require(__dirname + '/../routes/teachers-route')(apiRouter);

describe('Testing the data-parser', function() {

  before(function() {
    app.listen(4000, function() {
    })
  })

  // Testing if JSON is the right format
  it('Should respond with a parsed JSON object', function(done) {
    request('localhost:3000')
    .post('/students')
    // .send(JSON.stringify('{"name":"Bob"}'))
    .send('{"name":"Bob"}')
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    })
  })

});
