System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var AWS = require('../core');

        var Endpoint = require('./get_endpoint')();

        var EndpointMode = require('./get_endpoint_mode')();

        var ENDPOINT_CONFIG_OPTIONS = require('./get_endpoint_config_options')();

        var ENDPOINT_MODE_CONFIG_OPTIONS = require('./get_endpoint_mode_config_options')();

        var getMetadataServiceEndpoint = function getMetadataServiceEndpoint() {
          var endpoint = AWS.util.loadConfig(ENDPOINT_CONFIG_OPTIONS);
          if (endpoint !== undefined) return endpoint;
          var endpointMode = AWS.util.loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS);

          switch (endpointMode) {
            case EndpointMode.IPv4:
              return Endpoint.IPv4;

            case EndpointMode.IPv6:
              return Endpoint.IPv6;

            default:
              throw new Error('Unsupported endpoint mode: ' + endpointMode);
          }
        };

        module.exports = getMetadataServiceEndpoint; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        './get_endpoint': _req0,
        './get_endpoint_mode': _req1,
        './get_endpoint_config_options': _req2,
        './get_endpoint_mode_config_options': _req3
      }));
    }
  };
});
//# sourceMappingURL=aa20faef9f0fe44a3d1dd33260c17fa46bb2cf47.js.map