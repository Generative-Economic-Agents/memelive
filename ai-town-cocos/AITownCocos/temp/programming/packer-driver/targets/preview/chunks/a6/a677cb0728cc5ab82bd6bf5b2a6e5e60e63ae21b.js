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
//# sourceMappingURL=a677cb0728cc5ab82bd6bf5b2a6e5e60e63ae21b.js.map