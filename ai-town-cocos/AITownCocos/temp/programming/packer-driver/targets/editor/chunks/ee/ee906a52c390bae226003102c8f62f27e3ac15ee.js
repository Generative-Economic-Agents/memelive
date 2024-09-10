System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;

    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }

    return index;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", strictLastIndexOf);
    }
  };
});
//# sourceMappingURL=ee906a52c390bae226003102c8f62f27e3ac15ee.js.map