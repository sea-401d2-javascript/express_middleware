'use strict';
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var request = chai.request;
// var jsonParser = require(__dirname + '/../lib/json-parser.js');

require(__dirname + '/../server.js');

// describe('json-parser.js', () => {
// was told by TA that unit testing unneccesary   
//   
// });

describe('server.js', () => {
  it('should let you post data', (done) => {
    request('localhost:3000').post('/').send(JSON.stringify({hello: 'world'})).end((request, response) => {
      expect(response.status).to.equal(200);
      done();
    });
  });
  
  it('should error message correctly', (done) => {
    request('localhost:3000').post('/').send('{"hello": "world}').end((request, response) => {
      expect(response.status).to.equal(400);
      expect(response.text).to.equal('invalid json');
      done();
    });
  });
});
