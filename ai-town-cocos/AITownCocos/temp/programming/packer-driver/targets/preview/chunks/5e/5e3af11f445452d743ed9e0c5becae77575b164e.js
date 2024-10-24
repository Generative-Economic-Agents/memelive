System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-07-28',
          endpointPrefix: 'resource-explorer-2',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Resource Explorer',
          serviceId: 'Resource Explorer 2',
          signatureVersion: 'v4',
          signingName: 'resource-explorer-2',
          uid: 'resource-explorer-2-2022-07-28'
        },
        operations: {
          AssociateDefaultView: {
            http: {
              requestUri: '/AssociateDefaultView',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ViewArn'],
              members: {
                ViewArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ViewArn: {}
              }
            },
            idempotent: true
          },
          BatchGetView: {
            http: {
              requestUri: '/BatchGetView',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ViewArns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ErrorMessage', 'ViewArn'],
                    members: {
                      ErrorMessage: {},
                      ViewArn: {}
                    }
                  }
                },
                Views: {
                  type: 'list',
                  member: {
                    shape: 'Sb'
                  }
                }
              }
            }
          },
          CreateIndex: {
            http: {
              requestUri: '/CreateIndex',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreatedAt: {
                  shape: 'Sh'
                },
                State: {}
              }
            },
            idempotent: true
          },
          CreateView: {
            http: {
              requestUri: '/CreateView',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ViewName'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Filters: {
                  shape: 'Sc'
                },
                IncludedProperties: {
                  shape: 'Se'
                },
                Scope: {},
                Tags: {
                  shape: 'Sj'
                },
                ViewName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                View: {
                  shape: 'Sb'
                }
              }
            }
          },
          DeleteIndex: {
            http: {
              requestUri: '/DeleteIndex',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                LastUpdatedAt: {
                  shape: 'Sh'
                },
                State: {}
              }
            },
            idempotent: true
          },
          DeleteView: {
            http: {
              requestUri: '/DeleteView',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ViewArn'],
              members: {
                ViewArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ViewArn: {}
              }
            },
            idempotent: true
          },
          DisassociateDefaultView: {
            http: {
              requestUri: '/DisassociateDefaultView',
              responseCode: 200
            },
            idempotent: true
          },
          GetAccountLevelServiceConfiguration: {
            http: {
              requestUri: '/GetAccountLevelServiceConfiguration',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                OrgConfiguration: {
                  type: 'structure',
                  required: ['AWSServiceAccessStatus'],
                  members: {
                    AWSServiceAccessStatus: {},
                    ServiceLinkedRole: {}
                  }
                }
              }
            }
          },
          GetDefaultView: {
            http: {
              requestUri: '/GetDefaultView',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                ViewArn: {}
              }
            }
          },
          GetIndex: {
            http: {
              requestUri: '/GetIndex',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreatedAt: {
                  shape: 'Sh'
                },
                LastUpdatedAt: {
                  shape: 'Sh'
                },
                ReplicatingFrom: {
                  shape: 'S11'
                },
                ReplicatingTo: {
                  shape: 'S11'
                },
                State: {},
                Tags: {
                  shape: 'Sj'
                },
                Type: {}
              }
            }
          },
          GetView: {
            http: {
              requestUri: '/GetView',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ViewArn'],
              members: {
                ViewArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sj'
                },
                View: {
                  shape: 'Sb'
                }
              }
            }
          },
          ListIndexes: {
            http: {
              requestUri: '/ListIndexes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Regions: {
                  type: 'list',
                  member: {}
                },
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Indexes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Region: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIndexesForMembers: {
            http: {
              requestUri: '/ListIndexesForMembers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountIdList'],
              members: {
                AccountIdList: {
                  type: 'list',
                  member: {}
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
                Indexes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      Arn: {},
                      Region: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSupportedResourceTypes: {
            http: {
              requestUri: '/ListSupportedResourceTypes',
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
              members: {
                NextToken: {},
                ResourceTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceType: {},
                      Service: {}
                    }
                  }
                }
              }
            }
          },
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
                Tags: {
                  shape: 'Sj'
                }
              }
            }
          },
          ListViews: {
            http: {
              requestUri: '/ListViews',
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
              members: {
                NextToken: {},
                Views: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Search: {
            http: {
              requestUri: '/Search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['QueryString'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                QueryString: {
                  type: 'string',
                  sensitive: true
                },
                ViewArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Count: {
                  type: 'structure',
                  members: {
                    Complete: {
                      type: 'boolean'
                    },
                    TotalResources: {
                      type: 'long'
                    }
                  }
                },
                NextToken: {},
                Resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      LastReportedAt: {
                        shape: 'Sh'
                      },
                      OwningAccountId: {},
                      Properties: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Data: {
                              type: 'structure',
                              members: {},
                              document: true
                            },
                            LastReportedAt: {
                              shape: 'Sh'
                            },
                            Name: {}
                          }
                        }
                      },
                      Region: {},
                      ResourceType: {},
                      Service: {}
                    }
                  }
                },
                ViewArn: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                Tags: {
                  shape: 'Sj'
                },
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  member: {},
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateIndexType: {
            http: {
              requestUri: '/UpdateIndexType',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'Type'],
              members: {
                Arn: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                LastUpdatedAt: {
                  shape: 'Sh'
                },
                State: {},
                Type: {}
              }
            }
          },
          UpdateView: {
            http: {
              requestUri: '/UpdateView',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ViewArn'],
              members: {
                Filters: {
                  shape: 'Sc'
                },
                IncludedProperties: {
                  shape: 'Se'
                },
                ViewArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                View: {
                  shape: 'Sb'
                }
              }
            }
          }
        },
        shapes: {
          Sb: {
            type: 'structure',
            members: {
              Filters: {
                shape: 'Sc'
              },
              IncludedProperties: {
                shape: 'Se'
              },
              LastUpdatedAt: {
                shape: 'Sh'
              },
              Owner: {},
              Scope: {},
              ViewArn: {}
            }
          },
          Sc: {
            type: 'structure',
            required: ['FilterString'],
            members: {
              FilterString: {}
            },
            sensitive: true
          },
          Se: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          Sh: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sj: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S11: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5e3af11f445452d743ed9e0c5becae77575b164e.js.map