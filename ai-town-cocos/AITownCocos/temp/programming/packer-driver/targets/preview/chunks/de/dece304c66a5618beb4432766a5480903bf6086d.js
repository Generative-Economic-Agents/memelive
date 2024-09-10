System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var deburrLetter, toString, reLatin, rsComboMarksRange, reComboHalfMarksRange, rsComboSymbolsRange, rsComboRange, rsCombo, reComboMark;

  /**
   * Deburrs `string` by converting
   * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
   * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
   * letters to basic Latin letters and removing
   * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to deburr.
   * @returns {string} Returns the deburred string.
   * @example
   *
   * _.deburr('déjà vu');
   * // => 'deja vu'
   */
  function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
  }

  return {
    setters: [function (_unresolved_) {
      deburrLetter = _unresolved_.default;
    }, function (_unresolved_2) {
      toString = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to match Latin Unicode letters (excluding mathematical operators). */
      reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      /** Used to compose unicode character classes. */

      rsComboMarksRange = '\\u0300-\\u036f';
      reComboHalfMarksRange = '\\ufe20-\\ufe2f';
      rsComboSymbolsRange = '\\u20d0-\\u20ff';
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      /** Used to compose unicode capture groups. */

      rsCombo = '[' + rsComboRange + ']';
      /**
       * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
       * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
       */

      reComboMark = RegExp(rsCombo, 'g');

      _export("default", deburr);
    }
  };
});
//# sourceMappingURL=dece304c66a5618beb4432766a5480903bf6086d.js.map