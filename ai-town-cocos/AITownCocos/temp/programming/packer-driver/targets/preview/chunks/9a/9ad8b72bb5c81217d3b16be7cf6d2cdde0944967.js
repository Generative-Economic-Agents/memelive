System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseOrderBy, isArray;

  /**
   * This method is like `_.sortBy` except that it allows specifying the sort
   * orders of the iteratees to sort by. If `orders` is unspecified, all values
   * are sorted in ascending order. Otherwise, specify an order of "desc" for
   * descending or "asc" for ascending sort order of corresponding values.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
   *  The iteratees to sort by.
   * @param {string[]} [orders] The sort orders of `iteratees`.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
   * @returns {Array} Returns the new sorted array.
   * @example
   *
   * var users = [
   *   { 'user': 'fred',   'age': 48 },
   *   { 'user': 'barney', 'age': 34 },
   *   { 'user': 'fred',   'age': 40 },
   *   { 'user': 'barney', 'age': 36 }
   * ];
   *
   * // Sort by `user` in ascending order and by `age` in descending order.
   * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
   * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   */
  function orderBy(collection, iteratees, orders, guard) {
    if (collection == null) {
      return [];
    }

    if (!isArray(iteratees)) {
      iteratees = iteratees == null ? [] : [iteratees];
    }

    orders = guard ? undefined : orders;

    if (!isArray(orders)) {
      orders = orders == null ? [] : [orders];
    }

    return baseOrderBy(collection, iteratees, orders);
  }

  return {
    setters: [function (_unresolved_) {
      baseOrderBy = _unresolved_.default;
    }, function (_unresolved_2) {
      isArray = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", orderBy);
    }
  };
});
//# sourceMappingURL=9ad8b72bb5c81217d3b16be7cf6d2cdde0944967.js.map