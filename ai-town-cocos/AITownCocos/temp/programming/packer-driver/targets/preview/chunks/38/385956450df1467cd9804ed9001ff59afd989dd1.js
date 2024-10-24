System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-11-09',
          endpointPrefix: 'datasync',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'DataSync',
          serviceFullName: 'AWS DataSync',
          serviceId: 'DataSync',
          signatureVersion: 'v4',
          signingName: 'datasync',
          targetPrefix: 'FmrsService',
          uid: 'datasync-2018-11-09'
        },
        operations: {
          AddStorageSystem: {
            input: {
              type: 'structure',
              required: ['ServerConfiguration', 'SystemType', 'AgentArns', 'ClientToken', 'Credentials'],
              members: {
                ServerConfiguration: {
                  shape: 'S2'
                },
                SystemType: {},
                AgentArns: {
                  shape: 'S6'
                },
                CloudWatchLogGroupArn: {},
                Tags: {
                  shape: 'S9'
                },
                Name: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Credentials: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StorageSystemArn'],
              members: {
                StorageSystemArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          CancelTaskExecution: {
            input: {
              type: 'structure',
              required: ['TaskExecutionArn'],
              members: {
                TaskExecutionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateAgent: {
            input: {
              type: 'structure',
              required: ['ActivationKey'],
              members: {
                ActivationKey: {},
                AgentName: {},
                Tags: {
                  shape: 'S9'
                },
                VpcEndpointId: {},
                SubnetArns: {
                  shape: 'Sq'
                },
                SecurityGroupArns: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AgentArn: {}
              }
            }
          },
          CreateLocationAzureBlob: {
            input: {
              type: 'structure',
              required: ['ContainerUrl', 'AuthenticationType', 'AgentArns'],
              members: {
                ContainerUrl: {},
                AuthenticationType: {},
                SasConfiguration: {
                  shape: 'Sy'
                },
                BlobType: {},
                AccessTier: {},
                Subdirectory: {},
                AgentArns: {
                  shape: 'S13'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationEfs: {
            input: {
              type: 'structure',
              required: ['EfsFilesystemArn', 'Ec2Config'],
              members: {
                Subdirectory: {},
                EfsFilesystemArn: {},
                Ec2Config: {
                  shape: 'S19'
                },
                Tags: {
                  shape: 'S9'
                },
                AccessPointArn: {},
                FileSystemAccessRoleArn: {},
                InTransitEncryption: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationFsxLustre: {
            input: {
              type: 'structure',
              required: ['FsxFilesystemArn', 'SecurityGroupArns'],
              members: {
                FsxFilesystemArn: {},
                SecurityGroupArns: {
                  shape: 'S1a'
                },
                Subdirectory: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationFsxOntap: {
            input: {
              type: 'structure',
              required: ['Protocol', 'SecurityGroupArns', 'StorageVirtualMachineArn'],
              members: {
                Protocol: {
                  shape: 'S1k'
                },
                SecurityGroupArns: {
                  shape: 'S1a'
                },
                StorageVirtualMachineArn: {},
                Subdirectory: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationFsxOpenZfs: {
            input: {
              type: 'structure',
              required: ['FsxFilesystemArn', 'Protocol', 'SecurityGroupArns'],
              members: {
                FsxFilesystemArn: {},
                Protocol: {
                  shape: 'S1k'
                },
                SecurityGroupArns: {
                  shape: 'S1a'
                },
                Subdirectory: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationFsxWindows: {
            input: {
              type: 'structure',
              required: ['FsxFilesystemArn', 'SecurityGroupArns', 'User', 'Password'],
              members: {
                Subdirectory: {},
                FsxFilesystemArn: {},
                SecurityGroupArns: {
                  shape: 'S1a'
                },
                Tags: {
                  shape: 'S9'
                },
                User: {},
                Domain: {},
                Password: {
                  shape: 'S1s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationHdfs: {
            input: {
              type: 'structure',
              required: ['NameNodes', 'AuthenticationType', 'AgentArns'],
              members: {
                Subdirectory: {},
                NameNodes: {
                  shape: 'S25'
                },
                BlockSize: {
                  type: 'integer'
                },
                ReplicationFactor: {
                  type: 'integer'
                },
                KmsKeyProviderUri: {},
                QopConfiguration: {
                  shape: 'S2c'
                },
                AuthenticationType: {},
                SimpleUser: {},
                KerberosPrincipal: {},
                KerberosKeytab: {
                  type: 'blob'
                },
                KerberosKrb5Conf: {
                  type: 'blob'
                },
                AgentArns: {
                  shape: 'S13'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationNfs: {
            input: {
              type: 'structure',
              required: ['Subdirectory', 'ServerHostname', 'OnPremConfig'],
              members: {
                Subdirectory: {},
                ServerHostname: {},
                OnPremConfig: {
                  shape: 'S2o'
                },
                MountOptions: {
                  shape: 'S1m'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationObjectStorage: {
            input: {
              type: 'structure',
              required: ['ServerHostname', 'BucketName', 'AgentArns'],
              members: {
                ServerHostname: {},
                ServerPort: {
                  type: 'integer'
                },
                ServerProtocol: {},
                Subdirectory: {},
                BucketName: {},
                AccessKey: {},
                SecretKey: {
                  shape: 'S2w'
                },
                AgentArns: {
                  shape: 'S13'
                },
                Tags: {
                  shape: 'S9'
                },
                ServerCertificate: {
                  type: 'blob'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationS3: {
            input: {
              type: 'structure',
              required: ['S3BucketArn', 'S3Config'],
              members: {
                Subdirectory: {},
                S3BucketArn: {},
                S3StorageClass: {},
                S3Config: {
                  shape: 'S32'
                },
                AgentArns: {
                  shape: 'S13'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateLocationSmb: {
            input: {
              type: 'structure',
              required: ['Subdirectory', 'ServerHostname', 'User', 'Password', 'AgentArns'],
              members: {
                Subdirectory: {},
                ServerHostname: {},
                User: {},
                Domain: {},
                Password: {
                  shape: 'S1s'
                },
                AgentArns: {
                  shape: 'S13'
                },
                MountOptions: {
                  shape: 'S1q'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {}
              }
            }
          },
          CreateTask: {
            input: {
              type: 'structure',
              required: ['SourceLocationArn', 'DestinationLocationArn'],
              members: {
                SourceLocationArn: {},
                DestinationLocationArn: {},
                CloudWatchLogGroupArn: {},
                Name: {},
                Options: {
                  shape: 'S38'
                },
                Excludes: {
                  shape: 'S3o'
                },
                Schedule: {
                  shape: 'S3s'
                },
                Tags: {
                  shape: 'S9'
                },
                Includes: {
                  shape: 'S3o'
                },
                ManifestConfig: {
                  shape: 'S3v'
                },
                TaskReportConfig: {
                  shape: 'S41'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskArn: {}
              }
            }
          },
          DeleteAgent: {
            input: {
              type: 'structure',
              required: ['AgentArn'],
              members: {
                AgentArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLocation: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTask: {
            input: {
              type: 'structure',
              required: ['TaskArn'],
              members: {
                TaskArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAgent: {
            input: {
              type: 'structure',
              required: ['AgentArn'],
              members: {
                AgentArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AgentArn: {},
                Name: {},
                Status: {},
                LastConnectionTime: {
                  type: 'timestamp'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                EndpointType: {},
                PrivateLinkConfig: {
                  type: 'structure',
                  members: {
                    VpcEndpointId: {},
                    PrivateLinkEndpoint: {},
                    SubnetArns: {
                      shape: 'Sq'
                    },
                    SecurityGroupArns: {
                      shape: 'Ss'
                    }
                  }
                },
                Platform: {
                  shape: 'S4o'
                }
              }
            }
          },
          DescribeDiscoveryJob: {
            input: {
              type: 'structure',
              required: ['DiscoveryJobArn'],
              members: {
                DiscoveryJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageSystemArn: {},
                DiscoveryJobArn: {},
                CollectionDurationMinutes: {
                  type: 'integer'
                },
                Status: {},
                JobStartTime: {
                  type: 'timestamp'
                },
                JobEndTime: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          DescribeLocationAzureBlob: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                AuthenticationType: {},
                BlobType: {},
                AccessTier: {},
                AgentArns: {
                  shape: 'S13'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeLocationEfs: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                Ec2Config: {
                  shape: 'S19'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                AccessPointArn: {},
                FileSystemAccessRoleArn: {},
                InTransitEncryption: {}
              }
            }
          },
          DescribeLocationFsxLustre: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                SecurityGroupArns: {
                  shape: 'S1a'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeLocationFsxOntap: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CreationTime: {
                  type: 'timestamp'
                },
                LocationArn: {},
                LocationUri: {},
                Protocol: {
                  shape: 'S1k'
                },
                SecurityGroupArns: {
                  shape: 'S1a'
                },
                StorageVirtualMachineArn: {},
                FsxFilesystemArn: {}
              }
            }
          },
          DescribeLocationFsxOpenZfs: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                SecurityGroupArns: {
                  shape: 'S1a'
                },
                Protocol: {
                  shape: 'S1k'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeLocationFsxWindows: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                SecurityGroupArns: {
                  shape: 'S1a'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                User: {},
                Domain: {}
              }
            }
          },
          DescribeLocationHdfs: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                NameNodes: {
                  shape: 'S25'
                },
                BlockSize: {
                  type: 'integer'
                },
                ReplicationFactor: {
                  type: 'integer'
                },
                KmsKeyProviderUri: {},
                QopConfiguration: {
                  shape: 'S2c'
                },
                AuthenticationType: {},
                SimpleUser: {},
                KerberosPrincipal: {},
                AgentArns: {
                  shape: 'S13'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeLocationNfs: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                OnPremConfig: {
                  shape: 'S2o'
                },
                MountOptions: {
                  shape: 'S1m'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeLocationObjectStorage: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                AccessKey: {},
                ServerPort: {
                  type: 'integer'
                },
                ServerProtocol: {},
                AgentArns: {
                  shape: 'S13'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                ServerCertificate: {
                  type: 'blob'
                }
              }
            }
          },
          DescribeLocationS3: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                S3StorageClass: {},
                S3Config: {
                  shape: 'S32'
                },
                AgentArns: {
                  shape: 'S13'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeLocationSmb: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationArn: {},
                LocationUri: {},
                AgentArns: {
                  shape: 'S13'
                },
                User: {},
                Domain: {},
                MountOptions: {
                  shape: 'S1q'
                },
                CreationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeStorageSystem: {
            input: {
              type: 'structure',
              required: ['StorageSystemArn'],
              members: {
                StorageSystemArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageSystemArn: {},
                ServerConfiguration: {
                  shape: 'S2'
                },
                SystemType: {},
                AgentArns: {
                  shape: 'S6'
                },
                Name: {},
                ErrorMessage: {},
                ConnectivityStatus: {},
                CloudWatchLogGroupArn: {},
                CreationTime: {
                  type: 'timestamp'
                },
                SecretsManagerArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          DescribeStorageSystemResourceMetrics: {
            input: {
              type: 'structure',
              required: ['DiscoveryJobArn', 'ResourceType', 'ResourceId'],
              members: {
                DiscoveryJobArn: {},
                ResourceType: {},
                ResourceId: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
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
                Metrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'timestamp'
                      },
                      P95Metrics: {
                        type: 'structure',
                        members: {
                          IOPS: {
                            type: 'structure',
                            members: {
                              Read: {
                                type: 'double'
                              },
                              Write: {
                                type: 'double'
                              },
                              Other: {
                                type: 'double'
                              },
                              Total: {
                                type: 'double'
                              }
                            }
                          },
                          Throughput: {
                            type: 'structure',
                            members: {
                              Read: {
                                type: 'double'
                              },
                              Write: {
                                type: 'double'
                              },
                              Other: {
                                type: 'double'
                              },
                              Total: {
                                type: 'double'
                              }
                            }
                          },
                          Latency: {
                            type: 'structure',
                            members: {
                              Read: {
                                type: 'double'
                              },
                              Write: {
                                type: 'double'
                              },
                              Other: {
                                type: 'double'
                              }
                            }
                          }
                        }
                      },
                      Capacity: {
                        type: 'structure',
                        members: {
                          Used: {
                            type: 'long'
                          },
                          Provisioned: {
                            type: 'long'
                          },
                          LogicalUsed: {
                            type: 'long'
                          },
                          ClusterCloudStorageUsed: {
                            type: 'long'
                          }
                        }
                      },
                      ResourceId: {},
                      ResourceType: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          DescribeStorageSystemResources: {
            input: {
              type: 'structure',
              required: ['DiscoveryJobArn', 'ResourceType'],
              members: {
                DiscoveryJobArn: {},
                ResourceType: {},
                ResourceIds: {
                  shape: 'S65'
                },
                Filter: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
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
                ResourceDetails: {
                  type: 'structure',
                  members: {
                    NetAppONTAPSVMs: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ClusterUuid: {},
                          ResourceId: {},
                          SvmName: {},
                          CifsShareCount: {
                            type: 'long'
                          },
                          EnabledProtocols: {
                            type: 'list',
                            member: {}
                          },
                          TotalCapacityUsed: {
                            type: 'long'
                          },
                          TotalCapacityProvisioned: {
                            type: 'long'
                          },
                          TotalLogicalCapacityUsed: {
                            type: 'long'
                          },
                          MaxP95Performance: {
                            shape: 'S6f'
                          },
                          Recommendations: {
                            shape: 'S6g'
                          },
                          NfsExportedVolumes: {
                            type: 'long'
                          },
                          RecommendationStatus: {},
                          TotalSnapshotCapacityUsed: {
                            type: 'long'
                          },
                          LunCount: {
                            type: 'long'
                          }
                        }
                      }
                    },
                    NetAppONTAPVolumes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          VolumeName: {},
                          ResourceId: {},
                          CifsShareCount: {
                            type: 'long'
                          },
                          SecurityStyle: {},
                          SvmUuid: {},
                          SvmName: {},
                          CapacityUsed: {
                            type: 'long'
                          },
                          CapacityProvisioned: {
                            type: 'long'
                          },
                          LogicalCapacityUsed: {
                            type: 'long'
                          },
                          NfsExported: {
                            type: 'boolean'
                          },
                          SnapshotCapacityUsed: {
                            type: 'long'
                          },
                          MaxP95Performance: {
                            shape: 'S6f'
                          },
                          Recommendations: {
                            shape: 'S6g'
                          },
                          RecommendationStatus: {},
                          LunCount: {
                            type: 'long'
                          }
                        }
                      }
                    },
                    NetAppONTAPClusters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          CifsShareCount: {
                            type: 'long'
                          },
                          NfsExportedVolumes: {
                            type: 'long'
                          },
                          ResourceId: {},
                          ClusterName: {},
                          MaxP95Performance: {
                            shape: 'S6f'
                          },
                          ClusterBlockStorageSize: {
                            type: 'long'
                          },
                          ClusterBlockStorageUsed: {
                            type: 'long'
                          },
                          ClusterBlockStorageLogicalUsed: {
                            type: 'long'
                          },
                          Recommendations: {
                            shape: 'S6g'
                          },
                          RecommendationStatus: {},
                          LunCount: {
                            type: 'long'
                          },
                          ClusterCloudStorageUsed: {
                            type: 'long'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          DescribeTask: {
            input: {
              type: 'structure',
              required: ['TaskArn'],
              members: {
                TaskArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskArn: {},
                Status: {},
                Name: {},
                CurrentTaskExecutionArn: {},
                SourceLocationArn: {},
                DestinationLocationArn: {},
                CloudWatchLogGroupArn: {},
                SourceNetworkInterfaceArns: {
                  type: 'list',
                  member: {}
                },
                DestinationNetworkInterfaceArns: {
                  type: 'list',
                  member: {}
                },
                Options: {
                  shape: 'S38'
                },
                Excludes: {
                  shape: 'S3o'
                },
                Schedule: {
                  shape: 'S3s'
                },
                ErrorCode: {},
                ErrorDetail: {},
                CreationTime: {
                  type: 'timestamp'
                },
                Includes: {
                  shape: 'S3o'
                },
                ManifestConfig: {
                  shape: 'S3v'
                },
                TaskReportConfig: {
                  shape: 'S41'
                },
                ScheduleDetails: {
                  type: 'structure',
                  members: {
                    StatusUpdateTime: {
                      type: 'timestamp'
                    },
                    DisabledReason: {},
                    DisabledBy: {}
                  }
                }
              }
            }
          },
          DescribeTaskExecution: {
            input: {
              type: 'structure',
              required: ['TaskExecutionArn'],
              members: {
                TaskExecutionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskExecutionArn: {},
                Status: {},
                Options: {
                  shape: 'S38'
                },
                Excludes: {
                  shape: 'S3o'
                },
                Includes: {
                  shape: 'S3o'
                },
                ManifestConfig: {
                  shape: 'S3v'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EstimatedFilesToTransfer: {
                  type: 'long'
                },
                EstimatedBytesToTransfer: {
                  type: 'long'
                },
                FilesTransferred: {
                  type: 'long'
                },
                BytesWritten: {
                  type: 'long'
                },
                BytesTransferred: {
                  type: 'long'
                },
                BytesCompressed: {
                  type: 'long'
                },
                Result: {
                  type: 'structure',
                  members: {
                    PrepareDuration: {
                      type: 'long'
                    },
                    PrepareStatus: {},
                    TotalDuration: {
                      type: 'long'
                    },
                    TransferDuration: {
                      type: 'long'
                    },
                    TransferStatus: {},
                    VerifyDuration: {
                      type: 'long'
                    },
                    VerifyStatus: {},
                    ErrorCode: {},
                    ErrorDetail: {}
                  }
                },
                TaskReportConfig: {
                  shape: 'S41'
                },
                FilesDeleted: {
                  type: 'long'
                },
                FilesSkipped: {
                  type: 'long'
                },
                FilesVerified: {
                  type: 'long'
                },
                ReportResult: {
                  type: 'structure',
                  members: {
                    Status: {},
                    ErrorCode: {},
                    ErrorDetail: {}
                  }
                },
                EstimatedFilesToDelete: {
                  type: 'long'
                }
              }
            }
          },
          GenerateRecommendations: {
            input: {
              type: 'structure',
              required: ['DiscoveryJobArn', 'ResourceIds', 'ResourceType'],
              members: {
                DiscoveryJobArn: {},
                ResourceIds: {
                  shape: 'S65'
                },
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          ListAgents: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Agents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AgentArn: {},
                      Name: {},
                      Status: {},
                      Platform: {
                        shape: 'S4o'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDiscoveryJobs: {
            input: {
              type: 'structure',
              members: {
                StorageSystemArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DiscoveryJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DiscoveryJobArn: {},
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          ListLocations: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values', 'Operator'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S7n'
                      },
                      Operator: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Locations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LocationArn: {},
                      LocationUri: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStorageSystems: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageSystems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StorageSystemArn: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
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
                  type: 'list',
                  member: {
                    shape: 'Sa'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTaskExecutions: {
            input: {
              type: 'structure',
              members: {
                TaskArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TaskExecutionArn: {},
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTasks: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values', 'Operator'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S7n'
                      },
                      Operator: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TaskArn: {},
                      Status: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          RemoveStorageSystem: {
            input: {
              type: 'structure',
              required: ['StorageSystemArn'],
              members: {
                StorageSystemArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          StartDiscoveryJob: {
            input: {
              type: 'structure',
              required: ['StorageSystemArn', 'CollectionDurationMinutes', 'ClientToken'],
              members: {
                StorageSystemArn: {},
                CollectionDurationMinutes: {
                  type: 'integer'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DiscoveryJobArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          StartTaskExecution: {
            input: {
              type: 'structure',
              required: ['TaskArn'],
              members: {
                TaskArn: {},
                OverrideOptions: {
                  shape: 'S38'
                },
                Includes: {
                  shape: 'S3o'
                },
                Excludes: {
                  shape: 'S3o'
                },
                ManifestConfig: {
                  shape: 'S3v'
                },
                TaskReportConfig: {
                  shape: 'S41'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskExecutionArn: {}
              }
            }
          },
          StopDiscoveryJob: {
            input: {
              type: 'structure',
              required: ['DiscoveryJobArn'],
              members: {
                DiscoveryJobArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Keys'],
              members: {
                ResourceArn: {},
                Keys: {
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
          UpdateAgent: {
            input: {
              type: 'structure',
              required: ['AgentArn'],
              members: {
                AgentArn: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDiscoveryJob: {
            input: {
              type: 'structure',
              required: ['DiscoveryJobArn', 'CollectionDurationMinutes'],
              members: {
                DiscoveryJobArn: {},
                CollectionDurationMinutes: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          UpdateLocationAzureBlob: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {},
                Subdirectory: {},
                AuthenticationType: {},
                SasConfiguration: {
                  shape: 'Sy'
                },
                BlobType: {},
                AccessTier: {},
                AgentArns: {
                  shape: 'S13'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLocationHdfs: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {},
                Subdirectory: {},
                NameNodes: {
                  shape: 'S25'
                },
                BlockSize: {
                  type: 'integer'
                },
                ReplicationFactor: {
                  type: 'integer'
                },
                KmsKeyProviderUri: {},
                QopConfiguration: {
                  shape: 'S2c'
                },
                AuthenticationType: {},
                SimpleUser: {},
                KerberosPrincipal: {},
                KerberosKeytab: {
                  type: 'blob'
                },
                KerberosKrb5Conf: {
                  type: 'blob'
                },
                AgentArns: {
                  shape: 'S13'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLocationNfs: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {},
                Subdirectory: {},
                OnPremConfig: {
                  shape: 'S2o'
                },
                MountOptions: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLocationObjectStorage: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {},
                ServerPort: {
                  type: 'integer'
                },
                ServerProtocol: {},
                Subdirectory: {},
                AccessKey: {},
                SecretKey: {
                  shape: 'S2w'
                },
                AgentArns: {
                  shape: 'S13'
                },
                ServerCertificate: {
                  type: 'blob'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLocationSmb: {
            input: {
              type: 'structure',
              required: ['LocationArn'],
              members: {
                LocationArn: {},
                Subdirectory: {},
                User: {},
                Domain: {},
                Password: {
                  shape: 'S1s'
                },
                AgentArns: {
                  shape: 'S13'
                },
                MountOptions: {
                  shape: 'S1q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateStorageSystem: {
            input: {
              type: 'structure',
              required: ['StorageSystemArn'],
              members: {
                StorageSystemArn: {},
                ServerConfiguration: {
                  shape: 'S2'
                },
                AgentArns: {
                  shape: 'S6'
                },
                Name: {},
                CloudWatchLogGroupArn: {},
                Credentials: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'discovery-'
            }
          },
          UpdateTask: {
            input: {
              type: 'structure',
              required: ['TaskArn'],
              members: {
                TaskArn: {},
                Options: {
                  shape: 'S38'
                },
                Excludes: {
                  shape: 'S3o'
                },
                Schedule: {
                  shape: 'S3s'
                },
                Name: {},
                CloudWatchLogGroupArn: {},
                Includes: {
                  shape: 'S3o'
                },
                ManifestConfig: {
                  shape: 'S3v'
                },
                TaskReportConfig: {
                  shape: 'S41'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateTaskExecution: {
            input: {
              type: 'structure',
              required: ['TaskExecutionArn', 'Options'],
              members: {
                TaskExecutionArn: {},
                Options: {
                  shape: 'S38'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            required: ['ServerHostname'],
            members: {
              ServerHostname: {},
              ServerPort: {
                type: 'integer'
              }
            }
          },
          S6: {
            type: 'list',
            member: {}
          },
          S9: {
            type: 'list',
            member: {
              shape: 'Sa'
            }
          },
          Sa: {
            type: 'structure',
            required: ['Key'],
            members: {
              Key: {},
              Value: {}
            }
          },
          Sf: {
            type: 'structure',
            required: ['Username', 'Password'],
            members: {
              Username: {
                type: 'string',
                sensitive: true
              },
              Password: {
                type: 'string',
                sensitive: true
              }
            }
          },
          Sq: {
            type: 'list',
            member: {}
          },
          Ss: {
            type: 'list',
            member: {}
          },
          Sy: {
            type: 'structure',
            required: ['Token'],
            members: {
              Token: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S13: {
            type: 'list',
            member: {}
          },
          S19: {
            type: 'structure',
            required: ['SubnetArn', 'SecurityGroupArns'],
            members: {
              SubnetArn: {},
              SecurityGroupArns: {
                shape: 'S1a'
              }
            }
          },
          S1a: {
            type: 'list',
            member: {}
          },
          S1k: {
            type: 'structure',
            members: {
              NFS: {
                type: 'structure',
                members: {
                  MountOptions: {
                    shape: 'S1m'
                  }
                }
              },
              SMB: {
                type: 'structure',
                required: ['Password', 'User'],
                members: {
                  Domain: {},
                  MountOptions: {
                    shape: 'S1q'
                  },
                  Password: {
                    shape: 'S1s'
                  },
                  User: {}
                }
              }
            }
          },
          S1m: {
            type: 'structure',
            members: {
              Version: {}
            }
          },
          S1q: {
            type: 'structure',
            members: {
              Version: {}
            }
          },
          S1s: {
            type: 'string',
            sensitive: true
          },
          S25: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Hostname', 'Port'],
              members: {
                Hostname: {},
                Port: {
                  type: 'integer'
                }
              }
            }
          },
          S2c: {
            type: 'structure',
            members: {
              RpcProtection: {},
              DataTransferProtection: {}
            }
          },
          S2o: {
            type: 'structure',
            required: ['AgentArns'],
            members: {
              AgentArns: {
                shape: 'S13'
              }
            }
          },
          S2w: {
            type: 'string',
            sensitive: true
          },
          S32: {
            type: 'structure',
            required: ['BucketAccessRoleArn'],
            members: {
              BucketAccessRoleArn: {}
            }
          },
          S38: {
            type: 'structure',
            members: {
              VerifyMode: {},
              OverwriteMode: {},
              Atime: {},
              Mtime: {},
              Uid: {},
              Gid: {},
              PreserveDeletedFiles: {},
              PreserveDevices: {},
              PosixPermissions: {},
              BytesPerSecond: {
                type: 'long'
              },
              TaskQueueing: {},
              LogLevel: {},
              TransferMode: {},
              SecurityDescriptorCopyFlags: {},
              ObjectTags: {}
            }
          },
          S3o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FilterType: {},
                Value: {}
              }
            }
          },
          S3s: {
            type: 'structure',
            required: ['ScheduleExpression'],
            members: {
              ScheduleExpression: {},
              Status: {}
            }
          },
          S3v: {
            type: 'structure',
            members: {
              Action: {},
              Format: {},
              Source: {
                type: 'structure',
                required: ['S3'],
                members: {
                  S3: {
                    type: 'structure',
                    required: ['ManifestObjectPath', 'BucketAccessRoleArn', 'S3BucketArn'],
                    members: {
                      ManifestObjectPath: {},
                      BucketAccessRoleArn: {},
                      S3BucketArn: {},
                      ManifestObjectVersionId: {}
                    }
                  }
                }
              }
            }
          },
          S41: {
            type: 'structure',
            members: {
              Destination: {
                type: 'structure',
                members: {
                  S3: {
                    type: 'structure',
                    required: ['S3BucketArn', 'BucketAccessRoleArn'],
                    members: {
                      Subdirectory: {},
                      S3BucketArn: {},
                      BucketAccessRoleArn: {}
                    }
                  }
                }
              },
              OutputType: {},
              ReportLevel: {},
              ObjectVersionIds: {},
              Overrides: {
                type: 'structure',
                members: {
                  Transferred: {
                    shape: 'S48'
                  },
                  Verified: {
                    shape: 'S48'
                  },
                  Deleted: {
                    shape: 'S48'
                  },
                  Skipped: {
                    shape: 'S48'
                  }
                }
              }
            }
          },
          S48: {
            type: 'structure',
            members: {
              ReportLevel: {}
            }
          },
          S4o: {
            type: 'structure',
            members: {
              Version: {}
            }
          },
          S65: {
            type: 'list',
            member: {}
          },
          S6f: {
            type: 'structure',
            members: {
              IopsRead: {
                type: 'double'
              },
              IopsWrite: {
                type: 'double'
              },
              IopsOther: {
                type: 'double'
              },
              IopsTotal: {
                type: 'double'
              },
              ThroughputRead: {
                type: 'double'
              },
              ThroughputWrite: {
                type: 'double'
              },
              ThroughputOther: {
                type: 'double'
              },
              ThroughputTotal: {
                type: 'double'
              },
              LatencyRead: {
                type: 'double'
              },
              LatencyWrite: {
                type: 'double'
              },
              LatencyOther: {
                type: 'double'
              }
            }
          },
          S6g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StorageType: {},
                StorageConfiguration: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                EstimatedMonthlyStorageCost: {}
              }
            }
          },
          S7n: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=385956450df1467cd9804ed9001ff59afd989dd1.js.map