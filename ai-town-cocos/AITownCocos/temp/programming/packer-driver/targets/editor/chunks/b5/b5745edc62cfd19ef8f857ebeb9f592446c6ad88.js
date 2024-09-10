System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var arrayMap, baseGet, baseIteratee, baseMap, baseSortBy, baseUnary, compareMultiple, identity, isArray;

  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) {
      iteratees = arrayMap(iteratees, function (iteratee) {
        if (isArray(iteratee)) {
          return function (value) {
            return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
          };
        }

        return iteratee;
      });
    } else {
      iteratees = [identity];
    }

    var index = -1;
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
    var result = baseMap(collection, function (value, key, collection) {
      var criteria = arrayMap(iteratees, function (iteratee) {
        return iteratee(value);
      });
      return {
        'criteria': criteria,
        'index': ++index,
        'value': value
      };
    });
    return baseSortBy(result, function (object, other) {
      return compareMultiple(object, other, orders);
    });
  }

  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseGet = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseMap = _unresolved_4.default;
    }, function (_unresolved_5) {
      baseSortBy = _unresolved_5.default;
    }, function (_unresolved_6) {
      baseUnary = _unresolved_6.default;
    }, function (_unresolved_7) {
      compareMultiple = _unresolved_7.default;
    }, function (_unresolved_8) {
      identity = _unresolved_8.default;
    }, function (_unresolved_9) {
      isArray = _unresolved_9.default;
    }],
    execute: function () {
      _export("default", baseOrderBy);
    }
  };
});
//# sourceMappingURL=b5745edc62cfd19ef8f857ebeb9f592446c6ad88.js.map