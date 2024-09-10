System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isArrayLike;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }

      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }

      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }

      return collection;
    };
  }

  return {
    setters: [function (_unresolved_) {
      isArrayLike = _unresolved_.default;
    }],
    execute: function () {
      _export("default", createBaseEach);
    }
  };
});
//# sourceMappingURL=e3513c1275801d22226999de504d553fa8776db2.js.map