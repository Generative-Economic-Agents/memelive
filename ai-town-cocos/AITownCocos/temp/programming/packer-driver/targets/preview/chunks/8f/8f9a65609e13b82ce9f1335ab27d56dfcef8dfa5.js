System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var Stack, baseIsEqual, COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }

    object = Object(object);

    while (index--) {
      var data = matchData[index];

      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }

    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack();

        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }

        if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
          return false;
        }
      }
    }

    return true;
  }

  return {
    setters: [function (_unresolved_) {
      Stack = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIsEqual = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for value comparisons. */
      COMPARE_PARTIAL_FLAG = 1;
      COMPARE_UNORDERED_FLAG = 2;

      _export("default", baseIsMatch);
    }
  };
});
//# sourceMappingURL=8f9a65609e13b82ce9f1335ab27d56dfcef8dfa5.js.map