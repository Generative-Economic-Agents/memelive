System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIteratee, baseWhile;

  /**
   * Creates a slice of `array` with elements taken from the end. Elements are
   * taken until `predicate` returns falsey. The predicate is invoked with
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
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.takeRightWhile(users, function(o) { return !o.active; });
   * // => objects for ['fred', 'pebbles']
   *
   * // The `_.matches` iteratee shorthand.
   * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
   * // => objects for ['pebbles']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.takeRightWhile(users, ['active', false]);
   * // => objects for ['fred', 'pebbles']
   *
   * // The `_.property` iteratee shorthand.
   * _.takeRightWhile(users, 'active');
   * // => []
   */
  function takeRightWhile(array, predicate) {
    return array && array.length ? baseWhile(array, baseIteratee(predicate, 3), false, true) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseIteratee = _unresolved_.default;
    }, function (_unresolved_2) {
      baseWhile = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", takeRightWhile);
    }
  };
});
//# sourceMappingURL=edf08a086f33295015315e2db08e5529c546a46f.js.map