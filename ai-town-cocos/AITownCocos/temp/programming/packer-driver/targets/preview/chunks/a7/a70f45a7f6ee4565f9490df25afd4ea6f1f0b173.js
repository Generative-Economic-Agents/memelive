System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseIteratee, isArrayLike, keys;

  /**
   * Creates a `_.find` or `_.findLast` function.
   *
   * @private
   * @param {Function} findIndexFunc The function to find the collection index.
   * @returns {Function} Returns the new find function.
   */
  function createFind(findIndexFunc) {
    return function (collection, predicate, fromIndex) {
      var iterable = Object(collection);

      if (!isArrayLike(collection)) {
        var iteratee = baseIteratee(predicate, 3);
        collection = keys(collection);

        predicate = function predicate(key) {
          return iteratee(iterable[key], key, iterable);
        };
      }

      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseIteratee = _unresolved_.default;
    }, function (_unresolved_2) {
      isArrayLike = _unresolved_2.default;
    }, function (_unresolved_3) {
      keys = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", createFind);
    }
  };
});
//# sourceMappingURL=a70f45a7f6ee4565f9490df25afd4ea6f1f0b173.js.map