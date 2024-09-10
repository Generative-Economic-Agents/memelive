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
        'use strict';

        var origSymbol = typeof Symbol !== 'undefined' && Symbol;

        var hasSymbolSham = require('./shams');

        module.exports = function hasNativeSymbols() {
          if (typeof origSymbol !== 'function') {
            return false;
          }

          if (typeof Symbol !== 'function') {
            return false;
          }

          if (typeof origSymbol('foo') !== 'symbol') {
            return false;
          }

          if (typeof Symbol('bar') !== 'symbol') {
            return false;
          }

          return hasSymbolSham();
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './shams': _req
      }));
    }
  };
});
//# sourceMappingURL=73b0c64aa523f12ca2539a89cdf31bd70cec85dc.js.map