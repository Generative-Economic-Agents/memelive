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
//# sourceMappingURL=bc7bf80e7468e6f055b0345ba03387de79c40e39.js.map