System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseClone, baseMatchesProperty, CLONE_DEEP_FLAG;

  /**
   * Creates a function that performs a partial deep comparison between the
   * value at `path` of a given object to `srcValue`, returning `true` if the
   * object value is equivalent, else `false`.
   *
   * **Note:** Partial comparisons will match empty array and empty object
   * `srcValue` values against any array or object value, respectively. See
   * `_.isEqual` for a list of supported value comparisons.
   *
   * **Note:** Multiple values can be checked by combining several matchers
   * using `_.overSome`
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   * @example
   *
   * var objects = [
   *   { 'a': 1, 'b': 2, 'c': 3 },
   *   { 'a': 4, 'b': 5, 'c': 6 }
   * ];
   *
   * _.find(objects, _.matchesProperty('a', 4));
   * // => { 'a': 4, 'b': 5, 'c': 6 }
   *
   * // Checking for several possible values
   * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
   * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
   */
  function matchesProperty(path, srcValue) {
    return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
  }

  return {
    setters: [function (_unresolved_) {
      baseClone = _unresolved_.default;
    }, function (_unresolved_2) {
      baseMatchesProperty = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for cloning. */
      CLONE_DEEP_FLAG = 1;

      _export("default", matchesProperty);
    }
  };
});
//# sourceMappingURL=588497dd27a6f5494513ce38b25595744defd1c3.js.map