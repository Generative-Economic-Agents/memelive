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
          protocols: ['query'],
          serviceAbbreviation: 'Amazon RDS',
          serviceFullName: 'Amazon Relational Database Service',
          serviceId: 'RDS',
          signatureVersion: 'v4',
          uid: 'rds-2014-10-31',
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
          AddRoleToDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'RoleArn', 'FeatureName'],
              members: {
                DBInstanceIdentifier: {},
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
                  shape: 'S6'
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
                  shape: 'Sb'
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
                  shape: 'Sf'
                }
              }
            }
          },
          AuthorizeDBSecurityGroupIngress: {
            input: {
              type: 'structure',
              required: ['DBSecurityGroupName'],
              members: {
                DBSecurityGroupName: {},
                CIDRIP: {},
                EC2SecurityGroupName: {},
                EC2SecurityGroupId: {},
                EC2SecurityGroupOwnerId: {}
              }
            },
            output: {
              resultWrapper: 'AuthorizeDBSecurityGroupIngressResult',
              type: 'structure',
              members: {
                DBSecurityGroup: {
                  shape: 'Sl'
                }
              }
            }
          },
          BacktrackDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'BacktrackTo'],
              members: {
                DBClusterIdentifier: {},
                BacktrackTo: {
                  type: 'timestamp'
                },
                Force: {
                  type: 'boolean'
                },
                UseEarliestTimeOnPointInTimeUnavailable: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'Ss',
              resultWrapper: 'BacktrackDBClusterResult'
            }
          },
          CancelExportTask: {
            input: {
              type: 'structure',
              required: ['ExportTaskIdentifier'],
              members: {
                ExportTaskIdentifier: {}
              }
            },
            output: {
              shape: 'Su',
              resultWrapper: 'CancelExportTaskResult'
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
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CopyDBClusterParameterGroupResult',
              type: 'structure',
              members: {
                DBClusterParameterGroup: {
                  shape: 'S10'
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
                  shape: 'Sb'
                },
                SourceRegion: {}
              }
            },
            output: {
              resultWrapper: 'CopyDBClusterSnapshotResult',
              type: 'structure',
              members: {
                DBClusterSnapshot: {
                  shape: 'S13'
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
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CopyDBParameterGroupResult',
              type: 'structure',
              members: {
                DBParameterGroup: {
                  shape: 'S18'
                }
              }
            }
          },
          CopyDBSnapshot: {
            input: {
              type: 'structure',
              required: ['SourceDBSnapshotIdentifier', 'TargetDBSnapshotIdentifier'],
              members: {
                SourceDBSnapshotIdentifier: {},
                TargetDBSnapshotIdentifier: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'Sb'
                },
                CopyTags: {
                  type: 'boolean'
                },
                PreSignedUrl: {},
                OptionGroupName: {},
                TargetCustomAvailabilityZone: {},
                CopyOptionGroup: {
                  type: 'boolean'
                },
                SourceRegion: {}
              }
            },
            output: {
              resultWrapper: 'CopyDBSnapshotResult',
              type: 'structure',
              members: {
                DBSnapshot: {
                  shape: 'S1b'
                }
              }
            }
          },
          CopyOptionGroup: {
            input: {
              type: 'structure',
              required: ['SourceOptionGroupIdentifier', 'TargetOptionGroupIdentifier', 'TargetOptionGroupDescription'],
              members: {
                SourceOptionGroupIdentifier: {},
                TargetOptionGroupIdentifier: {},
                TargetOptionGroupDescription: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CopyOptionGroupResult',
              type: 'structure',
              members: {
                OptionGroup: {
                  shape: 'S1g'
                }
              }
            }
          },
          CreateBlueGreenDeployment: {
            input: {
              type: 'structure',
              required: ['BlueGreenDeploymentName', 'Source'],
              members: {
                BlueGreenDeploymentName: {},
                Source: {},
                TargetEngineVersion: {},
                TargetDBParameterGroupName: {},
                TargetDBClusterParameterGroupName: {},
                Tags: {
                  shape: 'Sb'
                },
                TargetDBInstanceClass: {},
                UpgradeTargetStorageConfig: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'CreateBlueGreenDeploymentResult',
              type: 'structure',
              members: {
                BlueGreenDeployment: {
                  shape: 'S1x'
                }
              }
            }
          },
          CreateCustomDBEngineVersion: {
            input: {
              type: 'structure',
              required: ['Engine', 'EngineVersion'],
              members: {
                Engine: {},
                EngineVersion: {},
                DatabaseInstallationFilesS3BucketName: {},
                DatabaseInstallationFilesS3Prefix: {},
                ImageId: {},
                KMSKeyId: {},
                Description: {},
                Manifest: {},
                Tags: {
                  shape: 'Sb'
                },
                SourceCustomDbEngineVersionIdentifier: {},
                UseAwsProvidedLatestImage: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S2g',
              resultWrapper: 'CreateCustomDBEngineVersionResult'
            }
          },
          CreateDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'Engine'],
              members: {
                AvailabilityZones: {
                  shape: 'S14'
                },
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                CharacterSetName: {},
                DatabaseName: {},
                DBClusterIdentifier: {},
                DBClusterParameterGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'S2t'
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
                  shape: 'Sb'
                },
                StorageEncrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                PreSignedUrl: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                BacktrackWindow: {
                  type: 'long'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                EngineMode: {},
                ScalingConfiguration: {
                  shape: 'S2v'
                },
                RdsCustomClusterConfiguration: {
                  shape: 'S2w'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                GlobalClusterIdentifier: {},
                EnableHttpEndpoint: {
                  type: 'boolean'
                },
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                Domain: {},
                DomainIAMRoleName: {},
                EnableGlobalWriteForwarding: {
                  type: 'boolean'
                },
                DBClusterInstanceClass: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                StorageType: {},
                Iops: {
                  type: 'integer'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                MonitoringInterval: {
                  type: 'integer'
                },
                MonitoringRoleArn: {},
                EnablePerformanceInsights: {
                  type: 'boolean'
                },
                PerformanceInsightsKMSKeyId: {},
                PerformanceInsightsRetentionPeriod: {
                  type: 'integer'
                },
                EnableLimitlessDatabase: {
                  type: 'boolean'
                },
                ServerlessV2ScalingConfiguration: {
                  shape: 'S2y'
                },
                NetworkType: {},
                DBSystemId: {},
                ManageMasterUserPassword: {
                  type: 'boolean'
                },
                MasterUserSecretKmsKeyId: {},
                EnableLocalWriteForwarding: {
                  type: 'boolean'
                },
                CACertificateIdentifier: {},
                EngineLifecycleSupport: {},
                SourceRegion: {}
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S31'
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
                  shape: 'Sv'
                },
                ExcludedMembers: {
                  shape: 'Sv'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              shape: 'S3q',
              resultWrapper: 'CreateDBClusterEndpointResult'
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
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterParameterGroupResult',
              type: 'structure',
              members: {
                DBClusterParameterGroup: {
                  shape: 'S10'
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
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBClusterSnapshotResult',
              type: 'structure',
              members: {
                DBClusterSnapshot: {
                  shape: 'S13'
                }
              }
            }
          },
          CreateDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'DBInstanceClass', 'Engine'],
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
                  shape: 'S3w'
                },
                VpcSecurityGroupIds: {
                  shape: 'S2t'
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
                NcharCharacterSetName: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sb'
                },
                DBClusterIdentifier: {},
                StorageType: {},
                TdeCredentialArn: {},
                TdeCredentialPassword: {},
                StorageEncrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                Domain: {},
                DomainFqdn: {},
                DomainOu: {},
                DomainAuthSecretArn: {},
                DomainDnsIps: {
                  shape: 'Sv'
                },
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
                PerformanceInsightsRetentionPeriod: {
                  type: 'integer'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                ProcessorFeatures: {
                  shape: 'S1c'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                MaxAllocatedStorage: {
                  type: 'integer'
                },
                EnableCustomerOwnedIp: {
                  type: 'boolean'
                },
                CustomIamInstanceProfile: {},
                BackupTarget: {},
                NetworkType: {},
                StorageThroughput: {
                  type: 'integer'
                },
                ManageMasterUserPassword: {
                  type: 'boolean'
                },
                MasterUserSecretKmsKeyId: {},
                CACertificateIdentifier: {},
                DBSystemId: {},
                DedicatedLogVolume: {
                  type: 'boolean'
                },
                MultiTenant: {
                  type: 'boolean'
                },
                EngineLifecycleSupport: {}
              }
            },
            output: {
              resultWrapper: 'CreateDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
                }
              }
            }
          },
          CreateDBInstanceReadReplica: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                SourceDBInstanceIdentifier: {},
                DBInstanceClass: {},
                AvailabilityZone: {},
                Port: {
                  type: 'integer'
                },
                MultiAZ: {
                  type: 'boolean'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                DBParameterGroupName: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sb'
                },
                DBSubnetGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'S2t'
                },
                StorageType: {},
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                MonitoringInterval: {
                  type: 'integer'
                },
                MonitoringRoleArn: {},
                KmsKeyId: {},
                PreSignedUrl: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                EnablePerformanceInsights: {
                  type: 'boolean'
                },
                PerformanceInsightsKMSKeyId: {},
                PerformanceInsightsRetentionPeriod: {
                  type: 'integer'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                ProcessorFeatures: {
                  shape: 'S1c'
                },
                UseDefaultProcessorFeatures: {
                  type: 'boolean'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                Domain: {},
                DomainIAMRoleName: {},
                DomainFqdn: {},
                DomainOu: {},
                DomainAuthSecretArn: {},
                DomainDnsIps: {
                  shape: 'Sv'
                },
                ReplicaMode: {},
                MaxAllocatedStorage: {
                  type: 'integer'
                },
                CustomIamInstanceProfile: {},
                NetworkType: {},
                StorageThroughput: {
                  type: 'integer'
                },
                EnableCustomerOwnedIp: {
                  type: 'boolean'
                },
                AllocatedStorage: {
                  type: 'integer'
                },
                SourceDBClusterIdentifier: {},
                DedicatedLogVolume: {
                  type: 'boolean'
                },
                UpgradeStorageConfig: {
                  type: 'boolean'
                },
                CACertificateIdentifier: {},
                SourceRegion: {}
              }
            },
            output: {
              resultWrapper: 'CreateDBInstanceReadReplicaResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
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
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBParameterGroupResult',
              type: 'structure',
              members: {
                DBParameterGroup: {
                  shape: 'S18'
                }
              }
            }
          },
          CreateDBProxy: {
            input: {
              type: 'structure',
              required: ['DBProxyName', 'EngineFamily', 'Auth', 'RoleArn', 'VpcSubnetIds'],
              members: {
                DBProxyName: {},
                EngineFamily: {},
                Auth: {
                  shape: 'S4q'
                },
                RoleArn: {},
                VpcSubnetIds: {
                  shape: 'Sv'
                },
                VpcSecurityGroupIds: {
                  shape: 'Sv'
                },
                RequireTLS: {
                  type: 'boolean'
                },
                IdleClientTimeout: {
                  type: 'integer'
                },
                DebugLogging: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBProxyResult',
              type: 'structure',
              members: {
                DBProxy: {
                  shape: 'S4w'
                }
              }
            }
          },
          CreateDBProxyEndpoint: {
            input: {
              type: 'structure',
              required: ['DBProxyName', 'DBProxyEndpointName', 'VpcSubnetIds'],
              members: {
                DBProxyName: {},
                DBProxyEndpointName: {},
                VpcSubnetIds: {
                  shape: 'Sv'
                },
                VpcSecurityGroupIds: {
                  shape: 'Sv'
                },
                TargetRole: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBProxyEndpointResult',
              type: 'structure',
              members: {
                DBProxyEndpoint: {
                  shape: 'S55'
                }
              }
            }
          },
          CreateDBSecurityGroup: {
            input: {
              type: 'structure',
              required: ['DBSecurityGroupName', 'DBSecurityGroupDescription'],
              members: {
                DBSecurityGroupName: {},
                DBSecurityGroupDescription: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBSecurityGroupResult',
              type: 'structure',
              members: {
                DBSecurityGroup: {
                  shape: 'Sl'
                }
              }
            }
          },
          CreateDBShardGroup: {
            input: {
              type: 'structure',
              required: ['DBShardGroupIdentifier', 'DBClusterIdentifier', 'MaxACU'],
              members: {
                DBShardGroupIdentifier: {},
                DBClusterIdentifier: {},
                ComputeRedundancy: {
                  type: 'integer'
                },
                MaxACU: {
                  type: 'double'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S5a',
              resultWrapper: 'CreateDBShardGroupResult'
            }
          },
          CreateDBSnapshot: {
            input: {
              type: 'structure',
              required: ['DBSnapshotIdentifier', 'DBInstanceIdentifier'],
              members: {
                DBSnapshotIdentifier: {},
                DBInstanceIdentifier: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBSnapshotResult',
              type: 'structure',
              members: {
                DBSnapshot: {
                  shape: 'S1b'
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
                  shape: 'S5f'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBSubnetGroupResult',
              type: 'structure',
              members: {
                DBSubnetGroup: {
                  shape: 'S42'
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
                  shape: 'S8'
                },
                SourceIds: {
                  shape: 'S7'
                },
                Enabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S6'
                }
              }
            }
          },
          CreateGlobalCluster: {
            input: {
              type: 'structure',
              members: {
                GlobalClusterIdentifier: {},
                SourceDBClusterIdentifier: {},
                Engine: {},
                EngineVersion: {},
                EngineLifecycleSupport: {},
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
                  shape: 'S5l'
                }
              }
            }
          },
          CreateIntegration: {
            input: {
              type: 'structure',
              required: ['SourceArn', 'TargetArn', 'IntegrationName'],
              members: {
                SourceArn: {},
                TargetArn: {},
                IntegrationName: {},
                KMSKeyId: {},
                AdditionalEncryptionContext: {
                  shape: 'S5w'
                },
                Tags: {
                  shape: 'Sb'
                },
                DataFilter: {},
                Description: {}
              }
            },
            output: {
              shape: 'S5z',
              resultWrapper: 'CreateIntegrationResult'
            }
          },
          CreateOptionGroup: {
            input: {
              type: 'structure',
              required: ['OptionGroupName', 'EngineName', 'MajorEngineVersion', 'OptionGroupDescription'],
              members: {
                OptionGroupName: {},
                EngineName: {},
                MajorEngineVersion: {},
                OptionGroupDescription: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateOptionGroupResult',
              type: 'structure',
              members: {
                OptionGroup: {
                  shape: 'S1g'
                }
              }
            }
          },
          CreateTenantDatabase: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'TenantDBName', 'MasterUsername', 'MasterUserPassword'],
              members: {
                DBInstanceIdentifier: {},
                TenantDBName: {},
                MasterUsername: {},
                MasterUserPassword: {
                  shape: 'S67'
                },
                CharacterSetName: {},
                NcharCharacterSetName: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateTenantDatabaseResult',
              type: 'structure',
              members: {
                TenantDatabase: {
                  shape: 'S69'
                }
              }
            }
          },
          DeleteBlueGreenDeployment: {
            input: {
              type: 'structure',
              required: ['BlueGreenDeploymentIdentifier'],
              members: {
                BlueGreenDeploymentIdentifier: {},
                DeleteTarget: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteBlueGreenDeploymentResult',
              type: 'structure',
              members: {
                BlueGreenDeployment: {
                  shape: 'S1x'
                }
              }
            }
          },
          DeleteCustomDBEngineVersion: {
            input: {
              type: 'structure',
              required: ['Engine', 'EngineVersion'],
              members: {
                Engine: {},
                EngineVersion: {}
              }
            },
            output: {
              shape: 'S2g',
              resultWrapper: 'DeleteCustomDBEngineVersionResult'
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
                FinalDBSnapshotIdentifier: {},
                DeleteAutomatedBackups: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S31'
                }
              }
            }
          },
          DeleteDBClusterAutomatedBackup: {
            input: {
              type: 'structure',
              required: ['DbClusterResourceId'],
              members: {
                DbClusterResourceId: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBClusterAutomatedBackupResult',
              type: 'structure',
              members: {
                DBClusterAutomatedBackup: {
                  shape: 'S6i'
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
              shape: 'S3q',
              resultWrapper: 'DeleteDBClusterEndpointResult'
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
                  shape: 'S13'
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
                FinalDBSnapshotIdentifier: {},
                DeleteAutomatedBackups: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
                }
              }
            }
          },
          DeleteDBInstanceAutomatedBackup: {
            input: {
              type: 'structure',
              members: {
                DbiResourceId: {},
                DBInstanceAutomatedBackupsArn: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBInstanceAutomatedBackupResult',
              type: 'structure',
              members: {
                DBInstanceAutomatedBackup: {
                  shape: 'S6s'
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
          DeleteDBProxy: {
            input: {
              type: 'structure',
              required: ['DBProxyName'],
              members: {
                DBProxyName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBProxyResult',
              type: 'structure',
              members: {
                DBProxy: {
                  shape: 'S4w'
                }
              }
            }
          },
          DeleteDBProxyEndpoint: {
            input: {
              type: 'structure',
              required: ['DBProxyEndpointName'],
              members: {
                DBProxyEndpointName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBProxyEndpointResult',
              type: 'structure',
              members: {
                DBProxyEndpoint: {
                  shape: 'S55'
                }
              }
            }
          },
          DeleteDBSecurityGroup: {
            input: {
              type: 'structure',
              required: ['DBSecurityGroupName'],
              members: {
                DBSecurityGroupName: {}
              }
            }
          },
          DeleteDBShardGroup: {
            input: {
              type: 'structure',
              required: ['DBShardGroupIdentifier'],
              members: {
                DBShardGroupIdentifier: {}
              }
            },
            output: {
              shape: 'S5a',
              resultWrapper: 'DeleteDBShardGroupResult'
            }
          },
          DeleteDBSnapshot: {
            input: {
              type: 'structure',
              required: ['DBSnapshotIdentifier'],
              members: {
                DBSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBSnapshotResult',
              type: 'structure',
              members: {
                DBSnapshot: {
                  shape: 'S1b'
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
                  shape: 'S6'
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
                  shape: 'S5l'
                }
              }
            }
          },
          DeleteIntegration: {
            input: {
              type: 'structure',
              required: ['IntegrationIdentifier'],
              members: {
                IntegrationIdentifier: {}
              }
            },
            output: {
              shape: 'S5z',
              resultWrapper: 'DeleteIntegrationResult'
            }
          },
          DeleteOptionGroup: {
            input: {
              type: 'structure',
              required: ['OptionGroupName'],
              members: {
                OptionGroupName: {}
              }
            }
          },
          DeleteTenantDatabase: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'TenantDBName'],
              members: {
                DBInstanceIdentifier: {},
                TenantDBName: {},
                SkipFinalSnapshot: {
                  type: 'boolean'
                },
                FinalDBSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteTenantDatabaseResult',
              type: 'structure',
              members: {
                TenantDatabase: {
                  shape: 'S69'
                }
              }
            }
          },
          DeregisterDBProxyTargets: {
            input: {
              type: 'structure',
              required: ['DBProxyName'],
              members: {
                DBProxyName: {},
                TargetGroupName: {},
                DBInstanceIdentifiers: {
                  shape: 'Sv'
                },
                DBClusterIdentifiers: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'DeregisterDBProxyTargetsResult',
              type: 'structure',
              members: {}
            }
          },
          DescribeAccountAttributes: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'DescribeAccountAttributesResult',
              type: 'structure',
              members: {
                AccountQuotas: {
                  type: 'list',
                  member: {
                    locationName: 'AccountQuota',
                    type: 'structure',
                    members: {
                      AccountQuotaName: {},
                      Used: {
                        type: 'long'
                      },
                      Max: {
                        type: 'long'
                      }
                    },
                    wrapper: true
                  }
                }
              }
            }
          },
          DescribeBlueGreenDeployments: {
            input: {
              type: 'structure',
              members: {
                BlueGreenDeploymentIdentifier: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeBlueGreenDeploymentsResult',
              type: 'structure',
              members: {
                BlueGreenDeployments: {
                  type: 'list',
                  member: {
                    shape: 'S1x'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeCertificates: {
            input: {
              type: 'structure',
              members: {
                CertificateIdentifier: {},
                Filters: {
                  shape: 'S7k'
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
                DefaultCertificateForNewLaunches: {},
                Certificates: {
                  type: 'list',
                  member: {
                    shape: 'S7t',
                    locationName: 'Certificate'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBClusterAutomatedBackups: {
            input: {
              type: 'structure',
              members: {
                DbClusterResourceId: {},
                DBClusterIdentifier: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBClusterAutomatedBackupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBClusterAutomatedBackups: {
                  type: 'list',
                  member: {
                    shape: 'S6i',
                    locationName: 'DBClusterAutomatedBackup'
                  }
                }
              }
            }
          },
          DescribeDBClusterBacktracks: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {},
                BacktrackIdentifier: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBClusterBacktracksResult',
              type: 'structure',
              members: {
                Marker: {},
                DBClusterBacktracks: {
                  type: 'list',
                  member: {
                    shape: 'Ss',
                    locationName: 'DBClusterBacktrack'
                  }
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
                  shape: 'S7k'
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
                    shape: 'S3q',
                    locationName: 'DBClusterEndpointList'
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
                  shape: 'S7k'
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
                    shape: 'S10',
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
                  shape: 'S7k'
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
                  shape: 'S88'
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
                  shape: 'S8d'
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
                  shape: 'S7k'
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
                },
                DbClusterResourceId: {}
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
                    shape: 'S13',
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
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                IncludeShared: {
                  type: 'boolean'
                }
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
                    shape: 'S31',
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
                  shape: 'S7k'
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
                },
                IncludeAll: {
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
                    shape: 'S2g',
                    locationName: 'DBEngineVersion'
                  }
                }
              }
            }
          },
          DescribeDBInstanceAutomatedBackups: {
            input: {
              type: 'structure',
              members: {
                DbiResourceId: {},
                DBInstanceIdentifier: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                DBInstanceAutomatedBackupsArn: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBInstanceAutomatedBackupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBInstanceAutomatedBackups: {
                  type: 'list',
                  member: {
                    shape: 'S6s',
                    locationName: 'DBInstanceAutomatedBackup'
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
                  shape: 'S7k'
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
                    shape: 'S3y',
                    locationName: 'DBInstance'
                  }
                }
              }
            }
          },
          DescribeDBLogFiles: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                FilenameContains: {},
                FileLastWritten: {
                  type: 'long'
                },
                FileSize: {
                  type: 'long'
                },
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBLogFilesResult',
              type: 'structure',
              members: {
                DescribeDBLogFiles: {
                  type: 'list',
                  member: {
                    locationName: 'DescribeDBLogFilesDetails',
                    type: 'structure',
                    members: {
                      LogFileName: {},
                      LastWritten: {
                        type: 'long'
                      },
                      Size: {
                        type: 'long'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBParameterGroups: {
            input: {
              type: 'structure',
              members: {
                DBParameterGroupName: {},
                Filters: {
                  shape: 'S7k'
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
                    shape: 'S18',
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
                  shape: 'S7k'
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
                  shape: 'S88'
                },
                Marker: {}
              }
            }
          },
          DescribeDBProxies: {
            input: {
              type: 'structure',
              members: {
                DBProxyName: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDBProxiesResult',
              type: 'structure',
              members: {
                DBProxies: {
                  type: 'list',
                  member: {
                    shape: 'S4w'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBProxyEndpoints: {
            input: {
              type: 'structure',
              members: {
                DBProxyName: {},
                DBProxyEndpointName: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDBProxyEndpointsResult',
              type: 'structure',
              members: {
                DBProxyEndpoints: {
                  type: 'list',
                  member: {
                    shape: 'S55'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBProxyTargetGroups: {
            input: {
              type: 'structure',
              required: ['DBProxyName'],
              members: {
                DBProxyName: {},
                TargetGroupName: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDBProxyTargetGroupsResult',
              type: 'structure',
              members: {
                TargetGroups: {
                  type: 'list',
                  member: {
                    shape: 'S9e'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBProxyTargets: {
            input: {
              type: 'structure',
              required: ['DBProxyName'],
              members: {
                DBProxyName: {},
                TargetGroupName: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDBProxyTargetsResult',
              type: 'structure',
              members: {
                Targets: {
                  shape: 'S9i'
                },
                Marker: {}
              }
            }
          },
          DescribeDBRecommendations: {
            input: {
              type: 'structure',
              members: {
                LastUpdatedAfter: {
                  type: 'timestamp'
                },
                LastUpdatedBefore: {
                  type: 'timestamp'
                },
                Locale: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBRecommendationsResult',
              type: 'structure',
              members: {
                DBRecommendations: {
                  type: 'list',
                  member: {
                    shape: 'S9s'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBSecurityGroups: {
            input: {
              type: 'structure',
              members: {
                DBSecurityGroupName: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBSecurityGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBSecurityGroups: {
                  type: 'list',
                  member: {
                    shape: 'Sl',
                    locationName: 'DBSecurityGroup'
                  }
                }
              }
            }
          },
          DescribeDBShardGroups: {
            input: {
              type: 'structure',
              members: {
                DBShardGroupIdentifier: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDBShardGroupsResult',
              type: 'structure',
              members: {
                DBShardGroups: {
                  type: 'list',
                  member: {
                    shape: 'S5a',
                    locationName: 'DBShardGroup'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBSnapshotAttributes: {
            input: {
              type: 'structure',
              required: ['DBSnapshotIdentifier'],
              members: {
                DBSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBSnapshotAttributesResult',
              type: 'structure',
              members: {
                DBSnapshotAttributesResult: {
                  shape: 'Sal'
                }
              }
            }
          },
          DescribeDBSnapshotTenantDatabases: {
            input: {
              type: 'structure',
              members: {
                DBInstanceIdentifier: {},
                DBSnapshotIdentifier: {},
                SnapshotType: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                DbiResourceId: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBSnapshotTenantDatabasesResult',
              type: 'structure',
              members: {
                Marker: {},
                DBSnapshotTenantDatabases: {
                  type: 'list',
                  member: {
                    locationName: 'DBSnapshotTenantDatabase',
                    type: 'structure',
                    members: {
                      DBSnapshotIdentifier: {},
                      DBInstanceIdentifier: {},
                      DbiResourceId: {},
                      EngineName: {},
                      SnapshotType: {},
                      TenantDatabaseCreateTime: {
                        type: 'timestamp'
                      },
                      TenantDBName: {},
                      MasterUsername: {},
                      TenantDatabaseResourceId: {},
                      CharacterSetName: {},
                      DBSnapshotTenantDatabaseARN: {},
                      NcharCharacterSetName: {},
                      TagList: {
                        shape: 'Sb'
                      }
                    },
                    wrapper: true
                  }
                }
              }
            }
          },
          DescribeDBSnapshots: {
            input: {
              type: 'structure',
              members: {
                DBInstanceIdentifier: {},
                DBSnapshotIdentifier: {},
                SnapshotType: {},
                Filters: {
                  shape: 'S7k'
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
                },
                DbiResourceId: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBSnapshotsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBSnapshots: {
                  type: 'list',
                  member: {
                    shape: 'S1b',
                    locationName: 'DBSnapshot'
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
                  shape: 'S7k'
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
                    shape: 'S42',
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
                  shape: 'S7k'
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
                  shape: 'Sb0'
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
                  shape: 'S7k'
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
                  shape: 'Sb0'
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
                  shape: 'S7k'
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
                        shape: 'S8'
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
                  shape: 'S7k'
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
                    shape: 'S6',
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
                  shape: 'S8'
                },
                Filters: {
                  shape: 'S7k'
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
                        shape: 'S8'
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
          DescribeExportTasks: {
            input: {
              type: 'structure',
              members: {
                ExportTaskIdentifier: {},
                SourceArn: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                },
                SourceType: {}
              }
            },
            output: {
              resultWrapper: 'DescribeExportTasksResult',
              type: 'structure',
              members: {
                Marker: {},
                ExportTasks: {
                  type: 'list',
                  member: {
                    shape: 'Su',
                    locationName: 'ExportTask'
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
                  shape: 'S7k'
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
                    shape: 'S5l',
                    locationName: 'GlobalClusterMember'
                  }
                }
              }
            }
          },
          DescribeIntegrations: {
            input: {
              type: 'structure',
              members: {
                IntegrationIdentifier: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeIntegrationsResult',
              type: 'structure',
              members: {
                Marker: {},
                Integrations: {
                  type: 'list',
                  member: {
                    shape: 'S5z',
                    locationName: 'Integration'
                  }
                }
              }
            }
          },
          DescribeOptionGroupOptions: {
            input: {
              type: 'structure',
              required: ['EngineName'],
              members: {
                EngineName: {},
                MajorEngineVersion: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeOptionGroupOptionsResult',
              type: 'structure',
              members: {
                OptionGroupOptions: {
                  type: 'list',
                  member: {
                    locationName: 'OptionGroupOption',
                    type: 'structure',
                    members: {
                      Name: {},
                      Description: {},
                      EngineName: {},
                      MajorEngineVersion: {},
                      MinimumRequiredMinorEngineVersion: {},
                      PortRequired: {
                        type: 'boolean'
                      },
                      DefaultPort: {
                        type: 'integer'
                      },
                      OptionsDependedOn: {
                        type: 'list',
                        member: {
                          locationName: 'OptionName'
                        }
                      },
                      OptionsConflictsWith: {
                        type: 'list',
                        member: {
                          locationName: 'OptionConflictName'
                        }
                      },
                      Persistent: {
                        type: 'boolean'
                      },
                      Permanent: {
                        type: 'boolean'
                      },
                      RequiresAutoMinorEngineVersionUpgrade: {
                        type: 'boolean'
                      },
                      VpcOnly: {
                        type: 'boolean'
                      },
                      SupportsOptionVersionDowngrade: {
                        type: 'boolean'
                      },
                      OptionGroupOptionSettings: {
                        type: 'list',
                        member: {
                          locationName: 'OptionGroupOptionSetting',
                          type: 'structure',
                          members: {
                            SettingName: {},
                            SettingDescription: {},
                            DefaultValue: {},
                            ApplyType: {},
                            AllowedValues: {},
                            IsModifiable: {
                              type: 'boolean'
                            },
                            IsRequired: {
                              type: 'boolean'
                            },
                            MinimumEngineVersionPerAllowedValue: {
                              type: 'list',
                              member: {
                                locationName: 'MinimumEngineVersionPerAllowedValue',
                                type: 'structure',
                                members: {
                                  AllowedValue: {},
                                  MinimumEngineVersion: {}
                                }
                              }
                            }
                          }
                        }
                      },
                      OptionGroupOptionVersions: {
                        type: 'list',
                        member: {
                          locationName: 'OptionVersion',
                          type: 'structure',
                          members: {
                            Version: {},
                            IsDefault: {
                              type: 'boolean'
                            }
                          }
                        }
                      },
                      CopyableCrossAccount: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeOptionGroups: {
            input: {
              type: 'structure',
              members: {
                OptionGroupName: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                },
                EngineName: {},
                MajorEngineVersion: {}
              }
            },
            output: {
              resultWrapper: 'DescribeOptionGroupsResult',
              type: 'structure',
              members: {
                OptionGroupsList: {
                  type: 'list',
                  member: {
                    shape: 'S1g',
                    locationName: 'OptionGroup'
                  }
                },
                Marker: {}
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
                AvailabilityZoneGroup: {},
                Vpc: {
                  type: 'boolean'
                },
                Filters: {
                  shape: 'S7k'
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
                      AvailabilityZoneGroup: {},
                      AvailabilityZones: {
                        type: 'list',
                        member: {
                          shape: 'S45',
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
                      AvailableProcessorFeatures: {
                        shape: 'Sc9'
                      },
                      SupportedEngineModes: {
                        shape: 'S2m'
                      },
                      SupportsStorageAutoscaling: {
                        type: 'boolean'
                      },
                      SupportsKerberosAuthentication: {
                        type: 'boolean'
                      },
                      OutpostCapable: {
                        type: 'boolean'
                      },
                      SupportedActivityStreamModes: {
                        type: 'list',
                        member: {}
                      },
                      SupportsGlobalDatabases: {
                        type: 'boolean'
                      },
                      SupportsClusters: {
                        type: 'boolean'
                      },
                      SupportedNetworkTypes: {
                        shape: 'Sv'
                      },
                      SupportsStorageThroughput: {
                        type: 'boolean'
                      },
                      MinStorageThroughputPerDbInstance: {
                        type: 'integer'
                      },
                      MaxStorageThroughputPerDbInstance: {
                        type: 'integer'
                      },
                      MinStorageThroughputPerIops: {
                        type: 'double'
                      },
                      MaxStorageThroughputPerIops: {
                        type: 'double'
                      },
                      SupportsDedicatedLogVolume: {
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
                  shape: 'S7k'
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
                    shape: 'Sf',
                    locationName: 'ResourcePendingMaintenanceActions'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeReservedDBInstances: {
            input: {
              type: 'structure',
              members: {
                ReservedDBInstanceId: {},
                ReservedDBInstancesOfferingId: {},
                DBInstanceClass: {},
                Duration: {},
                ProductDescription: {},
                OfferingType: {},
                MultiAZ: {
                  type: 'boolean'
                },
                LeaseId: {},
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedDBInstancesResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedDBInstances: {
                  type: 'list',
                  member: {
                    shape: 'Sci',
                    locationName: 'ReservedDBInstance'
                  }
                }
              }
            }
          },
          DescribeReservedDBInstancesOfferings: {
            input: {
              type: 'structure',
              members: {
                ReservedDBInstancesOfferingId: {},
                DBInstanceClass: {},
                Duration: {},
                ProductDescription: {},
                OfferingType: {},
                MultiAZ: {
                  type: 'boolean'
                },
                Filters: {
                  shape: 'S7k'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedDBInstancesOfferingsResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedDBInstancesOfferings: {
                  type: 'list',
                  member: {
                    locationName: 'ReservedDBInstancesOffering',
                    type: 'structure',
                    members: {
                      ReservedDBInstancesOfferingId: {},
                      DBInstanceClass: {},
                      Duration: {
                        type: 'integer'
                      },
                      FixedPrice: {
                        type: 'double'
                      },
                      UsagePrice: {
                        type: 'double'
                      },
                      CurrencyCode: {},
                      ProductDescription: {},
                      OfferingType: {},
                      MultiAZ: {
                        type: 'boolean'
                      },
                      RecurringCharges: {
                        shape: 'Scj'
                      }
                    },
                    wrapper: true
                  }
                }
              }
            }
          },
          DescribeSourceRegions: {
            input: {
              type: 'structure',
              members: {
                RegionName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                Filters: {
                  shape: 'S7k'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeSourceRegionsResult',
              type: 'structure',
              members: {
                Marker: {},
                SourceRegions: {
                  type: 'list',
                  member: {
                    locationName: 'SourceRegion',
                    type: 'structure',
                    members: {
                      RegionName: {},
                      Endpoint: {},
                      Status: {},
                      SupportsDBInstanceAutomatedBackupsReplication: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeTenantDatabases: {
            input: {
              type: 'structure',
              members: {
                DBInstanceIdentifier: {},
                TenantDBName: {},
                Filters: {
                  shape: 'S7k'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTenantDatabasesResult',
              type: 'structure',
              members: {
                Marker: {},
                TenantDatabases: {
                  type: 'list',
                  member: {
                    shape: 'S69',
                    locationName: 'TenantDatabase'
                  }
                }
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
                            shape: 'Sd1'
                          },
                          ProvisionedIops: {
                            shape: 'Sd1'
                          },
                          IopsToStorageRatio: {
                            shape: 'Sd3'
                          },
                          SupportsStorageAutoscaling: {
                            type: 'boolean'
                          },
                          ProvisionedStorageThroughput: {
                            shape: 'Sd1'
                          },
                          StorageThroughputToIopsRatio: {
                            shape: 'Sd3'
                          }
                        }
                      }
                    },
                    ValidProcessorFeatures: {
                      shape: 'Sc9'
                    },
                    SupportsDedicatedLogVolume: {
                      type: 'boolean'
                    }
                  },
                  wrapper: true
                }
              }
            }
          },
          DisableHttpEndpoint: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              resultWrapper: 'DisableHttpEndpointResult',
              type: 'structure',
              members: {
                ResourceArn: {},
                HttpEndpointEnabled: {
                  type: 'boolean'
                }
              }
            }
          },
          DownloadDBLogFilePortion: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'LogFileName'],
              members: {
                DBInstanceIdentifier: {},
                LogFileName: {},
                Marker: {},
                NumberOfLines: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DownloadDBLogFilePortionResult',
              type: 'structure',
              members: {
                LogFileData: {},
                Marker: {},
                AdditionalDataPending: {
                  type: 'boolean'
                }
              }
            }
          },
          EnableHttpEndpoint: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              resultWrapper: 'EnableHttpEndpointResult',
              type: 'structure',
              members: {
                ResourceArn: {},
                HttpEndpointEnabled: {
                  type: 'boolean'
                }
              }
            }
          },
          FailoverDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
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
                  shape: 'S31'
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
                TargetDbClusterIdentifier: {},
                AllowDataLoss: {
                  type: 'boolean'
                },
                Switchover: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'FailoverGlobalClusterResult',
              type: 'structure',
              members: {
                GlobalCluster: {
                  shape: 'S5l'
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
                  shape: 'S7k'
                }
              }
            },
            output: {
              resultWrapper: 'ListTagsForResourceResult',
              type: 'structure',
              members: {
                TagList: {
                  shape: 'Sb'
                }
              }
            }
          },
          ModifyActivityStream: {
            input: {
              type: 'structure',
              members: {
                ResourceArn: {},
                AuditPolicyState: {}
              }
            },
            output: {
              resultWrapper: 'ModifyActivityStreamResult',
              type: 'structure',
              members: {
                KmsKeyId: {},
                KinesisStreamName: {},
                Status: {},
                Mode: {},
                EngineNativeAuditFieldsIncluded: {
                  type: 'boolean'
                },
                PolicyStatus: {}
              }
            }
          },
          ModifyCertificates: {
            input: {
              type: 'structure',
              members: {
                CertificateIdentifier: {},
                RemoveCustomerOverride: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyCertificatesResult',
              type: 'structure',
              members: {
                Certificate: {
                  shape: 'S7t'
                }
              }
            }
          },
          ModifyCurrentDBClusterCapacity: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {},
                Capacity: {
                  type: 'integer'
                },
                SecondsBeforeTimeout: {
                  type: 'integer'
                },
                TimeoutAction: {}
              }
            },
            output: {
              resultWrapper: 'ModifyCurrentDBClusterCapacityResult',
              type: 'structure',
              members: {
                DBClusterIdentifier: {},
                PendingCapacity: {
                  type: 'integer'
                },
                CurrentCapacity: {
                  type: 'integer'
                },
                SecondsBeforeTimeout: {
                  type: 'integer'
                },
                TimeoutAction: {}
              }
            }
          },
          ModifyCustomDBEngineVersion: {
            input: {
              type: 'structure',
              required: ['Engine', 'EngineVersion'],
              members: {
                Engine: {},
                EngineVersion: {},
                Description: {},
                Status: {}
              }
            },
            output: {
              shape: 'S2g',
              resultWrapper: 'ModifyCustomDBEngineVersionResult'
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
                  shape: 'S2t'
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
                BacktrackWindow: {
                  type: 'long'
                },
                CloudwatchLogsExportConfiguration: {
                  shape: 'Sdt'
                },
                EngineVersion: {},
                AllowMajorVersionUpgrade: {
                  type: 'boolean'
                },
                DBInstanceParameterGroupName: {},
                Domain: {},
                DomainIAMRoleName: {},
                ScalingConfiguration: {
                  shape: 'S2v'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                EnableHttpEndpoint: {
                  type: 'boolean'
                },
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                EnableGlobalWriteForwarding: {
                  type: 'boolean'
                },
                DBClusterInstanceClass: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                StorageType: {},
                Iops: {
                  type: 'integer'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                MonitoringInterval: {
                  type: 'integer'
                },
                MonitoringRoleArn: {},
                EnablePerformanceInsights: {
                  type: 'boolean'
                },
                PerformanceInsightsKMSKeyId: {},
                PerformanceInsightsRetentionPeriod: {
                  type: 'integer'
                },
                ServerlessV2ScalingConfiguration: {
                  shape: 'S2y'
                },
                NetworkType: {},
                ManageMasterUserPassword: {
                  type: 'boolean'
                },
                RotateMasterUserPassword: {
                  type: 'boolean'
                },
                MasterUserSecretKmsKeyId: {},
                EngineMode: {},
                AllowEngineModeChange: {
                  type: 'boolean'
                },
                EnableLocalWriteForwarding: {
                  type: 'boolean'
                },
                AwsBackupRecoveryPointArn: {},
                EnableLimitlessDatabase: {
                  type: 'boolean'
                },
                CACertificateIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'ModifyDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S31'
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
                  shape: 'Sv'
                },
                ExcludedMembers: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              shape: 'S3q',
              resultWrapper: 'ModifyDBClusterEndpointResult'
            }
          },
          ModifyDBClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBClusterParameterGroupName', 'Parameters'],
              members: {
                DBClusterParameterGroupName: {},
                Parameters: {
                  shape: 'S88'
                }
              }
            },
            output: {
              shape: 'Sdy',
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
                  shape: 'S8g'
                },
                ValuesToRemove: {
                  shape: 'S8g'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBClusterSnapshotAttributeResult',
              type: 'structure',
              members: {
                DBClusterSnapshotAttributesResult: {
                  shape: 'S8d'
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
                  shape: 'S3w'
                },
                VpcSecurityGroupIds: {
                  shape: 'S2t'
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
                TdeCredentialPassword: {},
                CACertificateIdentifier: {},
                Domain: {},
                DomainFqdn: {},
                DomainOu: {},
                DomainAuthSecretArn: {},
                DomainDnsIps: {
                  shape: 'Sv'
                },
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
                  type: 'boolean'
                },
                MonitoringRoleArn: {},
                DomainIAMRoleName: {},
                DisableDomain: {
                  type: 'boolean'
                },
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
                PerformanceInsightsRetentionPeriod: {
                  type: 'integer'
                },
                CloudwatchLogsExportConfiguration: {
                  shape: 'Sdt'
                },
                ProcessorFeatures: {
                  shape: 'S1c'
                },
                UseDefaultProcessorFeatures: {
                  type: 'boolean'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                MaxAllocatedStorage: {
                  type: 'integer'
                },
                CertificateRotationRestart: {
                  type: 'boolean'
                },
                ReplicaMode: {},
                EnableCustomerOwnedIp: {
                  type: 'boolean'
                },
                AwsBackupRecoveryPointArn: {},
                AutomationMode: {},
                ResumeFullAutomationModeMinutes: {
                  type: 'integer'
                },
                NetworkType: {},
                StorageThroughput: {
                  type: 'integer'
                },
                ManageMasterUserPassword: {
                  type: 'boolean'
                },
                RotateMasterUserPassword: {
                  type: 'boolean'
                },
                MasterUserSecretKmsKeyId: {},
                Engine: {},
                DedicatedLogVolume: {
                  type: 'boolean'
                },
                MultiTenant: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
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
                  shape: 'S88'
                }
              }
            },
            output: {
              shape: 'Se4',
              resultWrapper: 'ModifyDBParameterGroupResult'
            }
          },
          ModifyDBProxy: {
            input: {
              type: 'structure',
              required: ['DBProxyName'],
              members: {
                DBProxyName: {},
                NewDBProxyName: {},
                Auth: {
                  shape: 'S4q'
                },
                RequireTLS: {
                  type: 'boolean'
                },
                IdleClientTimeout: {
                  type: 'integer'
                },
                DebugLogging: {
                  type: 'boolean'
                },
                RoleArn: {},
                SecurityGroups: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBProxyResult',
              type: 'structure',
              members: {
                DBProxy: {
                  shape: 'S4w'
                }
              }
            }
          },
          ModifyDBProxyEndpoint: {
            input: {
              type: 'structure',
              required: ['DBProxyEndpointName'],
              members: {
                DBProxyEndpointName: {},
                NewDBProxyEndpointName: {},
                VpcSecurityGroupIds: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBProxyEndpointResult',
              type: 'structure',
              members: {
                DBProxyEndpoint: {
                  shape: 'S55'
                }
              }
            }
          },
          ModifyDBProxyTargetGroup: {
            input: {
              type: 'structure',
              required: ['TargetGroupName', 'DBProxyName'],
              members: {
                TargetGroupName: {},
                DBProxyName: {},
                ConnectionPoolConfig: {
                  type: 'structure',
                  members: {
                    MaxConnectionsPercent: {
                      type: 'integer'
                    },
                    MaxIdleConnectionsPercent: {
                      type: 'integer'
                    },
                    ConnectionBorrowTimeout: {
                      type: 'integer'
                    },
                    SessionPinningFilters: {
                      shape: 'Sv'
                    },
                    InitQuery: {}
                  }
                },
                NewName: {}
              }
            },
            output: {
              resultWrapper: 'ModifyDBProxyTargetGroupResult',
              type: 'structure',
              members: {
                DBProxyTargetGroup: {
                  shape: 'S9e'
                }
              }
            }
          },
          ModifyDBRecommendation: {
            input: {
              type: 'structure',
              required: ['RecommendationId'],
              members: {
                RecommendationId: {},
                Locale: {},
                Status: {},
                RecommendedActionUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ActionId', 'Status'],
                    members: {
                      ActionId: {},
                      Status: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBRecommendationResult',
              type: 'structure',
              members: {
                DBRecommendation: {
                  shape: 'S9s'
                }
              }
            }
          },
          ModifyDBShardGroup: {
            input: {
              type: 'structure',
              required: ['DBShardGroupIdentifier'],
              members: {
                DBShardGroupIdentifier: {},
                MaxACU: {
                  type: 'double'
                }
              }
            },
            output: {
              shape: 'S5a',
              resultWrapper: 'ModifyDBShardGroupResult'
            }
          },
          ModifyDBSnapshot: {
            input: {
              type: 'structure',
              required: ['DBSnapshotIdentifier'],
              members: {
                DBSnapshotIdentifier: {},
                EngineVersion: {},
                OptionGroupName: {}
              }
            },
            output: {
              resultWrapper: 'ModifyDBSnapshotResult',
              type: 'structure',
              members: {
                DBSnapshot: {
                  shape: 'S1b'
                }
              }
            }
          },
          ModifyDBSnapshotAttribute: {
            input: {
              type: 'structure',
              required: ['DBSnapshotIdentifier', 'AttributeName'],
              members: {
                DBSnapshotIdentifier: {},
                AttributeName: {},
                ValuesToAdd: {
                  shape: 'S8g'
                },
                ValuesToRemove: {
                  shape: 'S8g'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBSnapshotAttributeResult',
              type: 'structure',
              members: {
                DBSnapshotAttributesResult: {
                  shape: 'Sal'
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
                  shape: 'S5f'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBSubnetGroupResult',
              type: 'structure',
              members: {
                DBSubnetGroup: {
                  shape: 'S42'
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
                  shape: 'S8'
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
                  shape: 'S6'
                }
              }
            }
          },
          ModifyGlobalCluster: {
            input: {
              type: 'structure',
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
                  shape: 'S5l'
                }
              }
            }
          },
          ModifyIntegration: {
            input: {
              type: 'structure',
              required: ['IntegrationIdentifier'],
              members: {
                IntegrationIdentifier: {},
                IntegrationName: {},
                DataFilter: {},
                Description: {}
              }
            },
            output: {
              shape: 'S5z',
              resultWrapper: 'ModifyIntegrationResult'
            }
          },
          ModifyOptionGroup: {
            input: {
              type: 'structure',
              required: ['OptionGroupName'],
              members: {
                OptionGroupName: {},
                OptionsToInclude: {
                  type: 'list',
                  member: {
                    locationName: 'OptionConfiguration',
                    type: 'structure',
                    required: ['OptionName'],
                    members: {
                      OptionName: {},
                      Port: {
                        type: 'integer'
                      },
                      OptionVersion: {},
                      DBSecurityGroupMemberships: {
                        shape: 'S3w'
                      },
                      VpcSecurityGroupMemberships: {
                        shape: 'S2t'
                      },
                      OptionSettings: {
                        type: 'list',
                        member: {
                          shape: 'S1k',
                          locationName: 'OptionSetting'
                        }
                      }
                    }
                  }
                },
                OptionsToRemove: {
                  type: 'list',
                  member: {}
                },
                ApplyImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyOptionGroupResult',
              type: 'structure',
              members: {
                OptionGroup: {
                  shape: 'S1g'
                }
              }
            }
          },
          ModifyTenantDatabase: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'TenantDBName'],
              members: {
                DBInstanceIdentifier: {},
                TenantDBName: {},
                MasterUserPassword: {
                  shape: 'S67'
                },
                NewTenantDBName: {}
              }
            },
            output: {
              resultWrapper: 'ModifyTenantDatabaseResult',
              type: 'structure',
              members: {
                TenantDatabase: {
                  shape: 'S69'
                }
              }
            }
          },
          PromoteReadReplica: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                PreferredBackupWindow: {}
              }
            },
            output: {
              resultWrapper: 'PromoteReadReplicaResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
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
                  shape: 'S31'
                }
              }
            }
          },
          PurchaseReservedDBInstancesOffering: {
            input: {
              type: 'structure',
              required: ['ReservedDBInstancesOfferingId'],
              members: {
                ReservedDBInstancesOfferingId: {},
                ReservedDBInstanceId: {},
                DBInstanceCount: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'PurchaseReservedDBInstancesOfferingResult',
              type: 'structure',
              members: {
                ReservedDBInstance: {
                  shape: 'Sci'
                }
              }
            }
          },
          RebootDBCluster: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
              members: {
                DBClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'RebootDBClusterResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S31'
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
                  shape: 'S3y'
                }
              }
            }
          },
          RebootDBShardGroup: {
            input: {
              type: 'structure',
              required: ['DBShardGroupIdentifier'],
              members: {
                DBShardGroupIdentifier: {}
              }
            },
            output: {
              shape: 'S5a',
              resultWrapper: 'RebootDBShardGroupResult'
            }
          },
          RegisterDBProxyTargets: {
            input: {
              type: 'structure',
              required: ['DBProxyName'],
              members: {
                DBProxyName: {},
                TargetGroupName: {},
                DBInstanceIdentifiers: {
                  shape: 'Sv'
                },
                DBClusterIdentifiers: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'RegisterDBProxyTargetsResult',
              type: 'structure',
              members: {
                DBProxyTargets: {
                  shape: 'S9i'
                }
              }
            }
          },
          RemoveFromGlobalCluster: {
            input: {
              type: 'structure',
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
                  shape: 'S5l'
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
          RemoveRoleFromDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'RoleArn', 'FeatureName'],
              members: {
                DBInstanceIdentifier: {},
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
                  shape: 'S6'
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
                  shape: 'S88'
                }
              }
            },
            output: {
              shape: 'Sdy',
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
                  shape: 'S88'
                }
              }
            },
            output: {
              shape: 'Se4',
              resultWrapper: 'ResetDBParameterGroupResult'
            }
          },
          RestoreDBClusterFromS3: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'Engine', 'MasterUsername', 'SourceEngine', 'SourceEngineVersion', 'S3BucketName', 'S3IngestionRoleArn'],
              members: {
                AvailabilityZones: {
                  shape: 'S14'
                },
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                CharacterSetName: {},
                DatabaseName: {},
                DBClusterIdentifier: {},
                DBClusterParameterGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'S2t'
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
                Tags: {
                  shape: 'Sb'
                },
                StorageEncrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                SourceEngine: {},
                SourceEngineVersion: {},
                S3BucketName: {},
                S3Prefix: {},
                S3IngestionRoleArn: {},
                BacktrackWindow: {
                  type: 'long'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                Domain: {},
                DomainIAMRoleName: {},
                ServerlessV2ScalingConfiguration: {
                  shape: 'S2y'
                },
                NetworkType: {},
                ManageMasterUserPassword: {
                  type: 'boolean'
                },
                MasterUserSecretKmsKeyId: {},
                StorageType: {},
                EngineLifecycleSupport: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBClusterFromS3Result',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S31'
                }
              }
            }
          },
          RestoreDBClusterFromSnapshot: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier', 'SnapshotIdentifier', 'Engine'],
              members: {
                AvailabilityZones: {
                  shape: 'S14'
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
                  shape: 'S2t'
                },
                Tags: {
                  shape: 'Sb'
                },
                KmsKeyId: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                BacktrackWindow: {
                  type: 'long'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                EngineMode: {},
                ScalingConfiguration: {
                  shape: 'S2v'
                },
                DBClusterParameterGroupName: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                Domain: {},
                DomainIAMRoleName: {},
                DBClusterInstanceClass: {},
                StorageType: {},
                Iops: {
                  type: 'integer'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                ServerlessV2ScalingConfiguration: {
                  shape: 'S2y'
                },
                NetworkType: {},
                RdsCustomClusterConfiguration: {
                  shape: 'S2w'
                },
                EngineLifecycleSupport: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBClusterFromSnapshotResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S31'
                }
              }
            }
          },
          RestoreDBClusterToPointInTime: {
            input: {
              type: 'structure',
              required: ['DBClusterIdentifier'],
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
                  shape: 'S2t'
                },
                Tags: {
                  shape: 'Sb'
                },
                KmsKeyId: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                BacktrackWindow: {
                  type: 'long'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                DBClusterParameterGroupName: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                Domain: {},
                DomainIAMRoleName: {},
                ScalingConfiguration: {
                  shape: 'S2v'
                },
                EngineMode: {},
                DBClusterInstanceClass: {},
                StorageType: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Iops: {
                  type: 'integer'
                },
                ServerlessV2ScalingConfiguration: {
                  shape: 'S2y'
                },
                NetworkType: {},
                SourceDbClusterResourceId: {},
                RdsCustomClusterConfiguration: {
                  shape: 'S2w'
                },
                EngineLifecycleSupport: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBClusterToPointInTimeResult',
              type: 'structure',
              members: {
                DBCluster: {
                  shape: 'S31'
                }
              }
            }
          },
          RestoreDBInstanceFromDBSnapshot: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                DBSnapshotIdentifier: {},
                DBInstanceClass: {},
                Port: {
                  type: 'integer'
                },
                AvailabilityZone: {},
                DBSubnetGroupName: {},
                MultiAZ: {
                  type: 'boolean'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                LicenseModel: {},
                DBName: {},
                Engine: {},
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                Tags: {
                  shape: 'Sb'
                },
                StorageType: {},
                TdeCredentialArn: {},
                TdeCredentialPassword: {},
                VpcSecurityGroupIds: {
                  shape: 'S2t'
                },
                Domain: {},
                DomainFqdn: {},
                DomainOu: {},
                DomainAuthSecretArn: {},
                DomainDnsIps: {
                  shape: 'Sv'
                },
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                DomainIAMRoleName: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                ProcessorFeatures: {
                  shape: 'S1c'
                },
                UseDefaultProcessorFeatures: {
                  type: 'boolean'
                },
                DBParameterGroupName: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                EnableCustomerOwnedIp: {
                  type: 'boolean'
                },
                CustomIamInstanceProfile: {},
                BackupTarget: {},
                NetworkType: {},
                StorageThroughput: {
                  type: 'integer'
                },
                DBClusterSnapshotIdentifier: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                DedicatedLogVolume: {
                  type: 'boolean'
                },
                CACertificateIdentifier: {},
                EngineLifecycleSupport: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBInstanceFromDBSnapshotResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
                }
              }
            }
          },
          RestoreDBInstanceFromS3: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'DBInstanceClass', 'Engine', 'SourceEngine', 'SourceEngineVersion', 'S3BucketName', 'S3IngestionRoleArn'],
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
                  shape: 'S3w'
                },
                VpcSecurityGroupIds: {
                  shape: 'S2t'
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
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sb'
                },
                StorageType: {},
                StorageEncrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                MonitoringInterval: {
                  type: 'integer'
                },
                MonitoringRoleArn: {},
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                SourceEngine: {},
                SourceEngineVersion: {},
                S3BucketName: {},
                S3Prefix: {},
                S3IngestionRoleArn: {},
                EnablePerformanceInsights: {
                  type: 'boolean'
                },
                PerformanceInsightsKMSKeyId: {},
                PerformanceInsightsRetentionPeriod: {
                  type: 'integer'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                ProcessorFeatures: {
                  shape: 'S1c'
                },
                UseDefaultProcessorFeatures: {
                  type: 'boolean'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                MaxAllocatedStorage: {
                  type: 'integer'
                },
                NetworkType: {},
                StorageThroughput: {
                  type: 'integer'
                },
                ManageMasterUserPassword: {
                  type: 'boolean'
                },
                MasterUserSecretKmsKeyId: {},
                DedicatedLogVolume: {
                  type: 'boolean'
                },
                CACertificateIdentifier: {},
                EngineLifecycleSupport: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBInstanceFromS3Result',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
                }
              }
            }
          },
          RestoreDBInstanceToPointInTime: {
            input: {
              type: 'structure',
              required: ['TargetDBInstanceIdentifier'],
              members: {
                SourceDBInstanceIdentifier: {},
                TargetDBInstanceIdentifier: {},
                RestoreTime: {
                  type: 'timestamp'
                },
                UseLatestRestorableTime: {
                  type: 'boolean'
                },
                DBInstanceClass: {},
                Port: {
                  type: 'integer'
                },
                AvailabilityZone: {},
                DBSubnetGroupName: {},
                MultiAZ: {
                  type: 'boolean'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                LicenseModel: {},
                DBName: {},
                Engine: {},
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                CopyTagsToSnapshot: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sb'
                },
                StorageType: {},
                TdeCredentialArn: {},
                TdeCredentialPassword: {},
                VpcSecurityGroupIds: {
                  shape: 'S2t'
                },
                Domain: {},
                DomainIAMRoleName: {},
                DomainFqdn: {},
                DomainOu: {},
                DomainAuthSecretArn: {},
                DomainDnsIps: {
                  shape: 'Sv'
                },
                EnableIAMDatabaseAuthentication: {
                  type: 'boolean'
                },
                EnableCloudwatchLogsExports: {
                  shape: 'S2p'
                },
                ProcessorFeatures: {
                  shape: 'S1c'
                },
                UseDefaultProcessorFeatures: {
                  type: 'boolean'
                },
                DBParameterGroupName: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                SourceDbiResourceId: {},
                MaxAllocatedStorage: {
                  type: 'integer'
                },
                SourceDBInstanceAutomatedBackupsArn: {},
                EnableCustomerOwnedIp: {
                  type: 'boolean'
                },
                CustomIamInstanceProfile: {},
                BackupTarget: {},
                NetworkType: {},
                StorageThroughput: {
                  type: 'integer'
                },
                AllocatedStorage: {
                  type: 'integer'
                },
                DedicatedLogVolume: {
                  type: 'boolean'
                },
                CACertificateIdentifier: {},
                EngineLifecycleSupport: {}
              }
            },
            output: {
              resultWrapper: 'RestoreDBInstanceToPointInTimeResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
                }
              }
            }
          },
          RevokeDBSecurityGroupIngress: {
            input: {
              type: 'structure',
              required: ['DBSecurityGroupName'],
              members: {
                DBSecurityGroupName: {},
                CIDRIP: {},
                EC2SecurityGroupName: {},
                EC2SecurityGroupId: {},
                EC2SecurityGroupOwnerId: {}
              }
            },
            output: {
              resultWrapper: 'RevokeDBSecurityGroupIngressResult',
              type: 'structure',
              members: {
                DBSecurityGroup: {
                  shape: 'Sl'
                }
              }
            }
          },
          StartActivityStream: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Mode', 'KmsKeyId'],
              members: {
                ResourceArn: {},
                Mode: {},
                KmsKeyId: {},
                ApplyImmediately: {
                  type: 'boolean'
                },
                EngineNativeAuditFieldsIncluded: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'StartActivityStreamResult',
              type: 'structure',
              members: {
                KmsKeyId: {},
                KinesisStreamName: {},
                Status: {},
                Mode: {},
                ApplyImmediately: {
                  type: 'boolean'
                },
                EngineNativeAuditFieldsIncluded: {
                  type: 'boolean'
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
                  shape: 'S31'
                }
              }
            }
          },
          StartDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'StartDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
                }
              }
            }
          },
          StartDBInstanceAutomatedBackupsReplication: {
            input: {
              type: 'structure',
              required: ['SourceDBInstanceArn'],
              members: {
                SourceDBInstanceArn: {},
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                KmsKeyId: {},
                PreSignedUrl: {}
              }
            },
            output: {
              resultWrapper: 'StartDBInstanceAutomatedBackupsReplicationResult',
              type: 'structure',
              members: {
                DBInstanceAutomatedBackup: {
                  shape: 'S6s'
                }
              }
            }
          },
          StartExportTask: {
            input: {
              type: 'structure',
              required: ['ExportTaskIdentifier', 'SourceArn', 'S3BucketName', 'IamRoleArn', 'KmsKeyId'],
              members: {
                ExportTaskIdentifier: {},
                SourceArn: {},
                S3BucketName: {},
                IamRoleArn: {},
                KmsKeyId: {},
                S3Prefix: {},
                ExportOnly: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              shape: 'Su',
              resultWrapper: 'StartExportTaskResult'
            }
          },
          StopActivityStream: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                ApplyImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'StopActivityStreamResult',
              type: 'structure',
              members: {
                KmsKeyId: {},
                KinesisStreamName: {},
                Status: {}
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
                  shape: 'S31'
                }
              }
            }
          },
          StopDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                DBSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'StopDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
                }
              }
            }
          },
          StopDBInstanceAutomatedBackupsReplication: {
            input: {
              type: 'structure',
              required: ['SourceDBInstanceArn'],
              members: {
                SourceDBInstanceArn: {}
              }
            },
            output: {
              resultWrapper: 'StopDBInstanceAutomatedBackupsReplicationResult',
              type: 'structure',
              members: {
                DBInstanceAutomatedBackup: {
                  shape: 'S6s'
                }
              }
            }
          },
          SwitchoverBlueGreenDeployment: {
            input: {
              type: 'structure',
              required: ['BlueGreenDeploymentIdentifier'],
              members: {
                BlueGreenDeploymentIdentifier: {},
                SwitchoverTimeout: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'SwitchoverBlueGreenDeploymentResult',
              type: 'structure',
              members: {
                BlueGreenDeployment: {
                  shape: 'S1x'
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
                  shape: 'S5l'
                }
              }
            }
          },
          SwitchoverReadReplica: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'SwitchoverReadReplicaResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'S3y'
                }
              }
            }
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            members: {
              CustomerAwsId: {},
              CustSubscriptionId: {},
              SnsTopicArn: {},
              Status: {},
              SubscriptionCreationTime: {},
              SourceType: {},
              SourceIdsList: {
                shape: 'S7'
              },
              EventCategoriesList: {
                shape: 'S8'
              },
              Enabled: {
                type: 'boolean'
              },
              EventSubscriptionArn: {}
            },
            wrapper: true
          },
          S7: {
            type: 'list',
            member: {
              locationName: 'SourceId'
            }
          },
          S8: {
            type: 'list',
            member: {
              locationName: 'EventCategory'
            }
          },
          Sb: {
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
          Sf: {
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
          Sl: {
            type: 'structure',
            members: {
              OwnerId: {},
              DBSecurityGroupName: {},
              DBSecurityGroupDescription: {},
              VpcId: {},
              EC2SecurityGroups: {
                type: 'list',
                member: {
                  locationName: 'EC2SecurityGroup',
                  type: 'structure',
                  members: {
                    Status: {},
                    EC2SecurityGroupName: {},
                    EC2SecurityGroupId: {},
                    EC2SecurityGroupOwnerId: {}
                  }
                }
              },
              IPRanges: {
                type: 'list',
                member: {
                  locationName: 'IPRange',
                  type: 'structure',
                  members: {
                    Status: {},
                    CIDRIP: {}
                  }
                }
              },
              DBSecurityGroupArn: {}
            },
            wrapper: true
          },
          Ss: {
            type: 'structure',
            members: {
              DBClusterIdentifier: {},
              BacktrackIdentifier: {},
              BacktrackTo: {
                type: 'timestamp'
              },
              BacktrackedFrom: {
                type: 'timestamp'
              },
              BacktrackRequestCreationTime: {
                type: 'timestamp'
              },
              Status: {}
            }
          },
          Su: {
            type: 'structure',
            members: {
              ExportTaskIdentifier: {},
              SourceArn: {},
              ExportOnly: {
                shape: 'Sv'
              },
              SnapshotTime: {
                type: 'timestamp'
              },
              TaskStartTime: {
                type: 'timestamp'
              },
              TaskEndTime: {
                type: 'timestamp'
              },
              S3Bucket: {},
              S3Prefix: {},
              IamRoleArn: {},
              KmsKeyId: {},
              Status: {},
              PercentProgress: {
                type: 'integer'
              },
              TotalExtractedDataInGB: {
                type: 'integer'
              },
              FailureCause: {},
              WarningMessage: {},
              SourceType: {}
            }
          },
          Sv: {
            type: 'list',
            member: {}
          },
          S10: {
            type: 'structure',
            members: {
              DBClusterParameterGroupName: {},
              DBParameterGroupFamily: {},
              Description: {},
              DBClusterParameterGroupArn: {}
            },
            wrapper: true
          },
          S13: {
            type: 'structure',
            members: {
              AvailabilityZones: {
                shape: 'S14'
              },
              DBClusterSnapshotIdentifier: {},
              DBClusterIdentifier: {},
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Engine: {},
              EngineMode: {},
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
              TagList: {
                shape: 'Sb'
              },
              DBSystemId: {},
              StorageType: {},
              DbClusterResourceId: {},
              StorageThroughput: {
                type: 'integer'
              }
            },
            wrapper: true
          },
          S14: {
            type: 'list',
            member: {
              locationName: 'AvailabilityZone'
            }
          },
          S18: {
            type: 'structure',
            members: {
              DBParameterGroupName: {},
              DBParameterGroupFamily: {},
              Description: {},
              DBParameterGroupArn: {}
            },
            wrapper: true
          },
          S1b: {
            type: 'structure',
            members: {
              DBSnapshotIdentifier: {},
              DBInstanceIdentifier: {},
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
              AvailabilityZone: {},
              VpcId: {},
              InstanceCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {},
              EngineVersion: {},
              LicenseModel: {},
              SnapshotType: {},
              Iops: {
                type: 'integer'
              },
              OptionGroupName: {},
              PercentProgress: {
                type: 'integer'
              },
              SourceRegion: {},
              SourceDBSnapshotIdentifier: {},
              StorageType: {},
              TdeCredentialArn: {},
              Encrypted: {
                type: 'boolean'
              },
              KmsKeyId: {},
              DBSnapshotArn: {},
              Timezone: {},
              IAMDatabaseAuthenticationEnabled: {
                type: 'boolean'
              },
              ProcessorFeatures: {
                shape: 'S1c'
              },
              DbiResourceId: {},
              TagList: {
                shape: 'Sb'
              },
              OriginalSnapshotCreateTime: {
                type: 'timestamp'
              },
              SnapshotDatabaseTime: {
                type: 'timestamp'
              },
              SnapshotTarget: {},
              StorageThroughput: {
                type: 'integer'
              },
              DBSystemId: {},
              DedicatedLogVolume: {
                type: 'boolean'
              },
              MultiTenant: {
                type: 'boolean'
              }
            },
            wrapper: true
          },
          S1c: {
            type: 'list',
            member: {
              locationName: 'ProcessorFeature',
              type: 'structure',
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S1g: {
            type: 'structure',
            members: {
              OptionGroupName: {},
              OptionGroupDescription: {},
              EngineName: {},
              MajorEngineVersion: {},
              Options: {
                type: 'list',
                member: {
                  locationName: 'Option',
                  type: 'structure',
                  members: {
                    OptionName: {},
                    OptionDescription: {},
                    Persistent: {
                      type: 'boolean'
                    },
                    Permanent: {
                      type: 'boolean'
                    },
                    Port: {
                      type: 'integer'
                    },
                    OptionVersion: {},
                    OptionSettings: {
                      type: 'list',
                      member: {
                        shape: 'S1k',
                        locationName: 'OptionSetting'
                      }
                    },
                    DBSecurityGroupMemberships: {
                      shape: 'S1l'
                    },
                    VpcSecurityGroupMemberships: {
                      shape: 'S1n'
                    }
                  }
                }
              },
              AllowsVpcAndNonVpcInstanceMemberships: {
                type: 'boolean'
              },
              VpcId: {},
              OptionGroupArn: {},
              SourceOptionGroup: {},
              SourceAccountId: {},
              CopyTimestamp: {
                type: 'timestamp'
              }
            },
            wrapper: true
          },
          S1k: {
            type: 'structure',
            members: {
              Name: {},
              Value: {},
              DefaultValue: {},
              Description: {},
              ApplyType: {},
              DataType: {},
              AllowedValues: {},
              IsModifiable: {
                type: 'boolean'
              },
              IsCollection: {
                type: 'boolean'
              }
            }
          },
          S1l: {
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
          S1n: {
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
          S1x: {
            type: 'structure',
            members: {
              BlueGreenDeploymentIdentifier: {},
              BlueGreenDeploymentName: {},
              Source: {},
              Target: {},
              SwitchoverDetails: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SourceMember: {},
                    TargetMember: {},
                    Status: {}
                  }
                }
              },
              Tasks: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Status: {}
                  }
                }
              },
              Status: {},
              StatusDetails: {},
              CreateTime: {
                type: 'timestamp'
              },
              DeleteTime: {
                type: 'timestamp'
              },
              TagList: {
                shape: 'Sb'
              }
            }
          },
          S2g: {
            type: 'structure',
            members: {
              Engine: {},
              EngineVersion: {},
              DBParameterGroupFamily: {},
              DBEngineDescription: {},
              DBEngineVersionDescription: {},
              DefaultCharacterSet: {
                shape: 'S2h'
              },
              Image: {
                type: 'structure',
                members: {
                  ImageId: {},
                  Status: {}
                }
              },
              DBEngineMediaType: {},
              SupportedCharacterSets: {
                shape: 'S2j'
              },
              SupportedNcharCharacterSets: {
                shape: 'S2j'
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
                    SupportedEngineModes: {
                      shape: 'S2m'
                    },
                    SupportsParallelQuery: {
                      type: 'boolean'
                    },
                    SupportsGlobalDatabases: {
                      type: 'boolean'
                    },
                    SupportsBabelfish: {
                      type: 'boolean'
                    },
                    SupportsLimitlessDatabase: {
                      type: 'boolean'
                    },
                    SupportsLocalWriteForwarding: {
                      type: 'boolean'
                    },
                    SupportsIntegrations: {
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
                shape: 'S2p'
              },
              SupportsLogExportsToCloudwatchLogs: {
                type: 'boolean'
              },
              SupportsReadReplica: {
                type: 'boolean'
              },
              SupportedEngineModes: {
                shape: 'S2m'
              },
              SupportedFeatureNames: {
                type: 'list',
                member: {}
              },
              Status: {},
              SupportsParallelQuery: {
                type: 'boolean'
              },
              SupportsGlobalDatabases: {
                type: 'boolean'
              },
              MajorEngineVersion: {},
              DatabaseInstallationFilesS3BucketName: {},
              DatabaseInstallationFilesS3Prefix: {},
              DBEngineVersionArn: {},
              KMSKeyId: {},
              CreateTime: {
                type: 'timestamp'
              },
              TagList: {
                shape: 'Sb'
              },
              SupportsBabelfish: {
                type: 'boolean'
              },
              CustomDBEngineVersionManifest: {},
              SupportsLimitlessDatabase: {
                type: 'boolean'
              },
              SupportsCertificateRotationWithoutRestart: {
                type: 'boolean'
              },
              SupportedCACertificateIdentifiers: {
                type: 'list',
                member: {}
              },
              SupportsLocalWriteForwarding: {
                type: 'boolean'
              },
              SupportsIntegrations: {
                type: 'boolean'
              }
            }
          },
          S2h: {
            type: 'structure',
            members: {
              CharacterSetName: {},
              CharacterSetDescription: {}
            }
          },
          S2j: {
            type: 'list',
            member: {
              shape: 'S2h',
              locationName: 'CharacterSet'
            }
          },
          S2m: {
            type: 'list',
            member: {}
          },
          S2p: {
            type: 'list',
            member: {}
          },
          S2t: {
            type: 'list',
            member: {
              locationName: 'VpcSecurityGroupId'
            }
          },
          S2v: {
            type: 'structure',
            members: {
              MinCapacity: {
                type: 'integer'
              },
              MaxCapacity: {
                type: 'integer'
              },
              AutoPause: {
                type: 'boolean'
              },
              SecondsUntilAutoPause: {
                type: 'integer'
              },
              TimeoutAction: {},
              SecondsBeforeTimeout: {
                type: 'integer'
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              InterconnectSubnetId: {},
              TransitGatewayMulticastDomainId: {},
              ReplicaMode: {}
            }
          },
          S2y: {
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
          S31: {
            type: 'structure',
            members: {
              AllocatedStorage: {
                type: 'integer'
              },
              AvailabilityZones: {
                shape: 'S14'
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
              AutomaticRestartTime: {
                type: 'timestamp'
              },
              PercentProgress: {},
              EarliestRestorableTime: {
                type: 'timestamp'
              },
              Endpoint: {},
              ReaderEndpoint: {},
              CustomEndpoints: {
                shape: 'Sv'
              },
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
              StatusInfos: {
                type: 'list',
                member: {
                  locationName: 'DBClusterStatusInfo',
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
                shape: 'S1n'
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
              EarliestBacktrackTime: {
                type: 'timestamp'
              },
              BacktrackWindow: {
                type: 'long'
              },
              BacktrackConsumedChangeRecords: {
                type: 'long'
              },
              EnabledCloudwatchLogsExports: {
                shape: 'S2p'
              },
              Capacity: {
                type: 'integer'
              },
              EngineMode: {},
              ScalingConfigurationInfo: {
                type: 'structure',
                members: {
                  MinCapacity: {
                    type: 'integer'
                  },
                  MaxCapacity: {
                    type: 'integer'
                  },
                  AutoPause: {
                    type: 'boolean'
                  },
                  SecondsUntilAutoPause: {
                    type: 'integer'
                  },
                  TimeoutAction: {},
                  SecondsBeforeTimeout: {
                    type: 'integer'
                  }
                }
              },
              RdsCustomClusterConfiguration: {
                shape: 'S2w'
              },
              DeletionProtection: {
                type: 'boolean'
              },
              HttpEndpointEnabled: {
                type: 'boolean'
              },
              ActivityStreamMode: {},
              ActivityStreamStatus: {},
              ActivityStreamKmsKeyId: {},
              ActivityStreamKinesisStreamName: {},
              CopyTagsToSnapshot: {
                type: 'boolean'
              },
              CrossAccountClone: {
                type: 'boolean'
              },
              DomainMemberships: {
                shape: 'S3e'
              },
              TagList: {
                shape: 'Sb'
              },
              GlobalWriteForwardingStatus: {},
              GlobalWriteForwardingRequested: {
                type: 'boolean'
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  PendingCloudwatchLogsExports: {
                    shape: 'S3i'
                  },
                  DBClusterIdentifier: {},
                  MasterUserPassword: {},
                  IAMDatabaseAuthenticationEnabled: {
                    type: 'boolean'
                  },
                  EngineVersion: {},
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  RdsCustomClusterConfiguration: {
                    shape: 'S2w'
                  },
                  Iops: {
                    type: 'integer'
                  },
                  StorageType: {},
                  CertificateDetails: {
                    shape: 'S3j'
                  }
                }
              },
              DBClusterInstanceClass: {},
              StorageType: {},
              Iops: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              MonitoringInterval: {
                type: 'integer'
              },
              MonitoringRoleArn: {},
              PerformanceInsightsEnabled: {
                type: 'boolean'
              },
              PerformanceInsightsKMSKeyId: {},
              PerformanceInsightsRetentionPeriod: {
                type: 'integer'
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
              NetworkType: {},
              DBSystemId: {},
              MasterUserSecret: {
                shape: 'S3l'
              },
              IOOptimizedNextAllowedModificationTime: {
                type: 'timestamp'
              },
              LocalWriteForwardingStatus: {},
              AwsBackupRecoveryPointArn: {},
              LimitlessDatabase: {
                type: 'structure',
                members: {
                  Status: {},
                  MinRequiredACU: {
                    type: 'double'
                  }
                }
              },
              StorageThroughput: {
                type: 'integer'
              },
              CertificateDetails: {
                shape: 'S3j'
              },
              EngineLifecycleSupport: {}
            },
            wrapper: true
          },
          S3e: {
            type: 'list',
            member: {
              locationName: 'DomainMembership',
              type: 'structure',
              members: {
                Domain: {},
                Status: {},
                FQDN: {},
                IAMRoleName: {},
                OU: {},
                AuthSecretArn: {},
                DnsIps: {
                  shape: 'Sv'
                }
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              LogTypesToEnable: {
                shape: 'S2p'
              },
              LogTypesToDisable: {
                shape: 'S2p'
              }
            }
          },
          S3j: {
            type: 'structure',
            members: {
              CAIdentifier: {},
              ValidTill: {
                type: 'timestamp'
              }
            }
          },
          S3l: {
            type: 'structure',
            members: {
              SecretArn: {},
              SecretStatus: {},
              KmsKeyId: {}
            }
          },
          S3q: {
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
                shape: 'Sv'
              },
              ExcludedMembers: {
                shape: 'Sv'
              },
              DBClusterEndpointArn: {}
            }
          },
          S3w: {
            type: 'list',
            member: {
              locationName: 'DBSecurityGroupName'
            }
          },
          S3y: {
            type: 'structure',
            members: {
              DBInstanceIdentifier: {},
              DBInstanceClass: {},
              Engine: {},
              DBInstanceStatus: {},
              AutomaticRestartTime: {
                type: 'timestamp'
              },
              MasterUsername: {},
              DBName: {},
              Endpoint: {
                shape: 'S3z'
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
                shape: 'S1l'
              },
              VpcSecurityGroups: {
                shape: 'S1n'
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
                shape: 'S42'
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
                    shape: 'S3i'
                  },
                  ProcessorFeatures: {
                    shape: 'S1c'
                  },
                  IAMDatabaseAuthenticationEnabled: {
                    type: 'boolean'
                  },
                  AutomationMode: {},
                  ResumeFullAutomationModeTime: {
                    type: 'timestamp'
                  },
                  StorageThroughput: {
                    type: 'integer'
                  },
                  Engine: {},
                  DedicatedLogVolume: {
                    type: 'boolean'
                  },
                  MultiTenant: {
                    type: 'boolean'
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
              ReplicaMode: {},
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
              NcharCharacterSetName: {},
              SecondaryAvailabilityZone: {},
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
                shape: 'S3e'
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
              PerformanceInsightsRetentionPeriod: {
                type: 'integer'
              },
              EnabledCloudwatchLogsExports: {
                shape: 'S2p'
              },
              ProcessorFeatures: {
                shape: 'S1c'
              },
              DeletionProtection: {
                type: 'boolean'
              },
              AssociatedRoles: {
                type: 'list',
                member: {
                  locationName: 'DBInstanceRole',
                  type: 'structure',
                  members: {
                    RoleArn: {},
                    FeatureName: {},
                    Status: {}
                  }
                }
              },
              ListenerEndpoint: {
                shape: 'S3z'
              },
              MaxAllocatedStorage: {
                type: 'integer'
              },
              TagList: {
                shape: 'Sb'
              },
              DBInstanceAutomatedBackupsReplications: {
                shape: 'S4h'
              },
              CustomerOwnedIpEnabled: {
                type: 'boolean'
              },
              AwsBackupRecoveryPointArn: {},
              ActivityStreamStatus: {},
              ActivityStreamKmsKeyId: {},
              ActivityStreamKinesisStreamName: {},
              ActivityStreamMode: {},
              ActivityStreamEngineNativeAuditFieldsIncluded: {
                type: 'boolean'
              },
              AutomationMode: {},
              ResumeFullAutomationModeTime: {
                type: 'timestamp'
              },
              CustomIamInstanceProfile: {},
              BackupTarget: {},
              NetworkType: {},
              ActivityStreamPolicyStatus: {},
              StorageThroughput: {
                type: 'integer'
              },
              DBSystemId: {},
              MasterUserSecret: {
                shape: 'S3l'
              },
              CertificateDetails: {
                shape: 'S3j'
              },
              ReadReplicaSourceDBClusterIdentifier: {},
              PercentProgress: {},
              DedicatedLogVolume: {
                type: 'boolean'
              },
              IsStorageConfigUpgradeAvailable: {
                type: 'boolean'
              },
              MultiTenant: {
                type: 'boolean'
              },
              EngineLifecycleSupport: {}
            },
            wrapper: true
          },
          S3z: {
            type: 'structure',
            members: {
              Address: {},
              Port: {
                type: 'integer'
              },
              HostedZoneId: {}
            }
          },
          S42: {
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
                      shape: 'S45'
                    },
                    SubnetOutpost: {
                      type: 'structure',
                      members: {
                        Arn: {}
                      }
                    },
                    SubnetStatus: {}
                  }
                }
              },
              DBSubnetGroupArn: {},
              SupportedNetworkTypes: {
                shape: 'Sv'
              }
            },
            wrapper: true
          },
          S45: {
            type: 'structure',
            members: {
              Name: {}
            },
            wrapper: true
          },
          S4h: {
            type: 'list',
            member: {
              locationName: 'DBInstanceAutomatedBackupsReplication',
              type: 'structure',
              members: {
                DBInstanceAutomatedBackupsArn: {}
              }
            }
          },
          S4q: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Description: {},
                UserName: {},
                AuthScheme: {},
                SecretArn: {},
                IAMAuth: {},
                ClientPasswordAuthType: {}
              }
            }
          },
          S4w: {
            type: 'structure',
            members: {
              DBProxyName: {},
              DBProxyArn: {},
              Status: {},
              EngineFamily: {},
              VpcId: {},
              VpcSecurityGroupIds: {
                shape: 'Sv'
              },
              VpcSubnetIds: {
                shape: 'Sv'
              },
              Auth: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Description: {},
                    UserName: {},
                    AuthScheme: {},
                    SecretArn: {},
                    IAMAuth: {},
                    ClientPasswordAuthType: {}
                  }
                }
              },
              RoleArn: {},
              Endpoint: {},
              RequireTLS: {
                type: 'boolean'
              },
              IdleClientTimeout: {
                type: 'integer'
              },
              DebugLogging: {
                type: 'boolean'
              },
              CreatedDate: {
                type: 'timestamp'
              },
              UpdatedDate: {
                type: 'timestamp'
              }
            }
          },
          S55: {
            type: 'structure',
            members: {
              DBProxyEndpointName: {},
              DBProxyEndpointArn: {},
              DBProxyName: {},
              Status: {},
              VpcId: {},
              VpcSecurityGroupIds: {
                shape: 'Sv'
              },
              VpcSubnetIds: {
                shape: 'Sv'
              },
              Endpoint: {},
              CreatedDate: {
                type: 'timestamp'
              },
              TargetRole: {},
              IsDefault: {
                type: 'boolean'
              }
            }
          },
          S5a: {
            type: 'structure',
            members: {
              DBShardGroupResourceId: {},
              DBShardGroupIdentifier: {},
              DBClusterIdentifier: {},
              MaxACU: {
                type: 'double'
              },
              ComputeRedundancy: {
                type: 'integer'
              },
              Status: {},
              PubliclyAccessible: {
                type: 'boolean'
              },
              Endpoint: {}
            }
          },
          S5f: {
            type: 'list',
            member: {
              locationName: 'SubnetIdentifier'
            }
          },
          S5l: {
            type: 'structure',
            members: {
              GlobalClusterIdentifier: {},
              GlobalClusterResourceId: {},
              GlobalClusterArn: {},
              Status: {},
              Engine: {},
              EngineVersion: {},
              EngineLifecycleSupport: {},
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
                    },
                    GlobalWriteForwardingStatus: {},
                    SynchronizationStatus: {}
                  },
                  wrapper: true
                }
              },
              FailoverState: {
                type: 'structure',
                members: {
                  Status: {},
                  FromDbClusterArn: {},
                  ToDbClusterArn: {},
                  IsDataLossAllowed: {
                    type: 'boolean'
                  }
                },
                wrapper: true
              }
            },
            wrapper: true
          },
          S5w: {
            type: 'map',
            key: {},
            value: {}
          },
          S5z: {
            type: 'structure',
            members: {
              SourceArn: {},
              TargetArn: {},
              IntegrationName: {},
              IntegrationArn: {},
              KMSKeyId: {},
              AdditionalEncryptionContext: {
                shape: 'S5w'
              },
              Status: {},
              Tags: {
                shape: 'Sb'
              },
              CreateTime: {
                type: 'timestamp'
              },
              Errors: {
                type: 'list',
                member: {
                  locationName: 'IntegrationError',
                  type: 'structure',
                  required: ['ErrorCode'],
                  members: {
                    ErrorCode: {},
                    ErrorMessage: {}
                  }
                }
              },
              DataFilter: {},
              Description: {}
            }
          },
          S67: {
            type: 'string',
            sensitive: true
          },
          S69: {
            type: 'structure',
            members: {
              TenantDatabaseCreateTime: {
                type: 'timestamp'
              },
              DBInstanceIdentifier: {},
              TenantDBName: {},
              Status: {},
              MasterUsername: {},
              DbiResourceId: {},
              TenantDatabaseResourceId: {},
              TenantDatabaseARN: {},
              CharacterSetName: {},
              NcharCharacterSetName: {},
              DeletionProtection: {
                type: 'boolean'
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                    shape: 'S67'
                  },
                  TenantDBName: {}
                }
              },
              TagList: {
                shape: 'Sb'
              }
            },
            wrapper: true
          },
          S6i: {
            type: 'structure',
            members: {
              Engine: {},
              VpcId: {},
              DBClusterAutomatedBackupsArn: {},
              DBClusterIdentifier: {},
              RestoreWindow: {
                shape: 'S6j'
              },
              MasterUsername: {},
              DbClusterResourceId: {},
              Region: {},
              LicenseModel: {},
              Status: {},
              IAMDatabaseAuthenticationEnabled: {
                type: 'boolean'
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              StorageEncrypted: {
                type: 'boolean'
              },
              AllocatedStorage: {
                type: 'integer'
              },
              EngineVersion: {},
              DBClusterArn: {},
              BackupRetentionPeriod: {
                type: 'integer'
              },
              EngineMode: {},
              AvailabilityZones: {
                shape: 'S14'
              },
              Port: {
                type: 'integer'
              },
              KmsKeyId: {},
              StorageType: {},
              Iops: {
                type: 'integer'
              },
              AwsBackupRecoveryPointArn: {},
              StorageThroughput: {
                type: 'integer'
              }
            },
            wrapper: true
          },
          S6j: {
            type: 'structure',
            members: {
              EarliestTime: {
                type: 'timestamp'
              },
              LatestTime: {
                type: 'timestamp'
              }
            }
          },
          S6s: {
            type: 'structure',
            members: {
              DBInstanceArn: {},
              DbiResourceId: {},
              Region: {},
              DBInstanceIdentifier: {},
              RestoreWindow: {
                shape: 'S6j'
              },
              AllocatedStorage: {
                type: 'integer'
              },
              Status: {},
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {},
              VpcId: {},
              InstanceCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {},
              Engine: {},
              EngineVersion: {},
              LicenseModel: {},
              Iops: {
                type: 'integer'
              },
              OptionGroupName: {},
              TdeCredentialArn: {},
              Encrypted: {
                type: 'boolean'
              },
              StorageType: {},
              KmsKeyId: {},
              Timezone: {},
              IAMDatabaseAuthenticationEnabled: {
                type: 'boolean'
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBInstanceAutomatedBackupsArn: {},
              DBInstanceAutomatedBackupsReplications: {
                shape: 'S4h'
              },
              BackupTarget: {},
              StorageThroughput: {
                type: 'integer'
              },
              AwsBackupRecoveryPointArn: {},
              DedicatedLogVolume: {
                type: 'boolean'
              },
              MultiTenant: {
                type: 'boolean'
              }
            },
            wrapper: true
          },
          S7k: {
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
          S7t: {
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
              CertificateArn: {},
              CustomerOverride: {
                type: 'boolean'
              },
              CustomerOverrideValidTill: {
                type: 'timestamp'
              }
            },
            wrapper: true
          },
          S88: {
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
                ApplyMethod: {},
                SupportedEngineModes: {
                  shape: 'S2m'
                }
              }
            }
          },
          S8d: {
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
                      shape: 'S8g'
                    }
                  }
                }
              }
            },
            wrapper: true
          },
          S8g: {
            type: 'list',
            member: {
              locationName: 'AttributeValue'
            }
          },
          S9e: {
            type: 'structure',
            members: {
              DBProxyName: {},
              TargetGroupName: {},
              TargetGroupArn: {},
              IsDefault: {
                type: 'boolean'
              },
              Status: {},
              ConnectionPoolConfig: {
                type: 'structure',
                members: {
                  MaxConnectionsPercent: {
                    type: 'integer'
                  },
                  MaxIdleConnectionsPercent: {
                    type: 'integer'
                  },
                  ConnectionBorrowTimeout: {
                    type: 'integer'
                  },
                  SessionPinningFilters: {
                    shape: 'Sv'
                  },
                  InitQuery: {}
                }
              },
              CreatedDate: {
                type: 'timestamp'
              },
              UpdatedDate: {
                type: 'timestamp'
              }
            }
          },
          S9i: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TargetArn: {},
                Endpoint: {},
                TrackedClusterId: {},
                RdsResourceId: {},
                Port: {
                  type: 'integer'
                },
                Type: {},
                Role: {},
                TargetHealth: {
                  type: 'structure',
                  members: {
                    State: {},
                    Reason: {},
                    Description: {}
                  }
                }
              }
            }
          },
          S9s: {
            type: 'structure',
            members: {
              RecommendationId: {},
              TypeId: {},
              Severity: {},
              ResourceArn: {},
              Status: {},
              CreatedTime: {
                type: 'timestamp'
              },
              UpdatedTime: {
                type: 'timestamp'
              },
              Detection: {},
              Recommendation: {},
              Description: {},
              Reason: {},
              RecommendedActions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ActionId: {},
                    Title: {},
                    Description: {},
                    Operation: {},
                    Parameters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Key: {},
                          Value: {}
                        }
                      }
                    },
                    ApplyModes: {
                      shape: 'Sv'
                    },
                    Status: {},
                    IssueDetails: {
                      shape: 'S9x'
                    },
                    ContextAttributes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Key: {},
                          Value: {}
                        }
                      }
                    }
                  }
                }
              },
              Category: {},
              Source: {},
              TypeDetection: {},
              TypeRecommendation: {},
              Impact: {},
              AdditionalInfo: {},
              Links: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Text: {},
                    Url: {}
                  }
                }
              },
              IssueDetails: {
                shape: 'S9x'
              }
            }
          },
          S9x: {
            type: 'structure',
            members: {
              PerformanceIssueDetails: {
                type: 'structure',
                members: {
                  StartTime: {
                    type: 'timestamp'
                  },
                  EndTime: {
                    type: 'timestamp'
                  },
                  Metrics: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Name: {},
                        References: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              Name: {},
                              ReferenceDetails: {
                                type: 'structure',
                                members: {
                                  ScalarReferenceDetails: {
                                    type: 'structure',
                                    members: {
                                      Value: {
                                        type: 'double'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        StatisticsDetails: {},
                        MetricQuery: {
                          type: 'structure',
                          members: {
                            PerformanceInsightsMetricQuery: {
                              type: 'structure',
                              members: {
                                GroupBy: {
                                  type: 'structure',
                                  members: {
                                    Dimensions: {
                                      shape: 'Sv'
                                    },
                                    Group: {},
                                    Limit: {
                                      type: 'integer'
                                    }
                                  }
                                },
                                Metric: {}
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  Analysis: {}
                }
              }
            }
          },
          Sal: {
            type: 'structure',
            members: {
              DBSnapshotIdentifier: {},
              DBSnapshotAttributes: {
                type: 'list',
                member: {
                  locationName: 'DBSnapshotAttribute',
                  type: 'structure',
                  members: {
                    AttributeName: {},
                    AttributeValues: {
                      shape: 'S8g'
                    }
                  },
                  wrapper: true
                }
              }
            },
            wrapper: true
          },
          Sb0: {
            type: 'structure',
            members: {
              DBParameterGroupFamily: {},
              Marker: {},
              Parameters: {
                shape: 'S88'
              }
            },
            wrapper: true
          },
          Sc9: {
            type: 'list',
            member: {
              locationName: 'AvailableProcessorFeature',
              type: 'structure',
              members: {
                Name: {},
                DefaultValue: {},
                AllowedValues: {}
              }
            }
          },
          Sci: {
            type: 'structure',
            members: {
              ReservedDBInstanceId: {},
              ReservedDBInstancesOfferingId: {},
              DBInstanceClass: {},
              StartTime: {
                type: 'timestamp'
              },
              Duration: {
                type: 'integer'
              },
              FixedPrice: {
                type: 'double'
              },
              UsagePrice: {
                type: 'double'
              },
              CurrencyCode: {},
              DBInstanceCount: {
                type: 'integer'
              },
              ProductDescription: {},
              OfferingType: {},
              MultiAZ: {
                type: 'boolean'
              },
              State: {},
              RecurringCharges: {
                shape: 'Scj'
              },
              ReservedDBInstanceArn: {},
              LeaseId: {}
            },
            wrapper: true
          },
          Scj: {
            type: 'list',
            member: {
              locationName: 'RecurringCharge',
              type: 'structure',
              members: {
                RecurringChargeAmount: {
                  type: 'double'
                },
                RecurringChargeFrequency: {}
              },
              wrapper: true
            }
          },
          Sd1: {
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
          Sd3: {
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
          },
          Sdt: {
            type: 'structure',
            members: {
              EnableLogTypes: {
                shape: 'S2p'
              },
              DisableLogTypes: {
                shape: 'S2p'
              }
            }
          },
          Sdy: {
            type: 'structure',
            members: {
              DBClusterParameterGroupName: {}
            }
          },
          Se4: {
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
//# sourceMappingURL=b4c4520cb416756b930442e4abbfc67551b060fb.js.map