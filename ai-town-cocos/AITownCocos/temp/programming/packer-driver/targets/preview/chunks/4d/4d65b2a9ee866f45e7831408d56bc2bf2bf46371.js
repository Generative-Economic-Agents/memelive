System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseAssignValue, baseForOwn, baseIteratee;

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object, function (value, key, object) {
      baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      baseAssignValue = _unresolved_.default;
    }, function (_unresolved_2) {
      baseForOwn = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", mapValues);
    }
  };
});
//# sourceMappingURL=4d65b2a9ee866f45e7831408d56bc2bf2bf46371.js.map