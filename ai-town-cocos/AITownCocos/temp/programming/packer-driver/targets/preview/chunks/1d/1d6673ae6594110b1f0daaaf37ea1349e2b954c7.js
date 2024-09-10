System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isSymbol;

  /**
   * The base implementation of methods like `_.max` and `_.min` which accepts a
   * `comparator` to determine the extremum value.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The iteratee invoked per iteration.
   * @param {Function} comparator The comparator used to compare values.
   * @returns {*} Returns the extremum value.
   */
  function baseExtremum(array, iteratee, comparator) {
    var index = -1,
        length = array.length;

    while (++index < length) {
      var value = array[index],
          current = iteratee(value);

      if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
        var computed = current,
            result = value;
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      isSymbol = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseExtremum);
    }
  };
});
//# sourceMappingURL=1d6673ae6594110b1f0daaaf37ea1349e2b954c7.js.map