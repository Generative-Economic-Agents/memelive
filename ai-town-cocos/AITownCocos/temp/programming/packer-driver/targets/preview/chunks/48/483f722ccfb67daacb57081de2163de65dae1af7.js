System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIteratee, baseWhile;

  /**
   * Creates a slice of `array` with elements taken from the beginning. Elements
   * are taken until `predicate` returns falsey. The predicate is invoked with
   * three arguments: (value, index, array).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.takeWhile(users, function(o) { return !o.active; });
   * // => objects for ['barney', 'fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.takeWhile(users, { 'user': 'barney', 'active': false });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.takeWhile(users, ['active', false]);
   * // => objects for ['barney', 'fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.takeWhile(users, 'active');
   * // => []
   */
  function takeWhile(array, predicate) {
    return array && array.length ? baseWhile(array, baseIteratee(predicate, 3)) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseIteratee = _unresolved_.default;
    }, function (_unresolved_2) {
      baseWhile = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", takeWhile);
    }
  };
});
//# sourceMappingURL=483f722ccfb67daacb57081de2163de65dae1af7.js.map