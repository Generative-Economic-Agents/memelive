System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }

    return accumulator;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayAggregator);
    }
  };
});
//# sourceMappingURL=e5a2516ce24b6a9748f4af161534033207146c7d.js.map