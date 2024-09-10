System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _f, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        exports.f = require('./_wks'); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _f = module.exports.f;
      }, () => ({
        './_wks': _req
      }));
    }
  };
});
//# sourceMappingURL=42cecd2c18c6c5ed062fe8358ab7e35cfb45db33.js.map