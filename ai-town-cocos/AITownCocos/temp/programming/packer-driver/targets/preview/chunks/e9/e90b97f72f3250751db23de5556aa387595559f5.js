System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSum, NAN;

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? baseSum(array, iteratee) / length : NAN;
  }

  return {
    setters: [function (_unresolved_) {
      baseSum = _unresolved_.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      NAN = 0 / 0;

      _export("default", baseMean);
    }
  };
});
//# sourceMappingURL=e90b97f72f3250751db23de5556aa387595559f5.js.map