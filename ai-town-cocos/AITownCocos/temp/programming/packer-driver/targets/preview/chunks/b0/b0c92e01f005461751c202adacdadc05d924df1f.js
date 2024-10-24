System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-06-30',
          endpointPrefix: 'storagegateway',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS Storage Gateway',
          serviceId: 'Storage Gateway',
          signatureVersion: 'v4',
          targetPrefix: 'StorageGateway_20130630',
          uid: 'storagegateway-2013-06-30',
          auth: ['aws.auth#sigv4']
        },
        operations: {
          ActivateGateway: {
            input: {
              type: 'structure',
              required: ['ActivationKey', 'GatewayName', 'GatewayTimezone', 'GatewayRegion'],
              members: {
                ActivationKey: {},
                GatewayName: {},
                GatewayTimezone: {},
                GatewayRegion: {},
                GatewayType: {},
                TapeDriveType: {},
                MediumChangerType: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          AddCache: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'DiskIds'],
              members: {
                GatewayARN: {},
                DiskIds: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          AddTagsToResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceARN: {}
              }
            }
          },
          AddUploadBuffer: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'DiskIds'],
              members: {
                GatewayARN: {},
                DiskIds: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          AddWorkingStorage: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'DiskIds'],
              members: {
                GatewayARN: {},
                DiskIds: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          AssignTapePool: {
            input: {
              type: 'structure',
              required: ['TapeARN', 'PoolId'],
              members: {
                TapeARN: {},
                PoolId: {},
                BypassGovernanceRetention: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARN: {}
              }
            }
          },
          AssociateFileSystem: {
            input: {
              type: 'structure',
              required: ['UserName', 'Password', 'ClientToken', 'GatewayARN', 'LocationARN'],
              members: {
                UserName: {},
                Password: {
                  shape: 'Sx'
                },
                ClientToken: {},
                GatewayARN: {},
                LocationARN: {},
                Tags: {
                  shape: 'S9'
                },
                AuditDestinationARN: {},
                CacheAttributes: {
                  shape: 'S11'
                },
                EndpointNetworkConfiguration: {
                  shape: 'S13'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystemAssociationARN: {}
              }
            }
          },
          AttachVolume: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'VolumeARN', 'NetworkInterfaceId'],
              members: {
                GatewayARN: {},
                TargetName: {},
                VolumeARN: {},
                NetworkInterfaceId: {},
                DiskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {},
                TargetARN: {}
              }
            }
          },
          CancelArchival: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'TapeARN'],
              members: {
                GatewayARN: {},
                TapeARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARN: {}
              }
            }
          },
          CancelRetrieval: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'TapeARN'],
              members: {
                GatewayARN: {},
                TapeARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARN: {}
              }
            }
          },
          CreateCachediSCSIVolume: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'VolumeSizeInBytes', 'TargetName', 'NetworkInterfaceId', 'ClientToken'],
              members: {
                GatewayARN: {},
                VolumeSizeInBytes: {
                  type: 'long'
                },
                SnapshotId: {},
                TargetName: {},
                SourceVolumeARN: {},
                NetworkInterfaceId: {},
                ClientToken: {},
                KMSEncrypted: {
                  type: 'boolean'
                },
                KMSKey: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {},
                TargetARN: {}
              }
            }
          },
          CreateNFSFileShare: {
            input: {
              type: 'structure',
              required: ['ClientToken', 'GatewayARN', 'Role', 'LocationARN'],
              members: {
                ClientToken: {},
                NFSFileShareDefaults: {
                  shape: 'S1p'
                },
                GatewayARN: {},
                KMSEncrypted: {
                  type: 'boolean'
                },
                KMSKey: {},
                Role: {},
                LocationARN: {},
                DefaultStorageClass: {},
                ObjectACL: {},
                ClientList: {
                  shape: 'S1w'
                },
                Squash: {},
                ReadOnly: {
                  type: 'boolean'
                },
                GuessMIMETypeEnabled: {
                  type: 'boolean'
                },
                RequesterPays: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S9'
                },
                FileShareName: {},
                CacheAttributes: {
                  shape: 'S11'
                },
                NotificationPolicy: {},
                VPCEndpointDNSName: {},
                BucketRegion: {},
                AuditDestinationARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FileShareARN: {}
              }
            }
          },
          CreateSMBFileShare: {
            input: {
              type: 'structure',
              required: ['ClientToken', 'GatewayARN', 'Role', 'LocationARN'],
              members: {
                ClientToken: {},
                GatewayARN: {},
                KMSEncrypted: {
                  type: 'boolean'
                },
                KMSKey: {},
                Role: {},
                LocationARN: {},
                DefaultStorageClass: {},
                ObjectACL: {},
                ReadOnly: {
                  type: 'boolean'
                },
                GuessMIMETypeEnabled: {
                  type: 'boolean'
                },
                RequesterPays: {
                  type: 'boolean'
                },
                SMBACLEnabled: {
                  type: 'boolean'
                },
                AccessBasedEnumeration: {
                  type: 'boolean'
                },
                AdminUserList: {
                  shape: 'S25'
                },
                ValidUserList: {
                  shape: 'S25'
                },
                InvalidUserList: {
                  shape: 'S25'
                },
                AuditDestinationARN: {},
                Authentication: {},
                CaseSensitivity: {},
                Tags: {
                  shape: 'S9'
                },
                FileShareName: {},
                CacheAttributes: {
                  shape: 'S11'
                },
                NotificationPolicy: {},
                VPCEndpointDNSName: {},
                BucketRegion: {},
                OplocksEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileShareARN: {}
              }
            }
          },
          CreateSnapshot: {
            input: {
              type: 'structure',
              required: ['VolumeARN', 'SnapshotDescription'],
              members: {
                VolumeARN: {},
                SnapshotDescription: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {},
                SnapshotId: {}
              }
            }
          },
          CreateSnapshotFromVolumeRecoveryPoint: {
            input: {
              type: 'structure',
              required: ['VolumeARN', 'SnapshotDescription'],
              members: {
                VolumeARN: {},
                SnapshotDescription: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SnapshotId: {},
                VolumeARN: {},
                VolumeRecoveryPointTime: {}
              }
            }
          },
          CreateStorediSCSIVolume: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'DiskId', 'PreserveExistingData', 'TargetName', 'NetworkInterfaceId'],
              members: {
                GatewayARN: {},
                DiskId: {},
                SnapshotId: {},
                PreserveExistingData: {
                  type: 'boolean'
                },
                TargetName: {},
                NetworkInterfaceId: {},
                KMSEncrypted: {
                  type: 'boolean'
                },
                KMSKey: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {},
                VolumeSizeInBytes: {
                  type: 'long'
                },
                TargetARN: {}
              }
            }
          },
          CreateTapePool: {
            input: {
              type: 'structure',
              required: ['PoolName', 'StorageClass'],
              members: {
                PoolName: {},
                StorageClass: {},
                RetentionLockType: {},
                RetentionLockTimeInDays: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PoolARN: {}
              }
            }
          },
          CreateTapeWithBarcode: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'TapeSizeInBytes', 'TapeBarcode'],
              members: {
                GatewayARN: {},
                TapeSizeInBytes: {
                  type: 'long'
                },
                TapeBarcode: {},
                KMSEncrypted: {
                  type: 'boolean'
                },
                KMSKey: {},
                PoolId: {},
                Worm: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARN: {}
              }
            }
          },
          CreateTapes: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'TapeSizeInBytes', 'ClientToken', 'NumTapesToCreate', 'TapeBarcodePrefix'],
              members: {
                GatewayARN: {},
                TapeSizeInBytes: {
                  type: 'long'
                },
                ClientToken: {},
                NumTapesToCreate: {
                  type: 'integer'
                },
                TapeBarcodePrefix: {},
                KMSEncrypted: {
                  type: 'boolean'
                },
                KMSKey: {},
                PoolId: {},
                Worm: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARNs: {
                  shape: 'S2x'
                }
              }
            }
          },
          DeleteAutomaticTapeCreationPolicy: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          DeleteBandwidthRateLimit: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'BandwidthType'],
              members: {
                GatewayARN: {},
                BandwidthType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          DeleteChapCredentials: {
            input: {
              type: 'structure',
              required: ['TargetARN', 'InitiatorName'],
              members: {
                TargetARN: {},
                InitiatorName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TargetARN: {},
                InitiatorName: {}
              }
            }
          },
          DeleteFileShare: {
            input: {
              type: 'structure',
              required: ['FileShareARN'],
              members: {
                FileShareARN: {},
                ForceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileShareARN: {}
              }
            }
          },
          DeleteGateway: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          DeleteSnapshotSchedule: {
            input: {
              type: 'structure',
              required: ['VolumeARN'],
              members: {
                VolumeARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {}
              }
            }
          },
          DeleteTape: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'TapeARN'],
              members: {
                GatewayARN: {},
                TapeARN: {},
                BypassGovernanceRetention: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARN: {}
              }
            }
          },
          DeleteTapeArchive: {
            input: {
              type: 'structure',
              required: ['TapeARN'],
              members: {
                TapeARN: {},
                BypassGovernanceRetention: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARN: {}
              }
            }
          },
          DeleteTapePool: {
            input: {
              type: 'structure',
              required: ['PoolARN'],
              members: {
                PoolARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PoolARN: {}
              }
            }
          },
          DeleteVolume: {
            input: {
              type: 'structure',
              required: ['VolumeARN'],
              members: {
                VolumeARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {}
              }
            }
          },
          DescribeAvailabilityMonitorTest: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                Status: {},
                StartTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeBandwidthRateLimit: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                AverageUploadRateLimitInBitsPerSec: {
                  type: 'long'
                },
                AverageDownloadRateLimitInBitsPerSec: {
                  type: 'long'
                }
              }
            }
          },
          DescribeBandwidthRateLimitSchedule: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                BandwidthRateLimitIntervals: {
                  shape: 'S3u'
                }
              }
            }
          },
          DescribeCache: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                DiskIds: {
                  shape: 'Sg'
                },
                CacheAllocatedInBytes: {
                  type: 'long'
                },
                CacheUsedPercentage: {
                  type: 'double'
                },
                CacheDirtyPercentage: {
                  type: 'double'
                },
                CacheHitPercentage: {
                  type: 'double'
                },
                CacheMissPercentage: {
                  type: 'double'
                }
              }
            }
          },
          DescribeCachediSCSIVolumes: {
            input: {
              type: 'structure',
              required: ['VolumeARNs'],
              members: {
                VolumeARNs: {
                  shape: 'S44'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CachediSCSIVolumes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VolumeARN: {},
                      VolumeId: {},
                      VolumeType: {},
                      VolumeStatus: {},
                      VolumeAttachmentStatus: {},
                      VolumeSizeInBytes: {
                        type: 'long'
                      },
                      VolumeProgress: {
                        type: 'double'
                      },
                      SourceSnapshotId: {},
                      VolumeiSCSIAttributes: {
                        shape: 'S4d'
                      },
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      VolumeUsedInBytes: {
                        type: 'long'
                      },
                      KMSKey: {},
                      TargetName: {}
                    }
                  }
                }
              }
            }
          },
          DescribeChapCredentials: {
            input: {
              type: 'structure',
              required: ['TargetARN'],
              members: {
                TargetARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChapCredentials: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TargetARN: {},
                      SecretToAuthenticateInitiator: {
                        shape: 'S4m'
                      },
                      InitiatorName: {},
                      SecretToAuthenticateTarget: {
                        shape: 'S4m'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeFileSystemAssociations: {
            input: {
              type: 'structure',
              required: ['FileSystemAssociationARNList'],
              members: {
                FileSystemAssociationARNList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystemAssociationInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FileSystemAssociationARN: {},
                      LocationARN: {},
                      FileSystemAssociationStatus: {},
                      AuditDestinationARN: {},
                      GatewayARN: {},
                      Tags: {
                        shape: 'S9'
                      },
                      CacheAttributes: {
                        shape: 'S11'
                      },
                      EndpointNetworkConfiguration: {
                        shape: 'S13'
                      },
                      FileSystemAssociationStatusDetails: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ErrorCode: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeGatewayInformation: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                GatewayId: {},
                GatewayName: {},
                GatewayTimezone: {},
                GatewayState: {},
                GatewayNetworkInterfaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Ipv4Address: {},
                      MacAddress: {},
                      Ipv6Address: {}
                    },
                    sensitive: true
                  }
                },
                GatewayType: {},
                NextUpdateAvailabilityDate: {},
                LastSoftwareUpdate: {},
                Ec2InstanceId: {},
                Ec2InstanceRegion: {},
                Tags: {
                  shape: 'S9'
                },
                VPCEndpoint: {},
                CloudWatchLogGroupARN: {},
                HostEnvironment: {},
                EndpointType: {},
                SoftwareUpdatesEndDate: {},
                DeprecationDate: {},
                GatewayCapacity: {},
                SupportedGatewayCapacities: {
                  type: 'list',
                  member: {}
                },
                HostEnvironmentId: {},
                SoftwareVersion: {}
              }
            }
          },
          DescribeMaintenanceStartTime: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                HourOfDay: {
                  type: 'integer'
                },
                MinuteOfHour: {
                  type: 'integer'
                },
                DayOfWeek: {
                  type: 'integer'
                },
                DayOfMonth: {
                  type: 'integer'
                },
                Timezone: {},
                SoftwareUpdatePreferences: {
                  shape: 'S5i'
                }
              }
            }
          },
          DescribeNFSFileShares: {
            input: {
              type: 'structure',
              required: ['FileShareARNList'],
              members: {
                FileShareARNList: {
                  shape: 'S5l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NFSFileShareInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      NFSFileShareDefaults: {
                        shape: 'S1p'
                      },
                      FileShareARN: {},
                      FileShareId: {},
                      FileShareStatus: {},
                      GatewayARN: {},
                      KMSEncrypted: {
                        type: 'boolean'
                      },
                      KMSKey: {},
                      Path: {},
                      Role: {},
                      LocationARN: {},
                      DefaultStorageClass: {},
                      ObjectACL: {},
                      ClientList: {
                        shape: 'S1w'
                      },
                      Squash: {},
                      ReadOnly: {
                        type: 'boolean'
                      },
                      GuessMIMETypeEnabled: {
                        type: 'boolean'
                      },
                      RequesterPays: {
                        type: 'boolean'
                      },
                      Tags: {
                        shape: 'S9'
                      },
                      FileShareName: {},
                      CacheAttributes: {
                        shape: 'S11'
                      },
                      NotificationPolicy: {},
                      VPCEndpointDNSName: {},
                      BucketRegion: {},
                      AuditDestinationARN: {}
                    }
                  }
                }
              }
            }
          },
          DescribeSMBFileShares: {
            input: {
              type: 'structure',
              required: ['FileShareARNList'],
              members: {
                FileShareARNList: {
                  shape: 'S5l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SMBFileShareInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FileShareARN: {},
                      FileShareId: {},
                      FileShareStatus: {},
                      GatewayARN: {},
                      KMSEncrypted: {
                        type: 'boolean'
                      },
                      KMSKey: {},
                      Path: {},
                      Role: {},
                      LocationARN: {},
                      DefaultStorageClass: {},
                      ObjectACL: {},
                      ReadOnly: {
                        type: 'boolean'
                      },
                      GuessMIMETypeEnabled: {
                        type: 'boolean'
                      },
                      RequesterPays: {
                        type: 'boolean'
                      },
                      SMBACLEnabled: {
                        type: 'boolean'
                      },
                      AccessBasedEnumeration: {
                        type: 'boolean'
                      },
                      AdminUserList: {
                        shape: 'S25'
                      },
                      ValidUserList: {
                        shape: 'S25'
                      },
                      InvalidUserList: {
                        shape: 'S25'
                      },
                      AuditDestinationARN: {},
                      Authentication: {},
                      CaseSensitivity: {},
                      Tags: {
                        shape: 'S9'
                      },
                      FileShareName: {},
                      CacheAttributes: {
                        shape: 'S11'
                      },
                      NotificationPolicy: {},
                      VPCEndpointDNSName: {},
                      BucketRegion: {},
                      OplocksEnabled: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeSMBSettings: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                DomainName: {},
                ActiveDirectoryStatus: {},
                SMBGuestPasswordSet: {
                  type: 'boolean'
                },
                SMBSecurityStrategy: {},
                FileSharesVisible: {
                  type: 'boolean'
                },
                SMBLocalGroups: {
                  shape: 'S61'
                }
              }
            }
          },
          DescribeSnapshotSchedule: {
            input: {
              type: 'structure',
              required: ['VolumeARN'],
              members: {
                VolumeARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {},
                StartAt: {
                  type: 'integer'
                },
                RecurrenceInHours: {
                  type: 'integer'
                },
                Description: {},
                Timezone: {},
                Tags: {
                  shape: 'S9'
                }
              }
            }
          },
          DescribeStorediSCSIVolumes: {
            input: {
              type: 'structure',
              required: ['VolumeARNs'],
              members: {
                VolumeARNs: {
                  shape: 'S44'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StorediSCSIVolumes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VolumeARN: {},
                      VolumeId: {},
                      VolumeType: {},
                      VolumeStatus: {},
                      VolumeAttachmentStatus: {},
                      VolumeSizeInBytes: {
                        type: 'long'
                      },
                      VolumeProgress: {
                        type: 'double'
                      },
                      VolumeDiskId: {},
                      SourceSnapshotId: {},
                      PreservedExistingData: {
                        type: 'boolean'
                      },
                      VolumeiSCSIAttributes: {
                        shape: 'S4d'
                      },
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      VolumeUsedInBytes: {
                        type: 'long'
                      },
                      KMSKey: {},
                      TargetName: {}
                    }
                  }
                }
              }
            }
          },
          DescribeTapeArchives: {
            input: {
              type: 'structure',
              members: {
                TapeARNs: {
                  shape: 'S2x'
                },
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeArchives: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TapeARN: {},
                      TapeBarcode: {},
                      TapeCreatedDate: {
                        type: 'timestamp'
                      },
                      TapeSizeInBytes: {
                        type: 'long'
                      },
                      CompletionTime: {
                        type: 'timestamp'
                      },
                      RetrievedTo: {},
                      TapeStatus: {},
                      TapeUsedInBytes: {
                        type: 'long'
                      },
                      KMSKey: {},
                      PoolId: {},
                      Worm: {
                        type: 'boolean'
                      },
                      RetentionStartDate: {
                        type: 'timestamp'
                      },
                      PoolEntryDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeTapeRecoveryPoints: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {},
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                TapeRecoveryPointInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TapeARN: {},
                      TapeRecoveryPointTime: {
                        type: 'timestamp'
                      },
                      TapeSizeInBytes: {
                        type: 'long'
                      },
                      TapeStatus: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeTapes: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {},
                TapeARNs: {
                  shape: 'S2x'
                },
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tapes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TapeARN: {},
                      TapeBarcode: {},
                      TapeCreatedDate: {
                        type: 'timestamp'
                      },
                      TapeSizeInBytes: {
                        type: 'long'
                      },
                      TapeStatus: {},
                      VTLDevice: {},
                      Progress: {
                        type: 'double'
                      },
                      TapeUsedInBytes: {
                        type: 'long'
                      },
                      KMSKey: {},
                      PoolId: {},
                      Worm: {
                        type: 'boolean'
                      },
                      RetentionStartDate: {
                        type: 'timestamp'
                      },
                      PoolEntryDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeUploadBuffer: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                DiskIds: {
                  shape: 'Sg'
                },
                UploadBufferUsedInBytes: {
                  type: 'long'
                },
                UploadBufferAllocatedInBytes: {
                  type: 'long'
                }
              }
            }
          },
          DescribeVTLDevices: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {},
                VTLDeviceARNs: {
                  type: 'list',
                  member: {}
                },
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                VTLDevices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VTLDeviceARN: {},
                      VTLDeviceType: {},
                      VTLDeviceVendor: {},
                      VTLDeviceProductIdentifier: {},
                      DeviceiSCSIAttributes: {
                        type: 'structure',
                        members: {
                          TargetARN: {},
                          NetworkInterfaceId: {},
                          NetworkInterfacePort: {
                            type: 'integer'
                          },
                          ChapEnabled: {
                            type: 'boolean'
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
          DescribeWorkingStorage: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                DiskIds: {
                  shape: 'Sg'
                },
                WorkingStorageUsedInBytes: {
                  type: 'long'
                },
                WorkingStorageAllocatedInBytes: {
                  type: 'long'
                }
              }
            }
          },
          DetachVolume: {
            input: {
              type: 'structure',
              required: ['VolumeARN'],
              members: {
                VolumeARN: {},
                ForceDetach: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {}
              }
            }
          },
          DisableGateway: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          DisassociateFileSystem: {
            input: {
              type: 'structure',
              required: ['FileSystemAssociationARN'],
              members: {
                FileSystemAssociationARN: {},
                ForceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystemAssociationARN: {}
              }
            }
          },
          JoinDomain: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'DomainName', 'UserName', 'Password'],
              members: {
                GatewayARN: {},
                DomainName: {},
                OrganizationalUnit: {},
                DomainControllers: {
                  type: 'list',
                  member: {}
                },
                TimeoutInSeconds: {
                  type: 'integer'
                },
                UserName: {},
                Password: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                ActiveDirectoryStatus: {}
              }
            }
          },
          ListAutomaticTapeCreationPolicies: {
            input: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AutomaticTapeCreationPolicyInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AutomaticTapeCreationRules: {
                        shape: 'S7l'
                      },
                      GatewayARN: {}
                    }
                  }
                }
              }
            }
          },
          ListFileShares: {
            input: {
              type: 'structure',
              members: {
                GatewayARN: {},
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                NextMarker: {},
                FileShareInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FileShareType: {},
                      FileShareARN: {},
                      FileShareId: {},
                      FileShareStatus: {},
                      GatewayARN: {}
                    }
                  }
                }
              }
            }
          },
          ListFileSystemAssociations: {
            input: {
              type: 'structure',
              members: {
                GatewayARN: {},
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Marker: {},
                NextMarker: {},
                FileSystemAssociationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FileSystemAssociationId: {},
                      FileSystemAssociationARN: {},
                      FileSystemAssociationStatus: {},
                      GatewayARN: {}
                    }
                  }
                }
              }
            }
          },
          ListGateways: {
            input: {
              type: 'structure',
              members: {
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Gateways: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GatewayId: {},
                      GatewayARN: {},
                      GatewayType: {},
                      GatewayOperationalState: {},
                      GatewayName: {},
                      Ec2InstanceId: {},
                      Ec2InstanceRegion: {},
                      HostEnvironment: {},
                      HostEnvironmentId: {},
                      DeprecationDate: {},
                      SoftwareVersion: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListLocalDisks: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                Disks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DiskId: {},
                      DiskPath: {},
                      DiskNode: {},
                      DiskStatus: {},
                      DiskSizeInBytes: {
                        type: 'long'
                      },
                      DiskAllocationType: {},
                      DiskAllocationResource: {},
                      DiskAttributeList: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
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
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceARN: {},
                Marker: {},
                Tags: {
                  shape: 'S9'
                }
              }
            }
          },
          ListTapePools: {
            input: {
              type: 'structure',
              members: {
                PoolARNs: {
                  type: 'list',
                  member: {}
                },
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PoolInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PoolARN: {},
                      PoolName: {},
                      StorageClass: {},
                      RetentionLockType: {},
                      RetentionLockTimeInDays: {
                        type: 'integer'
                      },
                      PoolStatus: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListTapes: {
            input: {
              type: 'structure',
              members: {
                TapeARNs: {
                  shape: 'S2x'
                },
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TapeARN: {},
                      TapeBarcode: {},
                      TapeSizeInBytes: {
                        type: 'long'
                      },
                      TapeStatus: {},
                      GatewayARN: {},
                      PoolId: {},
                      RetentionStartDate: {
                        type: 'timestamp'
                      },
                      PoolEntryDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListVolumeInitiators: {
            input: {
              type: 'structure',
              required: ['VolumeARN'],
              members: {
                VolumeARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Initiators: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListVolumeRecoveryPoints: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                VolumeRecoveryPointInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VolumeARN: {},
                      VolumeSizeInBytes: {
                        type: 'long'
                      },
                      VolumeUsageInBytes: {
                        type: 'long'
                      },
                      VolumeRecoveryPointTime: {}
                    }
                  }
                }
              }
            }
          },
          ListVolumes: {
            input: {
              type: 'structure',
              members: {
                GatewayARN: {},
                Marker: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                Marker: {},
                VolumeInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VolumeARN: {},
                      VolumeId: {},
                      GatewayARN: {},
                      GatewayId: {},
                      VolumeType: {},
                      VolumeSizeInBytes: {
                        type: 'long'
                      },
                      VolumeAttachmentStatus: {}
                    }
                  }
                }
              }
            }
          },
          NotifyWhenUploaded: {
            input: {
              type: 'structure',
              required: ['FileShareARN'],
              members: {
                FileShareARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FileShareARN: {},
                NotificationId: {}
              }
            }
          },
          RefreshCache: {
            input: {
              type: 'structure',
              required: ['FileShareARN'],
              members: {
                FileShareARN: {},
                FolderList: {
                  type: 'list',
                  member: {}
                },
                Recursive: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileShareARN: {},
                NotificationId: {}
              }
            }
          },
          RemoveTagsFromResource: {
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
              members: {
                ResourceARN: {}
              }
            }
          },
          ResetCache: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          RetrieveTapeArchive: {
            input: {
              type: 'structure',
              required: ['TapeARN', 'GatewayARN'],
              members: {
                TapeARN: {},
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARN: {}
              }
            }
          },
          RetrieveTapeRecoveryPoint: {
            input: {
              type: 'structure',
              required: ['TapeARN', 'GatewayARN'],
              members: {
                TapeARN: {},
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TapeARN: {}
              }
            }
          },
          SetLocalConsolePassword: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'LocalConsolePassword'],
              members: {
                GatewayARN: {},
                LocalConsolePassword: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          SetSMBGuestPassword: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'Password'],
              members: {
                GatewayARN: {},
                Password: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          ShutdownGateway: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          StartAvailabilityMonitorTest: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          StartGateway: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateAutomaticTapeCreationPolicy: {
            input: {
              type: 'structure',
              required: ['AutomaticTapeCreationRules', 'GatewayARN'],
              members: {
                AutomaticTapeCreationRules: {
                  shape: 'S7l'
                },
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateBandwidthRateLimit: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {},
                AverageUploadRateLimitInBitsPerSec: {
                  type: 'long'
                },
                AverageDownloadRateLimitInBitsPerSec: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateBandwidthRateLimitSchedule: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'BandwidthRateLimitIntervals'],
              members: {
                GatewayARN: {},
                BandwidthRateLimitIntervals: {
                  shape: 'S3u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateChapCredentials: {
            input: {
              type: 'structure',
              required: ['TargetARN', 'SecretToAuthenticateInitiator', 'InitiatorName'],
              members: {
                TargetARN: {},
                SecretToAuthenticateInitiator: {
                  shape: 'S4m'
                },
                InitiatorName: {},
                SecretToAuthenticateTarget: {
                  shape: 'S4m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TargetARN: {},
                InitiatorName: {}
              }
            }
          },
          UpdateFileSystemAssociation: {
            input: {
              type: 'structure',
              required: ['FileSystemAssociationARN'],
              members: {
                FileSystemAssociationARN: {},
                UserName: {},
                Password: {
                  shape: 'Sx'
                },
                AuditDestinationARN: {},
                CacheAttributes: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileSystemAssociationARN: {}
              }
            }
          },
          UpdateGatewayInformation: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {},
                GatewayName: {},
                GatewayTimezone: {},
                CloudWatchLogGroupARN: {},
                GatewayCapacity: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {},
                GatewayName: {}
              }
            }
          },
          UpdateGatewaySoftwareNow: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateMaintenanceStartTime: {
            input: {
              type: 'structure',
              required: ['GatewayARN'],
              members: {
                GatewayARN: {},
                HourOfDay: {
                  type: 'integer'
                },
                MinuteOfHour: {
                  type: 'integer'
                },
                DayOfWeek: {
                  type: 'integer'
                },
                DayOfMonth: {
                  type: 'integer'
                },
                SoftwareUpdatePreferences: {
                  shape: 'S5i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateNFSFileShare: {
            input: {
              type: 'structure',
              required: ['FileShareARN'],
              members: {
                FileShareARN: {},
                KMSEncrypted: {
                  type: 'boolean'
                },
                KMSKey: {},
                NFSFileShareDefaults: {
                  shape: 'S1p'
                },
                DefaultStorageClass: {},
                ObjectACL: {},
                ClientList: {
                  shape: 'S1w'
                },
                Squash: {},
                ReadOnly: {
                  type: 'boolean'
                },
                GuessMIMETypeEnabled: {
                  type: 'boolean'
                },
                RequesterPays: {
                  type: 'boolean'
                },
                FileShareName: {},
                CacheAttributes: {
                  shape: 'S11'
                },
                NotificationPolicy: {},
                AuditDestinationARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FileShareARN: {}
              }
            }
          },
          UpdateSMBFileShare: {
            input: {
              type: 'structure',
              required: ['FileShareARN'],
              members: {
                FileShareARN: {},
                KMSEncrypted: {
                  type: 'boolean'
                },
                KMSKey: {},
                DefaultStorageClass: {},
                ObjectACL: {},
                ReadOnly: {
                  type: 'boolean'
                },
                GuessMIMETypeEnabled: {
                  type: 'boolean'
                },
                RequesterPays: {
                  type: 'boolean'
                },
                SMBACLEnabled: {
                  type: 'boolean'
                },
                AccessBasedEnumeration: {
                  type: 'boolean'
                },
                AdminUserList: {
                  shape: 'S25'
                },
                ValidUserList: {
                  shape: 'S25'
                },
                InvalidUserList: {
                  shape: 'S25'
                },
                AuditDestinationARN: {},
                CaseSensitivity: {},
                FileShareName: {},
                CacheAttributes: {
                  shape: 'S11'
                },
                NotificationPolicy: {},
                OplocksEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FileShareARN: {}
              }
            }
          },
          UpdateSMBFileShareVisibility: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'FileSharesVisible'],
              members: {
                GatewayARN: {},
                FileSharesVisible: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateSMBLocalGroups: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'SMBLocalGroups'],
              members: {
                GatewayARN: {},
                SMBLocalGroups: {
                  shape: 'S61'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateSMBSecurityStrategy: {
            input: {
              type: 'structure',
              required: ['GatewayARN', 'SMBSecurityStrategy'],
              members: {
                GatewayARN: {},
                SMBSecurityStrategy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GatewayARN: {}
              }
            }
          },
          UpdateSnapshotSchedule: {
            input: {
              type: 'structure',
              required: ['VolumeARN', 'StartAt', 'RecurrenceInHours'],
              members: {
                VolumeARN: {},
                StartAt: {
                  type: 'integer'
                },
                RecurrenceInHours: {
                  type: 'integer'
                },
                Description: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeARN: {}
              }
            }
          },
          UpdateVTLDeviceType: {
            input: {
              type: 'structure',
              required: ['VTLDeviceARN', 'DeviceType'],
              members: {
                VTLDeviceARN: {},
                DeviceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VTLDeviceARN: {}
              }
            }
          }
        },
        shapes: {
          S9: {
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
          Sg: {
            type: 'list',
            member: {}
          },
          Sx: {
            type: 'string',
            sensitive: true
          },
          S11: {
            type: 'structure',
            members: {
              CacheStaleTimeoutInSeconds: {
                type: 'integer'
              }
            }
          },
          S13: {
            type: 'structure',
            members: {
              IpAddresses: {
                type: 'list',
                member: {}
              }
            }
          },
          S1p: {
            type: 'structure',
            members: {
              FileMode: {},
              DirectoryMode: {},
              GroupId: {
                type: 'long'
              },
              OwnerId: {
                type: 'long'
              }
            }
          },
          S1w: {
            type: 'list',
            member: {}
          },
          S25: {
            type: 'list',
            member: {}
          },
          S2x: {
            type: 'list',
            member: {}
          },
          S3u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['StartHourOfDay', 'StartMinuteOfHour', 'EndHourOfDay', 'EndMinuteOfHour', 'DaysOfWeek'],
              members: {
                StartHourOfDay: {
                  type: 'integer'
                },
                StartMinuteOfHour: {
                  type: 'integer'
                },
                EndHourOfDay: {
                  type: 'integer'
                },
                EndMinuteOfHour: {
                  type: 'integer'
                },
                DaysOfWeek: {
                  type: 'list',
                  member: {
                    type: 'integer'
                  }
                },
                AverageUploadRateLimitInBitsPerSec: {
                  type: 'long'
                },
                AverageDownloadRateLimitInBitsPerSec: {
                  type: 'long'
                }
              }
            }
          },
          S44: {
            type: 'list',
            member: {}
          },
          S4d: {
            type: 'structure',
            members: {
              TargetARN: {},
              NetworkInterfaceId: {},
              NetworkInterfacePort: {
                type: 'integer'
              },
              LunNumber: {
                type: 'integer'
              },
              ChapEnabled: {
                type: 'boolean'
              }
            }
          },
          S4m: {
            type: 'string',
            sensitive: true
          },
          S5i: {
            type: 'structure',
            members: {
              AutomaticUpdatePolicy: {}
            }
          },
          S5l: {
            type: 'list',
            member: {}
          },
          S61: {
            type: 'structure',
            members: {
              GatewayAdmins: {
                shape: 'S25'
              }
            }
          },
          S7l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['TapeBarcodePrefix', 'PoolId', 'TapeSizeInBytes', 'MinimumNumTapes'],
              members: {
                TapeBarcodePrefix: {},
                PoolId: {},
                TapeSizeInBytes: {
                  type: 'long'
                },
                MinimumNumTapes: {
                  type: 'integer'
                },
                Worm: {
                  type: 'boolean'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b0c92e01f005461751c202adacdadc05d924df1f.js.map