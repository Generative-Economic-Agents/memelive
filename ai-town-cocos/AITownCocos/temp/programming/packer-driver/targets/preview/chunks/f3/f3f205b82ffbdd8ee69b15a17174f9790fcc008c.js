System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-03-01',
          endpointPrefix: 'fsx',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'Amazon FSx',
          serviceId: 'FSx',
          signatureVersion: 'v4',
          signingName: 'fsx',
          targetPrefix: 'AWSSimbaAPIService_v20180301',
          uid: 'fsx-2018-03-01'
        },
        operations: {
          AssociateFileSystemAliases: {
            input: {
              type: 'structure',
              required: ['FileSystemId', 'Aliases'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                FileSystemId: {},
                Aliases: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Aliases: {
                  shape: 'S7'
                }
              }
            }
          },
          CancelDataRepositoryTask: {
            input: {
              type: 'structure',
              required: ['TaskId'],
              members: {
                TaskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Lifecycle: {},
                TaskId: {}
              }
            },
            idempotent: true
          },
          CopyBackup: {
            input: {
              type: 'structure',
              required: ['SourceBackupId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                SourceBackupId: {},
                SourceRegion: {},
                KmsKeyId: {},
                CopyTags: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Backup: {
                  shape: 'So'
                }
              }
            },
            idempotent: true
          },
          CopySnapshotAndUpdateVolume: {
            input: {
              type: 'structure',
              required: ['VolumeId', 'SourceSnapshotARN'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeId: {},
                SourceSnapshotARN: {},
                CopyStrategy: {},
                Options: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeId: {},
                Lifecycle: {},
                AdministrativeActions: {
                  shape: 'S2h'
                }
              }
            },
            idempotent: true
          },
          CreateBackup: {
            input: {
              type: 'structure',
              members: {
                FileSystemId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sj'
                },
                VolumeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Backup: {
                  shape: 'So'
                }
              }
            },
            idempotent: true
          },
          CreateDataRepositoryAssociation: {
            input: {
              type: 'structure',
              required: ['FileSystemId', 'DataRepositoryPath'],
              members: {
                FileSystemId: {},
                FileSystemPath: {},
                DataRepositoryPath: {},
                BatchImportMetaDataOnCreate: {
                  type: 'boolean'
                },
                ImportedFileChunkSize: {
                  type: 'integer'
                },
                S3: {
                  shape: 'S4y'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Association: {
                  shape: 'S54'
                }
              }
            },
            idempotent: true
          },
          CreateDataRepositoryTask: {
            input: {
              type: 'structure',
              required: ['Type', 'FileSystemId', 'Report'],
              members: {
                Type: {},
                Paths: {
                  shape: 'S5d'
                },
                FileSystemId: {},
                Report: {
                  shape: 'S5f'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sj'
                },
                CapacityToRelease: {
                  type: 'long'
                },
                ReleaseConfiguration: {
                  shape: 'S5j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataRepositoryTask: {
                  shape: 'S5o'
                }
              }
            },
            idempotent: true
          },
          CreateFileCache: {
            input: {
              type: 'structure',
              required: ['FileCacheType', 'FileCacheTypeVersion', 'StorageCapacity', 'SubnetIds'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                FileCacheType: {},
                FileCacheTypeVersion: {},
                StorageCapacity: {
                  type: 'integer'
                },
                SubnetIds: {
                  shape: 'S15'
                },
                SecurityGroupIds: {
                  shape: 'S60'
                },
                Tags: {
                  shape: 'Sj'
                },
                CopyTagsToDataRepositoryAssociations: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                LustreConfiguration: {
                  type: 'structure',
                  required: ['PerUnitStorageThroughput', 'DeploymentType', 'MetadataConfiguration'],
                  members: {
                    PerUnitStorageThroughput: {
                      type: 'integer'
                    },
                    DeploymentType: {},
                    WeeklyMaintenanceStartTime: {},
                    MetadataConfiguration: {
                      shape: 'S65'
                    }
                  }
                },
                DataRepositoryAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FileCachePath', 'DataRepositoryPath'],
                    members: {
                      FileCachePath: {},
                      DataRepositoryPath: {},
                      DataRepositorySubdirectories: {
                        shape: 'S57'
                      },
                      NFS: {
                        type: 'structure',
                        required: ['Version'],
                        members: {
                          Version: {},
                          DnsIps: {
                            shape: 'S5a'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileCache: {
                  type: 'structure',
                  members: {
                    OwnerId: {},
                    CreationTime: {
                      type: 'timestamp'
                    },
                    FileCacheId: {},
                    FileCacheType: {},
                    FileCacheTypeVersion: {},
                    Lifecycle: {},
                    FailureDetails: {
                      shape: 'S6d'
                    },
                    StorageCapacity: {
                      type: 'integer'
                    },
                    VpcId: {},
                    SubnetIds: {
                      shape: 'S15'
                    },
                    NetworkInterfaceIds: {
                      shape: 'S17'
                    },
                    DNSName: {},
                    KmsKeyId: {},
                    ResourceARN: {},
                    Tags: {
                      shape: 'Sj'
                    },
                    CopyTagsToDataRepositoryAssociations: {
                      type: 'boolean'
                    },
                    LustreConfiguration: {
                      shape: 'S6e'
                    },
                    DataRepositoryAssociationIds: {
                      shape: 'S6f'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          CreateFileSystem: {
            input: {
              type: 'structure',
              required: ['FileSystemType', 'StorageCapacity', 'SubnetIds'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                FileSystemType: {},
                StorageCapacity: {
                  type: 'integer'
                },
                StorageType: {},
                SubnetIds: {
                  shape: 'S15'
                },
                SecurityGroupIds: {
                  shape: 'S60'
                },
                Tags: {
                  shape: 'Sj'
                },
                KmsKeyId: {},
                WindowsConfiguration: {
                  shape: 'S6h'
                },
                LustreConfiguration: {
                  shape: 'S6l'
                },
                OntapConfiguration: {
                  type: 'structure',
                  required: ['DeploymentType'],
                  members: {
                    AutomaticBackupRetentionDays: {
                      type: 'integer'
                    },
                    DailyAutomaticBackupStartTime: {},
                    DeploymentType: {},
                    EndpointIpAddressRange: {},
                    FsxAdminPassword: {
                      shape: 'S4h'
                    },
                    DiskIopsConfiguration: {
                      shape: 'S1t'
                    },
                    PreferredSubnetId: {},
                    RouteTableIds: {
                      shape: 'S4f'
                    },
                    ThroughputCapacity: {
                      type: 'integer'
                    },
                    WeeklyMaintenanceStartTime: {},
                    HAPairs: {
                      type: 'integer'
                    },
                    ThroughputCapacityPerHAPair: {
                      type: 'integer'
                    }
                  }
                },
                FileSystemTypeVersion: {},
                OpenZFSConfiguration: {
                  shape: 'S6p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystem: {
                  shape: 'Sx'
                }
              }
            }
          },
          CreateFileSystemFromBackup: {
            input: {
              type: 'structure',
              required: ['BackupId', 'SubnetIds'],
              members: {
                BackupId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                SubnetIds: {
                  shape: 'S15'
                },
                SecurityGroupIds: {
                  shape: 'S60'
                },
                Tags: {
                  shape: 'Sj'
                },
                WindowsConfiguration: {
                  shape: 'S6h'
                },
                LustreConfiguration: {
                  shape: 'S6l'
                },
                StorageType: {},
                KmsKeyId: {},
                FileSystemTypeVersion: {},
                OpenZFSConfiguration: {
                  shape: 'S6p'
                },
                StorageCapacity: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystem: {
                  shape: 'Sx'
                }
              }
            }
          },
          CreateSnapshot: {
            input: {
              type: 'structure',
              required: ['Name', 'VolumeId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Name: {},
                VolumeId: {},
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S44'
                }
              }
            },
            idempotent: true
          },
          CreateStorageVirtualMachine: {
            input: {
              type: 'structure',
              required: ['FileSystemId', 'Name'],
              members: {
                ActiveDirectoryConfiguration: {
                  type: 'structure',
                  required: ['NetBiosName'],
                  members: {
                    NetBiosName: {},
                    SelfManagedActiveDirectoryConfiguration: {
                      shape: 'S6i'
                    }
                  }
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                FileSystemId: {},
                Name: {},
                SvmAdminPassword: {
                  shape: 'S4h'
                },
                Tags: {
                  shape: 'Sj'
                },
                RootVolumeSecurityStyle: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageVirtualMachine: {
                  shape: 'S72'
                }
              }
            }
          },
          CreateVolume: {
            input: {
              type: 'structure',
              required: ['VolumeType', 'Name'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeType: {},
                Name: {},
                OntapConfiguration: {
                  shape: 'S79'
                },
                Tags: {
                  shape: 'Sj'
                },
                OpenZFSConfiguration: {
                  type: 'structure',
                  required: ['ParentVolumeId'],
                  members: {
                    ParentVolumeId: {},
                    StorageCapacityReservationGiB: {
                      type: 'integer'
                    },
                    StorageCapacityQuotaGiB: {
                      type: 'integer'
                    },
                    RecordSizeKiB: {
                      type: 'integer'
                    },
                    DataCompressionType: {},
                    CopyTagsToSnapshots: {
                      type: 'boolean'
                    },
                    OriginSnapshot: {
                      type: 'structure',
                      required: ['SnapshotARN', 'CopyStrategy'],
                      members: {
                        SnapshotARN: {},
                        CopyStrategy: {}
                      }
                    },
                    ReadOnly: {
                      type: 'boolean'
                    },
                    NfsExports: {
                      shape: 'S3t'
                    },
                    UserAndGroupQuotas: {
                      shape: 'S40'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Volume: {
                  shape: 'S2n'
                }
              }
            }
          },
          CreateVolumeFromBackup: {
            input: {
              type: 'structure',
              required: ['BackupId', 'Name'],
              members: {
                BackupId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Name: {},
                OntapConfiguration: {
                  shape: 'S79'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Volume: {
                  shape: 'S2n'
                }
              }
            }
          },
          DeleteBackup: {
            input: {
              type: 'structure',
              required: ['BackupId'],
              members: {
                BackupId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupId: {},
                Lifecycle: {}
              }
            },
            idempotent: true
          },
          DeleteDataRepositoryAssociation: {
            input: {
              type: 'structure',
              required: ['AssociationId'],
              members: {
                AssociationId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                DeleteDataInFileSystem: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationId: {},
                Lifecycle: {},
                DeleteDataInFileSystem: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          DeleteFileCache: {
            input: {
              type: 'structure',
              required: ['FileCacheId'],
              members: {
                FileCacheId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileCacheId: {},
                Lifecycle: {}
              }
            },
            idempotent: true
          },
          DeleteFileSystem: {
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                WindowsConfiguration: {
                  type: 'structure',
                  members: {
                    SkipFinalBackup: {
                      type: 'boolean'
                    },
                    FinalBackupTags: {
                      shape: 'Sj'
                    }
                  }
                },
                LustreConfiguration: {
                  type: 'structure',
                  members: {
                    SkipFinalBackup: {
                      type: 'boolean'
                    },
                    FinalBackupTags: {
                      shape: 'Sj'
                    }
                  }
                },
                OpenZFSConfiguration: {
                  type: 'structure',
                  members: {
                    SkipFinalBackup: {
                      type: 'boolean'
                    },
                    FinalBackupTags: {
                      shape: 'Sj'
                    },
                    Options: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystemId: {},
                Lifecycle: {},
                WindowsResponse: {
                  type: 'structure',
                  members: {
                    FinalBackupId: {},
                    FinalBackupTags: {
                      shape: 'Sj'
                    }
                  }
                },
                LustreResponse: {
                  type: 'structure',
                  members: {
                    FinalBackupId: {},
                    FinalBackupTags: {
                      shape: 'Sj'
                    }
                  }
                },
                OpenZFSResponse: {
                  type: 'structure',
                  members: {
                    FinalBackupId: {},
                    FinalBackupTags: {
                      shape: 'Sj'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DeleteSnapshot: {
            input: {
              type: 'structure',
              required: ['SnapshotId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                SnapshotId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SnapshotId: {},
                Lifecycle: {}
              }
            },
            idempotent: true
          },
          DeleteStorageVirtualMachine: {
            input: {
              type: 'structure',
              required: ['StorageVirtualMachineId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                StorageVirtualMachineId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageVirtualMachineId: {},
                Lifecycle: {}
              }
            }
          },
          DeleteVolume: {
            input: {
              type: 'structure',
              required: ['VolumeId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeId: {},
                OntapConfiguration: {
                  type: 'structure',
                  members: {
                    SkipFinalBackup: {
                      type: 'boolean'
                    },
                    FinalBackupTags: {
                      shape: 'Sj'
                    },
                    BypassSnaplockEnterpriseRetention: {
                      type: 'boolean'
                    }
                  }
                },
                OpenZFSConfiguration: {
                  type: 'structure',
                  members: {
                    Options: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeId: {},
                Lifecycle: {},
                OntapResponse: {
                  type: 'structure',
                  members: {
                    FinalBackupId: {},
                    FinalBackupTags: {
                      shape: 'Sj'
                    }
                  }
                }
              }
            }
          },
          DescribeBackups: {
            input: {
              type: 'structure',
              members: {
                BackupIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  shape: 'S8e'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Backups: {
                  type: 'list',
                  member: {
                    shape: 'So'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeDataRepositoryAssociations: {
            input: {
              type: 'structure',
              members: {
                AssociationIds: {
                  shape: 'S6f'
                },
                Filters: {
                  shape: 'S8e'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Associations: {
                  type: 'list',
                  member: {
                    shape: 'S54'
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          DescribeDataRepositoryTasks: {
            input: {
              type: 'structure',
              members: {
                TaskIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataRepositoryTasks: {
                  type: 'list',
                  member: {
                    shape: 'S5o'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFileCaches: {
            input: {
              type: 'structure',
              members: {
                FileCacheIds: {
                  type: 'list',
                  member: {}
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FileCaches: {
                  type: 'list',
                  member: {
                    shape: 'S94'
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          DescribeFileSystemAliases: {
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                FileSystemId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Aliases: {
                  shape: 'S7'
                },
                NextToken: {}
              }
            }
          },
          DescribeFileSystems: {
            input: {
              type: 'structure',
              members: {
                FileSystemIds: {
                  type: 'list',
                  member: {}
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystems: {
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSharedVpcConfiguration: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                EnableFsxRouteTableUpdatesFromParticipantAccounts: {}
              }
            }
          },
          DescribeSnapshots: {
            input: {
              type: 'structure',
              members: {
                SnapshotIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                IncludeShared: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Snapshots: {
                  type: 'list',
                  member: {
                    shape: 'S44'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeStorageVirtualMachines: {
            input: {
              type: 'structure',
              members: {
                StorageVirtualMachineIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageVirtualMachines: {
                  type: 'list',
                  member: {
                    shape: 'S72'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeVolumes: {
            input: {
              type: 'structure',
              members: {
                VolumeIds: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Volumes: {
                  type: 'list',
                  member: {
                    shape: 'S2n'
                  }
                },
                NextToken: {}
              }
            }
          },
          DisassociateFileSystemAliases: {
            input: {
              type: 'structure',
              required: ['FileSystemId', 'Aliases'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                FileSystemId: {},
                Aliases: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Aliases: {
                  shape: 'S7'
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sj'
                },
                NextToken: {}
              }
            }
          },
          ReleaseFileSystemNfsV3Locks: {
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystem: {
                  shape: 'Sx'
                }
              }
            },
            idempotent: true
          },
          RestoreVolumeFromSnapshot: {
            input: {
              type: 'structure',
              required: ['VolumeId', 'SnapshotId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeId: {},
                SnapshotId: {},
                Options: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeId: {},
                Lifecycle: {},
                AdministrativeActions: {
                  shape: 'S2h'
                }
              }
            },
            idempotent: true
          },
          StartMisconfiguredStateRecovery: {
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                FileSystemId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystem: {
                  shape: 'Sx'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
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
          UpdateDataRepositoryAssociation: {
            input: {
              type: 'structure',
              required: ['AssociationId'],
              members: {
                AssociationId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                ImportedFileChunkSize: {
                  type: 'integer'
                },
                S3: {
                  shape: 'S4y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Association: {
                  shape: 'S54'
                }
              }
            },
            idempotent: true
          },
          UpdateFileCache: {
            input: {
              type: 'structure',
              required: ['FileCacheId'],
              members: {
                FileCacheId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                LustreConfiguration: {
                  type: 'structure',
                  members: {
                    WeeklyMaintenanceStartTime: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileCache: {
                  shape: 'S94'
                }
              }
            },
            idempotent: true
          },
          UpdateFileSystem: {
            input: {
              type: 'structure',
              required: ['FileSystemId'],
              members: {
                FileSystemId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                StorageCapacity: {
                  type: 'integer'
                },
                WindowsConfiguration: {
                  type: 'structure',
                  members: {
                    WeeklyMaintenanceStartTime: {},
                    DailyAutomaticBackupStartTime: {},
                    AutomaticBackupRetentionDays: {
                      type: 'integer'
                    },
                    ThroughputCapacity: {
                      type: 'integer'
                    },
                    SelfManagedActiveDirectoryConfiguration: {
                      shape: 'Sau'
                    },
                    AuditLogConfiguration: {
                      shape: 'S6k'
                    },
                    DiskIopsConfiguration: {
                      shape: 'S1t'
                    }
                  }
                },
                LustreConfiguration: {
                  type: 'structure',
                  members: {
                    WeeklyMaintenanceStartTime: {},
                    DailyAutomaticBackupStartTime: {},
                    AutomaticBackupRetentionDays: {
                      type: 'integer'
                    },
                    AutoImportPolicy: {},
                    DataCompressionType: {},
                    LogConfiguration: {
                      shape: 'S6m'
                    },
                    RootSquashConfiguration: {
                      shape: 'S2a'
                    },
                    PerUnitStorageThroughput: {
                      type: 'integer'
                    },
                    MetadataConfiguration: {
                      type: 'structure',
                      members: {
                        Iops: {
                          type: 'integer'
                        },
                        Mode: {}
                      }
                    }
                  }
                },
                OntapConfiguration: {
                  type: 'structure',
                  members: {
                    AutomaticBackupRetentionDays: {
                      type: 'integer'
                    },
                    DailyAutomaticBackupStartTime: {},
                    FsxAdminPassword: {
                      shape: 'S4h'
                    },
                    WeeklyMaintenanceStartTime: {},
                    DiskIopsConfiguration: {
                      shape: 'S1t'
                    },
                    ThroughputCapacity: {
                      type: 'integer'
                    },
                    AddRouteTableIds: {
                      shape: 'S4f'
                    },
                    RemoveRouteTableIds: {
                      shape: 'S4f'
                    },
                    ThroughputCapacityPerHAPair: {
                      type: 'integer'
                    }
                  }
                },
                OpenZFSConfiguration: {
                  type: 'structure',
                  members: {
                    AutomaticBackupRetentionDays: {
                      type: 'integer'
                    },
                    CopyTagsToBackups: {
                      type: 'boolean'
                    },
                    CopyTagsToVolumes: {
                      type: 'boolean'
                    },
                    DailyAutomaticBackupStartTime: {},
                    ThroughputCapacity: {
                      type: 'integer'
                    },
                    WeeklyMaintenanceStartTime: {},
                    DiskIopsConfiguration: {
                      shape: 'S1t'
                    },
                    AddRouteTableIds: {
                      shape: 'S4f'
                    },
                    RemoveRouteTableIds: {
                      shape: 'S4f'
                    }
                  }
                },
                StorageType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystem: {
                  shape: 'Sx'
                }
              }
            }
          },
          UpdateSharedVpcConfiguration: {
            input: {
              type: 'structure',
              members: {
                EnableFsxRouteTableUpdatesFromParticipantAccounts: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EnableFsxRouteTableUpdatesFromParticipantAccounts: {}
              }
            }
          },
          UpdateSnapshot: {
            input: {
              type: 'structure',
              required: ['Name', 'SnapshotId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Name: {},
                SnapshotId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Snapshot: {
                  shape: 'S44'
                }
              }
            },
            idempotent: true
          },
          UpdateStorageVirtualMachine: {
            input: {
              type: 'structure',
              required: ['StorageVirtualMachineId'],
              members: {
                ActiveDirectoryConfiguration: {
                  type: 'structure',
                  members: {
                    SelfManagedActiveDirectoryConfiguration: {
                      shape: 'Sau'
                    },
                    NetBiosName: {}
                  }
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                StorageVirtualMachineId: {},
                SvmAdminPassword: {
                  shape: 'S4h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageVirtualMachine: {
                  shape: 'S72'
                }
              }
            }
          },
          UpdateVolume: {
            input: {
              type: 'structure',
              required: ['VolumeId'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                VolumeId: {},
                OntapConfiguration: {
                  type: 'structure',
                  members: {
                    JunctionPath: {},
                    SecurityStyle: {},
                    SizeInMegabytes: {
                      type: 'integer'
                    },
                    StorageEfficiencyEnabled: {
                      type: 'boolean'
                    },
                    TieringPolicy: {
                      shape: 'S2w'
                    },
                    SnapshotPolicy: {},
                    CopyTagsToBackups: {
                      type: 'boolean'
                    },
                    SnaplockConfiguration: {
                      type: 'structure',
                      members: {
                        AuditLogVolume: {
                          type: 'boolean'
                        },
                        AutocommitPeriod: {
                          shape: 'S33'
                        },
                        PrivilegedDelete: {},
                        RetentionPeriod: {
                          shape: 'S37'
                        },
                        VolumeAppendModeEnabled: {
                          type: 'boolean'
                        }
                      }
                    },
                    SizeInBytes: {
                      type: 'long'
                    }
                  }
                },
                Name: {},
                OpenZFSConfiguration: {
                  type: 'structure',
                  members: {
                    StorageCapacityReservationGiB: {
                      type: 'integer'
                    },
                    StorageCapacityQuotaGiB: {
                      type: 'integer'
                    },
                    RecordSizeKiB: {
                      type: 'integer'
                    },
                    DataCompressionType: {},
                    NfsExports: {
                      shape: 'S3t'
                    },
                    UserAndGroupQuotas: {
                      shape: 'S40'
                    },
                    ReadOnly: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Volume: {
                  shape: 'S2n'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {}
          },
          S7: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Lifecycle: {}
              }
            }
          },
          Sj: {
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
          So: {
            type: 'structure',
            required: ['BackupId', 'Lifecycle', 'Type', 'CreationTime', 'FileSystem'],
            members: {
              BackupId: {},
              Lifecycle: {},
              FailureDetails: {
                type: 'structure',
                members: {
                  Message: {}
                }
              },
              Type: {},
              ProgressPercent: {
                type: 'integer'
              },
              CreationTime: {
                type: 'timestamp'
              },
              KmsKeyId: {},
              ResourceARN: {},
              Tags: {
                shape: 'Sj'
              },
              FileSystem: {
                shape: 'Sx'
              },
              DirectoryInformation: {
                type: 'structure',
                members: {
                  DomainName: {},
                  ActiveDirectoryId: {},
                  ResourceARN: {}
                }
              },
              OwnerId: {},
              SourceBackupId: {},
              SourceBackupRegion: {},
              ResourceType: {},
              Volume: {
                shape: 'S2n'
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              OwnerId: {},
              CreationTime: {
                type: 'timestamp'
              },
              FileSystemId: {},
              FileSystemType: {},
              Lifecycle: {},
              FailureDetails: {
                type: 'structure',
                members: {
                  Message: {}
                }
              },
              StorageCapacity: {
                type: 'integer'
              },
              StorageType: {},
              VpcId: {},
              SubnetIds: {
                shape: 'S15'
              },
              NetworkInterfaceIds: {
                shape: 'S17'
              },
              DNSName: {},
              KmsKeyId: {},
              ResourceARN: {},
              Tags: {
                shape: 'Sj'
              },
              WindowsConfiguration: {
                type: 'structure',
                members: {
                  ActiveDirectoryId: {},
                  SelfManagedActiveDirectoryConfiguration: {
                    shape: 'S1c'
                  },
                  DeploymentType: {},
                  RemoteAdministrationEndpoint: {},
                  PreferredSubnetId: {},
                  PreferredFileServerIp: {},
                  ThroughputCapacity: {
                    type: 'integer'
                  },
                  MaintenanceOperationsInProgress: {
                    type: 'list',
                    member: {}
                  },
                  WeeklyMaintenanceStartTime: {},
                  DailyAutomaticBackupStartTime: {},
                  AutomaticBackupRetentionDays: {
                    type: 'integer'
                  },
                  CopyTagsToBackups: {
                    type: 'boolean'
                  },
                  Aliases: {
                    shape: 'S7'
                  },
                  AuditLogConfiguration: {
                    type: 'structure',
                    required: ['FileAccessAuditLogLevel', 'FileShareAccessAuditLogLevel'],
                    members: {
                      FileAccessAuditLogLevel: {},
                      FileShareAccessAuditLogLevel: {},
                      AuditLogDestination: {}
                    }
                  },
                  DiskIopsConfiguration: {
                    shape: 'S1t'
                  }
                }
              },
              LustreConfiguration: {
                type: 'structure',
                members: {
                  WeeklyMaintenanceStartTime: {},
                  DataRepositoryConfiguration: {
                    type: 'structure',
                    members: {
                      Lifecycle: {},
                      ImportPath: {},
                      ExportPath: {},
                      ImportedFileChunkSize: {
                        type: 'integer'
                      },
                      AutoImportPolicy: {},
                      FailureDetails: {
                        shape: 'S22'
                      }
                    }
                  },
                  DeploymentType: {},
                  PerUnitStorageThroughput: {
                    type: 'integer'
                  },
                  MountName: {},
                  DailyAutomaticBackupStartTime: {},
                  AutomaticBackupRetentionDays: {
                    type: 'integer'
                  },
                  CopyTagsToBackups: {
                    type: 'boolean'
                  },
                  DriveCacheType: {},
                  DataCompressionType: {},
                  LogConfiguration: {
                    shape: 'S28'
                  },
                  RootSquashConfiguration: {
                    shape: 'S2a'
                  },
                  MetadataConfiguration: {
                    type: 'structure',
                    required: ['Mode'],
                    members: {
                      Iops: {
                        type: 'integer'
                      },
                      Mode: {}
                    }
                  }
                }
              },
              AdministrativeActions: {
                shape: 'S2h'
              },
              OntapConfiguration: {
                type: 'structure',
                members: {
                  AutomaticBackupRetentionDays: {
                    type: 'integer'
                  },
                  DailyAutomaticBackupStartTime: {},
                  DeploymentType: {},
                  EndpointIpAddressRange: {},
                  Endpoints: {
                    type: 'structure',
                    members: {
                      Intercluster: {
                        shape: 'S4d'
                      },
                      Management: {
                        shape: 'S4d'
                      }
                    }
                  },
                  DiskIopsConfiguration: {
                    shape: 'S1t'
                  },
                  PreferredSubnetId: {},
                  RouteTableIds: {
                    shape: 'S4f'
                  },
                  ThroughputCapacity: {
                    type: 'integer'
                  },
                  WeeklyMaintenanceStartTime: {},
                  FsxAdminPassword: {
                    shape: 'S4h'
                  },
                  HAPairs: {
                    type: 'integer'
                  },
                  ThroughputCapacityPerHAPair: {
                    type: 'integer'
                  }
                }
              },
              FileSystemTypeVersion: {},
              OpenZFSConfiguration: {
                type: 'structure',
                members: {
                  AutomaticBackupRetentionDays: {
                    type: 'integer'
                  },
                  CopyTagsToBackups: {
                    type: 'boolean'
                  },
                  CopyTagsToVolumes: {
                    type: 'boolean'
                  },
                  DailyAutomaticBackupStartTime: {},
                  DeploymentType: {},
                  ThroughputCapacity: {
                    type: 'integer'
                  },
                  WeeklyMaintenanceStartTime: {},
                  DiskIopsConfiguration: {
                    shape: 'S1t'
                  },
                  RootVolumeId: {},
                  PreferredSubnetId: {},
                  EndpointIpAddressRange: {},
                  RouteTableIds: {
                    shape: 'S4f'
                  },
                  EndpointIpAddress: {}
                }
              }
            }
          },
          S15: {
            type: 'list',
            member: {}
          },
          S17: {
            type: 'list',
            member: {}
          },
          S1c: {
            type: 'structure',
            members: {
              DomainName: {},
              OrganizationalUnitDistinguishedName: {},
              FileSystemAdministratorsGroup: {},
              UserName: {},
              DnsIps: {
                shape: 'S1h'
              }
            }
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1t: {
            type: 'structure',
            members: {
              Mode: {},
              Iops: {
                type: 'long'
              }
            }
          },
          S22: {
            type: 'structure',
            members: {
              Message: {}
            }
          },
          S28: {
            type: 'structure',
            required: ['Level'],
            members: {
              Level: {},
              Destination: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              RootSquash: {},
              NoSquashNids: {
                type: 'list',
                member: {}
              }
            }
          },
          S2h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AdministrativeActionType: {},
                ProgressPercent: {
                  type: 'integer'
                },
                RequestTime: {
                  type: 'timestamp'
                },
                Status: {},
                TargetFileSystemValues: {
                  shape: 'Sx'
                },
                FailureDetails: {
                  type: 'structure',
                  members: {
                    Message: {}
                  }
                },
                TargetVolumeValues: {
                  shape: 'S2n'
                },
                TargetSnapshotValues: {
                  shape: 'S44'
                },
                TotalTransferBytes: {
                  type: 'long'
                },
                RemainingTransferBytes: {
                  type: 'long'
                }
              }
            }
          },
          S2n: {
            type: 'structure',
            members: {
              CreationTime: {
                type: 'timestamp'
              },
              FileSystemId: {},
              Lifecycle: {},
              Name: {},
              OntapConfiguration: {
                type: 'structure',
                members: {
                  FlexCacheEndpointType: {},
                  JunctionPath: {},
                  SecurityStyle: {},
                  SizeInMegabytes: {
                    type: 'integer'
                  },
                  StorageEfficiencyEnabled: {
                    type: 'boolean'
                  },
                  StorageVirtualMachineId: {},
                  StorageVirtualMachineRoot: {
                    type: 'boolean'
                  },
                  TieringPolicy: {
                    shape: 'S2w'
                  },
                  UUID: {},
                  OntapVolumeType: {},
                  SnapshotPolicy: {},
                  CopyTagsToBackups: {
                    type: 'boolean'
                  },
                  SnaplockConfiguration: {
                    type: 'structure',
                    members: {
                      AuditLogVolume: {
                        type: 'boolean'
                      },
                      AutocommitPeriod: {
                        shape: 'S33'
                      },
                      PrivilegedDelete: {},
                      RetentionPeriod: {
                        shape: 'S37'
                      },
                      SnaplockType: {},
                      VolumeAppendModeEnabled: {
                        type: 'boolean'
                      }
                    }
                  },
                  VolumeStyle: {},
                  AggregateConfiguration: {
                    type: 'structure',
                    members: {
                      Aggregates: {
                        shape: 'S3e'
                      },
                      TotalConstituents: {
                        type: 'integer'
                      }
                    }
                  },
                  SizeInBytes: {
                    type: 'long'
                  }
                }
              },
              ResourceARN: {},
              Tags: {
                shape: 'Sj'
              },
              VolumeId: {},
              VolumeType: {},
              LifecycleTransitionReason: {
                shape: 'S3k'
              },
              AdministrativeActions: {
                shape: 'S2h'
              },
              OpenZFSConfiguration: {
                type: 'structure',
                members: {
                  ParentVolumeId: {},
                  VolumePath: {},
                  StorageCapacityReservationGiB: {
                    type: 'integer'
                  },
                  StorageCapacityQuotaGiB: {
                    type: 'integer'
                  },
                  RecordSizeKiB: {
                    type: 'integer'
                  },
                  DataCompressionType: {},
                  CopyTagsToSnapshots: {
                    type: 'boolean'
                  },
                  OriginSnapshot: {
                    type: 'structure',
                    members: {
                      SnapshotARN: {},
                      CopyStrategy: {}
                    }
                  },
                  ReadOnly: {
                    type: 'boolean'
                  },
                  NfsExports: {
                    shape: 'S3t'
                  },
                  UserAndGroupQuotas: {
                    shape: 'S40'
                  },
                  RestoreToSnapshot: {},
                  DeleteIntermediateSnaphots: {
                    type: 'boolean'
                  },
                  DeleteClonedVolumes: {
                    type: 'boolean'
                  },
                  DeleteIntermediateData: {
                    type: 'boolean'
                  },
                  SourceSnapshotARN: {},
                  DestinationSnapshot: {},
                  CopyStrategy: {}
                }
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              CoolingPeriod: {
                type: 'integer'
              },
              Name: {}
            }
          },
          S33: {
            type: 'structure',
            required: ['Type'],
            members: {
              Type: {},
              Value: {
                type: 'integer'
              }
            }
          },
          S37: {
            type: 'structure',
            required: ['DefaultRetention', 'MinimumRetention', 'MaximumRetention'],
            members: {
              DefaultRetention: {
                shape: 'S38'
              },
              MinimumRetention: {
                shape: 'S38'
              },
              MaximumRetention: {
                shape: 'S38'
              }
            }
          },
          S38: {
            type: 'structure',
            required: ['Type'],
            members: {
              Type: {},
              Value: {
                type: 'integer'
              }
            }
          },
          S3e: {
            type: 'list',
            member: {}
          },
          S3k: {
            type: 'structure',
            members: {
              Message: {}
            }
          },
          S3t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ClientConfigurations'],
              members: {
                ClientConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Clients', 'Options'],
                    members: {
                      Clients: {},
                      Options: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S40: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type', 'Id', 'StorageCapacityQuotaGiB'],
              members: {
                Type: {},
                Id: {
                  type: 'integer'
                },
                StorageCapacityQuotaGiB: {
                  type: 'integer'
                }
              }
            }
          },
          S44: {
            type: 'structure',
            members: {
              ResourceARN: {},
              SnapshotId: {},
              Name: {},
              VolumeId: {},
              CreationTime: {
                type: 'timestamp'
              },
              Lifecycle: {},
              LifecycleTransitionReason: {
                shape: 'S3k'
              },
              Tags: {
                shape: 'Sj'
              },
              AdministrativeActions: {
                shape: 'S2h'
              }
            }
          },
          S4d: {
            type: 'structure',
            members: {
              DNSName: {},
              IpAddresses: {
                shape: 'S4e'
              }
            }
          },
          S4e: {
            type: 'list',
            member: {}
          },
          S4f: {
            type: 'list',
            member: {}
          },
          S4h: {
            type: 'string',
            sensitive: true
          },
          S4y: {
            type: 'structure',
            members: {
              AutoImportPolicy: {
                type: 'structure',
                members: {
                  Events: {
                    shape: 'S50'
                  }
                }
              },
              AutoExportPolicy: {
                shape: 'S52'
              }
            }
          },
          S50: {
            type: 'list',
            member: {}
          },
          S52: {
            type: 'structure',
            members: {
              Events: {
                shape: 'S50'
              }
            }
          },
          S54: {
            type: 'structure',
            members: {
              AssociationId: {},
              ResourceARN: {},
              FileSystemId: {},
              Lifecycle: {},
              FailureDetails: {
                shape: 'S22'
              },
              FileSystemPath: {},
              DataRepositoryPath: {},
              BatchImportMetaDataOnCreate: {
                type: 'boolean'
              },
              ImportedFileChunkSize: {
                type: 'integer'
              },
              S3: {
                shape: 'S4y'
              },
              Tags: {
                shape: 'Sj'
              },
              CreationTime: {
                type: 'timestamp'
              },
              FileCacheId: {},
              FileCachePath: {},
              DataRepositorySubdirectories: {
                shape: 'S57'
              },
              NFS: {
                type: 'structure',
                required: ['Version'],
                members: {
                  Version: {},
                  DnsIps: {
                    shape: 'S5a'
                  },
                  AutoExportPolicy: {
                    shape: 'S52'
                  }
                }
              }
            }
          },
          S57: {
            type: 'list',
            member: {}
          },
          S5a: {
            type: 'list',
            member: {}
          },
          S5d: {
            type: 'list',
            member: {}
          },
          S5f: {
            type: 'structure',
            required: ['Enabled'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              Path: {},
              Format: {},
              Scope: {}
            }
          },
          S5j: {
            type: 'structure',
            members: {
              DurationSinceLastAccess: {
                type: 'structure',
                members: {
                  Unit: {},
                  Value: {
                    type: 'long'
                  }
                }
              }
            }
          },
          S5o: {
            type: 'structure',
            required: ['TaskId', 'Lifecycle', 'Type', 'CreationTime'],
            members: {
              TaskId: {},
              Lifecycle: {},
              Type: {},
              CreationTime: {
                type: 'timestamp'
              },
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              ResourceARN: {},
              Tags: {
                shape: 'Sj'
              },
              FileSystemId: {},
              Paths: {
                shape: 'S5d'
              },
              FailureDetails: {
                type: 'structure',
                members: {
                  Message: {}
                }
              },
              Status: {
                type: 'structure',
                members: {
                  TotalCount: {
                    type: 'long'
                  },
                  SucceededCount: {
                    type: 'long'
                  },
                  FailedCount: {
                    type: 'long'
                  },
                  LastUpdatedTime: {
                    type: 'timestamp'
                  },
                  ReleasedCapacity: {
                    type: 'long'
                  }
                }
              },
              Report: {
                shape: 'S5f'
              },
              CapacityToRelease: {
                type: 'long'
              },
              FileCacheId: {},
              ReleaseConfiguration: {
                shape: 'S5j'
              }
            }
          },
          S60: {
            type: 'list',
            member: {}
          },
          S65: {
            type: 'structure',
            required: ['StorageCapacity'],
            members: {
              StorageCapacity: {
                type: 'integer'
              }
            }
          },
          S6d: {
            type: 'structure',
            members: {
              Message: {}
            }
          },
          S6e: {
            type: 'structure',
            members: {
              PerUnitStorageThroughput: {
                type: 'integer'
              },
              DeploymentType: {},
              MountName: {},
              WeeklyMaintenanceStartTime: {},
              MetadataConfiguration: {
                shape: 'S65'
              },
              LogConfiguration: {
                shape: 'S28'
              }
            }
          },
          S6f: {
            type: 'list',
            member: {}
          },
          S6h: {
            type: 'structure',
            required: ['ThroughputCapacity'],
            members: {
              ActiveDirectoryId: {},
              SelfManagedActiveDirectoryConfiguration: {
                shape: 'S6i'
              },
              DeploymentType: {},
              PreferredSubnetId: {},
              ThroughputCapacity: {
                type: 'integer'
              },
              WeeklyMaintenanceStartTime: {},
              DailyAutomaticBackupStartTime: {},
              AutomaticBackupRetentionDays: {
                type: 'integer'
              },
              CopyTagsToBackups: {
                type: 'boolean'
              },
              Aliases: {
                shape: 'S4'
              },
              AuditLogConfiguration: {
                shape: 'S6k'
              },
              DiskIopsConfiguration: {
                shape: 'S1t'
              }
            }
          },
          S6i: {
            type: 'structure',
            required: ['DomainName', 'UserName', 'Password', 'DnsIps'],
            members: {
              DomainName: {},
              OrganizationalUnitDistinguishedName: {},
              FileSystemAdministratorsGroup: {},
              UserName: {},
              Password: {
                shape: 'S6j'
              },
              DnsIps: {
                shape: 'S1h'
              }
            }
          },
          S6j: {
            type: 'string',
            sensitive: true
          },
          S6k: {
            type: 'structure',
            required: ['FileAccessAuditLogLevel', 'FileShareAccessAuditLogLevel'],
            members: {
              FileAccessAuditLogLevel: {},
              FileShareAccessAuditLogLevel: {},
              AuditLogDestination: {}
            }
          },
          S6l: {
            type: 'structure',
            members: {
              WeeklyMaintenanceStartTime: {},
              ImportPath: {},
              ExportPath: {},
              ImportedFileChunkSize: {
                type: 'integer'
              },
              DeploymentType: {},
              AutoImportPolicy: {},
              PerUnitStorageThroughput: {
                type: 'integer'
              },
              DailyAutomaticBackupStartTime: {},
              AutomaticBackupRetentionDays: {
                type: 'integer'
              },
              CopyTagsToBackups: {
                type: 'boolean'
              },
              DriveCacheType: {},
              DataCompressionType: {},
              LogConfiguration: {
                shape: 'S6m'
              },
              RootSquashConfiguration: {
                shape: 'S2a'
              },
              MetadataConfiguration: {
                type: 'structure',
                required: ['Mode'],
                members: {
                  Iops: {
                    type: 'integer'
                  },
                  Mode: {}
                }
              }
            }
          },
          S6m: {
            type: 'structure',
            required: ['Level'],
            members: {
              Level: {},
              Destination: {}
            }
          },
          S6p: {
            type: 'structure',
            required: ['DeploymentType', 'ThroughputCapacity'],
            members: {
              AutomaticBackupRetentionDays: {
                type: 'integer'
              },
              CopyTagsToBackups: {
                type: 'boolean'
              },
              CopyTagsToVolumes: {
                type: 'boolean'
              },
              DailyAutomaticBackupStartTime: {},
              DeploymentType: {},
              ThroughputCapacity: {
                type: 'integer'
              },
              WeeklyMaintenanceStartTime: {},
              DiskIopsConfiguration: {
                shape: 'S1t'
              },
              RootVolumeConfiguration: {
                type: 'structure',
                members: {
                  RecordSizeKiB: {
                    type: 'integer'
                  },
                  DataCompressionType: {},
                  NfsExports: {
                    shape: 'S3t'
                  },
                  UserAndGroupQuotas: {
                    shape: 'S40'
                  },
                  CopyTagsToSnapshots: {
                    type: 'boolean'
                  },
                  ReadOnly: {
                    type: 'boolean'
                  }
                }
              },
              PreferredSubnetId: {},
              EndpointIpAddressRange: {},
              RouteTableIds: {
                shape: 'S4f'
              }
            }
          },
          S72: {
            type: 'structure',
            members: {
              ActiveDirectoryConfiguration: {
                type: 'structure',
                members: {
                  NetBiosName: {},
                  SelfManagedActiveDirectoryConfiguration: {
                    shape: 'S1c'
                  }
                }
              },
              CreationTime: {
                type: 'timestamp'
              },
              Endpoints: {
                type: 'structure',
                members: {
                  Iscsi: {
                    shape: 'S75'
                  },
                  Management: {
                    shape: 'S75'
                  },
                  Nfs: {
                    shape: 'S75'
                  },
                  Smb: {
                    shape: 'S75'
                  }
                }
              },
              FileSystemId: {},
              Lifecycle: {},
              Name: {},
              ResourceARN: {},
              StorageVirtualMachineId: {},
              Subtype: {},
              UUID: {},
              Tags: {
                shape: 'Sj'
              },
              LifecycleTransitionReason: {
                shape: 'S3k'
              },
              RootVolumeSecurityStyle: {}
            }
          },
          S75: {
            type: 'structure',
            members: {
              DNSName: {},
              IpAddresses: {
                shape: 'S4e'
              }
            }
          },
          S79: {
            type: 'structure',
            required: ['StorageVirtualMachineId'],
            members: {
              JunctionPath: {},
              SecurityStyle: {},
              SizeInMegabytes: {
                deprecated: true,
                deprecatedMessage: 'This property is deprecated, use SizeInBytes instead',
                type: 'integer'
              },
              StorageEfficiencyEnabled: {
                type: 'boolean'
              },
              StorageVirtualMachineId: {},
              TieringPolicy: {
                shape: 'S2w'
              },
              OntapVolumeType: {},
              SnapshotPolicy: {},
              CopyTagsToBackups: {
                type: 'boolean'
              },
              SnaplockConfiguration: {
                type: 'structure',
                required: ['SnaplockType'],
                members: {
                  AuditLogVolume: {
                    type: 'boolean'
                  },
                  AutocommitPeriod: {
                    shape: 'S33'
                  },
                  PrivilegedDelete: {},
                  RetentionPeriod: {
                    shape: 'S37'
                  },
                  SnaplockType: {},
                  VolumeAppendModeEnabled: {
                    type: 'boolean'
                  }
                }
              },
              VolumeStyle: {},
              AggregateConfiguration: {
                type: 'structure',
                members: {
                  Aggregates: {
                    shape: 'S3e'
                  },
                  ConstituentsPerAggregate: {
                    type: 'integer'
                  }
                }
              },
              SizeInBytes: {
                type: 'long'
              }
            }
          },
          S8e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S94: {
            type: 'structure',
            members: {
              OwnerId: {},
              CreationTime: {
                type: 'timestamp'
              },
              FileCacheId: {},
              FileCacheType: {},
              FileCacheTypeVersion: {},
              Lifecycle: {},
              FailureDetails: {
                shape: 'S6d'
              },
              StorageCapacity: {
                type: 'integer'
              },
              VpcId: {},
              SubnetIds: {
                shape: 'S15'
              },
              NetworkInterfaceIds: {
                shape: 'S17'
              },
              DNSName: {},
              KmsKeyId: {},
              ResourceARN: {},
              LustreConfiguration: {
                shape: 'S6e'
              },
              DataRepositoryAssociationIds: {
                shape: 'S6f'
              }
            }
          },
          Sau: {
            type: 'structure',
            members: {
              UserName: {},
              Password: {
                shape: 'S6j'
              },
              DnsIps: {
                shape: 'S1h'
              },
              DomainName: {},
              OrganizationalUnitDistinguishedName: {},
              FileSystemAdministratorsGroup: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f3f205b82ffbdd8ee69b15a17174f9790fcc008c.js.map