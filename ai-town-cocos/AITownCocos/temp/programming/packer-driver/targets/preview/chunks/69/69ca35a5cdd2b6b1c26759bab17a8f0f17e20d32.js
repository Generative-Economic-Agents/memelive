System.register([], function (_export, _context) {
  "use strict";

  /**
   * Checks if `value` is `null`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
   * @example
   *
   * _.isNull(null);
   * // => true
   *
   * _.isNull(void 0);
   * // => false
   */
  function isNull(value) {
    return value === null;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", isNull);
    }
  };
});
//# sourceMappingURL=69ca35a5cdd2b6b1c26759bab17a8f0f17e20d32.js.map