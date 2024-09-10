System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", strictIndexOf);
    }
  };
});
//# sourceMappingURL=3e90ee990f79b35cd3515a1ef6842650213b1425.js.map