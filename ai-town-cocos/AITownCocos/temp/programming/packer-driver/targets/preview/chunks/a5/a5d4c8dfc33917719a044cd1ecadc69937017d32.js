System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseSlice, toInteger;

  /**
   * Creates a slice of `array` with `n` elements taken from the end.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to take.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.takeRight([1, 2, 3]);
   * // => [3]
   *
   * _.takeRight([1, 2, 3], 2);
   * // => [2, 3]
   *
   * _.takeRight([1, 2, 3], 5);
   * // => [1, 2, 3]
   *
   * _.takeRight([1, 2, 3], 0);
   * // => []
   */
  function takeRight(array, n, guard) {
    var length = array == null ? 0 : array.length;

    if (!length) {
      return [];
    }

    n = guard || n === undefined ? 1 : toInteger(n);
    n = length - n;
    return baseSlice(array, n < 0 ? 0 : n, length);
  }

  return {
    setters: [function (_unresolved_) {
      baseSlice = _unresolved_.default;
    }, function (_unresolved_2) {
      toInteger = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", takeRight);
    }
  };
});
//# sourceMappingURL=a5d4c8dfc33917719a044cd1ecadc69937017d32.js.map