System.register([], function (_export, _context) {
  "use strict";

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  return {
    setters: [],
    execute: function () {
      _export("default", overArg);
    }
  };
});
//# sourceMappingURL=2aaca76931202519aaefe6a3b503923fa9d74900.js.map