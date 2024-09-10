System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseSortedIndexBy, identity, isSymbol, MAX_ARRAY_LENGTH, HALF_MAX_ARRAY_LENGTH;

  /**
   * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
   * performs a binary search of `array` to determine the index at which `value`
   * should be inserted into `array` in order to maintain its sort order.
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {boolean} [retHighest] Specify returning the highest qualified index.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
  function baseSortedIndex(array, value, retHighest) {
    var low = 0,
        high = array == null ? low : array.length;

    if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
      while (low < high) {
        var mid = low + high >>> 1,
            computed = array[mid];

        if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }

      return high;
    }

    return baseSortedIndexBy(array, value, identity, retHighest);
  }

  return {
    setters: [function (_unresolved_) {
      baseSortedIndexBy = _unresolved_.default;
    }, function (_unresolved_2) {
      identity = _unresolved_2.default;
    }, function (_unresolved_3) {
      isSymbol = _unresolved_3.default;
    }],
    execute: function () {
      /** Used as references for the maximum length and index of an array. */
      MAX_ARRAY_LENGTH = 4294967295;
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

      _export("default", baseSortedIndex);
    }
  };
});
//# sourceMappingURL=0c423894ef7876ad7c1a1f42ee1c9aa0eb4a4909.js.map