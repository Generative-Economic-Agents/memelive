System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var SetCache, arrayIncludes, arrayIncludesWith, cacheHas, createSet, setToArray, LARGE_ARRAY_SIZE;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);

      if (set) {
        return setToArray(set);
      }

      isCommon = false;
      includes = cacheHas;
      seen = new SetCache();
    } else {
      seen = iteratee ? [] : result;
    }

    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;

      if (isCommon && computed === computed) {
        var seenIndex = seen.length;

        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }

        if (iteratee) {
          seen.push(computed);
        }

        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
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
      cacheHas = _unresolved_4.default;
    }, function (_unresolved_5) {
      createSet = _unresolved_5.default;
    }, function (_unresolved_6) {
      setToArray = _unresolved_6.default;
    }],
    execute: function () {
      /** Used as the size to enable large array optimizations. */
      LARGE_ARRAY_SIZE = 200;

      _export("default", baseUniq);
    }
  };
});
//# sourceMappingURL=04a07b542ffc07dcb752a334e62742927619b620.js.map