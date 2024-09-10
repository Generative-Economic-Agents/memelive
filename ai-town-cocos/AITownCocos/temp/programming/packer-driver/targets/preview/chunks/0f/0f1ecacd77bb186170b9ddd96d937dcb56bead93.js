System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var freeGlobal, freeSelf, root;
  return {
    setters: [function (_unresolved_) {
      freeGlobal = _unresolved_.default;
    }],
    execute: function () {
      /** Detect free variable `self`. */
      freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      /** Used as a reference to the global object. */

      root = freeGlobal || freeSelf || Function('return this')();

      _export("default", root);
    }
  };
});
//# sourceMappingURL=0f1ecacd77bb186170b9ddd96d937dcb56bead93.js.map