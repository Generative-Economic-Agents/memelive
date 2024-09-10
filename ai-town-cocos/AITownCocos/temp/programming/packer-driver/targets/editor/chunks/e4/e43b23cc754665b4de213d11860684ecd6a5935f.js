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

        AWS.util.update(AWS.MachineLearning.prototype, {
          /**
           * @api private
           */
          setupRequestListeners: function setupRequestListeners(request) {
            if (request.operation === 'predict') {
              request.addListener('build', this.buildEndpoint);
            }
          },

          /**
           * Updates request endpoint from PredictEndpoint
           * @api private
           */
          buildEndpoint: function buildEndpoint(request) {
            var url = request.params.PredictEndpoint;

            if (url) {
              request.httpRequest.endpoint = new AWS.Endpoint(url);
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
//# sourceMappingURL=e43b23cc754665b4de213d11860684ecd6a5935f.js.map