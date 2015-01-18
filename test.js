var expect = require('chai').expect;
var evalin = require('./');

describe('evalin', function() {
  it('should run python', function(done) {
    var lang = 'python/cpython-2.7.8';
    evalin('print "test"', '').then(function(res) {
      expect(res.lang).to.equal(lang);
      expect(res.output).to.equal('test\n');
      done();
    });
  });
});
