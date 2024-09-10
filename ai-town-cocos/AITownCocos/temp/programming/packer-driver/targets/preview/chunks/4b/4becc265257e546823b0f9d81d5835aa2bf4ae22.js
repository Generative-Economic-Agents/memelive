System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseEach;

  /**
   * The base implementation of `_.filter` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function baseFilter(collection, predicate) {
    var result = [];
    baseEach(collection, function (value, index, collection) {
      if (predicate(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      baseEach = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseFilter);
    }
  };
});
//# sourceMappingURL=4becc265257e546823b0f9d81d5835aa2bf4ae22.js.map