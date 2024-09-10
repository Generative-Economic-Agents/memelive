System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _f, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = require('./_object-keys-internal');

        var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return $keys(O, hiddenKeys);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _f = module.exports.f;
      }, () => ({
        './_object-keys-internal': _req,
        './_enum-bug-keys': _req0
      }));
    }
  };
});
//# sourceMappingURL=bdb6f5cd3dc49ce00403f9e5a43ef057d618cad8.js.map