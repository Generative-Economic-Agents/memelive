System.register([], function (_export, _context) {
  "use strict";

  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */
  function isNil(value) {
    return value == null;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", isNil);
    }
  };
});
//# sourceMappingURL=5cfd5f35fa87b0b874adf3aef6e5dd4fcff1a182.js.map