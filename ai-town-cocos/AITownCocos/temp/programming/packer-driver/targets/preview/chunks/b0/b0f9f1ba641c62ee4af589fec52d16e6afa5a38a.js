System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-10-31',
          endpointPrefix: 'rds',
          protocol: 'query',
          serviceAbbreviation: 'Amazon Neptune',
          serviceFullName: 'Amazon Neptune',
          serviceId: 'Neptune',
          signatureVersion: 'v4',
          signingName: 'rds',
          uid: 'neptune-2014-10-31',
          xmlNamespace: 'http://rds.amazonaws.com/doc/2014-10-31/'
        },
        operations: {
          AddRoleToDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'RoleArn'],
              members: {
                DBClusterIdentifier: {},
                RoleArn: {},
                FeatureName: {}
              }
            }
          },
          AddSourceIdentifierToSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName', 'SourceIdentifier'],
              members: {
                SubscriptionName: {},
                SourceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'AddSourceIdentifierToSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S5'
                }
              }
            }
          },
          AddTagsToResource: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'Tags'],
              members: {
                ResourceName: {},
                Tags: {
                  shape: 'Sa'
                }
              }
            }
          },
          ApplyPendingMaintenanceAction: {
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ApplyAction', 'OptInType'],
              members: {
                ResourceIdentifier: {},
                ApplyAction: {},
                OptInType: {}
              }
            },
            output: {
              resultWrapper: 'ApplyPendingMaintenanceActionResult',
              type: 'structure',
              members: {
                ResourcePendingMaintenanceActions: {
                  shape: 'Se'
                }
              }
            }
          },
          CopyDBClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['SourceDBClusterParameterGroupIdentifier', 'TargetDBClusterParameterGroupIdentifier', 'TargetDBClusterParameterGroupDescription'],
              members: {
                SourceDBClusterParameterGroupIdentifier: {},
                TargetDBClusterParameterGroupIdentifier: {},
                TargetDBClusterParameterGroupDescription: {},
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CopyDBClusterParameterGroupResult',
              type: 'structure',
              members: {
                DBClusterParameterGroup: {
                  shape: 'Sk'
                }
              }
            }
          },
          CopyDBClusterSnapshot: {
            input: {
              type: 'structure',
              required: ['SourceDBClusterSnapshotIdentifier', 'TargetDBClusterSnapshotIdentifier'],
              members: {
                SourceDBClusterSnapshotIdentifier: {},
                TargetDBClusterSnapshotIdentifier: {},
                KmsKeyId: {},
                PreSignedUrl: {},
                CopyTags: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CopyDBClusterSnapshotResult',
              type: 'structure',
              members: {
                DBClusterSnapshot: {
                  shape: 'So'
                }
              }
            }
          },
          CopyDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['SourceDBParameterGroupIdentifier', 'TargetDBParameterGroupIdentifier', 'TargetDBParameterGroupDescription'],
              members: {
                SourceDBParameterGroupIdentifier: {},
                TargetDBParameterGroupIdentifier: {},
                TargetDBParameterGroupDescription: {},
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CopyDBParameterGroupResult',
              type: 'structure',
              members: {
                DBParameterGroup: {
                  shape: 'St'
                }
              }
            }
          },
          CreateDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'Engine'],
              members: {
                AvailabilityZones: {
                  shape: 'Sp'
                },
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                CharacterSetName: {},
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                DatabaseName: {},
                DBClusterIdentifier: {},
                DBClusterParameterGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'Sw'
                },
                DBSubnetGroupName: {},
                Engine: {},
                EngineVersion: {},
                Port: {
                  type: 'integer'
                },
                MasterUsername: {},
                MasterUserPassword: {},
                OptionGroupName: {},
                PreferredBackupWindow: {},
                PreferredMaintenanceWindow: {},
                ReplicationSourceIdentifier: {},
                Tags: {
                  shape: 'Sa'
                },
                StorageEncrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                PreSignedUrl: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'Sx'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                ServerlessV2ScalingConfiguration: {
                  shape: 'Sy'
                },
                GlobalClusterIdentifier: {},
                StorageType: {}
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateDBClusterEndpoint: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'DBClusterEndpointIdentifier', 'EndpointType'],
              members: {
                DBClusterIdentifier: {},
                DBClusterEndpointIdentifier: {},
                EndpointType: {},
                StaticMembers: {
                  shape: 'S1g'
                },
                ExcludedMembers: {
                  shape: 'S1g'
                },
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterEndpointResult',
              type: 'structure',
              members: {
                DBClusterEndpointIdentifier: {},
                DBClusterIdentifier: {},
                DBClusterEndpointResourceIdentifier: {},
                Endpoint: {},
                Status: {},
                EndpointType: {},
                CustomEndpointType: {},
                StaticMembers: {
                  shape: 'S1g'
                },
                ExcludedMembers: {
                  shape: 'S1g'
                },
                DBClusterEndpointArn: {}
              }
            }
          },
          CreateDBClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBClusterParameterGroupName', 'DBParameterGroupFamily', 'Description'],
              members: {
                DBClusterParameterGroupName: {},
                DBParameterGroupFamily: {},
                Description: {},
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterParameterGroupResult',
              type: 'structure',
              members: {
                DBClusterParameterGroup: {
                  shape: 'Sk'
                }
              }
            }
          },
          CreateDBClusterSnapshot: {
            input: {
              type: 'structure',
              required: ['DBClusterSnapshotIdentifier', 'DBClusterIdentifier'],
              members: {
                DBClusterSnapshotIdentifier: {},
                DBClusterIdentifier: {},
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterSnapshotResult',
              type: 'structure',
              members: {
                DBClusterSnapshot: {
                  shape: 'So'
                }
              }
            }
          },
          CreateDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'DBInstanceClass', 'Engine', 'DBClusterIdentifier'],
              members: {
                DBName: {},
                DBInstanceIdentifier: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                DBInstanceClass: {},
                Engine: {},
                MasterUsername: {},
                MasterUserPassword: {},
                DBSecurityGroups: {
                  shape: 'S1n'
                },
                VpcSecurityGroupIds: {
                  shape: 'Sw'
                },
                AvailabilityZone: {},
                DBSubnetGroupName: {},
                PreferredMaintenanceWindow: {},
                DBParameterGroupName: {},
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                PreferredBackupWindow: {},
                Port: {
                  type: 'integer'
                },
                MultiAZ: {
                  type: 'boolean'
                },
                EngineVersion: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                LicenseModel: {},
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                CharacterSetName: {},
                PubliclyAccessible: {
                  deprecated: true,
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sa'
                },
                DBClusterIdentifier: {},
                StorageType: {},
                TdeCredentialArn: {},
                TdeCredentialPassword: {
                  shape: 'S1o'
                },
                StorageEncrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                Domain: {},
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                MonitoringInterval: {
                  type: 'integer'
                },
                MonitoringRoleArn: {},
                DomainIAMRoleName: {},
                PromotionTier: {
                  type: 'integer'
                },
                Timezone: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                EnablePerformanceInsights: {
                  type: 'boolean'
                },
                PerformanceInsightsKMSKeyId: {},
                EnableCloudwatchLogsExports: {
                  shape: 'Sx'
                },
                DeletionProtection: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S1q'
                }
              }
            }
          },
          CreateDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName', 'DBParameterGroupFamily', 'Description'],
              members: {
                DBParameterGroupName: {},
                DBParameterGroupFamily: {},
                Description: {},
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBParameterGroupResult',
              type: 'structure',
              members: {
                DBParameterGroup: {
                  shape: 'St'
                }
              }
            }
          },
          CreateDBSubnetGroup: {
            input: {
              type: 'structure',
              required: ['DBSubnetGroupName', 'DBSubnetGroupDescription', 'SubnetIds'],
              members: {
                DBSubnetGroupName: {},
                DBSubnetGroupDescription: {},
                SubnetIds: {
                  shape: 'S2c'
                },
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBSubnetGroupResult',
              type: 'structure',
              members: {
                DBSubnetGroup: {
                  shape: 'S1w'
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
                  shape: 'S7'
                },
                SourceIds: {
                  shape: 'S6'
                },
                Enabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'CreateEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S5'
                }
              }
            }
          },
          CreateGlobalCluster: {
            input: {
              type: 'structure',
              required: ['GlobalClusterIdentifier'],
              members: {
                GlobalClusterIdentifier: {},
                SourceDBClusterIdentifier: {},
                Engine: {},
                EngineVersion: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                StorageEncrypted: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'CreateGlobalClusterResult',
              type: 'structure',
              members: {
                GlobalCluster: {
                  shape: 'S2i'
                }
              }
            }
          },
          DeleteDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {},
                SkipFinalSnapshot: {
                  type: 'boolean'
                },
                FinalDBSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          },
          DeleteDBClusterEndpoint: {
            input: {
              type: 'structure',
              required: ['DBClusterEndpointIdentifier'],
              members: {
                DBClusterEndpointIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBClusterEndpointResult',
              type: 'structure',
              members: {
                DBClusterEndpointIdentifier: {},
                DBClusterIdentifier: {},
                DBClusterEndpointResourceIdentifier: {},
                Endpoint: {},
                Status: {},
                EndpointType: {},
                CustomEndpointType: {},
                StaticMembers: {
                  shape: 'S1g'
                },
                ExcludedMembers: {
                  shape: 'S1g'
                },
                DBClusterEndpointArn: {}
              }
            }
          },
          DeleteDBClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBClusterParameterGroupName'],
              members: {
                DBClusterParameterGroupName: {}
              }
            }
          },
          DeleteDBClusterSnapshot: {
            input: {
              type: 'structure',
              required: ['DBClusterSnapshotIdentifier'],
              members: {
                DBClusterSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBClusterSnapshotResult',
              type: 'structure',
              members: {
                DBClusterSnapshot: {
                  shape: 'So'
                }
              }
            }
          },
          DeleteDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                SkipFinalSnapshot: {
                  type: 'boolean'
                },
                FinalDBSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S1q'
                }
              }
            }
          },
          DeleteDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName'],
              members: {
                DBParameterGroupName: {}
              }
            }
          },
          DeleteDBSubnetGroup: {
            input: {
              type: 'structure',
              required: ['DBSubnetGroupName'],
              members: {
                DBSubnetGroupName: {}
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
              resultWrapper: 'DeleteEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteGlobalCluster: {
            input: {
              type: 'structure',
              required: ['GlobalClusterIdentifier'],
              members: {
                GlobalClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteGlobalClusterResult',
              type: 'structure',
              members: {
                GlobalCluster: {
                  shape: 'S2i'
                }
              }
            }
          },
          DescribeDBClusterEndpoints: {
            input: {
              type: 'structure',
              members: {
                DBClusterIdentifier: {},
                DBClusterEndpointIdentifier: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBClusterEndpointsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBClusterEndpoints: {
                  type: 'list',
                  member: {
                    locationName: 'DBClusterEndpointList',
                    type: 'structure',
                    members: {
                      DBClusterEndpointIdentifier: {},
                      DBClusterIdentifier: {},
                      DBClusterEndpointResourceIdentifier: {},
                      Endpoint: {},
                      Status: {},
                      EndpointType: {},
                      CustomEndpointType: {},
                      StaticMembers: {
                        shape: 'S1g'
                      },
                      ExcludedMembers: {
                        shape: 'S1g'
                      },
                      DBClusterEndpointArn: {}
                    }
                  }
                }
              }
            }
          },
          DescribeDBClusterParameterGroups: {
            input: {
              type: 'structure',
              members: {
                DBClusterParameterGroupName: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBClusterParameterGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBClusterParameterGroups: {
                  type: 'list',
                  member: {
                    shape: 'Sk',
                    locationName: 'DBClusterParameterGroup'
                  }
                }
              }
            }
          },
          DescribeDBClusterParameters: {
            input: {
              type: 'structure',
              required: ['DBClusterParameterGroupName'],
              members: {
                DBClusterParameterGroupName: {},
                Source: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBClusterParametersResult',
              type: 'structure',
              members: {
                Parameters: {
                  shape: 'S3d'
                },
                Marker: {}
              }
            }
          },
          DescribeDBClusterSnapshotAttributes: {
            input: {
              type: 'structure',
              required: ['DBClusterSnapshotIdentifier'],
              members: {
                DBClusterSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBClusterSnapshotAttributesResult',
              type: 'structure',
              members: {
                DBClusterSnapshotAttributesResult: {
                  shape: 'S3i'
                }
              }
            }
          },
          DescribeDBClusterSnapshots: {
            input: {
              type: 'structure',
              members: {
                DBClusterIdentifier: {},
                DBClusterSnapshotIdentifier: {},
                SnapshotType: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                IncludeShared: {
                  type: 'boolean'
                },
                IncludePublic: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDBClusterSnapshotsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBClusterSnapshots: {
                  type: 'list',
                  member: {
                    shape: 'So',
                    locationName: 'DBClusterSnapshot'
                  }
                }
              }
            }
          },
          DescribeDBClusters: {
            input: {
              type: 'structure',
              members: {
                DBClusterIdentifier: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBClustersResult',
              type: 'structure',
              members: {
                Marker: {},
                DBClusters: {
                  type: 'list',
                  member: {
                    shape: 'S12',
                    locationName: 'DBCluster'
                  }
                }
              }
            }
          },
          DescribeDBEngineVersions: {
            input: {
              type: 'structure',
              members: {
                Engine: {},
                EngineVersion: {},
                DBParameterGroupFamily: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                DefaultOnly: {
                  type: 'boolean'
                },
                ListSupportedCharacterSets: {
                  type: 'boolean'
                },
                ListSupportedTimezones: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDBEngineVersionsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBEngineVersions: {
                  type: 'list',
                  member: {
                    locationName: 'DBEngineVersion',
                    type: 'structure',
                    members: {
                      Engine: {},
                      EngineVersion: {},
                      DBParameterGroupFamily: {},
                      DBEngineDescription: {},
                      DBEngineVersionDescription: {},
                      DefaultCharacterSet: {
                        shape: 'S3w'
                      },
                      SupportedCharacterSets: {
                        type: 'list',
                        member: {
                          shape: 'S3w',
                          locationName: 'CharacterSet'
                        }
                      },
                      ValidUpgradeTarget: {
                        type: 'list',
                        member: {
                          locationName: 'UpgradeTarget',
                          type: 'structure',
                          members: {
                            Engine: {},
                            EngineVersion: {},
                            Description: {},
                            AutoUpgrade: {
                              type: 'boolean'
                            },
                            IsMajorVersionUpgrade: {
                              type: 'boolean'
                            },
                            SupportsGlobalDatabases: {
                              type: 'boolean'
                            }
                          }
                        }
                      },
                      SupportedTimezones: {
                        type: 'list',
                        member: {
                          locationName: 'Timezone',
                          type: 'structure',
                          members: {
                            TimezoneName: {}
                          }
                        }
                      },
                      ExportableLogTypes: {
                        shape: 'Sx'
                      },
                      SupportsLogExportsToCloudwatchLogs: {
                        type: 'boolean'
                      },
                      SupportsReadReplica: {
                        type: 'boolean'
                      },
                      SupportsGlobalDatabases: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeDBInstances: {
            input: {
              type: 'structure',
              members: {
                DBInstanceIdentifier: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBInstancesResult',
              type: 'structure',
              members: {
                Marker: {},
                DBInstances: {
                  type: 'list',
                  member: {
                    shape: 'S1q',
                    locationName: 'DBInstance'
                  }
                }
              }
            }
          },
          DescribeDBParameterGroups: {
            input: {
              type: 'structure',
              members: {
                DBParameterGroupName: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBParameterGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBParameterGroups: {
                  type: 'list',
                  member: {
                    shape: 'St',
                    locationName: 'DBParameterGroup'
                  }
                }
              }
            }
          },
          DescribeDBParameters: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName'],
              members: {
                DBParameterGroupName: {},
                Source: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBParametersResult',
              type: 'structure',
              members: {
                Parameters: {
                  shape: 'S3d'
                },
                Marker: {}
              }
            }
          },
          DescribeDBSubnetGroups: {
            input: {
              type: 'structure',
              members: {
                DBSubnetGroupName: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBSubnetGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBSubnetGroups: {
                  type: 'list',
                  member: {
                    shape: 'S1w',
                    locationName: 'DBSubnetGroup'
                  }
                }
              }
            }
          },
          DescribeEngineDefaultClusterParameters: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupFamily'],
              members: {
                DBParameterGroupFamily: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEngineDefaultClusterParametersResult',
              type: 'structure',
              members: {
                EngineDefaults: {
                  shape: 'S4f'
                }
              }
            }
          },
          DescribeEngineDefaultParameters: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupFamily'],
              members: {
                DBParameterGroupFamily: {},
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEngineDefaultParametersResult',
              type: 'structure',
              members: {
                EngineDefaults: {
                  shape: 'S4f'
                }
              }
            }
          },
          DescribeEventCategories: {
            input: {
              type: 'structure',
              members: {
                SourceType: {},
                Filters: {
                  shape: 'S32'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeEventCategoriesResult',
              type: 'structure',
              members: {
                EventCategoriesMapList: {
                  type: 'list',
                  member: {
                    locationName: 'EventCategoriesMap',
                    type: 'structure',
                    members: {
                      SourceType: {},
                      EventCategories: {
                        shape: 'S7'
                      }
                    },
                    wrapper: true
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
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEventSubscriptionsResult',
              type: 'structure',
              members: {
                Marker: {},
                EventSubscriptionsList: {
                  type: 'list',
                  member: {
                    shape: 'S5',
                    locationName: 'EventSubscription'
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
                  shape: 'S7'
                },
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEventsResult',
              type: 'structure',
              members: {
                Marker: {},
                Events: {
                  type: 'list',
                  member: {
                    locationName: 'Event',
                    type: 'structure',
                    members: {
                      SourceIdentifier: {},
                      SourceType: {},
                      Message: {},
                      EventCategories: {
                        shape: 'S7'
                      },
                      Date: {
                        type: 'timestamp'
                      },
                      SourceArn: {}
                    }
                  }
                }
              }
            }
          },
          DescribeGlobalClusters: {
            input: {
              type: 'structure',
              members: {
                GlobalClusterIdentifier: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeGlobalClustersResult',
              type: 'structure',
              members: {
                Marker: {},
                GlobalClusters: {
                  type: 'list',
                  member: {
                    shape: 'S2i',
                    locationName: 'GlobalClusterMember'
                  }
                }
              }
            }
          },
          DescribeOrderableDBInstanceOptions: {
            input: {
              type: 'structure',
              required: ['Engine'],
              members: {
                Engine: {},
                EngineVersion: {},
                DBInstanceClass: {},
                LicenseModel: {},
                Vpc: {
                  type: 'boolean'
                },
                Filters: {
                  shape: 'S32'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeOrderableDBInstanceOptionsResult',
              type: 'structure',
              members: {
                OrderableDBInstanceOptions: {
                  type: 'list',
                  member: {
                    locationName: 'OrderableDBInstanceOption',
                    type: 'structure',
                    members: {
                      Engine: {},
                      EngineVersion: {},
                      DBInstanceClass: {},
                      LicenseModel: {},
                      AvailabilityZones: {
                        type: 'list',
                        member: {
                          shape: 'S1z',
                          locationName: 'AvailabilityZone'
                        }
                      },
                      MultiAZCapable: {
                        type: 'boolean'
                      },
                      ReadReplicaCapable: {
                        type: 'boolean'
                      },
                      Vpc: {
                        type: 'boolean'
                      },
                      SupportsStorageEncryption: {
                        type: 'boolean'
                      },
                      StorageType: {},
                      SupportsIops: {
                        type: 'boolean'
                      },
                      SupportsEnhancedMonitoring: {
                        type: 'boolean'
                      },
                      SupportsIAMDatabaseAuthentication: {
                        type: 'boolean'
                      },
                      SupportsPerformanceInsights: {
                        type: 'boolean'
                      },
                      MinStorageSize: {
                        type: 'integer'
                      },
                      MaxStorageSize: {
                        type: 'integer'
                      },
                      MinIopsPerDbInstance: {
                        type: 'integer'
                      },
                      MaxIopsPerDbInstance: {
                        type: 'integer'
                      },
                      MinIopsPerGib: {
                        type: 'double'
                      },
                      MaxIopsPerGib: {
                        type: 'double'
                      },
                      SupportsGlobalDatabases: {
                        type: 'boolean'
                      }
                    },
                    wrapper: true
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
                ResourceIdentifier: {},
                Filters: {
                  shape: 'S32'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribePendingMaintenanceActionsResult',
              type: 'structure',
              members: {
                PendingMaintenanceActions: {
                  type: 'list',
                  member: {
                    shape: 'Se',
                    locationName: 'ResourcePendingMaintenanceActions'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeValidDBInstanceModifications: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DescribeValidDBInstanceModificationsResult',
              type: 'structure',
              members: {
                ValidDBInstanceModificationsMessage: {
                  type: 'structure',
                  members: {
                    Storage: {
                      type: 'list',
                      member: {
                        locationName: 'ValidStorageOptions',
                        type: 'structure',
                        members: {
                          StorageType: {},
                          StorageSize: {
                            shape: 'S5a'
                          },
                          ProvisionedIops: {
                            shape: 'S5a'
                          },
                          IopsToStorageRatio: {
                            type: 'list',
                            member: {
                              locationName: 'DoubleRange',
                              type: 'structure',
                              members: {
                                From: {
                                  type: 'double'
                                },
                                To: {
                                  type: 'double'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  wrapper: true
                }
              }
            }
          },
          FailoverDBCluster: {
            input: {
              type: 'structure',
              members: {
                DBClusterIdentifier: {},
                TargetDBInstanceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'FailoverDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          },
          FailoverGlobalCluster: {
            input: {
              type: 'structure',
              required: ['GlobalClusterIdentifier', 'TargetDbClusterIdentifier'],
              members: {
                GlobalClusterIdentifier: {},
                TargetDbClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'FailoverGlobalClusterResult',
              type: 'structure',
              members: {
                GlobalCluster: {
                  shape: 'S2i'
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceName'],
              members: {
                ResourceName: {},
                Filters: {
                  shape: 'S32'
                }
              }
            },
            output: {
              resultWrapper: 'ListTagsForResourceResult',
              type: 'structure',
              members: {
                TagList: {
                  shape: 'Sa'
                }
              }
            }
          },
          ModifyDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {},
                NewDBClusterIdentifier: {},
                ApplyImmediately: {
                  type: 'boolean'
                },
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                DBClusterParameterGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'Sw'
                },
                Port: {
                  type: 'integer'
                },
                MasterUserPassword: {},
                OptionGroupName: {},
                PreferredBackupWindow: {},
                PreferredMaintenanceWindow: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                CloudwatchLogsExportConfiguration: {
                  shape: 'S5m'
                },
                EngineVersion: {},
                AllowMajorVersionUpgrade: {
                  type: 'boolean'
                },
                DBInstanceParameterGroupName: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                ServerlessV2ScalingConfiguration: {
                  shape: 'Sy'
                },
                StorageType: {}
              }
            },
            output: {
              resultWrapper: 'ModifyDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          },
          ModifyDBClusterEndpoint: {
            input: {
              type: 'structure',
              required: ['DBClusterEndpointIdentifier'],
              members: {
                DBClusterEndpointIdentifier: {},
                EndpointType: {},
                StaticMembers: {
                  shape: 'S1g'
                },
                ExcludedMembers: {
                  shape: 'S1g'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBClusterEndpointResult',
              type: 'structure',
              members: {
                DBClusterEndpointIdentifier: {},
                DBClusterIdentifier: {},
                DBClusterEndpointResourceIdentifier: {},
                Endpoint: {},
                Status: {},
                EndpointType: {},
                CustomEndpointType: {},
                StaticMembers: {
                  shape: 'S1g'
                },
                ExcludedMembers: {
                  shape: 'S1g'
                },
                DBClusterEndpointArn: {}
              }
            }
          },
          ModifyDBClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBClusterParameterGroupName', 'Parameters'],
              members: {
                DBClusterParameterGroupName: {},
                Parameters: {
                  shape: 'S3d'
                }
              }
            },
            output: {
              shape: 'S5r',
              resultWrapper: 'ModifyDBClusterParameterGroupResult'
            }
          },
          ModifyDBClusterSnapshotAttribute: {
            input: {
              type: 'structure',
              required: ['DBClusterSnapshotIdentifier', 'AttributeName'],
              members: {
                DBClusterSnapshotIdentifier: {},
                AttributeName: {},
                ValuesToAdd: {
                  shape: 'S3l'
                },
                ValuesToRemove: {
                  shape: 'S3l'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBClusterSnapshotAttributeResult',
              type: 'structure',
              members: {
                DBClusterSnapshotAttributesResult: {
                  shape: 'S3i'
                }
              }
            }
          },
          ModifyDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                DBInstanceClass: {},
                DBSubnetGroupName: {},
                DBSecurityGroups: {
                  shape: 'S1n'
                },
                VpcSecurityGroupIds: {
                  shape: 'Sw'
                },
                ApplyImmediately: {
                  type: 'boolean'
                },
                MasterUserPassword: {},
                DBParameterGroupName: {},
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                PreferredBackupWindow: {},
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
                LicenseModel: {},
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                NewDBInstanceIdentifier: {},
                StorageType: {},
                TdeCredentialArn: {},
                TdeCredentialPassword: {
                  shape: 'S1o'
                },
                CACertificateIdentifier: {},
                Domain: {},
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                MonitoringInterval: {
                  type: 'integer'
                },
                DBPortNumber: {
                  type: 'integer'
                },
                PubliclyAccessible: {
                  deprecated: true,
                  type: 'boolean'
                },
                MonitoringRoleArn: {},
                DomainIAMRoleName: {},
                PromotionTier: {
                  type: 'integer'
                },
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                EnablePerformanceInsights: {
                  type: 'boolean'
                },
                PerformanceInsightsKMSKeyId: {},
                CloudwatchLogsExportConfiguration: {
                  shape: 'S5m'
                },
                DeletionProtection: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S1q'
                }
              }
            }
          },
          ModifyDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName', 'Parameters'],
              members: {
                DBParameterGroupName: {},
                Parameters: {
                  shape: 'S3d'
                }
              }
            },
            output: {
              shape: 'S5x',
              resultWrapper: 'ModifyDBParameterGroupResult'
            }
          },
          ModifyDBSubnetGroup: {
            input: {
              type: 'structure',
              required: ['DBSubnetGroupName', 'SubnetIds'],
              members: {
                DBSubnetGroupName: {},
                DBSubnetGroupDescription: {},
                SubnetIds: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBSubnetGroupResult',
              type: 'structure',
              members: {
                DBSubnetGroup: {
                  shape: 'S1w'
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
                  shape: 'S7'
                },
                Enabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S5'
                }
              }
            }
          },
          ModifyGlobalCluster: {
            input: {
              type: 'structure',
              required: ['GlobalClusterIdentifier'],
              members: {
                GlobalClusterIdentifier: {},
                NewGlobalClusterIdentifier: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                EngineVersion: {},
                AllowMajorVersionUpgrade: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyGlobalClusterResult',
              type: 'structure',
              members: {
                GlobalCluster: {
                  shape: 'S2i'
                }
              }
            }
          },
          PromoteReadReplicaDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'PromoteReadReplicaDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          },
          RebootDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                ForceFailover: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'RebootDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S1q'
                }
              }
            }
          },
          RemoveFromGlobalCluster: {
            input: {
              type: 'structure',
              required: ['GlobalClusterIdentifier', 'DbClusterIdentifier'],
              members: {
                GlobalClusterIdentifier: {},
                DbClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'RemoveFromGlobalClusterResult',
              type: 'structure',
              members: {
                GlobalCluster: {
                  shape: 'S2i'
                }
              }
            }
          },
          RemoveRoleFromDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'RoleArn'],
              members: {
                DBClusterIdentifier: {},
                RoleArn: {},
                FeatureName: {}
              }
            }
          },
          RemoveSourceIdentifierFromSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName', 'SourceIdentifier'],
              members: {
                SubscriptionName: {},
                SourceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'RemoveSourceIdentifierFromSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S5'
                }
              }
            }
          },
          RemoveTagsFromResource: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'TagKeys'],
              members: {
                ResourceName: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ResetDBClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBClusterParameterGroupName'],
              members: {
                DBClusterParameterGroupName: {},
                ResetAllParameters: {
                  type: 'boolean'
                },
                Parameters: {
                  shape: 'S3d'
                }
              }
            },
            output: {
              shape: 'S5r',
              resultWrapper: 'ResetDBClusterParameterGroupResult'
            }
          },
          ResetDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName'],
              members: {
                DBParameterGroupName: {},
                ResetAllParameters: {
                  type: 'boolean'
                },
                Parameters: {
                  shape: 'S3d'
                }
              }
            },
            output: {
              shape: 'S5x',
              resultWrapper: 'ResetDBParameterGroupResult'
            }
          },
          RestoreDBClusterFromSnapshot: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'SnapshotIdentifier', 'Engine'],
              members: {
                AvailabilityZones: {
                  shape: 'Sp'
                },
                DBClusterIdentifier: {},
                SnapshotIdentifier: {},
                Engine: {},
                EngineVersion: {},
                Port: {
                  type: 'integer'
                },
                DBSubnetGroupName: {},
                DatabaseName: {},
                OptionGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'Sw'
                },
                Tags: {
                  shape: 'Sa'
                },
                KmsKeyId: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'Sx'
                },
                DBClusterParameterGroupName: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                ServerlessV2ScalingConfiguration: {
                  shape: 'Sy'
                },
                StorageType: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBClusterFromSnapshotResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          },
          RestoreDBClusterToPointInTime: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'SourceDBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {},
                RestoreType: {},
                SourceDBClusterIdentifier: {},
                RestoreToTime: {
                  type: 'timestamp'
                },
                UseLatestRestorableTime: {
                  type: 'boolean'
                },
                Port: {
                  type: 'integer'
                },
                DBSubnetGroupName: {},
                OptionGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'Sw'
                },
                Tags: {
                  shape: 'Sa'
                },
                KmsKeyId: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'Sx'
                },
                DBClusterParameterGroupName: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                ServerlessV2ScalingConfiguration: {
                  shape: 'Sy'
                },
                StorageType: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBClusterToPointInTimeResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          },
          StartDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'StartDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          },
          StopDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'StopDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S12'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              CustomerAwsId: {},
              CustSubscriptionId: {},
              SnsTopicArn: {},
              Status: {},
              SubscriptionCreationTime: {},
              SourceType: {},
              SourceIdsList: {
                shape: 'S6'
              },
              EventCategoriesList: {
                shape: 'S7'
              },
              Enabled: {
                type: 'boolean'
              },
              EventSubscriptionArn: {}
            },
            wrapper: true
          },
          S6: {
            type: 'list',
            member: {
              locationName: 'SourceId'
            }
          },
          S7: {
            type: 'list',
            member: {
              locationName: 'EventCategory'
            }
          },
          Sa: {
            type: 'list',
            member: {
              locationName: 'Tag',
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Se: {
            type: 'structure',
            members: {
              ResourceIdentifier: {},
              PendingMaintenanceActionDetails: {
                type: 'list',
                member: {
                  locationName: 'PendingMaintenanceAction',
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
            },
            wrapper: true
          },
          Sk: {
            type: 'structure',
            members: {
              DBClusterParameterGroupName: {},
              DBParameterGroupFamily: {},
              Description: {},
              DBClusterParameterGroupArn: {}
            },
            wrapper: true
          },
          So: {
            type: 'structure',
            members: {
              AvailabilityZones: {
                shape: 'Sp'
              },
              DBClusterSnapshotIdentifier: {},
              DBClusterIdentifier: {},
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Engine: {},
              AllocatedStorage: {
                type: 'integer'
              },
              Status: {},
              Port: {
                type: 'integer'
              },
              VpcId: {},
              ClusterCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {},
              EngineVersion: {},
              LicenseModel: {},
              SnapshotType: {},
              PercentProgress: {
                type: 'integer'
              },
              StorageEncrypted: {
                type: 'boolean'
              },
              KmsKeyId: {},
              DBClusterSnapshotArn: {},
              SourceDBClusterSnapshotArn: {},
              IAMDatabaseAuthenticationEnabled: {
                type: 'boolean'
              },
              StorageType: {}
            },
            wrapper: true
          },
          Sp: {
            type: 'list',
            member: {
              locationName: 'AvailabilityZone'
            }
          },
          St: {
            type: 'structure',
            members: {
              DBParameterGroupName: {},
              DBParameterGroupFamily: {},
              Description: {},
              DBParameterGroupArn: {}
            },
            wrapper: true
          },
          Sw: {
            type: 'list',
            member: {
              locationName: 'VpcSecurityGroupId'
            }
          },
          Sx: {
            type: 'list',
            member: {}
          },
          Sy: {
            type: 'structure',
            members: {
              MinCapacity: {
                type: 'double'
              },
              MaxCapacity: {
                type: 'double'
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              AllocatedStorage: {
                type: 'integer'
              },
              AvailabilityZones: {
                shape: 'Sp'
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              CharacterSetName: {},
              DatabaseName: {},
              DBClusterIdentifier: {},
              DBClusterParameterGroup: {},
              DBSubnetGroup: {},
              Status: {},
              PercentProgress: {},
              EarliestRestorableTime: {
                type: 'timestamp'
              },
              Endpoint: {},
              ReaderEndpoint: {},
              MultiAZ: {
                type: 'boolean'
              },
              Engine: {},
              EngineVersion: {},
              LatestRestorableTime: {
                type: 'timestamp'
              },
              Port: {
                type: 'integer'
              },
              MasterUsername: {},
              DBClusterOptionGroupMemberships: {
                type: 'list',
                member: {
                  locationName: 'DBClusterOptionGroup',
                  type: 'structure',
                  members: {
                    DBClusterOptionGroupName: {},
                    Status: {}
                  }
                }
              },
              PreferredBackupWindow: {},
              PreferredMaintenanceWindow: {},
              ReplicationSourceIdentifier: {},
              ReadReplicaIdentifiers: {
                type: 'list',
                member: {
                  locationName: 'ReadReplicaIdentifier'
                }
              },
              DBClusterMembers: {
                type: 'list',
                member: {
                  locationName: 'DBClusterMember',
                  type: 'structure',
                  members: {
                    DBInstanceIdentifier: {},
                    IsClusterWriter: {
                      type: 'boolean'
                    },
                    DBClusterParameterGroupStatus: {},
                    PromotionTier: {
                      type: 'integer'
                    }
                  },
                  wrapper: true
                }
              },
              VpcSecurityGroups: {
                shape: 'S18'
              },
              HostedZoneId: {},
              StorageEncrypted: {
                type: 'boolean'
              },
              KmsKeyId: {},
              DbClusterResourceId: {},
              DBClusterArn: {},
              AssociatedRoles: {
                type: 'list',
                member: {
                  locationName: 'DBClusterRole',
                  type: 'structure',
                  members: {
                    RoleArn: {},
                    Status: {},
                    FeatureName: {}
                  }
                }
              },
              IAMDatabaseAuthenticationEnabled: {
                type: 'boolean'
              },
              CloneGroupId: {},
              ClusterCreateTime: {
                type: 'timestamp'
              },
              CopyTagsToSnapshot: {
                type: 'boolean'
              },
              EnabledCloudwatchLogsExports: {
                shape: 'Sx'
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  PendingCloudwatchLogsExports: {
                    shape: 'S1d'
                  },
                  DBClusterIdentifier: {},
                  IAMDatabaseAuthenticationEnabled: {
                    type: 'boolean'
                  },
                  EngineVersion: {},
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  StorageType: {},
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  Iops: {
                    type: 'integer'
                  }
                }
              },
              DeletionProtection: {
                type: 'boolean'
              },
              CrossAccountClone: {
                type: 'boolean'
              },
              AutomaticRestartTime: {
                type: 'timestamp'
              },
              ServerlessV2ScalingConfiguration: {
                type: 'structure',
                members: {
                  MinCapacity: {
                    type: 'double'
                  },
                  MaxCapacity: {
                    type: 'double'
                  }
                }
              },
              GlobalClusterIdentifier: {},
              IOOptimizedNextAllowedModificationTime: {
                type: 'timestamp'
              },
              StorageType: {}
            },
            wrapper: true
          },
          S18: {
            type: 'list',
            member: {
              locationName: 'VpcSecurityGroupMembership',
              type: 'structure',
              members: {
                VpcSecurityGroupId: {},
                Status: {}
              }
            }
          },
          S1d: {
            type: 'structure',
            members: {
              LogTypesToEnable: {
                shape: 'Sx'
              },
              LogTypesToDisable: {
                shape: 'Sx'
              }
            }
          },
          S1g: {
            type: 'list',
            member: {}
          },
          S1n: {
            type: 'list',
            member: {
              locationName: 'DBSecurityGroupName'
            }
          },
          S1o: {
            type: 'string',
            sensitive: true
          },
          S1q: {
            type: 'structure',
            members: {
              DBInstanceIdentifier: {},
              DBInstanceClass: {},
              Engine: {},
              DBInstanceStatus: {},
              MasterUsername: {},
              DBName: {},
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {},
                  Port: {
                    type: 'integer'
                  },
                  HostedZoneId: {}
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {},
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                type: 'list',
                member: {
                  locationName: 'DBSecurityGroup',
                  type: 'structure',
                  members: {
                    DBSecurityGroupName: {},
                    Status: {}
                  }
                }
              },
              VpcSecurityGroups: {
                shape: 'S18'
              },
              DBParameterGroups: {
                type: 'list',
                member: {
                  locationName: 'DBParameterGroup',
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {},
                    ParameterApplyStatus: {}
                  }
                }
              },
              AvailabilityZone: {},
              DBSubnetGroup: {
                shape: 'S1w'
              },
              PreferredMaintenanceWindow: {},
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {},
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {},
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {},
                  LicenseModel: {},
                  Iops: {
                    type: 'integer'
                  },
                  DBInstanceIdentifier: {},
                  StorageType: {},
                  CACertificateIdentifier: {},
                  DBSubnetGroupName: {},
                  PendingCloudwatchLogsExports: {
                    shape: 'S1d'
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {},
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {},
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                member: {
                  locationName: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              ReadReplicaDBClusterIdentifiers: {
                type: 'list',
                member: {
                  locationName: 'ReadReplicaDBClusterIdentifier'
                }
              },
              LicenseModel: {},
              Iops: {
                type: 'integer'
              },
              OptionGroupMemberships: {
                type: 'list',
                member: {
                  locationName: 'OptionGroupMembership',
                  type: 'structure',
                  members: {
                    OptionGroupName: {},
                    Status: {}
                  }
                }
              },
              CharacterSetName: {},
              SecondaryAvailabilityZone: {},
              PubliclyAccessible: {
                deprecated: true,
                type: 'boolean'
              },
              StatusInfos: {
                type: 'list',
                member: {
                  locationName: 'DBInstanceStatusInfo',
                  type: 'structure',
                  members: {
                    StatusType: {},
                    Normal: {
                      type: 'boolean'
                    },
                    Status: {},
                    Message: {}
                  }
                }
              },
              StorageType: {},
              TdeCredentialArn: {},
              DbInstancePort: {
                type: 'integer'
              },
              DBClusterIdentifier: {},
              StorageEncrypted: {
                type: 'boolean'
              },
              KmsKeyId: {},
              DbiResourceId: {},
              CACertificateIdentifier: {},
              DomainMemberships: {
                type: 'list',
                member: {
                  locationName: 'DomainMembership',
                  type: 'structure',
                  members: {
                    Domain: {},
                    Status: {},
                    FQDN: {},
                    IAMRoleName: {}
                  }
                }
              },
              CopyTagsToSnapshot: {
                type: 'boolean'
              },
              MonitoringInterval: {
                type: 'integer'
              },
              EnhancedMonitoringResourceArn: {},
              MonitoringRoleArn: {},
              PromotionTier: {
                type: 'integer'
              },
              DBInstanceArn: {},
              Timezone: {},
              IAMDatabaseAuthenticationEnabled: {
                type: 'boolean'
              },
              PerformanceInsightsEnabled: {
                type: 'boolean'
              },
              PerformanceInsightsKMSKeyId: {},
              EnabledCloudwatchLogsExports: {
                shape: 'Sx'
              },
              DeletionProtection: {
                type: 'boolean'
              }
            },
            wrapper: true
          },
          S1w: {
            type: 'structure',
            members: {
              DBSubnetGroupName: {},
              DBSubnetGroupDescription: {},
              VpcId: {},
              SubnetGroupStatus: {},
              Subnets: {
                type: 'list',
                member: {
                  locationName: 'Subnet',
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {},
                    SubnetAvailabilityZone: {
                      shape: 'S1z'
                    },
                    SubnetStatus: {}
                  }
                }
              },
              DBSubnetGroupArn: {}
            },
            wrapper: true
          },
          S1z: {
            type: 'structure',
            members: {
              Name: {}
            },
            wrapper: true
          },
          S2c: {
            type: 'list',
            member: {
              locationName: 'SubnetIdentifier'
            }
          },
          S2i: {
            type: 'structure',
            members: {
              GlobalClusterIdentifier: {},
              GlobalClusterResourceId: {},
              GlobalClusterArn: {},
              Status: {},
              Engine: {},
              EngineVersion: {},
              StorageEncrypted: {
                type: 'boolean'
              },
              DeletionProtection: {
                type: 'boolean'
              },
              GlobalClusterMembers: {
                type: 'list',
                member: {
                  locationName: 'GlobalClusterMember',
                  type: 'structure',
                  members: {
                    DBClusterArn: {},
                    Readers: {
                      type: 'list',
                      member: {}
                    },
                    IsWriter: {
                      type: 'boolean'
                    }
                  },
                  wrapper: true
                }
              }
            },
            wrapper: true
          },
          S32: {
            type: 'list',
            member: {
              locationName: 'Filter',
              type: 'structure',
              required: ['Name', 'Values'],
              members: {
                Name: {},
                Values: {
                  type: 'list',
                  member: {
                    locationName: 'Value'
                  }
                }
              }
            }
          },
          S3d: {
            type: 'list',
            member: {
              locationName: 'Parameter',
              type: 'structure',
              members: {
                ParameterName: {},
                ParameterValue: {},
                Description: {},
                Source: {},
                ApplyType: {},
                DataType: {},
                AllowedValues: {},
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {},
                ApplyMethod: {}
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              DBClusterSnapshotIdentifier: {},
              DBClusterSnapshotAttributes: {
                type: 'list',
                member: {
                  locationName: 'DBClusterSnapshotAttribute',
                  type: 'structure',
                  members: {
                    AttributeName: {},
                    AttributeValues: {
                      shape: 'S3l'
                    }
                  }
                }
              }
            },
            wrapper: true
          },
          S3l: {
            type: 'list',
            member: {
              locationName: 'AttributeValue'
            }
          },
          S3w: {
            type: 'structure',
            members: {
              CharacterSetName: {},
              CharacterSetDescription: {}
            }
          },
          S4f: {
            type: 'structure',
            members: {
              DBParameterGroupFamily: {},
              Marker: {},
              Parameters: {
                shape: 'S3d'
              }
            },
            wrapper: true
          },
          S5a: {
            type: 'list',
            member: {
              locationName: 'Range',
              type: 'structure',
              members: {
                From: {
                  type: 'integer'
                },
                To: {
                  type: 'integer'
                },
                Step: {
                  type: 'integer'
                }
              }
            }
          },
          S5m: {
            type: 'structure',
            members: {
              EnableLogTypes: {
                shape: 'Sx'
              },
              DisableLogTypes: {
                shape: 'Sx'
              }
            }
          },
          S5r: {
            type: 'structure',
            members: {
              DBClusterParameterGroupName: {}
            }
          },
          S5x: {
            type: 'structure',
            members: {
              DBParameterGroupName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b0f9f1ba641c62ee4af589fec52d16e6afa5a38a.js.map