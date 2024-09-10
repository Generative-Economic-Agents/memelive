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

        var rdsutil = {
          /**
            * @api private
            */
          setupRequestListeners: function setupRequestListeners(service, request, crossRegionOperations) {
            if (crossRegionOperations.indexOf(request.operation) !== -1 && request.params.SourceRegion) {
              request.params = AWS.util.copy(request.params);

              if (request.params.PreSignedUrl || request.params.SourceRegion === service.config.region) {
                delete request.params.SourceRegion;
              } else {
                var doesParamValidation = !!service.config.paramValidation; // remove the validate parameters listener so we can re-add it after we build the URL

                if (doesParamValidation) {
                  request.removeListener('validate', AWS.EventListeners.Core.VALIDATE_PARAMETERS);
                }

                request.onAsync('validate', rdsutil.buildCrossRegionPresignedUrl);

                if (doesParamValidation) {
                  request.addListener('validate', AWS.EventListeners.Core.VALIDATE_PARAMETERS);
                }
              }
            }
          },

          /**
           * @api private
           */
          buildCrossRegionPresignedUrl: function buildCrossRegionPresignedUrl(req, done) {
            var config = AWS.util.copy(req.service.config);
            config.region = req.params.SourceRegion;
            delete req.params.SourceRegion;
            delete config.endpoint; // relevant params for the operation will already be in req.params

            delete config.params;
            config.signatureVersion = 'v4';
            var destinationRegion = req.service.config.region;
            var svc = new req.service.constructor(config);
            var newReq = svc[req.operation](AWS.util.copy(req.params));
            newReq.on('build', function addDestinationRegionParam(request) {
              var httpRequest = request.httpRequest;
              httpRequest.params.DestinationRegion = destinationRegion;
              httpRequest.body = AWS.util.queryParamsToString(httpRequest.params);
            });
            newReq.presign(function (err, url) {
              if (err) done(err);else {
                req.params.PreSignedUrl = url;
                done();
              }
            });
          }
        };
        /**
         * @api private
         */

        module.exports = rdsutil; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=1a24be8b188fc0d910286c9a14a0576c3fb5fce5.js.map