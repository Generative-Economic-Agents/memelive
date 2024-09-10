System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseIsArrayBuffer, baseUnary, nodeUtil, nodeIsArrayBuffer, isArrayBuffer;
  return {
    setters: [function (_unresolved_) {
      baseIsArrayBuffer = _unresolved_.default;
    }, function (_unresolved_2) {
      baseUnary = _unresolved_2.default;
    }, function (_unresolved_3) {
      nodeUtil = _unresolved_3.default;
    }],
    execute: function () {
      /* Node.js helper references. */
      nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer;
      /**
       * Checks if `value` is classified as an `ArrayBuffer` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
       * @example
       *
       * _.isArrayBuffer(new ArrayBuffer(2));
       * // => true
       *
       * _.isArrayBuffer(new Array(2));
       * // => false
       */

      isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

      _export("default", isArrayBuffer);
    }
  };
});
//# sourceMappingURL=52d2f899aa2a4de5ce552eb21bf89261fe45a989.js.map