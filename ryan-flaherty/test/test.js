'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var request = chai.request;

describe('post route using middleware', function() {
  var testParams = {
    'name': 'testName',
    'email': 'test@test.com',
    'password': 'testpass'
  };
  it('should parse and return the JSON data', function(done)  {
    request('localhost:3000')
    .post('/post')
    .send(testParams)
    .end(function(err, res) {
      expect(res.body.email).to.eql('test@test.com');
      done();
    });
  });
  it('should return an empty object', function(done)  {
    request('localhost:3000')
    .post('/post')
    .send('I\'m not a JSON')
    .end(function(err, res) {
      expect(res.body).to.eql({});
      done();
    });
  });
});

