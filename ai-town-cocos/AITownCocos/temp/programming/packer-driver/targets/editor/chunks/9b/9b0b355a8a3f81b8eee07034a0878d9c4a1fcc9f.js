System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "url"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, __cjsMetaURL;

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
    }, function (_url) {
      _req2 = _url.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var AWS = require('./core');

        require('./http');

        var inherit = AWS.util.inherit;

        var getMetadataServiceEndpoint = require('./metadata_service/get_metadata_service_endpoint');

        var URL = require('url').URL;
        /**
         * Represents a metadata service available on EC2 instances. Using the
         * {request} method, you can receieve metadata about any available resource
         * on the metadata service.
         *
         * You can disable the use of the IMDS by setting the AWS_EC2_METADATA_DISABLED
         * environment variable to a truthy value.
         *
         * @!attribute [r] httpOptions
         *   @return [map] a map of options to pass to the underlying HTTP request:
         *
         *     * **timeout** (Number) &mdash; a timeout value in milliseconds to wait
         *       before aborting the connection. Set to 0 for no timeout.
         *
         * @!macro nobrowser
         */


        AWS.MetadataService = inherit({
          /**
           * @return [String] the endpoint of the instance metadata service
           */
          endpoint: getMetadataServiceEndpoint(),

          /**
           * @!ignore
           */

          /**
           * Default HTTP options. By default, the metadata service is set to not
           * timeout on long requests. This means that on non-EC2 machines, this
           * request will never return. If you are calling this operation from an
           * environment that may not always run on EC2, set a `timeout` value so
           * the SDK will abort the request after a given number of milliseconds.
           */
          httpOptions: {
            timeout: 0
          },

          /**
           * when enabled, metadata service will not fetch token
           */
          disableFetchToken: false,

          /**
           * Creates a new MetadataService object with a given set of options.
           *
           * @option options host [String] the hostname of the instance metadata
           *   service
           * @option options httpOptions [map] a map of options to pass to the
           *   underlying HTTP request:
           *
           *   * **timeout** (Number) &mdash; a timeout value in milliseconds to wait
           *     before aborting the connection. Set to 0 for no timeout.
           * @option options maxRetries [Integer] the maximum number of retries to
           *   perform for timeout errors
           * @option options retryDelayOptions [map] A set of options to configure the
           *   retry delay on retryable errors. See AWS.Config for details.
           * @option options ec2MetadataV1Disabled [boolean] Whether to block IMDS v1 fallback.
           * @option options profile [string] A profile to check for IMDSv1 fallback settings.
           * @option options filename [string] Optional filename for the config file.
           */
          constructor: function MetadataService(options) {
            if (options && options.host) {
              options.endpoint = 'http://' + options.host;
              delete options.host;
            }

            this.profile = options && options.profile || process.env.AWS_PROFILE || AWS.util.defaultProfile;
            this.ec2MetadataV1Disabled = !!(options && options.ec2MetadataV1Disabled);
            this.filename = options && options.filename;
            AWS.util.update(this, options);
          },

          /**
           * Sends a request to the instance metadata service for a given resource.
           *
           * @param path [String] the path of the resource to get
           *
           * @param options [map] an optional map used to make request
           *
           *   * **method** (String) &mdash; HTTP request method
           *
           *   * **headers** (map<String,String>) &mdash; a map of response header keys and their respective values
           *
           * @callback callback function(err, data)
           *   Called when a response is available from the service.
           *   @param err [Error, null] if an error occurred, this value will be set
           *   @param data [String, null] if the request was successful, the body of
           *     the response
           */
          request: function request(path, options, callback) {
            if (arguments.length === 2) {
              callback = options;
              options = {};
            }

            if (process.env[AWS.util.imdsDisabledEnv]) {
              callback(new Error('EC2 Instance Metadata Service access disabled'));
              return;
            }

            path = path || '/'; // Verify that host is a valid URL

            if (URL) {
              new URL(this.endpoint);
            }

            var httpRequest = new AWS.HttpRequest(this.endpoint + path);
            httpRequest.method = options.method || 'GET';

            if (options.headers) {
              httpRequest.headers = options.headers;
            }

            AWS.util.handleRequestWithRetries(httpRequest, this, callback);
          },

          /**
          * @api private
          */
          loadCredentialsCallbacks: [],

          /**
           * Fetches metadata token used for authenticating against the instance metadata service.
           *
           * @callback callback function(err, token)
           *   Called when token is loaded from the resource
           */
          fetchMetadataToken: function fetchMetadataToken(callback) {
            var self = this;
            var tokenFetchPath = '/latest/api/token';
            self.request(tokenFetchPath, {
              'method': 'PUT',
              'headers': {
                'x-aws-ec2-metadata-token-ttl-seconds': '21600'
              }
            }, callback);
          },

          /**
           * Fetches credentials
           *
           * @api private
           * @callback cb function(err, creds)
           *   Called when credentials are loaded from the resource
           */
          fetchCredentials: function fetchCredentials(options, cb) {
            var self = this;
            var basePath = '/latest/meta-data/iam/security-credentials/';
            var isImdsV1Fallback = self.disableFetchToken || !(options && options.headers && options.headers['x-aws-ec2-metadata-token']);

            if (isImdsV1Fallback && !process.env.AWS_EC2_METADATA_DISABLED) {
              try {
                var profiles = AWS.util.getProfilesFromSharedConfig(AWS.util.iniLoader, this.filename);
                var profileSettings = profiles[this.profile] || {};
              } catch (e) {
                profileSettings = {};
              }

              if (profileSettings.ec2_metadata_v1_disabled && profileSettings.ec2_metadata_v1_disabled !== 'false') {
                return cb(AWS.util.error(new Error('AWS EC2 Metadata v1 fallback has been blocked by AWS config file profile.')));
              }

              if (self.ec2MetadataV1Disabled) {
                return cb(AWS.util.error(new Error('AWS EC2 Metadata v1 fallback has been blocked by AWS.MetadataService::options.ec2MetadataV1Disabled=true.')));
              }

              if (process.env.AWS_EC2_METADATA_V1_DISABLED && process.env.AWS_EC2_METADATA_V1_DISABLED !== 'false') {
                return cb(AWS.util.error(new Error('AWS EC2 Metadata v1 fallback has been blocked by process.env.AWS_EC2_METADATA_V1_DISABLED.')));
              }
            }

            self.request(basePath, options, function (err, roleName) {
              if (err) {
                self.disableFetchToken = !(err.statusCode === 401);
                cb(AWS.util.error(err, {
                  message: 'EC2 Metadata roleName request returned error'
                }));
                return;
              }

              roleName = roleName.split('\n')[0]; // grab first (and only) role

              self.request(basePath + roleName, options, function (credErr, credData) {
                if (credErr) {
                  self.disableFetchToken = !(credErr.statusCode === 401);
                  cb(AWS.util.error(credErr, {
                    message: 'EC2 Metadata creds request returned error'
                  }));
                  return;
                }

                try {
                  var credentials = JSON.parse(credData);
                  cb(null, credentials);
                } catch (parseError) {
                  cb(parseError);
                }
              });
            });
          },

          /**
           * Loads a set of credentials stored in the instance metadata service
           *
           * @api private
           * @callback callback function(err, credentials)
           *   Called when credentials are loaded from the resource
           *   @param err [Error] if an error occurred, this value will be set
           *   @param credentials [Object] the raw JSON object containing all
           *     metadata from the credentials resource
           */
          loadCredentials: function loadCredentials(callback) {
            var self = this;
            self.loadCredentialsCallbacks.push(callback);

            if (self.loadCredentialsCallbacks.length > 1) {
              return;
            }

            function callbacks(err, creds) {
              var cb;

              while ((cb = self.loadCredentialsCallbacks.shift()) !== undefined) {
                cb(err, creds);
              }
            }

            if (self.disableFetchToken) {
              self.fetchCredentials({}, callbacks);
            } else {
              self.fetchMetadataToken(function (tokenError, token) {
                if (tokenError) {
                  if (tokenError.code === 'TimeoutError') {
                    self.disableFetchToken = true;
                  } else if (tokenError.retryable === true) {
                    callbacks(AWS.util.error(tokenError, {
                      message: 'EC2 Metadata token request returned error'
                    }));
                    return;
                  } else if (tokenError.statusCode === 400) {
                    callbacks(AWS.util.error(tokenError, {
                      message: 'EC2 Metadata token request returned 400'
                    }));
                    return;
                  }
                }

                var options = {};

                if (token) {
                  options.headers = {
                    'x-aws-ec2-metadata-token': token
                  };
                }

                self.fetchCredentials(options, callbacks);
              });
            }
          }
        });
        /**
         * @api private
         */

        module.exports = AWS.MetadataService; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './core': _req,
        './http': _req0,
        './metadata_service/get_metadata_service_endpoint': _req1,
        'url': _req2
      }));
    }
  };
});
//# sourceMappingURL=9b0b355a8a3f81b8eee07034a0878d9c4a1fcc9f.js.map