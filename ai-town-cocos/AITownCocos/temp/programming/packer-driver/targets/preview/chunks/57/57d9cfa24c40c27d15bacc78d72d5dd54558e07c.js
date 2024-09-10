System.register([], function (_export, _context) {
  "use strict";

  var MAX_SAFE_INTEGER, reIsUint;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  return {
    setters: [],
    execute: function () {
      /** Used as references for various `Number` constants. */
      MAX_SAFE_INTEGER = 9007199254740991;
      /** Used to detect unsigned integer values. */

      reIsUint = /^(?:0|[1-9]\d*)$/;

      _export("default", isIndex);
    }
  };
});
//# sourceMappingURL=57d9cfa24c40c27d15bacc78d72d5dd54558e07c.js.map