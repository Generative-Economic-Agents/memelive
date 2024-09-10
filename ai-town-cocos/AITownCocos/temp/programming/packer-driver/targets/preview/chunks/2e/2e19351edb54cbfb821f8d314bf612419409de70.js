System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseSlice, toInteger;

  /**
   * Creates a slice of `array` with `n` elements taken from the beginning.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to take.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.take([1, 2, 3]);
   * // => [1]
   *
   * _.take([1, 2, 3], 2);
   * // => [1, 2]
   *
   * _.take([1, 2, 3], 5);
   * // => [1, 2, 3]
   *
   * _.take([1, 2, 3], 0);
   * // => []
   */
  function take(array, n, guard) {
    if (!(array && array.length)) {
      return [];
    }

    n = guard || n === undefined ? 1 : toInteger(n);
    return baseSlice(array, 0, n < 0 ? 0 : n);
  }

  return {
    setters: [function (_unresolved_) {
      baseSlice = _unresolved_.default;
    }, function (_unresolved_2) {
      toInteger = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", take);
    }
  };
});
//# sourceMappingURL=2e19351edb54cbfb821f8d314bf612419409de70.js.map