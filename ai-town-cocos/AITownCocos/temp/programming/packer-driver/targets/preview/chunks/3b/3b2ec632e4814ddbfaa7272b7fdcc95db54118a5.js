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

        var inherit = AWS.util.inherit;
        /**
         * @api private
         */

        AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
          addAuthorization: function addAuthorization(credentials, date) {
            if (!date) date = AWS.util.date.getDate();
            var r = this.request;
            r.params.Timestamp = AWS.util.date.iso8601(date);
            r.params.SignatureVersion = '2';
            r.params.SignatureMethod = 'HmacSHA256';
            r.params.AWSAccessKeyId = credentials.accessKeyId;

            if (credentials.sessionToken) {
              r.params.SecurityToken = credentials.sessionToken;
            }

            delete r.params.Signature; // delete old Signature for re-signing

            r.params.Signature = this.signature(credentials);
            r.body = AWS.util.queryParamsToString(r.params);
            r.headers['Content-Length'] = r.body.length;
          },
          signature: function signature(credentials) {
            return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
          },
          stringToSign: function stringToSign() {
            var parts = [];
            parts.push(this.request.method);
            parts.push(this.request.endpoint.host.toLowerCase());
            parts.push(this.request.pathname());
            parts.push(AWS.util.queryParamsToString(this.request.params));
            return parts.join('\n');
          }
        });
        /**
         * @api private
         */

        module.exports = AWS.Signers.V2; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=3b2ec632e4814ddbfaa7272b7fdcc95db54118a5.js.map