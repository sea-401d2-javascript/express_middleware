'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var request = chai.request;
var expect = chai.expect;
require(__dirname + '/../server');

describe('middleware integration tests', () => {
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
