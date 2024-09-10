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
//# sourceMappingURL=c82f8fbb74deb34ad31df224754193c0311331db.js.map