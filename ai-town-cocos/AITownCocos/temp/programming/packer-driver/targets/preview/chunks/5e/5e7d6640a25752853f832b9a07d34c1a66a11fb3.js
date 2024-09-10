System.register(["__unresolved_0", "core-js/library/fn/symbol"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_coreJsLibraryFnSymbol) {
      _req = _coreJsLibraryFnSymbol.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = {
          "default": require("core-js/library/fn/symbol"),
          __esModule: true
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _default = module.exports.default;
      }, () => ({
        'core-js/library/fn/symbol': _req
      }));
    }
  };
});
//# sourceMappingURL=5e7d6640a25752853f832b9a07d34c1a66a11fb3.js.map