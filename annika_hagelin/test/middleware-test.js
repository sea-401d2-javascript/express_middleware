'use strict';
const chai = require('chai');
chai.use(require('chai-http'));

let request = chai.request;
let expect = chai.expect;

describe('tesing for json parsing middleware', () => {

  it('should post request with body {"plz":"respond"}', (done) => {
    request('localhost:3000')
    .post('/')
    .send({ data: '{"plz":"respond"}' })
    .end((err, res) => {
      expect(err).eql(null);
      expect(res).status(200);
      done();
    });
  });

  it('should post request with body 5', (done) => {
    request('localhost:3000')
    .post('/')
    .send(()=>'hjalp')
    .end((err, res) => {
      expect(err).not.eql(null);
      expect(res).status(400);
      done();
    });
  });

});
