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
//# sourceMappingURL=f06c03593378a97a852bd6004929cfb46b33fd9e.js.map