System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var isArray, isKey, stringToPath, toString;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }

    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  return {
    setters: [function (_unresolved_) {
      isArray = _unresolved_.default;
    }, function (_unresolved_2) {
      isKey = _unresolved_2.default;
    }, function (_unresolved_3) {
      stringToPath = _unresolved_3.default;
    }, function (_unresolved_4) {
      toString = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", castPath);
    }
  };
});
//# sourceMappingURL=6b821284c14dd316a6fece8fb5fb99d4085327f1.js.map