System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

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
        var AWS = require('../core');

        var inherit = AWS.util.inherit;

        require('./v3');
        /**
         * @api private
         */


        AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
          authorization: function authorization(credentials) {
            return 'AWS3-HTTPS ' + 'AWSAccessKeyId=' + credentials.accessKeyId + ',' + 'Algorithm=HmacSHA256,' + 'Signature=' + this.signature(credentials);
          },
          stringToSign: function stringToSign() {
            return this.request.headers['X-Amz-Date'];
          }
        });
        /**
         * @api private
         */

        module.exports = AWS.Signers.V3Https; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        './v3': _req0
      }));
    }
  };
});
//# sourceMappingURL=b4b485f1173e0def892dd2775843f8fa8259eaec.js.map