var assert = require('assert');

require('../lib/Array.indexOf.js')

describe('Array.indexOf', function() {
  it('should find the first index', function() {
    var arr = [1, 2, 3, 4, 3];
    var index = arr.indexOf(3);
    assert.equal(index, 2);
  });

  it('should not find a non-existent element', function() {
    var arr = [1, 2, 3, 4];
    var index = arr.indexOf(30);
    assert.equal(index, -1);
  });

});
