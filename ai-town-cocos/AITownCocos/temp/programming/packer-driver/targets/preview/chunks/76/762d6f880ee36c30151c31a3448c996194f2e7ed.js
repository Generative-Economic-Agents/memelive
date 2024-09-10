System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var toString, upperFirst;

  /**
   * Converts the first character of `string` to upper case and the remaining
   * to lower case.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */
  function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
  }

  return {
    setters: [function (_unresolved_) {
      toString = _unresolved_.default;
    }, function (_unresolved_2) {
      upperFirst = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", capitalize);
    }
  };
});
//# sourceMappingURL=762d6f880ee36c30151c31a3448c996194f2e7ed.js.map