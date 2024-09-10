System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _createScope, __cjsMetaURL;

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


        var cachedSecret = {};
        /**
         * @api private
         */

        var cacheQueue = [];
        /**
         * @api private
         */

        var maxCacheEntries = 50;
        /**
         * @api private
         */

        var v4Identifier = 'aws4_request';
        /**
         * @api private
         */

        module.exports = {
          /**
           * @api private
           *
           * @param date [String]
           * @param region [String]
           * @param serviceName [String]
           * @return [String]
           */
          createScope: function createScope(date, region, serviceName) {
            return [date.substr(0, 8), region, serviceName, v4Identifier].join('/');
          },

          /**
           * @api private
           *
           * @param credentials [Credentials]
           * @param date [String]
           * @param region [String]
           * @param service [String]
           * @param shouldCache [Boolean]
           * @return [String]
           */
          getSigningKey: function getSigningKey(credentials, date, region, service, shouldCache) {
            var credsIdentifier = AWS.util.crypto.hmac(credentials.secretAccessKey, credentials.accessKeyId, 'base64');
            var cacheKey = [credsIdentifier, date, region, service].join('_');
            shouldCache = shouldCache !== false;

            if (shouldCache && cacheKey in cachedSecret) {
              return cachedSecret[cacheKey];
            }

            var kDate = AWS.util.crypto.hmac('AWS4' + credentials.secretAccessKey, date, 'buffer');
            var kRegion = AWS.util.crypto.hmac(kDate, region, 'buffer');
            var kService = AWS.util.crypto.hmac(kRegion, service, 'buffer');
            var signingKey = AWS.util.crypto.hmac(kService, v4Identifier, 'buffer');

            if (shouldCache) {
              cachedSecret[cacheKey] = signingKey;
              cacheQueue.push(cacheKey);

              if (cacheQueue.length > maxCacheEntries) {
                // remove the oldest entry (not the least recently used)
                delete cachedSecret[cacheQueue.shift()];
              }
            }

            return signingKey;
          },

          /**
           * @api private
           *
           * Empties the derived signing key cache. Made available for testing purposes
           * only.
           */
          emptyCache: function emptyCache() {
            cachedSecret = {};
            cacheQueue = [];
          }
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _createScope = module.exports.createScope;
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=f6ee11a1707f8ee08c8e0abcc3c3407d9db70ffa.js.map