System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2018-11-29',
          endpointPrefix: 'execute-api',
          signingName: 'execute-api',
          serviceFullName: 'AmazonApiGatewayManagementApi',
          serviceId: 'ApiGatewayManagementApi',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'apigatewaymanagementapi-2018-11-29',
          signatureVersion: 'v4'
        },
        operations: {
          DeleteConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/@connections/{connectionId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ConnectionId: {
                  location: 'uri',
                  locationName: 'connectionId'
                }
              },
              required: ['ConnectionId']
            }
          },
          GetConnection: {
            http: {
              method: 'GET',
              requestUri: '/@connections/{connectionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConnectionId: {
                  location: 'uri',
                  locationName: 'connectionId'
                }
              },
              required: ['ConnectionId']
            },
            output: {
              type: 'structure',
              members: {
                ConnectedAt: {
                  shape: 'S5',
                  locationName: 'connectedAt'
                },
                Identity: {
                  locationName: 'identity',
                  type: 'structure',
                  members: {
                    SourceIp: {
                      locationName: 'sourceIp'
                    },
                    UserAgent: {
                      locationName: 'userAgent'
                    }
                  },
                  required: ['SourceIp', 'UserAgent']
                },
                LastActiveAt: {
                  shape: 'S5',
                  locationName: 'lastActiveAt'
                }
              }
            }
          },
          PostToConnection: {
            http: {
              requestUri: '/@connections/{connectionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Data: {
                  type: 'blob'
                },
                ConnectionId: {
                  location: 'uri',
                  locationName: 'connectionId'
                }
              },
              required: ['ConnectionId', 'Data'],
              payload: 'Data'
            }
          }
        },
        shapes: {
          S5: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7290529c59e4a03ea740a35dc5dacf82fee534be.js.map