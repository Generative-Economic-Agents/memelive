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
//# sourceMappingURL=c2651b64bf5e526401f15da9a87e91552aadf8af.js.map