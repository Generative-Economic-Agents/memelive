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
//# sourceMappingURL=08300bce3f13eb4898a980a56cd52787241790e0.js.map