System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIsMatch, getMatchData;

  /**
   * Performs a partial deep comparison between `object` and `source` to
   * determine if `object` contains equivalent property values.
   *
   * **Note:** This method is equivalent to `_.matches` when `source` is
   * partially applied.
   *
   * Partial comparisons will match empty array and empty object `source`
   * values against any array or object value, respectively. See `_.isEqual`
   * for a list of supported value comparisons.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   *
   * _.isMatch(object, { 'b': 2 });
   * // => true
   *
   * _.isMatch(object, { 'b': 1 });
   * // => false
   */
  function isMatch(object, source) {
    return object === source || baseIsMatch(object, source, getMatchData(source));
  }

  return {
    setters: [function (_unresolved_) {
      baseIsMatch = _unresolved_.default;
    }, function (_unresolved_2) {
      getMatchData = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", isMatch);
    }
  };
});
//# sourceMappingURL=8176bd6d1717cb47df1ab7abdece98f04ac0b91a.js.map