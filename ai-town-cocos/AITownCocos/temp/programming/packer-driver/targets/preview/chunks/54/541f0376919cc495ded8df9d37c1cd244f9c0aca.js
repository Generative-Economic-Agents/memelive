System.register([], function (_export, _context) {
  "use strict";

  var reEvaluate;
  return {
    setters: [],
    execute: function () {
      /** Used to match template delimiters. */
      reEvaluate = /<%([\s\S]+?)%>/g;

      _export("default", reEvaluate);
    }
  };
});
//# sourceMappingURL=541f0376919cc495ded8df9d37c1cd244f9c0aca.js.map