System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseFindKey, baseForOwnRight, baseIteratee;

  /**
   * This method is like `_.findKey` except that it iterates over elements of
   * a collection in the opposite order.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Object
   * @param {Object} object The object to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {string|undefined} Returns the key of the matched element,
   *  else `undefined`.
   * @example
   *
   * var users = {
   *   'barney':  { 'age': 36, 'active': true },
   *   'fred':    { 'age': 40, 'active': false },
   *   'pebbles': { 'age': 1,  'active': true }
   * };
   *
   * _.findLastKey(users, function(o) { return o.age < 40; });
   * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
   *
   * // The `_.matches` iteratee shorthand.
   * _.findLastKey(users, { 'age': 36, 'active': true });
   * // => 'barney'
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findLastKey(users, ['active', false]);
   * // => 'fred'
   *
   * // The `_.property` iteratee shorthand.
   * _.findLastKey(users, 'active');
   * // => 'pebbles'
   */
  function findLastKey(object, predicate) {
    return baseFindKey(object, baseIteratee(predicate, 3), baseForOwnRight);
  }

  return {
    setters: [function (_unresolved_) {
      baseFindKey = _unresolved_.default;
    }, function (_unresolved_2) {
      baseForOwnRight = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", findLastKey);
    }
  };
});
//# sourceMappingURL=4897a9392f1799705d6e07025e59f7ba05029a93.js.map