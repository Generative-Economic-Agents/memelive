System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-02-18',
          endpointPrefix: 'opsworks',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS OpsWorks',
          serviceId: 'OpsWorks',
          signatureVersion: 'v4',
          targetPrefix: 'OpsWorks_20130218',
          uid: 'opsworks-2013-02-18'
        },
        operations: {
          AssignInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'LayerIds'],
              members: {
                InstanceId: {},
                LayerIds: {
                  shape: 'S3'
                }
              }
            }
          },
          AssignVolume: {
            input: {
              type: 'structure',
              required: ['VolumeId'],
              members: {
                VolumeId: {},
                InstanceId: {}
              }
            }
          },
          AssociateElasticIp: {
            input: {
              type: 'structure',
              required: ['ElasticIp'],
              members: {
                ElasticIp: {},
                InstanceId: {}
              }
            }
          },
          AttachElasticLoadBalancer: {
            input: {
              type: 'structure',
              required: ['ElasticLoadBalancerName', 'LayerId'],
              members: {
                ElasticLoadBalancerName: {},
                LayerId: {}
              }
            }
          },
          CloneStack: {
            input: {
              type: 'structure',
              required: ['SourceStackId', 'ServiceRoleArn'],
              members: {
                SourceStackId: {},
                Name: {},
                Region: {},
                VpcId: {},
                Attributes: {
                  shape: 'S8'
                },
                ServiceRoleArn: {},
                DefaultInstanceProfileArn: {},
                DefaultOs: {},
                HostnameTheme: {},
                DefaultAvailabilityZone: {},
                DefaultSubnetId: {},
                CustomJson: {},
                ConfigurationManager: {
                  shape: 'Sa'
                },
                ChefConfiguration: {
                  shape: 'Sb'
                },
                UseCustomCookbooks: {
                  type: 'boolean'
                },
                UseOpsworksSecurityGroups: {
                  type: 'boolean'
                },
                CustomCookbooksSource: {
                  shape: 'Sd'
                },
                DefaultSshKeyName: {},
                ClonePermissions: {
                  type: 'boolean'
                },
                CloneAppIds: {
                  shape: 'S3'
                },
                DefaultRootDeviceType: {},
                AgentVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StackId: {}
              }
            }
          },
          CreateApp: {
            input: {
              type: 'structure',
              required: ['StackId', 'Name', 'Type'],
              members: {
                StackId: {},
                Shortname: {},
                Name: {},
                Description: {},
                DataSources: {
                  shape: 'Si'
                },
                Type: {},
                AppSource: {
                  shape: 'Sd'
                },
                Domains: {
                  shape: 'S3'
                },
                EnableSsl: {
                  type: 'boolean'
                },
                SslConfiguration: {
                  shape: 'Sl'
                },
                Attributes: {
                  shape: 'Sm'
                },
                Environment: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppId: {}
              }
            }
          },
          CreateDeployment: {
            input: {
              type: 'structure',
              required: ['StackId', 'Command'],
              members: {
                StackId: {},
                AppId: {},
                InstanceIds: {
                  shape: 'S3'
                },
                LayerIds: {
                  shape: 'S3'
                },
                Command: {
                  shape: 'Ss'
                },
                Comment: {},
                CustomJson: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DeploymentId: {}
              }
            }
          },
          CreateInstance: {
            input: {
              type: 'structure',
              required: ['StackId', 'LayerIds', 'InstanceType'],
              members: {
                StackId: {},
                LayerIds: {
                  shape: 'S3'
                },
                InstanceType: {},
                AutoScalingType: {},
                Hostname: {},
                Os: {},
                AmiId: {},
                SshKeyName: {},
                AvailabilityZone: {},
                VirtualizationType: {},
                SubnetId: {},
                Architecture: {},
                RootDeviceType: {},
                BlockDeviceMappings: {
                  shape: 'Sz'
                },
                InstallUpdatesOnBoot: {
                  type: 'boolean'
                },
                EbsOptimized: {
                  type: 'boolean'
                },
                AgentVersion: {},
                Tenancy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceId: {}
              }
            }
          },
          CreateLayer: {
            input: {
              type: 'structure',
              required: ['StackId', 'Type', 'Name', 'Shortname'],
              members: {
                StackId: {},
                Type: {},
                Name: {},
                Shortname: {},
                Attributes: {
                  shape: 'S17'
                },
                CloudWatchLogsConfiguration: {
                  shape: 'S19'
                },
                CustomInstanceProfileArn: {},
                CustomJson: {},
                CustomSecurityGroupIds: {
                  shape: 'S3'
                },
                Packages: {
                  shape: 'S3'
                },
                VolumeConfigurations: {
                  shape: 'S1f'
                },
                EnableAutoHealing: {
                  type: 'boolean'
                },
                AutoAssignElasticIps: {
                  type: 'boolean'
                },
                AutoAssignPublicIps: {
                  type: 'boolean'
                },
                CustomRecipes: {
                  shape: 'S1h'
                },
                InstallUpdatesOnBoot: {
                  type: 'boolean'
                },
                UseEbsOptimizedInstances: {
                  type: 'boolean'
                },
                LifecycleEventConfiguration: {
                  shape: 'S1i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LayerId: {}
              }
            }
          },
          CreateStack: {
            input: {
              type: 'structure',
              required: ['Name', 'Region', 'ServiceRoleArn', 'DefaultInstanceProfileArn'],
              members: {
                Name: {},
                Region: {},
                VpcId: {},
                Attributes: {
                  shape: 'S8'
                },
                ServiceRoleArn: {},
                DefaultInstanceProfileArn: {},
                DefaultOs: {},
                HostnameTheme: {},
                DefaultAvailabilityZone: {},
                DefaultSubnetId: {},
                CustomJson: {},
                ConfigurationManager: {
                  shape: 'Sa'
                },
                ChefConfiguration: {
                  shape: 'Sb'
                },
                UseCustomCookbooks: {
                  type: 'boolean'
                },
                UseOpsworksSecurityGroups: {
                  type: 'boolean'
                },
                CustomCookbooksSource: {
                  shape: 'Sd'
                },
                DefaultSshKeyName: {},
                DefaultRootDeviceType: {},
                AgentVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StackId: {}
              }
            }
          },
          CreateUserProfile: {
            input: {
              type: 'structure',
              required: ['IamUserArn'],
              members: {
                IamUserArn: {},
                SshUsername: {},
                SshPublicKey: {},
                AllowSelfManagement: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IamUserArn: {}
              }
            }
          },
          DeleteApp: {
            input: {
              type: 'structure',
              required: ['AppId'],
              members: {
                AppId: {}
              }
            }
          },
          DeleteInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                DeleteElasticIp: {
                  type: 'boolean'
                },
                DeleteVolumes: {
                  type: 'boolean'
                }
              }
            }
          },
          DeleteLayer: {
            input: {
              type: 'structure',
              required: ['LayerId'],
              members: {
                LayerId: {}
              }
            }
          },
          DeleteStack: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                StackId: {}
              }
            }
          },
          DeleteUserProfile: {
            input: {
              type: 'structure',
              required: ['IamUserArn'],
              members: {
                IamUserArn: {}
              }
            }
          },
          DeregisterEcsCluster: {
            input: {
              type: 'structure',
              required: ['EcsClusterArn'],
              members: {
                EcsClusterArn: {}
              }
            }
          },
          DeregisterElasticIp: {
            input: {
              type: 'structure',
              required: ['ElasticIp'],
              members: {
                ElasticIp: {}
              }
            }
          },
          DeregisterInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {}
              }
            }
          },
          DeregisterRdsDbInstance: {
            input: {
              type: 'structure',
              required: ['RdsDbInstanceArn'],
              members: {
                RdsDbInstanceArn: {}
              }
            }
          },
          DeregisterVolume: {
            input: {
              type: 'structure',
              required: ['VolumeId'],
              members: {
                VolumeId: {}
              }
            }
          },
          DescribeAgentVersions: {
            input: {
              type: 'structure',
              members: {
                StackId: {},
                ConfigurationManager: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AgentVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Version: {},
                      ConfigurationManager: {
                        shape: 'Sa'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeApps: {
            input: {
              type: 'structure',
              members: {
                StackId: {},
                AppIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Apps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppId: {},
                      StackId: {},
                      Shortname: {},
                      Name: {},
                      Description: {},
                      DataSources: {
                        shape: 'Si'
                      },
                      Type: {},
                      AppSource: {
                        shape: 'Sd'
                      },
                      Domains: {
                        shape: 'S3'
                      },
                      EnableSsl: {
                        type: 'boolean'
                      },
                      SslConfiguration: {
                        shape: 'Sl'
                      },
                      Attributes: {
                        shape: 'Sm'
                      },
                      CreatedAt: {},
                      Environment: {
                        shape: 'So'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeCommands: {
            input: {
              type: 'structure',
              members: {
                DeploymentId: {},
                InstanceId: {},
                CommandIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Commands: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CommandId: {},
                      InstanceId: {},
                      DeploymentId: {},
                      CreatedAt: {},
                      AcknowledgedAt: {},
                      CompletedAt: {},
                      Status: {},
                      ExitCode: {
                        type: 'integer'
                      },
                      LogUrl: {},
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          DescribeDeployments: {
            input: {
              type: 'structure',
              members: {
                StackId: {},
                AppId: {},
                DeploymentIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Deployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DeploymentId: {},
                      StackId: {},
                      AppId: {},
                      CreatedAt: {},
                      CompletedAt: {},
                      Duration: {
                        type: 'integer'
                      },
                      IamUserArn: {},
                      Comment: {},
                      Command: {
                        shape: 'Ss'
                      },
                      Status: {},
                      CustomJson: {},
                      InstanceIds: {
                        shape: 'S3'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeEcsClusters: {
            input: {
              type: 'structure',
              members: {
                EcsClusterArns: {
                  shape: 'S3'
                },
                StackId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EcsClusters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EcsClusterArn: {},
                      EcsClusterName: {},
                      StackId: {},
                      RegisteredAt: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeElasticIps: {
            input: {
              type: 'structure',
              members: {
                InstanceId: {},
                StackId: {},
                Ips: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ElasticIps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Ip: {},
                      Name: {},
                      Domain: {},
                      Region: {},
                      InstanceId: {}
                    }
                  }
                }
              }
            }
          },
          DescribeElasticLoadBalancers: {
            input: {
              type: 'structure',
              members: {
                StackId: {},
                LayerIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ElasticLoadBalancers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ElasticLoadBalancerName: {},
                      Region: {},
                      DnsName: {},
                      StackId: {},
                      LayerId: {},
                      VpcId: {},
                      AvailabilityZones: {
                        shape: 'S3'
                      },
                      SubnetIds: {
                        shape: 'S3'
                      },
                      Ec2InstanceIds: {
                        shape: 'S3'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeInstances: {
            input: {
              type: 'structure',
              members: {
                StackId: {},
                LayerId: {},
                InstanceIds: {
                  shape: 'S3'
                }
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
                      AgentVersion: {},
                      AmiId: {},
                      Architecture: {},
                      Arn: {},
                      AutoScalingType: {},
                      AvailabilityZone: {},
                      BlockDeviceMappings: {
                        shape: 'Sz'
                      },
                      CreatedAt: {},
                      EbsOptimized: {
                        type: 'boolean'
                      },
                      Ec2InstanceId: {},
                      EcsClusterArn: {},
                      EcsContainerInstanceArn: {},
                      ElasticIp: {},
                      Hostname: {},
                      InfrastructureClass: {},
                      InstallUpdatesOnBoot: {
                        type: 'boolean'
                      },
                      InstanceId: {},
                      InstanceProfileArn: {},
                      InstanceType: {},
                      LastServiceErrorId: {},
                      LayerIds: {
                        shape: 'S3'
                      },
                      Os: {},
                      Platform: {},
                      PrivateDns: {},
                      PrivateIp: {},
                      PublicDns: {},
                      PublicIp: {},
                      RegisteredBy: {},
                      ReportedAgentVersion: {},
                      ReportedOs: {
                        type: 'structure',
                        members: {
                          Family: {},
                          Name: {},
                          Version: {}
                        }
                      },
                      RootDeviceType: {},
                      RootDeviceVolumeId: {},
                      SecurityGroupIds: {
                        shape: 'S3'
                      },
                      SshHostDsaKeyFingerprint: {},
                      SshHostRsaKeyFingerprint: {},
                      SshKeyName: {},
                      StackId: {},
                      Status: {},
                      SubnetId: {},
                      Tenancy: {},
                      VirtualizationType: {}
                    }
                  }
                }
              }
            }
          },
          DescribeLayers: {
            input: {
              type: 'structure',
              members: {
                StackId: {},
                LayerIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Layers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      StackId: {},
                      LayerId: {},
                      Type: {},
                      Name: {},
                      Shortname: {},
                      Attributes: {
                        shape: 'S17'
                      },
                      CloudWatchLogsConfiguration: {
                        shape: 'S19'
                      },
                      CustomInstanceProfileArn: {},
                      CustomJson: {},
                      CustomSecurityGroupIds: {
                        shape: 'S3'
                      },
                      DefaultSecurityGroupNames: {
                        shape: 'S3'
                      },
                      Packages: {
                        shape: 'S3'
                      },
                      VolumeConfigurations: {
                        shape: 'S1f'
                      },
                      EnableAutoHealing: {
                        type: 'boolean'
                      },
                      AutoAssignElasticIps: {
                        type: 'boolean'
                      },
                      AutoAssignPublicIps: {
                        type: 'boolean'
                      },
                      DefaultRecipes: {
                        shape: 'S1h'
                      },
                      CustomRecipes: {
                        shape: 'S1h'
                      },
                      CreatedAt: {},
                      InstallUpdatesOnBoot: {
                        type: 'boolean'
                      },
                      UseEbsOptimizedInstances: {
                        type: 'boolean'
                      },
                      LifecycleEventConfiguration: {
                        shape: 'S1i'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeLoadBasedAutoScaling: {
            input: {
              type: 'structure',
              required: ['LayerIds'],
              members: {
                LayerIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoadBasedAutoScalingConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LayerId: {},
                      Enable: {
                        type: 'boolean'
                      },
                      UpScaling: {
                        shape: 'S36'
                      },
                      DownScaling: {
                        shape: 'S36'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeMyUserProfile: {
            output: {
              type: 'structure',
              members: {
                UserProfile: {
                  type: 'structure',
                  members: {
                    IamUserArn: {},
                    Name: {},
                    SshUsername: {},
                    SshPublicKey: {}
                  }
                }
              }
            }
          },
          DescribeOperatingSystems: {
            output: {
              type: 'structure',
              members: {
                OperatingSystems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Id: {},
                      Type: {},
                      ConfigurationManagers: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Version: {}
                          }
                        }
                      },
                      ReportedName: {},
                      ReportedVersion: {},
                      Supported: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribePermissions: {
            input: {
              type: 'structure',
              members: {
                IamUserArn: {},
                StackId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Permissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StackId: {},
                      IamUserArn: {},
                      AllowSsh: {
                        type: 'boolean'
                      },
                      AllowSudo: {
                        type: 'boolean'
                      },
                      Level: {}
                    }
                  }
                }
              }
            }
          },
          DescribeRaidArrays: {
            input: {
              type: 'structure',
              members: {
                InstanceId: {},
                StackId: {},
                RaidArrayIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RaidArrays: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RaidArrayId: {},
                      InstanceId: {},
                      Name: {},
                      RaidLevel: {
                        type: 'integer'
                      },
                      NumberOfDisks: {
                        type: 'integer'
                      },
                      Size: {
                        type: 'integer'
                      },
                      Device: {},
                      MountPoint: {},
                      AvailabilityZone: {},
                      CreatedAt: {},
                      StackId: {},
                      VolumeType: {},
                      Iops: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeRdsDbInstances: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                StackId: {},
                RdsDbInstanceArns: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RdsDbInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RdsDbInstanceArn: {},
                      DbInstanceIdentifier: {},
                      DbUser: {},
                      DbPassword: {},
                      Region: {},
                      Address: {},
                      Engine: {},
                      StackId: {},
                      MissingOnRds: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeServiceErrors: {
            input: {
              type: 'structure',
              members: {
                StackId: {},
                InstanceId: {},
                ServiceErrorIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceErrors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ServiceErrorId: {},
                      StackId: {},
                      InstanceId: {},
                      Type: {},
                      Message: {},
                      CreatedAt: {}
                    }
                  }
                }
              }
            }
          },
          DescribeStackProvisioningParameters: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                StackId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AgentInstallerUrl: {},
                Parameters: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          DescribeStackSummary: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                StackId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StackSummary: {
                  type: 'structure',
                  members: {
                    StackId: {},
                    Name: {},
                    Arn: {},
                    LayersCount: {
                      type: 'integer'
                    },
                    AppsCount: {
                      type: 'integer'
                    },
                    InstancesCount: {
                      type: 'structure',
                      members: {
                        Assigning: {
                          type: 'integer'
                        },
                        Booting: {
                          type: 'integer'
                        },
                        ConnectionLost: {
                          type: 'integer'
                        },
                        Deregistering: {
                          type: 'integer'
                        },
                        Online: {
                          type: 'integer'
                        },
                        Pending: {
                          type: 'integer'
                        },
                        Rebooting: {
                          type: 'integer'
                        },
                        Registered: {
                          type: 'integer'
                        },
                        Registering: {
                          type: 'integer'
                        },
                        Requested: {
                          type: 'integer'
                        },
                        RunningSetup: {
                          type: 'integer'
                        },
                        SetupFailed: {
                          type: 'integer'
                        },
                        ShuttingDown: {
                          type: 'integer'
                        },
                        StartFailed: {
                          type: 'integer'
                        },
                        StopFailed: {
                          type: 'integer'
                        },
                        Stopped: {
                          type: 'integer'
                        },
                        Stopping: {
                          type: 'integer'
                        },
                        Terminated: {
                          type: 'integer'
                        },
                        Terminating: {
                          type: 'integer'
                        },
                        Unassigning: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeStacks: {
            input: {
              type: 'structure',
              members: {
                StackIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Stacks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StackId: {},
                      Name: {},
                      Arn: {},
                      Region: {},
                      VpcId: {},
                      Attributes: {
                        shape: 'S8'
                      },
                      ServiceRoleArn: {},
                      DefaultInstanceProfileArn: {},
                      DefaultOs: {},
                      HostnameTheme: {},
                      DefaultAvailabilityZone: {},
                      DefaultSubnetId: {},
                      CustomJson: {},
                      ConfigurationManager: {
                        shape: 'Sa'
                      },
                      ChefConfiguration: {
                        shape: 'Sb'
                      },
                      UseCustomCookbooks: {
                        type: 'boolean'
                      },
                      UseOpsworksSecurityGroups: {
                        type: 'boolean'
                      },
                      CustomCookbooksSource: {
                        shape: 'Sd'
                      },
                      DefaultSshKeyName: {},
                      CreatedAt: {},
                      DefaultRootDeviceType: {},
                      AgentVersion: {}
                    }
                  }
                }
              }
            }
          },
          DescribeTimeBasedAutoScaling: {
            input: {
              type: 'structure',
              required: ['InstanceIds'],
              members: {
                InstanceIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TimeBasedAutoScalingConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InstanceId: {},
                      AutoScalingSchedule: {
                        shape: 'S4b'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeUserProfiles: {
            input: {
              type: 'structure',
              members: {
                IamUserArns: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserProfiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IamUserArn: {},
                      Name: {},
                      SshUsername: {},
                      SshPublicKey: {},
                      AllowSelfManagement: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeVolumes: {
            input: {
              type: 'structure',
              members: {
                InstanceId: {},
                StackId: {},
                RaidArrayId: {},
                VolumeIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Volumes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VolumeId: {},
                      Ec2VolumeId: {},
                      Name: {},
                      RaidArrayId: {},
                      InstanceId: {},
                      Status: {},
                      Size: {
                        type: 'integer'
                      },
                      Device: {},
                      MountPoint: {},
                      Region: {},
                      AvailabilityZone: {},
                      VolumeType: {},
                      Iops: {
                        type: 'integer'
                      },
                      Encrypted: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DetachElasticLoadBalancer: {
            input: {
              type: 'structure',
              required: ['ElasticLoadBalancerName', 'LayerId'],
              members: {
                ElasticLoadBalancerName: {},
                LayerId: {}
              }
            }
          },
          DisassociateElasticIp: {
            input: {
              type: 'structure',
              required: ['ElasticIp'],
              members: {
                ElasticIp: {}
              }
            }
          },
          GetHostnameSuggestion: {
            input: {
              type: 'structure',
              required: ['LayerId'],
              members: {
                LayerId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LayerId: {},
                Hostname: {}
              }
            }
          },
          GrantAccess: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                ValidForInMinutes: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemporaryCredential: {
                  type: 'structure',
                  members: {
                    Username: {},
                    Password: {},
                    ValidForInMinutes: {
                      type: 'integer'
                    },
                    InstanceId: {}
                  }
                }
              }
            }
          },
          ListTags: {
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
                  shape: 'S50'
                },
                NextToken: {}
              }
            }
          },
          RebootInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {}
              }
            }
          },
          RegisterEcsCluster: {
            input: {
              type: 'structure',
              required: ['EcsClusterArn', 'StackId'],
              members: {
                EcsClusterArn: {},
                StackId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EcsClusterArn: {}
              }
            }
          },
          RegisterElasticIp: {
            input: {
              type: 'structure',
              required: ['ElasticIp', 'StackId'],
              members: {
                ElasticIp: {},
                StackId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ElasticIp: {}
              }
            }
          },
          RegisterInstance: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                StackId: {},
                Hostname: {},
                PublicIp: {},
                PrivateIp: {},
                RsaPublicKey: {},
                RsaPublicKeyFingerprint: {},
                InstanceIdentity: {
                  type: 'structure',
                  members: {
                    Document: {},
                    Signature: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceId: {}
              }
            }
          },
          RegisterRdsDbInstance: {
            input: {
              type: 'structure',
              required: ['StackId', 'RdsDbInstanceArn', 'DbUser', 'DbPassword'],
              members: {
                StackId: {},
                RdsDbInstanceArn: {},
                DbUser: {},
                DbPassword: {}
              }
            }
          },
          RegisterVolume: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                Ec2VolumeId: {},
                StackId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VolumeId: {}
              }
            }
          },
          SetLoadBasedAutoScaling: {
            input: {
              type: 'structure',
              required: ['LayerId'],
              members: {
                LayerId: {},
                Enable: {
                  type: 'boolean'
                },
                UpScaling: {
                  shape: 'S36'
                },
                DownScaling: {
                  shape: 'S36'
                }
              }
            }
          },
          SetPermission: {
            input: {
              type: 'structure',
              required: ['StackId', 'IamUserArn'],
              members: {
                StackId: {},
                IamUserArn: {},
                AllowSsh: {
                  type: 'boolean'
                },
                AllowSudo: {
                  type: 'boolean'
                },
                Level: {}
              }
            }
          },
          SetTimeBasedAutoScaling: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                AutoScalingSchedule: {
                  shape: 'S4b'
                }
              }
            }
          },
          StartInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {}
              }
            }
          },
          StartStack: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                StackId: {}
              }
            }
          },
          StopInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                Force: {
                  type: 'boolean'
                }
              }
            }
          },
          StopStack: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                StackId: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S50'
                }
              }
            }
          },
          UnassignInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {}
              }
            }
          },
          UnassignVolume: {
            input: {
              type: 'structure',
              required: ['VolumeId'],
              members: {
                VolumeId: {}
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateApp: {
            input: {
              type: 'structure',
              required: ['AppId'],
              members: {
                AppId: {},
                Name: {},
                Description: {},
                DataSources: {
                  shape: 'Si'
                },
                Type: {},
                AppSource: {
                  shape: 'Sd'
                },
                Domains: {
                  shape: 'S3'
                },
                EnableSsl: {
                  type: 'boolean'
                },
                SslConfiguration: {
                  shape: 'Sl'
                },
                Attributes: {
                  shape: 'Sm'
                },
                Environment: {
                  shape: 'So'
                }
              }
            }
          },
          UpdateElasticIp: {
            input: {
              type: 'structure',
              required: ['ElasticIp'],
              members: {
                ElasticIp: {},
                Name: {}
              }
            }
          },
          UpdateInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                LayerIds: {
                  shape: 'S3'
                },
                InstanceType: {},
                AutoScalingType: {},
                Hostname: {},
                Os: {},
                AmiId: {},
                SshKeyName: {},
                Architecture: {},
                InstallUpdatesOnBoot: {
                  type: 'boolean'
                },
                EbsOptimized: {
                  type: 'boolean'
                },
                AgentVersion: {}
              }
            }
          },
          UpdateLayer: {
            input: {
              type: 'structure',
              required: ['LayerId'],
              members: {
                LayerId: {},
                Name: {},
                Shortname: {},
                Attributes: {
                  shape: 'S17'
                },
                CloudWatchLogsConfiguration: {
                  shape: 'S19'
                },
                CustomInstanceProfileArn: {},
                CustomJson: {},
                CustomSecurityGroupIds: {
                  shape: 'S3'
                },
                Packages: {
                  shape: 'S3'
                },
                VolumeConfigurations: {
                  shape: 'S1f'
                },
                EnableAutoHealing: {
                  type: 'boolean'
                },
                AutoAssignElasticIps: {
                  type: 'boolean'
                },
                AutoAssignPublicIps: {
                  type: 'boolean'
                },
                CustomRecipes: {
                  shape: 'S1h'
                },
                InstallUpdatesOnBoot: {
                  type: 'boolean'
                },
                UseEbsOptimizedInstances: {
                  type: 'boolean'
                },
                LifecycleEventConfiguration: {
                  shape: 'S1i'
                }
              }
            }
          },
          UpdateMyUserProfile: {
            input: {
              type: 'structure',
              members: {
                SshPublicKey: {}
              }
            }
          },
          UpdateRdsDbInstance: {
            input: {
              type: 'structure',
              required: ['RdsDbInstanceArn'],
              members: {
                RdsDbInstanceArn: {},
                DbUser: {},
                DbPassword: {}
              }
            }
          },
          UpdateStack: {
            input: {
              type: 'structure',
              required: ['StackId'],
              members: {
                StackId: {},
                Name: {},
                Attributes: {
                  shape: 'S8'
                },
                ServiceRoleArn: {},
                DefaultInstanceProfileArn: {},
                DefaultOs: {},
                HostnameTheme: {},
                DefaultAvailabilityZone: {},
                DefaultSubnetId: {},
                CustomJson: {},
                ConfigurationManager: {
                  shape: 'Sa'
                },
                ChefConfiguration: {
                  shape: 'Sb'
                },
                UseCustomCookbooks: {
                  type: 'boolean'
                },
                CustomCookbooksSource: {
                  shape: 'Sd'
                },
                DefaultSshKeyName: {},
                DefaultRootDeviceType: {},
                UseOpsworksSecurityGroups: {
                  type: 'boolean'
                },
                AgentVersion: {}
              }
            }
          },
          UpdateUserProfile: {
            input: {
              type: 'structure',
              required: ['IamUserArn'],
              members: {
                IamUserArn: {},
                SshUsername: {},
                SshPublicKey: {},
                AllowSelfManagement: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateVolume: {
            input: {
              type: 'structure',
              required: ['VolumeId'],
              members: {
                VolumeId: {},
                Name: {},
                MountPoint: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S8: {
            type: 'map',
            key: {},
            value: {}
          },
          Sa: {
            type: 'structure',
            members: {
              Name: {},
              Version: {}
            }
          },
          Sb: {
            type: 'structure',
            members: {
              ManageBerkshelf: {
                type: 'boolean'
              },
              BerkshelfVersion: {}
            }
          },
          Sd: {
            type: 'structure',
            members: {
              Type: {},
              Url: {},
              Username: {},
              Password: {},
              SshKey: {},
              Revision: {}
            }
          },
          Si: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Arn: {},
                DatabaseName: {}
              }
            }
          },
          Sl: {
            type: 'structure',
            required: ['Certificate', 'PrivateKey'],
            members: {
              Certificate: {},
              PrivateKey: {},
              Chain: {}
            }
          },
          Sm: {
            type: 'map',
            key: {},
            value: {}
          },
          So: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {},
                Secure: {
                  type: 'boolean'
                }
              }
            }
          },
          Ss: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Args: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S3'
                }
              }
            }
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DeviceName: {},
                NoDevice: {},
                VirtualName: {},
                Ebs: {
                  type: 'structure',
                  members: {
                    SnapshotId: {},
                    Iops: {
                      type: 'integer'
                    },
                    VolumeSize: {
                      type: 'integer'
                    },
                    VolumeType: {},
                    DeleteOnTermination: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S17: {
            type: 'map',
            key: {},
            value: {}
          },
          S19: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              LogStreams: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    LogGroupName: {},
                    DatetimeFormat: {},
                    TimeZone: {},
                    File: {},
                    FileFingerprintLines: {},
                    MultiLineStartPattern: {},
                    InitialPosition: {},
                    Encoding: {},
                    BufferDuration: {
                      type: 'integer'
                    },
                    BatchCount: {
                      type: 'integer'
                    },
                    BatchSize: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['MountPoint', 'NumberOfDisks', 'Size'],
              members: {
                MountPoint: {},
                RaidLevel: {
                  type: 'integer'
                },
                NumberOfDisks: {
                  type: 'integer'
                },
                Size: {
                  type: 'integer'
                },
                VolumeType: {},
                Iops: {
                  type: 'integer'
                },
                Encrypted: {
                  type: 'boolean'
                }
              }
            }
          },
          S1h: {
            type: 'structure',
            members: {
              Setup: {
                shape: 'S3'
              },
              Configure: {
                shape: 'S3'
              },
              Deploy: {
                shape: 'S3'
              },
              Undeploy: {
                shape: 'S3'
              },
              Shutdown: {
                shape: 'S3'
              }
            }
          },
          S1i: {
            type: 'structure',
            members: {
              Shutdown: {
                type: 'structure',
                members: {
                  ExecutionTimeout: {
                    type: 'integer'
                  },
                  DelayUntilElbConnectionsDrained: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S36: {
            type: 'structure',
            members: {
              InstanceCount: {
                type: 'integer'
              },
              ThresholdsWaitTime: {
                type: 'integer'
              },
              IgnoreMetricsTime: {
                type: 'integer'
              },
              CpuThreshold: {
                type: 'double'
              },
              MemoryThreshold: {
                type: 'double'
              },
              LoadThreshold: {
                type: 'double'
              },
              Alarms: {
                shape: 'S3'
              }
            }
          },
          S4b: {
            type: 'structure',
            members: {
              Monday: {
                shape: 'S4c'
              },
              Tuesday: {
                shape: 'S4c'
              },
              Wednesday: {
                shape: 'S4c'
              },
              Thursday: {
                shape: 'S4c'
              },
              Friday: {
                shape: 'S4c'
              },
              Saturday: {
                shape: 'S4c'
              },
              Sunday: {
                shape: 'S4c'
              }
            }
          },
          S4c: {
            type: 'map',
            key: {},
            value: {}
          },
          S50: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c0d29cc9f33f83a4311293ab79d9a02b34839c4f.js.map