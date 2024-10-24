System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'license-manager-user-subscriptions',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS License Manager User Subscriptions',
          serviceId: 'License Manager User Subscriptions',
          signatureVersion: 'v4',
          signingName: 'license-manager-user-subscriptions',
          uid: 'license-manager-user-subscriptions-2018-05-10'
        },
        operations: {
          AssociateUser: {
            http: {
              requestUri: '/user/AssociateUser',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'InstanceId', 'Username'],
              members: {
                Domain: {},
                IdentityProvider: {
                  shape: 'S3'
                },
                InstanceId: {},
                Username: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InstanceUserSummary'],
              members: {
                InstanceUserSummary: {
                  shape: 'S6'
                }
              }
            },
            idempotent: true
          },
          DeregisterIdentityProvider: {
            http: {
              requestUri: '/identity-provider/DeregisterIdentityProvider',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'Product'],
              members: {
                IdentityProvider: {
                  shape: 'S3'
                },
                Product: {}
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityProviderSummary'],
              members: {
                IdentityProviderSummary: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          DisassociateUser: {
            http: {
              requestUri: '/user/DisassociateUser',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'InstanceId', 'Username'],
              members: {
                Domain: {},
                IdentityProvider: {
                  shape: 'S3'
                },
                InstanceId: {},
                Username: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InstanceUserSummary'],
              members: {
                InstanceUserSummary: {
                  shape: 'S6'
                }
              }
            },
            idempotent: true
          },
          ListIdentityProviders: {
            http: {
              requestUri: '/identity-provider/ListIdentityProviders',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityProviderSummaries'],
              members: {
                IdentityProviderSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S9'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInstances: {
            http: {
              requestUri: '/instance/ListInstances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sl'
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
                InstanceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['InstanceId', 'Products', 'Status'],
                    members: {
                      InstanceId: {},
                      LastStatusCheckDate: {},
                      Products: {
                        type: 'list',
                        member: {}
                      },
                      Status: {},
                      StatusMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProductSubscriptions: {
            http: {
              requestUri: '/user/ListProductSubscriptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'Product'],
              members: {
                Filters: {
                  shape: 'Sl'
                },
                IdentityProvider: {
                  shape: 'S3'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Product: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ProductUserSummaries: {
                  type: 'list',
                  member: {
                    shape: 'Su'
                  }
                }
              }
            }
          },
          ListUserAssociations: {
            http: {
              requestUri: '/user/ListUserAssociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'InstanceId'],
              members: {
                Filters: {
                  shape: 'Sl'
                },
                IdentityProvider: {
                  shape: 'S3'
                },
                InstanceId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceUserSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S6'
                  }
                },
                NextToken: {}
              }
            }
          },
          RegisterIdentityProvider: {
            http: {
              requestUri: '/identity-provider/RegisterIdentityProvider',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'Product'],
              members: {
                IdentityProvider: {
                  shape: 'S3'
                },
                Product: {},
                Settings: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityProviderSummary'],
              members: {
                IdentityProviderSummary: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          StartProductSubscription: {
            http: {
              requestUri: '/user/StartProductSubscription',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'Product', 'Username'],
              members: {
                Domain: {},
                IdentityProvider: {
                  shape: 'S3'
                },
                Product: {},
                Username: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ProductUserSummary'],
              members: {
                ProductUserSummary: {
                  shape: 'Su'
                }
              }
            }
          },
          StopProductSubscription: {
            http: {
              requestUri: '/user/StopProductSubscription',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'Product', 'Username'],
              members: {
                Domain: {},
                IdentityProvider: {
                  shape: 'S3'
                },
                Product: {},
                Username: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ProductUserSummary'],
              members: {
                ProductUserSummary: {
                  shape: 'Su'
                }
              }
            }
          },
          UpdateIdentityProviderSettings: {
            http: {
              requestUri: '/identity-provider/UpdateIdentityProviderSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityProvider', 'Product', 'UpdateSettings'],
              members: {
                IdentityProvider: {
                  shape: 'S3'
                },
                Product: {},
                UpdateSettings: {
                  type: 'structure',
                  required: ['AddSubnets', 'RemoveSubnets'],
                  members: {
                    AddSubnets: {
                      shape: 'S16'
                    },
                    RemoveSubnets: {
                      shape: 'S16'
                    },
                    SecurityGroupId: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IdentityProviderSummary'],
              members: {
                IdentityProviderSummary: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              ActiveDirectoryIdentityProvider: {
                type: 'structure',
                members: {
                  DirectoryId: {}
                }
              }
            },
            union: true
          },
          S6: {
            type: 'structure',
            required: ['IdentityProvider', 'InstanceId', 'Status', 'Username'],
            members: {
              AssociationDate: {},
              DisassociationDate: {},
              Domain: {},
              IdentityProvider: {
                shape: 'S3'
              },
              InstanceId: {},
              Status: {},
              StatusMessage: {},
              Username: {}
            }
          },
          S9: {
            type: 'structure',
            required: ['IdentityProvider', 'Product', 'Settings', 'Status'],
            members: {
              FailureMessage: {},
              IdentityProvider: {
                shape: 'S3'
              },
              Product: {},
              Settings: {
                shape: 'Sa'
              },
              Status: {}
            }
          },
          Sa: {
            type: 'structure',
            required: ['SecurityGroupId', 'Subnets'],
            members: {
              SecurityGroupId: {},
              Subnets: {
                type: 'list',
                member: {}
              }
            }
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Attribute: {},
                Operation: {},
                Value: {}
              }
            }
          },
          Su: {
            type: 'structure',
            required: ['IdentityProvider', 'Product', 'Status', 'Username'],
            members: {
              Domain: {},
              IdentityProvider: {
                shape: 'S3'
              },
              Product: {},
              Status: {},
              StatusMessage: {},
              SubscriptionEndDate: {},
              SubscriptionStartDate: {},
              Username: {}
            }
          },
          S16: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c857acde42352dc04ab3723770f89abfd4a6488c.js.map