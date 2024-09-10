System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var arrayMap, baseIndexOf, baseIndexOfWith, baseUnary, copyArray, arrayProto, splice;

  /**
   * The base implementation of `_.pullAllBy` without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   */
  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
        index = -1,
        length = values.length,
        seen = array;

    if (array === values) {
      values = copyArray(values);
    }

    if (iteratee) {
      seen = arrayMap(array, baseUnary(iteratee));
    }

    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;

      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice.call(seen, fromIndex, 1);
        }

        splice.call(array, fromIndex, 1);
      }
    }

    return array;
  }

  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIndexOf = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIndexOfWith = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseUnary = _unresolved_4.default;
    }, function (_unresolved_5) {
      copyArray = _unresolved_5.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      arrayProto = Array.prototype;
      /** Built-in value references. */

      splice = arrayProto.splice;

      _export("default", basePullAll);
    }
  };
});
//# sourceMappingURL=f02e6d6c78919d13ea44b5de5994a7eed0112221.js.map