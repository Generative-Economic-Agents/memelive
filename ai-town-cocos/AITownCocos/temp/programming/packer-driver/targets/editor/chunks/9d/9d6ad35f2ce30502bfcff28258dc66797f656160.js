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
        var EndpointMode = require('./get_endpoint_mode')();

        var ENV_ENDPOINT_MODE_NAME = 'AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE';
        var CONFIG_ENDPOINT_MODE_NAME = 'ec2_metadata_service_endpoint_mode';

        var getEndpointModeConfigOptions = function () {
          return {
            environmentVariableSelector: function (env) {
              return env[ENV_ENDPOINT_MODE_NAME];
            },
            configFileSelector: function (profile) {
              return profile[CONFIG_ENDPOINT_MODE_NAME];
            },
            default: EndpointMode.IPv4
          };
        };

        module.exports = getEndpointModeConfigOptions; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './get_endpoint_mode': _req
      }));
    }
  };
});
//# sourceMappingURL=9d6ad35f2ce30502bfcff28258dc66797f656160.js.map