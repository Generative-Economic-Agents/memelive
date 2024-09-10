System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIteratee, baseWhile;

  /**
   * Creates a slice of `array` excluding elements dropped from the end.
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
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.dropRightWhile(users, function(o) { return !o.active; });
   * // => objects for ['barney']
   *
   * // The `_.matches` iteratee shorthand.
   * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
   * // => objects for ['barney', 'fred']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.dropRightWhile(users, ['active', false]);
   * // => objects for ['barney']
   *
   * // The `_.property` iteratee shorthand.
   * _.dropRightWhile(users, 'active');
   * // => objects for ['barney', 'fred', 'pebbles']
   */
  function dropRightWhile(array, predicate) {
    return array && array.length ? baseWhile(array, baseIteratee(predicate, 3), true, true) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseIteratee = _unresolved_.default;
    }, function (_unresolved_2) {
      baseWhile = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", dropRightWhile);
    }
  };
});
//# sourceMappingURL=b4e015814e87c37d12d549e9e2363034caa34798.js.map