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

        AWS.util.update(AWS.APIGateway.prototype, {
          /**
           * Sets the Accept header to application/json.
           *
           * @api private
           */
          setAcceptHeader: function setAcceptHeader(req) {
            var httpRequest = req.httpRequest;

            if (!httpRequest.headers.Accept) {
              httpRequest.headers['Accept'] = 'application/json';
            }
          },

          /**
           * @api private
           */
          setupRequestListeners: function setupRequestListeners(request) {
            request.addListener('build', this.setAcceptHeader);

            if (request.operation === 'getExport') {
              var params = request.params || {};

              if (params.exportType === 'swagger') {
                request.addListener('extractData', AWS.util.convertPayloadToString);
              }
            }
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=3ec2260a3633143c52ee63585a255e35096c166e.js.map