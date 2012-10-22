var assert = require('assert');

require('../lib/Array.prototype.map.js')

describe('Array.prototype.map', function() {
  it('should map values', function() {
    var arr = [1, 2, 3, 4];
    var arr2 = arr.map(function(v) {
      return v * v;
    });
    assert.deepEqual(arr2, [1, 4, 9, 16]);
  });

  it('should map empty arrays', function() {
    assert.deepEqual(
      [].map(function(){}),
      []
    )
  });
});
