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
//# sourceMappingURL=3097c8a6013f892e8c9dc273be10256eb2d36c7d.js.map