System.register(["__unresolved_0", "possible-typed-array-names"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_possibleTypedArrayNames) {
      _req = _possibleTypedArrayNames.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var possibleNames = require('possible-typed-array-names');

        var g = typeof globalThis === 'undefined' ? global : globalThis;
        /** @type {import('.')} */

        module.exports = function availableTypedArrays() {
          var
          /** @type {ReturnType<typeof availableTypedArrays>} */
          out = [];

          for (var i = 0; i < possibleNames.length; i++) {
            if (typeof g[possibleNames[i]] === 'function') {
              // @ts-expect-error
              out[out.length] = possibleNames[i];
            }
          }

          return out;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'possible-typed-array-names': _req
      }));
    }
  };
});
//# sourceMappingURL=44ee6e995eea7f238b1cf610cdcebf234e3d6a56.js.map