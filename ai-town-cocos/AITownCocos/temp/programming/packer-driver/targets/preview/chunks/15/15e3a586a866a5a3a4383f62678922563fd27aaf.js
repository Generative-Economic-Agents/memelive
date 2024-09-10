System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createWrap, WRAP_ARY_FLAG;

  /**
   * Creates a function that invokes `func`, with up to `n` arguments,
   * ignoring any additional arguments.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Function
   * @param {Function} func The function to cap arguments for.
   * @param {number} [n=func.length] The arity cap.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Function} Returns the new capped function.
   * @example
   *
   * _.map(['6', '8', '10'], _.ary(parseInt, 1));
   * // => [6, 8, 10]
   */
  function ary(func, n, guard) {
    n = guard ? undefined : n;
    n = func && n == null ? func.length : n;
    return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
  }

  return {
    setters: [function (_unresolved_) {
      createWrap = _unresolved_.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_ARY_FLAG = 128;

      _export("default", ary);
    }
  };
});
//# sourceMappingURL=15e3a586a866a5a3a4383f62678922563fd27aaf.js.map