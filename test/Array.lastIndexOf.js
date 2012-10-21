var assert = require('assert');

require('../lib/Array.lastIndexOf.js')

describe('Array.lastIndexOf', function() {
  it('should find the last index', function() {
    var arr = [1, 2, 3, 4, 3];
    var index = arr.lastIndexOf(3);
    assert.equal(index, 4);
  });

  it('should not find a non-existent element', function() {
    var arr = [1, 2, 3, 4];
    var index = arr.lastIndexOf(30);
    assert.equal(index, -1);
  });

});
