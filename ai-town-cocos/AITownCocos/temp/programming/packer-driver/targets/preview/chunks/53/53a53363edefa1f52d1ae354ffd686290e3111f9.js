System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var identity;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction(value) {
    return typeof value == 'function' ? value : identity;
  }

  return {
    setters: [function (_unresolved_) {
      identity = _unresolved_.default;
    }],
    execute: function () {
      _export("default", castFunction);
    }
  };
});
//# sourceMappingURL=53a53363edefa1f52d1ae354ffd686290e3111f9.js.map