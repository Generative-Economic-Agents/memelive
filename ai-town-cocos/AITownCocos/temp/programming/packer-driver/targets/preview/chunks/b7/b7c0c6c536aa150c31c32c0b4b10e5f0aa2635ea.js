System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isObject;

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }

  return {
    setters: [function (_unresolved_) {
      isObject = _unresolved_.default;
    }],
    execute: function () {
      _export("default", isStrictComparable);
    }
  };
});
//# sourceMappingURL=b7c0c6c536aa150c31c32c0b4b10e5f0aa2635ea.js.map