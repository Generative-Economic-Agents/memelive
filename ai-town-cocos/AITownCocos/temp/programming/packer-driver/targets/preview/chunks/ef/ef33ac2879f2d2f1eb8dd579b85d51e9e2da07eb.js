System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2009-03-31',
          endpointPrefix: 'elasticmapreduce',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Amazon EMR',
          serviceFullName: 'Amazon EMR',
          serviceId: 'EMR',
          signatureVersion: 'v4',
          targetPrefix: 'ElasticMapReduce',
          uid: 'elasticmapreduce-2009-03-31'
        },
        operations: {
          AddInstanceFleet: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'InstanceFleet'],
              members: {
                ClusterId: {},
                InstanceFleet: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ClusterId: {},
                InstanceFleetId: {},
                ClusterArn: {}
              }
            }
          },
          AddInstanceGroups: {
            input: {
              type: 'structure',
              required: ['InstanceGroups', 'JobFlowId'],
              members: {
                InstanceGroups: {
                  shape: 'S11'
                },
                JobFlowId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobFlowId: {},
                InstanceGroupIds: {
                  type: 'list',
                  member: {}
                },
                ClusterArn: {}
              }
            }
          },
          AddJobFlowSteps: {
            input: {
              type: 'structure',
              required: ['JobFlowId', 'Steps'],
              members: {
                JobFlowId: {},
                Steps: {
                  shape: 'S1m'
                },
                ExecutionRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StepIds: {
                  shape: 'S1v'
                }
              }
            }
          },
          AddTags: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'Tags'],
              members: {
                ResourceId: {},
                Tags: {
                  shape: 'S1y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelSteps: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'StepIds'],
              members: {
                ClusterId: {},
                StepIds: {
                  shape: 'S1v'
                },
                StepCancellationOption: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CancelStepsInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StepId: {},
                      Status: {},
                      Reason: {}
                    }
                  }
                }
              }
            }
          },
          CreateSecurityConfiguration: {
            input: {
              type: 'structure',
              required: ['Name', 'SecurityConfiguration'],
              members: {
                Name: {},
                SecurityConfiguration: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Name', 'CreationDateTime'],
              members: {
                Name: {},
                CreationDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateStudio: {
            input: {
              type: 'structure',
              required: ['Name', 'AuthMode', 'VpcId', 'SubnetIds', 'ServiceRole', 'WorkspaceSecurityGroupId', 'EngineSecurityGroupId', 'DefaultS3Location'],
              members: {
                Name: {},
                Description: {},
                AuthMode: {},
                VpcId: {},
                SubnetIds: {
                  shape: 'S2d'
                },
                ServiceRole: {},
                UserRole: {},
                WorkspaceSecurityGroupId: {},
                EngineSecurityGroupId: {},
                DefaultS3Location: {},
                IdpAuthUrl: {},
                IdpRelayStateParameterName: {},
                Tags: {
                  shape: 'S1y'
                },
                TrustedIdentityPropagationEnabled: {
                  type: 'boolean'
                },
                IdcUserAssignment: {},
                IdcInstanceArn: {},
                EncryptionKeyArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StudioId: {},
                Url: {}
              }
            }
          },
          CreateStudioSessionMapping: {
            input: {
              type: 'structure',
              required: ['StudioId', 'IdentityType', 'SessionPolicyArn'],
              members: {
                StudioId: {},
                IdentityId: {},
                IdentityName: {},
                IdentityType: {},
                SessionPolicyArn: {}
              }
            }
          },
          DeleteSecurityConfiguration: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteStudio: {
            input: {
              type: 'structure',
              required: ['StudioId'],
              members: {
                StudioId: {}
              }
            }
          },
          DeleteStudioSessionMapping: {
            input: {
              type: 'structure',
              required: ['StudioId', 'IdentityType'],
              members: {
                StudioId: {},
                IdentityId: {},
                IdentityName: {},
                IdentityType: {}
              }
            }
          },
          DescribeCluster: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Name: {},
                    Status: {
                      shape: 'S2q'
                    },
                    Ec2InstanceAttributes: {
                      type: 'structure',
                      members: {
                        Ec2KeyName: {},
                        Ec2SubnetId: {},
                        RequestedEc2SubnetIds: {
                          shape: 'S2z'
                        },
                        Ec2AvailabilityZone: {},
                        RequestedEc2AvailabilityZones: {
                          shape: 'S2z'
                        },
                        IamInstanceProfile: {},
                        EmrManagedMasterSecurityGroup: {},
                        EmrManagedSlaveSecurityGroup: {},
                        ServiceAccessSecurityGroup: {},
                        AdditionalMasterSecurityGroups: {
                          shape: 'S30'
                        },
                        AdditionalSlaveSecurityGroups: {
                          shape: 'S30'
                        }
                      }
                    },
                    InstanceCollectionType: {},
                    LogUri: {},
                    LogEncryptionKmsKeyId: {},
                    RequestedAmiVersion: {},
                    RunningAmiVersion: {},
                    ReleaseLabel: {},
                    AutoTerminate: {
                      type: 'boolean'
                    },
                    TerminationProtected: {
                      type: 'boolean'
                    },
                    UnhealthyNodeReplacement: {
                      type: 'boolean'
                    },
                    VisibleToAllUsers: {
                      type: 'boolean'
                    },
                    Applications: {
                      shape: 'S33'
                    },
                    Tags: {
                      shape: 'S1y'
                    },
                    ServiceRole: {},
                    NormalizedInstanceHours: {
                      type: 'integer'
                    },
                    MasterPublicDnsName: {},
                    Configurations: {
                      shape: 'Si'
                    },
                    SecurityConfiguration: {},
                    AutoScalingRole: {},
                    ScaleDownBehavior: {},
                    CustomAmiId: {},
                    EbsRootVolumeSize: {
                      type: 'integer'
                    },
                    RepoUpgradeOnBoot: {},
                    KerberosAttributes: {
                      shape: 'S37'
                    },
                    ClusterArn: {},
                    OutpostArn: {},
                    StepConcurrencyLevel: {
                      type: 'integer'
                    },
                    PlacementGroups: {
                      shape: 'S39'
                    },
                    OSReleaseLabel: {},
                    EbsRootVolumeIops: {
                      type: 'integer'
                    },
                    EbsRootVolumeThroughput: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          DescribeJobFlows: {
            input: {
              type: 'structure',
              members: {
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                JobFlowIds: {
                  shape: 'S1t'
                },
                JobFlowStates: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobFlows: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['JobFlowId', 'Name', 'ExecutionStatusDetail', 'Instances'],
                    members: {
                      JobFlowId: {},
                      Name: {},
                      LogUri: {},
                      LogEncryptionKmsKeyId: {},
                      AmiVersion: {},
                      ExecutionStatusDetail: {
                        type: 'structure',
                        required: ['State', 'CreationDateTime'],
                        members: {
                          State: {},
                          CreationDateTime: {
                            type: 'timestamp'
                          },
                          StartDateTime: {
                            type: 'timestamp'
                          },
                          ReadyDateTime: {
                            type: 'timestamp'
                          },
                          EndDateTime: {
                            type: 'timestamp'
                          },
                          LastStateChangeReason: {}
                        }
                      },
                      Instances: {
                        type: 'structure',
                        required: ['MasterInstanceType', 'SlaveInstanceType', 'InstanceCount'],
                        members: {
                          MasterInstanceType: {},
                          MasterPublicDnsName: {},
                          MasterInstanceId: {},
                          SlaveInstanceType: {},
                          InstanceCount: {
                            type: 'integer'
                          },
                          InstanceGroups: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['Market', 'InstanceRole', 'InstanceType', 'InstanceRequestCount', 'InstanceRunningCount', 'State', 'CreationDateTime'],
                              members: {
                                InstanceGroupId: {},
                                Name: {},
                                Market: {},
                                InstanceRole: {},
                                BidPrice: {},
                                InstanceType: {},
                                InstanceRequestCount: {
                                  type: 'integer'
                                },
                                InstanceRunningCount: {
                                  type: 'integer'
                                },
                                State: {},
                                LastStateChangeReason: {},
                                CreationDateTime: {
                                  type: 'timestamp'
                                },
                                StartDateTime: {
                                  type: 'timestamp'
                                },
                                ReadyDateTime: {
                                  type: 'timestamp'
                                },
                                EndDateTime: {
                                  type: 'timestamp'
                                },
                                CustomAmiId: {}
                              }
                            }
                          },
                          NormalizedInstanceHours: {
                            type: 'integer'
                          },
                          Ec2KeyName: {},
                          Ec2SubnetId: {},
                          Placement: {
                            shape: 'S3n'
                          },
                          KeepJobFlowAliveWhenNoSteps: {
                            type: 'boolean'
                          },
                          TerminationProtected: {
                            type: 'boolean'
                          },
                          UnhealthyNodeReplacement: {
                            type: 'boolean'
                          },
                          HadoopVersion: {}
                        }
                      },
                      Steps: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['StepConfig', 'ExecutionStatusDetail'],
                          members: {
                            StepConfig: {
                              shape: 'S1n'
                            },
                            ExecutionStatusDetail: {
                              type: 'structure',
                              required: ['State', 'CreationDateTime'],
                              members: {
                                State: {},
                                CreationDateTime: {
                                  type: 'timestamp'
                                },
                                StartDateTime: {
                                  type: 'timestamp'
                                },
                                EndDateTime: {
                                  type: 'timestamp'
                                },
                                LastStateChangeReason: {}
                              }
                            }
                          }
                        }
                      },
                      BootstrapActions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            BootstrapActionConfig: {
                              shape: 'S3u'
                            }
                          }
                        }
                      },
                      SupportedProducts: {
                        shape: 'S3w'
                      },
                      VisibleToAllUsers: {
                        type: 'boolean'
                      },
                      JobFlowRole: {},
                      ServiceRole: {},
                      AutoScalingRole: {},
                      ScaleDownBehavior: {}
                    }
                  }
                }
              }
            },
            deprecated: true
          },
          DescribeNotebookExecution: {
            input: {
              type: 'structure',
              required: ['NotebookExecutionId'],
              members: {
                NotebookExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookExecution: {
                  type: 'structure',
                  members: {
                    NotebookExecutionId: {},
                    EditorId: {},
                    ExecutionEngine: {
                      shape: 'S40'
                    },
                    NotebookExecutionName: {},
                    NotebookParams: {},
                    Status: {},
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    },
                    Arn: {},
                    OutputNotebookURI: {},
                    LastStateChangeReason: {},
                    NotebookInstanceSecurityGroupId: {},
                    Tags: {
                      shape: 'S1y'
                    },
                    NotebookS3Location: {
                      shape: 'S44'
                    },
                    OutputNotebookS3Location: {
                      type: 'structure',
                      members: {
                        Bucket: {},
                        Key: {}
                      }
                    },
                    OutputNotebookFormat: {},
                    EnvironmentVariables: {
                      shape: 'S48'
                    }
                  }
                }
              }
            }
          },
          DescribeReleaseLabel: {
            input: {
              type: 'structure',
              members: {
                ReleaseLabel: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReleaseLabel: {},
                Applications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Version: {}
                    }
                  }
                },
                NextToken: {},
                AvailableOSReleases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Label: {}
                    }
                  }
                }
              }
            }
          },
          DescribeSecurityConfiguration: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                SecurityConfiguration: {},
                CreationDateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeStep: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'StepId'],
              members: {
                ClusterId: {},
                StepId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Step: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Name: {},
                    Config: {
                      shape: 'S4l'
                    },
                    ActionOnFailure: {},
                    Status: {
                      shape: 'S4m'
                    },
                    ExecutionRoleArn: {}
                  }
                }
              }
            }
          },
          DescribeStudio: {
            input: {
              type: 'structure',
              required: ['StudioId'],
              members: {
                StudioId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Studio: {
                  type: 'structure',
                  members: {
                    StudioId: {},
                    StudioArn: {},
                    Name: {},
                    Description: {},
                    AuthMode: {},
                    VpcId: {},
                    SubnetIds: {
                      shape: 'S2d'
                    },
                    ServiceRole: {},
                    UserRole: {},
                    WorkspaceSecurityGroupId: {},
                    EngineSecurityGroupId: {},
                    Url: {},
                    CreationTime: {
                      type: 'timestamp'
                    },
                    DefaultS3Location: {},
                    IdpAuthUrl: {},
                    IdpRelayStateParameterName: {},
                    Tags: {
                      shape: 'S1y'
                    },
                    IdcInstanceArn: {},
                    TrustedIdentityPropagationEnabled: {
                      type: 'boolean'
                    },
                    IdcUserAssignment: {},
                    EncryptionKeyArn: {}
                  }
                }
              }
            }
          },
          GetAutoTerminationPolicy: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AutoTerminationPolicy: {
                  shape: 'S4x'
                }
              }
            }
          },
          GetBlockPublicAccessConfiguration: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['BlockPublicAccessConfiguration', 'BlockPublicAccessConfigurationMetadata'],
              members: {
                BlockPublicAccessConfiguration: {
                  shape: 'S51'
                },
                BlockPublicAccessConfigurationMetadata: {
                  type: 'structure',
                  required: ['CreationDateTime', 'CreatedByArn'],
                  members: {
                    CreationDateTime: {
                      type: 'timestamp'
                    },
                    CreatedByArn: {}
                  }
                }
              }
            }
          },
          GetClusterSessionCredentials: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                ExecutionRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Credentials: {
                  type: 'structure',
                  members: {
                    UsernamePassword: {
                      type: 'structure',
                      members: {
                        Username: {},
                        Password: {}
                      },
                      sensitive: true
                    }
                  },
                  union: true
                },
                ExpiresAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetManagedScalingPolicy: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ManagedScalingPolicy: {
                  shape: 'S5c'
                }
              }
            }
          },
          GetStudioSessionMapping: {
            input: {
              type: 'structure',
              required: ['StudioId', 'IdentityType'],
              members: {
                StudioId: {},
                IdentityId: {},
                IdentityName: {},
                IdentityType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SessionMapping: {
                  type: 'structure',
                  members: {
                    StudioId: {},
                    IdentityId: {},
                    IdentityName: {},
                    IdentityType: {},
                    SessionPolicyArn: {},
                    CreationTime: {
                      type: 'timestamp'
                    },
                    LastModifiedTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          ListBootstrapActions: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BootstrapActions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      ScriptPath: {},
                      Args: {
                        shape: 'S30'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListClusters: {
            input: {
              type: 'structure',
              members: {
                CreatedAfter: {
                  type: 'timestamp'
                },
                CreatedBefore: {
                  type: 'timestamp'
                },
                ClusterStates: {
                  type: 'list',
                  member: {}
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Clusters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Status: {
                        shape: 'S2q'
                      },
                      NormalizedInstanceHours: {
                        type: 'integer'
                      },
                      ClusterArn: {},
                      OutpostArn: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListInstanceFleets: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceFleets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Status: {
                        type: 'structure',
                        members: {
                          State: {},
                          StateChangeReason: {
                            type: 'structure',
                            members: {
                              Code: {},
                              Message: {}
                            }
                          },
                          Timeline: {
                            type: 'structure',
                            members: {
                              CreationDateTime: {
                                type: 'timestamp'
                              },
                              ReadyDateTime: {
                                type: 'timestamp'
                              },
                              EndDateTime: {
                                type: 'timestamp'
                              }
                            }
                          }
                        }
                      },
                      InstanceFleetType: {},
                      TargetOnDemandCapacity: {
                        type: 'integer'
                      },
                      TargetSpotCapacity: {
                        type: 'integer'
                      },
                      ProvisionedOnDemandCapacity: {
                        type: 'integer'
                      },
                      ProvisionedSpotCapacity: {
                        type: 'integer'
                      },
                      InstanceTypeSpecifications: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            InstanceType: {},
                            WeightedCapacity: {
                              type: 'integer'
                            },
                            BidPrice: {},
                            BidPriceAsPercentageOfOnDemandPrice: {
                              type: 'double'
                            },
                            Configurations: {
                              shape: 'Si'
                            },
                            EbsBlockDevices: {
                              shape: 'S63'
                            },
                            EbsOptimized: {
                              type: 'boolean'
                            },
                            CustomAmiId: {}
                          }
                        }
                      },
                      LaunchSpecifications: {
                        shape: 'Sl'
                      },
                      ResizeSpecifications: {
                        shape: 'Su'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListInstanceGroups: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Market: {},
                      InstanceGroupType: {},
                      BidPrice: {},
                      InstanceType: {},
                      RequestedInstanceCount: {
                        type: 'integer'
                      },
                      RunningInstanceCount: {
                        type: 'integer'
                      },
                      Status: {
                        type: 'structure',
                        members: {
                          State: {},
                          StateChangeReason: {
                            type: 'structure',
                            members: {
                              Code: {},
                              Message: {}
                            }
                          },
                          Timeline: {
                            type: 'structure',
                            members: {
                              CreationDateTime: {
                                type: 'timestamp'
                              },
                              ReadyDateTime: {
                                type: 'timestamp'
                              },
                              EndDateTime: {
                                type: 'timestamp'
                              }
                            }
                          }
                        }
                      },
                      Configurations: {
                        shape: 'Si'
                      },
                      ConfigurationsVersion: {
                        type: 'long'
                      },
                      LastSuccessfullyAppliedConfigurations: {
                        shape: 'Si'
                      },
                      LastSuccessfullyAppliedConfigurationsVersion: {
                        type: 'long'
                      },
                      EbsBlockDevices: {
                        shape: 'S63'
                      },
                      EbsOptimized: {
                        type: 'boolean'
                      },
                      ShrinkPolicy: {
                        shape: 'S6f'
                      },
                      AutoScalingPolicy: {
                        shape: 'S6j'
                      },
                      CustomAmiId: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListInstances: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                InstanceGroupId: {},
                InstanceGroupTypes: {
                  type: 'list',
                  member: {}
                },
                InstanceFleetId: {},
                InstanceFleetType: {},
                InstanceStates: {
                  type: 'list',
                  member: {}
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Instances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Ec2InstanceId: {},
                      PublicDnsName: {},
                      PublicIpAddress: {},
                      PrivateDnsName: {},
                      PrivateIpAddress: {},
                      Status: {
                        type: 'structure',
                        members: {
                          State: {},
                          StateChangeReason: {
                            type: 'structure',
                            members: {
                              Code: {},
                              Message: {}
                            }
                          },
                          Timeline: {
                            type: 'structure',
                            members: {
                              CreationDateTime: {
                                type: 'timestamp'
                              },
                              ReadyDateTime: {
                                type: 'timestamp'
                              },
                              EndDateTime: {
                                type: 'timestamp'
                              }
                            }
                          }
                        }
                      },
                      InstanceGroupId: {},
                      InstanceFleetId: {},
                      Market: {},
                      InstanceType: {},
                      EbsVolumes: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Device: {},
                            VolumeId: {}
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
          ListNotebookExecutions: {
            input: {
              type: 'structure',
              members: {
                EditorId: {},
                Status: {},
                From: {
                  type: 'timestamp'
                },
                To: {
                  type: 'timestamp'
                },
                Marker: {},
                ExecutionEngineId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      NotebookExecutionId: {},
                      EditorId: {},
                      NotebookExecutionName: {},
                      Status: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      NotebookS3Location: {
                        shape: 'S44'
                      },
                      ExecutionEngineId: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListReleaseLabels: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'structure',
                  members: {
                    Prefix: {},
                    Application: {}
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReleaseLabels: {
                  shape: 'S30'
                },
                NextToken: {}
              }
            }
          },
          ListSecurityConfigurations: {
            input: {
              type: 'structure',
              members: {
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SecurityConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      CreationDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListSteps: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                StepStates: {
                  type: 'list',
                  member: {}
                },
                StepIds: {
                  shape: 'S1t'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Steps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Config: {
                        shape: 'S4l'
                      },
                      ActionOnFailure: {},
                      Status: {
                        shape: 'S4m'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListStudioSessionMappings: {
            input: {
              type: 'structure',
              members: {
                StudioId: {},
                IdentityType: {},
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SessionMappings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StudioId: {},
                      IdentityId: {},
                      IdentityName: {},
                      IdentityType: {},
                      SessionPolicyArn: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListStudios: {
            input: {
              type: 'structure',
              members: {
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Studios: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StudioId: {},
                      Name: {},
                      VpcId: {},
                      Description: {},
                      Url: {},
                      AuthMode: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ListSupportedInstanceTypes: {
            input: {
              type: 'structure',
              required: ['ReleaseLabel'],
              members: {
                ReleaseLabel: {},
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SupportedInstanceTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      MemoryGB: {
                        type: 'float'
                      },
                      StorageGB: {
                        type: 'integer'
                      },
                      VCPU: {
                        type: 'integer'
                      },
                      Is64BitsOnly: {
                        type: 'boolean'
                      },
                      InstanceFamilyId: {},
                      EbsOptimizedAvailable: {
                        type: 'boolean'
                      },
                      EbsOptimizedByDefault: {
                        type: 'boolean'
                      },
                      NumberOfDisks: {
                        type: 'integer'
                      },
                      EbsStorageOnly: {
                        type: 'boolean'
                      },
                      Architecture: {}
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          ModifyCluster: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                StepConcurrencyLevel: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StepConcurrencyLevel: {
                  type: 'integer'
                }
              }
            }
          },
          ModifyInstanceFleet: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'InstanceFleet'],
              members: {
                ClusterId: {},
                InstanceFleet: {
                  type: 'structure',
                  required: ['InstanceFleetId'],
                  members: {
                    InstanceFleetId: {},
                    TargetOnDemandCapacity: {
                      type: 'integer'
                    },
                    TargetSpotCapacity: {
                      type: 'integer'
                    },
                    ResizeSpecifications: {
                      shape: 'Su'
                    }
                  }
                }
              }
            }
          },
          ModifyInstanceGroups: {
            input: {
              type: 'structure',
              members: {
                ClusterId: {},
                InstanceGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['InstanceGroupId'],
                    members: {
                      InstanceGroupId: {},
                      InstanceCount: {
                        type: 'integer'
                      },
                      EC2InstanceIdsToTerminate: {
                        type: 'list',
                        member: {}
                      },
                      ShrinkPolicy: {
                        shape: 'S6f'
                      },
                      ReconfigurationType: {},
                      Configurations: {
                        shape: 'Si'
                      }
                    }
                  }
                }
              }
            }
          },
          PutAutoScalingPolicy: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'InstanceGroupId', 'AutoScalingPolicy'],
              members: {
                ClusterId: {},
                InstanceGroupId: {},
                AutoScalingPolicy: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ClusterId: {},
                InstanceGroupId: {},
                AutoScalingPolicy: {
                  shape: 'S6j'
                },
                ClusterArn: {}
              }
            }
          },
          PutAutoTerminationPolicy: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                AutoTerminationPolicy: {
                  shape: 'S4x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutBlockPublicAccessConfiguration: {
            input: {
              type: 'structure',
              required: ['BlockPublicAccessConfiguration'],
              members: {
                BlockPublicAccessConfiguration: {
                  shape: 'S51'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutManagedScalingPolicy: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'ManagedScalingPolicy'],
              members: {
                ClusterId: {},
                ManagedScalingPolicy: {
                  shape: 'S5c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RemoveAutoScalingPolicy: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'InstanceGroupId'],
              members: {
                ClusterId: {},
                InstanceGroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RemoveAutoTerminationPolicy: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RemoveManagedScalingPolicy: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RemoveTags: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'TagKeys'],
              members: {
                ResourceId: {},
                TagKeys: {
                  shape: 'S30'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RunJobFlow: {
            input: {
              type: 'structure',
              required: ['Name', 'Instances'],
              members: {
                Name: {},
                LogUri: {},
                LogEncryptionKmsKeyId: {},
                AdditionalInfo: {},
                AmiVersion: {},
                ReleaseLabel: {},
                Instances: {
                  type: 'structure',
                  members: {
                    MasterInstanceType: {},
                    SlaveInstanceType: {},
                    InstanceCount: {
                      type: 'integer'
                    },
                    InstanceGroups: {
                      shape: 'S11'
                    },
                    InstanceFleets: {
                      type: 'list',
                      member: {
                        shape: 'S3'
                      }
                    },
                    Ec2KeyName: {},
                    Placement: {
                      shape: 'S3n'
                    },
                    KeepJobFlowAliveWhenNoSteps: {
                      type: 'boolean'
                    },
                    TerminationProtected: {
                      type: 'boolean'
                    },
                    UnhealthyNodeReplacement: {
                      type: 'boolean'
                    },
                    HadoopVersion: {},
                    Ec2SubnetId: {},
                    Ec2SubnetIds: {
                      shape: 'S2z'
                    },
                    EmrManagedMasterSecurityGroup: {},
                    EmrManagedSlaveSecurityGroup: {},
                    ServiceAccessSecurityGroup: {},
                    AdditionalMasterSecurityGroups: {
                      shape: 'S8m'
                    },
                    AdditionalSlaveSecurityGroups: {
                      shape: 'S8m'
                    }
                  }
                },
                Steps: {
                  shape: 'S1m'
                },
                BootstrapActions: {
                  type: 'list',
                  member: {
                    shape: 'S3u'
                  }
                },
                SupportedProducts: {
                  shape: 'S3w'
                },
                NewSupportedProducts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Args: {
                        shape: 'S1t'
                      }
                    }
                  }
                },
                Applications: {
                  shape: 'S33'
                },
                Configurations: {
                  shape: 'Si'
                },
                VisibleToAllUsers: {
                  type: 'boolean'
                },
                JobFlowRole: {},
                ServiceRole: {},
                Tags: {
                  shape: 'S1y'
                },
                SecurityConfiguration: {},
                AutoScalingRole: {},
                ScaleDownBehavior: {},
                CustomAmiId: {},
                EbsRootVolumeSize: {
                  type: 'integer'
                },
                RepoUpgradeOnBoot: {},
                KerberosAttributes: {
                  shape: 'S37'
                },
                StepConcurrencyLevel: {
                  type: 'integer'
                },
                ManagedScalingPolicy: {
                  shape: 'S5c'
                },
                PlacementGroupConfigs: {
                  shape: 'S39'
                },
                AutoTerminationPolicy: {
                  shape: 'S4x'
                },
                OSReleaseLabel: {},
                EbsRootVolumeIops: {
                  type: 'integer'
                },
                EbsRootVolumeThroughput: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobFlowId: {},
                ClusterArn: {}
              }
            }
          },
          SetKeepJobFlowAliveWhenNoSteps: {
            input: {
              type: 'structure',
              required: ['JobFlowIds', 'KeepJobFlowAliveWhenNoSteps'],
              members: {
                JobFlowIds: {
                  shape: 'S1t'
                },
                KeepJobFlowAliveWhenNoSteps: {
                  type: 'boolean'
                }
              }
            }
          },
          SetTerminationProtection: {
            input: {
              type: 'structure',
              required: ['JobFlowIds', 'TerminationProtected'],
              members: {
                JobFlowIds: {
                  shape: 'S1t'
                },
                TerminationProtected: {
                  type: 'boolean'
                }
              }
            }
          },
          SetUnhealthyNodeReplacement: {
            input: {
              type: 'structure',
              required: ['JobFlowIds', 'UnhealthyNodeReplacement'],
              members: {
                JobFlowIds: {
                  shape: 'S1t'
                },
                UnhealthyNodeReplacement: {
                  type: 'boolean'
                }
              }
            }
          },
          SetVisibleToAllUsers: {
            input: {
              type: 'structure',
              required: ['JobFlowIds', 'VisibleToAllUsers'],
              members: {
                JobFlowIds: {
                  shape: 'S1t'
                },
                VisibleToAllUsers: {
                  type: 'boolean'
                }
              }
            }
          },
          StartNotebookExecution: {
            input: {
              type: 'structure',
              required: ['ExecutionEngine', 'ServiceRole'],
              members: {
                EditorId: {},
                RelativePath: {},
                NotebookExecutionName: {},
                NotebookParams: {},
                ExecutionEngine: {
                  shape: 'S40'
                },
                ServiceRole: {},
                NotebookInstanceSecurityGroupId: {},
                Tags: {
                  shape: 'S1y'
                },
                NotebookS3Location: {
                  type: 'structure',
                  members: {
                    Bucket: {},
                    Key: {}
                  }
                },
                OutputNotebookS3Location: {
                  type: 'structure',
                  members: {
                    Bucket: {},
                    Key: {}
                  }
                },
                OutputNotebookFormat: {},
                EnvironmentVariables: {
                  shape: 'S48'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookExecutionId: {}
              }
            }
          },
          StopNotebookExecution: {
            input: {
              type: 'structure',
              required: ['NotebookExecutionId'],
              members: {
                NotebookExecutionId: {}
              }
            }
          },
          TerminateJobFlows: {
            input: {
              type: 'structure',
              required: ['JobFlowIds'],
              members: {
                JobFlowIds: {
                  shape: 'S1t'
                }
              }
            }
          },
          UpdateStudio: {
            input: {
              type: 'structure',
              required: ['StudioId'],
              members: {
                StudioId: {},
                Name: {},
                Description: {},
                SubnetIds: {
                  shape: 'S2d'
                },
                DefaultS3Location: {},
                EncryptionKeyArn: {}
              }
            }
          },
          UpdateStudioSessionMapping: {
            input: {
              type: 'structure',
              required: ['StudioId', 'IdentityType', 'SessionPolicyArn'],
              members: {
                StudioId: {},
                IdentityId: {},
                IdentityName: {},
                IdentityType: {},
                SessionPolicyArn: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            required: ['InstanceFleetType'],
            members: {
              Name: {},
              InstanceFleetType: {},
              TargetOnDemandCapacity: {
                type: 'integer'
              },
              TargetSpotCapacity: {
                type: 'integer'
              },
              InstanceTypeConfigs: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['InstanceType'],
                  members: {
                    InstanceType: {},
                    WeightedCapacity: {
                      type: 'integer'
                    },
                    BidPrice: {},
                    BidPriceAsPercentageOfOnDemandPrice: {
                      type: 'double'
                    },
                    EbsConfiguration: {
                      shape: 'Sa'
                    },
                    Configurations: {
                      shape: 'Si'
                    },
                    CustomAmiId: {}
                  }
                }
              },
              LaunchSpecifications: {
                shape: 'Sl'
              },
              ResizeSpecifications: {
                shape: 'Su'
              }
            }
          },
          Sa: {
            type: 'structure',
            members: {
              EbsBlockDeviceConfigs: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['VolumeSpecification'],
                  members: {
                    VolumeSpecification: {
                      shape: 'Sd'
                    },
                    VolumesPerInstance: {
                      type: 'integer'
                    }
                  }
                }
              },
              EbsOptimized: {
                type: 'boolean'
              }
            }
          },
          Sd: {
            type: 'structure',
            required: ['VolumeType', 'SizeInGB'],
            members: {
              VolumeType: {},
              Iops: {
                type: 'integer'
              },
              SizeInGB: {
                type: 'integer'
              },
              Throughput: {
                type: 'integer'
              }
            }
          },
          Si: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Classification: {},
                Configurations: {
                  shape: 'Si'
                },
                Properties: {
                  shape: 'Sk'
                }
              }
            }
          },
          Sk: {
            type: 'map',
            key: {},
            value: {}
          },
          Sl: {
            type: 'structure',
            members: {
              SpotSpecification: {
                type: 'structure',
                required: ['TimeoutDurationMinutes', 'TimeoutAction'],
                members: {
                  TimeoutDurationMinutes: {
                    type: 'integer'
                  },
                  TimeoutAction: {},
                  BlockDurationMinutes: {
                    type: 'integer'
                  },
                  AllocationStrategy: {}
                }
              },
              OnDemandSpecification: {
                type: 'structure',
                required: ['AllocationStrategy'],
                members: {
                  AllocationStrategy: {},
                  CapacityReservationOptions: {
                    type: 'structure',
                    members: {
                      UsageStrategy: {},
                      CapacityReservationPreference: {},
                      CapacityReservationResourceGroupArn: {}
                    }
                  }
                }
              }
            }
          },
          Su: {
            type: 'structure',
            members: {
              SpotResizeSpecification: {
                type: 'structure',
                required: ['TimeoutDurationMinutes'],
                members: {
                  TimeoutDurationMinutes: {
                    type: 'integer'
                  }
                }
              },
              OnDemandResizeSpecification: {
                type: 'structure',
                required: ['TimeoutDurationMinutes'],
                members: {
                  TimeoutDurationMinutes: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S11: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['InstanceRole', 'InstanceType', 'InstanceCount'],
              members: {
                Name: {},
                Market: {},
                InstanceRole: {},
                BidPrice: {},
                InstanceType: {},
                InstanceCount: {
                  type: 'integer'
                },
                Configurations: {
                  shape: 'Si'
                },
                EbsConfiguration: {
                  shape: 'Sa'
                },
                AutoScalingPolicy: {
                  shape: 'S15'
                },
                CustomAmiId: {}
              }
            }
          },
          S15: {
            type: 'structure',
            required: ['Constraints', 'Rules'],
            members: {
              Constraints: {
                shape: 'S16'
              },
              Rules: {
                shape: 'S17'
              }
            }
          },
          S16: {
            type: 'structure',
            required: ['MinCapacity', 'MaxCapacity'],
            members: {
              MinCapacity: {
                type: 'integer'
              },
              MaxCapacity: {
                type: 'integer'
              }
            }
          },
          S17: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Action', 'Trigger'],
              members: {
                Name: {},
                Description: {},
                Action: {
                  type: 'structure',
                  required: ['SimpleScalingPolicyConfiguration'],
                  members: {
                    Market: {},
                    SimpleScalingPolicyConfiguration: {
                      type: 'structure',
                      required: ['ScalingAdjustment'],
                      members: {
                        AdjustmentType: {},
                        ScalingAdjustment: {
                          type: 'integer'
                        },
                        CoolDown: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                Trigger: {
                  type: 'structure',
                  required: ['CloudWatchAlarmDefinition'],
                  members: {
                    CloudWatchAlarmDefinition: {
                      type: 'structure',
                      required: ['ComparisonOperator', 'MetricName', 'Period', 'Threshold'],
                      members: {
                        ComparisonOperator: {},
                        EvaluationPeriods: {
                          type: 'integer'
                        },
                        MetricName: {},
                        Namespace: {},
                        Period: {
                          type: 'integer'
                        },
                        Statistic: {},
                        Threshold: {
                          type: 'double'
                        },
                        Unit: {},
                        Dimensions: {
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
                  }
                }
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              shape: 'S1n'
            }
          },
          S1n: {
            type: 'structure',
            required: ['Name', 'HadoopJarStep'],
            members: {
              Name: {},
              ActionOnFailure: {},
              HadoopJarStep: {
                type: 'structure',
                required: ['Jar'],
                members: {
                  Properties: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Key: {},
                        Value: {}
                      }
                    }
                  },
                  Jar: {},
                  MainClass: {},
                  Args: {
                    shape: 'S1t'
                  }
                }
              }
            }
          },
          S1t: {
            type: 'list',
            member: {}
          },
          S1v: {
            type: 'list',
            member: {}
          },
          S1y: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S2d: {
            type: 'list',
            member: {}
          },
          S2q: {
            type: 'structure',
            members: {
              State: {},
              StateChangeReason: {
                type: 'structure',
                members: {
                  Code: {},
                  Message: {}
                }
              },
              Timeline: {
                type: 'structure',
                members: {
                  CreationDateTime: {
                    type: 'timestamp'
                  },
                  ReadyDateTime: {
                    type: 'timestamp'
                  },
                  EndDateTime: {
                    type: 'timestamp'
                  }
                }
              },
              ErrorDetails: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ErrorCode: {},
                    ErrorData: {
                      type: 'list',
                      member: {
                        shape: 'Sk'
                      }
                    },
                    ErrorMessage: {}
                  }
                }
              }
            }
          },
          S2z: {
            type: 'list',
            member: {}
          },
          S30: {
            type: 'list',
            member: {}
          },
          S33: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Version: {},
                Args: {
                  shape: 'S30'
                },
                AdditionalInfo: {
                  shape: 'Sk'
                }
              }
            }
          },
          S37: {
            type: 'structure',
            required: ['Realm', 'KdcAdminPassword'],
            members: {
              Realm: {},
              KdcAdminPassword: {},
              CrossRealmTrustPrincipalPassword: {},
              ADDomainJoinUser: {},
              ADDomainJoinPassword: {}
            }
          },
          S39: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['InstanceRole'],
              members: {
                InstanceRole: {},
                PlacementStrategy: {}
              }
            }
          },
          S3n: {
            type: 'structure',
            members: {
              AvailabilityZone: {},
              AvailabilityZones: {
                shape: 'S2z'
              }
            }
          },
          S3u: {
            type: 'structure',
            required: ['Name', 'ScriptBootstrapAction'],
            members: {
              Name: {},
              ScriptBootstrapAction: {
                type: 'structure',
                required: ['Path'],
                members: {
                  Path: {},
                  Args: {
                    shape: 'S1t'
                  }
                }
              }
            }
          },
          S3w: {
            type: 'list',
            member: {}
          },
          S40: {
            type: 'structure',
            required: ['Id'],
            members: {
              Id: {},
              Type: {},
              MasterInstanceSecurityGroupId: {},
              ExecutionRoleArn: {}
            }
          },
          S44: {
            type: 'structure',
            members: {
              Bucket: {},
              Key: {}
            }
          },
          S48: {
            type: 'map',
            key: {},
            value: {}
          },
          S4l: {
            type: 'structure',
            members: {
              Jar: {},
              Properties: {
                shape: 'Sk'
              },
              MainClass: {},
              Args: {
                shape: 'S30'
              }
            }
          },
          S4m: {
            type: 'structure',
            members: {
              State: {},
              StateChangeReason: {
                type: 'structure',
                members: {
                  Code: {},
                  Message: {}
                }
              },
              FailureDetails: {
                type: 'structure',
                members: {
                  Reason: {},
                  Message: {},
                  LogFile: {}
                }
              },
              Timeline: {
                type: 'structure',
                members: {
                  CreationDateTime: {
                    type: 'timestamp'
                  },
                  StartDateTime: {
                    type: 'timestamp'
                  },
                  EndDateTime: {
                    type: 'timestamp'
                  }
                }
              }
            }
          },
          S4x: {
            type: 'structure',
            members: {
              IdleTimeout: {
                type: 'long'
              }
            }
          },
          S51: {
            type: 'structure',
            required: ['BlockPublicSecurityGroupRules'],
            members: {
              BlockPublicSecurityGroupRules: {
                type: 'boolean'
              },
              PermittedPublicSecurityGroupRuleRanges: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['MinRange'],
                  members: {
                    MinRange: {
                      type: 'integer'
                    },
                    MaxRange: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          S5c: {
            type: 'structure',
            members: {
              ComputeLimits: {
                type: 'structure',
                required: ['UnitType', 'MinimumCapacityUnits', 'MaximumCapacityUnits'],
                members: {
                  UnitType: {},
                  MinimumCapacityUnits: {
                    type: 'integer'
                  },
                  MaximumCapacityUnits: {
                    type: 'integer'
                  },
                  MaximumOnDemandCapacityUnits: {
                    type: 'integer'
                  },
                  MaximumCoreCapacityUnits: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S63: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                VolumeSpecification: {
                  shape: 'Sd'
                },
                Device: {}
              }
            }
          },
          S6f: {
            type: 'structure',
            members: {
              DecommissionTimeout: {
                type: 'integer'
              },
              InstanceResizePolicy: {
                type: 'structure',
                members: {
                  InstancesToTerminate: {
                    shape: 'S6h'
                  },
                  InstancesToProtect: {
                    shape: 'S6h'
                  },
                  InstanceTerminationTimeout: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S6h: {
            type: 'list',
            member: {}
          },
          S6j: {
            type: 'structure',
            members: {
              Status: {
                type: 'structure',
                members: {
                  State: {},
                  StateChangeReason: {
                    type: 'structure',
                    members: {
                      Code: {},
                      Message: {}
                    }
                  }
                }
              },
              Constraints: {
                shape: 'S16'
              },
              Rules: {
                shape: 'S17'
              }
            }
          },
          S8m: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ef33ac2879f2d2f1eb8dd579b85d51e9e2da07eb.js.map