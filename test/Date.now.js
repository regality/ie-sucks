var assert = require('assert');

require('../lib/Date.now.js')

describe('Date.now', function() {
  it('should get the epoch time in milliseconds', function() {
    assert.equal(typeof Date.now(), 'number');
    assert.ok(Date.now() > 1300000000000);
    assert.ok(Date.now() < 13000000000000);
  });
});
