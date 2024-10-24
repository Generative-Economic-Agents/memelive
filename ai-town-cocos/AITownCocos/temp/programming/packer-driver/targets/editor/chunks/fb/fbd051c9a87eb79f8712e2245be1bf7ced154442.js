System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2017-11-27',
          endpointPrefix: 'mq',
          signingName: 'mq',
          serviceFullName: 'AmazonMQ',
          serviceId: 'mq',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'mq-2017-11-27',
          signatureVersion: 'v4'
        },
        operations: {
          CreateBroker: {
            http: {
              requestUri: '/v1/brokers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AuthenticationStrategy: {
                  locationName: 'authenticationStrategy'
                },
                AutoMinorVersionUpgrade: {
                  locationName: 'autoMinorVersionUpgrade',
                  type: 'boolean'
                },
                BrokerName: {
                  locationName: 'brokerName'
                },
                Configuration: {
                  shape: 'S5',
                  locationName: 'configuration'
                },
                CreatorRequestId: {
                  locationName: 'creatorRequestId',
                  idempotencyToken: true
                },
                DeploymentMode: {
                  locationName: 'deploymentMode'
                },
                EncryptionOptions: {
                  shape: 'S8',
                  locationName: 'encryptionOptions'
                },
                EngineType: {
                  locationName: 'engineType'
                },
                EngineVersion: {
                  locationName: 'engineVersion'
                },
                HostInstanceType: {
                  locationName: 'hostInstanceType'
                },
                LdapServerMetadata: {
                  shape: 'Sa',
                  locationName: 'ldapServerMetadata'
                },
                Logs: {
                  shape: 'Sc',
                  locationName: 'logs'
                },
                MaintenanceWindowStartTime: {
                  shape: 'Sd',
                  locationName: 'maintenanceWindowStartTime'
                },
                PubliclyAccessible: {
                  locationName: 'publiclyAccessible',
                  type: 'boolean'
                },
                SecurityGroups: {
                  shape: 'Sb',
                  locationName: 'securityGroups'
                },
                StorageType: {
                  locationName: 'storageType'
                },
                SubnetIds: {
                  shape: 'Sb',
                  locationName: 'subnetIds'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                Users: {
                  locationName: 'users',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConsoleAccess: {
                        locationName: 'consoleAccess',
                        type: 'boolean'
                      },
                      Groups: {
                        shape: 'Sb',
                        locationName: 'groups'
                      },
                      Password: {
                        locationName: 'password'
                      },
                      Username: {
                        locationName: 'username'
                      },
                      ReplicationUser: {
                        locationName: 'replicationUser',
                        type: 'boolean'
                      }
                    },
                    required: ['Username', 'Password']
                  }
                },
                DataReplicationMode: {
                  locationName: 'dataReplicationMode'
                },
                DataReplicationPrimaryBrokerArn: {
                  locationName: 'dataReplicationPrimaryBrokerArn'
                }
              },
              required: ['EngineVersion', 'HostInstanceType', 'AutoMinorVersionUpgrade', 'Users', 'BrokerName', 'DeploymentMode', 'EngineType', 'PubliclyAccessible']
            },
            output: {
              type: 'structure',
              members: {
                BrokerArn: {
                  locationName: 'brokerArn'
                },
                BrokerId: {
                  locationName: 'brokerId'
                }
              }
            }
          },
          CreateConfiguration: {
            http: {
              requestUri: '/v1/configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AuthenticationStrategy: {
                  locationName: 'authenticationStrategy'
                },
                EngineType: {
                  locationName: 'engineType'
                },
                EngineVersion: {
                  locationName: 'engineVersion'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              },
              required: ['EngineVersion', 'EngineType', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                AuthenticationStrategy: {
                  locationName: 'authenticationStrategy'
                },
                Created: {
                  shape: 'Sn',
                  locationName: 'created'
                },
                Id: {
                  locationName: 'id'
                },
                LatestRevision: {
                  shape: 'So',
                  locationName: 'latestRevision'
                },
                Name: {
                  locationName: 'name'
                }
              }
            }
          },
          CreateTags: {
            http: {
              requestUri: '/v1/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              },
              required: ['ResourceArn']
            }
          },
          CreateUser: {
            http: {
              requestUri: '/v1/brokers/{broker-id}/users/{username}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                },
                ConsoleAccess: {
                  locationName: 'consoleAccess',
                  type: 'boolean'
                },
                Groups: {
                  shape: 'Sb',
                  locationName: 'groups'
                },
                Password: {
                  locationName: 'password'
                },
                Username: {
                  location: 'uri',
                  locationName: 'username'
                },
                ReplicationUser: {
                  locationName: 'replicationUser',
                  type: 'boolean'
                }
              },
              required: ['Username', 'BrokerId', 'Password']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteBroker: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/brokers/{broker-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                }
              },
              required: ['BrokerId']
            },
            output: {
              type: 'structure',
              members: {
                BrokerId: {
                  locationName: 'brokerId'
                }
              }
            }
          },
          DeleteTags: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagKeys: {
                  shape: 'Sb',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['TagKeys', 'ResourceArn']
            }
          },
          DeleteUser: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/brokers/{broker-id}/users/{username}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                },
                Username: {
                  location: 'uri',
                  locationName: 'username'
                }
              },
              required: ['Username', 'BrokerId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeBroker: {
            http: {
              method: 'GET',
              requestUri: '/v1/brokers/{broker-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                }
              },
              required: ['BrokerId']
            },
            output: {
              type: 'structure',
              members: {
                ActionsRequired: {
                  locationName: 'actionsRequired',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ActionRequiredCode: {
                        locationName: 'actionRequiredCode'
                      },
                      ActionRequiredInfo: {
                        locationName: 'actionRequiredInfo'
                      }
                    }
                  }
                },
                AuthenticationStrategy: {
                  locationName: 'authenticationStrategy'
                },
                AutoMinorVersionUpgrade: {
                  locationName: 'autoMinorVersionUpgrade',
                  type: 'boolean'
                },
                BrokerArn: {
                  locationName: 'brokerArn'
                },
                BrokerId: {
                  locationName: 'brokerId'
                },
                BrokerInstances: {
                  locationName: 'brokerInstances',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConsoleURL: {
                        locationName: 'consoleURL'
                      },
                      Endpoints: {
                        shape: 'Sb',
                        locationName: 'endpoints'
                      },
                      IpAddress: {
                        locationName: 'ipAddress'
                      }
                    }
                  }
                },
                BrokerName: {
                  locationName: 'brokerName'
                },
                BrokerState: {
                  locationName: 'brokerState'
                },
                Configurations: {
                  locationName: 'configurations',
                  type: 'structure',
                  members: {
                    Current: {
                      shape: 'S5',
                      locationName: 'current'
                    },
                    History: {
                      locationName: 'history',
                      type: 'list',
                      member: {
                        shape: 'S5'
                      }
                    },
                    Pending: {
                      shape: 'S5',
                      locationName: 'pending'
                    }
                  }
                },
                Created: {
                  shape: 'Sn',
                  locationName: 'created'
                },
                DeploymentMode: {
                  locationName: 'deploymentMode'
                },
                EncryptionOptions: {
                  shape: 'S8',
                  locationName: 'encryptionOptions'
                },
                EngineType: {
                  locationName: 'engineType'
                },
                EngineVersion: {
                  locationName: 'engineVersion'
                },
                HostInstanceType: {
                  locationName: 'hostInstanceType'
                },
                LdapServerMetadata: {
                  shape: 'S16',
                  locationName: 'ldapServerMetadata'
                },
                Logs: {
                  locationName: 'logs',
                  type: 'structure',
                  members: {
                    Audit: {
                      locationName: 'audit',
                      type: 'boolean'
                    },
                    AuditLogGroup: {
                      locationName: 'auditLogGroup'
                    },
                    General: {
                      locationName: 'general',
                      type: 'boolean'
                    },
                    GeneralLogGroup: {
                      locationName: 'generalLogGroup'
                    },
                    Pending: {
                      locationName: 'pending',
                      type: 'structure',
                      members: {
                        Audit: {
                          locationName: 'audit',
                          type: 'boolean'
                        },
                        General: {
                          locationName: 'general',
                          type: 'boolean'
                        }
                      }
                    }
                  },
                  required: ['GeneralLogGroup', 'General']
                },
                MaintenanceWindowStartTime: {
                  shape: 'Sd',
                  locationName: 'maintenanceWindowStartTime'
                },
                PendingAuthenticationStrategy: {
                  locationName: 'pendingAuthenticationStrategy'
                },
                PendingEngineVersion: {
                  locationName: 'pendingEngineVersion'
                },
                PendingHostInstanceType: {
                  locationName: 'pendingHostInstanceType'
                },
                PendingLdapServerMetadata: {
                  shape: 'S16',
                  locationName: 'pendingLdapServerMetadata'
                },
                PendingSecurityGroups: {
                  shape: 'Sb',
                  locationName: 'pendingSecurityGroups'
                },
                PubliclyAccessible: {
                  locationName: 'publiclyAccessible',
                  type: 'boolean'
                },
                SecurityGroups: {
                  shape: 'Sb',
                  locationName: 'securityGroups'
                },
                StorageType: {
                  locationName: 'storageType'
                },
                SubnetIds: {
                  shape: 'Sb',
                  locationName: 'subnetIds'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                Users: {
                  shape: 'S19',
                  locationName: 'users'
                },
                DataReplicationMetadata: {
                  shape: 'S1c',
                  locationName: 'dataReplicationMetadata'
                },
                DataReplicationMode: {
                  locationName: 'dataReplicationMode'
                },
                PendingDataReplicationMetadata: {
                  shape: 'S1c',
                  locationName: 'pendingDataReplicationMetadata'
                },
                PendingDataReplicationMode: {
                  locationName: 'pendingDataReplicationMode'
                }
              }
            }
          },
          DescribeBrokerEngineTypes: {
            http: {
              method: 'GET',
              requestUri: '/v1/broker-engine-types',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                EngineType: {
                  location: 'querystring',
                  locationName: 'engineType'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BrokerEngineTypes: {
                  locationName: 'brokerEngineTypes',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EngineType: {
                        locationName: 'engineType'
                      },
                      EngineVersions: {
                        locationName: 'engineVersions',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {
                              locationName: 'name'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          DescribeBrokerInstanceOptions: {
            http: {
              method: 'GET',
              requestUri: '/v1/broker-instance-options',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                EngineType: {
                  location: 'querystring',
                  locationName: 'engineType'
                },
                HostInstanceType: {
                  location: 'querystring',
                  locationName: 'hostInstanceType'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                StorageType: {
                  location: 'querystring',
                  locationName: 'storageType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BrokerInstanceOptions: {
                  locationName: 'brokerInstanceOptions',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AvailabilityZones: {
                        locationName: 'availabilityZones',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {
                              locationName: 'name'
                            }
                          }
                        }
                      },
                      EngineType: {
                        locationName: 'engineType'
                      },
                      HostInstanceType: {
                        locationName: 'hostInstanceType'
                      },
                      StorageType: {
                        locationName: 'storageType'
                      },
                      SupportedDeploymentModes: {
                        locationName: 'supportedDeploymentModes',
                        type: 'list',
                        member: {}
                      },
                      SupportedEngineVersions: {
                        shape: 'Sb',
                        locationName: 'supportedEngineVersions'
                      }
                    }
                  }
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          DescribeConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/v1/configurations/{configuration-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationId: {
                  location: 'uri',
                  locationName: 'configuration-id'
                }
              },
              required: ['ConfigurationId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                AuthenticationStrategy: {
                  locationName: 'authenticationStrategy'
                },
                Created: {
                  shape: 'Sn',
                  locationName: 'created'
                },
                Description: {
                  locationName: 'description'
                },
                EngineType: {
                  locationName: 'engineType'
                },
                EngineVersion: {
                  locationName: 'engineVersion'
                },
                Id: {
                  locationName: 'id'
                },
                LatestRevision: {
                  shape: 'So',
                  locationName: 'latestRevision'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          DescribeConfigurationRevision: {
            http: {
              method: 'GET',
              requestUri: '/v1/configurations/{configuration-id}/revisions/{configuration-revision}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationId: {
                  location: 'uri',
                  locationName: 'configuration-id'
                },
                ConfigurationRevision: {
                  location: 'uri',
                  locationName: 'configuration-revision'
                }
              },
              required: ['ConfigurationRevision', 'ConfigurationId']
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationId: {
                  locationName: 'configurationId'
                },
                Created: {
                  shape: 'Sn',
                  locationName: 'created'
                },
                Data: {
                  locationName: 'data'
                },
                Description: {
                  locationName: 'description'
                }
              }
            }
          },
          DescribeUser: {
            http: {
              method: 'GET',
              requestUri: '/v1/brokers/{broker-id}/users/{username}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                },
                Username: {
                  location: 'uri',
                  locationName: 'username'
                }
              },
              required: ['Username', 'BrokerId']
            },
            output: {
              type: 'structure',
              members: {
                BrokerId: {
                  locationName: 'brokerId'
                },
                ConsoleAccess: {
                  locationName: 'consoleAccess',
                  type: 'boolean'
                },
                Groups: {
                  shape: 'Sb',
                  locationName: 'groups'
                },
                Pending: {
                  locationName: 'pending',
                  type: 'structure',
                  members: {
                    ConsoleAccess: {
                      locationName: 'consoleAccess',
                      type: 'boolean'
                    },
                    Groups: {
                      shape: 'Sb',
                      locationName: 'groups'
                    },
                    PendingChange: {
                      locationName: 'pendingChange'
                    }
                  },
                  required: ['PendingChange']
                },
                Username: {
                  locationName: 'username'
                },
                ReplicationUser: {
                  locationName: 'replicationUser',
                  type: 'boolean'
                }
              }
            }
          },
          ListBrokers: {
            http: {
              method: 'GET',
              requestUri: '/v1/brokers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BrokerSummaries: {
                  locationName: 'brokerSummaries',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BrokerArn: {
                        locationName: 'brokerArn'
                      },
                      BrokerId: {
                        locationName: 'brokerId'
                      },
                      BrokerName: {
                        locationName: 'brokerName'
                      },
                      BrokerState: {
                        locationName: 'brokerState'
                      },
                      Created: {
                        shape: 'Sn',
                        locationName: 'created'
                      },
                      DeploymentMode: {
                        locationName: 'deploymentMode'
                      },
                      EngineType: {
                        locationName: 'engineType'
                      },
                      HostInstanceType: {
                        locationName: 'hostInstanceType'
                      }
                    },
                    required: ['DeploymentMode', 'EngineType']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListConfigurationRevisions: {
            http: {
              method: 'GET',
              requestUri: '/v1/configurations/{configuration-id}/revisions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationId: {
                  location: 'uri',
                  locationName: 'configuration-id'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ConfigurationId']
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationId: {
                  locationName: 'configurationId'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken'
                },
                Revisions: {
                  locationName: 'revisions',
                  type: 'list',
                  member: {
                    shape: 'So'
                  }
                }
              }
            }
          },
          ListConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/v1/configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Configurations: {
                  locationName: 'configurations',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      AuthenticationStrategy: {
                        locationName: 'authenticationStrategy'
                      },
                      Created: {
                        shape: 'Sn',
                        locationName: 'created'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      EngineType: {
                        locationName: 'engineType'
                      },
                      EngineVersion: {
                        locationName: 'engineVersion'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      LatestRevision: {
                        shape: 'So',
                        locationName: 'latestRevision'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      Tags: {
                        shape: 'Sg',
                        locationName: 'tags'
                      }
                    },
                    required: ['Description', 'EngineVersion', 'LatestRevision', 'AuthenticationStrategy', 'EngineType', 'Id', 'Arn', 'Name', 'Created']
                  }
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListTags: {
            http: {
              method: 'GET',
              requestUri: '/v1/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          ListUsers: {
            http: {
              method: 'GET',
              requestUri: '/v1/brokers/{broker-id}/users',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['BrokerId']
            },
            output: {
              type: 'structure',
              members: {
                BrokerId: {
                  locationName: 'brokerId'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken'
                },
                Users: {
                  shape: 'S19',
                  locationName: 'users'
                }
              }
            }
          },
          Promote: {
            http: {
              requestUri: '/v1/brokers/{broker-id}/promote',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                },
                Mode: {
                  locationName: 'mode'
                }
              },
              required: ['BrokerId', 'Mode']
            },
            output: {
              type: 'structure',
              members: {
                BrokerId: {
                  locationName: 'brokerId'
                }
              }
            }
          },
          RebootBroker: {
            http: {
              requestUri: '/v1/brokers/{broker-id}/reboot',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                }
              },
              required: ['BrokerId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateBroker: {
            http: {
              method: 'PUT',
              requestUri: '/v1/brokers/{broker-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AuthenticationStrategy: {
                  locationName: 'authenticationStrategy'
                },
                AutoMinorVersionUpgrade: {
                  locationName: 'autoMinorVersionUpgrade',
                  type: 'boolean'
                },
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                },
                Configuration: {
                  shape: 'S5',
                  locationName: 'configuration'
                },
                EngineVersion: {
                  locationName: 'engineVersion'
                },
                HostInstanceType: {
                  locationName: 'hostInstanceType'
                },
                LdapServerMetadata: {
                  shape: 'Sa',
                  locationName: 'ldapServerMetadata'
                },
                Logs: {
                  shape: 'Sc',
                  locationName: 'logs'
                },
                MaintenanceWindowStartTime: {
                  shape: 'Sd',
                  locationName: 'maintenanceWindowStartTime'
                },
                SecurityGroups: {
                  shape: 'Sb',
                  locationName: 'securityGroups'
                },
                DataReplicationMode: {
                  locationName: 'dataReplicationMode'
                }
              },
              required: ['BrokerId']
            },
            output: {
              type: 'structure',
              members: {
                AuthenticationStrategy: {
                  locationName: 'authenticationStrategy'
                },
                AutoMinorVersionUpgrade: {
                  locationName: 'autoMinorVersionUpgrade',
                  type: 'boolean'
                },
                BrokerId: {
                  locationName: 'brokerId'
                },
                Configuration: {
                  shape: 'S5',
                  locationName: 'configuration'
                },
                EngineVersion: {
                  locationName: 'engineVersion'
                },
                HostInstanceType: {
                  locationName: 'hostInstanceType'
                },
                LdapServerMetadata: {
                  shape: 'S16',
                  locationName: 'ldapServerMetadata'
                },
                Logs: {
                  shape: 'Sc',
                  locationName: 'logs'
                },
                MaintenanceWindowStartTime: {
                  shape: 'Sd',
                  locationName: 'maintenanceWindowStartTime'
                },
                SecurityGroups: {
                  shape: 'Sb',
                  locationName: 'securityGroups'
                },
                DataReplicationMetadata: {
                  shape: 'S1c',
                  locationName: 'dataReplicationMetadata'
                },
                DataReplicationMode: {
                  locationName: 'dataReplicationMode'
                },
                PendingDataReplicationMetadata: {
                  shape: 'S1c',
                  locationName: 'pendingDataReplicationMetadata'
                },
                PendingDataReplicationMode: {
                  locationName: 'pendingDataReplicationMode'
                }
              }
            }
          },
          UpdateConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/v1/configurations/{configuration-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConfigurationId: {
                  location: 'uri',
                  locationName: 'configuration-id'
                },
                Data: {
                  locationName: 'data'
                },
                Description: {
                  locationName: 'description'
                }
              },
              required: ['ConfigurationId', 'Data']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Created: {
                  shape: 'Sn',
                  locationName: 'created'
                },
                Id: {
                  locationName: 'id'
                },
                LatestRevision: {
                  shape: 'So',
                  locationName: 'latestRevision'
                },
                Name: {
                  locationName: 'name'
                },
                Warnings: {
                  locationName: 'warnings',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                        locationName: 'attributeName'
                      },
                      ElementName: {
                        locationName: 'elementName'
                      },
                      Reason: {
                        locationName: 'reason'
                      }
                    },
                    required: ['Reason']
                  }
                }
              }
            }
          },
          UpdateUser: {
            http: {
              method: 'PUT',
              requestUri: '/v1/brokers/{broker-id}/users/{username}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BrokerId: {
                  location: 'uri',
                  locationName: 'broker-id'
                },
                ConsoleAccess: {
                  locationName: 'consoleAccess',
                  type: 'boolean'
                },
                Groups: {
                  shape: 'Sb',
                  locationName: 'groups'
                },
                Password: {
                  locationName: 'password'
                },
                Username: {
                  location: 'uri',
                  locationName: 'username'
                },
                ReplicationUser: {
                  locationName: 'replicationUser',
                  type: 'boolean'
                }
              },
              required: ['Username', 'BrokerId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              Id: {
                locationName: 'id'
              },
              Revision: {
                locationName: 'revision',
                type: 'integer'
              }
            },
            required: ['Id']
          },
          S8: {
            type: 'structure',
            members: {
              KmsKeyId: {
                locationName: 'kmsKeyId'
              },
              UseAwsOwnedKey: {
                locationName: 'useAwsOwnedKey',
                type: 'boolean'
              }
            },
            required: ['UseAwsOwnedKey']
          },
          Sa: {
            type: 'structure',
            members: {
              Hosts: {
                shape: 'Sb',
                locationName: 'hosts'
              },
              RoleBase: {
                locationName: 'roleBase'
              },
              RoleName: {
                locationName: 'roleName'
              },
              RoleSearchMatching: {
                locationName: 'roleSearchMatching'
              },
              RoleSearchSubtree: {
                locationName: 'roleSearchSubtree',
                type: 'boolean'
              },
              ServiceAccountPassword: {
                locationName: 'serviceAccountPassword'
              },
              ServiceAccountUsername: {
                locationName: 'serviceAccountUsername'
              },
              UserBase: {
                locationName: 'userBase'
              },
              UserRoleName: {
                locationName: 'userRoleName'
              },
              UserSearchMatching: {
                locationName: 'userSearchMatching'
              },
              UserSearchSubtree: {
                locationName: 'userSearchSubtree',
                type: 'boolean'
              }
            },
            required: ['Hosts', 'UserSearchMatching', 'UserBase', 'RoleSearchMatching', 'ServiceAccountUsername', 'RoleBase', 'ServiceAccountPassword']
          },
          Sb: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'structure',
            members: {
              Audit: {
                locationName: 'audit',
                type: 'boolean'
              },
              General: {
                locationName: 'general',
                type: 'boolean'
              }
            }
          },
          Sd: {
            type: 'structure',
            members: {
              DayOfWeek: {
                locationName: 'dayOfWeek'
              },
              TimeOfDay: {
                locationName: 'timeOfDay'
              },
              TimeZone: {
                locationName: 'timeZone'
              }
            },
            required: ['TimeOfDay', 'DayOfWeek']
          },
          Sg: {
            type: 'map',
            key: {},
            value: {}
          },
          Sn: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          So: {
            type: 'structure',
            members: {
              Created: {
                shape: 'Sn',
                locationName: 'created'
              },
              Description: {
                locationName: 'description'
              },
              Revision: {
                locationName: 'revision',
                type: 'integer'
              }
            },
            required: ['Revision', 'Created']
          },
          S16: {
            type: 'structure',
            members: {
              Hosts: {
                shape: 'Sb',
                locationName: 'hosts'
              },
              RoleBase: {
                locationName: 'roleBase'
              },
              RoleName: {
                locationName: 'roleName'
              },
              RoleSearchMatching: {
                locationName: 'roleSearchMatching'
              },
              RoleSearchSubtree: {
                locationName: 'roleSearchSubtree',
                type: 'boolean'
              },
              ServiceAccountUsername: {
                locationName: 'serviceAccountUsername'
              },
              UserBase: {
                locationName: 'userBase'
              },
              UserRoleName: {
                locationName: 'userRoleName'
              },
              UserSearchMatching: {
                locationName: 'userSearchMatching'
              },
              UserSearchSubtree: {
                locationName: 'userSearchSubtree',
                type: 'boolean'
              }
            },
            required: ['Hosts', 'UserSearchMatching', 'UserBase', 'RoleSearchMatching', 'ServiceAccountUsername', 'RoleBase']
          },
          S19: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PendingChange: {
                  locationName: 'pendingChange'
                },
                Username: {
                  locationName: 'username'
                }
              },
              required: ['Username']
            }
          },
          S1c: {
            type: 'structure',
            members: {
              DataReplicationCounterpart: {
                locationName: 'dataReplicationCounterpart',
                type: 'structure',
                members: {
                  BrokerId: {
                    locationName: 'brokerId'
                  },
                  Region: {
                    locationName: 'region'
                  }
                },
                required: ['BrokerId', 'Region']
              },
              DataReplicationRole: {
                locationName: 'dataReplicationRole'
              }
            },
            required: ['DataReplicationRole']
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fbd051c9a87eb79f8712e2245be1bf7ced154442.js.map