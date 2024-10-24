System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-06-10',
          endpointPrefix: 'portal.sso',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'SSO',
          serviceFullName: 'AWS Single Sign-On',
          serviceId: 'SSO',
          signatureVersion: 'v4',
          signingName: 'awsssoportal',
          uid: 'sso-2019-06-10'
        },
        operations: {
          GetRoleCredentials: {
            http: {
              method: 'GET',
              requestUri: '/federation/credentials'
            },
            input: {
              type: 'structure',
              required: ['roleName', 'accountId', 'accessToken'],
              members: {
                roleName: {
                  location: 'querystring',
                  locationName: 'role_name'
                },
                accountId: {
                  location: 'querystring',
                  locationName: 'account_id'
                },
                accessToken: {
                  shape: 'S4',
                  location: 'header',
                  locationName: 'x-amz-sso_bearer_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                roleCredentials: {
                  type: 'structure',
                  members: {
                    accessKeyId: {},
                    secretAccessKey: {
                      type: 'string',
                      sensitive: true
                    },
                    sessionToken: {
                      type: 'string',
                      sensitive: true
                    },
                    expiration: {
                      type: 'long'
                    }
                  }
                }
              }
            },
            authtype: 'none'
          },
          ListAccountRoles: {
            http: {
              method: 'GET',
              requestUri: '/assignment/roles'
            },
            input: {
              type: 'structure',
              required: ['accessToken', 'accountId'],
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max_result',
                  type: 'integer'
                },
                accessToken: {
                  shape: 'S4',
                  location: 'header',
                  locationName: 'x-amz-sso_bearer_token'
                },
                accountId: {
                  location: 'querystring',
                  locationName: 'account_id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                roleList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      roleName: {},
                      accountId: {}
                    }
                  }
                }
              }
            },
            authtype: 'none'
          },
          ListAccounts: {
            http: {
              method: 'GET',
              requestUri: '/assignment/accounts'
            },
            input: {
              type: 'structure',
              required: ['accessToken'],
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max_result',
                  type: 'integer'
                },
                accessToken: {
                  shape: 'S4',
                  location: 'header',
                  locationName: 'x-amz-sso_bearer_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                accountList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      accountName: {},
                      emailAddress: {}
                    }
                  }
                }
              }
            },
            authtype: 'none'
          },
          Logout: {
            http: {
              requestUri: '/logout'
            },
            input: {
              type: 'structure',
              required: ['accessToken'],
              members: {
                accessToken: {
                  shape: 'S4',
                  location: 'header',
                  locationName: 'x-amz-sso_bearer_token'
                }
              }
            },
            authtype: 'none'
          }
        },
        shapes: {
          S4: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=49e0d91bb6cad0d76e34eb2af207aebc562d5202.js.map