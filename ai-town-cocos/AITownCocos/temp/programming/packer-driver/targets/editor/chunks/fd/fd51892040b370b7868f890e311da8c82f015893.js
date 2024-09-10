System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.lt` which doesn't coerce arguments.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is less than `other`,
   *  else `false`.
   */
  function baseLt(value, other) {
    return value < other;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseLt);
    }
  };
});
//# sourceMappingURL=fd51892040b370b7868f890e311da8c82f015893.js.map