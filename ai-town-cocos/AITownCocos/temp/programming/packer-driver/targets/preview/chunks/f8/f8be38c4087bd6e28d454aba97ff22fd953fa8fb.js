System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2010-12-01',
          endpointPrefix: 'elasticbeanstalk',
          protocol: 'query',
          serviceAbbreviation: 'Elastic Beanstalk',
          serviceFullName: 'AWS Elastic Beanstalk',
          serviceId: 'Elastic Beanstalk',
          signatureVersion: 'v4',
          uid: 'elasticbeanstalk-2010-12-01',
          xmlNamespace: 'http://elasticbeanstalk.amazonaws.com/docs/2010-12-01/'
        },
        operations: {
          AbortEnvironmentUpdate: {
            input: {
              type: 'structure',
              members: {
                EnvironmentId: {},
                EnvironmentName: {}
              }
            }
          },
          ApplyEnvironmentManagedAction: {
            input: {
              type: 'structure',
              required: ['ActionId'],
              members: {
                EnvironmentName: {},
                EnvironmentId: {},
                ActionId: {}
              }
            },
            output: {
              resultWrapper: 'ApplyEnvironmentManagedActionResult',
              type: 'structure',
              members: {
                ActionId: {},
                ActionDescription: {},
                ActionType: {},
                Status: {}
              }
            }
          },
          AssociateEnvironmentOperationsRole: {
            input: {
              type: 'structure',
              required: ['EnvironmentName', 'OperationsRole'],
              members: {
                EnvironmentName: {},
                OperationsRole: {}
              }
            }
          },
          CheckDNSAvailability: {
            input: {
              type: 'structure',
              required: ['CNAMEPrefix'],
              members: {
                CNAMEPrefix: {}
              }
            },
            output: {
              resultWrapper: 'CheckDNSAvailabilityResult',
              type: 'structure',
              members: {
                Available: {
                  type: 'boolean'
                },
                FullyQualifiedCNAME: {}
              }
            }
          },
          ComposeEnvironments: {
            input: {
              type: 'structure',
              members: {
                ApplicationName: {},
                GroupName: {},
                VersionLabels: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              shape: 'Sk',
              resultWrapper: 'ComposeEnvironmentsResult'
            }
          },
          CreateApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                Description: {},
                ResourceLifecycleConfig: {
                  shape: 'S19'
                },
                Tags: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              shape: 'S1j',
              resultWrapper: 'CreateApplicationResult'
            }
          },
          CreateApplicationVersion: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'VersionLabel'],
              members: {
                ApplicationName: {},
                VersionLabel: {},
                Description: {},
                SourceBuildInformation: {
                  shape: 'S1p'
                },
                SourceBundle: {
                  shape: 'S1t'
                },
                BuildConfiguration: {
                  type: 'structure',
                  required: ['CodeBuildServiceRole', 'Image'],
                  members: {
                    ArtifactName: {},
                    CodeBuildServiceRole: {},
                    ComputeType: {},
                    Image: {},
                    TimeoutInMinutes: {
                      type: 'integer'
                    }
                  }
                },
                AutoCreateApplication: {
                  type: 'boolean'
                },
                Process: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              shape: 'S21',
              resultWrapper: 'CreateApplicationVersionResult'
            }
          },
          CreateConfigurationTemplate: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'TemplateName'],
              members: {
                ApplicationName: {},
                TemplateName: {},
                SolutionStackName: {},
                PlatformArn: {},
                SourceConfiguration: {
                  type: 'structure',
                  members: {
                    ApplicationName: {},
                    TemplateName: {}
                  }
                },
                EnvironmentId: {},
                Description: {},
                OptionSettings: {
                  shape: 'S27'
                },
                Tags: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              shape: 'S2d',
              resultWrapper: 'CreateConfigurationTemplateResult'
            }
          },
          CreateEnvironment: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                EnvironmentName: {},
                GroupName: {},
                Description: {},
                CNAMEPrefix: {},
                Tier: {
                  shape: 'S13'
                },
                Tags: {
                  shape: 'S1f'
                },
                VersionLabel: {},
                TemplateName: {},
                SolutionStackName: {},
                PlatformArn: {},
                OptionSettings: {
                  shape: 'S27'
                },
                OptionsToRemove: {
                  shape: 'S2g'
                },
                OperationsRole: {}
              }
            },
            output: {
              shape: 'Sm',
              resultWrapper: 'CreateEnvironmentResult'
            }
          },
          CreatePlatformVersion: {
            input: {
              type: 'structure',
              required: ['PlatformName', 'PlatformVersion', 'PlatformDefinitionBundle'],
              members: {
                PlatformName: {},
                PlatformVersion: {},
                PlatformDefinitionBundle: {
                  shape: 'S1t'
                },
                EnvironmentName: {},
                OptionSettings: {
                  shape: 'S27'
                },
                Tags: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              resultWrapper: 'CreatePlatformVersionResult',
              type: 'structure',
              members: {
                PlatformSummary: {
                  shape: 'S2m'
                },
                Builder: {
                  type: 'structure',
                  members: {
                    ARN: {}
                  }
                }
              }
            }
          },
          CreateStorageLocation: {
            output: {
              resultWrapper: 'CreateStorageLocationResult',
              type: 'structure',
              members: {
                S3Bucket: {}
              }
            }
          },
          DeleteApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                TerminateEnvByForce: {
                  type: 'boolean'
                }
              }
            }
          },
          DeleteApplicationVersion: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'VersionLabel'],
              members: {
                ApplicationName: {},
                VersionLabel: {},
                DeleteSourceBundle: {
                  type: 'boolean'
                }
              }
            }
          },
          DeleteConfigurationTemplate: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'TemplateName'],
              members: {
                ApplicationName: {},
                TemplateName: {}
              }
            }
          },
          DeleteEnvironmentConfiguration: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'EnvironmentName'],
              members: {
                ApplicationName: {},
                EnvironmentName: {}
              }
            }
          },
          DeletePlatformVersion: {
            input: {
              type: 'structure',
              members: {
                PlatformArn: {}
              }
            },
            output: {
              resultWrapper: 'DeletePlatformVersionResult',
              type: 'structure',
              members: {
                PlatformSummary: {
                  shape: 'S2m'
                }
              }
            }
          },
          DescribeAccountAttributes: {
            output: {
              resultWrapper: 'DescribeAccountAttributesResult',
              type: 'structure',
              members: {
                ResourceQuotas: {
                  type: 'structure',
                  members: {
                    ApplicationQuota: {
                      shape: 'S3c'
                    },
                    ApplicationVersionQuota: {
                      shape: 'S3c'
                    },
                    EnvironmentQuota: {
                      shape: 'S3c'
                    },
                    ConfigurationTemplateQuota: {
                      shape: 'S3c'
                    },
                    CustomPlatformQuota: {
                      shape: 'S3c'
                    }
                  }
                }
              }
            }
          },
          DescribeApplicationVersions: {
            input: {
              type: 'structure',
              members: {
                ApplicationName: {},
                VersionLabels: {
                  shape: 'S1m'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeApplicationVersionsResult',
              type: 'structure',
              members: {
                ApplicationVersions: {
                  type: 'list',
                  member: {
                    shape: 'S22'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeApplications: {
            input: {
              type: 'structure',
              members: {
                ApplicationNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeApplicationsResult',
              type: 'structure',
              members: {
                Applications: {
                  type: 'list',
                  member: {
                    shape: 'S1k'
                  }
                }
              }
            }
          },
          DescribeConfigurationOptions: {
            input: {
              type: 'structure',
              members: {
                ApplicationName: {},
                TemplateName: {},
                EnvironmentName: {},
                SolutionStackName: {},
                PlatformArn: {},
                Options: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeConfigurationOptionsResult',
              type: 'structure',
              members: {
                SolutionStackName: {},
                PlatformArn: {},
                Options: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Namespace: {},
                      Name: {},
                      DefaultValue: {},
                      ChangeSeverity: {},
                      UserDefined: {
                        type: 'boolean'
                      },
                      ValueType: {},
                      ValueOptions: {
                        type: 'list',
                        member: {}
                      },
                      MinValue: {
                        type: 'integer'
                      },
                      MaxValue: {
                        type: 'integer'
                      },
                      MaxLength: {
                        type: 'integer'
                      },
                      Regex: {
                        type: 'structure',
                        members: {
                          Pattern: {},
                          Label: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeConfigurationSettings: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                TemplateName: {},
                EnvironmentName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeConfigurationSettingsResult',
              type: 'structure',
              members: {
                ConfigurationSettings: {
                  type: 'list',
                  member: {
                    shape: 'S2d'
                  }
                }
              }
            }
          },
          DescribeEnvironmentHealth: {
            input: {
              type: 'structure',
              members: {
                EnvironmentName: {},
                EnvironmentId: {},
                AttributeNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeEnvironmentHealthResult',
              type: 'structure',
              members: {
                EnvironmentName: {},
                HealthStatus: {},
                Status: {},
                Color: {},
                Causes: {
                  shape: 'S48'
                },
                ApplicationMetrics: {
                  shape: 'S4a'
                },
                InstancesHealth: {
                  type: 'structure',
                  members: {
                    NoData: {
                      type: 'integer'
                    },
                    Unknown: {
                      type: 'integer'
                    },
                    Pending: {
                      type: 'integer'
                    },
                    Ok: {
                      type: 'integer'
                    },
                    Info: {
                      type: 'integer'
                    },
                    Warning: {
                      type: 'integer'
                    },
                    Degraded: {
                      type: 'integer'
                    },
                    Severe: {
                      type: 'integer'
                    }
                  }
                },
                RefreshedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeEnvironmentManagedActionHistory: {
            input: {
              type: 'structure',
              members: {
                EnvironmentId: {},
                EnvironmentName: {},
                NextToken: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeEnvironmentManagedActionHistoryResult',
              type: 'structure',
              members: {
                ManagedActionHistoryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ActionId: {},
                      ActionType: {},
                      ActionDescription: {},
                      FailureType: {},
                      Status: {},
                      FailureDescription: {},
                      ExecutedTime: {
                        type: 'timestamp'
                      },
                      FinishedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeEnvironmentManagedActions: {
            input: {
              type: 'structure',
              members: {
                EnvironmentName: {},
                EnvironmentId: {},
                Status: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEnvironmentManagedActionsResult',
              type: 'structure',
              members: {
                ManagedActions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ActionId: {},
                      ActionDescription: {},
                      ActionType: {},
                      Status: {},
                      WindowStartTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeEnvironmentResources: {
            input: {
              type: 'structure',
              members: {
                EnvironmentId: {},
                EnvironmentName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEnvironmentResourcesResult',
              type: 'structure',
              members: {
                EnvironmentResources: {
                  type: 'structure',
                  members: {
                    EnvironmentName: {},
                    AutoScalingGroups: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {}
                        }
                      }
                    },
                    Instances: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Id: {}
                        }
                      }
                    },
                    LaunchConfigurations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {}
                        }
                      }
                    },
                    LaunchTemplates: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Id: {}
                        }
                      }
                    },
                    LoadBalancers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {}
                        }
                      }
                    },
                    Triggers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {}
                        }
                      }
                    },
                    Queues: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          URL: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeEnvironments: {
            input: {
              type: 'structure',
              members: {
                ApplicationName: {},
                VersionLabel: {},
                EnvironmentIds: {
                  type: 'list',
                  member: {}
                },
                EnvironmentNames: {
                  type: 'list',
                  member: {}
                },
                IncludeDeleted: {
                  type: 'boolean'
                },
                IncludedDeletedBackTo: {
                  type: 'timestamp'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              shape: 'Sk',
              resultWrapper: 'DescribeEnvironmentsResult'
            }
          },
          DescribeEvents: {
            input: {
              type: 'structure',
              members: {
                ApplicationName: {},
                VersionLabel: {},
                TemplateName: {},
                EnvironmentId: {},
                EnvironmentName: {},
                PlatformArn: {},
                RequestId: {},
                Severity: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEventsResult',
              type: 'structure',
              members: {
                Events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventDate: {
                        type: 'timestamp'
                      },
                      Message: {},
                      ApplicationName: {},
                      VersionLabel: {},
                      TemplateName: {},
                      EnvironmentName: {},
                      PlatformArn: {},
                      RequestId: {},
                      Severity: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInstancesHealth: {
            input: {
              type: 'structure',
              members: {
                EnvironmentName: {},
                EnvironmentId: {},
                AttributeNames: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeInstancesHealthResult',
              type: 'structure',
              members: {
                InstanceHealthList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InstanceId: {},
                      HealthStatus: {},
                      Color: {},
                      Causes: {
                        shape: 'S48'
                      },
                      LaunchedAt: {
                        type: 'timestamp'
                      },
                      ApplicationMetrics: {
                        shape: 'S4a'
                      },
                      System: {
                        type: 'structure',
                        members: {
                          CPUUtilization: {
                            type: 'structure',
                            members: {
                              User: {
                                type: 'double'
                              },
                              Nice: {
                                type: 'double'
                              },
                              System: {
                                type: 'double'
                              },
                              Idle: {
                                type: 'double'
                              },
                              IOWait: {
                                type: 'double'
                              },
                              IRQ: {
                                type: 'double'
                              },
                              SoftIRQ: {
                                type: 'double'
                              },
                              Privileged: {
                                type: 'double'
                              }
                            }
                          },
                          LoadAverage: {
                            type: 'list',
                            member: {
                              type: 'double'
                            }
                          }
                        }
                      },
                      Deployment: {
                        type: 'structure',
                        members: {
                          VersionLabel: {},
                          DeploymentId: {
                            type: 'long'
                          },
                          Status: {},
                          DeploymentTime: {
                            type: 'timestamp'
                          }
                        }
                      },
                      AvailabilityZone: {},
                      InstanceType: {}
                    }
                  }
                },
                RefreshedAt: {
                  type: 'timestamp'
                },
                NextToken: {}
              }
            }
          },
          DescribePlatformVersion: {
            input: {
              type: 'structure',
              members: {
                PlatformArn: {}
              }
            },
            output: {
              resultWrapper: 'DescribePlatformVersionResult',
              type: 'structure',
              members: {
                PlatformDescription: {
                  type: 'structure',
                  members: {
                    PlatformArn: {},
                    PlatformOwner: {},
                    PlatformName: {},
                    PlatformVersion: {},
                    SolutionStackName: {},
                    PlatformStatus: {},
                    DateCreated: {
                      type: 'timestamp'
                    },
                    DateUpdated: {
                      type: 'timestamp'
                    },
                    PlatformCategory: {},
                    Description: {},
                    Maintainer: {},
                    OperatingSystemName: {},
                    OperatingSystemVersion: {},
                    ProgrammingLanguages: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Version: {}
                        }
                      }
                    },
                    Frameworks: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Version: {}
                        }
                      }
                    },
                    CustomAmiList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          VirtualizationType: {},
                          ImageId: {}
                        }
                      }
                    },
                    SupportedTierList: {
                      shape: 'S2s'
                    },
                    SupportedAddonList: {
                      shape: 'S2u'
                    },
                    PlatformLifecycleState: {},
                    PlatformBranchName: {},
                    PlatformBranchLifecycleState: {}
                  }
                }
              }
            }
          },
          DisassociateEnvironmentOperationsRole: {
            input: {
              type: 'structure',
              required: ['EnvironmentName'],
              members: {
                EnvironmentName: {}
              }
            }
          },
          ListAvailableSolutionStacks: {
            output: {
              resultWrapper: 'ListAvailableSolutionStacksResult',
              type: 'structure',
              members: {
                SolutionStacks: {
                  type: 'list',
                  member: {}
                },
                SolutionStackDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SolutionStackName: {},
                      PermittedFileTypes: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          ListPlatformBranches: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Attribute: {},
                      Operator: {},
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
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListPlatformBranchesResult',
              type: 'structure',
              members: {
                PlatformBranchSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PlatformName: {},
                      BranchName: {},
                      LifecycleState: {},
                      BranchOrder: {
                        type: 'integer'
                      },
                      SupportedTierList: {
                        shape: 'S2s'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPlatformVersions: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Operator: {},
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
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListPlatformVersionsResult',
              type: 'structure',
              members: {
                PlatformSummaryList: {
                  type: 'list',
                  member: {
                    shape: 'S2m'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              resultWrapper: 'ListTagsForResourceResult',
              type: 'structure',
              members: {
                ResourceArn: {},
                ResourceTags: {
                  shape: 'S7g'
                }
              }
            }
          },
          RebuildEnvironment: {
            input: {
              type: 'structure',
              members: {
                EnvironmentId: {},
                EnvironmentName: {}
              }
            }
          },
          RequestEnvironmentInfo: {
            input: {
              type: 'structure',
              required: ['InfoType'],
              members: {
                EnvironmentId: {},
                EnvironmentName: {},
                InfoType: {}
              }
            }
          },
          RestartAppServer: {
            input: {
              type: 'structure',
              members: {
                EnvironmentId: {},
                EnvironmentName: {}
              }
            }
          },
          RetrieveEnvironmentInfo: {
            input: {
              type: 'structure',
              required: ['InfoType'],
              members: {
                EnvironmentId: {},
                EnvironmentName: {},
                InfoType: {}
              }
            },
            output: {
              resultWrapper: 'RetrieveEnvironmentInfoResult',
              type: 'structure',
              members: {
                EnvironmentInfo: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InfoType: {},
                      Ec2InstanceId: {},
                      SampleTimestamp: {
                        type: 'timestamp'
                      },
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          SwapEnvironmentCNAMEs: {
            input: {
              type: 'structure',
              members: {
                SourceEnvironmentId: {},
                SourceEnvironmentName: {},
                DestinationEnvironmentId: {},
                DestinationEnvironmentName: {}
              }
            }
          },
          TerminateEnvironment: {
            input: {
              type: 'structure',
              members: {
                EnvironmentId: {},
                EnvironmentName: {},
                TerminateResources: {
                  type: 'boolean'
                },
                ForceTerminate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'Sm',
              resultWrapper: 'TerminateEnvironmentResult'
            }
          },
          UpdateApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                Description: {}
              }
            },
            output: {
              shape: 'S1j',
              resultWrapper: 'UpdateApplicationResult'
            }
          },
          UpdateApplicationResourceLifecycle: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'ResourceLifecycleConfig'],
              members: {
                ApplicationName: {},
                ResourceLifecycleConfig: {
                  shape: 'S19'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateApplicationResourceLifecycleResult',
              type: 'structure',
              members: {
                ApplicationName: {},
                ResourceLifecycleConfig: {
                  shape: 'S19'
                }
              }
            }
          },
          UpdateApplicationVersion: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'VersionLabel'],
              members: {
                ApplicationName: {},
                VersionLabel: {},
                Description: {}
              }
            },
            output: {
              shape: 'S21',
              resultWrapper: 'UpdateApplicationVersionResult'
            }
          },
          UpdateConfigurationTemplate: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'TemplateName'],
              members: {
                ApplicationName: {},
                TemplateName: {},
                Description: {},
                OptionSettings: {
                  shape: 'S27'
                },
                OptionsToRemove: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              shape: 'S2d',
              resultWrapper: 'UpdateConfigurationTemplateResult'
            }
          },
          UpdateEnvironment: {
            input: {
              type: 'structure',
              members: {
                ApplicationName: {},
                EnvironmentId: {},
                EnvironmentName: {},
                GroupName: {},
                Description: {},
                Tier: {
                  shape: 'S13'
                },
                VersionLabel: {},
                TemplateName: {},
                SolutionStackName: {},
                PlatformArn: {},
                OptionSettings: {
                  shape: 'S27'
                },
                OptionsToRemove: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              shape: 'Sm',
              resultWrapper: 'UpdateEnvironmentResult'
            }
          },
          UpdateTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                TagsToAdd: {
                  shape: 'S7g'
                },
                TagsToRemove: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ValidateConfigurationSettings: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'OptionSettings'],
              members: {
                ApplicationName: {},
                TemplateName: {},
                EnvironmentName: {},
                OptionSettings: {
                  shape: 'S27'
                }
              }
            },
            output: {
              resultWrapper: 'ValidateConfigurationSettingsResult',
              type: 'structure',
              members: {
                Messages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Message: {},
                      Severity: {},
                      Namespace: {},
                      OptionName: {}
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          Sk: {
            type: 'structure',
            members: {
              Environments: {
                type: 'list',
                member: {
                  shape: 'Sm'
                }
              },
              NextToken: {}
            }
          },
          Sm: {
            type: 'structure',
            members: {
              EnvironmentName: {},
              EnvironmentId: {},
              ApplicationName: {},
              VersionLabel: {},
              SolutionStackName: {},
              PlatformArn: {},
              TemplateName: {},
              Description: {},
              EndpointURL: {},
              CNAME: {},
              DateCreated: {
                type: 'timestamp'
              },
              DateUpdated: {
                type: 'timestamp'
              },
              Status: {},
              AbortableOperationInProgress: {
                type: 'boolean'
              },
              Health: {},
              HealthStatus: {},
              Resources: {
                type: 'structure',
                members: {
                  LoadBalancer: {
                    type: 'structure',
                    members: {
                      LoadBalancerName: {},
                      Domain: {},
                      Listeners: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Protocol: {},
                            Port: {
                              type: 'integer'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              Tier: {
                shape: 'S13'
              },
              EnvironmentLinks: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    LinkName: {},
                    EnvironmentName: {}
                  }
                }
              },
              EnvironmentArn: {},
              OperationsRole: {}
            }
          },
          S13: {
            type: 'structure',
            members: {
              Name: {},
              Type: {},
              Version: {}
            }
          },
          S19: {
            type: 'structure',
            members: {
              ServiceRole: {},
              VersionLifecycleConfig: {
                type: 'structure',
                members: {
                  MaxCountRule: {
                    type: 'structure',
                    required: ['Enabled'],
                    members: {
                      Enabled: {
                        type: 'boolean'
                      },
                      MaxCount: {
                        type: 'integer'
                      },
                      DeleteSourceFromS3: {
                        type: 'boolean'
                      }
                    }
                  },
                  MaxAgeRule: {
                    type: 'structure',
                    required: ['Enabled'],
                    members: {
                      Enabled: {
                        type: 'boolean'
                      },
                      MaxAgeInDays: {
                        type: 'integer'
                      },
                      DeleteSourceFromS3: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          S1f: {
            type: 'list',
            member: {
              shape: 'S1g'
            }
          },
          S1g: {
            type: 'structure',
            members: {
              Key: {},
              Value: {}
            }
          },
          S1j: {
            type: 'structure',
            members: {
              Application: {
                shape: 'S1k'
              }
            }
          },
          S1k: {
            type: 'structure',
            members: {
              ApplicationArn: {},
              ApplicationName: {},
              Description: {},
              DateCreated: {
                type: 'timestamp'
              },
              DateUpdated: {
                type: 'timestamp'
              },
              Versions: {
                shape: 'S1m'
              },
              ConfigurationTemplates: {
                type: 'list',
                member: {}
              },
              ResourceLifecycleConfig: {
                shape: 'S19'
              }
            }
          },
          S1m: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'structure',
            required: ['SourceType', 'SourceRepository', 'SourceLocation'],
            members: {
              SourceType: {},
              SourceRepository: {},
              SourceLocation: {}
            }
          },
          S1t: {
            type: 'structure',
            members: {
              S3Bucket: {},
              S3Key: {}
            }
          },
          S21: {
            type: 'structure',
            members: {
              ApplicationVersion: {
                shape: 'S22'
              }
            }
          },
          S22: {
            type: 'structure',
            members: {
              ApplicationVersionArn: {},
              ApplicationName: {},
              Description: {},
              VersionLabel: {},
              SourceBuildInformation: {
                shape: 'S1p'
              },
              BuildArn: {},
              SourceBundle: {
                shape: 'S1t'
              },
              DateCreated: {
                type: 'timestamp'
              },
              DateUpdated: {
                type: 'timestamp'
              },
              Status: {}
            }
          },
          S27: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceName: {},
                Namespace: {},
                OptionName: {},
                Value: {}
              }
            }
          },
          S2d: {
            type: 'structure',
            members: {
              SolutionStackName: {},
              PlatformArn: {},
              ApplicationName: {},
              TemplateName: {},
              Description: {},
              EnvironmentName: {},
              DeploymentStatus: {},
              DateCreated: {
                type: 'timestamp'
              },
              DateUpdated: {
                type: 'timestamp'
              },
              OptionSettings: {
                shape: 'S27'
              }
            }
          },
          S2g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceName: {},
                Namespace: {},
                OptionName: {}
              }
            }
          },
          S2m: {
            type: 'structure',
            members: {
              PlatformArn: {},
              PlatformOwner: {},
              PlatformStatus: {},
              PlatformCategory: {},
              OperatingSystemName: {},
              OperatingSystemVersion: {},
              SupportedTierList: {
                shape: 'S2s'
              },
              SupportedAddonList: {
                shape: 'S2u'
              },
              PlatformLifecycleState: {},
              PlatformVersion: {},
              PlatformBranchName: {},
              PlatformBranchLifecycleState: {}
            }
          },
          S2s: {
            type: 'list',
            member: {}
          },
          S2u: {
            type: 'list',
            member: {}
          },
          S3c: {
            type: 'structure',
            members: {
              Maximum: {
                type: 'integer'
              }
            }
          },
          S48: {
            type: 'list',
            member: {}
          },
          S4a: {
            type: 'structure',
            members: {
              Duration: {
                type: 'integer'
              },
              RequestCount: {
                type: 'integer'
              },
              StatusCodes: {
                type: 'structure',
                members: {
                  Status2xx: {
                    type: 'integer'
                  },
                  Status3xx: {
                    type: 'integer'
                  },
                  Status4xx: {
                    type: 'integer'
                  },
                  Status5xx: {
                    type: 'integer'
                  }
                }
              },
              Latency: {
                type: 'structure',
                members: {
                  P999: {
                    type: 'double'
                  },
                  P99: {
                    type: 'double'
                  },
                  P95: {
                    type: 'double'
                  },
                  P90: {
                    type: 'double'
                  },
                  P85: {
                    type: 'double'
                  },
                  P75: {
                    type: 'double'
                  },
                  P50: {
                    type: 'double'
                  },
                  P10: {
                    type: 'double'
                  }
                }
              }
            }
          },
          S7g: {
            type: 'list',
            member: {
              shape: 'S1g'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f8be38c4087bd6e28d454aba97ff22fd953fa8fb.js.map