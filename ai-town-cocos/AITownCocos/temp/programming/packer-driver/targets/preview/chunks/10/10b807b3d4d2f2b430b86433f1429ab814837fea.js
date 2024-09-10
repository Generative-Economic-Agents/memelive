System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[--length];
    }

    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }

    return accumulator;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayReduceRight);
    }
  };
});
//# sourceMappingURL=10b807b3d4d2f2b430b86433f1429ab814837fea.js.map