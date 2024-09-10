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

        AWS.util.update(AWS.EventBridge.prototype, {
          /**
           * @api private
           */
          setupRequestListeners: function setupRequestListeners(request) {
            if (request.operation === 'putEvents') {
              var params = request.params || {};

              if (params.EndpointId !== undefined) {
                throw new AWS.util.error(new Error(), {
                  code: 'InvalidParameter',
                  message: 'EndpointId is not supported in current SDK.\n' + 'You should consider switching to V3(https://github.com/aws/aws-sdk-js-v3).'
                });
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
//# sourceMappingURL=ce69c578a75371db9c8c2ddb0c73e36f4663d691.js.map