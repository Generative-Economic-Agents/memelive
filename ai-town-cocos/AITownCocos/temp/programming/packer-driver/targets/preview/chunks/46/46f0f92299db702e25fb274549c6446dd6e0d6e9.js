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
//# sourceMappingURL=46f0f92299db702e25fb274549c6446dd6e0d6e9.js.map