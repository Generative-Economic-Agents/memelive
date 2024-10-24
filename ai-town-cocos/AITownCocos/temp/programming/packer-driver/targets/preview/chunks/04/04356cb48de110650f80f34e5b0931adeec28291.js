System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-12-01',
          endpointPrefix: 'redshift',
          protocol: 'query',
          serviceFullName: 'Amazon Redshift',
          serviceId: 'Redshift',
          signatureVersion: 'v4',
          uid: 'redshift-2012-12-01',
          xmlNamespace: 'http://redshift.amazonaws.com/doc/2012-12-01/'
        },
        operations: {
          AcceptReservedNodeExchange: {
            input: {
              type: 'structure',
              required: ['ReservedNodeId', 'TargetReservedNodeOfferingId'],
              members: {
                ReservedNodeId: {},
                TargetReservedNodeOfferingId: {}
              }
            },
            output: {
              resultWrapper: 'AcceptReservedNodeExchangeResult',
              type: 'structure',
              members: {
                ExchangedReservedNode: {
                  shape: 'S4'
                }
              }
            }
          },
          AddPartner: {
            input: {
              shape: 'Sb'
            },
            output: {
              shape: 'Sg',
              resultWrapper: 'AddPartnerResult'
            }
          },
          AssociateDataShareConsumer: {
            input: {
              type: 'structure',
              required: ['DataShareArn'],
              members: {
                DataShareArn: {},
                AssociateEntireAccount: {
                  type: 'boolean'
                },
                ConsumerArn: {},
                ConsumerRegion: {},
                AllowWrites: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'Sj',
              resultWrapper: 'AssociateDataShareConsumerResult'
            }
          },
          AuthorizeClusterSecurityGroupIngress: {
            input: {
              type: 'structure',
              required: ['ClusterSecurityGroupName'],
              members: {
                ClusterSecurityGroupName: {},
                CIDRIP: {},
                EC2SecurityGroupName: {},
                EC2SecurityGroupOwnerId: {}
              }
            },
            output: {
              resultWrapper: 'AuthorizeClusterSecurityGroupIngressResult',
              type: 'structure',
              members: {
                ClusterSecurityGroup: {
                  shape: 'Sq'
                }
              }
            }
          },
          AuthorizeDataShare: {
            input: {
              type: 'structure',
              required: ['DataShareArn', 'ConsumerIdentifier'],
              members: {
                DataShareArn: {},
                ConsumerIdentifier: {},
                AllowWrites: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'Sj',
              resultWrapper: 'AuthorizeDataShareResult'
            }
          },
          AuthorizeEndpointAccess: {
            input: {
              type: 'structure',
              required: ['Account'],
              members: {
                ClusterIdentifier: {},
                Account: {},
                VpcIds: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              shape: 'S10',
              resultWrapper: 'AuthorizeEndpointAccessResult'
            }
          },
          AuthorizeSnapshotAccess: {
            input: {
              type: 'structure',
              required: ['AccountWithRestoreAccess'],
              members: {
                SnapshotIdentifier: {},
                SnapshotArn: {},
                SnapshotClusterIdentifier: {},
                AccountWithRestoreAccess: {}
              }
            },
            output: {
              resultWrapper: 'AuthorizeSnapshotAccessResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S14'
                }
              }
            }
          },
          BatchDeleteClusterSnapshots: {
            input: {
              type: 'structure',
              required: ['Identifiers'],
              members: {
                Identifiers: {
                  type: 'list',
                  member: {
                    shape: 'S1c',
                    locationName: 'DeleteClusterSnapshotMessage'
                  }
                }
              }
            },
            output: {
              resultWrapper: 'BatchDeleteClusterSnapshotsResult',
              type: 'structure',
              members: {
                Resources: {
                  shape: 'S1e'
                },
                Errors: {
                  type: 'list',
                  member: {
                    shape: 'S1g',
                    locationName: 'SnapshotErrorMessage'
                  }
                }
              }
            }
          },
          BatchModifyClusterSnapshots: {
            input: {
              type: 'structure',
              required: ['SnapshotIdentifierList'],
              members: {
                SnapshotIdentifierList: {
                  shape: 'S1e'
                },
                ManualSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                Force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'BatchModifyClusterSnapshotsResult',
              type: 'structure',
              members: {
                Resources: {
                  shape: 'S1e'
                },
                Errors: {
                  type: 'list',
                  member: {
                    shape: 'S1g',
                    locationName: 'SnapshotErrorMessage'
                  }
                }
              }
            }
          },
          CancelResize: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {}
              }
            },
            output: {
              shape: 'S1l',
              resultWrapper: 'CancelResizeResult'
            }
          },
          CopyClusterSnapshot: {
            input: {
              type: 'structure',
              required: ['SourceSnapshotIdentifier', 'TargetSnapshotIdentifier'],
              members: {
                SourceSnapshotIdentifier: {},
                SourceSnapshotClusterIdentifier: {},
                TargetSnapshotIdentifier: {},
                ManualSnapshotRetentionPeriod: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'CopyClusterSnapshotResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S14'
                }
              }
            }
          },
          CreateAuthenticationProfile: {
            input: {
              type: 'structure',
              required: ['AuthenticationProfileName', 'AuthenticationProfileContent'],
              members: {
                AuthenticationProfileName: {},
                AuthenticationProfileContent: {}
              }
            },
            output: {
              resultWrapper: 'CreateAuthenticationProfileResult',
              type: 'structure',
              members: {
                AuthenticationProfileName: {},
                AuthenticationProfileContent: {}
              }
            }
          },
          CreateCluster: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier', 'NodeType', 'MasterUsername'],
              members: {
                DBName: {},
                ClusterIdentifier: {},
                ClusterType: {},
                NodeType: {},
                MasterUsername: {},
                MasterUserPassword: {
                  shape: 'S1x'
                },
                ClusterSecurityGroups: {
                  shape: 'S1y'
                },
                VpcSecurityGroupIds: {
                  shape: 'S1z'
                },
                ClusterSubnetGroupName: {},
                AvailabilityZone: {},
                PreferredMaintenanceWindow: {},
                ClusterParameterGroupName: {},
                AutomatedSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                ManualSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                Port: {
                  type: 'integer'
                },
                ClusterVersion: {},
                AllowVersionUpgrade: {
                  type: 'boolean'
                },
                NumberOfNodes: {
                  type: 'integer'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Encrypted: {
                  type: 'boolean'
                },
                HsmClientCertificateIdentifier: {},
                HsmConfigurationIdentifier: {},
                ElasticIp: {},
                Tags: {
                  shape: 'St'
                },
                KmsKeyId: {},
                EnhancedVpcRouting: {
                  type: 'boolean'
                },
                AdditionalInfo: {},
                IamRoles: {
                  shape: 'S20'
                },
                MaintenanceTrackName: {},
                SnapshotScheduleIdentifier: {},
                AvailabilityZoneRelocation: {
                  type: 'boolean'
                },
                AquaConfigurationStatus: {},
                DefaultIamRoleArn: {},
                LoadSampleData: {},
                ManageMasterPassword: {
                  type: 'boolean'
                },
                MasterPasswordSecretKmsKeyId: {},
                IpAddressType: {},
                MultiAZ: {
                  type: 'boolean'
                },
                RedshiftIdcApplicationArn: {}
              }
            },
            output: {
              resultWrapper: 'CreateClusterResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          CreateClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName', 'ParameterGroupFamily', 'Description'],
              members: {
                ParameterGroupName: {},
                ParameterGroupFamily: {},
                Description: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              resultWrapper: 'CreateClusterParameterGroupResult',
              type: 'structure',
              members: {
                ClusterParameterGroup: {
                  shape: 'S33'
                }
              }
            }
          },
          CreateClusterSecurityGroup: {
            input: {
              type: 'structure',
              required: ['ClusterSecurityGroupName', 'Description'],
              members: {
                ClusterSecurityGroupName: {},
                Description: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              resultWrapper: 'CreateClusterSecurityGroupResult',
              type: 'structure',
              members: {
                ClusterSecurityGroup: {
                  shape: 'Sq'
                }
              }
            }
          },
          CreateClusterSnapshot: {
            input: {
              type: 'structure',
              required: ['SnapshotIdentifier', 'ClusterIdentifier'],
              members: {
                SnapshotIdentifier: {},
                ClusterIdentifier: {},
                ManualSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              resultWrapper: 'CreateClusterSnapshotResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S14'
                }
              }
            }
          },
          CreateClusterSubnetGroup: {
            input: {
              type: 'structure',
              required: ['ClusterSubnetGroupName', 'Description', 'SubnetIds'],
              members: {
                ClusterSubnetGroupName: {},
                Description: {},
                SubnetIds: {
                  shape: 'S39'
                },
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              resultWrapper: 'CreateClusterSubnetGroupResult',
              type: 'structure',
              members: {
                ClusterSubnetGroup: {
                  shape: 'S3b'
                }
              }
            }
          },
          CreateCustomDomainAssociation: {
            input: {
              type: 'structure',
              required: ['CustomDomainName', 'CustomDomainCertificateArn', 'ClusterIdentifier'],
              members: {
                CustomDomainName: {},
                CustomDomainCertificateArn: {},
                ClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'CreateCustomDomainAssociationResult',
              type: 'structure',
              members: {
                CustomDomainName: {},
                CustomDomainCertificateArn: {},
                ClusterIdentifier: {},
                CustomDomainCertExpiryTime: {}
              }
            }
          },
          CreateEndpointAccess: {
            input: {
              type: 'structure',
              required: ['EndpointName', 'SubnetGroupName'],
              members: {
                ClusterIdentifier: {},
                ResourceOwner: {},
                EndpointName: {},
                SubnetGroupName: {},
                VpcSecurityGroupIds: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              shape: 'S3n',
              resultWrapper: 'CreateEndpointAccessResult'
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
                SourceIds: {
                  shape: 'S3p'
                },
                EventCategories: {
                  shape: 'S3q'
                },
                Severity: {},
                Enabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              resultWrapper: 'CreateEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S3s'
                }
              }
            }
          },
          CreateHsmClientCertificate: {
            input: {
              type: 'structure',
              required: ['HsmClientCertificateIdentifier'],
              members: {
                HsmClientCertificateIdentifier: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              resultWrapper: 'CreateHsmClientCertificateResult',
              type: 'structure',
              members: {
                HsmClientCertificate: {
                  shape: 'S3v'
                }
              }
            }
          },
          CreateHsmConfiguration: {
            input: {
              type: 'structure',
              required: ['HsmConfigurationIdentifier', 'Description', 'HsmIpAddress', 'HsmPartitionName', 'HsmPartitionPassword', 'HsmServerPublicCertificate'],
              members: {
                HsmConfigurationIdentifier: {},
                Description: {},
                HsmIpAddress: {},
                HsmPartitionName: {},
                HsmPartitionPassword: {},
                HsmServerPublicCertificate: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              resultWrapper: 'CreateHsmConfigurationResult',
              type: 'structure',
              members: {
                HsmConfiguration: {
                  shape: 'S3y'
                }
              }
            }
          },
          CreateRedshiftIdcApplication: {
            input: {
              type: 'structure',
              required: ['IdcInstanceArn', 'RedshiftIdcApplicationName', 'IdcDisplayName', 'IamRoleArn'],
              members: {
                IdcInstanceArn: {},
                RedshiftIdcApplicationName: {},
                IdentityNamespace: {},
                IdcDisplayName: {},
                IamRoleArn: {},
                AuthorizedTokenIssuerList: {
                  shape: 'S43'
                },
                ServiceIntegrations: {
                  shape: 'S46'
                }
              }
            },
            output: {
              resultWrapper: 'CreateRedshiftIdcApplicationResult',
              type: 'structure',
              members: {
                RedshiftIdcApplication: {
                  shape: 'S4d'
                }
              }
            }
          },
          CreateScheduledAction: {
            input: {
              type: 'structure',
              required: ['ScheduledActionName', 'TargetAction', 'Schedule', 'IamRole'],
              members: {
                ScheduledActionName: {},
                TargetAction: {
                  shape: 'S4f'
                },
                Schedule: {},
                IamRole: {},
                ScheduledActionDescription: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Enable: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S4j',
              resultWrapper: 'CreateScheduledActionResult'
            }
          },
          CreateSnapshotCopyGrant: {
            input: {
              type: 'structure',
              required: ['SnapshotCopyGrantName'],
              members: {
                SnapshotCopyGrantName: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              resultWrapper: 'CreateSnapshotCopyGrantResult',
              type: 'structure',
              members: {
                SnapshotCopyGrant: {
                  shape: 'S4o'
                }
              }
            }
          },
          CreateSnapshotSchedule: {
            input: {
              type: 'structure',
              members: {
                ScheduleDefinitions: {
                  shape: 'S4q'
                },
                ScheduleIdentifier: {},
                ScheduleDescription: {},
                Tags: {
                  shape: 'St'
                },
                DryRun: {
                  type: 'boolean'
                },
                NextInvocations: {
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S4r',
              resultWrapper: 'CreateSnapshotScheduleResult'
            }
          },
          CreateTags: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'Tags'],
              members: {
                ResourceName: {},
                Tags: {
                  shape: 'St'
                }
              }
            }
          },
          CreateUsageLimit: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier', 'FeatureType', 'LimitType', 'Amount'],
              members: {
                ClusterIdentifier: {},
                FeatureType: {},
                LimitType: {},
                Amount: {
                  type: 'long'
                },
                Period: {},
                BreachAction: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              shape: 'S51',
              resultWrapper: 'CreateUsageLimitResult'
            }
          },
          DeauthorizeDataShare: {
            input: {
              type: 'structure',
              required: ['DataShareArn', 'ConsumerIdentifier'],
              members: {
                DataShareArn: {},
                ConsumerIdentifier: {}
              }
            },
            output: {
              shape: 'Sj',
              resultWrapper: 'DeauthorizeDataShareResult'
            }
          },
          DeleteAuthenticationProfile: {
            input: {
              type: 'structure',
              required: ['AuthenticationProfileName'],
              members: {
                AuthenticationProfileName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteAuthenticationProfileResult',
              type: 'structure',
              members: {
                AuthenticationProfileName: {}
              }
            }
          },
          DeleteCluster: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {},
                SkipFinalClusterSnapshot: {
                  type: 'boolean'
                },
                FinalClusterSnapshotIdentifier: {},
                FinalClusterSnapshotRetentionPeriod: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteClusterResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          DeleteClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName'],
              members: {
                ParameterGroupName: {}
              }
            }
          },
          DeleteClusterSecurityGroup: {
            input: {
              type: 'structure',
              required: ['ClusterSecurityGroupName'],
              members: {
                ClusterSecurityGroupName: {}
              }
            }
          },
          DeleteClusterSnapshot: {
            input: {
              shape: 'S1c'
            },
            output: {
              resultWrapper: 'DeleteClusterSnapshotResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S14'
                }
              }
            }
          },
          DeleteClusterSubnetGroup: {
            input: {
              type: 'structure',
              required: ['ClusterSubnetGroupName'],
              members: {
                ClusterSubnetGroupName: {}
              }
            }
          },
          DeleteCustomDomainAssociation: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier', 'CustomDomainName'],
              members: {
                ClusterIdentifier: {},
                CustomDomainName: {}
              }
            }
          },
          DeleteEndpointAccess: {
            input: {
              type: 'structure',
              required: ['EndpointName'],
              members: {
                EndpointName: {}
              }
            },
            output: {
              shape: 'S3n',
              resultWrapper: 'DeleteEndpointAccessResult'
            }
          },
          DeleteEventSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName'],
              members: {
                SubscriptionName: {}
              }
            }
          },
          DeleteHsmClientCertificate: {
            input: {
              type: 'structure',
              required: ['HsmClientCertificateIdentifier'],
              members: {
                HsmClientCertificateIdentifier: {}
              }
            }
          },
          DeleteHsmConfiguration: {
            input: {
              type: 'structure',
              required: ['HsmConfigurationIdentifier'],
              members: {
                HsmConfigurationIdentifier: {}
              }
            }
          },
          DeletePartner: {
            input: {
              shape: 'Sb'
            },
            output: {
              shape: 'Sg',
              resultWrapper: 'DeletePartnerResult'
            }
          },
          DeleteRedshiftIdcApplication: {
            input: {
              type: 'structure',
              required: ['RedshiftIdcApplicationArn'],
              members: {
                RedshiftIdcApplicationArn: {}
              }
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            }
          },
          DeleteScheduledAction: {
            input: {
              type: 'structure',
              required: ['ScheduledActionName'],
              members: {
                ScheduledActionName: {}
              }
            }
          },
          DeleteSnapshotCopyGrant: {
            input: {
              type: 'structure',
              required: ['SnapshotCopyGrantName'],
              members: {
                SnapshotCopyGrantName: {}
              }
            }
          },
          DeleteSnapshotSchedule: {
            input: {
              type: 'structure',
              required: ['ScheduleIdentifier'],
              members: {
                ScheduleIdentifier: {}
              }
            }
          },
          DeleteTags: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'TagKeys'],
              members: {
                ResourceName: {},
                TagKeys: {
                  shape: 'S5m'
                }
              }
            }
          },
          DeleteUsageLimit: {
            input: {
              type: 'structure',
              required: ['UsageLimitId'],
              members: {
                UsageLimitId: {}
              }
            }
          },
          DescribeAccountAttributes: {
            input: {
              type: 'structure',
              members: {
                AttributeNames: {
                  type: 'list',
                  member: {
                    locationName: 'AttributeName'
                  }
                }
              }
            },
            output: {
              resultWrapper: 'DescribeAccountAttributesResult',
              type: 'structure',
              members: {
                AccountAttributes: {
                  type: 'list',
                  member: {
                    locationName: 'AccountAttribute',
                    type: 'structure',
                    members: {
                      AttributeName: {},
                      AttributeValues: {
                        type: 'list',
                        member: {
                          locationName: 'AttributeValueTarget',
                          type: 'structure',
                          members: {
                            AttributeValue: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeAuthenticationProfiles: {
            input: {
              type: 'structure',
              members: {
                AuthenticationProfileName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeAuthenticationProfilesResult',
              type: 'structure',
              members: {
                AuthenticationProfiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AuthenticationProfileName: {},
                      AuthenticationProfileContent: {}
                    }
                  }
                }
              }
            }
          },
          DescribeClusterDbRevisions: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeClusterDbRevisionsResult',
              type: 'structure',
              members: {
                Marker: {},
                ClusterDbRevisions: {
                  type: 'list',
                  member: {
                    locationName: 'ClusterDbRevision',
                    type: 'structure',
                    members: {
                      ClusterIdentifier: {},
                      CurrentDatabaseRevision: {},
                      DatabaseRevisionReleaseDate: {
                        type: 'timestamp'
                      },
                      RevisionTargets: {
                        type: 'list',
                        member: {
                          locationName: 'RevisionTarget',
                          type: 'structure',
                          members: {
                            DatabaseRevision: {},
                            Description: {},
                            DatabaseRevisionReleaseDate: {
                              type: 'timestamp'
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
          DescribeClusterParameterGroups: {
            input: {
              type: 'structure',
              members: {
                ParameterGroupName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeClusterParameterGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                ParameterGroups: {
                  type: 'list',
                  member: {
                    shape: 'S33',
                    locationName: 'ClusterParameterGroup'
                  }
                }
              }
            }
          },
          DescribeClusterParameters: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName'],
              members: {
                ParameterGroupName: {},
                Source: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeClusterParametersResult',
              type: 'structure',
              members: {
                Parameters: {
                  shape: 'S6b'
                },
                Marker: {}
              }
            }
          },
          DescribeClusterSecurityGroups: {
            input: {
              type: 'structure',
              members: {
                ClusterSecurityGroupName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeClusterSecurityGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                ClusterSecurityGroups: {
                  type: 'list',
                  member: {
                    shape: 'Sq',
                    locationName: 'ClusterSecurityGroup'
                  }
                }
              }
            }
          },
          DescribeClusterSnapshots: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                SnapshotIdentifier: {},
                SnapshotArn: {},
                SnapshotType: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                OwnerAccount: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                },
                ClusterExists: {
                  type: 'boolean'
                },
                SortingEntities: {
                  type: 'list',
                  member: {
                    locationName: 'SnapshotSortingEntity',
                    type: 'structure',
                    required: ['Attribute'],
                    members: {
                      Attribute: {},
                      SortOrder: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'DescribeClusterSnapshotsResult',
              type: 'structure',
              members: {
                Marker: {},
                Snapshots: {
                  type: 'list',
                  member: {
                    shape: 'S14',
                    locationName: 'Snapshot'
                  }
                }
              }
            }
          },
          DescribeClusterSubnetGroups: {
            input: {
              type: 'structure',
              members: {
                ClusterSubnetGroupName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeClusterSubnetGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                ClusterSubnetGroups: {
                  type: 'list',
                  member: {
                    shape: 'S3b',
                    locationName: 'ClusterSubnetGroup'
                  }
                }
              }
            }
          },
          DescribeClusterTracks: {
            input: {
              type: 'structure',
              members: {
                MaintenanceTrackName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeClusterTracksResult',
              type: 'structure',
              members: {
                MaintenanceTracks: {
                  type: 'list',
                  member: {
                    locationName: 'MaintenanceTrack',
                    type: 'structure',
                    members: {
                      MaintenanceTrackName: {},
                      DatabaseVersion: {},
                      UpdateTargets: {
                        type: 'list',
                        member: {
                          locationName: 'UpdateTarget',
                          type: 'structure',
                          members: {
                            MaintenanceTrackName: {},
                            DatabaseVersion: {},
                            SupportedOperations: {
                              type: 'list',
                              member: {
                                locationName: 'SupportedOperation',
                                type: 'structure',
                                members: {
                                  OperationName: {}
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeClusterVersions: {
            input: {
              type: 'structure',
              members: {
                ClusterVersion: {},
                ClusterParameterGroupFamily: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeClusterVersionsResult',
              type: 'structure',
              members: {
                Marker: {},
                ClusterVersions: {
                  type: 'list',
                  member: {
                    locationName: 'ClusterVersion',
                    type: 'structure',
                    members: {
                      ClusterVersion: {},
                      ClusterParameterGroupFamily: {},
                      Description: {}
                    }
                  }
                }
              }
            }
          },
          DescribeClusters: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeClustersResult',
              type: 'structure',
              members: {
                Marker: {},
                Clusters: {
                  type: 'list',
                  member: {
                    shape: 'S23',
                    locationName: 'Cluster'
                  }
                }
              }
            }
          },
          DescribeCustomDomainAssociations: {
            input: {
              type: 'structure',
              members: {
                CustomDomainName: {},
                CustomDomainCertificateArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeCustomDomainAssociationsResult',
              type: 'structure',
              members: {
                Marker: {},
                Associations: {
                  type: 'list',
                  member: {
                    locationName: 'Association',
                    type: 'structure',
                    members: {
                      CustomDomainCertificateArn: {},
                      CustomDomainCertificateExpiryDate: {
                        type: 'timestamp'
                      },
                      CertificateAssociations: {
                        type: 'list',
                        member: {
                          locationName: 'CertificateAssociation',
                          type: 'structure',
                          members: {
                            CustomDomainName: {},
                            ClusterIdentifier: {}
                          }
                        }
                      }
                    },
                    wrapper: true
                  }
                }
              }
            }
          },
          DescribeDataShares: {
            input: {
              type: 'structure',
              members: {
                DataShareArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDataSharesResult',
              type: 'structure',
              members: {
                DataShares: {
                  shape: 'S7e'
                },
                Marker: {}
              }
            }
          },
          DescribeDataSharesForConsumer: {
            input: {
              type: 'structure',
              members: {
                ConsumerArn: {},
                Status: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDataSharesForConsumerResult',
              type: 'structure',
              members: {
                DataShares: {
                  shape: 'S7e'
                },
                Marker: {}
              }
            }
          },
          DescribeDataSharesForProducer: {
            input: {
              type: 'structure',
              members: {
                ProducerArn: {},
                Status: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDataSharesForProducerResult',
              type: 'structure',
              members: {
                DataShares: {
                  shape: 'S7e'
                },
                Marker: {}
              }
            }
          },
          DescribeDefaultClusterParameters: {
            input: {
              type: 'structure',
              required: ['ParameterGroupFamily'],
              members: {
                ParameterGroupFamily: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDefaultClusterParametersResult',
              type: 'structure',
              members: {
                DefaultClusterParameters: {
                  type: 'structure',
                  members: {
                    ParameterGroupFamily: {},
                    Marker: {},
                    Parameters: {
                      shape: 'S6b'
                    }
                  },
                  wrapper: true
                }
              }
            }
          },
          DescribeEndpointAccess: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                ResourceOwner: {},
                EndpointName: {},
                VpcId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEndpointAccessResult',
              type: 'structure',
              members: {
                EndpointAccessList: {
                  type: 'list',
                  member: {
                    shape: 'S3n'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeEndpointAuthorization: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                Account: {},
                Grantee: {
                  type: 'boolean'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEndpointAuthorizationResult',
              type: 'structure',
              members: {
                EndpointAuthorizationList: {
                  type: 'list',
                  member: {
                    shape: 'S10'
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
                SourceType: {}
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
                      Events: {
                        type: 'list',
                        member: {
                          locationName: 'EventInfoMap',
                          type: 'structure',
                          members: {
                            EventId: {},
                            EventCategories: {
                              shape: 'S3q'
                            },
                            EventDescription: {},
                            Severity: {}
                          },
                          wrapper: true
                        }
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
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
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
                    shape: 'S3s',
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
                        shape: 'S3q'
                      },
                      Severity: {},
                      Date: {
                        type: 'timestamp'
                      },
                      EventId: {}
                    }
                  }
                }
              }
            }
          },
          DescribeHsmClientCertificates: {
            input: {
              type: 'structure',
              members: {
                HsmClientCertificateIdentifier: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeHsmClientCertificatesResult',
              type: 'structure',
              members: {
                Marker: {},
                HsmClientCertificates: {
                  type: 'list',
                  member: {
                    shape: 'S3v',
                    locationName: 'HsmClientCertificate'
                  }
                }
              }
            }
          },
          DescribeHsmConfigurations: {
            input: {
              type: 'structure',
              members: {
                HsmConfigurationIdentifier: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeHsmConfigurationsResult',
              type: 'structure',
              members: {
                Marker: {},
                HsmConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'S3y',
                    locationName: 'HsmConfiguration'
                  }
                }
              }
            }
          },
          DescribeInboundIntegrations: {
            input: {
              type: 'structure',
              members: {
                IntegrationArn: {},
                TargetArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeInboundIntegrationsResult',
              type: 'structure',
              members: {
                Marker: {},
                InboundIntegrations: {
                  type: 'list',
                  member: {
                    locationName: 'InboundIntegration',
                    type: 'structure',
                    members: {
                      IntegrationArn: {},
                      SourceArn: {},
                      TargetArn: {},
                      Status: {},
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
                      CreateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeLoggingStatus: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {}
              }
            },
            output: {
              shape: 'S8m',
              resultWrapper: 'DescribeLoggingStatusResult'
            }
          },
          DescribeNodeConfigurationOptions: {
            input: {
              type: 'structure',
              required: ['ActionType'],
              members: {
                ActionType: {},
                ClusterIdentifier: {},
                SnapshotIdentifier: {},
                SnapshotArn: {},
                OwnerAccount: {},
                Filters: {
                  locationName: 'Filter',
                  type: 'list',
                  member: {
                    locationName: 'NodeConfigurationOptionsFilter',
                    type: 'structure',
                    members: {
                      Name: {},
                      Operator: {},
                      Values: {
                        shape: 'S3h',
                        locationName: 'Value'
                      }
                    }
                  }
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeNodeConfigurationOptionsResult',
              type: 'structure',
              members: {
                NodeConfigurationOptionList: {
                  type: 'list',
                  member: {
                    locationName: 'NodeConfigurationOption',
                    type: 'structure',
                    members: {
                      NodeType: {},
                      NumberOfNodes: {
                        type: 'integer'
                      },
                      EstimatedDiskUtilizationPercent: {
                        type: 'double'
                      },
                      Mode: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeOrderableClusterOptions: {
            input: {
              type: 'structure',
              members: {
                ClusterVersion: {},
                NodeType: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeOrderableClusterOptionsResult',
              type: 'structure',
              members: {
                OrderableClusterOptions: {
                  type: 'list',
                  member: {
                    locationName: 'OrderableClusterOption',
                    type: 'structure',
                    members: {
                      ClusterVersion: {},
                      ClusterType: {},
                      NodeType: {},
                      AvailabilityZones: {
                        type: 'list',
                        member: {
                          shape: 'S3e',
                          locationName: 'AvailabilityZone'
                        }
                      }
                    },
                    wrapper: true
                  }
                },
                Marker: {}
              }
            }
          },
          DescribePartners: {
            input: {
              type: 'structure',
              required: ['AccountId', 'ClusterIdentifier'],
              members: {
                AccountId: {},
                ClusterIdentifier: {},
                DatabaseName: {},
                PartnerName: {}
              }
            },
            output: {
              resultWrapper: 'DescribePartnersResult',
              type: 'structure',
              members: {
                PartnerIntegrationInfoList: {
                  type: 'list',
                  member: {
                    locationName: 'PartnerIntegrationInfo',
                    type: 'structure',
                    members: {
                      DatabaseName: {},
                      PartnerName: {},
                      Status: {},
                      StatusMessage: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeRedshiftIdcApplications: {
            input: {
              type: 'structure',
              members: {
                RedshiftIdcApplicationArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeRedshiftIdcApplicationsResult',
              type: 'structure',
              members: {
                RedshiftIdcApplications: {
                  type: 'list',
                  member: {
                    shape: 'S4d'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeReservedNodeExchangeStatus: {
            input: {
              type: 'structure',
              members: {
                ReservedNodeId: {},
                ReservedNodeExchangeRequestId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedNodeExchangeStatusResult',
              type: 'structure',
              members: {
                ReservedNodeExchangeStatusDetails: {
                  type: 'list',
                  member: {
                    shape: 'S2y',
                    locationName: 'ReservedNodeExchangeStatus'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeReservedNodeOfferings: {
            input: {
              type: 'structure',
              members: {
                ReservedNodeOfferingId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedNodeOfferingsResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedNodeOfferings: {
                  shape: 'S9i'
                }
              }
            }
          },
          DescribeReservedNodes: {
            input: {
              type: 'structure',
              members: {
                ReservedNodeId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedNodesResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedNodes: {
                  type: 'list',
                  member: {
                    shape: 'S4',
                    locationName: 'ReservedNode'
                  }
                }
              }
            }
          },
          DescribeResize: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {}
              }
            },
            output: {
              shape: 'S1l',
              resultWrapper: 'DescribeResizeResult'
            }
          },
          DescribeScheduledActions: {
            input: {
              type: 'structure',
              members: {
                ScheduledActionName: {},
                TargetActionType: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Active: {
                  type: 'boolean'
                },
                Filters: {
                  type: 'list',
                  member: {
                    locationName: 'ScheduledActionFilter',
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S3h'
                      }
                    }
                  }
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeScheduledActionsResult',
              type: 'structure',
              members: {
                Marker: {},
                ScheduledActions: {
                  type: 'list',
                  member: {
                    shape: 'S4j',
                    locationName: 'ScheduledAction'
                  }
                }
              }
            }
          },
          DescribeSnapshotCopyGrants: {
            input: {
              type: 'structure',
              members: {
                SnapshotCopyGrantName: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeSnapshotCopyGrantsResult',
              type: 'structure',
              members: {
                Marker: {},
                SnapshotCopyGrants: {
                  type: 'list',
                  member: {
                    shape: 'S4o',
                    locationName: 'SnapshotCopyGrant'
                  }
                }
              }
            }
          },
          DescribeSnapshotSchedules: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                ScheduleIdentifier: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeSnapshotSchedulesResult',
              type: 'structure',
              members: {
                SnapshotSchedules: {
                  type: 'list',
                  member: {
                    shape: 'S4r',
                    locationName: 'SnapshotSchedule'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeStorage: {
            output: {
              resultWrapper: 'DescribeStorageResult',
              type: 'structure',
              members: {
                TotalBackupSizeInMegaBytes: {
                  type: 'double'
                },
                TotalProvisionedStorageInMegaBytes: {
                  type: 'double'
                }
              }
            }
          },
          DescribeTableRestoreStatus: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                TableRestoreRequestId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeTableRestoreStatusResult',
              type: 'structure',
              members: {
                TableRestoreStatusDetails: {
                  type: 'list',
                  member: {
                    shape: 'Sa5',
                    locationName: 'TableRestoreStatus'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeTags: {
            input: {
              type: 'structure',
              members: {
                ResourceName: {},
                ResourceType: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTagsResult',
              type: 'structure',
              members: {
                TaggedResources: {
                  type: 'list',
                  member: {
                    locationName: 'TaggedResource',
                    type: 'structure',
                    members: {
                      Tag: {
                        shape: 'Su'
                      },
                      ResourceName: {},
                      ResourceType: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeUsageLimits: {
            input: {
              type: 'structure',
              members: {
                UsageLimitId: {},
                ClusterIdentifier: {},
                FeatureType: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                TagKeys: {
                  shape: 'S5m'
                },
                TagValues: {
                  shape: 'S66'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeUsageLimitsResult',
              type: 'structure',
              members: {
                UsageLimits: {
                  type: 'list',
                  member: {
                    shape: 'S51'
                  }
                },
                Marker: {}
              }
            }
          },
          DisableLogging: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {}
              }
            },
            output: {
              shape: 'S8m',
              resultWrapper: 'DisableLoggingResult'
            }
          },
          DisableSnapshotCopy: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DisableSnapshotCopyResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          DisassociateDataShareConsumer: {
            input: {
              type: 'structure',
              required: ['DataShareArn'],
              members: {
                DataShareArn: {},
                DisassociateEntireAccount: {
                  type: 'boolean'
                },
                ConsumerArn: {},
                ConsumerRegion: {}
              }
            },
            output: {
              shape: 'Sj',
              resultWrapper: 'DisassociateDataShareConsumerResult'
            }
          },
          EnableLogging: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {},
                BucketName: {},
                S3KeyPrefix: {},
                LogDestinationType: {},
                LogExports: {
                  shape: 'S8o'
                }
              }
            },
            output: {
              shape: 'S8m',
              resultWrapper: 'EnableLoggingResult'
            }
          },
          EnableSnapshotCopy: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier', 'DestinationRegion'],
              members: {
                ClusterIdentifier: {},
                DestinationRegion: {},
                RetentionPeriod: {
                  type: 'integer'
                },
                SnapshotCopyGrantName: {},
                ManualSnapshotRetentionPeriod: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'EnableSnapshotCopyResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          FailoverPrimaryCompute: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'FailoverPrimaryComputeResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          GetClusterCredentials: {
            input: {
              type: 'structure',
              required: ['DbUser'],
              members: {
                DbUser: {},
                DbName: {},
                ClusterIdentifier: {},
                DurationSeconds: {
                  type: 'integer'
                },
                AutoCreate: {
                  type: 'boolean'
                },
                DbGroups: {
                  type: 'list',
                  member: {
                    locationName: 'DbGroup'
                  }
                },
                CustomDomainName: {}
              }
            },
            output: {
              resultWrapper: 'GetClusterCredentialsResult',
              type: 'structure',
              members: {
                DbUser: {},
                DbPassword: {
                  shape: 'S1x'
                },
                Expiration: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetClusterCredentialsWithIAM: {
            input: {
              type: 'structure',
              members: {
                DbName: {},
                ClusterIdentifier: {},
                DurationSeconds: {
                  type: 'integer'
                },
                CustomDomainName: {}
              }
            },
            output: {
              resultWrapper: 'GetClusterCredentialsWithIAMResult',
              type: 'structure',
              members: {
                DbUser: {},
                DbPassword: {
                  shape: 'S1x'
                },
                Expiration: {
                  type: 'timestamp'
                },
                NextRefreshTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetReservedNodeExchangeConfigurationOptions: {
            input: {
              type: 'structure',
              required: ['ActionType'],
              members: {
                ActionType: {},
                ClusterIdentifier: {},
                SnapshotIdentifier: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'GetReservedNodeExchangeConfigurationOptionsResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedNodeConfigurationOptionList: {
                  type: 'list',
                  member: {
                    locationName: 'ReservedNodeConfigurationOption',
                    type: 'structure',
                    members: {
                      SourceReservedNode: {
                        shape: 'S4'
                      },
                      TargetReservedNodeCount: {
                        type: 'integer'
                      },
                      TargetReservedNodeOffering: {
                        shape: 'S9j'
                      }
                    },
                    wrapper: true
                  }
                }
              }
            }
          },
          GetReservedNodeExchangeOfferings: {
            input: {
              type: 'structure',
              required: ['ReservedNodeId'],
              members: {
                ReservedNodeId: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'GetReservedNodeExchangeOfferingsResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedNodeOfferings: {
                  shape: 'S9i'
                }
              }
            }
          },
          GetResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              resultWrapper: 'GetResourcePolicyResult',
              type: 'structure',
              members: {
                ResourcePolicy: {
                  shape: 'Sb1'
                }
              }
            }
          },
          ListRecommendations: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                NamespaceArn: {},
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'ListRecommendationsResult',
              type: 'structure',
              members: {
                Recommendations: {
                  type: 'list',
                  member: {
                    locationName: 'Recommendation',
                    type: 'structure',
                    members: {
                      Id: {},
                      ClusterIdentifier: {},
                      NamespaceArn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      RecommendationType: {},
                      Title: {},
                      Description: {},
                      Observation: {},
                      ImpactRanking: {},
                      RecommendationText: {},
                      RecommendedActions: {
                        type: 'list',
                        member: {
                          locationName: 'RecommendedAction',
                          type: 'structure',
                          members: {
                            Text: {},
                            Database: {},
                            Command: {},
                            Type: {}
                          }
                        }
                      },
                      ReferenceLinks: {
                        type: 'list',
                        member: {
                          locationName: 'ReferenceLink',
                          type: 'structure',
                          members: {
                            Text: {},
                            Link: {}
                          }
                        }
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ModifyAquaConfiguration: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {},
                AquaConfigurationStatus: {}
              }
            },
            output: {
              resultWrapper: 'ModifyAquaConfigurationResult',
              type: 'structure',
              members: {
                AquaConfiguration: {
                  shape: 'S2w'
                }
              }
            }
          },
          ModifyAuthenticationProfile: {
            input: {
              type: 'structure',
              required: ['AuthenticationProfileName', 'AuthenticationProfileContent'],
              members: {
                AuthenticationProfileName: {},
                AuthenticationProfileContent: {}
              }
            },
            output: {
              resultWrapper: 'ModifyAuthenticationProfileResult',
              type: 'structure',
              members: {
                AuthenticationProfileName: {},
                AuthenticationProfileContent: {}
              }
            }
          },
          ModifyCluster: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {},
                ClusterType: {},
                NodeType: {},
                NumberOfNodes: {
                  type: 'integer'
                },
                ClusterSecurityGroups: {
                  shape: 'S1y'
                },
                VpcSecurityGroupIds: {
                  shape: 'S1z'
                },
                MasterUserPassword: {
                  shape: 'S1x'
                },
                ClusterParameterGroupName: {},
                AutomatedSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                ManualSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                PreferredMaintenanceWindow: {},
                ClusterVersion: {},
                AllowVersionUpgrade: {
                  type: 'boolean'
                },
                HsmClientCertificateIdentifier: {},
                HsmConfigurationIdentifier: {},
                NewClusterIdentifier: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                ElasticIp: {},
                EnhancedVpcRouting: {
                  type: 'boolean'
                },
                MaintenanceTrackName: {},
                Encrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                AvailabilityZoneRelocation: {
                  type: 'boolean'
                },
                AvailabilityZone: {},
                Port: {
                  type: 'integer'
                },
                ManageMasterPassword: {
                  type: 'boolean'
                },
                MasterPasswordSecretKmsKeyId: {},
                IpAddressType: {},
                MultiAZ: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyClusterResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          ModifyClusterDbRevision: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier', 'RevisionTarget'],
              members: {
                ClusterIdentifier: {},
                RevisionTarget: {}
              }
            },
            output: {
              resultWrapper: 'ModifyClusterDbRevisionResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          ModifyClusterIamRoles: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {},
                AddIamRoles: {
                  shape: 'S20'
                },
                RemoveIamRoles: {
                  shape: 'S20'
                },
                DefaultIamRoleArn: {}
              }
            },
            output: {
              resultWrapper: 'ModifyClusterIamRolesResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          ModifyClusterMaintenance: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {},
                DeferMaintenance: {
                  type: 'boolean'
                },
                DeferMaintenanceIdentifier: {},
                DeferMaintenanceStartTime: {
                  type: 'timestamp'
                },
                DeferMaintenanceEndTime: {
                  type: 'timestamp'
                },
                DeferMaintenanceDuration: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyClusterMaintenanceResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          ModifyClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName', 'Parameters'],
              members: {
                ParameterGroupName: {},
                Parameters: {
                  shape: 'S6b'
                }
              }
            },
            output: {
              shape: 'Sbp',
              resultWrapper: 'ModifyClusterParameterGroupResult'
            }
          },
          ModifyClusterSnapshot: {
            input: {
              type: 'structure',
              required: ['SnapshotIdentifier'],
              members: {
                SnapshotIdentifier: {},
                ManualSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                Force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyClusterSnapshotResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S14'
                }
              }
            }
          },
          ModifyClusterSnapshotSchedule: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {},
                ScheduleIdentifier: {},
                DisassociateSchedule: {
                  type: 'boolean'
                }
              }
            }
          },
          ModifyClusterSubnetGroup: {
            input: {
              type: 'structure',
              required: ['ClusterSubnetGroupName', 'SubnetIds'],
              members: {
                ClusterSubnetGroupName: {},
                Description: {},
                SubnetIds: {
                  shape: 'S39'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyClusterSubnetGroupResult',
              type: 'structure',
              members: {
                ClusterSubnetGroup: {
                  shape: 'S3b'
                }
              }
            }
          },
          ModifyCustomDomainAssociation: {
            input: {
              type: 'structure',
              required: ['CustomDomainName', 'CustomDomainCertificateArn', 'ClusterIdentifier'],
              members: {
                CustomDomainName: {},
                CustomDomainCertificateArn: {},
                ClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'ModifyCustomDomainAssociationResult',
              type: 'structure',
              members: {
                CustomDomainName: {},
                CustomDomainCertificateArn: {},
                ClusterIdentifier: {},
                CustomDomainCertExpiryTime: {}
              }
            }
          },
          ModifyEndpointAccess: {
            input: {
              type: 'structure',
              required: ['EndpointName'],
              members: {
                EndpointName: {},
                VpcSecurityGroupIds: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              shape: 'S3n',
              resultWrapper: 'ModifyEndpointAccessResult'
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
                SourceIds: {
                  shape: 'S3p'
                },
                EventCategories: {
                  shape: 'S3q'
                },
                Severity: {},
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
                  shape: 'S3s'
                }
              }
            }
          },
          ModifyRedshiftIdcApplication: {
            input: {
              type: 'structure',
              required: ['RedshiftIdcApplicationArn'],
              members: {
                RedshiftIdcApplicationArn: {},
                IdentityNamespace: {},
                IamRoleArn: {},
                IdcDisplayName: {},
                AuthorizedTokenIssuerList: {
                  shape: 'S43'
                },
                ServiceIntegrations: {
                  shape: 'S46'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyRedshiftIdcApplicationResult',
              type: 'structure',
              members: {
                RedshiftIdcApplication: {
                  shape: 'S4d'
                }
              }
            }
          },
          ModifyScheduledAction: {
            input: {
              type: 'structure',
              required: ['ScheduledActionName'],
              members: {
                ScheduledActionName: {},
                TargetAction: {
                  shape: 'S4f'
                },
                Schedule: {},
                IamRole: {},
                ScheduledActionDescription: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Enable: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S4j',
              resultWrapper: 'ModifyScheduledActionResult'
            }
          },
          ModifySnapshotCopyRetentionPeriod: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier', 'RetentionPeriod'],
              members: {
                ClusterIdentifier: {},
                RetentionPeriod: {
                  type: 'integer'
                },
                Manual: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifySnapshotCopyRetentionPeriodResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          ModifySnapshotSchedule: {
            input: {
              type: 'structure',
              required: ['ScheduleIdentifier', 'ScheduleDefinitions'],
              members: {
                ScheduleIdentifier: {},
                ScheduleDefinitions: {
                  shape: 'S4q'
                }
              }
            },
            output: {
              shape: 'S4r',
              resultWrapper: 'ModifySnapshotScheduleResult'
            }
          },
          ModifyUsageLimit: {
            input: {
              type: 'structure',
              required: ['UsageLimitId'],
              members: {
                UsageLimitId: {},
                Amount: {
                  type: 'long'
                },
                BreachAction: {}
              }
            },
            output: {
              shape: 'S51',
              resultWrapper: 'ModifyUsageLimitResult'
            }
          },
          PauseCluster: {
            input: {
              shape: 'S4h'
            },
            output: {
              resultWrapper: 'PauseClusterResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          PurchaseReservedNodeOffering: {
            input: {
              type: 'structure',
              required: ['ReservedNodeOfferingId'],
              members: {
                ReservedNodeOfferingId: {},
                NodeCount: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'PurchaseReservedNodeOfferingResult',
              type: 'structure',
              members: {
                ReservedNode: {
                  shape: 'S4'
                }
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Policy'],
              members: {
                ResourceArn: {},
                Policy: {}
              }
            },
            output: {
              resultWrapper: 'PutResourcePolicyResult',
              type: 'structure',
              members: {
                ResourcePolicy: {
                  shape: 'Sb1'
                }
              }
            }
          },
          RebootCluster: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'RebootClusterResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          RejectDataShare: {
            input: {
              type: 'structure',
              required: ['DataShareArn'],
              members: {
                DataShareArn: {}
              }
            },
            output: {
              shape: 'Sj',
              resultWrapper: 'RejectDataShareResult'
            }
          },
          ResetClusterParameterGroup: {
            input: {
              type: 'structure',
              required: ['ParameterGroupName'],
              members: {
                ParameterGroupName: {},
                ResetAllParameters: {
                  type: 'boolean'
                },
                Parameters: {
                  shape: 'S6b'
                }
              }
            },
            output: {
              shape: 'Sbp',
              resultWrapper: 'ResetClusterParameterGroupResult'
            }
          },
          ResizeCluster: {
            input: {
              shape: 'S4g'
            },
            output: {
              resultWrapper: 'ResizeClusterResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          RestoreFromClusterSnapshot: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {},
                SnapshotIdentifier: {},
                SnapshotArn: {},
                SnapshotClusterIdentifier: {},
                Port: {
                  type: 'integer'
                },
                AvailabilityZone: {},
                AllowVersionUpgrade: {
                  type: 'boolean'
                },
                ClusterSubnetGroupName: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                OwnerAccount: {},
                HsmClientCertificateIdentifier: {},
                HsmConfigurationIdentifier: {},
                ElasticIp: {},
                ClusterParameterGroupName: {},
                ClusterSecurityGroups: {
                  shape: 'S1y'
                },
                VpcSecurityGroupIds: {
                  shape: 'S1z'
                },
                PreferredMaintenanceWindow: {},
                AutomatedSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                ManualSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                KmsKeyId: {},
                NodeType: {},
                EnhancedVpcRouting: {
                  type: 'boolean'
                },
                AdditionalInfo: {},
                IamRoles: {
                  shape: 'S20'
                },
                MaintenanceTrackName: {},
                SnapshotScheduleIdentifier: {},
                NumberOfNodes: {
                  type: 'integer'
                },
                AvailabilityZoneRelocation: {
                  type: 'boolean'
                },
                AquaConfigurationStatus: {},
                DefaultIamRoleArn: {},
                ReservedNodeId: {},
                TargetReservedNodeOfferingId: {},
                Encrypted: {
                  type: 'boolean'
                },
                ManageMasterPassword: {
                  type: 'boolean'
                },
                MasterPasswordSecretKmsKeyId: {},
                IpAddressType: {},
                MultiAZ: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'RestoreFromClusterSnapshotResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          RestoreTableFromClusterSnapshot: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier', 'SnapshotIdentifier', 'SourceDatabaseName', 'SourceTableName', 'NewTableName'],
              members: {
                ClusterIdentifier: {},
                SnapshotIdentifier: {},
                SourceDatabaseName: {},
                SourceSchemaName: {},
                SourceTableName: {},
                TargetDatabaseName: {},
                TargetSchemaName: {},
                NewTableName: {},
                EnableCaseSensitiveIdentifier: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'RestoreTableFromClusterSnapshotResult',
              type: 'structure',
              members: {
                TableRestoreStatus: {
                  shape: 'Sa5'
                }
              }
            }
          },
          ResumeCluster: {
            input: {
              shape: 'S4i'
            },
            output: {
              resultWrapper: 'ResumeClusterResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          RevokeClusterSecurityGroupIngress: {
            input: {
              type: 'structure',
              required: ['ClusterSecurityGroupName'],
              members: {
                ClusterSecurityGroupName: {},
                CIDRIP: {},
                EC2SecurityGroupName: {},
                EC2SecurityGroupOwnerId: {}
              }
            },
            output: {
              resultWrapper: 'RevokeClusterSecurityGroupIngressResult',
              type: 'structure',
              members: {
                ClusterSecurityGroup: {
                  shape: 'Sq'
                }
              }
            }
          },
          RevokeEndpointAccess: {
            input: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                Account: {},
                VpcIds: {
                  shape: 'Sz'
                },
                Force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S10',
              resultWrapper: 'RevokeEndpointAccessResult'
            }
          },
          RevokeSnapshotAccess: {
            input: {
              type: 'structure',
              required: ['AccountWithRestoreAccess'],
              members: {
                SnapshotIdentifier: {},
                SnapshotArn: {},
                SnapshotClusterIdentifier: {},
                AccountWithRestoreAccess: {}
              }
            },
            output: {
              resultWrapper: 'RevokeSnapshotAccessResult',
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S14'
                }
              }
            }
          },
          RotateEncryptionKey: {
            input: {
              type: 'structure',
              required: ['ClusterIdentifier'],
              members: {
                ClusterIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'RotateEncryptionKeyResult',
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S23'
                }
              }
            }
          },
          UpdatePartnerStatus: {
            input: {
              type: 'structure',
              required: ['AccountId', 'ClusterIdentifier', 'DatabaseName', 'PartnerName', 'Status'],
              members: {
                AccountId: {},
                ClusterIdentifier: {},
                DatabaseName: {},
                PartnerName: {},
                Status: {},
                StatusMessage: {}
              }
            },
            output: {
              shape: 'Sg',
              resultWrapper: 'UpdatePartnerStatusResult'
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              ReservedNodeId: {},
              ReservedNodeOfferingId: {},
              NodeType: {},
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
              NodeCount: {
                type: 'integer'
              },
              State: {},
              OfferingType: {},
              RecurringCharges: {
                shape: 'S8'
              },
              ReservedNodeOfferingType: {}
            },
            wrapper: true
          },
          S8: {
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
          Sb: {
            type: 'structure',
            required: ['AccountId', 'ClusterIdentifier', 'DatabaseName', 'PartnerName'],
            members: {
              AccountId: {},
              ClusterIdentifier: {},
              DatabaseName: {},
              PartnerName: {}
            }
          },
          Sg: {
            type: 'structure',
            members: {
              DatabaseName: {},
              PartnerName: {}
            }
          },
          Sj: {
            type: 'structure',
            members: {
              DataShareArn: {},
              ProducerArn: {},
              AllowPubliclyAccessibleConsumers: {
                type: 'boolean'
              },
              DataShareAssociations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ConsumerIdentifier: {},
                    Status: {},
                    ConsumerRegion: {},
                    CreatedDate: {
                      type: 'timestamp'
                    },
                    StatusChangeDate: {
                      type: 'timestamp'
                    },
                    ProducerAllowedWrites: {
                      type: 'boolean'
                    },
                    ConsumerAcceptedWrites: {
                      type: 'boolean'
                    }
                  }
                }
              },
              ManagedBy: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              ClusterSecurityGroupName: {},
              Description: {},
              EC2SecurityGroups: {
                type: 'list',
                member: {
                  locationName: 'EC2SecurityGroup',
                  type: 'structure',
                  members: {
                    Status: {},
                    EC2SecurityGroupName: {},
                    EC2SecurityGroupOwnerId: {},
                    Tags: {
                      shape: 'St'
                    }
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
                    CIDRIP: {},
                    Tags: {
                      shape: 'St'
                    }
                  }
                }
              },
              Tags: {
                shape: 'St'
              }
            },
            wrapper: true
          },
          St: {
            type: 'list',
            member: {
              shape: 'Su',
              locationName: 'Tag'
            }
          },
          Su: {
            type: 'structure',
            members: {
              Key: {},
              Value: {}
            }
          },
          Sz: {
            type: 'list',
            member: {
              locationName: 'VpcIdentifier'
            }
          },
          S10: {
            type: 'structure',
            members: {
              Grantor: {},
              Grantee: {},
              ClusterIdentifier: {},
              AuthorizeTime: {
                type: 'timestamp'
              },
              ClusterStatus: {},
              Status: {},
              AllowedAllVPCs: {
                type: 'boolean'
              },
              AllowedVPCs: {
                shape: 'Sz'
              },
              EndpointCount: {
                type: 'integer'
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {},
              ClusterIdentifier: {},
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {},
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {},
              ClusterCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {},
              ClusterVersion: {},
              EngineFullVersion: {},
              SnapshotType: {},
              NodeType: {},
              NumberOfNodes: {
                type: 'integer'
              },
              DBName: {},
              VpcId: {},
              Encrypted: {
                type: 'boolean'
              },
              KmsKeyId: {},
              EncryptedWithHSM: {
                type: 'boolean'
              },
              AccountsWithRestoreAccess: {
                type: 'list',
                member: {
                  locationName: 'AccountWithRestoreAccess',
                  type: 'structure',
                  members: {
                    AccountId: {},
                    AccountAlias: {}
                  }
                }
              },
              OwnerAccount: {},
              TotalBackupSizeInMegaBytes: {
                type: 'double'
              },
              ActualIncrementalBackupSizeInMegaBytes: {
                type: 'double'
              },
              BackupProgressInMegaBytes: {
                type: 'double'
              },
              CurrentBackupRateInMegaBytesPerSecond: {
                type: 'double'
              },
              EstimatedSecondsToCompletion: {
                type: 'long'
              },
              ElapsedTimeInSeconds: {
                type: 'long'
              },
              SourceRegion: {},
              Tags: {
                shape: 'St'
              },
              RestorableNodeTypes: {
                type: 'list',
                member: {
                  locationName: 'NodeType'
                }
              },
              EnhancedVpcRouting: {
                type: 'boolean'
              },
              MaintenanceTrackName: {},
              ManualSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ManualSnapshotRemainingDays: {
                type: 'integer'
              },
              SnapshotRetentionStartTime: {
                type: 'timestamp'
              },
              MasterPasswordSecretArn: {},
              MasterPasswordSecretKmsKeyId: {},
              SnapshotArn: {}
            },
            wrapper: true
          },
          S1c: {
            type: 'structure',
            required: ['SnapshotIdentifier'],
            members: {
              SnapshotIdentifier: {},
              SnapshotClusterIdentifier: {}
            }
          },
          S1e: {
            type: 'list',
            member: {
              locationName: 'String'
            }
          },
          S1g: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {},
              SnapshotClusterIdentifier: {},
              FailureCode: {},
              FailureReason: {}
            }
          },
          S1l: {
            type: 'structure',
            members: {
              TargetNodeType: {},
              TargetNumberOfNodes: {
                type: 'integer'
              },
              TargetClusterType: {},
              Status: {},
              ImportTablesCompleted: {
                type: 'list',
                member: {}
              },
              ImportTablesInProgress: {
                type: 'list',
                member: {}
              },
              ImportTablesNotStarted: {
                type: 'list',
                member: {}
              },
              AvgResizeRateInMegaBytesPerSecond: {
                type: 'double'
              },
              TotalResizeDataInMegaBytes: {
                type: 'long'
              },
              ProgressInMegaBytes: {
                type: 'long'
              },
              ElapsedTimeInSeconds: {
                type: 'long'
              },
              EstimatedTimeToCompletionInSeconds: {
                type: 'long'
              },
              ResizeType: {},
              Message: {},
              TargetEncryptionType: {},
              DataTransferProgressPercent: {
                type: 'double'
              }
            }
          },
          S1x: {
            type: 'string',
            sensitive: true
          },
          S1y: {
            type: 'list',
            member: {
              locationName: 'ClusterSecurityGroupName'
            }
          },
          S1z: {
            type: 'list',
            member: {
              locationName: 'VpcSecurityGroupId'
            }
          },
          S20: {
            type: 'list',
            member: {
              locationName: 'IamRoleArn'
            }
          },
          S23: {
            type: 'structure',
            members: {
              ClusterIdentifier: {},
              NodeType: {},
              ClusterStatus: {},
              ClusterAvailabilityStatus: {},
              ModifyStatus: {},
              MasterUsername: {},
              DBName: {},
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {},
                  Port: {
                    type: 'integer'
                  },
                  VpcEndpoints: {
                    type: 'list',
                    member: {
                      shape: 'S26',
                      locationName: 'VpcEndpoint'
                    }
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ManualSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                member: {
                  locationName: 'ClusterSecurityGroup',
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {},
                    Status: {}
                  }
                }
              },
              VpcSecurityGroups: {
                shape: 'S2b'
              },
              ClusterParameterGroups: {
                type: 'list',
                member: {
                  locationName: 'ClusterParameterGroup',
                  type: 'structure',
                  members: {
                    ParameterGroupName: {},
                    ParameterApplyStatus: {},
                    ClusterParameterStatusList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ParameterName: {},
                          ParameterApplyStatus: {},
                          ParameterApplyErrorDescription: {}
                        }
                      }
                    }
                  }
                }
              },
              ClusterSubnetGroupName: {},
              VpcId: {},
              AvailabilityZone: {},
              PreferredMaintenanceWindow: {},
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  MasterUserPassword: {
                    shape: 'S1x'
                  },
                  NodeType: {},
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {},
                  ClusterVersion: {},
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  },
                  ClusterIdentifier: {},
                  PubliclyAccessible: {
                    type: 'boolean'
                  },
                  EnhancedVpcRouting: {
                    type: 'boolean'
                  },
                  MaintenanceTrackName: {},
                  EncryptionType: {}
                }
              },
              ClusterVersion: {},
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              },
              RestoreStatus: {
                type: 'structure',
                members: {
                  Status: {},
                  CurrentRestoreRateInMegaBytesPerSecond: {
                    type: 'double'
                  },
                  SnapshotSizeInMegaBytes: {
                    type: 'long'
                  },
                  ProgressInMegaBytes: {
                    type: 'long'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'long'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'long'
                  }
                }
              },
              DataTransferProgress: {
                type: 'structure',
                members: {
                  Status: {},
                  CurrentRateInMegaBytesPerSecond: {
                    type: 'double'
                  },
                  TotalDataInMegaBytes: {
                    type: 'long'
                  },
                  DataTransferredInMegaBytes: {
                    type: 'long'
                  },
                  EstimatedTimeToCompletionInSeconds: {
                    type: 'long'
                  },
                  ElapsedTimeInSeconds: {
                    type: 'long'
                  }
                }
              },
              HsmStatus: {
                type: 'structure',
                members: {
                  HsmClientCertificateIdentifier: {},
                  HsmConfigurationIdentifier: {},
                  Status: {}
                }
              },
              ClusterSnapshotCopyStatus: {
                type: 'structure',
                members: {
                  DestinationRegion: {},
                  RetentionPeriod: {
                    type: 'long'
                  },
                  ManualSnapshotRetentionPeriod: {
                    type: 'integer'
                  },
                  SnapshotCopyGrantName: {}
                }
              },
              ClusterPublicKey: {},
              ClusterNodes: {
                shape: 'S2m'
              },
              ElasticIpStatus: {
                type: 'structure',
                members: {
                  ElasticIp: {},
                  Status: {}
                }
              },
              ClusterRevisionNumber: {},
              Tags: {
                shape: 'St'
              },
              KmsKeyId: {},
              EnhancedVpcRouting: {
                type: 'boolean'
              },
              IamRoles: {
                type: 'list',
                member: {
                  locationName: 'ClusterIamRole',
                  type: 'structure',
                  members: {
                    IamRoleArn: {},
                    ApplyStatus: {}
                  }
                }
              },
              PendingActions: {
                type: 'list',
                member: {}
              },
              MaintenanceTrackName: {},
              ElasticResizeNumberOfNodeOptions: {},
              DeferredMaintenanceWindows: {
                type: 'list',
                member: {
                  locationName: 'DeferredMaintenanceWindow',
                  type: 'structure',
                  members: {
                    DeferMaintenanceIdentifier: {},
                    DeferMaintenanceStartTime: {
                      type: 'timestamp'
                    },
                    DeferMaintenanceEndTime: {
                      type: 'timestamp'
                    }
                  }
                }
              },
              SnapshotScheduleIdentifier: {},
              SnapshotScheduleState: {},
              ExpectedNextSnapshotScheduleTime: {
                type: 'timestamp'
              },
              ExpectedNextSnapshotScheduleTimeStatus: {},
              NextMaintenanceWindowStartTime: {
                type: 'timestamp'
              },
              ResizeInfo: {
                type: 'structure',
                members: {
                  ResizeType: {},
                  AllowCancelResize: {
                    type: 'boolean'
                  }
                }
              },
              AvailabilityZoneRelocationStatus: {},
              ClusterNamespaceArn: {},
              TotalStorageCapacityInMegaBytes: {
                type: 'long'
              },
              AquaConfiguration: {
                shape: 'S2w'
              },
              DefaultIamRoleArn: {},
              ReservedNodeExchangeStatus: {
                shape: 'S2y'
              },
              CustomDomainName: {},
              CustomDomainCertificateArn: {},
              CustomDomainCertificateExpiryDate: {
                type: 'timestamp'
              },
              MasterPasswordSecretArn: {},
              MasterPasswordSecretKmsKeyId: {},
              IpAddressType: {},
              MultiAZ: {},
              MultiAZSecondary: {
                type: 'structure',
                members: {
                  AvailabilityZone: {},
                  ClusterNodes: {
                    shape: 'S2m'
                  }
                }
              }
            },
            wrapper: true
          },
          S26: {
            type: 'structure',
            members: {
              VpcEndpointId: {},
              VpcId: {},
              NetworkInterfaces: {
                type: 'list',
                member: {
                  locationName: 'NetworkInterface',
                  type: 'structure',
                  members: {
                    NetworkInterfaceId: {},
                    SubnetId: {},
                    PrivateIpAddress: {},
                    AvailabilityZone: {},
                    Ipv6Address: {}
                  }
                }
              }
            }
          },
          S2b: {
            type: 'list',
            member: {
              locationName: 'VpcSecurityGroup',
              type: 'structure',
              members: {
                VpcSecurityGroupId: {},
                Status: {}
              }
            }
          },
          S2m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                NodeRole: {},
                PrivateIPAddress: {},
                PublicIPAddress: {}
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              AquaStatus: {},
              AquaConfigurationStatus: {}
            }
          },
          S2y: {
            type: 'structure',
            members: {
              ReservedNodeExchangeRequestId: {},
              Status: {},
              RequestTime: {
                type: 'timestamp'
              },
              SourceReservedNodeId: {},
              SourceReservedNodeType: {},
              SourceReservedNodeCount: {
                type: 'integer'
              },
              TargetReservedNodeOfferingId: {},
              TargetReservedNodeType: {},
              TargetReservedNodeCount: {
                type: 'integer'
              }
            },
            wrapper: true
          },
          S33: {
            type: 'structure',
            members: {
              ParameterGroupName: {},
              ParameterGroupFamily: {},
              Description: {},
              Tags: {
                shape: 'St'
              }
            },
            wrapper: true
          },
          S39: {
            type: 'list',
            member: {
              locationName: 'SubnetIdentifier'
            }
          },
          S3b: {
            type: 'structure',
            members: {
              ClusterSubnetGroupName: {},
              Description: {},
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
                      shape: 'S3e'
                    },
                    SubnetStatus: {}
                  }
                }
              },
              Tags: {
                shape: 'St'
              },
              SupportedClusterIpAddressTypes: {
                shape: 'S3h'
              }
            },
            wrapper: true
          },
          S3e: {
            type: 'structure',
            members: {
              Name: {},
              SupportedPlatforms: {
                type: 'list',
                member: {
                  locationName: 'SupportedPlatform',
                  type: 'structure',
                  members: {
                    Name: {}
                  },
                  wrapper: true
                }
              }
            },
            wrapper: true
          },
          S3h: {
            type: 'list',
            member: {
              locationName: 'item'
            }
          },
          S3n: {
            type: 'structure',
            members: {
              ClusterIdentifier: {},
              ResourceOwner: {},
              SubnetGroupName: {},
              EndpointStatus: {},
              EndpointName: {},
              EndpointCreateTime: {
                type: 'timestamp'
              },
              Port: {
                type: 'integer'
              },
              Address: {},
              VpcSecurityGroups: {
                shape: 'S2b'
              },
              VpcEndpoint: {
                shape: 'S26'
              }
            }
          },
          S3p: {
            type: 'list',
            member: {
              locationName: 'SourceId'
            }
          },
          S3q: {
            type: 'list',
            member: {
              locationName: 'EventCategory'
            }
          },
          S3s: {
            type: 'structure',
            members: {
              CustomerAwsId: {},
              CustSubscriptionId: {},
              SnsTopicArn: {},
              Status: {},
              SubscriptionCreationTime: {
                type: 'timestamp'
              },
              SourceType: {},
              SourceIdsList: {
                shape: 'S3p'
              },
              EventCategoriesList: {
                shape: 'S3q'
              },
              Severity: {},
              Enabled: {
                type: 'boolean'
              },
              Tags: {
                shape: 'St'
              }
            },
            wrapper: true
          },
          S3v: {
            type: 'structure',
            members: {
              HsmClientCertificateIdentifier: {},
              HsmClientCertificatePublicKey: {},
              Tags: {
                shape: 'St'
              }
            },
            wrapper: true
          },
          S3y: {
            type: 'structure',
            members: {
              HsmConfigurationIdentifier: {},
              Description: {},
              HsmIpAddress: {},
              HsmPartitionName: {},
              Tags: {
                shape: 'St'
              }
            },
            wrapper: true
          },
          S43: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TrustedTokenIssuerArn: {},
                AuthorizedAudiencesList: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S46: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LakeFormation: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LakeFormationQuery: {
                        type: 'structure',
                        required: ['Authorization'],
                        members: {
                          Authorization: {}
                        }
                      }
                    },
                    union: true
                  }
                }
              },
              union: true
            }
          },
          S4d: {
            type: 'structure',
            members: {
              IdcInstanceArn: {},
              RedshiftIdcApplicationName: {},
              RedshiftIdcApplicationArn: {},
              IdentityNamespace: {},
              IdcDisplayName: {},
              IamRoleArn: {},
              IdcManagedApplicationArn: {},
              IdcOnboardStatus: {},
              AuthorizedTokenIssuerList: {
                shape: 'S43'
              },
              ServiceIntegrations: {
                shape: 'S46'
              }
            },
            wrapper: true
          },
          S4f: {
            type: 'structure',
            members: {
              ResizeCluster: {
                shape: 'S4g'
              },
              PauseCluster: {
                shape: 'S4h'
              },
              ResumeCluster: {
                shape: 'S4i'
              }
            }
          },
          S4g: {
            type: 'structure',
            required: ['ClusterIdentifier'],
            members: {
              ClusterIdentifier: {},
              ClusterType: {},
              NodeType: {},
              NumberOfNodes: {
                type: 'integer'
              },
              Classic: {
                type: 'boolean'
              },
              ReservedNodeId: {},
              TargetReservedNodeOfferingId: {}
            }
          },
          S4h: {
            type: 'structure',
            required: ['ClusterIdentifier'],
            members: {
              ClusterIdentifier: {}
            }
          },
          S4i: {
            type: 'structure',
            required: ['ClusterIdentifier'],
            members: {
              ClusterIdentifier: {}
            }
          },
          S4j: {
            type: 'structure',
            members: {
              ScheduledActionName: {},
              TargetAction: {
                shape: 'S4f'
              },
              Schedule: {},
              IamRole: {},
              ScheduledActionDescription: {},
              State: {},
              NextInvocations: {
                type: 'list',
                member: {
                  locationName: 'ScheduledActionTime',
                  type: 'timestamp'
                }
              },
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              }
            }
          },
          S4o: {
            type: 'structure',
            members: {
              SnapshotCopyGrantName: {},
              KmsKeyId: {},
              Tags: {
                shape: 'St'
              }
            },
            wrapper: true
          },
          S4q: {
            type: 'list',
            member: {
              locationName: 'ScheduleDefinition'
            }
          },
          S4r: {
            type: 'structure',
            members: {
              ScheduleDefinitions: {
                shape: 'S4q'
              },
              ScheduleIdentifier: {},
              ScheduleDescription: {},
              Tags: {
                shape: 'St'
              },
              NextInvocations: {
                type: 'list',
                member: {
                  locationName: 'SnapshotTime',
                  type: 'timestamp'
                }
              },
              AssociatedClusterCount: {
                type: 'integer'
              },
              AssociatedClusters: {
                type: 'list',
                member: {
                  locationName: 'ClusterAssociatedToSchedule',
                  type: 'structure',
                  members: {
                    ClusterIdentifier: {},
                    ScheduleAssociationState: {}
                  }
                }
              }
            }
          },
          S51: {
            type: 'structure',
            members: {
              UsageLimitId: {},
              ClusterIdentifier: {},
              FeatureType: {},
              LimitType: {},
              Amount: {
                type: 'long'
              },
              Period: {},
              BreachAction: {},
              Tags: {
                shape: 'St'
              }
            }
          },
          S5m: {
            type: 'list',
            member: {
              locationName: 'TagKey'
            }
          },
          S66: {
            type: 'list',
            member: {
              locationName: 'TagValue'
            }
          },
          S6b: {
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
                ApplyType: {},
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {}
              }
            }
          },
          S7e: {
            type: 'list',
            member: {
              shape: 'Sj'
            }
          },
          S8m: {
            type: 'structure',
            members: {
              LoggingEnabled: {
                type: 'boolean'
              },
              BucketName: {},
              S3KeyPrefix: {},
              LastSuccessfulDeliveryTime: {
                type: 'timestamp'
              },
              LastFailureTime: {
                type: 'timestamp'
              },
              LastFailureMessage: {},
              LogDestinationType: {},
              LogExports: {
                shape: 'S8o'
              }
            }
          },
          S8o: {
            type: 'list',
            member: {}
          },
          S9i: {
            type: 'list',
            member: {
              shape: 'S9j',
              locationName: 'ReservedNodeOffering'
            }
          },
          S9j: {
            type: 'structure',
            members: {
              ReservedNodeOfferingId: {},
              NodeType: {},
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
              OfferingType: {},
              RecurringCharges: {
                shape: 'S8'
              },
              ReservedNodeOfferingType: {}
            },
            wrapper: true
          },
          Sa5: {
            type: 'structure',
            members: {
              TableRestoreRequestId: {},
              Status: {},
              Message: {},
              RequestTime: {
                type: 'timestamp'
              },
              ProgressInMegaBytes: {
                type: 'long'
              },
              TotalDataInMegaBytes: {
                type: 'long'
              },
              ClusterIdentifier: {},
              SnapshotIdentifier: {},
              SourceDatabaseName: {},
              SourceSchemaName: {},
              SourceTableName: {},
              TargetDatabaseName: {},
              TargetSchemaName: {},
              NewTableName: {}
            },
            wrapper: true
          },
          Sb1: {
            type: 'structure',
            members: {
              ResourceArn: {},
              Policy: {}
            }
          },
          Sbp: {
            type: 'structure',
            members: {
              ParameterGroupName: {},
              ParameterGroupStatus: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=04356cb48de110650f80f34e5b0931adeec28291.js.map