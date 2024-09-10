System.register([], function (_export, _context) {
  "use strict";

  var nativeMax, nativeMin;

  /**
   * The base implementation of `_.inRange` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to check.
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
   */
  function baseInRange(number, start, end) {
    return number >= nativeMin(start, end) && number < nativeMax(start, end);
  }

  return {
    setters: [],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeMax = Math.max;
      nativeMin = Math.min;

      _export("default", baseInRange);
    }
  };
});
//# sourceMappingURL=b88439ad765d80a08f4c3554d9b909d505634fcf.js.map