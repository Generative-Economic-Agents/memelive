System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseIsNaN);
    }
  };
});
//# sourceMappingURL=0fe64d48e8f4681122d351f6afc5b863f7130dd5.js.map