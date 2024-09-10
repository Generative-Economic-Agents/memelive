System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function (object) {
      if (object == null) {
        return false;
      }

      return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
  }

  return {
    setters: [],
    execute: function () {
      _export("default", matchesStrictComparable);
    }
  };
});
//# sourceMappingURL=077d510699f63bf1833386f6683be992613f9a30.js.map