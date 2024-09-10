System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var ENV_ENDPOINT_NAME = 'AWS_EC2_METADATA_SERVICE_ENDPOINT';
        var CONFIG_ENDPOINT_NAME = 'ec2_metadata_service_endpoint';

        var getEndpointConfigOptions = function getEndpointConfigOptions() {
          return {
            environmentVariableSelector: function environmentVariableSelector(env) {
              return env[ENV_ENDPOINT_NAME];
            },
            configFileSelector: function configFileSelector(profile) {
              return profile[CONFIG_ENDPOINT_NAME];
            },
            default: undefined
          };
        };

        module.exports = getEndpointConfigOptions; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=ba60e561775f871309fd192700db8ff9076a7f54.js.map