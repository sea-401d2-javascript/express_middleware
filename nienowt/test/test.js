'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var request = chai.request;
var expect = chai.expect;
require(__dirname + '/../server.js');


describe('parse middleware', () => {
  it('should parse incoming json, write to req.body', (done) => {
    request('localhost:3000')
    .post('/screams')
    .send('{"what":"AH!"}')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('{"what":"AH!"}');
      done();
    });
  });
  it('should respond to invalid json with "invalid json"', (done) => {
    request('localhost:3000')
    .post('/screams')
    .send('mk')
    .end((err, res) => {
      expect(res).to.have.status(400);
      expect(res.text).to.eql('Invalid json');
      done();
    });
  });
});
