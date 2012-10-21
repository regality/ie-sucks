var assert = require('assert');

require('../lib/Array.filter.js')

describe('Array.filter', function() {
  it('should filter elements', function() {
    var arr = [1, 2, 3, 4].filter(function(v) {
      return v > 2;
    });
    assert.deepEqual(arr, [3, 4]);
  });

  it('should get everything', function() {
    var arr = [1, 2, 3, 4].filter(function(v) {
      return true;
    });
    assert.deepEqual(arr, [1, 2, 3, 4]);
  });

  it('should get nothing', function() {
    var arr = [1, 2, 3, 4].filter(function(v) {
      return false;
    });
    assert.deepEqual(arr, []);
  });

});
