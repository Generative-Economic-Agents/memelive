System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseIndexOf;

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }

  return {
    setters: [function (_unresolved_) {
      baseIndexOf = _unresolved_.default;
    }],
    execute: function () {
      _export("default", charsStartIndex);
    }
  };
});
//# sourceMappingURL=f02c76d042c82f3de432b0cc6b14bc4b6e1cdc49.js.map