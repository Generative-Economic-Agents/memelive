System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  return {
    setters: [function (_unresolved_) {
      baseToString = _unresolved_.default;
    }],
    execute: function () {
      _export("default", toString);
    }
  };
});
//# sourceMappingURL=f1c6f7bb705801f547eb3939ff3e69409c030cb3.js.map