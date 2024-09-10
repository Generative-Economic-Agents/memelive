System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var baseMatches, baseMatchesProperty, identity, isArray, property;

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }

    if (value == null) {
      return identity;
    }

    if (typeof value == 'object') {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }

    return property(value);
  }

  return {
    setters: [function (_unresolved_) {
      baseMatches = _unresolved_.default;
    }, function (_unresolved_2) {
      baseMatchesProperty = _unresolved_2.default;
    }, function (_unresolved_3) {
      identity = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArray = _unresolved_4.default;
    }, function (_unresolved_5) {
      property = _unresolved_5.default;
    }],
    execute: function () {
      _export("default", baseIteratee);
    }
  };
});
//# sourceMappingURL=1e0007bfedbaf0fe2436bfbb74c1d5949c37fb86.js.map