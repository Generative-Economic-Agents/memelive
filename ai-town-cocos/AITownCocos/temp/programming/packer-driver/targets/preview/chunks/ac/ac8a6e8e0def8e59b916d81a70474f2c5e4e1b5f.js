System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseFlatten, baseOrderBy, baseRest, isIterateeCall, sortBy;
  return {
    setters: [function (_unresolved_) {
      baseFlatten = _unresolved_.default;
    }, function (_unresolved_2) {
      baseOrderBy = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseRest = _unresolved_3.default;
    }, function (_unresolved_4) {
      isIterateeCall = _unresolved_4.default;
    }],
    execute: function () {
      /**
       * Creates an array of elements, sorted in ascending order by the results of
       * running each element in a collection thru each iteratee. This method
       * performs a stable sort, that is, it preserves the original sort order of
       * equal elements. The iteratees are invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {...(Function|Function[])} [iteratees=[_.identity]]
       *  The iteratees to sort by.
       * @returns {Array} Returns the new sorted array.
       * @example
       *
       * var users = [
       *   { 'user': 'fred',   'age': 48 },
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 30 },
       *   { 'user': 'barney', 'age': 34 }
       * ];
       *
       * _.sortBy(users, [function(o) { return o.user; }]);
       * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
       *
       * _.sortBy(users, ['user', 'age']);
       * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
       */
      sortBy = baseRest(function (collection, iteratees) {
        if (collection == null) {
          return [];
        }

        var length = iteratees.length;

        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }

        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });

      _export("default", sortBy);
    }
  };
});
//# sourceMappingURL=ac8a6e8e0def8e59b916d81a70474f2c5e4e1b5f.js.map