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
//# sourceMappingURL=4bc1b65394ea003fd48f57a65a4079b1bf5163ec.js.map