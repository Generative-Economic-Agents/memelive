System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseForOwn, createBaseEach, baseEach;
  return {
    setters: [function (_unresolved_) {
      baseForOwn = _unresolved_.default;
    }, function (_unresolved_2) {
      createBaseEach = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * The base implementation of `_.forEach` without support for iteratee shorthands.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array|Object} Returns `collection`.
       */
      baseEach = createBaseEach(baseForOwn);

      _export("default", baseEach);
    }
  };
});
//# sourceMappingURL=87aa335991702351b75c65cef46cba588dc0b21b.js.map