'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var request = chai.request;
var expect = chai.expect;
require(__dirname + '/../server');

describe('middleware integration tests', () => {
  it('should test valid json', () => {
    request('localhost:3000')
    .post('/test')
    .send({message:'test'})
    .end((err, res) => {
      expect(JSON.parse(res.body)).should.be.a('object');
      expect(JSON.parse(res.body)).should.have.property('message')
      expect(JSON.parse(res.body)).to.eql("test");
      done();
    });
  });
});
