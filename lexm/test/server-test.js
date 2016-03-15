var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var config = require(__dirname + '/../config/env');

var request = chai.request;
var expect = chai.expect;

var server = require(__dirname + '/../server');

describe('Testing POST to /series', () => {
  it('should read in correct JSON to req.body', () => {
    request(`localhost:${config.PORT}`)
      .post('/series')
      .send({ "name": "The Walking Dead", "network": "AMC" })
      .end( (err, res) => {
        req.body.should.be.a('object');
        req.body.should.have.property('name');
        req.body.should.have.property('network');
        req.body.name.should.equal('The Walking Dead');
        req.body.network.should.equal('AMC');
      })
  })
  it('should respond to incorrect JSON with error message', () => {
    request(`localhost:${config.PORT}`)
      .post('/series')
      .send("asdfqwerkjladfs;kl")
      .end( (err, res) => {
        res.status.should.equal(400);
        res.body.should.equal('invalid json');
      })
  })
})
