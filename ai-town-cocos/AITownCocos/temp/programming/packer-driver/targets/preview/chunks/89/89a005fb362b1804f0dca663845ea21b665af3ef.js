System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isInteger, MAX_SAFE_INTEGER;

  /**
   * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
   * double precision number which isn't the result of a rounded unsafe integer.
   *
   * **Note:** This method is based on
   * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
   * @example
   *
   * _.isSafeInteger(3);
   * // => true
   *
   * _.isSafeInteger(Number.MIN_VALUE);
   * // => false
   *
   * _.isSafeInteger(Infinity);
   * // => false
   *
   * _.isSafeInteger('3');
   * // => false
   */
  function isSafeInteger(value) {
    return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
  }

  return {
    setters: [function (_unresolved_) {
      isInteger = _unresolved_.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      MAX_SAFE_INTEGER = 9007199254740991;

      _export("default", isSafeInteger);
    }
  };
});
//# sourceMappingURL=89a005fb362b1804f0dca663845ea21b665af3ef.js.map