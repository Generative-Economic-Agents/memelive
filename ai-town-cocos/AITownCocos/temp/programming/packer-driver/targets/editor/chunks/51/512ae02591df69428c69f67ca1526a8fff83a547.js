System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseDifference, baseFlatten, baseUniq;

  /**
   * The base implementation of methods like `_.xor`, without support for
   * iteratee shorthands, that accepts an array of arrays to inspect.
   *
   * @private
   * @param {Array} arrays The arrays to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of values.
   */
  function baseXor(arrays, iteratee, comparator) {
    var length = arrays.length;

    if (length < 2) {
      return length ? baseUniq(arrays[0]) : [];
    }

    var index = -1,
        result = Array(length);

    while (++index < length) {
      var array = arrays[index],
          othIndex = -1;

      while (++othIndex < length) {
        if (othIndex != index) {
          result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
        }
      }
    }

    return baseUniq(baseFlatten(result, 1), iteratee, comparator);
  }

  return {
    setters: [function (_unresolved_) {
      baseDifference = _unresolved_.default;
    }, function (_unresolved_2) {
      baseFlatten = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseUniq = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", baseXor);
    }
  };
});
//# sourceMappingURL=512ae02591df69428c69f67ca1526a8fff83a547.js.map