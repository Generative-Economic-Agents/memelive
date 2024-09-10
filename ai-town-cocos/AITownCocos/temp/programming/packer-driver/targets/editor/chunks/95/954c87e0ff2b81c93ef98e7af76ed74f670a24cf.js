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

        AWS.util.update(AWS.Route53.prototype, {
          /**
           * @api private
           */
          setupRequestListeners: function setupRequestListeners(request) {
            request.on('build', this.sanitizeUrl);
          },

          /**
           * @api private
           */
          sanitizeUrl: function sanitizeUrl(request) {
            var path = request.httpRequest.path;
            request.httpRequest.path = path.replace(/\/%2F\w+%2F/, '/');
          },

          /**
           * @return [Boolean] whether the error can be retried
           * @api private
           */
          retryableError: function retryableError(error) {
            if (error.code === 'PriorRequestNotComplete' && error.statusCode === 400) {
              return true;
            } else {
              var _super = AWS.Service.prototype.retryableError;
              return _super.call(this, error);
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
//# sourceMappingURL=954c87e0ff2b81c93ef98e7af76ed74f670a24cf.js.map