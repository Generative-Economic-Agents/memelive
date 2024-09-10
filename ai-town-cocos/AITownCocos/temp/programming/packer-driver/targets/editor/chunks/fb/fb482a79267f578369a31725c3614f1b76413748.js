System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseClamp, toInteger, MAX_SAFE_INTEGER;

  /**
   * Converts `value` to a safe integer. A safe integer can be compared and
   * represented correctly.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toSafeInteger(3.2);
   * // => 3
   *
   * _.toSafeInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toSafeInteger(Infinity);
   * // => 9007199254740991
   *
   * _.toSafeInteger('3.2');
   * // => 3
   */
  function toSafeInteger(value) {
    return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
  }

  return {
    setters: [function (_unresolved_) {
      baseClamp = _unresolved_.default;
    }, function (_unresolved_2) {
      toInteger = _unresolved_2.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      MAX_SAFE_INTEGER = 9007199254740991;

      _export("default", toSafeInteger);
    }
  };
});
//# sourceMappingURL=fb482a79267f578369a31725c3614f1b76413748.js.map