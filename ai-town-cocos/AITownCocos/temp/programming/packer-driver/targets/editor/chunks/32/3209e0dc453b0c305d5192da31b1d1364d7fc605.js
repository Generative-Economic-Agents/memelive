System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseRest, unzip, zip;
  return {
    setters: [function (_unresolved_) {
      baseRest = _unresolved_.default;
    }, function (_unresolved_2) {
      unzip = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates an array of grouped elements, the first of which contains the
       * first elements of the given arrays, the second of which contains the
       * second elements of the given arrays, and so on.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {...Array} [arrays] The arrays to process.
       * @returns {Array} Returns the new array of grouped elements.
       * @example
       *
       * _.zip(['a', 'b'], [1, 2], [true, false]);
       * // => [['a', 1, true], ['b', 2, false]]
       */
      zip = baseRest(unzip);

      _export("default", zip);
    }
  };
});
//# sourceMappingURL=3209e0dc453b0c305d5192da31b1d1364d7fc605.js.map