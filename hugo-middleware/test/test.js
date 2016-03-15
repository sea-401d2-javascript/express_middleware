'use strict';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var request = chai.request;
var http = require('http');
require('../server.js');
// var Router = require('../routes/route-handle.js');

describe('testing GET/POST routes', () => {
  it('should hit a GET route for /products', (done) => {
    request('localhost:3000')
    .get('/products')
    .end((err, res) => {
      expect(err).to.equal(null);
      expect(res).to.have.status(200);
      done();
    });
  });
  it('should hit a GET route for /products/:id', (done) => {
    request('localhost:3000')
    .get('/products/banana')
    .end((err, res) => {
      expect(err).to.equal(null);
      expect(res).to.have.status(200);
      done();
    });
  });
  it('should hit a POST route for /products', (done) => {
    request('localhost:3000')
    .post('/products')
    .send({"product":"banana"})
    .end((err, res) => {
      expect(err).to.equal(null);
      expect(res).to.have.status(200);
      expect(res.text).to.equal('{"product":"banana"}');
      done();
    });
  });
  it('should return POST error', (done) => {
    request('localhost:3000')
    .post('/products')
    .send('dsfdsfasd')
    .end((err, res) => {
      expect(res).to.have.status(500);
      expect(res.text).to.equal('{"error":"Invalid JSON!! \\n"}');
      // expect(res).to.contain('Invalid JSON');
      done();
    });
  });
});
