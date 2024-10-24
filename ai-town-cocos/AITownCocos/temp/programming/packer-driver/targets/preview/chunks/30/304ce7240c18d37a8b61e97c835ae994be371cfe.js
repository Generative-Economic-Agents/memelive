System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-02-01',
          endpointPrefix: 'elasticfilesystem',
          protocol: 'rest-json',
          serviceAbbreviation: 'EFS',
          serviceFullName: 'Amazon Elastic File System',
          serviceId: 'EFS',
          signatureVersion: 'v4',
          uid: 'elasticfilesystem-2015-02-01'
        },
        operations: {
          CreateAccessPoint: {
            http: {
              requestUri: '/2015-02-01/access-points',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ClientToken', 'FileSystemId'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S3'
                },
                FileSystemId: {},
                PosixUser: {
                  shape: 'S8'
                },
                RootDirectory: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              shape: 'Si'
            }
          },
          CreateFileSystem: {
            http: {
              requestUri: '/2015-02-01/file-systems',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['CreationToken'],
              members: {
                CreationToken: {
                  idempotencyToken: true
                },
                PerformanceMode: {},
                Encrypted: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                ThroughputMode: {},
                ProvisionedThroughputInMibps: {
                  type: 'double'
                },
                AvailabilityZoneName: {},
                Backup: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              shape: 'Sx'
            }
          },
          CreateMountTarget: {
            http: {
              requestUri: '/2015-02-01/mount-targets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId', 'SubnetId'],
              members: {
                FileSystemId: {},
                SubnetId: {},
                IpAddress: {},
                SecurityGroups: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              shape: 'S1c'
            }
          },
          CreateReplicationConfiguration: {
            http: {
              requestUri: '/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SourceFileSystemId', 'Destinations'],
              members: {
                SourceFileSystemId: {
                  location: 'uri',
                  locationName: 'SourceFileSystemId'
                },
                Destinations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Region: {},
                      AvailabilityZoneName: {},
                      KmsKeyId: {},
                      FileSystemId: {}
                    }
                  }
                }
              }
            },
            output: {
              shape: 'S1k'
            }
          },
          CreateTags: {
            http: {
              requestUri: '/2015-02-01/create-tags/{FileSystemId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FileSystemId', 'Tags'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Use TagResource.'
          },
          DeleteAccessPoint: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-02-01/access-points/{AccessPointId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccessPointId'],
              members: {
                AccessPointId: {
                  location: 'uri',
                  locationName: 'AccessPointId'
                }
              }
            }
          },
          DeleteFileSystem: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                }
              }
            }
          },
          DeleteFileSystemPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                }
              }
            }
          },
          DeleteMountTarget: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-02-01/mount-targets/{MountTargetId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MountTargetId'],
              members: {
                MountTargetId: {
                  location: 'uri',
                  locationName: 'MountTargetId'
                }
              }
            }
          },
          DeleteReplicationConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['SourceFileSystemId'],
              members: {
                SourceFileSystemId: {
                  location: 'uri',
                  locationName: 'SourceFileSystemId'
                }
              }
            }
          },
          DeleteTags: {
            http: {
              requestUri: '/2015-02-01/delete-tags/{FileSystemId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FileSystemId', 'TagKeys'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                },
                TagKeys: {
                  shape: 'S1v'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Use UntagResource.'
          },
          DescribeAccessPoints: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/access-points',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                AccessPointId: {
                  location: 'querystring',
                  locationName: 'AccessPointId'
                },
                FileSystemId: {
                  location: 'querystring',
                  locationName: 'FileSystemId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessPoints: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAccountPreferences: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/account-preferences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceIdPreference: {
                  shape: 'S23'
                },
                NextToken: {}
              }
            }
          },
          DescribeBackupPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}/backup-policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                }
              }
            },
            output: {
              shape: 'S28'
            }
          },
          DescribeFileSystemPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                }
              }
            },
            output: {
              shape: 'S2c'
            }
          },
          DescribeFileSystems: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/file-systems',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                CreationToken: {
                  location: 'querystring',
                  locationName: 'CreationToken'
                },
                FileSystemId: {
                  location: 'querystring',
                  locationName: 'FileSystemId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                FileSystems: {
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                },
                NextMarker: {}
              }
            }
          },
          DescribeLifecycleConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                }
              }
            },
            output: {
              shape: 'S2k'
            }
          },
          DescribeMountTargetSecurityGroups: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/mount-targets/{MountTargetId}/security-groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MountTargetId'],
              members: {
                MountTargetId: {
                  location: 'uri',
                  locationName: 'MountTargetId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SecurityGroups'],
              members: {
                SecurityGroups: {
                  shape: 'S1a'
                }
              }
            }
          },
          DescribeMountTargets: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/mount-targets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                FileSystemId: {
                  location: 'querystring',
                  locationName: 'FileSystemId'
                },
                MountTargetId: {
                  location: 'querystring',
                  locationName: 'MountTargetId'
                },
                AccessPointId: {
                  location: 'querystring',
                  locationName: 'AccessPointId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                MountTargets: {
                  type: 'list',
                  member: {
                    shape: 'S1c'
                  }
                },
                NextMarker: {}
              }
            }
          },
          DescribeReplicationConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/file-systems/replication-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FileSystemId: {
                  location: 'querystring',
                  locationName: 'FileSystemId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Replications: {
                  type: 'list',
                  member: {
                    shape: 'S1k'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeTags: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/tags/{FileSystemId}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Tags'],
              members: {
                Marker: {},
                Tags: {
                  shape: 'S3'
                },
                NextMarker: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Use ListTagsForResource.'
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/2015-02-01/resource-tags/{ResourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S3'
                },
                NextToken: {}
              }
            }
          },
          ModifyMountTargetSecurityGroups: {
            http: {
              method: 'PUT',
              requestUri: '/2015-02-01/mount-targets/{MountTargetId}/security-groups',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['MountTargetId'],
              members: {
                MountTargetId: {
                  location: 'uri',
                  locationName: 'MountTargetId'
                },
                SecurityGroups: {
                  shape: 'S1a'
                }
              }
            }
          },
          PutAccountPreferences: {
            http: {
              method: 'PUT',
              requestUri: '/2015-02-01/account-preferences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceIdType'],
              members: {
                ResourceIdType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceIdPreference: {
                  shape: 'S23'
                }
              }
            }
          },
          PutBackupPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}/backup-policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId', 'BackupPolicy'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                },
                BackupPolicy: {
                  shape: 'S29'
                }
              }
            },
            output: {
              shape: 'S28'
            }
          },
          PutFileSystemPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId', 'Policy'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                },
                Policy: {},
                BypassPolicyLockoutSafetyCheck: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S2c'
            }
          },
          PutLifecycleConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId', 'LifecyclePolicies'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                },
                LifecyclePolicies: {
                  shape: 'S2l'
                }
              }
            },
            output: {
              shape: 'S2k'
            }
          },
          TagResource: {
            http: {
              requestUri: '/2015-02-01/resource-tags/{ResourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceId', 'Tags'],
              members: {
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-02-01/resource-tags/{ResourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceId', 'TagKeys'],
              members: {
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                },
                TagKeys: {
                  shape: 'S1v',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              }
            }
          },
          UpdateFileSystem: {
            http: {
              method: 'PUT',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                },
                ThroughputMode: {},
                ProvisionedThroughputInMibps: {
                  type: 'double'
                }
              }
            },
            output: {
              shape: 'Sx'
            }
          },
          UpdateFileSystemProtection: {
            http: {
              method: 'PUT',
              requestUri: '/2015-02-01/file-systems/{FileSystemId}/protection',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {
                  location: 'uri',
                  locationName: 'FileSystemId'
                },
                ReplicationOverwriteProtection: {}
              }
            },
            output: {
              shape: 'S15'
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
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
          S8: {
            type: 'structure',
            required: ['Uid', 'Gid'],
            members: {
              Uid: {
                type: 'long'
              },
              Gid: {
                type: 'long'
              },
              SecondaryGids: {
                type: 'list',
                member: {
                  type: 'long'
                }
              }
            }
          },
          Sc: {
            type: 'structure',
            members: {
              Path: {},
              CreationInfo: {
                type: 'structure',
                required: ['OwnerUid', 'OwnerGid', 'Permissions'],
                members: {
                  OwnerUid: {
                    type: 'long'
                  },
                  OwnerGid: {
                    type: 'long'
                  },
                  Permissions: {}
                }
              }
            }
          },
          Si: {
            type: 'structure',
            members: {
              ClientToken: {},
              Name: {},
              Tags: {
                shape: 'S3'
              },
              AccessPointId: {},
              AccessPointArn: {},
              FileSystemId: {},
              PosixUser: {
                shape: 'S8'
              },
              RootDirectory: {
                shape: 'Sc'
              },
              OwnerId: {},
              LifeCycleState: {}
            }
          },
          Sx: {
            type: 'structure',
            required: ['OwnerId', 'CreationToken', 'FileSystemId', 'CreationTime', 'LifeCycleState', 'NumberOfMountTargets', 'SizeInBytes', 'PerformanceMode', 'Tags'],
            members: {
              OwnerId: {},
              CreationToken: {},
              FileSystemId: {},
              FileSystemArn: {},
              CreationTime: {
                type: 'timestamp'
              },
              LifeCycleState: {},
              Name: {},
              NumberOfMountTargets: {
                type: 'integer'
              },
              SizeInBytes: {
                type: 'structure',
                required: ['Value'],
                members: {
                  Value: {
                    type: 'long'
                  },
                  Timestamp: {
                    type: 'timestamp'
                  },
                  ValueInIA: {
                    type: 'long'
                  },
                  ValueInStandard: {
                    type: 'long'
                  },
                  ValueInArchive: {
                    type: 'long'
                  }
                }
              },
              PerformanceMode: {},
              Encrypted: {
                type: 'boolean'
              },
              KmsKeyId: {},
              ThroughputMode: {},
              ProvisionedThroughputInMibps: {
                type: 'double'
              },
              AvailabilityZoneName: {},
              AvailabilityZoneId: {},
              Tags: {
                shape: 'S3'
              },
              FileSystemProtection: {
                shape: 'S15'
              }
            }
          },
          S15: {
            type: 'structure',
            members: {
              ReplicationOverwriteProtection: {}
            }
          },
          S1a: {
            type: 'list',
            member: {}
          },
          S1c: {
            type: 'structure',
            required: ['MountTargetId', 'FileSystemId', 'SubnetId', 'LifeCycleState'],
            members: {
              OwnerId: {},
              MountTargetId: {},
              FileSystemId: {},
              SubnetId: {},
              LifeCycleState: {},
              IpAddress: {},
              NetworkInterfaceId: {},
              AvailabilityZoneId: {},
              AvailabilityZoneName: {},
              VpcId: {}
            }
          },
          S1k: {
            type: 'structure',
            required: ['SourceFileSystemId', 'SourceFileSystemRegion', 'SourceFileSystemArn', 'OriginalSourceFileSystemArn', 'CreationTime', 'Destinations'],
            members: {
              SourceFileSystemId: {},
              SourceFileSystemRegion: {},
              SourceFileSystemArn: {},
              OriginalSourceFileSystemArn: {},
              CreationTime: {
                type: 'timestamp'
              },
              Destinations: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Status', 'FileSystemId', 'Region'],
                  members: {
                    Status: {},
                    FileSystemId: {},
                    Region: {},
                    LastReplicatedTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          S1v: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'structure',
            members: {
              ResourceIdType: {},
              Resources: {
                type: 'list',
                member: {}
              }
            }
          },
          S28: {
            type: 'structure',
            members: {
              BackupPolicy: {
                shape: 'S29'
              }
            }
          },
          S29: {
            type: 'structure',
            required: ['Status'],
            members: {
              Status: {}
            }
          },
          S2c: {
            type: 'structure',
            members: {
              FileSystemId: {},
              Policy: {}
            }
          },
          S2k: {
            type: 'structure',
            members: {
              LifecyclePolicies: {
                shape: 'S2l'
              }
            }
          },
          S2l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TransitionToIA: {},
                TransitionToPrimaryStorageClass: {},
                TransitionToArchive: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=304ce7240c18d37a8b61e97c835ae994be371cfe.js.map