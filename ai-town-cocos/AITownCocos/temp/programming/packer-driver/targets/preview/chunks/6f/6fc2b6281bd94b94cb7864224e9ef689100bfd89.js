System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-12-01',
          endpointPrefix: 'codeconnections',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'AWS CodeConnections',
          serviceId: 'CodeConnections',
          signatureVersion: 'v4',
          signingName: 'codeconnections',
          targetPrefix: 'com.amazonaws.codeconnections.CodeConnections_20231201',
          uid: 'codeconnections-2023-12-01'
        },
        operations: {
          CreateConnection: {
            input: {
              type: 'structure',
              required: ['ConnectionName'],
              members: {
                ProviderType: {},
                ConnectionName: {},
                Tags: {
                  shape: 'S4'
                },
                HostArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConnectionArn'],
              members: {
                ConnectionArn: {},
                Tags: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateHost: {
            input: {
              type: 'structure',
              required: ['Name', 'ProviderType', 'ProviderEndpoint'],
              members: {
                Name: {},
                ProviderType: {},
                ProviderEndpoint: {},
                VpcConfiguration: {
                  shape: 'Se'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HostArn: {},
                Tags: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateRepositoryLink: {
            input: {
              type: 'structure',
              required: ['ConnectionArn', 'OwnerId', 'RepositoryName'],
              members: {
                ConnectionArn: {},
                OwnerId: {},
                RepositoryName: {},
                EncryptionKeyArn: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RepositoryLinkInfo'],
              members: {
                RepositoryLinkInfo: {
                  shape: 'Sr'
                }
              }
            }
          },
          CreateSyncConfiguration: {
            input: {
              type: 'structure',
              required: ['Branch', 'ConfigFile', 'RepositoryLinkId', 'ResourceName', 'RoleArn', 'SyncType'],
              members: {
                Branch: {},
                ConfigFile: {},
                RepositoryLinkId: {},
                ResourceName: {},
                RoleArn: {},
                SyncType: {},
                PublishDeploymentStatus: {},
                TriggerResourceUpdateOn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SyncConfiguration'],
              members: {
                SyncConfiguration: {
                  shape: 'S13'
                }
              }
            }
          },
          DeleteConnection: {
            input: {
              type: 'structure',
              required: ['ConnectionArn'],
              members: {
                ConnectionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteHost: {
            input: {
              type: 'structure',
              required: ['HostArn'],
              members: {
                HostArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRepositoryLink: {
            input: {
              type: 'structure',
              required: ['RepositoryLinkId'],
              members: {
                RepositoryLinkId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSyncConfiguration: {
            input: {
              type: 'structure',
              required: ['SyncType', 'ResourceName'],
              members: {
                SyncType: {},
                ResourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetConnection: {
            input: {
              type: 'structure',
              required: ['ConnectionArn'],
              members: {
                ConnectionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S1e'
                }
              }
            }
          },
          GetHost: {
            input: {
              type: 'structure',
              required: ['HostArn'],
              members: {
                HostArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Status: {},
                ProviderType: {},
                ProviderEndpoint: {},
                VpcConfiguration: {
                  shape: 'Se'
                }
              }
            }
          },
          GetRepositoryLink: {
            input: {
              type: 'structure',
              required: ['RepositoryLinkId'],
              members: {
                RepositoryLinkId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RepositoryLinkInfo'],
              members: {
                RepositoryLinkInfo: {
                  shape: 'Sr'
                }
              }
            }
          },
          GetRepositorySyncStatus: {
            input: {
              type: 'structure',
              required: ['Branch', 'RepositoryLinkId', 'SyncType'],
              members: {
                Branch: {},
                RepositoryLinkId: {},
                SyncType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['LatestSync'],
              members: {
                LatestSync: {
                  type: 'structure',
                  required: ['StartedAt', 'Status', 'Events'],
                  members: {
                    StartedAt: {
                      type: 'timestamp'
                    },
                    Status: {},
                    Events: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Event', 'Time', 'Type'],
                        members: {
                          Event: {},
                          ExternalId: {},
                          Time: {
                            type: 'timestamp'
                          },
                          Type: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetResourceSyncStatus: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'SyncType'],
              members: {
                ResourceName: {},
                SyncType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['LatestSync'],
              members: {
                DesiredState: {
                  shape: 'S1y'
                },
                LatestSuccessfulSync: {
                  shape: 'S21'
                },
                LatestSync: {
                  shape: 'S21'
                }
              }
            }
          },
          GetSyncBlockerSummary: {
            input: {
              type: 'structure',
              required: ['SyncType', 'ResourceName'],
              members: {
                SyncType: {},
                ResourceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SyncBlockerSummary'],
              members: {
                SyncBlockerSummary: {
                  type: 'structure',
                  required: ['ResourceName'],
                  members: {
                    ResourceName: {},
                    ParentResourceName: {},
                    LatestBlockers: {
                      type: 'list',
                      member: {
                        shape: 'S2a'
                      }
                    }
                  }
                }
              }
            }
          },
          GetSyncConfiguration: {
            input: {
              type: 'structure',
              required: ['SyncType', 'ResourceName'],
              members: {
                SyncType: {},
                ResourceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SyncConfiguration'],
              members: {
                SyncConfiguration: {
                  shape: 'S13'
                }
              }
            }
          },
          ListConnections: {
            input: {
              type: 'structure',
              members: {
                ProviderTypeFilter: {},
                HostArnFilter: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Connections: {
                  type: 'list',
                  member: {
                    shape: 'S1e'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListHosts: {
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
                Hosts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      HostArn: {},
                      ProviderType: {},
                      ProviderEndpoint: {},
                      VpcConfiguration: {
                        shape: 'Se'
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
          ListRepositoryLinks: {
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
              required: ['RepositoryLinks'],
              members: {
                RepositoryLinks: {
                  type: 'list',
                  member: {
                    shape: 'Sr'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRepositorySyncDefinitions: {
            input: {
              type: 'structure',
              required: ['RepositoryLinkId', 'SyncType'],
              members: {
                RepositoryLinkId: {},
                SyncType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RepositorySyncDefinitions'],
              members: {
                RepositorySyncDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Branch', 'Directory', 'Parent', 'Target'],
                    members: {
                      Branch: {},
                      Directory: {},
                      Parent: {},
                      Target: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSyncConfigurations: {
            input: {
              type: 'structure',
              required: ['RepositoryLinkId', 'SyncType'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                RepositoryLinkId: {},
                SyncType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SyncConfigurations'],
              members: {
                SyncConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S4'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
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
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
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
          UpdateHost: {
            input: {
              type: 'structure',
              required: ['HostArn'],
              members: {
                HostArn: {},
                ProviderEndpoint: {},
                VpcConfiguration: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRepositoryLink: {
            input: {
              type: 'structure',
              required: ['RepositoryLinkId'],
              members: {
                ConnectionArn: {},
                EncryptionKeyArn: {},
                RepositoryLinkId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RepositoryLinkInfo'],
              members: {
                RepositoryLinkInfo: {
                  shape: 'Sr'
                }
              }
            }
          },
          UpdateSyncBlocker: {
            input: {
              type: 'structure',
              required: ['Id', 'SyncType', 'ResourceName', 'ResolvedReason'],
              members: {
                Id: {},
                SyncType: {},
                ResourceName: {},
                ResolvedReason: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceName', 'SyncBlocker'],
              members: {
                ResourceName: {},
                ParentResourceName: {},
                SyncBlocker: {
                  shape: 'S2a'
                }
              }
            }
          },
          UpdateSyncConfiguration: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'SyncType'],
              members: {
                Branch: {},
                ConfigFile: {},
                RepositoryLinkId: {},
                ResourceName: {},
                RoleArn: {},
                SyncType: {},
                PublishDeploymentStatus: {},
                TriggerResourceUpdateOn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SyncConfiguration'],
              members: {
                SyncConfiguration: {
                  shape: 'S13'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Se: {
            type: 'structure',
            required: ['VpcId', 'SubnetIds', 'SecurityGroupIds'],
            members: {
              VpcId: {},
              SubnetIds: {
                type: 'list',
                member: {}
              },
              SecurityGroupIds: {
                type: 'list',
                member: {}
              },
              TlsCertificate: {}
            }
          },
          Sr: {
            type: 'structure',
            required: ['ConnectionArn', 'OwnerId', 'ProviderType', 'RepositoryLinkArn', 'RepositoryLinkId', 'RepositoryName'],
            members: {
              ConnectionArn: {},
              EncryptionKeyArn: {},
              OwnerId: {},
              ProviderType: {},
              RepositoryLinkArn: {},
              RepositoryLinkId: {},
              RepositoryName: {}
            }
          },
          S13: {
            type: 'structure',
            required: ['Branch', 'OwnerId', 'ProviderType', 'RepositoryLinkId', 'RepositoryName', 'ResourceName', 'RoleArn', 'SyncType'],
            members: {
              Branch: {},
              ConfigFile: {},
              OwnerId: {},
              ProviderType: {},
              RepositoryLinkId: {},
              RepositoryName: {},
              ResourceName: {},
              RoleArn: {},
              SyncType: {},
              PublishDeploymentStatus: {},
              TriggerResourceUpdateOn: {}
            }
          },
          S1e: {
            type: 'structure',
            members: {
              ConnectionName: {},
              ConnectionArn: {},
              ProviderType: {},
              OwnerAccountId: {},
              ConnectionStatus: {},
              HostArn: {}
            }
          },
          S1y: {
            type: 'structure',
            required: ['Branch', 'Directory', 'OwnerId', 'RepositoryName', 'ProviderType', 'Sha'],
            members: {
              Branch: {},
              Directory: {},
              OwnerId: {},
              RepositoryName: {},
              ProviderType: {},
              Sha: {}
            }
          },
          S21: {
            type: 'structure',
            required: ['Events', 'InitialRevision', 'StartedAt', 'Status', 'TargetRevision', 'Target'],
            members: {
              Events: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Event', 'Time', 'Type'],
                  members: {
                    Event: {},
                    ExternalId: {},
                    Time: {
                      type: 'timestamp'
                    },
                    Type: {}
                  }
                }
              },
              InitialRevision: {
                shape: 'S1y'
              },
              StartedAt: {
                type: 'timestamp'
              },
              Status: {},
              TargetRevision: {
                shape: 'S1y'
              },
              Target: {}
            }
          },
          S2a: {
            type: 'structure',
            required: ['Id', 'Type', 'Status', 'CreatedReason', 'CreatedAt'],
            members: {
              Id: {},
              Type: {},
              Status: {},
              CreatedReason: {},
              CreatedAt: {
                type: 'timestamp'
              },
              Contexts: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Key', 'Value'],
                  members: {
                    Key: {},
                    Value: {}
                  }
                }
              },
              ResolvedReason: {},
              ResolvedAt: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6fc2b6281bd94b94cb7864224e9ef689100bfd89.js.map