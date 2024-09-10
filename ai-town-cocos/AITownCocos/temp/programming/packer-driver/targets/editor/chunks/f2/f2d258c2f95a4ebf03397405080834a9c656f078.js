System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createRelationalOperation, gte;
  return {
    setters: [function (_unresolved_) {
      createRelationalOperation = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Checks if `value` is greater than or equal to `other`.
       *
       * @static
       * @memberOf _
       * @since 3.9.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is greater than or equal to
       *  `other`, else `false`.
       * @see _.lte
       * @example
       *
       * _.gte(3, 1);
       * // => true
       *
       * _.gte(3, 3);
       * // => true
       *
       * _.gte(1, 3);
       * // => false
       */
      gte = createRelationalOperation(function (value, other) {
        return value >= other;
      });

      _export("default", gte);
    }
  };
});
//# sourceMappingURL=f2d258c2f95a4ebf03397405080834a9c656f078.js.map