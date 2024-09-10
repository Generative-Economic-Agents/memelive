System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseUniq;

  /**
   * This method is like `_.uniq` except that it accepts `comparator` which
   * is invoked to compare elements of `array`. The order of result values is
   * determined by the order they occur in the array.The comparator is invoked
   * with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.uniqWith(objects, _.isEqual);
   * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
   */
  function uniqWith(array, comparator) {
    comparator = typeof comparator == 'function' ? comparator : undefined;
    return array && array.length ? baseUniq(array, undefined, comparator) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseUniq = _unresolved_.default;
    }],
    execute: function () {
      _export("default", uniqWith);
    }
  };
});
//# sourceMappingURL=5520f29e161f270fb02d30b540b031beb23e7535.js.map