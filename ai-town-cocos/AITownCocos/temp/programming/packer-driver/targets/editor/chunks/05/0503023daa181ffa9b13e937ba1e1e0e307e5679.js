System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

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
        require('../polly/presigner'); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../polly/presigner': _req
      }));
    }
  };
});
//# sourceMappingURL=0503023daa181ffa9b13e937ba1e1e0e307e5679.js.map