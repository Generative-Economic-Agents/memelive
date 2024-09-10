System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseGetTag, isArray, isObjectLike, stringTag;

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isArray = _unresolved_2.default;
    }, function (_unresolved_3) {
      isObjectLike = _unresolved_3.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      stringTag = '[object String]';

      _export("default", isString);
    }
  };
});
//# sourceMappingURL=e91bfa38258878f4f76a1f2c5e66a93ae233b85e.js.map