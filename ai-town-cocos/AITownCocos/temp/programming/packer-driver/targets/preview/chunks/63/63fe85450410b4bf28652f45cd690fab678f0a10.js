System.register([], function (_export, _context) {
  "use strict";

  var stringEscapes;

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  return {
    setters: [],
    execute: function () {
      /** Used to escape characters for inclusion in compiled string literals. */
      stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };

      _export("default", escapeStringChar);
    }
  };
});
//# sourceMappingURL=63fe85450410b4bf28652f45cd690fab678f0a10.js.map