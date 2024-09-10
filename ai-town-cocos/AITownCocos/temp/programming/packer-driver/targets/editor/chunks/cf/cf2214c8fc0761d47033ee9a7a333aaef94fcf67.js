System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseIsTypedArray, baseUnary, nodeUtil, nodeIsTypedArray, isTypedArray;
  return {
    setters: [function (_unresolved_) {
      baseIsTypedArray = _unresolved_.default;
    }, function (_unresolved_2) {
      baseUnary = _unresolved_2.default;
    }, function (_unresolved_3) {
      nodeUtil = _unresolved_3.default;
    }],
    execute: function () {
      /* Node.js helper references. */
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      /**
       * Checks if `value` is classified as a typed array.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       * @example
       *
       * _.isTypedArray(new Uint8Array);
       * // => true
       *
       * _.isTypedArray([]);
       * // => false
       */

      isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

      _export("default", isTypedArray);
    }
  };
});
//# sourceMappingURL=cf2214c8fc0761d47033ee9a7a333aaef94fcf67.js.map