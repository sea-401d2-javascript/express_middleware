'use strict';

let chai = require('chai');
let chaiHTTP = require('chai-http'); chai.use(chaiHTTP);
let request = chai.request;
let expect = chai.expect;
let express = require('express');
let app = express();
let reqParser = require('./../lib/req-parser.js');

describe('testing req-parser.js', () => {
  before(() => {
    app.use(reqParser);

    app.post('/', (req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(JSON.stringify(req.body));
      res.end();
    });

    app.listen(3000, () => {
      console.log('\ntest server running\n');
    });
  });
  it('should post to "/" and get a response of the req.body that was posted', (done) => {
    request('localhost:3000')
    .post('/')
    .send('{"name": "bainbridge"}')
    .end((err, res) => {
      // expect(true).eql(false);
      expect(res.text).to.eql('{"name":"bainbridge"}');
      done();
    });
  });
  it('should post to "/" a bad json file and get a response saying "invalid json".', (done) => {
    request('localhost:3000')
    .post('/')
    .send('{"name":"bainbridge}')
    .end((err, res) => {
      // expect(true).eql(false);
      expect(res.text).to.eql('invalid json');
      done();
    });
  });
});
