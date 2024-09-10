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
        var AWS = require('../core');
        /**
         * @api private
         */


        AWS.Signers.Bearer = AWS.util.inherit(AWS.Signers.RequestSigner, {
          constructor: function Bearer(request) {
            AWS.Signers.RequestSigner.call(this, request);
          },
          addAuthorization: function addAuthorization(token) {
            this.request.headers['Authorization'] = 'Bearer ' + token.token;
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=dffd65985670d4f19b566c4c455f46db7e7dc364.js.map