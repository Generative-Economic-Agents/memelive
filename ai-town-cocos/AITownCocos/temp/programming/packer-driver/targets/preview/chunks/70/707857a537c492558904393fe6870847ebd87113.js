System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-01-25',
          endpointPrefix: 'deployment-marketplace',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Marketplace Deployment Service',
          serviceId: 'Marketplace Deployment',
          signatureVersion: 'v4',
          signingName: 'aws-marketplace',
          uid: 'marketplace-deployment-2023-01-25'
        },
        operations: {
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S4'
                }
              }
            }
          },
          PutDeploymentParameter: {
            http: {
              requestUri: '/catalogs/{catalog}/products/{productId}/deployment-parameters',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agreementId', 'catalog', 'deploymentParameter', 'productId'],
              members: {
                agreementId: {},
                catalog: {
                  location: 'uri',
                  locationName: 'catalog'
                },
                clientToken: {
                  idempotencyToken: true
                },
                deploymentParameter: {
                  type: 'structure',
                  required: ['name', 'secretString'],
                  members: {
                    name: {},
                    secretString: {
                      type: 'string',
                      sensitive: true
                    }
                  }
                },
                expirationDate: {
                  type: 'timestamp',
                  timestampFormat: 'iso8601'
                },
                productId: {
                  location: 'uri',
                  locationName: 'productId'
                },
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['agreementId', 'deploymentParameterId', 'resourceArn'],
              members: {
                agreementId: {},
                deploymentParameterId: {},
                resourceArn: {},
                tags: {
                  shape: 'Sd'
                }
              }
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S4'
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
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
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'map',
            key: {},
            value: {}
          },
          Sd: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=707857a537c492558904393fe6870847ebd87113.js.map