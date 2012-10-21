var assert = require('assert');

require('../lib/Array.reduce.js')

describe('Array.reduce', function() {
  it('should reduce values', function() {
    var arr = [1, 1, 1, 1];
    var sum = arr.reduce(function(a, b) { return a + b }, 0);
    assert.equal(sum, 4);
  });

  it('should return an initial value', function() {
    var initial = [].reduce(function(){}, 7);
    assert.equal(initial, 7);
  });

  it('should return an undefined initial value', function() {
    var initial = [].reduce(function(){});
    assert.equal(initial, undefined);
  });
});
