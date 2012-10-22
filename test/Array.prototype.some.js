var assert = require('assert');

require('../lib/Array.prototype.some')

describe('Array.prototype.some', function() {
  it('should test some elements', function() {
    var arr = [1,2,3];
    var ok = arr.some(function(v) {
      return v >= 0;
    });
    assert.ok(ok);
  });

  it('should not find any elements', function() {
    var arr = [1,2,3];
    var ok = arr.some(function(v) {
      return v < 0;
    });
    assert.ok(!ok);
  });

});
