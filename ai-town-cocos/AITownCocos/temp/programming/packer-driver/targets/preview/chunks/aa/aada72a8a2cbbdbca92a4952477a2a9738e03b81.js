System.register(["__unresolved_0", "has-symbols/shams"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_hasSymbolsShams) {
      _req = _hasSymbolsShams.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var hasSymbols = require('has-symbols/shams');
        /** @type {import('.')} */


        module.exports = function hasToStringTagShams() {
          return hasSymbols() && !!Symbol.toStringTag;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'has-symbols/shams': _req
      }));
    }
  };
});
//# sourceMappingURL=aada72a8a2cbbdbca92a4952477a2a9738e03b81.js.map