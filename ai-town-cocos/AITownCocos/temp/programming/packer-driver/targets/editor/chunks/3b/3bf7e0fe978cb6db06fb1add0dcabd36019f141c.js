System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var before;

  /**
   * Creates a function that is restricted to invoking `func` once. Repeat calls
   * to the function return the value of the first invocation. The `func` is
   * invoked with the `this` binding and arguments of the created function.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var initialize = _.once(createApplication);
   * initialize();
   * initialize();
   * // => `createApplication` is invoked once
   */
  function once(func) {
    return before(2, func);
  }

  return {
    setters: [function (_unresolved_) {
      before = _unresolved_.default;
    }],
    execute: function () {
      _export("default", once);
    }
  };
});
//# sourceMappingURL=3bf7e0fe978cb6db06fb1add0dcabd36019f141c.js.map