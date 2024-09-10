System.register([], function (_export, _context) {
  "use strict";

  var rsAstralRange, rsComboMarksRange, reComboHalfMarksRange, rsComboSymbolsRange, rsComboRange, rsVarRange, rsAstral, rsCombo, rsFitz, rsModifier, rsNonAstral, rsRegional, rsSurrPair, rsZWJ, reOptMod, rsOptVar, rsOptJoin, rsSeq, rsSymbol, reUnicode;

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
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

      rsAstral = '[' + rsAstralRange + ']';
      rsCombo = '[' + rsComboRange + ']';
      rsFitz = '\\ud83c[\\udffb-\\udfff]';
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
      rsNonAstral = '[^' + rsAstralRange + ']';
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
      rsZWJ = '\\u200d';
      /** Used to compose unicode regexes. */

      reOptMod = rsModifier + '?';
      rsOptVar = '[' + rsVarRange + ']?';
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
      rsSeq = rsOptVar + reOptMod + rsOptJoin;
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
      /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

      reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

      _export("default", unicodeToArray);
    }
  };
});
//# sourceMappingURL=2c618bdddb53e6e4be0b79671863fc053b7a7c6a.js.map