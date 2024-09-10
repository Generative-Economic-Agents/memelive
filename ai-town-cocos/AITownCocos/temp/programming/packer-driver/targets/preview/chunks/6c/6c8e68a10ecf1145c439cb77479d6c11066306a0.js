System.register(["__unresolved_0", "core-js/library/fn/object/create"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_coreJsLibraryFnObjectCreate) {
      _req = _coreJsLibraryFnObjectCreate.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = {
          "default": require("core-js/library/fn/object/create"),
          __esModule: true
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _default = module.exports.default;
      }, () => ({
        'core-js/library/fn/object/create': _req
      }));
    }
  };
});
//# sourceMappingURL=6c8e68a10ecf1145c439cb77479d6c11066306a0.js.map