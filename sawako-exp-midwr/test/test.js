'use strinct';
var chai = require('chai');
var chaiHTTP = require('chai-http');
var express = require('express');
var app = express();
// var middle = require('/../middle.js');
chai.use(chaiHTTP);
var request = chai.request;
var expect = chai.expect;

describe('Testing middleware to set req.body', ()=>{
  it('should catch err when proper json obj is not being passed', (done)=>{
    request('localhost:3000')
    .post('/otters')
    .send('{"Instructor":"Ms Peggy"}')
    .end((err, res)=>{
      console.log('hitting test');
      expect(err).to.be.null;
      expect(res.body).to.be.true;
      done();
    });
  });
});
