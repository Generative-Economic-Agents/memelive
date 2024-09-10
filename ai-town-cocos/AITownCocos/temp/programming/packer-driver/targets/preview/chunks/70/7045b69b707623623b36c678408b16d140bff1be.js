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
//# sourceMappingURL=7045b69b707623623b36c678408b16d140bff1be.js.map