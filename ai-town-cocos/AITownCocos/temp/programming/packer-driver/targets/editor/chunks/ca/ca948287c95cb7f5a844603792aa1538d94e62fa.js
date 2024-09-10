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
//# sourceMappingURL=ca948287c95cb7f5a844603792aa1538d94e62fa.js.map