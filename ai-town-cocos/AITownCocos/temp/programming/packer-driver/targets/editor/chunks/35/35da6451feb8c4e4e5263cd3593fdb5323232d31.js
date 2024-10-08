System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-11-03',
          endpointPrefix: 'api.fleethub.iot',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS IoT Fleet Hub',
          serviceId: 'IoTFleetHub',
          signatureVersion: 'v4',
          signingName: 'iotfleethub',
          uid: 'iotfleethub-2020-11-03'
        },
        operations: {
          CreateApplication: {
            http: {
              requestUri: '/applications',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['applicationName', 'roleArn'],
              members: {
                applicationName: {},
                applicationDescription: {},
                clientToken: {
                  idempotencyToken: true
                },
                roleArn: {},
                tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationId', 'applicationArn'],
              members: {
                applicationId: {},
                applicationArn: {}
              }
            }
          },
          DeleteApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeApplication: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationId', 'applicationArn', 'applicationName', 'applicationUrl', 'applicationState', 'applicationCreationDate', 'applicationLastUpdateDate', 'roleArn'],
              members: {
                applicationId: {},
                applicationArn: {},
                applicationName: {},
                applicationDescription: {},
                applicationUrl: {},
                applicationState: {},
                applicationCreationDate: {
                  type: 'long'
                },
                applicationLastUpdateDate: {
                  type: 'long'
                },
                roleArn: {},
                ssoClientId: {},
                errorMessage: {},
                tags: {
                  shape: 'S6'
                }
              }
            }
          },
          ListApplications: {
            http: {
              method: 'GET',
              requestUri: '/applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['applicationId', 'applicationName', 'applicationUrl'],
                    members: {
                      applicationId: {},
                      applicationName: {},
                      applicationDescription: {},
                      applicationUrl: {},
                      applicationCreationDate: {
                        type: 'long'
                      },
                      applicationLastUpdateDate: {
                        type: 'long'
                      },
                      applicationState: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S6'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateApplication: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{applicationId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                applicationName: {},
                applicationDescription: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S6: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=35da6451feb8c4e4e5263cd3593fdb5323232d31.js.map