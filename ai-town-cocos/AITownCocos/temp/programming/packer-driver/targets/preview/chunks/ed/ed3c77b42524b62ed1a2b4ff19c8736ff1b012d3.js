System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseGetTag, isObjectLike, numberTag;

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObjectLike = _unresolved_2.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      numberTag = '[object Number]';

      _export("default", isNumber);
    }
  };
});
//# sourceMappingURL=ed3c77b42524b62ed1a2b4ff19c8736ff1b012d3.js.map