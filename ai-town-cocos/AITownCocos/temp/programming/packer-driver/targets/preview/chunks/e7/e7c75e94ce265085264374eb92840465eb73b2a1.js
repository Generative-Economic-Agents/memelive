System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseGetTag, isObjectLike, dateTag;

  /**
   * The base implementation of `_.isDate` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   */
  function baseIsDate(value) {
    return isObjectLike(value) && baseGetTag(value) == dateTag;
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObjectLike = _unresolved_2.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      dateTag = '[object Date]';

      _export("default", baseIsDate);
    }
  };
});
//# sourceMappingURL=e7c75e94ce265085264374eb92840465eb73b2a1.js.map