System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var SetCache, arrayIncludes, arrayIncludesWith, arrayMap, baseUnary, cacheHas, LARGE_ARRAY_SIZE;

  /**
   * The base implementation of methods like `_.difference` without support
   * for excluding multiple arrays or iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Array} values The values to exclude.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   */
  function baseDifference(array, values, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        isCommon = true,
        length = array.length,
        result = [],
        valuesLength = values.length;

    if (!length) {
      return result;
    }

    if (iteratee) {
      values = arrayMap(values, baseUnary(iteratee));
    }

    if (comparator) {
      includes = arrayIncludesWith;
      isCommon = false;
    } else if (values.length >= LARGE_ARRAY_SIZE) {
      includes = cacheHas;
      isCommon = false;
      values = new SetCache(values);
    }

    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;

      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;

        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }

        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      SetCache = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayIncludes = _unresolved_2.default;
    }, function (_unresolved_3) {
      arrayIncludesWith = _unresolved_3.default;
    }, function (_unresolved_4) {
      arrayMap = _unresolved_4.default;
    }, function (_unresolved_5) {
      baseUnary = _unresolved_5.default;
    }, function (_unresolved_6) {
      cacheHas = _unresolved_6.default;
    }],
    execute: function () {
      /** Used as the size to enable large array optimizations. */
      LARGE_ARRAY_SIZE = 200;

      _export("default", baseDifference);
    }
  };
});
//# sourceMappingURL=c587ba4f2d012f6d6dc462074c73ee7b70416ef8.js.map