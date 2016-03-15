require(__dirname + '/testing-server');
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
var expect = chai.expect;
var request = chai.request;
var port = 'localhost:3000';


describe('testing functionality of the server', function() {

  it('should POST', (done) => {
    request('localhost:3000')
      .post('/test')
      .send({msg:'hello'})
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('POST request sent to /test');
        done();
      });
  });
});


describe('testing middleware JSON parsing function', function() {

  it('should give respond with the JSON object', (done) => {
    request(port)
      .post('/testfn')
      .send({miccheck:'oneTwo'})
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('{"miccheck":"oneTwo"}');
        done();
      });
  });

  it('should give error for invalid JSON', (done) => {
    request(port)
      .post('/testfn')
      .send('hello')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('invalid JSON');
        done();
      });
  });

});
