System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseSortedIndex, eq;

  /**
   * This method is like `_.indexOf` except that it performs a binary
   * search on a sorted `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
   * // => 1
   */
  function sortedIndexOf(array, value) {
    var length = array == null ? 0 : array.length;

    if (length) {
      var index = baseSortedIndex(array, value);

      if (index < length && eq(array[index], value)) {
        return index;
      }
    }

    return -1;
  }

  return {
    setters: [function (_unresolved_) {
      baseSortedIndex = _unresolved_.default;
    }, function (_unresolved_2) {
      eq = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", sortedIndexOf);
    }
  };
});
//# sourceMappingURL=f21583624d69473268912385f9a9b87aa0482b79.js.map