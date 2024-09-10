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
//# sourceMappingURL=01618fca21be4838e040eba613d53dd658e9a569.js.map