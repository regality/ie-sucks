var assert = require('assert');

require('../lib/Object.keys.js')

describe('Object.keys', function() {
  it('should get an objects keys', function() {
    var o = {
      seven: 7,
      eight: 8,
      nine: 9
    }
    assert.deepEqual(Object.keys(o), ['seven', 'eight', 'nine']);
  });

  it('should miss prototype properties', function() {
    var fn = function(){};
    fn.prototype.nine = 9;

    var o = new fn();
    o.seven = 7
    o.eight = 8

    assert.deepEqual(Object.keys(o), ['seven', 'eight']);
    assert.equal(o.nine, 9);
  });
});
