System.register(["__unresolved_0", "core-js/library/fn/json/stringify"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_coreJsLibraryFnJsonStringify) {
      _req = _coreJsLibraryFnJsonStringify.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = {
          "default": require("core-js/library/fn/json/stringify"),
          __esModule: true
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _default = module.exports.default;
      }, () => ({
        'core-js/library/fn/json/stringify': _req
      }));
    }
  };
});
//# sourceMappingURL=46fcb59c3be42f4df79bc778de472aed133824ad.js.map