System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arrayPush, isFlattenable;

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];

      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      arrayPush = _unresolved_.default;
    }, function (_unresolved_2) {
      isFlattenable = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseFlatten);
    }
  };
});
//# sourceMappingURL=71084b1e01be9842ec18813b9e1b5b8fbaa3b6d5.js.map