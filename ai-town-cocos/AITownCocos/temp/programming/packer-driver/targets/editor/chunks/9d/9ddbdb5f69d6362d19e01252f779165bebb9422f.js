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

        AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
          addAuthorization: function addAuthorization(credentials, date) {
            var datetime = AWS.util.date.rfc822(date);
            this.request.headers['X-Amz-Date'] = datetime;

            if (credentials.sessionToken) {
              this.request.headers['x-amz-security-token'] = credentials.sessionToken;
            }

            this.request.headers['X-Amzn-Authorization'] = this.authorization(credentials, datetime);
          },
          authorization: function authorization(credentials) {
            return 'AWS3 ' + 'AWSAccessKeyId=' + credentials.accessKeyId + ',' + 'Algorithm=HmacSHA256,' + 'SignedHeaders=' + this.signedHeaders() + ',' + 'Signature=' + this.signature(credentials);
          },
          signedHeaders: function signedHeaders() {
            var headers = [];
            AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
              headers.push(h.toLowerCase());
            });
            return headers.sort().join(';');
          },
          canonicalHeaders: function canonicalHeaders() {
            var headers = this.request.headers;
            var parts = [];
            AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
              parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
            });
            return parts.sort().join('\n') + '\n';
          },
          headersToSign: function headersToSign() {
            var headers = [];
            AWS.util.each(this.request.headers, function iterator(k) {
              if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
                headers.push(k);
              }
            });
            return headers;
          },
          signature: function signature(credentials) {
            return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
          },
          stringToSign: function stringToSign() {
            var parts = [];
            parts.push(this.request.method);
            parts.push('/');
            parts.push('');
            parts.push(this.canonicalHeaders());
            parts.push(this.request.body);
            return AWS.util.crypto.sha256(parts.join('\n'));
          }
        });
        /**
         * @api private
         */

        module.exports = AWS.Signers.V3; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=9ddbdb5f69d6362d19e01252f779165bebb9422f.js.map