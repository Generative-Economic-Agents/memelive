System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var getTag, isObjectLike, setTag;

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }

  return {
    setters: [function (_unresolved_) {
      getTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObjectLike = _unresolved_2.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      setTag = '[object Set]';

      _export("default", baseIsSet);
    }
  };
});
//# sourceMappingURL=9350bb2125a831bede158313e7519281025421e9.js.map