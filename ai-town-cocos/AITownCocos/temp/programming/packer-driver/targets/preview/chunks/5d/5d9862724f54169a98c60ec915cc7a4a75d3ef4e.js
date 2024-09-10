System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseClamp, copyArray, shuffleSelf;

  /**
   * A specialized version of `_.sampleSize` for arrays.
   *
   * @private
   * @param {Array} array The array to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */
  function arraySampleSize(array, n) {
    return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
  }

  return {
    setters: [function (_unresolved_) {
      baseClamp = _unresolved_.default;
    }, function (_unresolved_2) {
      copyArray = _unresolved_2.default;
    }, function (_unresolved_3) {
      shuffleSelf = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", arraySampleSize);
    }
  };
});
//# sourceMappingURL=5d9862724f54169a98c60ec915cc7a4a75d3ef4e.js.map