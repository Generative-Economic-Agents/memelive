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

        require('../dynamodb/document_client');

        AWS.util.update(AWS.DynamoDB.prototype, {
          /**
           * @api private
           */
          setupRequestListeners: function setupRequestListeners(request) {
            if (request.service.config.dynamoDbCrc32) {
              request.removeListener('extractData', AWS.EventListeners.Json.EXTRACT_DATA);
              request.addListener('extractData', this.checkCrc32);
              request.addListener('extractData', AWS.EventListeners.Json.EXTRACT_DATA);
            }
          },

          /**
           * @api private
           */
          checkCrc32: function checkCrc32(resp) {
            if (!resp.httpResponse.streaming && !resp.request.service.crc32IsValid(resp)) {
              resp.data = null;
              resp.error = AWS.util.error(new Error(), {
                code: 'CRC32CheckFailed',
                message: 'CRC32 integrity check failed',
                retryable: true
              });
              resp.request.haltHandlersOnError();
              throw resp.error;
            }
          },

          /**
           * @api private
           */
          crc32IsValid: function crc32IsValid(resp) {
            var crc = resp.httpResponse.headers['x-amz-crc32'];
            if (!crc) return true; // no (valid) CRC32 header

            return parseInt(crc, 10) === AWS.util.crypto.crc32(resp.httpResponse.body);
          },

          /**
           * @api private
           */
          defaultRetryCount: 10,

          /**
           * @api private
           */
          retryDelays: function retryDelays(retryCount, err) {
            var retryDelayOptions = AWS.util.copy(this.config.retryDelayOptions);

            if (typeof retryDelayOptions.base !== 'number') {
              retryDelayOptions.base = 50; // default for dynamodb
            }

            var delay = AWS.util.calculateRetryDelay(retryCount, retryDelayOptions, err);
            return delay;
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        '../dynamodb/document_client': _req0
      }));
    }
  };
});
//# sourceMappingURL=af8dabf94f3d4c2e8a88586735f378285b18d600.js.map