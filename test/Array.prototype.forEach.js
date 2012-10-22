var assert = require('assert');

require('../lib/Array.prototype.forEach.js')

describe('Array.prototype.forEach', function() {
  it('should iterate over each element', function() {
    var arr = [1, 2, 3, 4];
    arr.forEach(function(v, i) {
      assert.equal(v, i + 1);
    });
  });
});
