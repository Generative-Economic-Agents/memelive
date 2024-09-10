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
//# sourceMappingURL=a5fe92afe5666be8a9cc271c9d39c3fd42832d63.js.map