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

        var STS = require('../../clients/sts');
        /**
         * Represents credentials retrieved from STS SAML support.
         *
         * By default this provider gets credentials using the
         * {AWS.STS.assumeRoleWithSAML} service operation. This operation
         * requires a `RoleArn` containing the ARN of the IAM trust policy for the
         * application for which credentials will be given, as well as a `PrincipalArn`
         * representing the ARN for the SAML identity provider. In addition, the
         * `SAMLAssertion` must be set to the token provided by the identity
         * provider. See {constructor} for an example on creating a credentials
         * object with proper `RoleArn`, `PrincipalArn`, and `SAMLAssertion` values.
         *
         * ## Refreshing Credentials from Identity Service
         *
         * In addition to AWS credentials expiring after a given amount of time, the
         * login token from the identity provider will also expire. Once this token
         * expires, it will not be usable to refresh AWS credentials, and another
         * token will be needed. The SDK does not manage refreshing of the token value,
         * but this can be done through a "refresh token" supported by most identity
         * providers. Consult the documentation for the identity provider for refreshing
         * tokens. Once the refreshed token is acquired, you should make sure to update
         * this new token in the credentials object's {params} property. The following
         * code will update the SAMLAssertion, assuming you have retrieved an updated
         * token from the identity provider:
         *
         * ```javascript
         * AWS.config.credentials.params.SAMLAssertion = updatedToken;
         * ```
         *
         * Future calls to `credentials.refresh()` will now use the new token.
         *
         * @!attribute params
         *   @return [map] the map of params passed to
         *     {AWS.STS.assumeRoleWithSAML}. To update the token, set the
         *     `params.SAMLAssertion` property.
         */


        AWS.SAMLCredentials = AWS.util.inherit(AWS.Credentials, {
          /**
           * Creates a new credentials object.
           * @param (see AWS.STS.assumeRoleWithSAML)
           * @example Creating a new credentials object
           *   AWS.config.credentials = new AWS.SAMLCredentials({
           *     RoleArn: 'arn:aws:iam::1234567890:role/SAMLRole',
           *     PrincipalArn: 'arn:aws:iam::1234567890:role/SAMLPrincipal',
           *     SAMLAssertion: 'base64-token', // base64-encoded token from IdP
           *   });
           * @see AWS.STS.assumeRoleWithSAML
           */
          constructor: function SAMLCredentials(params) {
            AWS.Credentials.call(this);
            this.expired = true;
            this.params = params;
          },

          /**
           * Refreshes credentials using {AWS.STS.assumeRoleWithSAML}
           *
           * @callback callback function(err)
           *   Called when the STS service responds (or fails). When
           *   this callback is called with no error, it means that the credentials
           *   information has been loaded into the object (as the `accessKeyId`,
           *   `secretAccessKey`, and `sessionToken` properties).
           *   @param err [Error] if an error occurred, this value will be filled
           * @see get
           */
          refresh: function refresh(callback) {
            this.coalesceRefresh(callback || AWS.util.fn.callback);
          },

          /**
           * @api private
           */
          load: function load(callback) {
            var self = this;
            self.createClients();
            self.service.assumeRoleWithSAML(function (err, data) {
              if (!err) {
                self.service.credentialsFrom(data, self);
              }

              callback(err);
            });
          },

          /**
           * @api private
           */
          createClients: function createClients() {
            this.service = this.service || new STS({
              params: this.params
            });
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        '../../clients/sts': _req0
      }));
    }
  };
});
//# sourceMappingURL=14b3d18af5920cf970416e78217319fc2d385f98.js.map