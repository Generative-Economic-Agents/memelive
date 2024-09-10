System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var Symbol, isArguments, isArray, spreadableSymbol;

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  return {
    setters: [function (_unresolved_) {
      Symbol = _unresolved_.default;
    }, function (_unresolved_2) {
      isArguments = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArray = _unresolved_3.default;
    }],
    execute: function () {
      /** Built-in value references. */
      spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

      _export("default", isFlattenable);
    }
  };
});
//# sourceMappingURL=cb1ab5d8677142cd98da1b782c0b32bfe18ba11c.js.map