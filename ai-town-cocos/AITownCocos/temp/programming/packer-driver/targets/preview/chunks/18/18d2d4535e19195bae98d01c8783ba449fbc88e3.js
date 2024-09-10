System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseLt, createRelationalOperation, lt;
  return {
    setters: [function (_unresolved_) {
      baseLt = _unresolved_.default;
    }, function (_unresolved_2) {
      createRelationalOperation = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Checks if `value` is less than `other`.
       *
       * @static
       * @memberOf _
       * @since 3.9.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is less than `other`,
       *  else `false`.
       * @see _.gt
       * @example
       *
       * _.lt(1, 3);
       * // => true
       *
       * _.lt(3, 3);
       * // => false
       *
       * _.lt(3, 1);
       * // => false
       */
      lt = createRelationalOperation(baseLt);

      _export("default", lt);
    }
  };
});
//# sourceMappingURL=18d2d4535e19195bae98d01c8783ba449fbc88e3.js.map