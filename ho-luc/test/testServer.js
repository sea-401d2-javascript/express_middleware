'use strict'

let chai = require('chai');
let chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
let request = chai.request;
let expect = chai.expect;
let app = require(__dirname + '/../server');

describe('testing middleware req/res', () => {
  it('expect incoming json, parsed and set to req.body, with status 200', (done) => {
    request('localhost:3000')
      .post('/locations')
      .send('{"name":"seattle"}')
      .end((err, req) => {
        expect(err).to.eql(null);
        expect(req.body.status).to.eql(200);
        expect(req.body.data).to.eql({name:'seattle'});
        done();
      })
  })

  it('expect res from POST to have status 200 and equal {name:\'denver\'}', (done) => {
    request('localhost:3000')
      .post('/locations')
      .send('{"name":"denver"}')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.status).to.eql(200);
        expect(res.body.data).to.eql({name:'denver'});
        done();
      })
  })


  // it('expect error', (done) => {
  //
  // })
})
