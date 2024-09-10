System.register([], function (_export, _context) {
  "use strict";

  var reInterpolate;
  return {
    setters: [],
    execute: function () {
      /** Used to match template delimiters. */
      reInterpolate = /<%=([\s\S]+?)%>/g;

      _export("default", reInterpolate);
    }
  };
});
//# sourceMappingURL=9a7d8750650677062ed9ee999046a2f4a6a966c3.js.map