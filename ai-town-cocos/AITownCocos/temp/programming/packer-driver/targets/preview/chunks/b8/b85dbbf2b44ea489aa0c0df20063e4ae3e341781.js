System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseFor, keys;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }

  return {
    setters: [function (_unresolved_) {
      baseFor = _unresolved_.default;
    }, function (_unresolved_2) {
      keys = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseForOwn);
    }
  };
});
//# sourceMappingURL=b85dbbf2b44ea489aa0c0df20063e4ae3e341781.js.map