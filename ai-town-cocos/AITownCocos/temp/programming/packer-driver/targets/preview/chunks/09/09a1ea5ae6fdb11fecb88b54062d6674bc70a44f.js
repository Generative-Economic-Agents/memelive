System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-01-11',
          endpointPrefix: 'entitlement.marketplace',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS Marketplace Entitlement Service',
          serviceId: 'Marketplace Entitlement Service',
          signatureVersion: 'v4',
          signingName: 'aws-marketplace',
          targetPrefix: 'AWSMPEntitlementService',
          uid: 'entitlement.marketplace-2017-01-11'
        },
        operations: {
          GetEntitlements: {
            input: {
              type: 'structure',
              required: ['ProductCode'],
              members: {
                ProductCode: {},
                Filter: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Entitlements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProductCode: {},
                      Dimension: {},
                      CustomerIdentifier: {},
                      Value: {
                        type: 'structure',
                        members: {
                          IntegerValue: {
                            type: 'integer'
                          },
                          DoubleValue: {
                            type: 'double'
                          },
                          BooleanValue: {
                            type: 'boolean'
                          },
                          StringValue: {}
                        }
                      },
                      ExpirationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=09a1ea5ae6fdb11fecb88b54062d6674bc70a44f.js.map