System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var arrayAggregator, baseAggregator, baseIteratee, isArray;

  /**
   * Creates a function like `_.groupBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} [initializer] The accumulator object initializer.
   * @returns {Function} Returns the new aggregator function.
   */
  function createAggregator(setter, initializer) {
    return function (collection, iteratee) {
      var func = isArray(collection) ? arrayAggregator : baseAggregator,
          accumulator = initializer ? initializer() : {};
      return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
    };
  }

  return {
    setters: [function (_unresolved_) {
      arrayAggregator = _unresolved_.default;
    }, function (_unresolved_2) {
      baseAggregator = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArray = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", createAggregator);
    }
  };
});
//# sourceMappingURL=1430c55e8dbb45de9485adb8a631197994297051.js.map