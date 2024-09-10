System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseAssignValue, createAggregator, objectProto, hasOwnProperty, groupBy;
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
       * each element of `collection` thru `iteratee`. The order of grouped values
       * is determined by the order they occur in `collection`. The corresponding
       * value of each key is an array of elements responsible for generating the
       * key. The iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * _.groupBy([6.1, 4.2, 6.3], Math.floor);
       * // => { '4': [4.2], '6': [6.1, 6.3] }
       *
       * // The `_.property` iteratee shorthand.
       * _.groupBy(['one', 'two', 'three'], 'length');
       * // => { '3': ['one', 'two'], '5': ['three'] }
       */

      groupBy = createAggregator(function (result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          result[key].push(value);
        } else {
          baseAssignValue(result, key, [value]);
        }
      });

      _export("default", groupBy);
    }
  };
});
//# sourceMappingURL=c0f8afb22f75d12da9438f2a6a8c71fab038014c.js.map