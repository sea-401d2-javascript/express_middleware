'use strict';
let chai = require('chai');
let chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var request = chai.request;
var expect = chai.expect;
require('../index');

var req;
var error;
describe('Body Parser Middleware', () => {
  describe('Parse json object', () => {
    it('should take data save it to req.body as a json object', () => {
      req = {body:'', data: '{"name":"alem"}'};
      function parser(obj) {
        obj.body = JSON.parse(obj.data);
        if(!(typeof req.body === 'object')){
          error = '400 Invalid JSON';
        }
      }
      parser(req);
      expect(req.body).to.be.an('object');
      expect(req.body).to.eql({name:'alem'});
    });
    it('should take return 400 invalid error if not json', () => {
      req = {body:'', data: '{"name":"alem"}'};
      function parser(obj) {
        obj.body = obj.data;
        if(!(typeof obj.body === 'object')){
          error = '400 Invalid JSON';
        }
      }
      parser(req);
      expect(error).to.eql('400 Invalid JSON');
    });
  });
  describe('Parser Middleware on POST request', () => {
    it('should respone with {"name": "alem"}', (done) => {
      request('localhost:3000')
        .post('/')
        .send('{"name":"alem"}')
        .end((err, res) => {
          if (err) throw err;
          expect(res.body).to.have.a.property('name');
          expect(res.body).to.be.an('object');
          expect(res.body).to.eql({name:'alem'});
          done();
        });
    });
  });
});
