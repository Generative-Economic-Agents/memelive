System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseIsSet, baseUnary, nodeUtil, nodeIsSet, isSet;
  return {
    setters: [function (_unresolved_) {
      baseIsSet = _unresolved_.default;
    }, function (_unresolved_2) {
      baseUnary = _unresolved_2.default;
    }, function (_unresolved_3) {
      nodeUtil = _unresolved_3.default;
    }],
    execute: function () {
      /* Node.js helper references. */
      nodeIsSet = nodeUtil && nodeUtil.isSet;
      /**
       * Checks if `value` is classified as a `Set` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a set, else `false`.
       * @example
       *
       * _.isSet(new Set);
       * // => true
       *
       * _.isSet(new WeakSet);
       * // => false
       */

      isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

      _export("default", isSet);
    }
  };
});
//# sourceMappingURL=9c63ae7cd28bb83f4c93d9dd8abc8912f7b26e5e.js.map