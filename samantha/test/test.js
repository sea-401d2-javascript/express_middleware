'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var expect = chai.expect;
var request = chai.request;
require(__dirname + '/../index.js');

describe('it should use the middleware function to parse data', () => {
  it('should test valid json', (done) => {
    request('localhost:3000')
    .post('/')
    .send({message:'test'})
    .end((err, res) => {
      expect(JSON.parse(res.body)).to.be.an('object');
      expect(JSON.parse(res.body)).to.eql({"message":"test"});
      done();
    });
  });
});
