System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseGt, createRelationalOperation, gt;
  return {
    setters: [function (_unresolved_) {
      baseGt = _unresolved_.default;
    }, function (_unresolved_2) {
      createRelationalOperation = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Checks if `value` is greater than `other`.
       *
       * @static
       * @memberOf _
       * @since 3.9.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is greater than `other`,
       *  else `false`.
       * @see _.lt
       * @example
       *
       * _.gt(3, 1);
       * // => true
       *
       * _.gt(3, 3);
       * // => false
       *
       * _.gt(1, 3);
       * // => false
       */
      gt = createRelationalOperation(baseGt);

      _export("default", gt);
    }
  };
});
//# sourceMappingURL=e8d546a68de5bcf446e3fdf555c87d0f4312f4b5.js.map