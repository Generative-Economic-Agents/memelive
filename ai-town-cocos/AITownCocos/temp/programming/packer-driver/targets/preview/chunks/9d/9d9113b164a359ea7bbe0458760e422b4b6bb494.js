System.register([], function (_export, _context) {
  "use strict";

  var rsAstralRange, rsComboMarksRange, reComboHalfMarksRange, rsComboSymbolsRange, rsComboRange, rsVarRange, rsZWJ, reHasUnicode;

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  return {
    setters: [],
    execute: function () {
      /** Used to compose unicode character classes. */
      rsAstralRange = '\\ud800-\\udfff';
      rsComboMarksRange = '\\u0300-\\u036f';
      reComboHalfMarksRange = '\\ufe20-\\ufe2f';
      rsComboSymbolsRange = '\\u20d0-\\u20ff';
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      rsVarRange = '\\ufe0e\\ufe0f';
      /** Used to compose unicode capture groups. */

      rsZWJ = '\\u200d';
      /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

      reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

      _export("default", hasUnicode);
    }
  };
});
//# sourceMappingURL=9d9113b164a359ea7bbe0458760e422b4b6bb494.js.map