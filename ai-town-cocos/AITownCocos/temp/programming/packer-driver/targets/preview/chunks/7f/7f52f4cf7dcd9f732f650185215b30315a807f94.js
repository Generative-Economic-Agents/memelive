System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseUnary);
    }
  };
});
//# sourceMappingURL=7f52f4cf7dcd9f732f650185215b30315a807f94.js.map