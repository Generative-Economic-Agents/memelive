System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseIndexOf;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }

  return {
    setters: [function (_unresolved_) {
      baseIndexOf = _unresolved_.default;
    }],
    execute: function () {
      _export("default", charsEndIndex);
    }
  };
});
//# sourceMappingURL=7632338c1e1340920a8f1f1f603c4854be27f710.js.map