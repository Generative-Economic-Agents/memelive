System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-09-07',
          endpointPrefix: 'freetier',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'AWS Free Tier',
          serviceId: 'FreeTier',
          signatureVersion: 'v4',
          signingName: 'freetier',
          targetPrefix: 'AWSFreeTierService',
          uid: 'freetier-2023-09-07'
        },
        operations: {
          GetFreeTierUsage: {
            input: {
              type: 'structure',
              members: {
                filter: {
                  shape: 'S2'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['freeTierUsages'],
              members: {
                freeTierUsages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      actualUsageAmount: {
                        type: 'double'
                      },
                      description: {},
                      forecastedUsageAmount: {
                        type: 'double'
                      },
                      freeTierType: {},
                      limit: {
                        type: 'double'
                      },
                      operation: {},
                      region: {},
                      service: {},
                      unit: {},
                      usageType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            members: {
              And: {
                shape: 'S3'
              },
              Dimensions: {
                type: 'structure',
                required: ['Key', 'MatchOptions', 'Values'],
                members: {
                  Key: {},
                  MatchOptions: {
                    type: 'list',
                    member: {}
                  },
                  Values: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              Not: {
                shape: 'S2'
              },
              Or: {
                shape: 'S3'
              }
            }
          },
          S3: {
            type: 'list',
            member: {
              shape: 'S2'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=18a67419015aa7a5f8596a5a58195548cb9f5737.js.map