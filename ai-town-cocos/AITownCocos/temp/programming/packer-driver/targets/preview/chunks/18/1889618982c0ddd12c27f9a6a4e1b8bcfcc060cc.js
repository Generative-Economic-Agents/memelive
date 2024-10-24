System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-01-01',
          endpointPrefix: 'dms',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Database Migration Service',
          serviceId: 'Database Migration Service',
          signatureVersion: 'v4',
          targetPrefix: 'AmazonDMSv20160101',
          uid: 'dms-2016-01-01'
        },
        operations: {
          AddTagsToResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ApplyPendingMaintenanceAction: {
            input: {
              type: 'structure',
              required: ['ReplicationInstanceArn', 'ApplyAction', 'OptInType'],
              members: {
                ReplicationInstanceArn: {},
                ApplyAction: {},
                OptInType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourcePendingMaintenanceActions: {
                  shape: 'S8'
                }
              }
            }
          },
          BatchStartRecommendations: {
            input: {
              type: 'structure',
              members: {
                Data: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DatabaseId', 'Settings'],
                    members: {
                      DatabaseId: {},
                      Settings: {
                        shape: 'Sf'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ErrorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DatabaseId: {},
                      Message: {},
                      Code: {}
                    }
                  }
                }
              }
            }
          },
          CancelReplicationTaskAssessmentRun: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskAssessmentRunArn'],
              members: {
                ReplicationTaskAssessmentRunArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTaskAssessmentRun: {
                  shape: 'Sl'
                }
              }
            }
          },
          CreateDataProvider: {
            input: {
              type: 'structure',
              required: ['Engine', 'Settings'],
              members: {
                DataProviderName: {},
                Description: {},
                Engine: {},
                Settings: {
                  shape: 'Sp'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataProvider: {
                  shape: 'S13'
                }
              }
            }
          },
          CreateEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointIdentifier', 'EndpointType', 'EngineName'],
              members: {
                EndpointIdentifier: {},
                EndpointType: {},
                EngineName: {},
                Username: {},
                Password: {
                  shape: 'S17'
                },
                ServerName: {},
                Port: {
                  type: 'integer'
                },
                DatabaseName: {},
                ExtraConnectionAttributes: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'S3'
                },
                CertificateArn: {},
                SslMode: {},
                ServiceAccessRoleArn: {},
                ExternalTableDefinition: {},
                DynamoDbSettings: {
                  shape: 'S18'
                },
                S3Settings: {
                  shape: 'S19'
                },
                DmsTransferSettings: {
                  shape: 'S1j'
                },
                MongoDbSettings: {
                  shape: 'S1k'
                },
                KinesisSettings: {
                  shape: 'S1m'
                },
                KafkaSettings: {
                  shape: 'S1o'
                },
                ElasticsearchSettings: {
                  shape: 'S1s'
                },
                NeptuneSettings: {
                  shape: 'S1t'
                },
                RedshiftSettings: {
                  shape: 'S1u'
                },
                PostgreSQLSettings: {
                  shape: 'S1v'
                },
                MySQLSettings: {
                  shape: 'S1z'
                },
                OracleSettings: {
                  shape: 'S21'
                },
                SybaseSettings: {
                  shape: 'S24'
                },
                MicrosoftSQLServerSettings: {
                  shape: 'S25'
                },
                IBMDb2Settings: {
                  shape: 'S28'
                },
                ResourceIdentifier: {},
                DocDbSettings: {
                  shape: 'S29'
                },
                RedisSettings: {
                  shape: 'S2a'
                },
                GcpMySQLSettings: {
                  shape: 'S2d'
                },
                TimestreamSettings: {
                  shape: 'S2e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Endpoint: {
                  shape: 'S2g'
                }
              }
            }
          },
          CreateEventSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName', 'SnsTopicArn'],
              members: {
                SubscriptionName: {},
                SnsTopicArn: {},
                SourceType: {},
                EventCategories: {
                  shape: 'S2i'
                },
                SourceIds: {
                  shape: 'S2j'
                },
                Enabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S2l'
                }
              }
            }
          },
          CreateFleetAdvisorCollector: {
            input: {
              type: 'structure',
              required: ['CollectorName', 'ServiceAccessRoleArn', 'S3BucketName'],
              members: {
                CollectorName: {},
                Description: {},
                ServiceAccessRoleArn: {},
                S3BucketName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CollectorReferencedId: {},
                CollectorName: {},
                Description: {},
                ServiceAccessRoleArn: {},
                S3BucketName: {}
              }
            }
          },
          CreateInstanceProfile: {
            input: {
              type: 'structure',
              members: {
                AvailabilityZone: {},
                KmsKeyArn: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S3'
                },
                NetworkType: {},
                InstanceProfileName: {},
                Description: {},
                SubnetGroupIdentifier: {},
                VpcSecurityGroups: {
                  shape: 'S2q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceProfile: {
                  shape: 'S2s'
                }
              }
            }
          },
          CreateMigrationProject: {
            input: {
              type: 'structure',
              required: ['SourceDataProviderDescriptors', 'TargetDataProviderDescriptors', 'InstanceProfileIdentifier'],
              members: {
                MigrationProjectName: {},
                SourceDataProviderDescriptors: {
                  shape: 'S2u'
                },
                TargetDataProviderDescriptors: {
                  shape: 'S2u'
                },
                InstanceProfileIdentifier: {},
                TransformationRules: {},
                Description: {},
                Tags: {
                  shape: 'S3'
                },
                SchemaConversionApplicationAttributes: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MigrationProject: {
                  shape: 'S2y'
                }
              }
            }
          },
          CreateReplicationConfig: {
            input: {
              type: 'structure',
              required: ['ReplicationConfigIdentifier', 'SourceEndpointArn', 'TargetEndpointArn', 'ComputeConfig', 'ReplicationType', 'TableMappings'],
              members: {
                ReplicationConfigIdentifier: {},
                SourceEndpointArn: {},
                TargetEndpointArn: {},
                ComputeConfig: {
                  shape: 'S32'
                },
                ReplicationType: {},
                TableMappings: {},
                ReplicationSettings: {},
                SupplementalSettings: {},
                ResourceIdentifier: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationConfig: {
                  shape: 'S35'
                }
              }
            }
          },
          CreateReplicationInstance: {
            input: {
              type: 'structure',
              required: ['ReplicationInstanceIdentifier', 'ReplicationInstanceClass'],
              members: {
                ReplicationInstanceIdentifier: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                ReplicationInstanceClass: {},
                VpcSecurityGroupIds: {
                  shape: 'S37'
                },
                AvailabilityZone: {},
                ReplicationSubnetGroupIdentifier: {},
                PreferredMaintenanceWindow: {},
                MultiAZ: {
                  type: 'boolean'
                },
                EngineVersion: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S3'
                },
                KmsKeyId: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                DnsNameServers: {},
                ResourceIdentifier: {},
                NetworkType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationInstance: {
                  shape: 'S39'
                }
              }
            }
          },
          CreateReplicationSubnetGroup: {
            input: {
              type: 'structure',
              required: ['ReplicationSubnetGroupIdentifier', 'ReplicationSubnetGroupDescription', 'SubnetIds'],
              members: {
                ReplicationSubnetGroupIdentifier: {},
                ReplicationSubnetGroupDescription: {},
                SubnetIds: {
                  shape: 'S3l'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationSubnetGroup: {
                  shape: 'S3c'
                }
              }
            }
          },
          CreateReplicationTask: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskIdentifier', 'SourceEndpointArn', 'TargetEndpointArn', 'ReplicationInstanceArn', 'MigrationType', 'TableMappings'],
              members: {
                ReplicationTaskIdentifier: {},
                SourceEndpointArn: {},
                TargetEndpointArn: {},
                ReplicationInstanceArn: {},
                MigrationType: {},
                TableMappings: {},
                ReplicationTaskSettings: {},
                CdcStartTime: {
                  type: 'timestamp'
                },
                CdcStartPosition: {},
                CdcStopPosition: {},
                Tags: {
                  shape: 'S3'
                },
                TaskData: {},
                ResourceIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTask: {
                  shape: 'S3p'
                }
              }
            }
          },
          DeleteCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn'],
              members: {
                CertificateArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Certificate: {
                  shape: 'S3u'
                }
              }
            }
          },
          DeleteConnection: {
            input: {
              type: 'structure',
              required: ['EndpointArn', 'ReplicationInstanceArn'],
              members: {
                EndpointArn: {},
                ReplicationInstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S3y'
                }
              }
            }
          },
          DeleteDataProvider: {
            input: {
              type: 'structure',
              required: ['DataProviderIdentifier'],
              members: {
                DataProviderIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataProvider: {
                  shape: 'S13'
                }
              }
            }
          },
          DeleteEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Endpoint: {
                  shape: 'S2g'
                }
              }
            }
          },
          DeleteEventSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName'],
              members: {
                SubscriptionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S2l'
                }
              }
            }
          },
          DeleteFleetAdvisorCollector: {
            input: {
              type: 'structure',
              required: ['CollectorReferencedId'],
              members: {
                CollectorReferencedId: {}
              }
            }
          },
          DeleteFleetAdvisorDatabases: {
            input: {
              type: 'structure',
              required: ['DatabaseIds'],
              members: {
                DatabaseIds: {
                  shape: 'S2q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatabaseIds: {
                  shape: 'S2q'
                }
              }
            }
          },
          DeleteInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileIdentifier'],
              members: {
                InstanceProfileIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceProfile: {
                  shape: 'S2s'
                }
              }
            }
          },
          DeleteMigrationProject: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MigrationProject: {
                  shape: 'S2y'
                }
              }
            }
          },
          DeleteReplicationConfig: {
            input: {
              type: 'structure',
              required: ['ReplicationConfigArn'],
              members: {
                ReplicationConfigArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationConfig: {
                  shape: 'S35'
                }
              }
            }
          },
          DeleteReplicationInstance: {
            input: {
              type: 'structure',
              required: ['ReplicationInstanceArn'],
              members: {
                ReplicationInstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationInstance: {
                  shape: 'S39'
                }
              }
            }
          },
          DeleteReplicationSubnetGroup: {
            input: {
              type: 'structure',
              required: ['ReplicationSubnetGroupIdentifier'],
              members: {
                ReplicationSubnetGroupIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteReplicationTask: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn'],
              members: {
                ReplicationTaskArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTask: {
                  shape: 'S3p'
                }
              }
            }
          },
          DeleteReplicationTaskAssessmentRun: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskAssessmentRunArn'],
              members: {
                ReplicationTaskAssessmentRunArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTaskAssessmentRun: {
                  shape: 'Sl'
                }
              }
            }
          },
          DescribeAccountAttributes: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AccountQuotas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountQuotaName: {},
                      Used: {
                        type: 'long'
                      },
                      Max: {
                        type: 'long'
                      }
                    }
                  }
                },
                UniqueAccountIdentifier: {}
              }
            }
          },
          DescribeApplicableIndividualAssessments: {
            input: {
              type: 'structure',
              members: {
                ReplicationTaskArn: {},
                ReplicationInstanceArn: {},
                SourceEngineName: {},
                TargetEngineName: {},
                MigrationType: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IndividualAssessmentNames: {
                  type: 'list',
                  member: {}
                },
                Marker: {}
              }
            }
          },
          DescribeCertificates: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Certificates: {
                  type: 'list',
                  member: {
                    shape: 'S3u'
                  }
                }
              }
            }
          },
          DescribeConnections: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Connections: {
                  type: 'list',
                  member: {
                    shape: 'S3y'
                  }
                }
              }
            }
          },
          DescribeConversionConfiguration: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MigrationProjectIdentifier: {},
                ConversionConfiguration: {}
              }
            }
          },
          DescribeDataProviders: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                DataProviders: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                }
              }
            }
          },
          DescribeEndpointSettings: {
            input: {
              type: 'structure',
              required: ['EngineName'],
              members: {
                EngineName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                EndpointSettings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Type: {},
                      EnumValues: {
                        type: 'list',
                        member: {}
                      },
                      Sensitive: {
                        type: 'boolean'
                      },
                      Units: {},
                      Applicability: {},
                      IntValueMin: {
                        type: 'integer'
                      },
                      IntValueMax: {
                        type: 'integer'
                      },
                      DefaultValue: {}
                    }
                  }
                }
              }
            }
          },
          DescribeEndpointTypes: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                SupportedEndpointTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EngineName: {},
                      SupportsCDC: {
                        type: 'boolean'
                      },
                      EndpointType: {},
                      ReplicationInstanceEngineMinimumVersion: {},
                      EngineDisplayName: {}
                    }
                  }
                }
              }
            }
          },
          DescribeEndpoints: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Endpoints: {
                  type: 'list',
                  member: {
                    shape: 'S2g'
                  }
                }
              }
            }
          },
          DescribeEngineVersions: {
            input: {
              type: 'structure',
              members: {
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EngineVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Version: {},
                      Lifecycle: {},
                      ReleaseStatus: {},
                      LaunchDate: {
                        type: 'timestamp'
                      },
                      AutoUpgradeDate: {
                        type: 'timestamp'
                      },
                      DeprecationDate: {
                        type: 'timestamp'
                      },
                      ForceUpgradeDate: {
                        type: 'timestamp'
                      },
                      AvailableUpgrades: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeEventCategories: {
            input: {
              type: 'structure',
              members: {
                SourceType: {},
                Filters: {
                  shape: 'S4u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventCategoryGroupList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceType: {},
                      EventCategories: {
                        shape: 'S2i'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeEventSubscriptions: {
            input: {
              type: 'structure',
              members: {
                SubscriptionName: {},
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                EventSubscriptionsList: {
                  type: 'list',
                  member: {
                    shape: 'S2l'
                  }
                }
              }
            }
          },
          DescribeEvents: {
            input: {
              type: 'structure',
              members: {
                SourceIdentifier: {},
                SourceType: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Duration: {
                  type: 'integer'
                },
                EventCategories: {
                  shape: 'S2i'
                },
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceIdentifier: {},
                      SourceType: {},
                      Message: {},
                      EventCategories: {
                        shape: 'S2i'
                      },
                      Date: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeExtensionPackAssociations: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {},
                Filters: {
                  shape: 'S4u'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Requests: {
                  shape: 'S64'
                }
              }
            }
          },
          DescribeFleetAdvisorCollectors: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Collectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CollectorReferencedId: {},
                      CollectorName: {},
                      CollectorVersion: {},
                      VersionStatus: {},
                      Description: {},
                      S3BucketName: {},
                      ServiceAccessRoleArn: {},
                      CollectorHealthCheck: {
                        type: 'structure',
                        members: {
                          CollectorStatus: {},
                          LocalCollectorS3Access: {
                            type: 'boolean'
                          },
                          WebCollectorS3Access: {
                            type: 'boolean'
                          },
                          WebCollectorGrantedRoleBasedAccess: {
                            type: 'boolean'
                          }
                        }
                      },
                      LastDataReceived: {},
                      RegisteredDate: {},
                      CreatedDate: {},
                      ModifiedDate: {},
                      InventoryData: {
                        type: 'structure',
                        members: {
                          NumberOfDatabases: {
                            type: 'integer'
                          },
                          NumberOfSchemas: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleetAdvisorDatabases: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
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
                      DatabaseId: {},
                      DatabaseName: {},
                      IpAddress: {},
                      NumberOfSchemas: {
                        type: 'long'
                      },
                      Server: {
                        shape: 'S6m'
                      },
                      SoftwareDetails: {
                        type: 'structure',
                        members: {
                          Engine: {},
                          EngineVersion: {},
                          EngineEdition: {},
                          ServicePack: {},
                          SupportLevel: {},
                          OsArchitecture: {
                            type: 'integer'
                          },
                          Tooltip: {}
                        }
                      },
                      Collectors: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            CollectorReferencedId: {},
                            CollectorName: {}
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleetAdvisorLsaAnalysis: {
            input: {
              type: 'structure',
              members: {
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Analysis: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LsaAnalysisId: {},
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleetAdvisorSchemaObjectSummary: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetAdvisorSchemaObjects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SchemaId: {},
                      ObjectType: {},
                      NumberOfObjects: {
                        type: 'long'
                      },
                      CodeLineCount: {
                        type: 'long'
                      },
                      CodeSize: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleetAdvisorSchemas: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetAdvisorSchemas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CodeLineCount: {
                        type: 'long'
                      },
                      CodeSize: {
                        type: 'long'
                      },
                      Complexity: {},
                      Server: {
                        shape: 'S6m'
                      },
                      DatabaseInstance: {
                        type: 'structure',
                        members: {
                          DatabaseId: {},
                          DatabaseName: {},
                          DatabaseIpAddress: {},
                          DatabaseEngine: {}
                        }
                      },
                      SchemaId: {},
                      SchemaName: {},
                      OriginalSchema: {
                        type: 'structure',
                        members: {
                          SchemaId: {},
                          SchemaName: {},
                          DatabaseId: {},
                          DatabaseName: {},
                          DatabaseIpAddress: {}
                        }
                      },
                      Similarity: {
                        type: 'double'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInstanceProfiles: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                InstanceProfiles: {
                  type: 'list',
                  member: {
                    shape: 'S2s'
                  }
                }
              }
            }
          },
          DescribeMetadataModelAssessments: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {},
                Filters: {
                  shape: 'S4u'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Requests: {
                  shape: 'S64'
                }
              }
            }
          },
          DescribeMetadataModelConversions: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {},
                Filters: {
                  shape: 'S4u'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Requests: {
                  shape: 'S64'
                }
              }
            }
          },
          DescribeMetadataModelExportsAsScript: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {},
                Filters: {
                  shape: 'S4u'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Requests: {
                  shape: 'S64'
                }
              }
            }
          },
          DescribeMetadataModelExportsToTarget: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {},
                Filters: {
                  shape: 'S4u'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Requests: {
                  shape: 'S64'
                }
              }
            }
          },
          DescribeMetadataModelImports: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {},
                Filters: {
                  shape: 'S4u'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Requests: {
                  shape: 'S64'
                }
              }
            }
          },
          DescribeMigrationProjects: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                MigrationProjects: {
                  type: 'list',
                  member: {
                    shape: 'S2y'
                  }
                }
              }
            }
          },
          DescribeOrderableReplicationInstances: {
            input: {
              type: 'structure',
              members: {
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrderableReplicationInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EngineVersion: {},
                      ReplicationInstanceClass: {},
                      StorageType: {},
                      MinAllocatedStorage: {
                        type: 'integer'
                      },
                      MaxAllocatedStorage: {
                        type: 'integer'
                      },
                      DefaultAllocatedStorage: {
                        type: 'integer'
                      },
                      IncludedAllocatedStorage: {
                        type: 'integer'
                      },
                      AvailabilityZones: {
                        type: 'list',
                        member: {}
                      },
                      ReleaseStatus: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribePendingMaintenanceActions: {
            input: {
              type: 'structure',
              members: {
                ReplicationInstanceArn: {},
                Filters: {
                  shape: 'S4u'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PendingMaintenanceActions: {
                  type: 'list',
                  member: {
                    shape: 'S8'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeRecommendationLimitations: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Limitations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DatabaseId: {},
                      EngineName: {},
                      Name: {},
                      Description: {},
                      Impact: {},
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          DescribeRecommendations: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Recommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DatabaseId: {},
                      EngineName: {},
                      CreatedDate: {},
                      Status: {},
                      Preferred: {
                        type: 'boolean'
                      },
                      Settings: {
                        shape: 'Sf'
                      },
                      Data: {
                        type: 'structure',
                        members: {
                          RdsEngine: {
                            type: 'structure',
                            members: {
                              RequirementsToTarget: {
                                type: 'structure',
                                members: {
                                  EngineEdition: {},
                                  InstanceVcpu: {
                                    type: 'double'
                                  },
                                  InstanceMemory: {
                                    type: 'double'
                                  },
                                  StorageSize: {
                                    type: 'integer'
                                  },
                                  StorageIops: {
                                    type: 'integer'
                                  },
                                  DeploymentOption: {},
                                  EngineVersion: {}
                                }
                              },
                              TargetConfiguration: {
                                type: 'structure',
                                members: {
                                  EngineEdition: {},
                                  InstanceType: {},
                                  InstanceVcpu: {
                                    type: 'double'
                                  },
                                  InstanceMemory: {
                                    type: 'double'
                                  },
                                  StorageType: {},
                                  StorageSize: {
                                    type: 'integer'
                                  },
                                  StorageIops: {
                                    type: 'integer'
                                  },
                                  DeploymentOption: {},
                                  EngineVersion: {}
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeRefreshSchemasStatus: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RefreshSchemasStatus: {
                  shape: 'S87'
                }
              }
            }
          },
          DescribeReplicationConfigs: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                ReplicationConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S35'
                  }
                }
              }
            }
          },
          DescribeReplicationInstanceTaskLogs: {
            input: {
              type: 'structure',
              required: ['ReplicationInstanceArn'],
              members: {
                ReplicationInstanceArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationInstanceArn: {},
                ReplicationInstanceTaskLogs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReplicationTaskName: {},
                      ReplicationTaskArn: {},
                      ReplicationInstanceTaskLogSize: {
                        type: 'long'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeReplicationInstances: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                ReplicationInstances: {
                  type: 'list',
                  member: {
                    shape: 'S39'
                  }
                }
              }
            }
          },
          DescribeReplicationSubnetGroups: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                ReplicationSubnetGroups: {
                  type: 'list',
                  member: {
                    shape: 'S3c'
                  }
                }
              }
            }
          },
          DescribeReplicationTableStatistics: {
            input: {
              type: 'structure',
              required: ['ReplicationConfigArn'],
              members: {
                ReplicationConfigArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                Filters: {
                  shape: 'S4u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationConfigArn: {},
                Marker: {},
                ReplicationTableStatistics: {
                  type: 'list',
                  member: {
                    shape: 'S8p'
                  }
                }
              }
            }
          },
          DescribeReplicationTaskAssessmentResults: {
            input: {
              type: 'structure',
              members: {
                ReplicationTaskArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                BucketName: {},
                ReplicationTaskAssessmentResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReplicationTaskIdentifier: {},
                      ReplicationTaskArn: {},
                      ReplicationTaskLastAssessmentDate: {
                        type: 'timestamp'
                      },
                      AssessmentStatus: {},
                      AssessmentResultsFile: {},
                      AssessmentResults: {},
                      S3ObjectUrl: {}
                    }
                  }
                }
              }
            }
          },
          DescribeReplicationTaskAssessmentRuns: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                ReplicationTaskAssessmentRuns: {
                  type: 'list',
                  member: {
                    shape: 'Sl'
                  }
                }
              }
            }
          },
          DescribeReplicationTaskIndividualAssessments: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                ReplicationTaskIndividualAssessments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReplicationTaskIndividualAssessmentArn: {},
                      ReplicationTaskAssessmentRunArn: {},
                      IndividualAssessmentName: {},
                      Status: {},
                      ReplicationTaskIndividualAssessmentStartDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeReplicationTasks: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                WithoutSettings: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                ReplicationTasks: {
                  type: 'list',
                  member: {
                    shape: 'S3p'
                  }
                }
              }
            }
          },
          DescribeReplications: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S4u'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Replications: {
                  type: 'list',
                  member: {
                    shape: 'S97'
                  }
                }
              }
            }
          },
          DescribeSchemas: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                Schemas: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          DescribeTableStatistics: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn'],
              members: {
                ReplicationTaskArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                Filters: {
                  shape: 'S4u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTaskArn: {},
                TableStatistics: {
                  type: 'list',
                  member: {
                    shape: 'S8p'
                  }
                },
                Marker: {}
              }
            }
          },
          ExportMetadataModelAssessment: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier', 'SelectionRules'],
              members: {
                MigrationProjectIdentifier: {},
                SelectionRules: {},
                FileName: {},
                AssessmentReportTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PdfReport: {
                  shape: 'S9k'
                },
                CsvReport: {
                  shape: 'S9k'
                }
              }
            }
          },
          ImportCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateIdentifier'],
              members: {
                CertificateIdentifier: {},
                CertificatePem: {
                  shape: 'S17'
                },
                CertificateWallet: {
                  type: 'blob'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Certificate: {
                  shape: 'S3u'
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              members: {
                ResourceArn: {},
                ResourceArnList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TagList: {
                  shape: 'S3'
                }
              }
            }
          },
          ModifyConversionConfiguration: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier', 'ConversionConfiguration'],
              members: {
                MigrationProjectIdentifier: {},
                ConversionConfiguration: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MigrationProjectIdentifier: {}
              }
            }
          },
          ModifyDataProvider: {
            input: {
              type: 'structure',
              required: ['DataProviderIdentifier'],
              members: {
                DataProviderIdentifier: {},
                DataProviderName: {},
                Description: {},
                Engine: {},
                ExactSettings: {
                  type: 'boolean'
                },
                Settings: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataProvider: {
                  shape: 'S13'
                }
              }
            }
          },
          ModifyEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {},
                EndpointIdentifier: {},
                EndpointType: {},
                EngineName: {},
                Username: {},
                Password: {
                  shape: 'S17'
                },
                ServerName: {},
                Port: {
                  type: 'integer'
                },
                DatabaseName: {},
                ExtraConnectionAttributes: {},
                CertificateArn: {},
                SslMode: {},
                ServiceAccessRoleArn: {},
                ExternalTableDefinition: {},
                DynamoDbSettings: {
                  shape: 'S18'
                },
                S3Settings: {
                  shape: 'S19'
                },
                DmsTransferSettings: {
                  shape: 'S1j'
                },
                MongoDbSettings: {
                  shape: 'S1k'
                },
                KinesisSettings: {
                  shape: 'S1m'
                },
                KafkaSettings: {
                  shape: 'S1o'
                },
                ElasticsearchSettings: {
                  shape: 'S1s'
                },
                NeptuneSettings: {
                  shape: 'S1t'
                },
                RedshiftSettings: {
                  shape: 'S1u'
                },
                PostgreSQLSettings: {
                  shape: 'S1v'
                },
                MySQLSettings: {
                  shape: 'S1z'
                },
                OracleSettings: {
                  shape: 'S21'
                },
                SybaseSettings: {
                  shape: 'S24'
                },
                MicrosoftSQLServerSettings: {
                  shape: 'S25'
                },
                IBMDb2Settings: {
                  shape: 'S28'
                },
                DocDbSettings: {
                  shape: 'S29'
                },
                RedisSettings: {
                  shape: 'S2a'
                },
                ExactSettings: {
                  type: 'boolean'
                },
                GcpMySQLSettings: {
                  shape: 'S2d'
                },
                TimestreamSettings: {
                  shape: 'S2e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Endpoint: {
                  shape: 'S2g'
                }
              }
            }
          },
          ModifyEventSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName'],
              members: {
                SubscriptionName: {},
                SnsTopicArn: {},
                SourceType: {},
                EventCategories: {
                  shape: 'S2i'
                },
                Enabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S2l'
                }
              }
            }
          },
          ModifyInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileIdentifier'],
              members: {
                InstanceProfileIdentifier: {},
                AvailabilityZone: {},
                KmsKeyArn: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                NetworkType: {},
                InstanceProfileName: {},
                Description: {},
                SubnetGroupIdentifier: {},
                VpcSecurityGroups: {
                  shape: 'S2q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceProfile: {
                  shape: 'S2s'
                }
              }
            }
          },
          ModifyMigrationProject: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {},
                MigrationProjectName: {},
                SourceDataProviderDescriptors: {
                  shape: 'S2u'
                },
                TargetDataProviderDescriptors: {
                  shape: 'S2u'
                },
                InstanceProfileIdentifier: {},
                TransformationRules: {},
                Description: {},
                SchemaConversionApplicationAttributes: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MigrationProject: {
                  shape: 'S2y'
                }
              }
            }
          },
          ModifyReplicationConfig: {
            input: {
              type: 'structure',
              required: ['ReplicationConfigArn'],
              members: {
                ReplicationConfigArn: {},
                ReplicationConfigIdentifier: {},
                ReplicationType: {},
                TableMappings: {},
                ReplicationSettings: {},
                SupplementalSettings: {},
                ComputeConfig: {
                  shape: 'S32'
                },
                SourceEndpointArn: {},
                TargetEndpointArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationConfig: {
                  shape: 'S35'
                }
              }
            }
          },
          ModifyReplicationInstance: {
            input: {
              type: 'structure',
              required: ['ReplicationInstanceArn'],
              members: {
                ReplicationInstanceArn: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                ApplyImmediately: {
                  type: 'boolean'
                },
                ReplicationInstanceClass: {},
                VpcSecurityGroupIds: {
                  shape: 'S37'
                },
                PreferredMaintenanceWindow: {},
                MultiAZ: {
                  type: 'boolean'
                },
                EngineVersion: {},
                AllowMajorVersionUpgrade: {
                  type: 'boolean'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                ReplicationInstanceIdentifier: {},
                NetworkType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationInstance: {
                  shape: 'S39'
                }
              }
            }
          },
          ModifyReplicationSubnetGroup: {
            input: {
              type: 'structure',
              required: ['ReplicationSubnetGroupIdentifier', 'SubnetIds'],
              members: {
                ReplicationSubnetGroupIdentifier: {},
                ReplicationSubnetGroupDescription: {},
                SubnetIds: {
                  shape: 'S3l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationSubnetGroup: {
                  shape: 'S3c'
                }
              }
            }
          },
          ModifyReplicationTask: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn'],
              members: {
                ReplicationTaskArn: {},
                ReplicationTaskIdentifier: {},
                MigrationType: {},
                TableMappings: {},
                ReplicationTaskSettings: {},
                CdcStartTime: {
                  type: 'timestamp'
                },
                CdcStartPosition: {},
                CdcStopPosition: {},
                TaskData: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTask: {
                  shape: 'S3p'
                }
              }
            }
          },
          MoveReplicationTask: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn', 'TargetReplicationInstanceArn'],
              members: {
                ReplicationTaskArn: {},
                TargetReplicationInstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTask: {
                  shape: 'S3p'
                }
              }
            }
          },
          RebootReplicationInstance: {
            input: {
              type: 'structure',
              required: ['ReplicationInstanceArn'],
              members: {
                ReplicationInstanceArn: {},
                ForceFailover: {
                  type: 'boolean'
                },
                ForcePlannedFailover: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationInstance: {
                  shape: 'S39'
                }
              }
            }
          },
          RefreshSchemas: {
            input: {
              type: 'structure',
              required: ['EndpointArn', 'ReplicationInstanceArn'],
              members: {
                EndpointArn: {},
                ReplicationInstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RefreshSchemasStatus: {
                  shape: 'S87'
                }
              }
            }
          },
          ReloadReplicationTables: {
            input: {
              type: 'structure',
              required: ['ReplicationConfigArn', 'TablesToReload'],
              members: {
                ReplicationConfigArn: {},
                TablesToReload: {
                  shape: 'Sah'
                },
                ReloadOption: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationConfigArn: {}
              }
            }
          },
          ReloadTables: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn', 'TablesToReload'],
              members: {
                ReplicationTaskArn: {},
                TablesToReload: {
                  shape: 'Sah'
                },
                ReloadOption: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTaskArn: {}
              }
            }
          },
          RemoveTagsFromResource: {
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
          RunFleetAdvisorLsaAnalysis: {
            output: {
              type: 'structure',
              members: {
                LsaAnalysisId: {},
                Status: {}
              }
            }
          },
          StartExtensionPackAssociation: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier'],
              members: {
                MigrationProjectIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestIdentifier: {}
              }
            }
          },
          StartMetadataModelAssessment: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier', 'SelectionRules'],
              members: {
                MigrationProjectIdentifier: {},
                SelectionRules: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestIdentifier: {}
              }
            }
          },
          StartMetadataModelConversion: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier', 'SelectionRules'],
              members: {
                MigrationProjectIdentifier: {},
                SelectionRules: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestIdentifier: {}
              }
            }
          },
          StartMetadataModelExportAsScript: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier', 'SelectionRules', 'Origin'],
              members: {
                MigrationProjectIdentifier: {},
                SelectionRules: {},
                Origin: {},
                FileName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestIdentifier: {}
              }
            }
          },
          StartMetadataModelExportToTarget: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier', 'SelectionRules'],
              members: {
                MigrationProjectIdentifier: {},
                SelectionRules: {},
                OverwriteExtensionPack: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestIdentifier: {}
              }
            }
          },
          StartMetadataModelImport: {
            input: {
              type: 'structure',
              required: ['MigrationProjectIdentifier', 'SelectionRules', 'Origin'],
              members: {
                MigrationProjectIdentifier: {},
                SelectionRules: {},
                Origin: {},
                Refresh: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestIdentifier: {}
              }
            }
          },
          StartRecommendations: {
            input: {
              type: 'structure',
              required: ['DatabaseId', 'Settings'],
              members: {
                DatabaseId: {},
                Settings: {
                  shape: 'Sf'
                }
              }
            }
          },
          StartReplication: {
            input: {
              type: 'structure',
              required: ['ReplicationConfigArn', 'StartReplicationType'],
              members: {
                ReplicationConfigArn: {},
                StartReplicationType: {},
                CdcStartTime: {
                  type: 'timestamp'
                },
                CdcStartPosition: {},
                CdcStopPosition: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Replication: {
                  shape: 'S97'
                }
              }
            }
          },
          StartReplicationTask: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn', 'StartReplicationTaskType'],
              members: {
                ReplicationTaskArn: {},
                StartReplicationTaskType: {},
                CdcStartTime: {
                  type: 'timestamp'
                },
                CdcStartPosition: {},
                CdcStopPosition: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTask: {
                  shape: 'S3p'
                }
              }
            }
          },
          StartReplicationTaskAssessment: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn'],
              members: {
                ReplicationTaskArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTask: {
                  shape: 'S3p'
                }
              }
            }
          },
          StartReplicationTaskAssessmentRun: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn', 'ServiceAccessRoleArn', 'ResultLocationBucket', 'AssessmentRunName'],
              members: {
                ReplicationTaskArn: {},
                ServiceAccessRoleArn: {},
                ResultLocationBucket: {},
                ResultLocationFolder: {},
                ResultEncryptionMode: {},
                ResultKmsKeyArn: {},
                AssessmentRunName: {},
                IncludeOnly: {
                  type: 'list',
                  member: {}
                },
                Exclude: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTaskAssessmentRun: {
                  shape: 'Sl'
                }
              }
            }
          },
          StopReplication: {
            input: {
              type: 'structure',
              required: ['ReplicationConfigArn'],
              members: {
                ReplicationConfigArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Replication: {
                  shape: 'S97'
                }
              }
            }
          },
          StopReplicationTask: {
            input: {
              type: 'structure',
              required: ['ReplicationTaskArn'],
              members: {
                ReplicationTaskArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationTask: {
                  shape: 'S3p'
                }
              }
            }
          },
          TestConnection: {
            input: {
              type: 'structure',
              required: ['ReplicationInstanceArn', 'EndpointArn'],
              members: {
                ReplicationInstanceArn: {},
                EndpointArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S3y'
                }
              }
            }
          },
          UpdateSubscriptionsToEventBridge: {
            input: {
              type: 'structure',
              members: {
                ForceMove: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Result: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {},
                ResourceArn: {}
              }
            }
          },
          S8: {
            type: 'structure',
            members: {
              ResourceIdentifier: {},
              PendingMaintenanceActionDetails: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Action: {},
                    AutoAppliedAfterDate: {
                      type: 'timestamp'
                    },
                    ForcedApplyDate: {
                      type: 'timestamp'
                    },
                    OptInStatus: {},
                    CurrentApplyDate: {
                      type: 'timestamp'
                    },
                    Description: {}
                  }
                }
              }
            }
          },
          Sf: {
            type: 'structure',
            required: ['InstanceSizingType', 'WorkloadType'],
            members: {
              InstanceSizingType: {},
              WorkloadType: {}
            }
          },
          Sl: {
            type: 'structure',
            members: {
              ReplicationTaskAssessmentRunArn: {},
              ReplicationTaskArn: {},
              Status: {},
              ReplicationTaskAssessmentRunCreationDate: {
                type: 'timestamp'
              },
              AssessmentProgress: {
                type: 'structure',
                members: {
                  IndividualAssessmentCount: {
                    type: 'integer'
                  },
                  IndividualAssessmentCompletedCount: {
                    type: 'integer'
                  }
                }
              },
              LastFailureMessage: {},
              ServiceAccessRoleArn: {},
              ResultLocationBucket: {},
              ResultLocationFolder: {},
              ResultEncryptionMode: {},
              ResultKmsKeyArn: {},
              AssessmentRunName: {}
            }
          },
          Sp: {
            type: 'structure',
            members: {
              RedshiftSettings: {
                type: 'structure',
                members: {
                  ServerName: {},
                  Port: {
                    type: 'integer'
                  },
                  DatabaseName: {}
                }
              },
              PostgreSqlSettings: {
                type: 'structure',
                members: {
                  ServerName: {},
                  Port: {
                    type: 'integer'
                  },
                  DatabaseName: {},
                  SslMode: {},
                  CertificateArn: {}
                }
              },
              MySqlSettings: {
                type: 'structure',
                members: {
                  ServerName: {},
                  Port: {
                    type: 'integer'
                  },
                  SslMode: {},
                  CertificateArn: {}
                }
              },
              OracleSettings: {
                type: 'structure',
                members: {
                  ServerName: {},
                  Port: {
                    type: 'integer'
                  },
                  DatabaseName: {},
                  SslMode: {},
                  CertificateArn: {},
                  AsmServer: {},
                  SecretsManagerOracleAsmSecretId: {},
                  SecretsManagerOracleAsmAccessRoleArn: {},
                  SecretsManagerSecurityDbEncryptionSecretId: {},
                  SecretsManagerSecurityDbEncryptionAccessRoleArn: {}
                }
              },
              MicrosoftSqlServerSettings: {
                type: 'structure',
                members: {
                  ServerName: {},
                  Port: {
                    type: 'integer'
                  },
                  DatabaseName: {},
                  SslMode: {},
                  CertificateArn: {}
                }
              },
              DocDbSettings: {
                type: 'structure',
                members: {
                  ServerName: {},
                  Port: {
                    type: 'integer'
                  },
                  DatabaseName: {},
                  SslMode: {},
                  CertificateArn: {}
                }
              },
              MariaDbSettings: {
                type: 'structure',
                members: {
                  ServerName: {},
                  Port: {
                    type: 'integer'
                  },
                  SslMode: {},
                  CertificateArn: {}
                }
              },
              MongoDbSettings: {
                type: 'structure',
                members: {
                  ServerName: {},
                  Port: {
                    type: 'integer'
                  },
                  DatabaseName: {},
                  SslMode: {},
                  CertificateArn: {},
                  AuthType: {},
                  AuthSource: {},
                  AuthMechanism: {}
                }
              }
            },
            union: true
          },
          S13: {
            type: 'structure',
            members: {
              DataProviderName: {},
              DataProviderArn: {},
              DataProviderCreationTime: {
                shape: 'S14'
              },
              Description: {},
              Engine: {},
              Settings: {
                shape: 'Sp'
              }
            }
          },
          S14: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S17: {
            type: 'string',
            sensitive: true
          },
          S18: {
            type: 'structure',
            required: ['ServiceAccessRoleArn'],
            members: {
              ServiceAccessRoleArn: {}
            }
          },
          S19: {
            type: 'structure',
            members: {
              ServiceAccessRoleArn: {},
              ExternalTableDefinition: {},
              CsvRowDelimiter: {},
              CsvDelimiter: {},
              BucketFolder: {},
              BucketName: {},
              CompressionType: {},
              EncryptionMode: {},
              ServerSideEncryptionKmsKeyId: {},
              DataFormat: {},
              EncodingType: {},
              DictPageSizeLimit: {
                type: 'integer'
              },
              RowGroupLength: {
                type: 'integer'
              },
              DataPageSize: {
                type: 'integer'
              },
              ParquetVersion: {},
              EnableStatistics: {
                type: 'boolean'
              },
              IncludeOpForFullLoad: {
                type: 'boolean'
              },
              CdcInsertsOnly: {
                type: 'boolean'
              },
              TimestampColumnName: {},
              ParquetTimestampInMillisecond: {
                type: 'boolean'
              },
              CdcInsertsAndUpdates: {
                type: 'boolean'
              },
              DatePartitionEnabled: {
                type: 'boolean'
              },
              DatePartitionSequence: {},
              DatePartitionDelimiter: {},
              UseCsvNoSupValue: {
                type: 'boolean'
              },
              CsvNoSupValue: {},
              PreserveTransactions: {
                type: 'boolean'
              },
              CdcPath: {},
              UseTaskStartTimeForFullLoadTimestamp: {
                type: 'boolean'
              },
              CannedAclForObjects: {},
              AddColumnName: {
                type: 'boolean'
              },
              CdcMaxBatchInterval: {
                type: 'integer'
              },
              CdcMinFileSize: {
                type: 'integer'
              },
              CsvNullValue: {},
              IgnoreHeaderRows: {
                type: 'integer'
              },
              MaxFileSize: {
                type: 'integer'
              },
              Rfc4180: {
                type: 'boolean'
              },
              DatePartitionTimezone: {},
              AddTrailingPaddingCharacter: {
                type: 'boolean'
              },
              ExpectedBucketOwner: {},
              GlueCatalogGeneration: {
                type: 'boolean'
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              ServiceAccessRoleArn: {},
              BucketName: {}
            }
          },
          S1k: {
            type: 'structure',
            members: {
              Username: {},
              Password: {
                shape: 'S17'
              },
              ServerName: {},
              Port: {
                type: 'integer'
              },
              DatabaseName: {},
              AuthType: {},
              AuthMechanism: {},
              NestingLevel: {},
              ExtractDocId: {},
              DocsToInvestigate: {},
              AuthSource: {},
              KmsKeyId: {},
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {},
              UseUpdateLookUp: {
                type: 'boolean'
              },
              ReplicateShardCollections: {
                type: 'boolean'
              }
            }
          },
          S1m: {
            type: 'structure',
            members: {
              StreamArn: {},
              MessageFormat: {},
              ServiceAccessRoleArn: {},
              IncludeTransactionDetails: {
                type: 'boolean'
              },
              IncludePartitionValue: {
                type: 'boolean'
              },
              PartitionIncludeSchemaTable: {
                type: 'boolean'
              },
              IncludeTableAlterOperations: {
                type: 'boolean'
              },
              IncludeControlDetails: {
                type: 'boolean'
              },
              IncludeNullAndEmpty: {
                type: 'boolean'
              },
              NoHexPrefix: {
                type: 'boolean'
              }
            }
          },
          S1o: {
            type: 'structure',
            members: {
              Broker: {},
              Topic: {},
              MessageFormat: {},
              IncludeTransactionDetails: {
                type: 'boolean'
              },
              IncludePartitionValue: {
                type: 'boolean'
              },
              PartitionIncludeSchemaTable: {
                type: 'boolean'
              },
              IncludeTableAlterOperations: {
                type: 'boolean'
              },
              IncludeControlDetails: {
                type: 'boolean'
              },
              MessageMaxBytes: {
                type: 'integer'
              },
              IncludeNullAndEmpty: {
                type: 'boolean'
              },
              SecurityProtocol: {},
              SslClientCertificateArn: {},
              SslClientKeyArn: {},
              SslClientKeyPassword: {
                shape: 'S17'
              },
              SslCaCertificateArn: {},
              SaslUsername: {},
              SaslPassword: {
                shape: 'S17'
              },
              NoHexPrefix: {
                type: 'boolean'
              },
              SaslMechanism: {},
              SslEndpointIdentificationAlgorithm: {}
            }
          },
          S1s: {
            type: 'structure',
            required: ['ServiceAccessRoleArn', 'EndpointUri'],
            members: {
              ServiceAccessRoleArn: {},
              EndpointUri: {},
              FullLoadErrorPercentage: {
                type: 'integer'
              },
              ErrorRetryDuration: {
                type: 'integer'
              },
              UseNewMappingType: {
                type: 'boolean'
              }
            }
          },
          S1t: {
            type: 'structure',
            required: ['S3BucketName', 'S3BucketFolder'],
            members: {
              ServiceAccessRoleArn: {},
              S3BucketName: {},
              S3BucketFolder: {},
              ErrorRetryDuration: {
                type: 'integer'
              },
              MaxFileSize: {
                type: 'integer'
              },
              MaxRetryCount: {
                type: 'integer'
              },
              IamAuthEnabled: {
                type: 'boolean'
              }
            }
          },
          S1u: {
            type: 'structure',
            members: {
              AcceptAnyDate: {
                type: 'boolean'
              },
              AfterConnectScript: {},
              BucketFolder: {},
              BucketName: {},
              CaseSensitiveNames: {
                type: 'boolean'
              },
              CompUpdate: {
                type: 'boolean'
              },
              ConnectionTimeout: {
                type: 'integer'
              },
              DatabaseName: {},
              DateFormat: {},
              EmptyAsNull: {
                type: 'boolean'
              },
              EncryptionMode: {},
              ExplicitIds: {
                type: 'boolean'
              },
              FileTransferUploadStreams: {
                type: 'integer'
              },
              LoadTimeout: {
                type: 'integer'
              },
              MaxFileSize: {
                type: 'integer'
              },
              Password: {
                shape: 'S17'
              },
              Port: {
                type: 'integer'
              },
              RemoveQuotes: {
                type: 'boolean'
              },
              ReplaceInvalidChars: {},
              ReplaceChars: {},
              ServerName: {},
              ServiceAccessRoleArn: {},
              ServerSideEncryptionKmsKeyId: {},
              TimeFormat: {},
              TrimBlanks: {
                type: 'boolean'
              },
              TruncateColumns: {
                type: 'boolean'
              },
              Username: {},
              WriteBufferSize: {
                type: 'integer'
              },
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {},
              MapBooleanAsBoolean: {
                type: 'boolean'
              }
            }
          },
          S1v: {
            type: 'structure',
            members: {
              AfterConnectScript: {},
              CaptureDdls: {
                type: 'boolean'
              },
              MaxFileSize: {
                type: 'integer'
              },
              DatabaseName: {},
              DdlArtifactsSchema: {},
              ExecuteTimeout: {
                type: 'integer'
              },
              FailTasksOnLobTruncation: {
                type: 'boolean'
              },
              HeartbeatEnable: {
                type: 'boolean'
              },
              HeartbeatSchema: {},
              HeartbeatFrequency: {
                type: 'integer'
              },
              Password: {
                shape: 'S17'
              },
              Port: {
                type: 'integer'
              },
              ServerName: {},
              Username: {},
              SlotName: {},
              PluginName: {},
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {},
              TrimSpaceInChar: {
                type: 'boolean'
              },
              MapBooleanAsBoolean: {
                type: 'boolean'
              },
              MapJsonbAsClob: {
                type: 'boolean'
              },
              MapLongVarcharAs: {},
              DatabaseMode: {},
              BabelfishDatabaseName: {}
            }
          },
          S1z: {
            type: 'structure',
            members: {
              AfterConnectScript: {},
              CleanSourceMetadataOnMismatch: {
                type: 'boolean'
              },
              DatabaseName: {},
              EventsPollInterval: {
                type: 'integer'
              },
              TargetDbType: {},
              MaxFileSize: {
                type: 'integer'
              },
              ParallelLoadThreads: {
                type: 'integer'
              },
              Password: {
                shape: 'S17'
              },
              Port: {
                type: 'integer'
              },
              ServerName: {},
              ServerTimezone: {},
              Username: {},
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {},
              ExecuteTimeout: {
                type: 'integer'
              }
            }
          },
          S21: {
            type: 'structure',
            members: {
              AddSupplementalLogging: {
                type: 'boolean'
              },
              ArchivedLogDestId: {
                type: 'integer'
              },
              AdditionalArchivedLogDestId: {
                type: 'integer'
              },
              ExtraArchivedLogDestIds: {
                type: 'list',
                member: {
                  type: 'integer'
                }
              },
              AllowSelectNestedTables: {
                type: 'boolean'
              },
              ParallelAsmReadThreads: {
                type: 'integer'
              },
              ReadAheadBlocks: {
                type: 'integer'
              },
              AccessAlternateDirectly: {
                type: 'boolean'
              },
              UseAlternateFolderForOnline: {
                type: 'boolean'
              },
              OraclePathPrefix: {},
              UsePathPrefix: {},
              ReplacePathPrefix: {
                type: 'boolean'
              },
              EnableHomogenousTablespace: {
                type: 'boolean'
              },
              DirectPathNoLog: {
                type: 'boolean'
              },
              ArchivedLogsOnly: {
                type: 'boolean'
              },
              AsmPassword: {
                shape: 'S17'
              },
              AsmServer: {},
              AsmUser: {},
              CharLengthSemantics: {},
              DatabaseName: {},
              DirectPathParallelLoad: {
                type: 'boolean'
              },
              FailTasksOnLobTruncation: {
                type: 'boolean'
              },
              NumberDatatypeScale: {
                type: 'integer'
              },
              Password: {
                shape: 'S17'
              },
              Port: {
                type: 'integer'
              },
              ReadTableSpaceName: {
                type: 'boolean'
              },
              RetryInterval: {
                type: 'integer'
              },
              SecurityDbEncryption: {
                shape: 'S17'
              },
              SecurityDbEncryptionName: {},
              ServerName: {},
              SpatialDataOptionToGeoJsonFunctionName: {},
              StandbyDelayTime: {
                type: 'integer'
              },
              Username: {},
              UseBFile: {
                type: 'boolean'
              },
              UseDirectPathFullLoad: {
                type: 'boolean'
              },
              UseLogminerReader: {
                type: 'boolean'
              },
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {},
              SecretsManagerOracleAsmAccessRoleArn: {},
              SecretsManagerOracleAsmSecretId: {},
              TrimSpaceInChar: {
                type: 'boolean'
              },
              ConvertTimestampWithZoneToUTC: {
                type: 'boolean'
              },
              OpenTransactionWindow: {
                type: 'integer'
              }
            }
          },
          S24: {
            type: 'structure',
            members: {
              DatabaseName: {},
              Password: {
                shape: 'S17'
              },
              Port: {
                type: 'integer'
              },
              ServerName: {},
              Username: {},
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {}
            }
          },
          S25: {
            type: 'structure',
            members: {
              Port: {
                type: 'integer'
              },
              BcpPacketSize: {
                type: 'integer'
              },
              DatabaseName: {},
              ControlTablesFileGroup: {},
              Password: {
                shape: 'S17'
              },
              QuerySingleAlwaysOnNode: {
                type: 'boolean'
              },
              ReadBackupOnly: {
                type: 'boolean'
              },
              SafeguardPolicy: {},
              ServerName: {},
              Username: {},
              UseBcpFullLoad: {
                type: 'boolean'
              },
              UseThirdPartyBackupDevice: {
                type: 'boolean'
              },
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {},
              TrimSpaceInChar: {
                type: 'boolean'
              },
              TlogAccessMode: {},
              ForceLobLookup: {
                type: 'boolean'
              }
            }
          },
          S28: {
            type: 'structure',
            members: {
              DatabaseName: {},
              Password: {
                shape: 'S17'
              },
              Port: {
                type: 'integer'
              },
              ServerName: {},
              SetDataCaptureChanges: {
                type: 'boolean'
              },
              CurrentLsn: {},
              MaxKBytesPerRead: {
                type: 'integer'
              },
              Username: {},
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {},
              LoadTimeout: {
                type: 'integer'
              },
              WriteBufferSize: {
                type: 'integer'
              },
              MaxFileSize: {
                type: 'integer'
              },
              KeepCsvFiles: {
                type: 'boolean'
              }
            }
          },
          S29: {
            type: 'structure',
            members: {
              Username: {},
              Password: {
                shape: 'S17'
              },
              ServerName: {},
              Port: {
                type: 'integer'
              },
              DatabaseName: {},
              NestingLevel: {},
              ExtractDocId: {
                type: 'boolean'
              },
              DocsToInvestigate: {
                type: 'integer'
              },
              KmsKeyId: {},
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {},
              UseUpdateLookUp: {
                type: 'boolean'
              },
              ReplicateShardCollections: {
                type: 'boolean'
              }
            }
          },
          S2a: {
            type: 'structure',
            required: ['ServerName', 'Port'],
            members: {
              ServerName: {},
              Port: {
                type: 'integer'
              },
              SslSecurityProtocol: {},
              AuthType: {},
              AuthUserName: {},
              AuthPassword: {
                shape: 'S17'
              },
              SslCaCertificateArn: {}
            }
          },
          S2d: {
            type: 'structure',
            members: {
              AfterConnectScript: {},
              CleanSourceMetadataOnMismatch: {
                type: 'boolean'
              },
              DatabaseName: {},
              EventsPollInterval: {
                type: 'integer'
              },
              TargetDbType: {},
              MaxFileSize: {
                type: 'integer'
              },
              ParallelLoadThreads: {
                type: 'integer'
              },
              Password: {
                shape: 'S17'
              },
              Port: {
                type: 'integer'
              },
              ServerName: {},
              ServerTimezone: {},
              Username: {},
              SecretsManagerAccessRoleArn: {},
              SecretsManagerSecretId: {}
            }
          },
          S2e: {
            type: 'structure',
            required: ['DatabaseName', 'MemoryDuration', 'MagneticDuration'],
            members: {
              DatabaseName: {},
              MemoryDuration: {
                type: 'integer'
              },
              MagneticDuration: {
                type: 'integer'
              },
              CdcInsertsAndUpdates: {
                type: 'boolean'
              },
              EnableMagneticStoreWrites: {
                type: 'boolean'
              }
            }
          },
          S2g: {
            type: 'structure',
            members: {
              EndpointIdentifier: {},
              EndpointType: {},
              EngineName: {},
              EngineDisplayName: {},
              Username: {},
              ServerName: {},
              Port: {
                type: 'integer'
              },
              DatabaseName: {},
              ExtraConnectionAttributes: {},
              Status: {},
              KmsKeyId: {},
              EndpointArn: {},
              CertificateArn: {},
              SslMode: {},
              ServiceAccessRoleArn: {},
              ExternalTableDefinition: {},
              ExternalId: {},
              DynamoDbSettings: {
                shape: 'S18'
              },
              S3Settings: {
                shape: 'S19'
              },
              DmsTransferSettings: {
                shape: 'S1j'
              },
              MongoDbSettings: {
                shape: 'S1k'
              },
              KinesisSettings: {
                shape: 'S1m'
              },
              KafkaSettings: {
                shape: 'S1o'
              },
              ElasticsearchSettings: {
                shape: 'S1s'
              },
              NeptuneSettings: {
                shape: 'S1t'
              },
              RedshiftSettings: {
                shape: 'S1u'
              },
              PostgreSQLSettings: {
                shape: 'S1v'
              },
              MySQLSettings: {
                shape: 'S1z'
              },
              OracleSettings: {
                shape: 'S21'
              },
              SybaseSettings: {
                shape: 'S24'
              },
              MicrosoftSQLServerSettings: {
                shape: 'S25'
              },
              IBMDb2Settings: {
                shape: 'S28'
              },
              DocDbSettings: {
                shape: 'S29'
              },
              RedisSettings: {
                shape: 'S2a'
              },
              GcpMySQLSettings: {
                shape: 'S2d'
              },
              TimestreamSettings: {
                shape: 'S2e'
              }
            }
          },
          S2i: {
            type: 'list',
            member: {}
          },
          S2j: {
            type: 'list',
            member: {}
          },
          S2l: {
            type: 'structure',
            members: {
              CustomerAwsId: {},
              CustSubscriptionId: {},
              SnsTopicArn: {},
              Status: {},
              SubscriptionCreationTime: {},
              SourceType: {},
              SourceIdsList: {
                shape: 'S2j'
              },
              EventCategoriesList: {
                shape: 'S2i'
              },
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S2q: {
            type: 'list',
            member: {}
          },
          S2s: {
            type: 'structure',
            members: {
              InstanceProfileArn: {},
              AvailabilityZone: {},
              KmsKeyArn: {},
              PubliclyAccessible: {
                type: 'boolean'
              },
              NetworkType: {},
              InstanceProfileName: {},
              Description: {},
              InstanceProfileCreationTime: {
                shape: 'S14'
              },
              SubnetGroupIdentifier: {},
              VpcSecurityGroups: {
                shape: 'S2q'
              }
            }
          },
          S2u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DataProviderIdentifier'],
              members: {
                DataProviderIdentifier: {},
                SecretsManagerSecretId: {},
                SecretsManagerAccessRoleArn: {}
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              S3BucketPath: {},
              S3BucketRoleArn: {}
            }
          },
          S2y: {
            type: 'structure',
            members: {
              MigrationProjectName: {},
              MigrationProjectArn: {},
              MigrationProjectCreationTime: {
                shape: 'S14'
              },
              SourceDataProviderDescriptors: {
                shape: 'S2z'
              },
              TargetDataProviderDescriptors: {
                shape: 'S2z'
              },
              InstanceProfileArn: {},
              InstanceProfileName: {},
              TransformationRules: {},
              Description: {},
              SchemaConversionApplicationAttributes: {
                shape: 'S2w'
              }
            }
          },
          S2z: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SecretsManagerSecretId: {},
                SecretsManagerAccessRoleArn: {},
                DataProviderName: {},
                DataProviderArn: {}
              }
            }
          },
          S32: {
            type: 'structure',
            members: {
              AvailabilityZone: {},
              DnsNameServers: {},
              KmsKeyId: {},
              MaxCapacityUnits: {
                type: 'integer'
              },
              MinCapacityUnits: {
                type: 'integer'
              },
              MultiAZ: {
                type: 'boolean'
              },
              PreferredMaintenanceWindow: {},
              ReplicationSubnetGroupId: {},
              VpcSecurityGroupIds: {
                shape: 'S2q'
              }
            }
          },
          S35: {
            type: 'structure',
            members: {
              ReplicationConfigIdentifier: {},
              ReplicationConfigArn: {},
              SourceEndpointArn: {},
              TargetEndpointArn: {},
              ReplicationType: {},
              ComputeConfig: {
                shape: 'S32'
              },
              ReplicationSettings: {},
              SupplementalSettings: {},
              TableMappings: {},
              ReplicationConfigCreateTime: {
                type: 'timestamp'
              },
              ReplicationConfigUpdateTime: {
                type: 'timestamp'
              }
            }
          },
          S37: {
            type: 'list',
            member: {}
          },
          S39: {
            type: 'structure',
            members: {
              ReplicationInstanceIdentifier: {},
              ReplicationInstanceClass: {},
              ReplicationInstanceStatus: {},
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              VpcSecurityGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {},
                    Status: {}
                  }
                }
              },
              AvailabilityZone: {},
              ReplicationSubnetGroup: {
                shape: 'S3c'
              },
              PreferredMaintenanceWindow: {},
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  ReplicationInstanceClass: {},
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {},
                  NetworkType: {}
                }
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {},
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              KmsKeyId: {},
              ReplicationInstanceArn: {},
              ReplicationInstancePublicIpAddress: {
                deprecated: true
              },
              ReplicationInstancePrivateIpAddress: {
                deprecated: true
              },
              ReplicationInstancePublicIpAddresses: {
                type: 'list',
                member: {}
              },
              ReplicationInstancePrivateIpAddresses: {
                type: 'list',
                member: {}
              },
              ReplicationInstanceIpv6Addresses: {
                type: 'list',
                member: {}
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              SecondaryAvailabilityZone: {},
              FreeUntil: {
                type: 'timestamp'
              },
              DnsNameServers: {},
              NetworkType: {}
            }
          },
          S3c: {
            type: 'structure',
            members: {
              ReplicationSubnetGroupIdentifier: {},
              ReplicationSubnetGroupDescription: {},
              VpcId: {},
              SubnetGroupStatus: {},
              Subnets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {},
                    SubnetAvailabilityZone: {
                      type: 'structure',
                      members: {
                        Name: {}
                      }
                    },
                    SubnetStatus: {}
                  }
                }
              },
              SupportedNetworkTypes: {
                shape: 'S2q'
              }
            }
          },
          S3l: {
            type: 'list',
            member: {}
          },
          S3p: {
            type: 'structure',
            members: {
              ReplicationTaskIdentifier: {},
              SourceEndpointArn: {},
              TargetEndpointArn: {},
              ReplicationInstanceArn: {},
              MigrationType: {},
              TableMappings: {},
              ReplicationTaskSettings: {},
              Status: {},
              LastFailureMessage: {},
              StopReason: {},
              ReplicationTaskCreationDate: {
                type: 'timestamp'
              },
              ReplicationTaskStartDate: {
                type: 'timestamp'
              },
              CdcStartPosition: {},
              CdcStopPosition: {},
              RecoveryCheckpoint: {},
              ReplicationTaskArn: {},
              ReplicationTaskStats: {
                type: 'structure',
                members: {
                  FullLoadProgressPercent: {
                    type: 'integer'
                  },
                  ElapsedTimeMillis: {
                    type: 'long'
                  },
                  TablesLoaded: {
                    type: 'integer'
                  },
                  TablesLoading: {
                    type: 'integer'
                  },
                  TablesQueued: {
                    type: 'integer'
                  },
                  TablesErrored: {
                    type: 'integer'
                  },
                  FreshStartDate: {
                    type: 'timestamp'
                  },
                  StartDate: {
                    type: 'timestamp'
                  },
                  StopDate: {
                    type: 'timestamp'
                  },
                  FullLoadStartDate: {
                    type: 'timestamp'
                  },
                  FullLoadFinishDate: {
                    type: 'timestamp'
                  }
                }
              },
              TaskData: {},
              TargetReplicationInstanceArn: {}
            }
          },
          S3u: {
            type: 'structure',
            members: {
              CertificateIdentifier: {},
              CertificateCreationDate: {
                type: 'timestamp'
              },
              CertificatePem: {},
              CertificateWallet: {
                type: 'blob'
              },
              CertificateArn: {},
              CertificateOwner: {},
              ValidFromDate: {
                type: 'timestamp'
              },
              ValidToDate: {
                type: 'timestamp'
              },
              SigningAlgorithm: {},
              KeyLength: {
                type: 'integer'
              }
            }
          },
          S3y: {
            type: 'structure',
            members: {
              ReplicationInstanceArn: {},
              EndpointArn: {},
              Status: {},
              LastFailureMessage: {},
              EndpointIdentifier: {},
              ReplicationInstanceIdentifier: {}
            }
          },
          S4u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Values'],
              members: {
                Name: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S64: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Status: {},
                RequestIdentifier: {},
                MigrationProjectArn: {},
                Error: {
                  type: 'structure',
                  members: {
                    defaultErrorDetails: {
                      type: 'structure',
                      members: {
                        Message: {}
                      }
                    }
                  },
                  union: true
                },
                ExportSqlDetails: {
                  type: 'structure',
                  members: {
                    S3ObjectKey: {},
                    ObjectURL: {}
                  }
                }
              }
            }
          },
          S6m: {
            type: 'structure',
            members: {
              ServerId: {},
              IpAddress: {},
              ServerName: {}
            }
          },
          S87: {
            type: 'structure',
            members: {
              EndpointArn: {},
              ReplicationInstanceArn: {},
              Status: {},
              LastRefreshDate: {
                type: 'timestamp'
              },
              LastFailureMessage: {}
            }
          },
          S8p: {
            type: 'structure',
            members: {
              SchemaName: {},
              TableName: {},
              Inserts: {
                type: 'long'
              },
              Deletes: {
                type: 'long'
              },
              Updates: {
                type: 'long'
              },
              Ddls: {
                type: 'long'
              },
              AppliedInserts: {
                type: 'long'
              },
              AppliedDeletes: {
                type: 'long'
              },
              AppliedUpdates: {
                type: 'long'
              },
              AppliedDdls: {
                type: 'long'
              },
              FullLoadRows: {
                type: 'long'
              },
              FullLoadCondtnlChkFailedRows: {
                type: 'long'
              },
              FullLoadErrorRows: {
                type: 'long'
              },
              FullLoadStartTime: {
                type: 'timestamp'
              },
              FullLoadEndTime: {
                type: 'timestamp'
              },
              FullLoadReloaded: {
                type: 'boolean'
              },
              LastUpdateTime: {
                type: 'timestamp'
              },
              TableState: {},
              ValidationPendingRecords: {
                type: 'long'
              },
              ValidationFailedRecords: {
                type: 'long'
              },
              ValidationSuspendedRecords: {
                type: 'long'
              },
              ValidationState: {},
              ValidationStateDetails: {}
            }
          },
          S97: {
            type: 'structure',
            members: {
              ReplicationConfigIdentifier: {},
              ReplicationConfigArn: {},
              SourceEndpointArn: {},
              TargetEndpointArn: {},
              ReplicationType: {},
              Status: {},
              ProvisionData: {
                type: 'structure',
                members: {
                  ProvisionState: {},
                  ProvisionedCapacityUnits: {
                    type: 'integer'
                  },
                  DateProvisioned: {
                    type: 'timestamp'
                  },
                  IsNewProvisioningAvailable: {
                    type: 'boolean'
                  },
                  DateNewProvisioningDataAvailable: {
                    type: 'timestamp'
                  },
                  ReasonForNewProvisioningData: {}
                }
              },
              StopReason: {},
              FailureMessages: {
                shape: 'S2q'
              },
              ReplicationStats: {
                type: 'structure',
                members: {
                  FullLoadProgressPercent: {
                    type: 'integer'
                  },
                  ElapsedTimeMillis: {
                    type: 'long'
                  },
                  TablesLoaded: {
                    type: 'integer'
                  },
                  TablesLoading: {
                    type: 'integer'
                  },
                  TablesQueued: {
                    type: 'integer'
                  },
                  TablesErrored: {
                    type: 'integer'
                  },
                  FreshStartDate: {
                    type: 'timestamp'
                  },
                  StartDate: {
                    type: 'timestamp'
                  },
                  StopDate: {
                    type: 'timestamp'
                  },
                  FullLoadStartDate: {
                    type: 'timestamp'
                  },
                  FullLoadFinishDate: {
                    type: 'timestamp'
                  }
                }
              },
              StartReplicationType: {},
              CdcStartTime: {
                type: 'timestamp'
              },
              CdcStartPosition: {},
              CdcStopPosition: {},
              RecoveryCheckpoint: {},
              ReplicationCreateTime: {
                type: 'timestamp'
              },
              ReplicationUpdateTime: {
                type: 'timestamp'
              },
              ReplicationLastStopTime: {
                type: 'timestamp'
              },
              ReplicationDeprovisionTime: {
                type: 'timestamp'
              }
            }
          },
          S9k: {
            type: 'structure',
            members: {
              S3ObjectKey: {},
              ObjectURL: {}
            }
          },
          Sah: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SchemaName', 'TableName'],
              members: {
                SchemaName: {},
                TableName: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1889618982c0ddd12c27f9a6a4e1b8bcfcc060cc.js.map