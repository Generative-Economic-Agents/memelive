System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseGetTag, isObjectLike, argsTag;

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObjectLike = _unresolved_2.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      argsTag = '[object Arguments]';

      _export("default", baseIsArguments);
    }
  };
});
//# sourceMappingURL=c832ec03a5087b05422e029816d06355787d9bf5.js.map