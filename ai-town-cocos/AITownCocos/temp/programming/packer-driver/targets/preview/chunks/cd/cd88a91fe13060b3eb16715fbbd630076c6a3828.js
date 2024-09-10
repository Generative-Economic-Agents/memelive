System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIteratee, baseWhile;

  /**
   * Creates a slice of `array` excluding elements dropped from the beginning.
   * Elements are dropped until `predicate` returns falsey. The predicate is
   * invoked with three arguments: (value, index, array).
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
   * _.dropWhile(users, function(o) { return !o.active; });
   * // => objects for ['pebbles']
   *
   * // The `_.matches` iteratee shorthand.
   * _.dropWhile(users, { 'user': 'barney', 'active': false });
   * // => objects for ['fred', 'pebbles']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.dropWhile(users, ['active', false]);
   * // => objects for ['pebbles']
   *
   * // The `_.property` iteratee shorthand.
   * _.dropWhile(users, 'active');
   * // => objects for ['barney', 'fred', 'pebbles']
   */
  function dropWhile(array, predicate) {
    return array && array.length ? baseWhile(array, baseIteratee(predicate, 3), true) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseIteratee = _unresolved_.default;
    }, function (_unresolved_2) {
      baseWhile = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", dropWhile);
    }
  };
});
//# sourceMappingURL=cd88a91fe13060b3eb16715fbbd630076c6a3828.js.map