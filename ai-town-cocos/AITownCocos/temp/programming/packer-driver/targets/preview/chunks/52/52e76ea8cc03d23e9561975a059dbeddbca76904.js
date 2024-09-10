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
//# sourceMappingURL=52e76ea8cc03d23e9561975a059dbeddbca76904.js.map