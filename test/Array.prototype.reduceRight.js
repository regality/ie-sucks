var assert = require('assert');

require('../lib/Array.prototype.reduceRight.js')

describe('Array.prototype.reduceRight', function() {
  it('should reduce values', function() {
    var arr = [1, 1, 1, 1];
    var sum = arr.reduceRight(function(a, b) { return a + b }, 0);
    assert.equal(sum, 4);
  });

  it('should reduce values from the right', function() {
    var arr = [9, 1, 1, 1];
    var last = arr.reduceRight(function(a, b) { return b });
    assert.equal(last, 9);
  });

  it('should return an initial value', function() {
    var initial = [].reduceRight(function(){}, 7);
    assert.equal(initial, 7);
  });

  it('should return an undefined initial value', function() {
    var initial = [].reduceRight(function(){});
    assert.equal(initial, undefined);
  });
});
