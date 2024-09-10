System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseIsRegExp, baseUnary, nodeUtil, nodeIsRegExp, isRegExp;
  return {
    setters: [function (_unresolved_) {
      baseIsRegExp = _unresolved_.default;
    }, function (_unresolved_2) {
      baseUnary = _unresolved_2.default;
    }, function (_unresolved_3) {
      nodeUtil = _unresolved_3.default;
    }],
    execute: function () {
      /* Node.js helper references. */
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
      /**
       * Checks if `value` is classified as a `RegExp` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
       * @example
       *
       * _.isRegExp(/abc/);
       * // => true
       *
       * _.isRegExp('/abc/');
       * // => false
       */

      isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

      _export("default", isRegExp);
    }
  };
});
//# sourceMappingURL=355e2b4dfd6703cbd7ffc764063cf0f5ea9a63b4.js.map