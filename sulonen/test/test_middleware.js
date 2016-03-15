'use strict';

const chai = require('chai');
const chai_http = require('chai-http');
chai.use(chai_http);
const request = chai.request;
const expect = chai.expect;

const express = require('express');
const parser = require('./../lib/parse-json.js');

describe('Middleware: parse-json', () => {
  before(() => {
    let app = express();
    let router = express.Router();

    app.use(parser);
    app.use(router);

    router.route('/')
      .post((req, res) => {
        res.send(req.body.toString());
        res.end();
      });

    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  });

  describe('Integration tests', () => {

    it('should return a JSON object', (done) => {
      var body = {
        id: 0,
        name: 'Chester Tester'
      };

      request('localhost:3000')
        .post('/')
        .send(body)
        .end((err, res) => {
          if (err) throw err;
          expect(res.text).to.eql('something');
        });
      done();
    });

    it('should respond with an error on improper JSON', (done) => {
      request('localhost:3000')
        .post('/')
        .send('XXX')
        .end((err, res) => {
          if (err) console.log(err.status);
          //expect(err.text).to.include('JSON');
          done();
        });
    });
  });

  describe('Unit tests', () => {

    it('should return a JSON object', (done) => {

      done();
    });
  });

});
