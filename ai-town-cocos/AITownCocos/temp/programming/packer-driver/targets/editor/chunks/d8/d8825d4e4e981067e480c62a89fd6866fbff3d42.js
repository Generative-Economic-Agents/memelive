System.register([], function (_export, _context) {
  "use strict";

  var MAX_SAFE_INTEGER;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  return {
    setters: [],
    execute: function () {
      /** Used as references for various `Number` constants. */
      MAX_SAFE_INTEGER = 9007199254740991;

      _export("default", isLength);
    }
  };
});
//# sourceMappingURL=d8825d4e4e981067e480c62a89fd6866fbff3d42.js.map