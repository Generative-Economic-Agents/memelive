System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var freeGlobal, freeExports, freeModule, moduleExports, freeProcess, nodeUtil;
  return {
    setters: [function (_unresolved_) {
      freeGlobal = _unresolved_.default;
    }],
    execute: function () {
      /** Detect free variable `exports`. */
      freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
      /** Detect free variable `module`. */

      freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
      /** Detect the popular CommonJS extension `module.exports`. */

      moduleExports = freeModule && freeModule.exports === freeExports;
      /** Detect free variable `process` from Node.js. */

      freeProcess = moduleExports && freeGlobal.process;
      /** Used to access faster Node.js helpers. */

      nodeUtil = function () {
        try {
          // Use `util.types` for Node.js 10+.
          var types = freeModule && freeModule.require && freeModule.require('util').types;

          if (types) {
            return types;
          } // Legacy `process.binding('util')` for Node.js < 10.


          return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {}
      }();

      _export("default", nodeUtil);
    }
  };
});
//# sourceMappingURL=d06b4ef5a80493c3fb426b2bae89fc949d897909.js.map