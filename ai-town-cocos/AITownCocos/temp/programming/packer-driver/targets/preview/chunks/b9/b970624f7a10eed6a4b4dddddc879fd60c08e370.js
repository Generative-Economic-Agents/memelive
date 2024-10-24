System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-02-02',
          endpointPrefix: 'elasticache',
          protocol: 'query',
          protocols: ['query'],
          serviceFullName: 'Amazon ElastiCache',
          serviceId: 'ElastiCache',
          signatureVersion: 'v4',
          uid: 'elasticache-2015-02-02',
          xmlNamespace: 'http://elasticache.amazonaws.com/doc/2015-02-02/'
        },
        operations: {
          AddTagsToResource: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'Tags'],
              members: {
                ResourceName: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              shape: 'S5',
              resultWrapper: 'AddTagsToResourceResult'
            }
          },
          AuthorizeCacheSecurityGroupIngress: {
            input: {
              type: 'structure',
              required: ['CacheSecurityGroupName', 'EC2SecurityGroupName', 'EC2SecurityGroupOwnerId'],
              members: {
                CacheSecurityGroupName: {},
                EC2SecurityGroupName: {},
                EC2SecurityGroupOwnerId: {}
              }
            },
            output: {
              resultWrapper: 'AuthorizeCacheSecurityGroupIngressResult',
              type: 'structure',
              members: {
                CacheSecurityGroup: {
                  shape: 'S8'
                }
              }
            }
          },
          BatchApplyUpdateAction: {
            input: {
              type: 'structure',
              required: ['ServiceUpdateName'],
              members: {
                ReplicationGroupIds: {
                  shape: 'Sc'
                },
                CacheClusterIds: {
                  shape: 'Sd'
                },
                ServiceUpdateName: {}
              }
            },
            output: {
              shape: 'Se',
              resultWrapper: 'BatchApplyUpdateActionResult'
            }
          },
          BatchStopUpdateAction: {
            input: {
              type: 'structure',
              required: ['ServiceUpdateName'],
              members: {
                ReplicationGroupIds: {
                  shape: 'Sc'
                },
                CacheClusterIds: {
                  shape: 'Sd'
                },
                ServiceUpdateName: {}
              }
            },
            output: {
              shape: 'Se',
              resultWrapper: 'BatchStopUpdateActionResult'
            }
          },
          CompleteMigration: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId'],
              members: {
                ReplicationGroupId: {},
                Force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'CompleteMigrationResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          CopyServerlessCacheSnapshot: {
            input: {
              type: 'structure',
              required: ['SourceServerlessCacheSnapshotName', 'TargetServerlessCacheSnapshotName'],
              members: {
                SourceServerlessCacheSnapshotName: {},
                TargetServerlessCacheSnapshotName: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'CopyServerlessCacheSnapshotResult',
              type: 'structure',
              members: {
                ServerlessCacheSnapshot: {
                  shape: 'S1u'
                }
              }
            }
          },
          CopySnapshot: {
            input: {
              type: 'structure',
              required: ['SourceSnapshotName', 'TargetSnapshotName'],
              members: {
                SourceSnapshotName: {},
                TargetSnapshotName: {},
                TargetBucket: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'CopySnapshotResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S1y'
                }
              }
            }
          },
          CreateCacheCluster: {
            input: {
              type: 'structure',
              required: ['CacheClusterId'],
              members: {
                CacheClusterId: {},
                ReplicationGroupId: {},
                AZMode: {},
                PreferredAvailabilityZone: {},
                PreferredAvailabilityZones: {
                  shape: 'S27'
                },
                NumCacheNodes: {
                  type: 'integer'
                },
                CacheNodeType: {},
                Engine: {},
                EngineVersion: {},
                CacheParameterGroupName: {},
                CacheSubnetGroupName: {},
                CacheSecurityGroupNames: {
                  shape: 'S28'
                },
                SecurityGroupIds: {
                  shape: 'S29'
                },
                Tags: {
                  shape: 'S3'
                },
                SnapshotArns: {
                  shape: 'S2a'
                },
                SnapshotName: {},
                PreferredMaintenanceWindow: {},
                Port: {
                  type: 'integer'
                },
                NotificationTopicArn: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                SnapshotRetentionLimit: {
                  type: 'integer'
                },
                SnapshotWindow: {},
                AuthToken: {},
                OutpostMode: {},
                PreferredOutpostArn: {},
                PreferredOutpostArns: {
                  shape: 'S2c'
                },
                LogDeliveryConfigurations: {
                  shape: 'S2d'
                },
                TransitEncryptionEnabled: {
                  type: 'boolean'
                },
                NetworkType: {},
                IpDiscovery: {}
              }
            },
            output: {
              resultWrapper: 'CreateCacheClusterResult',
              type: 'structure',
              members: {
                CacheCluster: {
                  shape: 'S2g'
                }
              }
            }
          },
          CreateCacheParameterGroup: {
            input: {
              type: 'structure',
              required: ['CacheParameterGroupName', 'CacheParameterGroupFamily', 'Description'],
              members: {
                CacheParameterGroupName: {},
                CacheParameterGroupFamily: {},
                Description: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'CreateCacheParameterGroupResult',
              type: 'structure',
              members: {
                CacheParameterGroup: {
                  shape: 'S2t'
                }
              }
            }
          },
          CreateCacheSecurityGroup: {
            input: {
              type: 'structure',
              required: ['CacheSecurityGroupName', 'Description'],
              members: {
                CacheSecurityGroupName: {},
                Description: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'CreateCacheSecurityGroupResult',
              type: 'structure',
              members: {
                CacheSecurityGroup: {
                  shape: 'S8'
                }
              }
            }
          },
          CreateCacheSubnetGroup: {
            input: {
              type: 'structure',
              required: ['CacheSubnetGroupName', 'CacheSubnetGroupDescription', 'SubnetIds'],
              members: {
                CacheSubnetGroupName: {},
                CacheSubnetGroupDescription: {},
                SubnetIds: {
                  shape: 'S2x'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'CreateCacheSubnetGroupResult',
              type: 'structure',
              members: {
                CacheSubnetGroup: {
                  shape: 'S2z'
                }
              }
            }
          },
          CreateGlobalReplicationGroup: {
            input: {
              type: 'structure',
              required: ['GlobalReplicationGroupIdSuffix', 'PrimaryReplicationGroupId'],
              members: {
                GlobalReplicationGroupIdSuffix: {},
                GlobalReplicationGroupDescription: {},
                PrimaryReplicationGroupId: {}
              }
            },
            output: {
              resultWrapper: 'CreateGlobalReplicationGroupResult',
              type: 'structure',
              members: {
                GlobalReplicationGroup: {
                  shape: 'S37'
                }
              }
            }
          },
          CreateReplicationGroup: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId', 'ReplicationGroupDescription'],
              members: {
                ReplicationGroupId: {},
                ReplicationGroupDescription: {},
                GlobalReplicationGroupId: {},
                PrimaryClusterId: {},
                AutomaticFailoverEnabled: {
                  type: 'boolean'
                },
                MultiAZEnabled: {
                  type: 'boolean'
                },
                NumCacheClusters: {
                  type: 'integer'
                },
                PreferredCacheClusterAZs: {
                  shape: 'S23'
                },
                NumNodeGroups: {
                  type: 'integer'
                },
                ReplicasPerNodeGroup: {
                  type: 'integer'
                },
                NodeGroupConfiguration: {
                  type: 'list',
                  member: {
                    shape: 'S21',
                    locationName: 'NodeGroupConfiguration'
                  }
                },
                CacheNodeType: {},
                Engine: {},
                EngineVersion: {},
                CacheParameterGroupName: {},
                CacheSubnetGroupName: {},
                CacheSecurityGroupNames: {
                  shape: 'S28'
                },
                SecurityGroupIds: {
                  shape: 'S29'
                },
                Tags: {
                  shape: 'S3'
                },
                SnapshotArns: {
                  shape: 'S2a'
                },
                SnapshotName: {},
                PreferredMaintenanceWindow: {},
                Port: {
                  type: 'integer'
                },
                NotificationTopicArn: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                SnapshotRetentionLimit: {
                  type: 'integer'
                },
                SnapshotWindow: {},
                AuthToken: {},
                TransitEncryptionEnabled: {
                  type: 'boolean'
                },
                AtRestEncryptionEnabled: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                UserGroupIds: {
                  type: 'list',
                  member: {}
                },
                LogDeliveryConfigurations: {
                  shape: 'S2d'
                },
                DataTieringEnabled: {
                  type: 'boolean'
                },
                NetworkType: {},
                IpDiscovery: {},
                TransitEncryptionMode: {},
                ClusterMode: {},
                ServerlessCacheSnapshotName: {}
              }
            },
            output: {
              resultWrapper: 'CreateReplicationGroupResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          CreateServerlessCache: {
            input: {
              type: 'structure',
              required: ['ServerlessCacheName', 'Engine'],
              members: {
                ServerlessCacheName: {},
                Description: {},
                Engine: {},
                MajorEngineVersion: {},
                CacheUsageLimits: {
                  shape: 'S3h'
                },
                KmsKeyId: {},
                SecurityGroupIds: {
                  shape: 'S29'
                },
                SnapshotArnsToRestore: {
                  shape: 'S2a'
                },
                Tags: {
                  shape: 'S3'
                },
                UserGroupId: {},
                SubnetIds: {
                  shape: 'S3l'
                },
                SnapshotRetentionLimit: {
                  type: 'integer'
                },
                DailySnapshotTime: {}
              }
            },
            output: {
              resultWrapper: 'CreateServerlessCacheResult',
              type: 'structure',
              members: {
                ServerlessCache: {
                  shape: 'S3n'
                }
              }
            }
          },
          CreateServerlessCacheSnapshot: {
            input: {
              type: 'structure',
              required: ['ServerlessCacheSnapshotName', 'ServerlessCacheName'],
              members: {
                ServerlessCacheSnapshotName: {},
                ServerlessCacheName: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'CreateServerlessCacheSnapshotResult',
              type: 'structure',
              members: {
                ServerlessCacheSnapshot: {
                  shape: 'S1u'
                }
              }
            }
          },
          CreateSnapshot: {
            input: {
              type: 'structure',
              required: ['SnapshotName'],
              members: {
                ReplicationGroupId: {},
                CacheClusterId: {},
                SnapshotName: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'CreateSnapshotResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S1y'
                }
              }
            }
          },
          CreateUser: {
            input: {
              type: 'structure',
              required: ['UserId', 'UserName', 'Engine', 'AccessString'],
              members: {
                UserId: {},
                UserName: {},
                Engine: {},
                Passwords: {
                  shape: 'S3w'
                },
                AccessString: {},
                NoPasswordRequired: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S3'
                },
                AuthenticationMode: {
                  shape: 'S3y'
                }
              }
            },
            output: {
              shape: 'S40',
              resultWrapper: 'CreateUserResult'
            }
          },
          CreateUserGroup: {
            input: {
              type: 'structure',
              required: ['UserGroupId', 'Engine'],
              members: {
                UserGroupId: {},
                Engine: {},
                UserIds: {
                  shape: 'S44'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              shape: 'S45',
              resultWrapper: 'CreateUserGroupResult'
            }
          },
          DecreaseNodeGroupsInGlobalReplicationGroup: {
            input: {
              type: 'structure',
              required: ['GlobalReplicationGroupId', 'NodeGroupCount', 'ApplyImmediately'],
              members: {
                GlobalReplicationGroupId: {},
                NodeGroupCount: {
                  type: 'integer'
                },
                GlobalNodeGroupsToRemove: {
                  shape: 'S4b'
                },
                GlobalNodeGroupsToRetain: {
                  shape: 'S4b'
                },
                ApplyImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DecreaseNodeGroupsInGlobalReplicationGroupResult',
              type: 'structure',
              members: {
                GlobalReplicationGroup: {
                  shape: 'S37'
                }
              }
            }
          },
          DecreaseReplicaCount: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId', 'ApplyImmediately'],
              members: {
                ReplicationGroupId: {},
                NewReplicaCount: {
                  type: 'integer'
                },
                ReplicaConfiguration: {
                  shape: 'S4e'
                },
                ReplicasToRemove: {
                  type: 'list',
                  member: {}
                },
                ApplyImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DecreaseReplicaCountResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          DeleteCacheCluster: {
            input: {
              type: 'structure',
              required: ['CacheClusterId'],
              members: {
                CacheClusterId: {},
                FinalSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteCacheClusterResult',
              type: 'structure',
              members: {
                CacheCluster: {
                  shape: 'S2g'
                }
              }
            }
          },
          DeleteCacheParameterGroup: {
            input: {
              type: 'structure',
              required: ['CacheParameterGroupName'],
              members: {
                CacheParameterGroupName: {}
              }
            }
          },
          DeleteCacheSecurityGroup: {
            input: {
              type: 'structure',
              required: ['CacheSecurityGroupName'],
              members: {
                CacheSecurityGroupName: {}
              }
            }
          },
          DeleteCacheSubnetGroup: {
            input: {
              type: 'structure',
              required: ['CacheSubnetGroupName'],
              members: {
                CacheSubnetGroupName: {}
              }
            }
          },
          DeleteGlobalReplicationGroup: {
            input: {
              type: 'structure',
              required: ['GlobalReplicationGroupId', 'RetainPrimaryReplicationGroup'],
              members: {
                GlobalReplicationGroupId: {},
                RetainPrimaryReplicationGroup: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteGlobalReplicationGroupResult',
              type: 'structure',
              members: {
                GlobalReplicationGroup: {
                  shape: 'S37'
                }
              }
            }
          },
          DeleteReplicationGroup: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId'],
              members: {
                ReplicationGroupId: {},
                RetainPrimaryCluster: {
                  type: 'boolean'
                },
                FinalSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteReplicationGroupResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          DeleteServerlessCache: {
            input: {
              type: 'structure',
              required: ['ServerlessCacheName'],
              members: {
                ServerlessCacheName: {},
                FinalSnapshotName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteServerlessCacheResult',
              type: 'structure',
              members: {
                ServerlessCache: {
                  shape: 'S3n'
                }
              }
            }
          },
          DeleteServerlessCacheSnapshot: {
            input: {
              type: 'structure',
              required: ['ServerlessCacheSnapshotName'],
              members: {
                ServerlessCacheSnapshotName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteServerlessCacheSnapshotResult',
              type: 'structure',
              members: {
                ServerlessCacheSnapshot: {
                  shape: 'S1u'
                }
              }
            }
          },
          DeleteSnapshot: {
            input: {
              type: 'structure',
              required: ['SnapshotName'],
              members: {
                SnapshotName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteSnapshotResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S1y'
                }
              }
            }
          },
          DeleteUser: {
            input: {
              type: 'structure',
              required: ['UserId'],
              members: {
                UserId: {}
              }
            },
            output: {
              shape: 'S40',
              resultWrapper: 'DeleteUserResult'
            }
          },
          DeleteUserGroup: {
            input: {
              type: 'structure',
              required: ['UserGroupId'],
              members: {
                UserGroupId: {}
              }
            },
            output: {
              shape: 'S45',
              resultWrapper: 'DeleteUserGroupResult'
            }
          },
          DescribeCacheClusters: {
            input: {
              type: 'structure',
              members: {
                CacheClusterId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                ShowCacheNodeInfo: {
                  type: 'boolean'
                },
                ShowCacheClustersNotInReplicationGroups: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeCacheClustersResult',
              type: 'structure',
              members: {
                Marker: {},
                CacheClusters: {
                  type: 'list',
                  member: {
                    shape: 'S2g',
                    locationName: 'CacheCluster'
                  }
                }
              }
            }
          },
          DescribeCacheEngineVersions: {
            input: {
              type: 'structure',
              members: {
                Engine: {},
                EngineVersion: {},
                CacheParameterGroupFamily: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                DefaultOnly: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeCacheEngineVersionsResult',
              type: 'structure',
              members: {
                Marker: {},
                CacheEngineVersions: {
                  type: 'list',
                  member: {
                    locationName: 'CacheEngineVersion',
                    type: 'structure',
                    members: {
                      Engine: {},
                      EngineVersion: {},
                      CacheParameterGroupFamily: {},
                      CacheEngineDescription: {},
                      CacheEngineVersionDescription: {}
                    }
                  }
                }
              }
            }
          },
          DescribeCacheParameterGroups: {
            input: {
              type: 'structure',
              members: {
                CacheParameterGroupName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeCacheParameterGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                CacheParameterGroups: {
                  type: 'list',
                  member: {
                    shape: 'S2t',
                    locationName: 'CacheParameterGroup'
                  }
                }
              }
            }
          },
          DescribeCacheParameters: {
            input: {
              type: 'structure',
              required: ['CacheParameterGroupName'],
              members: {
                CacheParameterGroupName: {},
                Source: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeCacheParametersResult',
              type: 'structure',
              members: {
                Marker: {},
                Parameters: {
                  shape: 'S5b'
                },
                CacheNodeTypeSpecificParameters: {
                  shape: 'S5e'
                }
              }
            }
          },
          DescribeCacheSecurityGroups: {
            input: {
              type: 'structure',
              members: {
                CacheSecurityGroupName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeCacheSecurityGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                CacheSecurityGroups: {
                  type: 'list',
                  member: {
                    shape: 'S8',
                    locationName: 'CacheSecurityGroup'
                  }
                }
              }
            }
          },
          DescribeCacheSubnetGroups: {
            input: {
              type: 'structure',
              members: {
                CacheSubnetGroupName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeCacheSubnetGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                CacheSubnetGroups: {
                  type: 'list',
                  member: {
                    shape: 'S2z',
                    locationName: 'CacheSubnetGroup'
                  }
                }
              }
            }
          },
          DescribeEngineDefaultParameters: {
            input: {
              type: 'structure',
              required: ['CacheParameterGroupFamily'],
              members: {
                CacheParameterGroupFamily: {},
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
                  type: 'structure',
                  members: {
                    CacheParameterGroupFamily: {},
                    Marker: {},
                    Parameters: {
                      shape: 'S5b'
                    },
                    CacheNodeTypeSpecificParameters: {
                      shape: 'S5e'
                    }
                  },
                  wrapper: true
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
                      Date: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeGlobalReplicationGroups: {
            input: {
              type: 'structure',
              members: {
                GlobalReplicationGroupId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                ShowMemberInfo: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeGlobalReplicationGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                GlobalReplicationGroups: {
                  type: 'list',
                  member: {
                    shape: 'S37',
                    locationName: 'GlobalReplicationGroup'
                  }
                }
              }
            }
          },
          DescribeReplicationGroups: {
            input: {
              type: 'structure',
              members: {
                ReplicationGroupId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReplicationGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                ReplicationGroups: {
                  type: 'list',
                  member: {
                    shape: 'So',
                    locationName: 'ReplicationGroup'
                  }
                }
              }
            }
          },
          DescribeReservedCacheNodes: {
            input: {
              type: 'structure',
              members: {
                ReservedCacheNodeId: {},
                ReservedCacheNodesOfferingId: {},
                CacheNodeType: {},
                Duration: {},
                ProductDescription: {},
                OfferingType: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedCacheNodesResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedCacheNodes: {
                  type: 'list',
                  member: {
                    shape: 'S65',
                    locationName: 'ReservedCacheNode'
                  }
                }
              }
            }
          },
          DescribeReservedCacheNodesOfferings: {
            input: {
              type: 'structure',
              members: {
                ReservedCacheNodesOfferingId: {},
                CacheNodeType: {},
                Duration: {},
                ProductDescription: {},
                OfferingType: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedCacheNodesOfferingsResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedCacheNodesOfferings: {
                  type: 'list',
                  member: {
                    locationName: 'ReservedCacheNodesOffering',
                    type: 'structure',
                    members: {
                      ReservedCacheNodesOfferingId: {},
                      CacheNodeType: {},
                      Duration: {
                        type: 'integer'
                      },
                      FixedPrice: {
                        type: 'double'
                      },
                      UsagePrice: {
                        type: 'double'
                      },
                      ProductDescription: {},
                      OfferingType: {},
                      RecurringCharges: {
                        shape: 'S66'
                      }
                    },
                    wrapper: true
                  }
                }
              }
            }
          },
          DescribeServerlessCacheSnapshots: {
            input: {
              type: 'structure',
              members: {
                ServerlessCacheName: {},
                ServerlessCacheSnapshotName: {},
                SnapshotType: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeServerlessCacheSnapshotsResult',
              type: 'structure',
              members: {
                NextToken: {},
                ServerlessCacheSnapshots: {
                  type: 'list',
                  member: {
                    shape: 'S1u',
                    locationName: 'ServerlessCacheSnapshot'
                  }
                }
              }
            }
          },
          DescribeServerlessCaches: {
            input: {
              type: 'structure',
              members: {
                ServerlessCacheName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeServerlessCachesResult',
              type: 'structure',
              members: {
                NextToken: {},
                ServerlessCaches: {
                  type: 'list',
                  member: {
                    shape: 'S3n'
                  }
                }
              }
            }
          },
          DescribeServiceUpdates: {
            input: {
              type: 'structure',
              members: {
                ServiceUpdateName: {},
                ServiceUpdateStatus: {
                  shape: 'S6j'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeServiceUpdatesResult',
              type: 'structure',
              members: {
                Marker: {},
                ServiceUpdates: {
                  type: 'list',
                  member: {
                    locationName: 'ServiceUpdate',
                    type: 'structure',
                    members: {
                      ServiceUpdateName: {},
                      ServiceUpdateReleaseDate: {
                        type: 'timestamp'
                      },
                      ServiceUpdateEndDate: {
                        type: 'timestamp'
                      },
                      ServiceUpdateSeverity: {},
                      ServiceUpdateRecommendedApplyByDate: {
                        type: 'timestamp'
                      },
                      ServiceUpdateStatus: {},
                      ServiceUpdateDescription: {},
                      ServiceUpdateType: {},
                      Engine: {},
                      EngineVersion: {},
                      AutoUpdateAfterRecommendedApplyByDate: {
                        type: 'boolean'
                      },
                      EstimatedUpdateTime: {}
                    }
                  }
                }
              }
            }
          },
          DescribeSnapshots: {
            input: {
              type: 'structure',
              members: {
                ReplicationGroupId: {},
                CacheClusterId: {},
                SnapshotName: {},
                SnapshotSource: {},
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                },
                ShowNodeGroupConfig: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeSnapshotsResult',
              type: 'structure',
              members: {
                Marker: {},
                Snapshots: {
                  type: 'list',
                  member: {
                    shape: 'S1y',
                    locationName: 'Snapshot'
                  }
                }
              }
            }
          },
          DescribeUpdateActions: {
            input: {
              type: 'structure',
              members: {
                ServiceUpdateName: {},
                ReplicationGroupIds: {
                  shape: 'Sc'
                },
                CacheClusterIds: {
                  shape: 'Sd'
                },
                Engine: {},
                ServiceUpdateStatus: {
                  shape: 'S6j'
                },
                ServiceUpdateTimeRange: {
                  type: 'structure',
                  members: {
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    }
                  }
                },
                UpdateActionStatus: {
                  type: 'list',
                  member: {}
                },
                ShowNodeLevelUpdateStatus: {
                  type: 'boolean'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeUpdateActionsResult',
              type: 'structure',
              members: {
                Marker: {},
                UpdateActions: {
                  type: 'list',
                  member: {
                    locationName: 'UpdateAction',
                    type: 'structure',
                    members: {
                      ReplicationGroupId: {},
                      CacheClusterId: {},
                      ServiceUpdateName: {},
                      ServiceUpdateReleaseDate: {
                        type: 'timestamp'
                      },
                      ServiceUpdateSeverity: {},
                      ServiceUpdateStatus: {},
                      ServiceUpdateRecommendedApplyByDate: {
                        type: 'timestamp'
                      },
                      ServiceUpdateType: {},
                      UpdateActionAvailableDate: {
                        type: 'timestamp'
                      },
                      UpdateActionStatus: {},
                      NodesUpdated: {},
                      UpdateActionStatusModifiedDate: {
                        type: 'timestamp'
                      },
                      SlaMet: {},
                      NodeGroupUpdateStatus: {
                        type: 'list',
                        member: {
                          locationName: 'NodeGroupUpdateStatus',
                          type: 'structure',
                          members: {
                            NodeGroupId: {},
                            NodeGroupMemberUpdateStatus: {
                              type: 'list',
                              member: {
                                locationName: 'NodeGroupMemberUpdateStatus',
                                type: 'structure',
                                members: {
                                  CacheClusterId: {},
                                  CacheNodeId: {},
                                  NodeUpdateStatus: {},
                                  NodeDeletionDate: {
                                    type: 'timestamp'
                                  },
                                  NodeUpdateStartDate: {
                                    type: 'timestamp'
                                  },
                                  NodeUpdateEndDate: {
                                    type: 'timestamp'
                                  },
                                  NodeUpdateInitiatedBy: {},
                                  NodeUpdateInitiatedDate: {
                                    type: 'timestamp'
                                  },
                                  NodeUpdateStatusModifiedDate: {
                                    type: 'timestamp'
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      CacheNodeUpdateStatus: {
                        type: 'list',
                        member: {
                          locationName: 'CacheNodeUpdateStatus',
                          type: 'structure',
                          members: {
                            CacheNodeId: {},
                            NodeUpdateStatus: {},
                            NodeDeletionDate: {
                              type: 'timestamp'
                            },
                            NodeUpdateStartDate: {
                              type: 'timestamp'
                            },
                            NodeUpdateEndDate: {
                              type: 'timestamp'
                            },
                            NodeUpdateInitiatedBy: {},
                            NodeUpdateInitiatedDate: {
                              type: 'timestamp'
                            },
                            NodeUpdateStatusModifiedDate: {
                              type: 'timestamp'
                            }
                          }
                        }
                      },
                      EstimatedUpdateTime: {},
                      Engine: {}
                    }
                  }
                }
              }
            }
          },
          DescribeUserGroups: {
            input: {
              type: 'structure',
              members: {
                UserGroupId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeUserGroupsResult',
              type: 'structure',
              members: {
                UserGroups: {
                  type: 'list',
                  member: {
                    shape: 'S45'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeUsers: {
            input: {
              type: 'structure',
              members: {
                Engine: {},
                UserId: {},
                Filters: {
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
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeUsersResult',
              type: 'structure',
              members: {
                Users: {
                  type: 'list',
                  member: {
                    shape: 'S40'
                  }
                },
                Marker: {}
              }
            }
          },
          DisassociateGlobalReplicationGroup: {
            input: {
              type: 'structure',
              required: ['GlobalReplicationGroupId', 'ReplicationGroupId', 'ReplicationGroupRegion'],
              members: {
                GlobalReplicationGroupId: {},
                ReplicationGroupId: {},
                ReplicationGroupRegion: {}
              }
            },
            output: {
              resultWrapper: 'DisassociateGlobalReplicationGroupResult',
              type: 'structure',
              members: {
                GlobalReplicationGroup: {
                  shape: 'S37'
                }
              }
            }
          },
          ExportServerlessCacheSnapshot: {
            input: {
              type: 'structure',
              required: ['ServerlessCacheSnapshotName', 'S3BucketName'],
              members: {
                ServerlessCacheSnapshotName: {},
                S3BucketName: {}
              }
            },
            output: {
              resultWrapper: 'ExportServerlessCacheSnapshotResult',
              type: 'structure',
              members: {
                ServerlessCacheSnapshot: {
                  shape: 'S1u'
                }
              }
            }
          },
          FailoverGlobalReplicationGroup: {
            input: {
              type: 'structure',
              required: ['GlobalReplicationGroupId', 'PrimaryRegion', 'PrimaryReplicationGroupId'],
              members: {
                GlobalReplicationGroupId: {},
                PrimaryRegion: {},
                PrimaryReplicationGroupId: {}
              }
            },
            output: {
              resultWrapper: 'FailoverGlobalReplicationGroupResult',
              type: 'structure',
              members: {
                GlobalReplicationGroup: {
                  shape: 'S37'
                }
              }
            }
          },
          IncreaseNodeGroupsInGlobalReplicationGroup: {
            input: {
              type: 'structure',
              required: ['GlobalReplicationGroupId', 'NodeGroupCount', 'ApplyImmediately'],
              members: {
                GlobalReplicationGroupId: {},
                NodeGroupCount: {
                  type: 'integer'
                },
                RegionalConfigurations: {
                  type: 'list',
                  member: {
                    locationName: 'RegionalConfiguration',
                    type: 'structure',
                    required: ['ReplicationGroupId', 'ReplicationGroupRegion', 'ReshardingConfiguration'],
                    members: {
                      ReplicationGroupId: {},
                      ReplicationGroupRegion: {},
                      ReshardingConfiguration: {
                        shape: 'S7s'
                      }
                    }
                  }
                },
                ApplyImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'IncreaseNodeGroupsInGlobalReplicationGroupResult',
              type: 'structure',
              members: {
                GlobalReplicationGroup: {
                  shape: 'S37'
                }
              }
            }
          },
          IncreaseReplicaCount: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId', 'ApplyImmediately'],
              members: {
                ReplicationGroupId: {},
                NewReplicaCount: {
                  type: 'integer'
                },
                ReplicaConfiguration: {
                  shape: 'S4e'
                },
                ApplyImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'IncreaseReplicaCountResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          ListAllowedNodeTypeModifications: {
            input: {
              type: 'structure',
              members: {
                CacheClusterId: {},
                ReplicationGroupId: {}
              }
            },
            output: {
              resultWrapper: 'ListAllowedNodeTypeModificationsResult',
              type: 'structure',
              members: {
                ScaleUpModifications: {
                  shape: 'S7z'
                },
                ScaleDownModifications: {
                  shape: 'S7z'
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceName'],
              members: {
                ResourceName: {}
              }
            },
            output: {
              shape: 'S5',
              resultWrapper: 'ListTagsForResourceResult'
            }
          },
          ModifyCacheCluster: {
            input: {
              type: 'structure',
              required: ['CacheClusterId'],
              members: {
                CacheClusterId: {},
                NumCacheNodes: {
                  type: 'integer'
                },
                CacheNodeIdsToRemove: {
                  shape: 'S2i'
                },
                AZMode: {},
                NewAvailabilityZones: {
                  shape: 'S27'
                },
                CacheSecurityGroupNames: {
                  shape: 'S28'
                },
                SecurityGroupIds: {
                  shape: 'S29'
                },
                PreferredMaintenanceWindow: {},
                NotificationTopicArn: {},
                CacheParameterGroupName: {},
                NotificationTopicStatus: {},
                ApplyImmediately: {
                  type: 'boolean'
                },
                EngineVersion: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                SnapshotRetentionLimit: {
                  type: 'integer'
                },
                SnapshotWindow: {},
                CacheNodeType: {},
                AuthToken: {},
                AuthTokenUpdateStrategy: {},
                LogDeliveryConfigurations: {
                  shape: 'S2d'
                },
                IpDiscovery: {}
              }
            },
            output: {
              resultWrapper: 'ModifyCacheClusterResult',
              type: 'structure',
              members: {
                CacheCluster: {
                  shape: 'S2g'
                }
              }
            }
          },
          ModifyCacheParameterGroup: {
            input: {
              type: 'structure',
              required: ['CacheParameterGroupName', 'ParameterNameValues'],
              members: {
                CacheParameterGroupName: {},
                ParameterNameValues: {
                  shape: 'S85'
                }
              }
            },
            output: {
              shape: 'S87',
              resultWrapper: 'ModifyCacheParameterGroupResult'
            }
          },
          ModifyCacheSubnetGroup: {
            input: {
              type: 'structure',
              required: ['CacheSubnetGroupName'],
              members: {
                CacheSubnetGroupName: {},
                CacheSubnetGroupDescription: {},
                SubnetIds: {
                  shape: 'S2x'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyCacheSubnetGroupResult',
              type: 'structure',
              members: {
                CacheSubnetGroup: {
                  shape: 'S2z'
                }
              }
            }
          },
          ModifyGlobalReplicationGroup: {
            input: {
              type: 'structure',
              required: ['GlobalReplicationGroupId', 'ApplyImmediately'],
              members: {
                GlobalReplicationGroupId: {},
                ApplyImmediately: {
                  type: 'boolean'
                },
                CacheNodeType: {},
                EngineVersion: {},
                CacheParameterGroupName: {},
                GlobalReplicationGroupDescription: {},
                AutomaticFailoverEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyGlobalReplicationGroupResult',
              type: 'structure',
              members: {
                GlobalReplicationGroup: {
                  shape: 'S37'
                }
              }
            }
          },
          ModifyReplicationGroup: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId'],
              members: {
                ReplicationGroupId: {},
                ReplicationGroupDescription: {},
                PrimaryClusterId: {},
                SnapshottingClusterId: {},
                AutomaticFailoverEnabled: {
                  type: 'boolean'
                },
                MultiAZEnabled: {
                  type: 'boolean'
                },
                NodeGroupId: {
                  deprecated: true
                },
                CacheSecurityGroupNames: {
                  shape: 'S28'
                },
                SecurityGroupIds: {
                  shape: 'S29'
                },
                PreferredMaintenanceWindow: {},
                NotificationTopicArn: {},
                CacheParameterGroupName: {},
                NotificationTopicStatus: {},
                ApplyImmediately: {
                  type: 'boolean'
                },
                EngineVersion: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                SnapshotRetentionLimit: {
                  type: 'integer'
                },
                SnapshotWindow: {},
                CacheNodeType: {},
                AuthToken: {},
                AuthTokenUpdateStrategy: {},
                UserGroupIdsToAdd: {
                  shape: 'Sx'
                },
                UserGroupIdsToRemove: {
                  shape: 'Sx'
                },
                RemoveUserGroups: {
                  type: 'boolean'
                },
                LogDeliveryConfigurations: {
                  shape: 'S2d'
                },
                IpDiscovery: {},
                TransitEncryptionEnabled: {
                  type: 'boolean'
                },
                TransitEncryptionMode: {},
                ClusterMode: {}
              }
            },
            output: {
              resultWrapper: 'ModifyReplicationGroupResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          ModifyReplicationGroupShardConfiguration: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId', 'NodeGroupCount', 'ApplyImmediately'],
              members: {
                ReplicationGroupId: {},
                NodeGroupCount: {
                  type: 'integer'
                },
                ApplyImmediately: {
                  type: 'boolean'
                },
                ReshardingConfiguration: {
                  shape: 'S7s'
                },
                NodeGroupsToRemove: {
                  type: 'list',
                  member: {
                    locationName: 'NodeGroupToRemove'
                  }
                },
                NodeGroupsToRetain: {
                  type: 'list',
                  member: {
                    locationName: 'NodeGroupToRetain'
                  }
                }
              }
            },
            output: {
              resultWrapper: 'ModifyReplicationGroupShardConfigurationResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          ModifyServerlessCache: {
            input: {
              type: 'structure',
              required: ['ServerlessCacheName'],
              members: {
                ServerlessCacheName: {},
                Description: {},
                CacheUsageLimits: {
                  shape: 'S3h'
                },
                RemoveUserGroup: {
                  type: 'boolean'
                },
                UserGroupId: {},
                SecurityGroupIds: {
                  shape: 'S29'
                },
                SnapshotRetentionLimit: {
                  type: 'integer'
                },
                DailySnapshotTime: {}
              }
            },
            output: {
              resultWrapper: 'ModifyServerlessCacheResult',
              type: 'structure',
              members: {
                ServerlessCache: {
                  shape: 'S3n'
                }
              }
            }
          },
          ModifyUser: {
            input: {
              type: 'structure',
              required: ['UserId'],
              members: {
                UserId: {},
                AccessString: {},
                AppendAccessString: {},
                Passwords: {
                  shape: 'S3w'
                },
                NoPasswordRequired: {
                  type: 'boolean'
                },
                AuthenticationMode: {
                  shape: 'S3y'
                }
              }
            },
            output: {
              shape: 'S40',
              resultWrapper: 'ModifyUserResult'
            }
          },
          ModifyUserGroup: {
            input: {
              type: 'structure',
              required: ['UserGroupId'],
              members: {
                UserGroupId: {},
                UserIdsToAdd: {
                  shape: 'S44'
                },
                UserIdsToRemove: {
                  shape: 'S44'
                }
              }
            },
            output: {
              shape: 'S45',
              resultWrapper: 'ModifyUserGroupResult'
            }
          },
          PurchaseReservedCacheNodesOffering: {
            input: {
              type: 'structure',
              required: ['ReservedCacheNodesOfferingId'],
              members: {
                ReservedCacheNodesOfferingId: {},
                ReservedCacheNodeId: {},
                CacheNodeCount: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'PurchaseReservedCacheNodesOfferingResult',
              type: 'structure',
              members: {
                ReservedCacheNode: {
                  shape: 'S65'
                }
              }
            }
          },
          RebalanceSlotsInGlobalReplicationGroup: {
            input: {
              type: 'structure',
              required: ['GlobalReplicationGroupId', 'ApplyImmediately'],
              members: {
                GlobalReplicationGroupId: {},
                ApplyImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'RebalanceSlotsInGlobalReplicationGroupResult',
              type: 'structure',
              members: {
                GlobalReplicationGroup: {
                  shape: 'S37'
                }
              }
            }
          },
          RebootCacheCluster: {
            input: {
              type: 'structure',
              required: ['CacheClusterId', 'CacheNodeIdsToReboot'],
              members: {
                CacheClusterId: {},
                CacheNodeIdsToReboot: {
                  shape: 'S2i'
                }
              }
            },
            output: {
              resultWrapper: 'RebootCacheClusterResult',
              type: 'structure',
              members: {
                CacheCluster: {
                  shape: 'S2g'
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
            },
            output: {
              shape: 'S5',
              resultWrapper: 'RemoveTagsFromResourceResult'
            }
          },
          ResetCacheParameterGroup: {
            input: {
              type: 'structure',
              required: ['CacheParameterGroupName'],
              members: {
                CacheParameterGroupName: {},
                ResetAllParameters: {
                  type: 'boolean'
                },
                ParameterNameValues: {
                  shape: 'S85'
                }
              }
            },
            output: {
              shape: 'S87',
              resultWrapper: 'ResetCacheParameterGroupResult'
            }
          },
          RevokeCacheSecurityGroupIngress: {
            input: {
              type: 'structure',
              required: ['CacheSecurityGroupName', 'EC2SecurityGroupName', 'EC2SecurityGroupOwnerId'],
              members: {
                CacheSecurityGroupName: {},
                EC2SecurityGroupName: {},
                EC2SecurityGroupOwnerId: {}
              }
            },
            output: {
              resultWrapper: 'RevokeCacheSecurityGroupIngressResult',
              type: 'structure',
              members: {
                CacheSecurityGroup: {
                  shape: 'S8'
                }
              }
            }
          },
          StartMigration: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId', 'CustomerNodeEndpointList'],
              members: {
                ReplicationGroupId: {},
                CustomerNodeEndpointList: {
                  shape: 'S8y'
                }
              }
            },
            output: {
              resultWrapper: 'StartMigrationResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          TestFailover: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId', 'NodeGroupId'],
              members: {
                ReplicationGroupId: {},
                NodeGroupId: {}
              }
            },
            output: {
              resultWrapper: 'TestFailoverResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          },
          TestMigration: {
            input: {
              type: 'structure',
              required: ['ReplicationGroupId', 'CustomerNodeEndpointList'],
              members: {
                ReplicationGroupId: {},
                CustomerNodeEndpointList: {
                  shape: 'S8y'
                }
              }
            },
            output: {
              resultWrapper: 'TestMigrationResult',
              type: 'structure',
              members: {
                ReplicationGroup: {
                  shape: 'So'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
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
          S5: {
            type: 'structure',
            members: {
              TagList: {
                shape: 'S3'
              }
            }
          },
          S8: {
            type: 'structure',
            members: {
              OwnerId: {},
              CacheSecurityGroupName: {},
              Description: {},
              EC2SecurityGroups: {
                type: 'list',
                member: {
                  locationName: 'EC2SecurityGroup',
                  type: 'structure',
                  members: {
                    Status: {},
                    EC2SecurityGroupName: {},
                    EC2SecurityGroupOwnerId: {}
                  }
                }
              },
              ARN: {}
            },
            wrapper: true
          },
          Sc: {
            type: 'list',
            member: {}
          },
          Sd: {
            type: 'list',
            member: {}
          },
          Se: {
            type: 'structure',
            members: {
              ProcessedUpdateActions: {
                type: 'list',
                member: {
                  locationName: 'ProcessedUpdateAction',
                  type: 'structure',
                  members: {
                    ReplicationGroupId: {},
                    CacheClusterId: {},
                    ServiceUpdateName: {},
                    UpdateActionStatus: {}
                  }
                }
              },
              UnprocessedUpdateActions: {
                type: 'list',
                member: {
                  locationName: 'UnprocessedUpdateAction',
                  type: 'structure',
                  members: {
                    ReplicationGroupId: {},
                    CacheClusterId: {},
                    ServiceUpdateName: {},
                    ErrorType: {},
                    ErrorMessage: {}
                  }
                }
              }
            }
          },
          So: {
            type: 'structure',
            members: {
              ReplicationGroupId: {},
              Description: {},
              GlobalReplicationGroupInfo: {
                type: 'structure',
                members: {
                  GlobalReplicationGroupId: {},
                  GlobalReplicationGroupMemberRole: {}
                }
              },
              Status: {},
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  PrimaryClusterId: {},
                  AutomaticFailoverStatus: {},
                  Resharding: {
                    type: 'structure',
                    members: {
                      SlotMigration: {
                        type: 'structure',
                        members: {
                          ProgressPercentage: {
                            type: 'double'
                          }
                        }
                      }
                    }
                  },
                  AuthTokenStatus: {},
                  UserGroups: {
                    type: 'structure',
                    members: {
                      UserGroupIdsToAdd: {
                        shape: 'Sx'
                      },
                      UserGroupIdsToRemove: {
                        shape: 'Sx'
                      }
                    }
                  },
                  LogDeliveryConfigurations: {
                    shape: 'Sz'
                  },
                  TransitEncryptionEnabled: {
                    type: 'boolean'
                  },
                  TransitEncryptionMode: {},
                  ClusterMode: {}
                }
              },
              MemberClusters: {
                type: 'list',
                member: {
                  locationName: 'ClusterId'
                }
              },
              NodeGroups: {
                type: 'list',
                member: {
                  locationName: 'NodeGroup',
                  type: 'structure',
                  members: {
                    NodeGroupId: {},
                    Status: {},
                    PrimaryEndpoint: {
                      shape: 'S1d'
                    },
                    ReaderEndpoint: {
                      shape: 'S1d'
                    },
                    Slots: {},
                    NodeGroupMembers: {
                      type: 'list',
                      member: {
                        locationName: 'NodeGroupMember',
                        type: 'structure',
                        members: {
                          CacheClusterId: {},
                          CacheNodeId: {},
                          ReadEndpoint: {
                            shape: 'S1d'
                          },
                          PreferredAvailabilityZone: {},
                          PreferredOutpostArn: {},
                          CurrentRole: {}
                        }
                      }
                    }
                  }
                }
              },
              SnapshottingClusterId: {},
              AutomaticFailover: {},
              MultiAZ: {},
              ConfigurationEndpoint: {
                shape: 'S1d'
              },
              SnapshotRetentionLimit: {
                type: 'integer'
              },
              SnapshotWindow: {},
              ClusterEnabled: {
                type: 'boolean'
              },
              CacheNodeType: {},
              AuthTokenEnabled: {
                type: 'boolean'
              },
              AuthTokenLastModifiedDate: {
                type: 'timestamp'
              },
              TransitEncryptionEnabled: {
                type: 'boolean'
              },
              AtRestEncryptionEnabled: {
                type: 'boolean'
              },
              MemberClustersOutpostArns: {
                type: 'list',
                member: {
                  locationName: 'ReplicationGroupOutpostArn'
                }
              },
              KmsKeyId: {},
              ARN: {},
              UserGroupIds: {
                shape: 'Sx'
              },
              LogDeliveryConfigurations: {
                shape: 'S1m'
              },
              ReplicationGroupCreateTime: {
                type: 'timestamp'
              },
              DataTiering: {},
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              NetworkType: {},
              IpDiscovery: {},
              TransitEncryptionMode: {},
              ClusterMode: {}
            },
            wrapper: true
          },
          Sx: {
            type: 'list',
            member: {}
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LogType: {},
                DestinationType: {},
                DestinationDetails: {
                  shape: 'S13'
                },
                LogFormat: {}
              }
            },
            locationName: 'PendingLogDeliveryConfiguration'
          },
          S13: {
            type: 'structure',
            members: {
              CloudWatchLogsDetails: {
                type: 'structure',
                members: {
                  LogGroup: {}
                }
              },
              KinesisFirehoseDetails: {
                type: 'structure',
                members: {
                  DeliveryStream: {}
                }
              }
            }
          },
          S1d: {
            type: 'structure',
            members: {
              Address: {},
              Port: {
                type: 'integer'
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              locationName: 'LogDeliveryConfiguration',
              type: 'structure',
              members: {
                LogType: {},
                DestinationType: {},
                DestinationDetails: {
                  shape: 'S13'
                },
                LogFormat: {},
                Status: {},
                Message: {}
              }
            }
          },
          S1u: {
            type: 'structure',
            members: {
              ServerlessCacheSnapshotName: {},
              ARN: {},
              KmsKeyId: {},
              SnapshotType: {},
              Status: {},
              CreateTime: {
                type: 'timestamp'
              },
              ExpiryTime: {
                type: 'timestamp'
              },
              BytesUsedForCache: {},
              ServerlessCacheConfiguration: {
                type: 'structure',
                members: {
                  ServerlessCacheName: {},
                  Engine: {},
                  MajorEngineVersion: {}
                }
              }
            }
          },
          S1y: {
            type: 'structure',
            members: {
              SnapshotName: {},
              ReplicationGroupId: {},
              ReplicationGroupDescription: {},
              CacheClusterId: {},
              SnapshotStatus: {},
              SnapshotSource: {},
              CacheNodeType: {},
              Engine: {},
              EngineVersion: {},
              NumCacheNodes: {
                type: 'integer'
              },
              PreferredAvailabilityZone: {},
              PreferredOutpostArn: {},
              CacheClusterCreateTime: {
                type: 'timestamp'
              },
              PreferredMaintenanceWindow: {},
              TopicArn: {},
              Port: {
                type: 'integer'
              },
              CacheParameterGroupName: {},
              CacheSubnetGroupName: {},
              VpcId: {},
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              SnapshotRetentionLimit: {
                type: 'integer'
              },
              SnapshotWindow: {},
              NumNodeGroups: {
                type: 'integer'
              },
              AutomaticFailover: {},
              NodeSnapshots: {
                type: 'list',
                member: {
                  locationName: 'NodeSnapshot',
                  type: 'structure',
                  members: {
                    CacheClusterId: {},
                    NodeGroupId: {},
                    CacheNodeId: {},
                    NodeGroupConfiguration: {
                      shape: 'S21'
                    },
                    CacheSize: {},
                    CacheNodeCreateTime: {
                      type: 'timestamp'
                    },
                    SnapshotCreateTime: {
                      type: 'timestamp'
                    }
                  },
                  wrapper: true
                }
              },
              KmsKeyId: {},
              ARN: {},
              DataTiering: {}
            },
            wrapper: true
          },
          S21: {
            type: 'structure',
            members: {
              NodeGroupId: {},
              Slots: {},
              ReplicaCount: {
                type: 'integer'
              },
              PrimaryAvailabilityZone: {},
              ReplicaAvailabilityZones: {
                shape: 'S23'
              },
              PrimaryOutpostArn: {},
              ReplicaOutpostArns: {
                type: 'list',
                member: {
                  locationName: 'OutpostArn'
                }
              }
            }
          },
          S23: {
            type: 'list',
            member: {
              locationName: 'AvailabilityZone'
            }
          },
          S27: {
            type: 'list',
            member: {
              locationName: 'PreferredAvailabilityZone'
            }
          },
          S28: {
            type: 'list',
            member: {
              locationName: 'CacheSecurityGroupName'
            }
          },
          S29: {
            type: 'list',
            member: {
              locationName: 'SecurityGroupId'
            }
          },
          S2a: {
            type: 'list',
            member: {
              locationName: 'SnapshotArn'
            }
          },
          S2c: {
            type: 'list',
            member: {
              locationName: 'PreferredOutpostArn'
            }
          },
          S2d: {
            type: 'list',
            member: {
              locationName: 'LogDeliveryConfigurationRequest',
              type: 'structure',
              members: {
                LogType: {},
                DestinationType: {},
                DestinationDetails: {
                  shape: 'S13'
                },
                LogFormat: {},
                Enabled: {
                  type: 'boolean'
                }
              }
            }
          },
          S2g: {
            type: 'structure',
            members: {
              CacheClusterId: {},
              ConfigurationEndpoint: {
                shape: 'S1d'
              },
              ClientDownloadLandingPage: {},
              CacheNodeType: {},
              Engine: {},
              EngineVersion: {},
              CacheClusterStatus: {},
              NumCacheNodes: {
                type: 'integer'
              },
              PreferredAvailabilityZone: {},
              PreferredOutpostArn: {},
              CacheClusterCreateTime: {
                type: 'timestamp'
              },
              PreferredMaintenanceWindow: {},
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  NumCacheNodes: {
                    type: 'integer'
                  },
                  CacheNodeIdsToRemove: {
                    shape: 'S2i'
                  },
                  EngineVersion: {},
                  CacheNodeType: {},
                  AuthTokenStatus: {},
                  LogDeliveryConfigurations: {
                    shape: 'Sz'
                  },
                  TransitEncryptionEnabled: {
                    type: 'boolean'
                  },
                  TransitEncryptionMode: {}
                }
              },
              NotificationConfiguration: {
                type: 'structure',
                members: {
                  TopicArn: {},
                  TopicStatus: {}
                }
              },
              CacheSecurityGroups: {
                type: 'list',
                member: {
                  locationName: 'CacheSecurityGroup',
                  type: 'structure',
                  members: {
                    CacheSecurityGroupName: {},
                    Status: {}
                  }
                }
              },
              CacheParameterGroup: {
                type: 'structure',
                members: {
                  CacheParameterGroupName: {},
                  ParameterApplyStatus: {},
                  CacheNodeIdsToReboot: {
                    shape: 'S2i'
                  }
                }
              },
              CacheSubnetGroupName: {},
              CacheNodes: {
                type: 'list',
                member: {
                  locationName: 'CacheNode',
                  type: 'structure',
                  members: {
                    CacheNodeId: {},
                    CacheNodeStatus: {},
                    CacheNodeCreateTime: {
                      type: 'timestamp'
                    },
                    Endpoint: {
                      shape: 'S1d'
                    },
                    ParameterGroupStatus: {},
                    SourceCacheNodeId: {},
                    CustomerAvailabilityZone: {},
                    CustomerOutpostArn: {}
                  }
                }
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              SecurityGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SecurityGroupId: {},
                    Status: {}
                  }
                }
              },
              ReplicationGroupId: {},
              SnapshotRetentionLimit: {
                type: 'integer'
              },
              SnapshotWindow: {},
              AuthTokenEnabled: {
                type: 'boolean'
              },
              AuthTokenLastModifiedDate: {
                type: 'timestamp'
              },
              TransitEncryptionEnabled: {
                type: 'boolean'
              },
              AtRestEncryptionEnabled: {
                type: 'boolean'
              },
              ARN: {},
              ReplicationGroupLogDeliveryEnabled: {
                type: 'boolean'
              },
              LogDeliveryConfigurations: {
                shape: 'S1m'
              },
              NetworkType: {},
              IpDiscovery: {},
              TransitEncryptionMode: {}
            },
            wrapper: true
          },
          S2i: {
            type: 'list',
            member: {
              locationName: 'CacheNodeId'
            }
          },
          S2t: {
            type: 'structure',
            members: {
              CacheParameterGroupName: {},
              CacheParameterGroupFamily: {},
              Description: {},
              IsGlobal: {
                type: 'boolean'
              },
              ARN: {}
            },
            wrapper: true
          },
          S2x: {
            type: 'list',
            member: {
              locationName: 'SubnetIdentifier'
            }
          },
          S2z: {
            type: 'structure',
            members: {
              CacheSubnetGroupName: {},
              CacheSubnetGroupDescription: {},
              VpcId: {},
              Subnets: {
                type: 'list',
                member: {
                  locationName: 'Subnet',
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {},
                    SubnetAvailabilityZone: {
                      type: 'structure',
                      members: {
                        Name: {}
                      },
                      wrapper: true
                    },
                    SubnetOutpost: {
                      type: 'structure',
                      members: {
                        SubnetOutpostArn: {}
                      }
                    },
                    SupportedNetworkTypes: {
                      shape: 'S34'
                    }
                  }
                }
              },
              ARN: {},
              SupportedNetworkTypes: {
                shape: 'S34'
              }
            },
            wrapper: true
          },
          S34: {
            type: 'list',
            member: {}
          },
          S37: {
            type: 'structure',
            members: {
              GlobalReplicationGroupId: {},
              GlobalReplicationGroupDescription: {},
              Status: {},
              CacheNodeType: {},
              Engine: {},
              EngineVersion: {},
              Members: {
                type: 'list',
                member: {
                  locationName: 'GlobalReplicationGroupMember',
                  type: 'structure',
                  members: {
                    ReplicationGroupId: {},
                    ReplicationGroupRegion: {},
                    Role: {},
                    AutomaticFailover: {},
                    Status: {}
                  },
                  wrapper: true
                }
              },
              ClusterEnabled: {
                type: 'boolean'
              },
              GlobalNodeGroups: {
                type: 'list',
                member: {
                  locationName: 'GlobalNodeGroup',
                  type: 'structure',
                  members: {
                    GlobalNodeGroupId: {},
                    Slots: {}
                  }
                }
              },
              AuthTokenEnabled: {
                type: 'boolean'
              },
              TransitEncryptionEnabled: {
                type: 'boolean'
              },
              AtRestEncryptionEnabled: {
                type: 'boolean'
              },
              ARN: {}
            },
            wrapper: true
          },
          S3h: {
            type: 'structure',
            members: {
              DataStorage: {
                type: 'structure',
                required: ['Unit'],
                members: {
                  Maximum: {
                    type: 'integer'
                  },
                  Minimum: {
                    type: 'integer'
                  },
                  Unit: {}
                }
              },
              ECPUPerSecond: {
                type: 'structure',
                members: {
                  Maximum: {
                    type: 'integer'
                  },
                  Minimum: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S3l: {
            type: 'list',
            member: {
              locationName: 'SubnetId'
            }
          },
          S3n: {
            type: 'structure',
            members: {
              ServerlessCacheName: {},
              Description: {},
              CreateTime: {
                type: 'timestamp'
              },
              Status: {},
              Engine: {},
              MajorEngineVersion: {},
              FullEngineVersion: {},
              CacheUsageLimits: {
                shape: 'S3h'
              },
              KmsKeyId: {},
              SecurityGroupIds: {
                shape: 'S29'
              },
              Endpoint: {
                shape: 'S1d'
              },
              ReaderEndpoint: {
                shape: 'S1d'
              },
              ARN: {},
              UserGroupId: {},
              SubnetIds: {
                shape: 'S3l'
              },
              SnapshotRetentionLimit: {
                type: 'integer'
              },
              DailySnapshotTime: {}
            }
          },
          S3w: {
            type: 'list',
            member: {}
          },
          S3y: {
            type: 'structure',
            members: {
              Type: {},
              Passwords: {
                shape: 'S3w'
              }
            }
          },
          S40: {
            type: 'structure',
            members: {
              UserId: {},
              UserName: {},
              Status: {},
              Engine: {},
              MinimumEngineVersion: {},
              AccessString: {},
              UserGroupIds: {
                shape: 'Sx'
              },
              Authentication: {
                type: 'structure',
                members: {
                  Type: {},
                  PasswordCount: {
                    type: 'integer'
                  }
                }
              },
              ARN: {}
            }
          },
          S44: {
            type: 'list',
            member: {}
          },
          S45: {
            type: 'structure',
            members: {
              UserGroupId: {},
              Status: {},
              Engine: {},
              UserIds: {
                shape: 'S46'
              },
              MinimumEngineVersion: {},
              PendingChanges: {
                type: 'structure',
                members: {
                  UserIdsToRemove: {
                    shape: 'S46'
                  },
                  UserIdsToAdd: {
                    shape: 'S46'
                  }
                }
              },
              ReplicationGroups: {
                type: 'list',
                member: {}
              },
              ServerlessCaches: {
                type: 'list',
                member: {}
              },
              ARN: {}
            }
          },
          S46: {
            type: 'list',
            member: {}
          },
          S4b: {
            type: 'list',
            member: {
              locationName: 'GlobalNodeGroupId'
            }
          },
          S4e: {
            type: 'list',
            member: {
              locationName: 'ConfigureShard',
              type: 'structure',
              required: ['NodeGroupId', 'NewReplicaCount'],
              members: {
                NodeGroupId: {},
                NewReplicaCount: {
                  type: 'integer'
                },
                PreferredAvailabilityZones: {
                  shape: 'S27'
                },
                PreferredOutpostArns: {
                  shape: 'S2c'
                }
              }
            }
          },
          S5b: {
            type: 'list',
            member: {
              locationName: 'Parameter',
              type: 'structure',
              members: {
                ParameterName: {},
                ParameterValue: {},
                Description: {},
                Source: {},
                DataType: {},
                AllowedValues: {},
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {},
                ChangeType: {}
              }
            }
          },
          S5e: {
            type: 'list',
            member: {
              locationName: 'CacheNodeTypeSpecificParameter',
              type: 'structure',
              members: {
                ParameterName: {},
                Description: {},
                Source: {},
                DataType: {},
                AllowedValues: {},
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {},
                CacheNodeTypeSpecificValues: {
                  type: 'list',
                  member: {
                    locationName: 'CacheNodeTypeSpecificValue',
                    type: 'structure',
                    members: {
                      CacheNodeType: {},
                      Value: {}
                    }
                  }
                },
                ChangeType: {}
              }
            }
          },
          S65: {
            type: 'structure',
            members: {
              ReservedCacheNodeId: {},
              ReservedCacheNodesOfferingId: {},
              CacheNodeType: {},
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
              CacheNodeCount: {
                type: 'integer'
              },
              ProductDescription: {},
              OfferingType: {},
              State: {},
              RecurringCharges: {
                shape: 'S66'
              },
              ReservationARN: {}
            },
            wrapper: true
          },
          S66: {
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
          S6j: {
            type: 'list',
            member: {}
          },
          S7s: {
            type: 'list',
            member: {
              locationName: 'ReshardingConfiguration',
              type: 'structure',
              members: {
                NodeGroupId: {},
                PreferredAvailabilityZones: {
                  shape: 'S23'
                }
              }
            }
          },
          S7z: {
            type: 'list',
            member: {}
          },
          S85: {
            type: 'list',
            member: {
              locationName: 'ParameterNameValue',
              type: 'structure',
              members: {
                ParameterName: {},
                ParameterValue: {}
              }
            }
          },
          S87: {
            type: 'structure',
            members: {
              CacheParameterGroupName: {}
            }
          },
          S8y: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Address: {},
                Port: {
                  type: 'integer'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b970624f7a10eed6a4b4dddddc879fd60c08e370.js.map