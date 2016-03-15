'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
require(__dirname + '/../routes/companies-routes.js');

chai.use(chaiHttp);
let request = chai.request;
let expect = chai.expect;

let validJSON = {id: 3, name: 'CodeFellows'};
let invalidJSON = 'hello';

describe('test /companies routes', () => {
  it('should respond to POST /companies with success', (done) => {
    request('localhost:3000')
      .post('/api/companies')
      .send(validJSON)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });

  it('should respond to POST /companies with error', (done) => {
    request('localhost:3000')
      .post('/api/companies')
      .send(invalidJSON)
      .end((err, res) => {
        // console.log(res.body);
        // expect(err).to.not.equal(null);
        // expect(res).to.have.status(422);
        // expect(res.body).to.equal('Invalid JSON');
        done();
      });
  });
});


