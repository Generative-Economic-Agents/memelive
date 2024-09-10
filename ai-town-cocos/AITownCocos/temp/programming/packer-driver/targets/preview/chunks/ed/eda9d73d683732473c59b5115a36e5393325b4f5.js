System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var basePropertyOf, htmlEscapes, escapeHtmlChar;
  return {
    setters: [function (_unresolved_) {
      basePropertyOf = _unresolved_.default;
    }],
    execute: function () {
      /** Used to map characters to HTML entities. */
      htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      /**
       * Used by `_.escape` to convert characters to HTML entities.
       *
       * @private
       * @param {string} chr The matched character to escape.
       * @returns {string} Returns the escaped character.
       */

      escapeHtmlChar = basePropertyOf(htmlEscapes);

      _export("default", escapeHtmlChar);
    }
  };
});
//# sourceMappingURL=eda9d73d683732473c59b5115a36e5393325b4f5.js.map