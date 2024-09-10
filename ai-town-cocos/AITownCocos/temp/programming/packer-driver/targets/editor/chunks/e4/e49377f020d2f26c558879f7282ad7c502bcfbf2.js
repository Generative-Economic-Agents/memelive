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
//# sourceMappingURL=e49377f020d2f26c558879f7282ad7c502bcfbf2.js.map