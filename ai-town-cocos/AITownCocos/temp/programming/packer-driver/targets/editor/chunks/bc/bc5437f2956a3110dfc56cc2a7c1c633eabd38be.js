System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseTimes);
    }
  };
});
//# sourceMappingURL=bc5437f2956a3110dfc56cc2a7c1c633eabd38be.js.map