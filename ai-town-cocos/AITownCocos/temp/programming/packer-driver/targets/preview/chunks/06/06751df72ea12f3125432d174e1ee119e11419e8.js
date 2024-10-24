System.register([], function (_export, _context) {
  "use strict";

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   *
   * _.isUndefined(null);
   * // => false
   */
  function isUndefined(value) {
    return value === undefined;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", isUndefined);
    }
  };
});
//# sourceMappingURL=06751df72ea12f3125432d174e1ee119e11419e8.js.map