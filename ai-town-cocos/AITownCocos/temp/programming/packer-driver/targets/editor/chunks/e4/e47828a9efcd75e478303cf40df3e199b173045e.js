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
          serviceAbbreviation: 'Amazon DocDB',
          serviceFullName: 'Amazon DocumentDB with MongoDB compatibility',
          serviceId: 'DocDB',
          signatureVersion: 'v4',
          signingName: 'rds',
          uid: 'docdb-2014-10-31',
          xmlNamespace: 'http://rds.amazonaws.com/doc/2014-10-31/'
        },
        operations: {
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
                  shape: 'S4'
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
                  shape: 'S9'
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
                  shape: 'Sd'
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
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CopyDBClusterParameterGroupResult',
              type: 'structure',
              members: {
                DBClusterParameterGroup: {
                  shape: 'Sj'
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
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CopyDBClusterSnapshotResult',
              type: 'structure',
              members: {
                DBClusterSnapshot: {
                  shape: 'Sn'
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
                  shape: 'So'
                },
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                DBClusterIdentifier: {},
                DBClusterParameterGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'Ss'
                },
                DBSubnetGroupName: {},
                Engine: {},
                EngineVersion: {},
                Port: {
                  type: 'integer'
                },
                MasterUsername: {},
                MasterUserPassword: {},
                PreferredBackupWindow: {},
                PreferredMaintenanceWindow: {},
                Tags: {
                  shape: 'S9'
                },
                StorageEncrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                PreSignedUrl: {},
                EnableCloudwatchLogsExports: {
                  shape: 'St'
                },
                DeletionProtection: {
                  type: 'boolean'
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
                  shape: 'Sw'
                }
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
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterParameterGroupResult',
              type: 'structure',
              members: {
                DBClusterParameterGroup: {
                  shape: 'Sj'
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
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterSnapshotResult',
              type: 'structure',
              members: {
                DBClusterSnapshot: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'DBInstanceClass', 'Engine', 'DBClusterIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                DBInstanceClass: {},
                Engine: {},
                AvailabilityZone: {},
                PreferredMaintenanceWindow: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S9'
                },
                DBClusterIdentifier: {},
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                PromotionTier: {
                  type: 'integer'
                },
                EnablePerformanceInsights: {
                  type: 'boolean'
                },
                PerformanceInsightsKMSKeyId: {},
                CACertificateIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'CreateDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S1a'
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
                  shape: 'S1m'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBSubnetGroupResult',
              type: 'structure',
              members: {
                DBSubnetGroup: {
                  shape: 'S1c'
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
                  shape: 'S6'
                },
                SourceIds: {
                  shape: 'S5'
                },
                Enabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S4'
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
                DatabaseName: {},
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
                  shape: 'S1s'
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
                  shape: 'Sw'
                }
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
                  shape: 'Sn'
                }
              }
            }
          },
          DeleteDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S1a'
                }
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
                  shape: 'S4'
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
                  shape: 'S1s'
                }
              }
            }
          },
          DescribeCertificates: {
            input: {
              type: 'structure',
              members: {
                CertificateIdentifier: {},
                Filters: {
                  shape: 'S29'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeCertificatesResult',
              type: 'structure',
              members: {
                Certificates: {
                  type: 'list',
                  member: {
                    locationName: 'Certificate',
                    type: 'structure',
                    members: {
                      CertificateIdentifier: {},
                      CertificateType: {},
                      Thumbprint: {},
                      ValidFrom: {
                        type: 'timestamp'
                      },
                      ValidTill: {
                        type: 'timestamp'
                      },
                      CertificateArn: {}
                    },
                    wrapper: true
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBClusterParameterGroups: {
            input: {
              type: 'structure',
              members: {
                DBClusterParameterGroupName: {},
                Filters: {
                  shape: 'S29'
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
                    shape: 'Sj',
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
                  shape: 'S29'
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
                  shape: 'S2k'
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
                  shape: 'S2p'
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
                  shape: 'S29'
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
                    shape: 'Sn',
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
                  shape: 'S29'
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
                    shape: 'Sw',
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
                  shape: 'S29'
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
                            }
                          }
                        }
                      },
                      ExportableLogTypes: {
                        shape: 'St'
                      },
                      SupportsLogExportsToCloudwatchLogs: {
                        type: 'boolean'
                      },
                      SupportedCACertificateIdentifiers: {
                        type: 'list',
                        member: {}
                      },
                      SupportsCertificateRotationWithoutRestart: {
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
                  shape: 'S29'
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
                    shape: 'S1a',
                    locationName: 'DBInstance'
                  }
                }
              }
            }
          },
          DescribeDBSubnetGroups: {
            input: {
              type: 'structure',
              members: {
                DBSubnetGroupName: {},
                Filters: {
                  shape: 'S29'
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
                    shape: 'S1c',
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
                  shape: 'S29'
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
                  type: 'structure',
                  members: {
                    DBParameterGroupFamily: {},
                    Marker: {},
                    Parameters: {
                      shape: 'S2k'
                    }
                  },
                  wrapper: true
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
                  shape: 'S29'
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
                        shape: 'S6'
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
                  shape: 'S29'
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
                    shape: 'S4',
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
                  shape: 'S6'
                },
                Filters: {
                  shape: 'S29'
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
                        shape: 'S6'
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
                Filters: {
                  shape: 'S29'
                },
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
                    shape: 'S1s',
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
                  shape: 'S29'
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
                          shape: 'S1f',
                          locationName: 'AvailabilityZone'
                        }
                      },
                      Vpc: {
                        type: 'boolean'
                      },
                      StorageType: {}
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
                  shape: 'S29'
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
                    shape: 'Sd',
                    locationName: 'ResourcePendingMaintenanceActions'
                  }
                },
                Marker: {}
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
                  shape: 'Sw'
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
                  shape: 'S29'
                }
              }
            },
            output: {
              resultWrapper: 'ListTagsForResourceResult',
              type: 'structure',
              members: {
                TagList: {
                  shape: 'S9'
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
                  shape: 'Ss'
                },
                Port: {
                  type: 'integer'
                },
                MasterUserPassword: {},
                PreferredBackupWindow: {},
                PreferredMaintenanceWindow: {},
                CloudwatchLogsExportConfiguration: {
                  type: 'structure',
                  members: {
                    EnableLogTypes: {
                      shape: 'St'
                    },
                    DisableLogTypes: {
                      shape: 'St'
                    }
                  }
                },
                EngineVersion: {},
                AllowMajorVersionUpgrade: {
                  type: 'boolean'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                StorageType: {}
              }
            },
            output: {
              resultWrapper: 'ModifyDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'Sw'
                }
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
                  shape: 'S2k'
                }
              }
            },
            output: {
              shape: 'S4a',
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
                  shape: 'S2s'
                },
                ValuesToRemove: {
                  shape: 'S2s'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBClusterSnapshotAttributeResult',
              type: 'structure',
              members: {
                DBClusterSnapshotAttributesResult: {
                  shape: 'S2p'
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
                DBInstanceClass: {},
                ApplyImmediately: {
                  type: 'boolean'
                },
                PreferredMaintenanceWindow: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                NewDBInstanceIdentifier: {},
                CACertificateIdentifier: {},
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                PromotionTier: {
                  type: 'integer'
                },
                EnablePerformanceInsights: {
                  type: 'boolean'
                },
                PerformanceInsightsKMSKeyId: {},
                CertificateRotationRestart: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S1a'
                }
              }
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
                  shape: 'S1m'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBSubnetGroupResult',
              type: 'structure',
              members: {
                DBSubnetGroup: {
                  shape: 'S1c'
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
                  shape: 'S6'
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
                  shape: 'S4'
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
                }
              }
            },
            output: {
              resultWrapper: 'ModifyGlobalClusterResult',
              type: 'structure',
              members: {
                GlobalCluster: {
                  shape: 'S1s'
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
                  shape: 'S1a'
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
                  shape: 'S1s'
                }
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
                  shape: 'S4'
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
                  shape: 'S2k'
                }
              }
            },
            output: {
              shape: 'S4a',
              resultWrapper: 'ResetDBClusterParameterGroupResult'
            }
          },
          RestoreDBClusterFromSnapshot: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'SnapshotIdentifier', 'Engine'],
              members: {
                AvailabilityZones: {
                  shape: 'So'
                },
                DBClusterIdentifier: {},
                SnapshotIdentifier: {},
                Engine: {},
                EngineVersion: {},
                Port: {
                  type: 'integer'
                },
                DBSubnetGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'Ss'
                },
                Tags: {
                  shape: 'S9'
                },
                KmsKeyId: {},
                EnableCloudwatchLogsExports: {
                  shape: 'St'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                DBClusterParameterGroupName: {},
                StorageType: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBClusterFromSnapshotResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'Sw'
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
                VpcSecurityGroupIds: {
                  shape: 'Ss'
                },
                Tags: {
                  shape: 'S9'
                },
                KmsKeyId: {},
                EnableCloudwatchLogsExports: {
                  shape: 'St'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                StorageType: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBClusterToPointInTimeResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'Sw'
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
                  shape: 'Sw'
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
                  shape: 'Sw'
                }
              }
            }
          },
          SwitchoverGlobalCluster: {
            input: {
              type: 'structure',
              required: ['GlobalClusterIdentifier', 'TargetDbClusterIdentifier'],
              members: {
                GlobalClusterIdentifier: {},
                TargetDbClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'SwitchoverGlobalClusterResult',
              type: 'structure',
              members: {
                GlobalCluster: {
                  shape: 'S1s'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              CustomerAwsId: {},
              CustSubscriptionId: {},
              SnsTopicArn: {},
              Status: {},
              SubscriptionCreationTime: {},
              SourceType: {},
              SourceIdsList: {
                shape: 'S5'
              },
              EventCategoriesList: {
                shape: 'S6'
              },
              Enabled: {
                type: 'boolean'
              },
              EventSubscriptionArn: {}
            },
            wrapper: true
          },
          S5: {
            type: 'list',
            member: {
              locationName: 'SourceId'
            }
          },
          S6: {
            type: 'list',
            member: {
              locationName: 'EventCategory'
            }
          },
          S9: {
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
          Sd: {
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
          Sj: {
            type: 'structure',
            members: {
              DBClusterParameterGroupName: {},
              DBParameterGroupFamily: {},
              Description: {},
              DBClusterParameterGroupArn: {}
            },
            wrapper: true
          },
          Sn: {
            type: 'structure',
            members: {
              AvailabilityZones: {
                shape: 'So'
              },
              DBClusterSnapshotIdentifier: {},
              DBClusterIdentifier: {},
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Engine: {},
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
              StorageType: {}
            },
            wrapper: true
          },
          So: {
            type: 'list',
            member: {
              locationName: 'AvailabilityZone'
            }
          },
          Ss: {
            type: 'list',
            member: {
              locationName: 'VpcSecurityGroupId'
            }
          },
          St: {
            type: 'list',
            member: {}
          },
          Sw: {
            type: 'structure',
            members: {
              AvailabilityZones: {
                shape: 'So'
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
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
                shape: 'S10'
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
                    Status: {}
                  }
                }
              },
              CloneGroupId: {},
              ClusterCreateTime: {
                type: 'timestamp'
              },
              EnabledCloudwatchLogsExports: {
                shape: 'St'
              },
              DeletionProtection: {
                type: 'boolean'
              },
              StorageType: {}
            },
            wrapper: true
          },
          S10: {
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
          S1a: {
            type: 'structure',
            members: {
              DBInstanceIdentifier: {},
              DBInstanceClass: {},
              Engine: {},
              DBInstanceStatus: {},
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
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {},
              BackupRetentionPeriod: {
                type: 'integer'
              },
              VpcSecurityGroups: {
                shape: 'S10'
              },
              AvailabilityZone: {},
              DBSubnetGroup: {
                shape: 'S1c'
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
                    type: 'structure',
                    members: {
                      LogTypesToEnable: {
                        shape: 'St'
                      },
                      LogTypesToDisable: {
                        shape: 'St'
                      }
                    }
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              EngineVersion: {},
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              PubliclyAccessible: {
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
              DBClusterIdentifier: {},
              StorageEncrypted: {
                type: 'boolean'
              },
              KmsKeyId: {},
              DbiResourceId: {},
              CACertificateIdentifier: {},
              CopyTagsToSnapshot: {
                type: 'boolean'
              },
              PromotionTier: {
                type: 'integer'
              },
              DBInstanceArn: {},
              EnabledCloudwatchLogsExports: {
                shape: 'St'
              },
              CertificateDetails: {
                type: 'structure',
                members: {
                  CAIdentifier: {},
                  ValidTill: {
                    type: 'timestamp'
                  }
                }
              },
              PerformanceInsightsEnabled: {
                type: 'boolean'
              },
              PerformanceInsightsKMSKeyId: {}
            },
            wrapper: true
          },
          S1c: {
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
                      shape: 'S1f'
                    },
                    SubnetStatus: {}
                  }
                }
              },
              DBSubnetGroupArn: {}
            },
            wrapper: true
          },
          S1f: {
            type: 'structure',
            members: {
              Name: {}
            },
            wrapper: true
          },
          S1m: {
            type: 'list',
            member: {
              locationName: 'SubnetIdentifier'
            }
          },
          S1s: {
            type: 'structure',
            members: {
              GlobalClusterIdentifier: {},
              GlobalClusterResourceId: {},
              GlobalClusterArn: {},
              Status: {},
              Engine: {},
              EngineVersion: {},
              DatabaseName: {},
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
          S29: {
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
          S2k: {
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
          S2p: {
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
                      shape: 'S2s'
                    }
                  }
                }
              }
            },
            wrapper: true
          },
          S2s: {
            type: 'list',
            member: {
              locationName: 'AttributeValue'
            }
          },
          S4a: {
            type: 'structure',
            members: {
              DBClusterParameterGroupName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e47828a9efcd75e478303cf40df3e199b173045e.js.map