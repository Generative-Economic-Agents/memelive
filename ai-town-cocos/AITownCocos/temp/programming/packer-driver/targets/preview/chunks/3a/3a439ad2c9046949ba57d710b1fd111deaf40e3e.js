System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseEach;

  /**
   * The base implementation of `_.some` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function baseSome(collection, predicate) {
    var result;
    baseEach(collection, function (value, index, collection) {
      result = predicate(value, index, collection);
      return !result;
    });
    return !!result;
  }

  return {
    setters: [function (_unresolved_) {
      baseEach = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseSome);
    }
  };
});
//# sourceMappingURL=3a439ad2c9046949ba57d710b1fd111deaf40e3e.js.map