'use strinct';
var chai = require('chai');
var chaiHTTP = require('chai-http');

require(__dirname + '/../server.js');
chai.use(chaiHTTP);
var request = chai.request;
var expect = chai.expect;

describe('Testing middleware to set req.body', ()=>{
  // after(server.close());
  it('should catch err when proper json obj is not being passed', (done)=>{
    request('localhost:3000')
    .post('/otters')
    .send('{"Instructor":"Ms Peggy"}')
    .end((err, res)=>{
      console.log('hitting test');
      expect(err).to.be.null;
      expect(res.text).to.eql('{"Instructor":"Ms Peggy"}');
      done();
    });
  });
});
