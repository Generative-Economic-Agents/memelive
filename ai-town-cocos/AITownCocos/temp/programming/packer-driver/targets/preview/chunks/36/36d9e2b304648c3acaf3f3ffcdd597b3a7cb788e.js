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
//# sourceMappingURL=36d9e2b304648c3acaf3f3ffcdd597b3a7cb788e.js.map