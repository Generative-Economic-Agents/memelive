System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'ssm-sap',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'SsmSap',
          serviceFullName: 'AWS Systems Manager for SAP',
          serviceId: 'Ssm Sap',
          signatureVersion: 'v4',
          signingName: 'ssm-sap',
          uid: 'ssm-sap-2018-05-10'
        },
        operations: {
          DeleteResourcePermission: {
            http: {
              requestUri: '/delete-resource-permission',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ActionType: {},
                SourceResourceArn: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            }
          },
          DeregisterApplication: {
            http: {
              requestUri: '/deregister-application',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetApplication: {
            http: {
              requestUri: '/get-application',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {},
                ApplicationArn: {},
                AppRegistryArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Application: {
                  shape: 'Sd'
                },
                Tags: {
                  shape: 'Sk'
                }
              }
            }
          },
          GetComponent: {
            http: {
              requestUri: '/get-component',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ComponentId'],
              members: {
                ApplicationId: {},
                ComponentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Component: {
                  type: 'structure',
                  members: {
                    ComponentId: {},
                    Sid: {},
                    SystemNumber: {},
                    ParentComponent: {},
                    ChildComponents: {
                      shape: 'Sh'
                    },
                    ApplicationId: {},
                    ComponentType: {},
                    Status: {},
                    SapHostname: {},
                    SapFeature: {},
                    SapKernelVersion: {},
                    HdbVersion: {},
                    Resilience: {
                      type: 'structure',
                      members: {
                        HsrTier: {},
                        HsrReplicationMode: {},
                        HsrOperationMode: {},
                        ClusterStatus: {},
                        EnqueueReplication: {
                          type: 'boolean'
                        }
                      }
                    },
                    AssociatedHost: {
                      type: 'structure',
                      members: {
                        Hostname: {},
                        Ec2InstanceId: {},
                        IpAddresses: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              IpAddress: {},
                              Primary: {
                                type: 'boolean'
                              },
                              AllocationType: {}
                            }
                          }
                        },
                        OsVersion: {}
                      }
                    },
                    Databases: {
                      type: 'list',
                      member: {}
                    },
                    Hosts: {
                      deprecated: true,
                      deprecatedMessage: 'This shape is no longer used. Please use AssociatedHost.',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          HostName: {},
                          HostIp: {},
                          EC2InstanceId: {},
                          InstanceId: {},
                          HostRole: {},
                          OsVersion: {}
                        }
                      }
                    },
                    PrimaryHost: {
                      deprecated: true,
                      deprecatedMessage: 'This shape is no longer used. Please use AssociatedHost.'
                    },
                    DatabaseConnection: {
                      type: 'structure',
                      members: {
                        DatabaseConnectionMethod: {},
                        DatabaseArn: {},
                        ConnectionIp: {}
                      }
                    },
                    LastUpdated: {
                      type: 'timestamp'
                    },
                    Arn: {}
                  }
                },
                Tags: {
                  shape: 'Sk'
                }
              }
            }
          },
          GetDatabase: {
            http: {
              requestUri: '/get-database',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {},
                ComponentId: {},
                DatabaseId: {},
                DatabaseArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Database: {
                  type: 'structure',
                  members: {
                    ApplicationId: {},
                    ComponentId: {},
                    Credentials: {
                      shape: 'S1d'
                    },
                    DatabaseId: {},
                    DatabaseName: {},
                    DatabaseType: {},
                    Arn: {},
                    Status: {},
                    PrimaryHost: {},
                    SQLPort: {
                      type: 'integer'
                    },
                    LastUpdated: {
                      type: 'timestamp'
                    }
                  }
                },
                Tags: {
                  shape: 'Sk'
                }
              }
            }
          },
          GetOperation: {
            http: {
              requestUri: '/get-operation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['OperationId'],
              members: {
                OperationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Operation: {
                  shape: 'S1o'
                }
              }
            }
          },
          GetResourcePermission: {
            http: {
              requestUri: '/get-resource-permission',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ActionType: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            }
          },
          ListApplications: {
            http: {
              requestUri: '/list-applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Applications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      DiscoveryStatus: {},
                      Type: {},
                      Arn: {},
                      Tags: {
                        shape: 'Sk'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListComponents: {
            http: {
              requestUri: '/list-components',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Components: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {},
                      ComponentId: {},
                      ComponentType: {},
                      Tags: {
                        shape: 'Sk'
                      },
                      Arn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDatabases: {
            http: {
              requestUri: '/list-databases',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {},
                ComponentId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Databases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {},
                      ComponentId: {},
                      DatabaseId: {},
                      DatabaseType: {},
                      Arn: {},
                      Tags: {
                        shape: 'Sk'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOperationEvents: {
            http: {
              requestUri: '/list-operation-events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['OperationId'],
              members: {
                OperationId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Description: {},
                      Resource: {
                        type: 'structure',
                        members: {
                          ResourceArn: {},
                          ResourceType: {}
                        }
                      },
                      Status: {},
                      StatusMessage: {},
                      Timestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOperations: {
            http: {
              requestUri: '/list-operations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Operations: {
                  type: 'list',
                  member: {
                    shape: 'S1o'
                  }
                },
                NextToken: {}
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
                tags: {
                  shape: 'Sk'
                }
              }
            }
          },
          PutResourcePermission: {
            http: {
              requestUri: '/put-resource-permission',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ActionType', 'SourceResourceArn', 'ResourceArn'],
              members: {
                ActionType: {},
                SourceResourceArn: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            }
          },
          RegisterApplication: {
            http: {
              requestUri: '/register-application',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ApplicationType', 'Instances'],
              members: {
                ApplicationId: {},
                ApplicationType: {},
                Instances: {
                  type: 'list',
                  member: {}
                },
                SapInstanceNumber: {},
                Sid: {},
                Tags: {
                  shape: 'Sk'
                },
                Credentials: {
                  shape: 'S1d'
                },
                DatabaseArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Application: {
                  shape: 'Sd'
                },
                OperationId: {}
              }
            }
          },
          StartApplication: {
            http: {
              requestUri: '/start-application',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          StartApplicationRefresh: {
            http: {
              requestUri: '/start-application-refresh',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          StopApplication: {
            http: {
              requestUri: '/stop-application',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {},
                StopConnectedEntity: {},
                IncludeEc2InstanceShutdown: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
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
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'Sk'
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
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateApplicationSettings: {
            http: {
              requestUri: '/update-application-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {},
                CredentialsToAddOrUpdate: {
                  shape: 'S1d'
                },
                CredentialsToRemove: {
                  shape: 'S1d'
                },
                Backint: {
                  type: 'structure',
                  required: ['BackintMode', 'EnsureNoBackupInProcess'],
                  members: {
                    BackintMode: {},
                    EnsureNoBackupInProcess: {
                      type: 'boolean'
                    }
                  }
                },
                DatabaseArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {},
                OperationIds: {
                  type: 'list',
                  member: {}
                }
              }
            }
          }
        },
        shapes: {
          Sd: {
            type: 'structure',
            members: {
              Id: {},
              Type: {},
              Arn: {},
              AppRegistryArn: {},
              Status: {},
              DiscoveryStatus: {},
              Components: {
                shape: 'Sh'
              },
              LastUpdated: {
                type: 'timestamp'
              },
              StatusMessage: {}
            }
          },
          Sh: {
            type: 'list',
            member: {}
          },
          Sk: {
            type: 'map',
            key: {},
            value: {}
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DatabaseName', 'CredentialType', 'SecretId'],
              members: {
                DatabaseName: {},
                CredentialType: {},
                SecretId: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S1o: {
            type: 'structure',
            members: {
              Id: {},
              Type: {},
              Status: {},
              StatusMessage: {},
              Properties: {
                type: 'map',
                key: {},
                value: {}
              },
              ResourceType: {},
              ResourceId: {},
              ResourceArn: {},
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              }
            }
          },
          S1z: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value', 'Operator'],
              members: {
                Name: {},
                Value: {},
                Operator: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7b9201fe18c98041f19848087bc82d45c699126a.js.map