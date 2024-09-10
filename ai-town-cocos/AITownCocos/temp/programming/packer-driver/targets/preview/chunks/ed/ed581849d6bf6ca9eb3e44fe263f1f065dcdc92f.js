System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseRepeat, isIterateeCall, toInteger, toString;

  /**
   * Repeats the given string `n` times.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to repeat.
   * @param {number} [n=1] The number of times to repeat the string.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the repeated string.
   * @example
   *
   * _.repeat('*', 3);
   * // => '***'
   *
   * _.repeat('abc', 2);
   * // => 'abcabc'
   *
   * _.repeat('abc', 0);
   * // => ''
   */
  function repeat(string, n, guard) {
    if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
      n = 1;
    } else {
      n = toInteger(n);
    }

    return baseRepeat(toString(string), n);
  }

  return {
    setters: [function (_unresolved_) {
      baseRepeat = _unresolved_.default;
    }, function (_unresolved_2) {
      isIterateeCall = _unresolved_2.default;
    }, function (_unresolved_3) {
      toInteger = _unresolved_3.default;
    }, function (_unresolved_4) {
      toString = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", repeat);
    }
  };
});
//# sourceMappingURL=ed581849d6bf6ca9eb3e44fe263f1f065dcdc92f.js.map