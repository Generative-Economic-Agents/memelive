System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var ary;

  /**
   * Creates a function that accepts up to one argument, ignoring any
   * additional arguments.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Function
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   * @example
   *
   * _.map(['6', '8', '10'], _.unary(parseInt));
   * // => [6, 8, 10]
   */
  function unary(func) {
    return ary(func, 1);
  }

  return {
    setters: [function (_unresolved_) {
      ary = _unresolved_.default;
    }],
    execute: function () {
      _export("default", unary);
    }
  };
});
//# sourceMappingURL=b415459f1f88797db7f56eefcc74870047c7a8d7.js.map