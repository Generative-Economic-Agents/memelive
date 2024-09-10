System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseIsMap, baseUnary, nodeUtil, nodeIsMap, isMap;
  return {
    setters: [function (_unresolved_) {
      baseIsMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseUnary = _unresolved_2.default;
    }, function (_unresolved_3) {
      nodeUtil = _unresolved_3.default;
    }],
    execute: function () {
      /* Node.js helper references. */
      nodeIsMap = nodeUtil && nodeUtil.isMap;
      /**
       * Checks if `value` is classified as a `Map` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a map, else `false`.
       * @example
       *
       * _.isMap(new Map);
       * // => true
       *
       * _.isMap(new WeakMap);
       * // => false
       */

      isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

      _export("default", isMap);
    }
  };
});
//# sourceMappingURL=b7dfb04449f303e6e606a47018e88324e8cd5ae7.js.map