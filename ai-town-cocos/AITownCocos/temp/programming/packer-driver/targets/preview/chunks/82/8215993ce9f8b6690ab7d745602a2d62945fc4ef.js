System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSortedUniq;

  /**
   * This method is like `_.uniq` except that it's designed and optimized
   * for sorted arrays.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.sortedUniq([1, 1, 2]);
   * // => [1, 2]
   */
  function sortedUniq(array) {
    return array && array.length ? baseSortedUniq(array) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseSortedUniq = _unresolved_.default;
    }],
    execute: function () {
      _export("default", sortedUniq);
    }
  };
});
//# sourceMappingURL=8215993ce9f8b6690ab7d745602a2d62945fc4ef.js.map