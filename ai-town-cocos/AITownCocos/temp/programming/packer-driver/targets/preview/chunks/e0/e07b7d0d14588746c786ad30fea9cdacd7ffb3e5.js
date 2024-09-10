System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isSymbol, INFINITY;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  return {
    setters: [function (_unresolved_) {
      isSymbol = _unresolved_.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      INFINITY = 1 / 0;

      _export("default", toKey);
    }
  };
});
//# sourceMappingURL=e07b7d0d14588746c786ad30fea9cdacd7ffb3e5.js.map