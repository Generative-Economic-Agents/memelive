System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-01-14',
          endpointPrefix: 'metering.marketplace',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWSMarketplace Metering',
          serviceId: 'Marketplace Metering',
          signatureVersion: 'v4',
          signingName: 'aws-marketplace',
          targetPrefix: 'AWSMPMeteringService',
          uid: 'meteringmarketplace-2016-01-14'
        },
        operations: {
          BatchMeterUsage: {
            input: {
              type: 'structure',
              required: ['UsageRecords', 'ProductCode'],
              members: {
                UsageRecords: {
                  shape: 'S2'
                },
                ProductCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UsageRecord: {
                        shape: 'S3'
                      },
                      MeteringRecordId: {},
                      Status: {}
                    }
                  }
                },
                UnprocessedRecords: {
                  shape: 'S2'
                }
              }
            }
          },
          MeterUsage: {
            input: {
              type: 'structure',
              required: ['ProductCode', 'Timestamp', 'UsageDimension'],
              members: {
                ProductCode: {},
                Timestamp: {
                  type: 'timestamp'
                },
                UsageDimension: {},
                UsageQuantity: {
                  type: 'integer'
                },
                DryRun: {
                  type: 'boolean'
                },
                UsageAllocations: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MeteringRecordId: {}
              }
            }
          },
          RegisterUsage: {
            input: {
              type: 'structure',
              required: ['ProductCode', 'PublicKeyVersion'],
              members: {
                ProductCode: {},
                PublicKeyVersion: {
                  type: 'integer'
                },
                Nonce: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PublicKeyRotationTimestamp: {
                  type: 'timestamp'
                },
                Signature: {}
              }
            }
          },
          ResolveCustomer: {
            input: {
              type: 'structure',
              required: ['RegistrationToken'],
              members: {
                RegistrationToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomerIdentifier: {},
                ProductCode: {},
                CustomerAWSAccountId: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {
              shape: 'S3'
            }
          },
          S3: {
            type: 'structure',
            required: ['Timestamp', 'CustomerIdentifier', 'Dimension'],
            members: {
              Timestamp: {
                type: 'timestamp'
              },
              CustomerIdentifier: {},
              Dimension: {},
              Quantity: {
                type: 'integer'
              },
              UsageAllocations: {
                shape: 'S8'
              }
            }
          },
          S8: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AllocatedUsageQuantity'],
              members: {
                AllocatedUsageQuantity: {
                  type: 'integer'
                },
                Tags: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Value'],
                    members: {
                      Key: {},
                      Value: {}
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d40cb126aa57dccb555534c8f57a511fb7b9f313.js.map