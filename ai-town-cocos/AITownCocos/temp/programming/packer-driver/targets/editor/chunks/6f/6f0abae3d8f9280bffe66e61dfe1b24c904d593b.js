System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseIsDate, baseUnary, nodeUtil, nodeIsDate, isDate;
  return {
    setters: [function (_unresolved_) {
      baseIsDate = _unresolved_.default;
    }, function (_unresolved_2) {
      baseUnary = _unresolved_2.default;
    }, function (_unresolved_3) {
      nodeUtil = _unresolved_3.default;
    }],
    execute: function () {
      /* Node.js helper references. */
      nodeIsDate = nodeUtil && nodeUtil.isDate;
      /**
       * Checks if `value` is classified as a `Date` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
       * @example
       *
       * _.isDate(new Date);
       * // => true
       *
       * _.isDate('Mon April 23 2012');
       * // => false
       */

      isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

      _export("default", isDate);
    }
  };
});
//# sourceMappingURL=6f0abae3d8f9280bffe66e61dfe1b24c904d593b.js.map