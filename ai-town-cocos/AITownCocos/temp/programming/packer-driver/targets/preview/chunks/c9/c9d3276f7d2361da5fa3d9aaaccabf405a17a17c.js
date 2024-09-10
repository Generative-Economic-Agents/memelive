System.register([], function (_export, _context) {
  "use strict";

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }

    return -1;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseIndexOfWith);
    }
  };
});
//# sourceMappingURL=c9d3276f7d2361da5fa3d9aaaccabf405a17a17c.js.map