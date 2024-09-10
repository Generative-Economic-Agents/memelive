System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var Symbol, arrayMap, isArray, isSymbol, INFINITY, symbolProto, symbolToString;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }

    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  return {
    setters: [function (_unresolved_) {
      Symbol = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayMap = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArray = _unresolved_3.default;
    }, function (_unresolved_4) {
      isSymbol = _unresolved_4.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      INFINITY = 1 / 0;
      /** Used to convert symbols to primitives and strings. */

      symbolProto = Symbol ? Symbol.prototype : undefined;
      symbolToString = symbolProto ? symbolProto.toString : undefined;

      _export("default", baseToString);
    }
  };
});
//# sourceMappingURL=5e84e719e64f57054da79da6d54e88899cf756ce.js.map