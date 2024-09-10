System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseForRight, keys;

  /**
   * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwnRight(object, iteratee) {
    return object && baseForRight(object, iteratee, keys);
  }

  return {
    setters: [function (_unresolved_) {
      baseForRight = _unresolved_.default;
    }, function (_unresolved_2) {
      keys = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseForOwnRight);
    }
  };
});
//# sourceMappingURL=df2b936a4a521364664662f799ed6f67bdfd8246.js.map