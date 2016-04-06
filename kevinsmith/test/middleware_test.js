'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var request = chai.request;
require('../server.js');

describe('Testing the server.js middleware functionality', () => {
  it('should accept a proper json POST to the root', (done) =>{
    request('http://localhost:3000')
    .post('/')
    .send({"id":-1, "name":"Captain Lovey Dovey"})
    .end((req, res) => {
      expect(res.status).to.eql(200);
      expect(res.body.data.name).to.eql('Captain Lovey Dovey');
      done();
    })
  })

  it('should return "invalid json"  when invalid json is POSTed to the root', (done) =>{
    request('http://localhost:3000')
    .post('/')
    .send('{"id":-1, "name":"Captain Lovey Dovey"')
    .end((req, res) => {
      expect(res.status).to.eql(400);
      expect(res.text).to.eql('invalid json');
      done();
    })
  })

})