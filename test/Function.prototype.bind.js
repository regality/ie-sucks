var assert = require('assert');

require('../lib/Function.prototype.bind.js')

describe('Function.prototype.bind', function() {
  it('should bind a function to a context', function() {
    var fn = function() {
      assert.equal(this, 7);
    }
    var bound = fn.bind(7);
    bound();
  });

  it('should bind a function to a context and accept arguments', function() {
    var fn = function(eight) {
      assert.equal(this, 7);
      assert.equal(eight, 8)
    }
    var bound = fn.bind(7);
    bound(8);
  });

  it('should bind a function to a context with arguments', function() {
    var fn = function(eight) {
      assert.equal(this, 7);
      assert.equal(eight, 8)
    }
    var bound = fn.bind(7, 8);
    bound();
  });
});
