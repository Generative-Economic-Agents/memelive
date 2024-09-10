System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseEach, isArrayLike;

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function (value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      baseEach = _unresolved_.default;
    }, function (_unresolved_2) {
      isArrayLike = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseMap);
    }
  };
});
//# sourceMappingURL=376b0a4b394157ee5d6d1661237154101c44081f.js.map