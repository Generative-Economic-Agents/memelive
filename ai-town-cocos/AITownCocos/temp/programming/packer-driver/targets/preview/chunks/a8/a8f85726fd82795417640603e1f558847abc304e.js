System.register([], function (_export, _context) {
  "use strict";

  var nativeCeil, nativeMax;

  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */
  function baseRange(start, end, step, fromRight) {
    var index = -1,
        length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
        result = Array(length);

    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeCeil = Math.ceil;
      nativeMax = Math.max;

      _export("default", baseRange);
    }
  };
});
//# sourceMappingURL=a8f85726fd82795417640603e1f558847abc304e.js.map