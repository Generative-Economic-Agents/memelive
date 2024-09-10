System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseSlice, isIterateeCall, toInteger, nativeCeil, nativeMax;

  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * elements.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example
   *
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */
  function chunk(array, size, guard) {
    if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
      size = 1;
    } else {
      size = nativeMax(toInteger(size), 0);
    }

    var length = array == null ? 0 : array.length;

    if (!length || size < 1) {
      return [];
    }

    var index = 0,
        resIndex = 0,
        result = Array(nativeCeil(length / size));

    while (index < length) {
      result[resIndex++] = baseSlice(array, index, index += size);
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      baseSlice = _unresolved_.default;
    }, function (_unresolved_2) {
      isIterateeCall = _unresolved_2.default;
    }, function (_unresolved_3) {
      toInteger = _unresolved_3.default;
    }],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeCeil = Math.ceil;
      nativeMax = Math.max;

      _export("default", chunk);
    }
  };
});
//# sourceMappingURL=e9d05b3fff51513e58b8cddef3acf61adf9a66e9.js.map