System.register([], function (_export, _context) {
  "use strict";

  var nativeFloor, nativeRandom;

  /**
   * The base implementation of `_.random` without support for returning
   * floating-point numbers.
   *
   * @private
   * @param {number} lower The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the random number.
   */
  function baseRandom(lower, upper) {
    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
  }

  return {
    setters: [],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeFloor = Math.floor;
      nativeRandom = Math.random;

      _export("default", baseRandom);
    }
  };
});
//# sourceMappingURL=6be0f47a5b08a75ea6bcb680f1c81e255410eeb3.js.map