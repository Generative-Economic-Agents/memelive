System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var arraySome, baseIteratee, baseSome, isArray, isIterateeCall;

  /**
   * Checks if `predicate` returns truthy for **any** element of `collection`.
   * Iteration is stopped once `predicate` returns truthy. The predicate is
   * invoked with three arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   *
   * var users = [
   *   { 'user': 'barney', 'active': true },
   *   { 'user': 'fred',   'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.some(users, { 'user': 'barney', 'active': false });
   * // => false
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.some(users, ['active', false]);
   * // => true
   *
   * // The `_.property` iteratee shorthand.
   * _.some(users, 'active');
   * // => true
   */
  function some(collection, predicate, guard) {
    var func = isArray(collection) ? arraySome : baseSome;

    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = undefined;
    }

    return func(collection, baseIteratee(predicate, 3));
  }

  return {
    setters: [function (_unresolved_) {
      arraySome = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIteratee = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseSome = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArray = _unresolved_4.default;
    }, function (_unresolved_5) {
      isIterateeCall = _unresolved_5.default;
    }],
    execute: function () {
      _export("default", some);
    }
  };
});
//# sourceMappingURL=6c0729cfd49568706483622ecdca917c00ce6e90.js.map