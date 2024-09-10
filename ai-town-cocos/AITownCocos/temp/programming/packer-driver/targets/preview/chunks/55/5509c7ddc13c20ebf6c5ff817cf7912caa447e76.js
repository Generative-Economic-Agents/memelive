System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.gt` which doesn't coerce arguments.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is greater than `other`,
   *  else `false`.
   */
  function baseGt(value, other) {
    return value > other;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseGt);
    }
  };
});
//# sourceMappingURL=5509c7ddc13c20ebf6c5ff817cf7912caa447e76.js.map