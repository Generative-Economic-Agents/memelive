System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isSymbol, MAX_ARRAY_LENGTH, MAX_ARRAY_INDEX, nativeFloor, nativeMin;

  /**
   * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
   * which invokes `iteratee` for `value` and each element of `array` to compute
   * their sort ranking. The iteratee is invoked with one argument; (value).
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} iteratee The iteratee invoked per element.
   * @param {boolean} [retHighest] Specify returning the highest qualified index.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
  function baseSortedIndexBy(array, value, iteratee, retHighest) {
    var low = 0,
        high = array == null ? 0 : array.length;

    if (high === 0) {
      return 0;
    }

    value = iteratee(value);
    var valIsNaN = value !== value,
        valIsNull = value === null,
        valIsSymbol = isSymbol(value),
        valIsUndefined = value === undefined;

    while (low < high) {
      var mid = nativeFloor((low + high) / 2),
          computed = iteratee(array[mid]),
          othIsDefined = computed !== undefined,
          othIsNull = computed === null,
          othIsReflexive = computed === computed,
          othIsSymbol = isSymbol(computed);

      if (valIsNaN) {
        var setLow = retHighest || othIsReflexive;
      } else if (valIsUndefined) {
        setLow = othIsReflexive && (retHighest || othIsDefined);
      } else if (valIsNull) {
        setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
      } else if (valIsSymbol) {
        setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
      } else if (othIsNull || othIsSymbol) {
        setLow = false;
      } else {
        setLow = retHighest ? computed <= value : computed < value;
      }

      if (setLow) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return nativeMin(high, MAX_ARRAY_INDEX);
  }

  return {
    setters: [function (_unresolved_) {
      isSymbol = _unresolved_.default;
    }],
    execute: function () {
      /** Used as references for the maximum length and index of an array. */
      MAX_ARRAY_LENGTH = 4294967295;
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeFloor = Math.floor;
      nativeMin = Math.min;

      _export("default", baseSortedIndexBy);
    }
  };
});
//# sourceMappingURL=feef726ae01a7f7c9b1c5a68bb477c3990bc1439.js.map