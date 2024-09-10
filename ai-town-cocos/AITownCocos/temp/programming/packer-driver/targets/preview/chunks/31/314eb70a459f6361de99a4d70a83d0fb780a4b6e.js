System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseAssignValue, createAggregator, keyBy;
  return {
    setters: [function (_unresolved_) {
      baseAssignValue = _unresolved_.default;
    }, function (_unresolved_2) {
      createAggregator = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates an object composed of keys generated from the results of running
       * each element of `collection` thru `iteratee`. The corresponding value of
       * each key is the last element responsible for generating the key. The
       * iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * var array = [
       *   { 'dir': 'left', 'code': 97 },
       *   { 'dir': 'right', 'code': 100 }
       * ];
       *
       * _.keyBy(array, function(o) {
       *   return String.fromCharCode(o.code);
       * });
       * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
       *
       * _.keyBy(array, 'dir');
       * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
       */
      keyBy = createAggregator(function (result, value, key) {
        baseAssignValue(result, key, value);
      });

      _export("default", keyBy);
    }
  };
});
//# sourceMappingURL=314eb70a459f6361de99a4d70a83d0fb780a4b6e.js.map