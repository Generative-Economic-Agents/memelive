System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);

      if (current !== undefined) {
        result = result === undefined ? current : result + current;
      }
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseSum);
    }
  };
});
//# sourceMappingURL=a207a961d6d9bc3e1cf3d7677e290051d999d91a.js.map