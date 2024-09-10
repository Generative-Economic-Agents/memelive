System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createRelationalOperation, lte;
  return {
    setters: [function (_unresolved_) {
      createRelationalOperation = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Checks if `value` is less than or equal to `other`.
       *
       * @static
       * @memberOf _
       * @since 3.9.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is less than or equal to
       *  `other`, else `false`.
       * @see _.gte
       * @example
       *
       * _.lte(1, 3);
       * // => true
       *
       * _.lte(3, 3);
       * // => true
       *
       * _.lte(3, 1);
       * // => false
       */
      lte = createRelationalOperation(function (value, other) {
        return value <= other;
      });

      _export("default", lte);
    }
  };
});
//# sourceMappingURL=e99c2ea99cb07c5e398220572dc76bf5fae64843.js.map