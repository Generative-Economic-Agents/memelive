System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-06-10',
          endpointPrefix: 'oidc',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'SSO OIDC',
          serviceFullName: 'AWS SSO OIDC',
          serviceId: 'SSO OIDC',
          signatureVersion: 'v4',
          signingName: 'sso-oauth',
          uid: 'sso-oidc-2019-06-10'
        },
        operations: {
          CreateToken: {
            http: {
              requestUri: '/token'
            },
            input: {
              type: 'structure',
              required: ['clientId', 'clientSecret', 'grantType'],
              members: {
                clientId: {},
                clientSecret: {
                  shape: 'S3'
                },
                grantType: {},
                deviceCode: {},
                code: {},
                refreshToken: {
                  shape: 'S7'
                },
                scope: {
                  shape: 'S8'
                },
                redirectUri: {},
                codeVerifier: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accessToken: {
                  shape: 'Sd'
                },
                tokenType: {},
                expiresIn: {
                  type: 'integer'
                },
                refreshToken: {
                  shape: 'S7'
                },
                idToken: {
                  shape: 'Sg'
                }
              }
            },
            authtype: 'none'
          },
          CreateTokenWithIAM: {
            http: {
              requestUri: '/token?aws_iam=t'
            },
            input: {
              type: 'structure',
              required: ['clientId', 'grantType'],
              members: {
                clientId: {},
                grantType: {},
                code: {},
                refreshToken: {
                  shape: 'S7'
                },
                assertion: {
                  type: 'string',
                  sensitive: true
                },
                scope: {
                  shape: 'S8'
                },
                redirectUri: {},
                subjectToken: {
                  type: 'string',
                  sensitive: true
                },
                subjectTokenType: {},
                requestedTokenType: {},
                codeVerifier: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accessToken: {
                  shape: 'Sd'
                },
                tokenType: {},
                expiresIn: {
                  type: 'integer'
                },
                refreshToken: {
                  shape: 'S7'
                },
                idToken: {
                  shape: 'Sg'
                },
                issuedTokenType: {},
                scope: {
                  shape: 'S8'
                }
              }
            }
          },
          RegisterClient: {
            http: {
              requestUri: '/client/register'
            },
            input: {
              type: 'structure',
              required: ['clientName', 'clientType'],
              members: {
                clientName: {},
                clientType: {},
                scopes: {
                  shape: 'S8'
                },
                redirectUris: {
                  type: 'list',
                  member: {}
                },
                grantTypes: {
                  type: 'list',
                  member: {}
                },
                issuerUrl: {},
                entitledApplicationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                clientId: {},
                clientSecret: {
                  shape: 'S3'
                },
                clientIdIssuedAt: {
                  type: 'long'
                },
                clientSecretExpiresAt: {
                  type: 'long'
                },
                authorizationEndpoint: {},
                tokenEndpoint: {}
              }
            },
            authtype: 'none'
          },
          StartDeviceAuthorization: {
            http: {
              requestUri: '/device_authorization'
            },
            input: {
              type: 'structure',
              required: ['clientId', 'clientSecret', 'startUrl'],
              members: {
                clientId: {},
                clientSecret: {
                  shape: 'S3'
                },
                startUrl: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deviceCode: {},
                userCode: {},
                verificationUri: {},
                verificationUriComplete: {},
                expiresIn: {
                  type: 'integer'
                },
                interval: {
                  type: 'integer'
                }
              }
            },
            authtype: 'none'
          }
        },
        shapes: {
          S3: {
            type: 'string',
            sensitive: true
          },
          S7: {
            type: 'string',
            sensitive: true
          },
          S8: {
            type: 'list',
            member: {}
          },
          Sb: {
            type: 'string',
            sensitive: true
          },
          Sd: {
            type: 'string',
            sensitive: true
          },
          Sg: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7ec9a0eea86c5f8103959e452211450495869fc7.js.map