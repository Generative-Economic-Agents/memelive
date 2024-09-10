System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseProperty, basePropertyDeep, isKey, toKey;

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  return {
    setters: [function (_unresolved_) {
      baseProperty = _unresolved_.default;
    }, function (_unresolved_2) {
      basePropertyDeep = _unresolved_2.default;
    }, function (_unresolved_3) {
      isKey = _unresolved_3.default;
    }, function (_unresolved_4) {
      toKey = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", property);
    }
  };
});
//# sourceMappingURL=ec43e7e56a052c2d247e266066548b0908924e8b.js.map