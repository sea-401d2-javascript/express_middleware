'use strict';
require(__dirname + '/../index');

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;

describe('/ routing tests', () => {
  it('should respond to GET request', (done) => {
    request('localhost:3000')
      .get('/')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('get request received');
        done();
      });
  });

  it('should accept a JSON post without error', (done) => {
    request('localhost:3000')
      .post('/')
      .send({'test':'stuff'})
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('post request received');
        done();
      });
  });

  it('should throw error with invalid JSON post', (done) => {
    request('localhost:3000')
      .post('/')
      .send('slkdfjlskdj')
      .end((err,res) => {
        expect(err).to.not.eql(null);
        expect(res).to.have.status(500);
        expect(res.text).to.eql('Something broke! Probably invalid JSON');
        done();
      });
  });
});
