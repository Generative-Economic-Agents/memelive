System.register([], function (_export, _context) {
  "use strict";

  /**
   * Checks `value` to determine whether a default value should be returned in
   * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
   * or `undefined`.
   *
   * @static
   * @memberOf _
   * @since 4.14.0
   * @category Util
   * @param {*} value The value to check.
   * @param {*} defaultValue The default value.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * _.defaultTo(1, 10);
   * // => 1
   *
   * _.defaultTo(undefined, 10);
   * // => 10
   */
  function defaultTo(value, defaultValue) {
    return value == null || value !== value ? defaultValue : value;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", defaultTo);
    }
  };
});
//# sourceMappingURL=2ce214a22dda1e588c7961401ab06ae70a9958e2.js.map