System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var SetCache, arrayIncludes, arrayIncludesWith, arrayMap, baseUnary, cacheHas, nativeMin;

  /**
   * The base implementation of methods like `_.intersection`, without support
   * for iteratee shorthands, that accepts an array of arrays to inspect.
   *
   * @private
   * @param {Array} arrays The arrays to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of shared values.
   */
  function baseIntersection(arrays, iteratee, comparator) {
    var includes = comparator ? arrayIncludesWith : arrayIncludes,
        length = arrays[0].length,
        othLength = arrays.length,
        othIndex = othLength,
        caches = Array(othLength),
        maxLength = Infinity,
        result = [];

    while (othIndex--) {
      var array = arrays[othIndex];

      if (othIndex && iteratee) {
        array = arrayMap(array, baseUnary(iteratee));
      }

      maxLength = nativeMin(array.length, maxLength);
      caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
    }

    array = arrays[0];
    var index = -1,
        seen = caches[0];

    outer: while (++index < length && result.length < maxLength) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;

      if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
        othIndex = othLength;

        while (--othIndex) {
          var cache = caches[othIndex];

          if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }

        if (seen) {
          seen.push(computed);
        }

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
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeMin = Math.min;

      _export("default", baseIntersection);
    }
  };
});
//# sourceMappingURL=ce38d157555b5e2641f0422ffa7dde0bbcedd03c.js.map