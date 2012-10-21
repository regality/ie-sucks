var assert = require('assert');

require('../lib/Array.every')

describe('Array.every', function() {
  it('should test every element', function() {
    var arr = [1,2,3];
    var ok = arr.every(function(v) {
      return v >= 0;
    });
    assert.ok(ok);
  });

  it('should test every passing element', function() {
    var arr = [1,2,3];
    var ok = arr.every(function(v) {
      return v <= 2;
    });
    assert.ok(!ok);
  });

});
