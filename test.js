/*!
 * nth-root <https://github.com/jonschlinkert/nth-root>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var nthRoot = require('./');

it('should use square root by default', function () {
  assert.equal(nthRoot(16), 4);
  assert.equal(nthRoot(-16), -4);
});

it('should allow a custom degree to be passed:', function () {
  assert.equal(nthRoot(-27, 3), -3);
  assert.equal(nthRoot(27, 3), 3);
  assert.equal(nthRoot(-8, 3), -2);
  assert.equal(nthRoot(8, 3), 2);
});
