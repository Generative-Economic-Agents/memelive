System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayEach);
    }
  };
});
//# sourceMappingURL=cdbc05b20e32e90cc96dd40e631917e2c6b3cfe9.js.map