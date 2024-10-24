System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-11-11',
          endpointPrefix: 'appconfigdata',
          jsonVersion: '1.0',
          protocol: 'rest-json',
          serviceFullName: 'AWS AppConfig Data',
          serviceId: 'AppConfigData',
          signatureVersion: 'v4',
          signingName: 'appconfig',
          uid: 'appconfigdata-2021-11-11'
        },
        operations: {
          GetLatestConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ConfigurationToken'],
              members: {
                ConfigurationToken: {
                  location: 'querystring',
                  locationName: 'configuration_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextPollConfigurationToken: {
                  location: 'header',
                  locationName: 'Next-Poll-Configuration-Token'
                },
                NextPollIntervalInSeconds: {
                  location: 'header',
                  locationName: 'Next-Poll-Interval-In-Seconds',
                  type: 'integer'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Configuration: {
                  type: 'blob',
                  sensitive: true
                },
                VersionLabel: {
                  location: 'header',
                  locationName: 'Version-Label'
                }
              },
              payload: 'Configuration'
            }
          },
          StartConfigurationSession: {
            http: {
              requestUri: '/configurationsessions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ApplicationIdentifier', 'EnvironmentIdentifier', 'ConfigurationProfileIdentifier'],
              members: {
                ApplicationIdentifier: {},
                EnvironmentIdentifier: {},
                ConfigurationProfileIdentifier: {},
                RequiredMinimumPollIntervalInSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InitialConfigurationToken: {}
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=a3e7543bfb4be0133ec0d2274c29321534257bc5.js.map