System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseUniq;

  /**
   * Creates a duplicate-free version of an array, using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons, in which only the first occurrence of each element
   * is kept. The order of result values is determined by the order they occur
   * in the array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
  function uniq(array) {
    return array && array.length ? baseUniq(array) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseUniq = _unresolved_.default;
    }],
    execute: function () {
      _export("default", uniq);
    }
  };
});
//# sourceMappingURL=82b11d15154310e1fa68d4b6430974bae3c671e9.js.map