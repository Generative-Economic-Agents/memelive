System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSlice;

  /**
   * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
   * without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to query.
   * @param {Function} predicate The function invoked per iteration.
   * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseWhile(array, predicate, isDrop, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}

    return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
  }

  return {
    setters: [function (_unresolved_) {
      baseSlice = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseWhile);
    }
  };
});
//# sourceMappingURL=94968e30214d287b9b4fabfcbb960d1d4d1d9cc5.js.map