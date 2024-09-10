System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseForOwnRight, createBaseEach, baseEachRight;
  return {
    setters: [function (_unresolved_) {
      baseForOwnRight = _unresolved_.default;
    }, function (_unresolved_2) {
      createBaseEach = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * The base implementation of `_.forEachRight` without support for iteratee shorthands.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array|Object} Returns `collection`.
       */
      baseEachRight = createBaseEach(baseForOwnRight, true);

      _export("default", baseEachRight);
    }
  };
});
//# sourceMappingURL=5e7acbd6eb886bcec22327f62b7577a6323f0660.js.map