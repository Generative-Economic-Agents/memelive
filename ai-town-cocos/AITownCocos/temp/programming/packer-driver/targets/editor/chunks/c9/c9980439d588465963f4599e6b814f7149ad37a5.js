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
//# sourceMappingURL=c9980439d588465963f4599e6b814f7149ad37a5.js.map