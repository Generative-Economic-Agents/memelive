System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseEach;

  /**
   * Aggregates elements of `collection` on `accumulator` with keys transformed
   * by `iteratee` and values set by `setter`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function baseAggregator(collection, setter, iteratee, accumulator) {
    baseEach(collection, function (value, key, collection) {
      setter(accumulator, value, iteratee(value), collection);
    });
    return accumulator;
  }

  return {
    setters: [function (_unresolved_) {
      baseEach = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseAggregator);
    }
  };
});
//# sourceMappingURL=f9bcbcce29d32b5a44c74883a74cb93446bd7da7.js.map