System.register(["__unresolved_0", "crypto"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_crypto) {
      _req = _crypto.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Unique ID creation requires a high quality random # generator.  In node.js
        // this is pretty straight-forward - we use the crypto API.
        var crypto = require('crypto');

        module.exports = function nodeRNG() {
          return crypto.randomBytes(16);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'crypto': _req
      }));
    }
  };
});
//# sourceMappingURL=b7824bcd05433929f8cc5afc7a10652e724a2001.js.map