System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'license-manager-linux-subscriptions',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS License Manager Linux Subscriptions',
          serviceId: 'License Manager Linux Subscriptions',
          signatureVersion: 'v4',
          signingName: 'license-manager-linux-subscriptions',
          uid: 'license-manager-linux-subscriptions-2018-05-10'
        },
        operations: {
          GetServiceSettings: {
            http: {
              requestUri: '/subscription/GetServiceSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                HomeRegions: {
                  shape: 'S3'
                },
                LinuxSubscriptionsDiscovery: {},
                LinuxSubscriptionsDiscoverySettings: {
                  shape: 'S6'
                },
                Status: {},
                StatusMessage: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          ListLinuxSubscriptionInstances: {
            http: {
              requestUri: '/subscription/ListLinuxSubscriptionInstances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sc'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Instances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountID: {},
                      AmiId: {},
                      InstanceID: {},
                      InstanceType: {},
                      LastUpdatedTime: {},
                      ProductCode: {
                        type: 'list',
                        member: {}
                      },
                      Region: {},
                      Status: {},
                      SubscriptionName: {},
                      UsageOperation: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListLinuxSubscriptions: {
            http: {
              requestUri: '/subscription/ListLinuxSubscriptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sc'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Subscriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InstanceCount: {
                        type: 'long'
                      },
                      Name: {},
                      Type: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          UpdateServiceSettings: {
            http: {
              requestUri: '/subscription/UpdateServiceSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['LinuxSubscriptionsDiscovery', 'LinuxSubscriptionsDiscoverySettings'],
              members: {
                AllowUpdate: {
                  type: 'boolean'
                },
                LinuxSubscriptionsDiscovery: {},
                LinuxSubscriptionsDiscoverySettings: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HomeRegions: {
                  shape: 'S3'
                },
                LinuxSubscriptionsDiscovery: {},
                LinuxSubscriptionsDiscoverySettings: {
                  shape: 'S6'
                },
                Status: {},
                StatusMessage: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'structure',
            required: ['OrganizationIntegration', 'SourceRegions'],
            members: {
              OrganizationIntegration: {},
              SourceRegions: {
                shape: 'S3'
              }
            }
          },
          S9: {
            type: 'map',
            key: {},
            value: {}
          },
          Sc: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Operator: {},
                Values: {
                  shape: 'S3'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=745b2ef33195212ee2c1b4fd736d4351e9f60a94.js.map