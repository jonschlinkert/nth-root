/*!
 * nth-root <https://github.com/jonschlinkert/nth-root>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

module.exports = function (r, n) {
  var num = Math.pow(Math.abs(r), 1/(n || 2));
  return r < 0 ? -num : num;
};
