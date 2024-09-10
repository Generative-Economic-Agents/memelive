System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var basePropertyOf, htmlUnescapes, unescapeHtmlChar;
  return {
    setters: [function (_unresolved_) {
      basePropertyOf = _unresolved_.default;
    }],
    execute: function () {
      /** Used to map HTML entities to characters. */
      htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
      };
      /**
       * Used by `_.unescape` to convert HTML entities to characters.
       *
       * @private
       * @param {string} chr The matched character to unescape.
       * @returns {string} Returns the unescaped character.
       */

      unescapeHtmlChar = basePropertyOf(htmlUnescapes);

      _export("default", unescapeHtmlChar);
    }
  };
});
//# sourceMappingURL=d4e9697950f2531a47c5b91b20557c557c606183.js.map