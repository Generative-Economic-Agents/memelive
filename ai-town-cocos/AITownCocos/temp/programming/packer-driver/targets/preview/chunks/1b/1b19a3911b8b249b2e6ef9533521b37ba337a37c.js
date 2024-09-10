System.register([], function (_export, _context) {
  "use strict";

  var MAX_SAFE_INTEGER, nativeFloor;

  /**
   * The base implementation of `_.repeat` which doesn't coerce arguments.
   *
   * @private
   * @param {string} string The string to repeat.
   * @param {number} n The number of times to repeat the string.
   * @returns {string} Returns the repeated string.
   */
  function baseRepeat(string, n) {
    var result = '';

    if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
      return result;
    } // Leverage the exponentiation by squaring algorithm for a faster repeat.
    // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.


    do {
      if (n % 2) {
        result += string;
      }

      n = nativeFloor(n / 2);

      if (n) {
        string += string;
      }
    } while (n);

    return result;
  }

  return {
    setters: [],
    execute: function () {
      /** Used as references for various `Number` constants. */
      MAX_SAFE_INTEGER = 9007199254740991;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeFloor = Math.floor;

      _export("default", baseRepeat);
    }
  };
});
//# sourceMappingURL=1b19a3911b8b249b2e6ef9533521b37ba337a37c.js.map