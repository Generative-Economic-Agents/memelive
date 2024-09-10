System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "crypto", "buffer", "domain", "stream", "url", "querystring", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "util", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _req23, _req24, _req25, _req26, _req27, _req28, _req29, _req30, _req31, _req32, _req33, _req34, _req35, _req36, _req37, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_crypto) {
      _req1 = _crypto.__cjsMetaURL;
    }, function (_buffer) {
      _req2 = _buffer.__cjsMetaURL;
    }, function (_domain) {
      _req3 = _domain.__cjsMetaURL;
    }, function (_stream) {
      _req4 = _stream.__cjsMetaURL;
    }, function (_url) {
      _req5 = _url.__cjsMetaURL;
    }, function (_querystring) {
      _req6 = _querystring.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req8 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req9 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req10 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req11 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req12 = _unresolved_9.__cjsMetaURL;
    }, function (_util) {
      _req13 = _util.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req14 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req15 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req16 = _unresolved_12.__cjsMetaURL;
    }, function (_unresolved_13) {
      _req17 = _unresolved_13.__cjsMetaURL;
    }, function (_unresolved_14) {
      _req18 = _unresolved_14.__cjsMetaURL;
    }, function (_unresolved_15) {
      _req19 = _unresolved_15.__cjsMetaURL;
    }, function (_unresolved_16) {
      _req20 = _unresolved_16.__cjsMetaURL;
    }, function (_unresolved_17) {
      _req21 = _unresolved_17.__cjsMetaURL;
    }, function (_unresolved_18) {
      _req22 = _unresolved_18.__cjsMetaURL;
    }, function (_unresolved_19) {
      _req23 = _unresolved_19.__cjsMetaURL;
    }, function (_unresolved_20) {
      _req24 = _unresolved_20.__cjsMetaURL;
    }, function (_unresolved_21) {
      _req25 = _unresolved_21.__cjsMetaURL;
    }, function (_unresolved_22) {
      _req26 = _unresolved_22.__cjsMetaURL;
    }, function (_unresolved_23) {
      _req27 = _unresolved_23.__cjsMetaURL;
    }, function (_unresolved_24) {
      _req28 = _unresolved_24.__cjsMetaURL;
    }, function (_unresolved_25) {
      _req29 = _unresolved_25.__cjsMetaURL;
    }, function (_unresolved_26) {
      _req30 = _unresolved_26.__cjsMetaURL;
    }, function (_unresolved_27) {
      _req31 = _unresolved_27.__cjsMetaURL;
    }, function (_unresolved_28) {
      _req32 = _unresolved_28.__cjsMetaURL;
    }, function (_unresolved_29) {
      _req33 = _unresolved_29.__cjsMetaURL;
    }, function (_unresolved_30) {
      _req34 = _unresolved_30.__cjsMetaURL;
    }, function (_unresolved_31) {
      _req35 = _unresolved_31.__cjsMetaURL;
    }, function (_unresolved_32) {
      _req36 = _unresolved_32.__cjsMetaURL;
    }, function (_unresolved_33) {
      _req37 = _unresolved_33.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var util = require('./util');

        var region_utils = require('./region/utils');

        var isFipsRegion = region_utils.isFipsRegion;
        var getRealRegion = region_utils.getRealRegion;

        util.isBrowser = function () {
          return false;
        };

        util.isNode = function () {
          return true;
        }; // node.js specific modules


        util.crypto.lib = require('crypto');
        util.Buffer = require('buffer').Buffer;
        util.domain = require('domain');
        util.stream = require('stream');
        util.url = require('url');
        util.querystring = require('querystring');
        util.environment = 'nodejs';
        util.createEventStream = util.stream.Readable ? require('./event-stream/streaming-create-event-stream').createEventStream : require('./event-stream/buffered-create-event-stream').createEventStream;
        util.realClock = require('./realclock/nodeClock');
        util.clientSideMonitoring = {
          Publisher: require('./publisher').Publisher,
          configProvider: require('./publisher/configuration')
        };
        util.iniLoader = require('./shared-ini').iniLoader;
        util.getSystemErrorName = require('util').getSystemErrorName;

        util.loadConfig = function (options) {
          var envValue = options.environmentVariableSelector(process.env);

          if (envValue !== undefined) {
            return envValue;
          }

          var configFile = {};

          try {
            configFile = util.iniLoader ? util.iniLoader.loadFrom({
              isConfig: true,
              filename: process.env[util.sharedConfigFileEnv]
            }) : {};
          } catch (e) {}

          var sharedFileConfig = configFile[process.env.AWS_PROFILE || util.defaultProfile] || {};
          var configValue = options.configFileSelector(sharedFileConfig);

          if (configValue !== undefined) {
            return configValue;
          }

          if (typeof options.default === 'function') {
            return options.default();
          }

          return options.default;
        };

        var AWS;
        /**
         * @api private
         */

        module.exports = AWS = require('./core');

        require('./credentials');

        require('./credentials/credential_provider_chain');

        require('./credentials/temporary_credentials');

        require('./credentials/chainable_temporary_credentials');

        require('./credentials/web_identity_credentials');

        require('./credentials/cognito_identity_credentials');

        require('./credentials/saml_credentials');

        require('./credentials/process_credentials'); // Load the xml2js XML parser


        AWS.XML.Parser = require('./xml/node_parser'); // Load Node HTTP client

        require('./http/node');

        require('./shared-ini/ini-loader'); // Load custom credential providers


        require('./credentials/token_file_web_identity_credentials');

        require('./credentials/ec2_metadata_credentials');

        require('./credentials/remote_credentials');

        require('./credentials/ecs_credentials');

        require('./credentials/environment_credentials');

        require('./credentials/file_system_credentials');

        require('./credentials/shared_ini_file_credentials');

        require('./credentials/process_credentials');

        require('./credentials/sso_credentials'); // Setup default providers for credentials chain
        // If this changes, please update documentation for
        // AWS.CredentialProviderChain.defaultProviders in
        // credentials/credential_provider_chain.js


        AWS.CredentialProviderChain.defaultProviders = [function () {
          return new AWS.EnvironmentCredentials('AWS');
        }, function () {
          return new AWS.EnvironmentCredentials('AMAZON');
        }, function () {
          return new AWS.SsoCredentials();
        }, function () {
          return new AWS.SharedIniFileCredentials();
        }, function () {
          return new AWS.ECSCredentials();
        }, function () {
          return new AWS.ProcessCredentials();
        }, function () {
          return new AWS.TokenFileWebIdentityCredentials();
        }, function () {
          return new AWS.EC2MetadataCredentials();
        }]; // Load custom token providers

        require('./token');

        require('./token/token_provider_chain');

        require('./token/sso_token_provider'); // Setup default providers for token chain
        // If this changes, please update documentation for
        // AWS.TokenProviderChain.defaultProviders in
        // token/token_provider_chain.js


        AWS.TokenProviderChain.defaultProviders = [function () {
          return new AWS.SSOTokenProvider();
        }];

        var getRegion = function getRegion() {
          var env = process.env;
          var region = env.AWS_REGION || env.AMAZON_REGION;

          if (env[AWS.util.configOptInEnv]) {
            var toCheck = [{
              filename: env[AWS.util.sharedCredentialsFileEnv]
            }, {
              isConfig: true,
              filename: env[AWS.util.sharedConfigFileEnv]
            }];
            var iniLoader = AWS.util.iniLoader;

            while (!region && toCheck.length) {
              var configFile = {};
              var fileInfo = toCheck.shift();

              try {
                configFile = iniLoader.loadFrom(fileInfo);
              } catch (err) {
                if (fileInfo.isConfig) throw err;
              }

              var profile = configFile[env.AWS_PROFILE || AWS.util.defaultProfile];
              region = profile && profile.region;
            }
          }

          return region;
        };

        var getBooleanValue = function getBooleanValue(value) {
          return value === 'true' ? true : value === 'false' ? false : undefined;
        };

        var USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
          environmentVariableSelector: function environmentVariableSelector(env) {
            return getBooleanValue(env['AWS_USE_FIPS_ENDPOINT']);
          },
          configFileSelector: function configFileSelector(profile) {
            return getBooleanValue(profile['use_fips_endpoint']);
          },
          default: false
        };
        var USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
          environmentVariableSelector: function environmentVariableSelector(env) {
            return getBooleanValue(env['AWS_USE_DUALSTACK_ENDPOINT']);
          },
          configFileSelector: function configFileSelector(profile) {
            return getBooleanValue(profile['use_dualstack_endpoint']);
          },
          default: false
        }; // Update configuration keys

        AWS.util.update(AWS.Config.prototype.keys, {
          credentials: function credentials() {
            var credentials = null;
            new AWS.CredentialProviderChain([function () {
              return new AWS.EnvironmentCredentials('AWS');
            }, function () {
              return new AWS.EnvironmentCredentials('AMAZON');
            }, function () {
              return new AWS.SharedIniFileCredentials({
                disableAssumeRole: true
              });
            }]).resolve(function (err, creds) {
              if (!err) credentials = creds;
            });
            return credentials;
          },
          credentialProvider: function credentialProvider() {
            return new AWS.CredentialProviderChain();
          },
          logger: function logger() {
            return process.env.AWSJS_DEBUG ? console : null;
          },
          region: function region() {
            var region = getRegion();
            return region ? getRealRegion(region) : undefined;
          },
          tokenProvider: function tokenProvider() {
            return new AWS.TokenProviderChain();
          },
          useFipsEndpoint: function useFipsEndpoint() {
            var region = getRegion();
            return isFipsRegion(region) ? true : util.loadConfig(USE_FIPS_ENDPOINT_CONFIG_OPTIONS);
          },
          useDualstackEndpoint: function useDualstackEndpoint() {
            return util.loadConfig(USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS);
          }
        }); // Reset configuration

        AWS.config = new AWS.Config(); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './util': _req,
        './region/utils': _req0,
        'crypto': _req1,
        'buffer': _req2,
        'domain': _req3,
        'stream': _req4,
        'url': _req5,
        'querystring': _req6,
        './event-stream/streaming-create-event-stream': _req7,
        './event-stream/buffered-create-event-stream': _req8,
        './realclock/nodeClock': _req9,
        './publisher': _req10,
        './publisher/configuration': _req11,
        './shared-ini': _req12,
        'util': _req13,
        './core': _req14,
        './credentials': _req15,
        './credentials/credential_provider_chain': _req16,
        './credentials/temporary_credentials': _req17,
        './credentials/chainable_temporary_credentials': _req18,
        './credentials/web_identity_credentials': _req19,
        './credentials/cognito_identity_credentials': _req20,
        './credentials/saml_credentials': _req21,
        './credentials/process_credentials': _req22,
        './xml/node_parser': _req23,
        './http/node': _req24,
        './shared-ini/ini-loader': _req25,
        './credentials/token_file_web_identity_credentials': _req26,
        './credentials/ec2_metadata_credentials': _req27,
        './credentials/remote_credentials': _req28,
        './credentials/ecs_credentials': _req29,
        './credentials/environment_credentials': _req30,
        './credentials/file_system_credentials': _req31,
        './credentials/shared_ini_file_credentials': _req32,
        './credentials/process_credentials': _req33,
        './credentials/sso_credentials': _req34,
        './token': _req35,
        './token/token_provider_chain': _req36,
        './token/sso_token_provider': _req37
      }));
    }
  };
});
//# sourceMappingURL=16b8aca7339754799ebee47bbea7ee22cffc57e6.js.map