System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSortedIndex;

  /**
   * This method is like `_.sortedIndex` except that it returns the highest
   * index at which `value` should be inserted into `array` in order to
   * maintain its sort order.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
   * // => 4
   */
  function sortedLastIndex(array, value) {
    return baseSortedIndex(array, value, true);
  }

  return {
    setters: [function (_unresolved_) {
      baseSortedIndex = _unresolved_.default;
    }],
    execute: function () {
      _export("default", sortedLastIndex);
    }
  };
});
//# sourceMappingURL=b4b9bc3a292747138825033beb31d63126691273.js.map