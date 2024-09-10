System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);

    while (length--) {
      array[length] = array[length].value;
    }

    return array;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseSortBy);
    }
  };
});
//# sourceMappingURL=6cc51ad0980dc50dc12821763aa084354f90880f.js.map