var assert = require('assert');

require('../lib/Object.create.js')

describe('Object.create', function() {
  it('should create an object', function() {
    var proto = {
      seven: 7
    }
    var o = Object.create(proto);
    assert.ok(!o.hasOwnProperty('seven'));
    assert.equal(o.seven, 7);
  });
});
