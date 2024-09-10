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

        AWS.util.update(AWS.EC2.prototype, {
          /**
           * @api private
           */
          setupRequestListeners: function setupRequestListeners(request) {
            request.removeListener('extractError', AWS.EventListeners.Query.EXTRACT_ERROR);
            request.addListener('extractError', this.extractError);

            if (request.operation === 'copySnapshot') {
              request.onAsync('validate', this.buildCopySnapshotPresignedUrl);
            }
          },

          /**
           * @api private
           */
          buildCopySnapshotPresignedUrl: function buildCopySnapshotPresignedUrl(req, done) {
            if (req.params.PresignedUrl || req._subRequest) {
              return done();
            }

            req.params = AWS.util.copy(req.params);
            req.params.DestinationRegion = req.service.config.region;
            var config = AWS.util.copy(req.service.config);
            delete config.endpoint;
            config.region = req.params.SourceRegion;
            var svc = new req.service.constructor(config);
            var newReq = svc[req.operation](req.params);
            newReq._subRequest = true;
            newReq.presign(function (err, url) {
              if (err) done(err);else {
                req.params.PresignedUrl = url;
                done();
              }
            });
          },

          /**
           * @api private
           */
          extractError: function extractError(resp) {
            // EC2 nests the error code and message deeper than other AWS Query services.
            var httpResponse = resp.httpResponse;
            var data = new AWS.XML.Parser().parse(httpResponse.body.toString() || '');

            if (data.Errors) {
              resp.error = AWS.util.error(new Error(), {
                code: data.Errors.Error.Code,
                message: data.Errors.Error.Message
              });
            } else {
              resp.error = AWS.util.error(new Error(), {
                code: httpResponse.statusCode,
                message: null
              });
            }

            resp.error.requestId = data.RequestID || null;
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=29deebdb5e355ebc3c28c4269c9d1beb273f3ee0.js.map