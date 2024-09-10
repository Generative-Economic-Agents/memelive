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
//# sourceMappingURL=41bf487ed304f7482dce94cc3efd8eb428d37e3c.js.map