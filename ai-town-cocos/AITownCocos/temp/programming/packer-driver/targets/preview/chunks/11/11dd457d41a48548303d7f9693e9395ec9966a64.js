System.register(["__unresolved_0", "get-intrinsic", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_getIntrinsic) {
      _req = _getIntrinsic.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var GetIntrinsic = require('get-intrinsic');

        var callBind = require('./');

        var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

        module.exports = function callBoundIntrinsic(name, allowMissing) {
          var intrinsic = GetIntrinsic(name, !!allowMissing);

          if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
            return callBind(intrinsic);
          }

          return intrinsic;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'get-intrinsic': _req,
        './': _req0
      }));
    }
  };
});
//# sourceMappingURL=11dd457d41a48548303d7f9693e9395ec9966a64.js.map