System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseAssignValue, createAggregator, objectProto, hasOwnProperty, countBy;
  return {
    setters: [function (_unresolved_) {
      baseAssignValue = _unresolved_.default;
    }, function (_unresolved_2) {
      createAggregator = _unresolved_2.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Creates an object composed of keys generated from the results of running
       * each element of `collection` thru `iteratee`. The corresponding value of
       * each key is the number of times the key was returned by `iteratee`. The
       * iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 0.5.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * _.countBy([6.1, 4.2, 6.3], Math.floor);
       * // => { '4': 1, '6': 2 }
       *
       * // The `_.property` iteratee shorthand.
       * _.countBy(['one', 'two', 'three'], 'length');
       * // => { '3': 2, '5': 1 }
       */

      countBy = createAggregator(function (result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          ++result[key];
        } else {
          baseAssignValue(result, key, 1);
        }
      });

      _export("default", countBy);
    }
  };
});
//# sourceMappingURL=0c6ff775ded8d9da1149a18a3e8d2f54fead8037.js.map