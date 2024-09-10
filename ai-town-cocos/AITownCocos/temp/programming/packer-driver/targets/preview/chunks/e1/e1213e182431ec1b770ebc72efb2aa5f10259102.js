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

        var resolveRegionalEndpointsFlag = require('../config_regional_endpoint');

        var ENV_REGIONAL_ENDPOINT_ENABLED = 'AWS_STS_REGIONAL_ENDPOINTS';
        var CONFIG_REGIONAL_ENDPOINT_ENABLED = 'sts_regional_endpoints';
        AWS.util.update(AWS.STS.prototype, {
          /**
           * @overload credentialsFrom(data, credentials = null)
           *   Creates a credentials object from STS response data containing
           *   credentials information. Useful for quickly setting AWS credentials.
           *
           *   @note This is a low-level utility function. If you want to load temporary
           *     credentials into your process for subsequent requests to AWS resources,
           *     you should use {AWS.TemporaryCredentials} instead.
           *   @param data [map] data retrieved from a call to {getFederatedToken},
           *     {getSessionToken}, {assumeRole}, or {assumeRoleWithWebIdentity}.
           *   @param credentials [AWS.Credentials] an optional credentials object to
           *     fill instead of creating a new object. Useful when modifying an
           *     existing credentials object from a refresh call.
           *   @return [AWS.TemporaryCredentials] the set of temporary credentials
           *     loaded from a raw STS operation response.
           *   @example Using credentialsFrom to load global AWS credentials
           *     var sts = new AWS.STS();
           *     sts.getSessionToken(function (err, data) {
           *       if (err) console.log("Error getting credentials");
           *       else {
           *         AWS.config.credentials = sts.credentialsFrom(data);
           *       }
           *     });
           *   @see AWS.TemporaryCredentials
           */
          credentialsFrom: function credentialsFrom(data, credentials) {
            if (!data) return null;
            if (!credentials) credentials = new AWS.TemporaryCredentials();
            credentials.expired = false;
            credentials.accessKeyId = data.Credentials.AccessKeyId;
            credentials.secretAccessKey = data.Credentials.SecretAccessKey;
            credentials.sessionToken = data.Credentials.SessionToken;
            credentials.expireTime = data.Credentials.Expiration;
            return credentials;
          },
          assumeRoleWithWebIdentity: function assumeRoleWithWebIdentity(params, callback) {
            return this.makeUnauthenticatedRequest('assumeRoleWithWebIdentity', params, callback);
          },
          assumeRoleWithSAML: function assumeRoleWithSAML(params, callback) {
            return this.makeUnauthenticatedRequest('assumeRoleWithSAML', params, callback);
          },

          /**
           * @api private
           */
          setupRequestListeners: function setupRequestListeners(request) {
            request.addListener('validate', this.optInRegionalEndpoint, true);
          },

          /**
           * @api private
           */
          optInRegionalEndpoint: function optInRegionalEndpoint(req) {
            var service = req.service;
            var config = service.config;
            config.stsRegionalEndpoints = resolveRegionalEndpointsFlag(service._originalConfig, {
              env: ENV_REGIONAL_ENDPOINT_ENABLED,
              sharedConfig: CONFIG_REGIONAL_ENDPOINT_ENABLED,
              clientConfig: 'stsRegionalEndpoints'
            });

            if (config.stsRegionalEndpoints === 'regional' && service.isGlobalEndpoint) {
              //client will throw if region is not supplied; request will be signed with specified region
              if (!config.region) {
                throw AWS.util.error(new Error(), {
                  code: 'ConfigError',
                  message: 'Missing region in config'
                });
              }

              var insertPoint = config.endpoint.indexOf('.amazonaws.com');
              var regionalEndpoint = config.endpoint.substring(0, insertPoint) + '.' + config.region + config.endpoint.substring(insertPoint);
              req.httpRequest.updateEndpoint(regionalEndpoint);
              req.httpRequest.region = config.region;
            }
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        '../config_regional_endpoint': _req0
      }));
    }
  };
});
//# sourceMappingURL=e1213e182431ec1b770ebc72efb2aa5f10259102.js.map