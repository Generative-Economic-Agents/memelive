System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSortedIndex;

  /**
   * Uses a binary search to determine the lowest index at which `value`
   * should be inserted into `array` in order to maintain its sort order.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * _.sortedIndex([30, 50], 40);
   * // => 1
   */
  function sortedIndex(array, value) {
    return baseSortedIndex(array, value);
  }

  return {
    setters: [function (_unresolved_) {
      baseSortedIndex = _unresolved_.default;
    }],
    execute: function () {
      _export("default", sortedIndex);
    }
  };
});
//# sourceMappingURL=4c93dcf15ae8bb186d2391042a9e9f56b796fad7.js.map