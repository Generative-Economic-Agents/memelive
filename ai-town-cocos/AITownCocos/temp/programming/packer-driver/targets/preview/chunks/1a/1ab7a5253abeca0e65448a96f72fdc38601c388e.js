System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseClamp, shuffleSelf, values;

  /**
   * The base implementation of `_.sampleSize` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */
  function baseSampleSize(collection, n) {
    var array = values(collection);
    return shuffleSelf(array, baseClamp(n, 0, array.length));
  }

  return {
    setters: [function (_unresolved_) {
      baseClamp = _unresolved_.default;
    }, function (_unresolved_2) {
      shuffleSelf = _unresolved_2.default;
    }, function (_unresolved_3) {
      values = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", baseSampleSize);
    }
  };
});
//# sourceMappingURL=1ab7a5253abeca0e65448a96f72fdc38601c388e.js.map