System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2010-05-15',
          endpointPrefix: 'cloudformation',
          protocol: 'query',
          protocols: ['query'],
          serviceFullName: 'AWS CloudFormation',
          serviceId: 'CloudFormation',
          signatureVersion: 'v4',
          uid: 'cloudformation-2010-05-15',
          xmlNamespace: 'http://cloudformation.amazonaws.com/doc/2010-05-15/'
        },
        operations: {
          ActivateOrganizationsAccess: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'ActivateOrganizationsAccessResult',
              type: 'structure',
              members: {}
            }
          },
          ActivateType: {
            input: {
              type: 'structure',
              members: {
                Type: {},
                PublicTypeArn: {},
                PublisherId: {},
                TypeName: {},
                TypeNameAlias: {},
                AutoUpdate: {
                  type: 'boolean'
                },
                LoggingConfig: {
                  shape: 'S9'
                },
                ExecutionRoleArn: {},
                VersionBump: {},
                MajorVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              resultWrapper: 'ActivateTypeResult',
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          BatchDescribeTypeConfigurations: {
            input: {
              type: 'structure',
              required: ['TypeConfigurationIdentifiers'],
              members: {
                TypeConfigurationIdentifiers: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                }
              }
            },
            output: {
              resultWrapper: 'BatchDescribeTypeConfigurationsResult',
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ErrorCode: {},
                      ErrorMessage: {},
                      TypeConfigurationIdentifier: {
                        shape: 'Si'
                      }
                    }
                  }
                },
                UnprocessedTypeConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                },
                TypeConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Alias: {},
                      Configuration: {},
                      LastUpdated: {
                        type: 'timestamp'
                      },
                      TypeArn: {},
                      TypeName: {},
                      IsDefaultConfiguration: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          CancelUpdateStack: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                ClientRequestToken: {}
              }
            }
          },
          ContinueUpdateRollback: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                RoleARN: {},
                ResourcesToSkip: {
                  type: 'list',
                  member: {}
                },
                ClientRequestToken: {}
              }
            },
            output: {
              resultWrapper: 'ContinueUpdateRollbackResult',
              type: 'structure',
              members: {}
            }
          },
          CreateChangeSet: {
            input: {
              type: 'structure',
              required: ['StackName', 'ChangeSetName'],
              members: {
                StackName: {},
                TemplateBody: {},
                TemplateURL: {},
                UsePreviousTemplate: {
                  type: 'boolean'
                },
                Parameters: {
                  shape: 'S1a'
                },
                Capabilities: {
                  shape: 'S1f'
                },
                ResourceTypes: {
                  shape: 'S1h'
                },
                RoleARN: {},
                RollbackConfiguration: {
                  shape: 'S1j'
                },
                NotificationARNs: {
                  shape: 'S1p'
                },
                Tags: {
                  shape: 'S1r'
                },
                ChangeSetName: {},
                ClientToken: {},
                Description: {},
                ChangeSetType: {},
                ResourcesToImport: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ResourceType', 'LogicalResourceId', 'ResourceIdentifier'],
                    members: {
                      ResourceType: {},
                      LogicalResourceId: {},
                      ResourceIdentifier: {
                        shape: 'S22'
                      }
                    }
                  }
                },
                IncludeNestedStacks: {
                  type: 'boolean'
                },
                OnStackFailure: {},
                ImportExistingResources: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'CreateChangeSetResult',
              type: 'structure',
              members: {
                Id: {},
                StackId: {}
              }
            }
          },
          CreateGeneratedTemplate: {
            input: {
              type: 'structure',
              required: ['GeneratedTemplateName'],
              members: {
                Resources: {
                  shape: 'S2c'
                },
                GeneratedTemplateName: {},
                StackName: {},
                TemplateConfiguration: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              resultWrapper: 'CreateGeneratedTemplateResult',
              type: 'structure',
              members: {
                GeneratedTemplateId: {}
              }
            }
          },
          CreateStack: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                TemplateBody: {},
                TemplateURL: {},
                Parameters: {
                  shape: 'S1a'
                },
                DisableRollback: {
                  type: 'boolean'
                },
                RollbackConfiguration: {
                  shape: 'S1j'
                },
                TimeoutInMinutes: {
                  type: 'integer'
                },
                NotificationARNs: {
                  shape: 'S1p'
                },
                Capabilities: {
                  shape: 'S1f'
                },
                ResourceTypes: {
                  shape: 'S1h'
                },
                RoleARN: {},
                OnFailure: {},
                StackPolicyBody: {},
                StackPolicyURL: {},
                Tags: {
                  shape: 'S1r'
                },
                ClientRequestToken: {},
                EnableTerminationProtection: {
                  type: 'boolean'
                },
                RetainExceptOnCreate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'CreateStackResult',
              type: 'structure',
              members: {
                StackId: {}
              }
            }
          },
          CreateStackInstances: {
            input: {
              type: 'structure',
              required: ['StackSetName', 'Regions'],
              members: {
                StackSetName: {},
                Accounts: {
                  shape: 'S2v'
                },
                DeploymentTargets: {
                  shape: 'S2x'
                },
                Regions: {
                  shape: 'S32'
                },
                ParameterOverrides: {
                  shape: 'S1a'
                },
                OperationPreferences: {
                  shape: 'S34'
                },
                OperationId: {
                  idempotencyToken: true
                },
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'CreateStackInstancesResult',
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          CreateStackSet: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                Description: {},
                TemplateBody: {},
                TemplateURL: {},
                StackId: {},
                Parameters: {
                  shape: 'S1a'
                },
                Capabilities: {
                  shape: 'S1f'
                },
                Tags: {
                  shape: 'S1r'
                },
                AdministrationRoleARN: {},
                ExecutionRoleName: {},
                PermissionModel: {},
                AutoDeployment: {
                  shape: 'S3g'
                },
                CallAs: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                ManagedExecution: {
                  shape: 'S3j'
                }
              }
            },
            output: {
              resultWrapper: 'CreateStackSetResult',
              type: 'structure',
              members: {
                StackSetId: {}
              }
            }
          },
          DeactivateOrganizationsAccess: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'DeactivateOrganizationsAccessResult',
              type: 'structure',
              members: {}
            }
          },
          DeactivateType: {
            input: {
              type: 'structure',
              members: {
                TypeName: {},
                Type: {},
                Arn: {}
              }
            },
            output: {
              resultWrapper: 'DeactivateTypeResult',
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteChangeSet: {
            input: {
              type: 'structure',
              required: ['ChangeSetName'],
              members: {
                ChangeSetName: {},
                StackName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteChangeSetResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteGeneratedTemplate: {
            input: {
              type: 'structure',
              required: ['GeneratedTemplateName'],
              members: {
                GeneratedTemplateName: {}
              }
            }
          },
          DeleteStack: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                RetainResources: {
                  type: 'list',
                  member: {}
                },
                RoleARN: {},
                ClientRequestToken: {},
                DeletionMode: {}
              }
            }
          },
          DeleteStackInstances: {
            input: {
              type: 'structure',
              required: ['StackSetName', 'Regions', 'RetainStacks'],
              members: {
                StackSetName: {},
                Accounts: {
                  shape: 'S2v'
                },
                DeploymentTargets: {
                  shape: 'S2x'
                },
                Regions: {
                  shape: 'S32'
                },
                OperationPreferences: {
                  shape: 'S34'
                },
                RetainStacks: {
                  type: 'boolean'
                },
                OperationId: {
                  idempotencyToken: true
                },
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'DeleteStackInstancesResult',
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          DeleteStackSet: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'DeleteStackSetResult',
              type: 'structure',
              members: {}
            }
          },
          DeregisterType: {
            input: {
              type: 'structure',
              members: {
                Arn: {},
                Type: {},
                TypeName: {},
                VersionId: {}
              }
            },
            output: {
              resultWrapper: 'DeregisterTypeResult',
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeAccountLimits: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeAccountLimitsResult',
              type: 'structure',
              members: {
                AccountLimits: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Value: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeChangeSet: {
            input: {
              type: 'structure',
              required: ['ChangeSetName'],
              members: {
                ChangeSetName: {},
                StackName: {},
                NextToken: {},
                IncludePropertyValues: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeChangeSetResult',
              type: 'structure',
              members: {
                ChangeSetName: {},
                ChangeSetId: {},
                StackId: {},
                StackName: {},
                Description: {},
                Parameters: {
                  shape: 'S1a'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                ExecutionStatus: {},
                Status: {},
                StatusReason: {},
                NotificationARNs: {
                  shape: 'S1p'
                },
                RollbackConfiguration: {
                  shape: 'S1j'
                },
                Capabilities: {
                  shape: 'S1f'
                },
                Tags: {
                  shape: 'S1r'
                },
                Changes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      HookInvocationCount: {
                        type: 'integer'
                      },
                      ResourceChange: {
                        type: 'structure',
                        members: {
                          PolicyAction: {},
                          Action: {},
                          LogicalResourceId: {},
                          PhysicalResourceId: {},
                          ResourceType: {},
                          Replacement: {},
                          Scope: {
                            type: 'list',
                            member: {}
                          },
                          Details: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Target: {
                                  type: 'structure',
                                  members: {
                                    Attribute: {},
                                    Name: {},
                                    RequiresRecreation: {},
                                    Path: {},
                                    BeforeValue: {},
                                    AfterValue: {},
                                    AttributeChangeType: {}
                                  }
                                },
                                Evaluation: {},
                                ChangeSource: {},
                                CausingEntity: {}
                              }
                            }
                          },
                          ChangeSetId: {},
                          ModuleInfo: {
                            shape: 'S58'
                          },
                          BeforeContext: {},
                          AfterContext: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {},
                IncludeNestedStacks: {
                  type: 'boolean'
                },
                ParentChangeSetId: {},
                RootChangeSetId: {},
                OnStackFailure: {},
                ImportExistingResources: {
                  type: 'boolean'
                }
              }
            }
          },
          DescribeChangeSetHooks: {
            input: {
              type: 'structure',
              required: ['ChangeSetName'],
              members: {
                ChangeSetName: {},
                StackName: {},
                NextToken: {},
                LogicalResourceId: {}
              }
            },
            output: {
              resultWrapper: 'DescribeChangeSetHooksResult',
              type: 'structure',
              members: {
                ChangeSetId: {},
                ChangeSetName: {},
                Hooks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InvocationPoint: {},
                      FailureMode: {},
                      TypeName: {},
                      TypeVersionId: {},
                      TypeConfigurationVersionId: {},
                      TargetDetails: {
                        type: 'structure',
                        members: {
                          TargetType: {},
                          ResourceTargetDetails: {
                            type: 'structure',
                            members: {
                              LogicalResourceId: {},
                              ResourceType: {},
                              ResourceAction: {}
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Status: {},
                NextToken: {},
                StackId: {},
                StackName: {}
              }
            }
          },
          DescribeGeneratedTemplate: {
            input: {
              type: 'structure',
              required: ['GeneratedTemplateName'],
              members: {
                GeneratedTemplateName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeGeneratedTemplateResult',
              type: 'structure',
              members: {
                GeneratedTemplateId: {},
                GeneratedTemplateName: {},
                Resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceType: {},
                      LogicalResourceId: {},
                      ResourceIdentifier: {
                        shape: 'S22'
                      },
                      ResourceStatus: {},
                      ResourceStatusReason: {},
                      Warnings: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Type: {},
                            Properties: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  PropertyPath: {},
                                  Required: {
                                    type: 'boolean'
                                  },
                                  Description: {}
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Status: {},
                StatusReason: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Progress: {
                  type: 'structure',
                  members: {
                    ResourcesSucceeded: {
                      type: 'integer'
                    },
                    ResourcesFailed: {
                      type: 'integer'
                    },
                    ResourcesProcessing: {
                      type: 'integer'
                    },
                    ResourcesPending: {
                      type: 'integer'
                    }
                  }
                },
                StackId: {},
                TemplateConfiguration: {
                  shape: 'S2f'
                },
                TotalWarnings: {
                  type: 'integer'
                }
              }
            }
          },
          DescribeOrganizationsAccess: {
            input: {
              type: 'structure',
              members: {
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'DescribeOrganizationsAccessResult',
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          DescribePublisher: {
            input: {
              type: 'structure',
              members: {
                PublisherId: {}
              }
            },
            output: {
              resultWrapper: 'DescribePublisherResult',
              type: 'structure',
              members: {
                PublisherId: {},
                PublisherStatus: {},
                IdentityProvider: {},
                PublisherProfile: {}
              }
            },
            idempotent: true
          },
          DescribeResourceScan: {
            input: {
              type: 'structure',
              required: ['ResourceScanId'],
              members: {
                ResourceScanId: {}
              }
            },
            output: {
              resultWrapper: 'DescribeResourceScanResult',
              type: 'structure',
              members: {
                ResourceScanId: {},
                Status: {},
                StatusReason: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                PercentageCompleted: {
                  type: 'double'
                },
                ResourceTypes: {
                  shape: 'S1h'
                },
                ResourcesScanned: {
                  type: 'integer'
                },
                ResourcesRead: {
                  type: 'integer'
                }
              }
            }
          },
          DescribeStackDriftDetectionStatus: {
            input: {
              type: 'structure',
              required: ['StackDriftDetectionId'],
              members: {
                StackDriftDetectionId: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStackDriftDetectionStatusResult',
              type: 'structure',
              required: ['StackId', 'StackDriftDetectionId', 'DetectionStatus', 'Timestamp'],
              members: {
                StackId: {},
                StackDriftDetectionId: {},
                StackDriftStatus: {},
                DetectionStatus: {},
                DetectionStatusReason: {},
                DriftedStackResourceCount: {
                  type: 'integer'
                },
                Timestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeStackEvents: {
            input: {
              type: 'structure',
              members: {
                StackName: {},
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStackEventsResult',
              type: 'structure',
              members: {
                StackEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StackId', 'EventId', 'StackName', 'Timestamp'],
                    members: {
                      StackId: {},
                      EventId: {},
                      StackName: {},
                      LogicalResourceId: {},
                      PhysicalResourceId: {},
                      ResourceType: {},
                      Timestamp: {
                        type: 'timestamp'
                      },
                      ResourceStatus: {},
                      ResourceStatusReason: {},
                      ResourceProperties: {},
                      ClientRequestToken: {},
                      HookType: {},
                      HookStatus: {},
                      HookStatusReason: {},
                      HookInvocationPoint: {},
                      HookFailureMode: {},
                      DetailedStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeStackInstance: {
            input: {
              type: 'structure',
              required: ['StackSetName', 'StackInstanceAccount', 'StackInstanceRegion'],
              members: {
                StackSetName: {},
                StackInstanceAccount: {},
                StackInstanceRegion: {},
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStackInstanceResult',
              type: 'structure',
              members: {
                StackInstance: {
                  type: 'structure',
                  members: {
                    StackSetId: {},
                    Region: {},
                    Account: {},
                    StackId: {},
                    ParameterOverrides: {
                      shape: 'S1a'
                    },
                    Status: {},
                    StackInstanceStatus: {
                      shape: 'S7g'
                    },
                    StatusReason: {},
                    OrganizationalUnitId: {},
                    DriftStatus: {},
                    LastDriftCheckTimestamp: {
                      type: 'timestamp'
                    },
                    LastOperationId: {}
                  }
                }
              }
            }
          },
          DescribeStackResource: {
            input: {
              type: 'structure',
              required: ['StackName', 'LogicalResourceId'],
              members: {
                StackName: {},
                LogicalResourceId: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStackResourceResult',
              type: 'structure',
              members: {
                StackResourceDetail: {
                  type: 'structure',
                  required: ['LogicalResourceId', 'ResourceType', 'LastUpdatedTimestamp', 'ResourceStatus'],
                  members: {
                    StackName: {},
                    StackId: {},
                    LogicalResourceId: {},
                    PhysicalResourceId: {},
                    ResourceType: {},
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    ResourceStatus: {},
                    ResourceStatusReason: {},
                    Description: {},
                    Metadata: {},
                    DriftInformation: {
                      shape: 'S7n'
                    },
                    ModuleInfo: {
                      shape: 'S58'
                    }
                  }
                }
              }
            }
          },
          DescribeStackResourceDrifts: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                StackResourceDriftStatusFilters: {
                  shape: 'S7q'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeStackResourceDriftsResult',
              type: 'structure',
              required: ['StackResourceDrifts'],
              members: {
                StackResourceDrifts: {
                  type: 'list',
                  member: {
                    shape: 'S7u'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeStackResources: {
            input: {
              type: 'structure',
              members: {
                StackName: {},
                LogicalResourceId: {},
                PhysicalResourceId: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStackResourcesResult',
              type: 'structure',
              members: {
                StackResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['LogicalResourceId', 'ResourceType', 'Timestamp', 'ResourceStatus'],
                    members: {
                      StackName: {},
                      StackId: {},
                      LogicalResourceId: {},
                      PhysicalResourceId: {},
                      ResourceType: {},
                      Timestamp: {
                        type: 'timestamp'
                      },
                      ResourceStatus: {},
                      ResourceStatusReason: {},
                      Description: {},
                      DriftInformation: {
                        shape: 'S7n'
                      },
                      ModuleInfo: {
                        shape: 'S58'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeStackSet: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStackSetResult',
              type: 'structure',
              members: {
                StackSet: {
                  type: 'structure',
                  members: {
                    StackSetName: {},
                    StackSetId: {},
                    Description: {},
                    Status: {},
                    TemplateBody: {},
                    Parameters: {
                      shape: 'S1a'
                    },
                    Capabilities: {
                      shape: 'S1f'
                    },
                    Tags: {
                      shape: 'S1r'
                    },
                    StackSetARN: {},
                    AdministrationRoleARN: {},
                    ExecutionRoleName: {},
                    StackSetDriftDetectionDetails: {
                      shape: 'S8d'
                    },
                    AutoDeployment: {
                      shape: 'S3g'
                    },
                    PermissionModel: {},
                    OrganizationalUnitIds: {
                      shape: 'S2z'
                    },
                    ManagedExecution: {
                      shape: 'S3j'
                    },
                    Regions: {
                      shape: 'S32'
                    }
                  }
                }
              }
            }
          },
          DescribeStackSetOperation: {
            input: {
              type: 'structure',
              required: ['StackSetName', 'OperationId'],
              members: {
                StackSetName: {},
                OperationId: {},
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStackSetOperationResult',
              type: 'structure',
              members: {
                StackSetOperation: {
                  type: 'structure',
                  members: {
                    OperationId: {},
                    StackSetId: {},
                    Action: {},
                    Status: {},
                    OperationPreferences: {
                      shape: 'S34'
                    },
                    RetainStacks: {
                      type: 'boolean'
                    },
                    AdministrationRoleARN: {},
                    ExecutionRoleName: {},
                    CreationTimestamp: {
                      type: 'timestamp'
                    },
                    EndTimestamp: {
                      type: 'timestamp'
                    },
                    DeploymentTargets: {
                      shape: 'S2x'
                    },
                    StackSetDriftDetectionDetails: {
                      shape: 'S8d'
                    },
                    StatusReason: {},
                    StatusDetails: {
                      shape: 'S8s'
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
                StackName: {},
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStacksResult',
              type: 'structure',
              members: {
                Stacks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StackName', 'CreationTime', 'StackStatus'],
                    members: {
                      StackId: {},
                      StackName: {},
                      ChangeSetId: {},
                      Description: {},
                      Parameters: {
                        shape: 'S1a'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      DeletionTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      RollbackConfiguration: {
                        shape: 'S1j'
                      },
                      StackStatus: {},
                      StackStatusReason: {},
                      DisableRollback: {
                        type: 'boolean'
                      },
                      NotificationARNs: {
                        shape: 'S1p'
                      },
                      TimeoutInMinutes: {
                        type: 'integer'
                      },
                      Capabilities: {
                        shape: 'S1f'
                      },
                      Outputs: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            OutputKey: {},
                            OutputValue: {},
                            Description: {},
                            ExportName: {}
                          }
                        }
                      },
                      RoleARN: {},
                      Tags: {
                        shape: 'S1r'
                      },
                      EnableTerminationProtection: {
                        type: 'boolean'
                      },
                      ParentId: {},
                      RootId: {},
                      DriftInformation: {
                        type: 'structure',
                        required: ['StackDriftStatus'],
                        members: {
                          StackDriftStatus: {},
                          LastCheckTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      },
                      RetainExceptOnCreate: {
                        type: 'boolean'
                      },
                      DeletionMode: {},
                      DetailedStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeType: {
            input: {
              type: 'structure',
              members: {
                Type: {},
                TypeName: {},
                Arn: {},
                VersionId: {},
                PublisherId: {},
                PublicVersionNumber: {}
              }
            },
            output: {
              resultWrapper: 'DescribeTypeResult',
              type: 'structure',
              members: {
                Arn: {},
                Type: {},
                TypeName: {},
                DefaultVersionId: {},
                IsDefaultVersion: {
                  type: 'boolean'
                },
                TypeTestsStatus: {},
                TypeTestsStatusDescription: {},
                Description: {},
                Schema: {},
                ProvisioningType: {},
                DeprecatedStatus: {},
                LoggingConfig: {
                  shape: 'S9'
                },
                RequiredActivatedTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TypeNameAlias: {},
                      OriginalTypeName: {},
                      PublisherId: {},
                      SupportedMajorVersions: {
                        type: 'list',
                        member: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                ExecutionRoleArn: {},
                Visibility: {},
                SourceUrl: {},
                DocumentationUrl: {},
                LastUpdated: {
                  type: 'timestamp'
                },
                TimeCreated: {
                  type: 'timestamp'
                },
                ConfigurationSchema: {},
                PublisherId: {},
                OriginalTypeName: {},
                OriginalTypeArn: {},
                PublicVersionNumber: {},
                LatestPublicVersion: {},
                IsActivated: {
                  type: 'boolean'
                },
                AutoUpdate: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          DescribeTypeRegistration: {
            input: {
              type: 'structure',
              required: ['RegistrationToken'],
              members: {
                RegistrationToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeTypeRegistrationResult',
              type: 'structure',
              members: {
                ProgressStatus: {},
                Description: {},
                TypeArn: {},
                TypeVersionArn: {}
              }
            },
            idempotent: true
          },
          DetectStackDrift: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                LogicalResourceIds: {
                  shape: 'S9s'
                }
              }
            },
            output: {
              resultWrapper: 'DetectStackDriftResult',
              type: 'structure',
              required: ['StackDriftDetectionId'],
              members: {
                StackDriftDetectionId: {}
              }
            }
          },
          DetectStackResourceDrift: {
            input: {
              type: 'structure',
              required: ['StackName', 'LogicalResourceId'],
              members: {
                StackName: {},
                LogicalResourceId: {}
              }
            },
            output: {
              resultWrapper: 'DetectStackResourceDriftResult',
              type: 'structure',
              required: ['StackResourceDrift'],
              members: {
                StackResourceDrift: {
                  shape: 'S7u'
                }
              }
            }
          },
          DetectStackSetDrift: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                OperationPreferences: {
                  shape: 'S34'
                },
                OperationId: {
                  idempotencyToken: true
                },
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'DetectStackSetDriftResult',
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          EstimateTemplateCost: {
            input: {
              type: 'structure',
              members: {
                TemplateBody: {},
                TemplateURL: {},
                Parameters: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              resultWrapper: 'EstimateTemplateCostResult',
              type: 'structure',
              members: {
                Url: {}
              }
            }
          },
          ExecuteChangeSet: {
            input: {
              type: 'structure',
              required: ['ChangeSetName'],
              members: {
                ChangeSetName: {},
                StackName: {},
                ClientRequestToken: {},
                DisableRollback: {
                  type: 'boolean'
                },
                RetainExceptOnCreate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ExecuteChangeSetResult',
              type: 'structure',
              members: {}
            }
          },
          GetGeneratedTemplate: {
            input: {
              type: 'structure',
              required: ['GeneratedTemplateName'],
              members: {
                Format: {},
                GeneratedTemplateName: {}
              }
            },
            output: {
              resultWrapper: 'GetGeneratedTemplateResult',
              type: 'structure',
              members: {
                Status: {},
                TemplateBody: {}
              }
            }
          },
          GetStackPolicy: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {}
              }
            },
            output: {
              resultWrapper: 'GetStackPolicyResult',
              type: 'structure',
              members: {
                StackPolicyBody: {}
              }
            }
          },
          GetTemplate: {
            input: {
              type: 'structure',
              members: {
                StackName: {},
                ChangeSetName: {},
                TemplateStage: {}
              }
            },
            output: {
              resultWrapper: 'GetTemplateResult',
              type: 'structure',
              members: {
                TemplateBody: {},
                StagesAvailable: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          GetTemplateSummary: {
            input: {
              type: 'structure',
              members: {
                TemplateBody: {},
                TemplateURL: {},
                StackName: {},
                StackSetName: {},
                CallAs: {},
                TemplateSummaryConfig: {
                  type: 'structure',
                  members: {
                    TreatUnrecognizedResourceTypesAsWarnings: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'GetTemplateSummaryResult',
              type: 'structure',
              members: {
                Parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ParameterKey: {},
                      DefaultValue: {},
                      ParameterType: {},
                      NoEcho: {
                        type: 'boolean'
                      },
                      Description: {},
                      ParameterConstraints: {
                        type: 'structure',
                        members: {
                          AllowedValues: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  }
                },
                Description: {},
                Capabilities: {
                  shape: 'S1f'
                },
                CapabilitiesReason: {},
                ResourceTypes: {
                  shape: 'S1h'
                },
                Version: {},
                Metadata: {},
                DeclaredTransforms: {
                  shape: 'Saq'
                },
                ResourceIdentifierSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceType: {},
                      LogicalResourceIds: {
                        shape: 'S9s'
                      },
                      ResourceIdentifiers: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                Warnings: {
                  type: 'structure',
                  members: {
                    UnrecognizedResourceTypes: {
                      shape: 'S1h'
                    }
                  }
                }
              }
            }
          },
          ImportStacksToStackSet: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                StackIds: {
                  type: 'list',
                  member: {}
                },
                StackIdsUrl: {},
                OrganizationalUnitIds: {
                  shape: 'S2z'
                },
                OperationPreferences: {
                  shape: 'S34'
                },
                OperationId: {
                  idempotencyToken: true
                },
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'ImportStacksToStackSetResult',
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          ListChangeSets: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListChangeSetsResult',
              type: 'structure',
              members: {
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StackId: {},
                      StackName: {},
                      ChangeSetId: {},
                      ChangeSetName: {},
                      ExecutionStatus: {},
                      Status: {},
                      StatusReason: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      Description: {},
                      IncludeNestedStacks: {
                        type: 'boolean'
                      },
                      ParentChangeSetId: {},
                      RootChangeSetId: {},
                      ImportExistingResources: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListExports: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListExportsResult',
              type: 'structure',
              members: {
                Exports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ExportingStackId: {},
                      Name: {},
                      Value: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListGeneratedTemplates: {
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
              resultWrapper: 'ListGeneratedTemplatesResult',
              type: 'structure',
              members: {
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GeneratedTemplateId: {},
                      GeneratedTemplateName: {},
                      Status: {},
                      StatusReason: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      NumberOfResources: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListImports: {
            input: {
              type: 'structure',
              required: ['ExportName'],
              members: {
                ExportName: {},
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListImportsResult',
              type: 'structure',
              members: {
                Imports: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListResourceScanRelatedResources: {
            input: {
              type: 'structure',
              required: ['ResourceScanId', 'Resources'],
              members: {
                ResourceScanId: {},
                Resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ResourceType', 'ResourceIdentifier'],
                    members: {
                      ResourceType: {},
                      ResourceIdentifier: {
                        shape: 'Sbl'
                      }
                    }
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListResourceScanRelatedResourcesResult',
              type: 'structure',
              members: {
                RelatedResources: {
                  type: 'list',
                  member: {
                    shape: 'Sbq'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceScanResources: {
            input: {
              type: 'structure',
              required: ['ResourceScanId'],
              members: {
                ResourceScanId: {},
                ResourceIdentifier: {},
                ResourceTypePrefix: {},
                TagKey: {},
                TagValue: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListResourceScanResourcesResult',
              type: 'structure',
              members: {
                Resources: {
                  type: 'list',
                  member: {
                    shape: 'Sbq'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceScans: {
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
              resultWrapper: 'ListResourceScansResult',
              type: 'structure',
              members: {
                ResourceScanSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceScanId: {},
                      Status: {},
                      StatusReason: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      PercentageCompleted: {
                        type: 'double'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStackInstanceResourceDrifts: {
            input: {
              type: 'structure',
              required: ['StackSetName', 'StackInstanceAccount', 'StackInstanceRegion', 'OperationId'],
              members: {
                StackSetName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                StackInstanceResourceDriftStatuses: {
                  shape: 'S7q'
                },
                StackInstanceAccount: {},
                StackInstanceRegion: {},
                OperationId: {},
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'ListStackInstanceResourceDriftsResult',
              type: 'structure',
              members: {
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StackId', 'LogicalResourceId', 'ResourceType', 'StackResourceDriftStatus', 'Timestamp'],
                    members: {
                      StackId: {},
                      LogicalResourceId: {},
                      PhysicalResourceId: {},
                      PhysicalResourceIdContext: {
                        shape: 'S7v'
                      },
                      ResourceType: {},
                      PropertyDifferences: {
                        shape: 'S80'
                      },
                      StackResourceDriftStatus: {},
                      Timestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStackInstances: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Values: {}
                    }
                  }
                },
                StackInstanceAccount: {},
                StackInstanceRegion: {},
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'ListStackInstancesResult',
              type: 'structure',
              members: {
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StackSetId: {},
                      Region: {},
                      Account: {},
                      StackId: {},
                      Status: {},
                      StatusReason: {},
                      StackInstanceStatus: {
                        shape: 'S7g'
                      },
                      OrganizationalUnitId: {},
                      DriftStatus: {},
                      LastDriftCheckTimestamp: {
                        type: 'timestamp'
                      },
                      LastOperationId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStackResources: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListStackResourcesResult',
              type: 'structure',
              members: {
                StackResourceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['LogicalResourceId', 'ResourceType', 'LastUpdatedTimestamp', 'ResourceStatus'],
                    members: {
                      LogicalResourceId: {},
                      PhysicalResourceId: {},
                      ResourceType: {},
                      LastUpdatedTimestamp: {
                        type: 'timestamp'
                      },
                      ResourceStatus: {},
                      ResourceStatusReason: {},
                      DriftInformation: {
                        type: 'structure',
                        required: ['StackResourceDriftStatus'],
                        members: {
                          StackResourceDriftStatus: {},
                          LastCheckTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      },
                      ModuleInfo: {
                        shape: 'S58'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStackSetAutoDeploymentTargets: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'ListStackSetAutoDeploymentTargetsResult',
              type: 'structure',
              members: {
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      OrganizationalUnitId: {},
                      Regions: {
                        shape: 'S32'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStackSetOperationResults: {
            input: {
              type: 'structure',
              required: ['StackSetName', 'OperationId'],
              members: {
                StackSetName: {},
                OperationId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CallAs: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Values: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'ListStackSetOperationResultsResult',
              type: 'structure',
              members: {
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Account: {},
                      Region: {},
                      Status: {},
                      StatusReason: {},
                      AccountGateResult: {
                        type: 'structure',
                        members: {
                          Status: {},
                          StatusReason: {}
                        }
                      },
                      OrganizationalUnitId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStackSetOperations: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'ListStackSetOperationsResult',
              type: 'structure',
              members: {
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      OperationId: {},
                      Action: {},
                      Status: {},
                      CreationTimestamp: {
                        type: 'timestamp'
                      },
                      EndTimestamp: {
                        type: 'timestamp'
                      },
                      StatusReason: {},
                      StatusDetails: {
                        shape: 'S8s'
                      },
                      OperationPreferences: {
                        shape: 'S34'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStackSets: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Status: {},
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'ListStackSetsResult',
              type: 'structure',
              members: {
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StackSetName: {},
                      StackSetId: {},
                      Description: {},
                      Status: {},
                      AutoDeployment: {
                        shape: 'S3g'
                      },
                      PermissionModel: {},
                      DriftStatus: {},
                      LastDriftCheckTimestamp: {
                        type: 'timestamp'
                      },
                      ManagedExecution: {
                        shape: 'S3j'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStacks: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                StackStatusFilter: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'ListStacksResult',
              type: 'structure',
              members: {
                StackSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StackName', 'CreationTime', 'StackStatus'],
                    members: {
                      StackId: {},
                      StackName: {},
                      TemplateDescription: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      DeletionTime: {
                        type: 'timestamp'
                      },
                      StackStatus: {},
                      StackStatusReason: {},
                      ParentId: {},
                      RootId: {},
                      DriftInformation: {
                        type: 'structure',
                        required: ['StackDriftStatus'],
                        members: {
                          StackDriftStatus: {},
                          LastCheckTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTypeRegistrations: {
            input: {
              type: 'structure',
              members: {
                Type: {},
                TypeName: {},
                TypeArn: {},
                RegistrationStatusFilter: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListTypeRegistrationsResult',
              type: 'structure',
              members: {
                RegistrationTokenList: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListTypeVersions: {
            input: {
              type: 'structure',
              members: {
                Type: {},
                TypeName: {},
                Arn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                DeprecatedStatus: {},
                PublisherId: {}
              }
            },
            output: {
              resultWrapper: 'ListTypeVersionsResult',
              type: 'structure',
              members: {
                TypeVersionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      TypeName: {},
                      VersionId: {},
                      IsDefaultVersion: {
                        type: 'boolean'
                      },
                      Arn: {},
                      TimeCreated: {
                        type: 'timestamp'
                      },
                      Description: {},
                      PublicVersionNumber: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListTypes: {
            input: {
              type: 'structure',
              members: {
                Visibility: {},
                ProvisioningType: {},
                DeprecatedStatus: {},
                Type: {},
                Filters: {
                  type: 'structure',
                  members: {
                    Category: {},
                    PublisherId: {},
                    TypeNamePrefix: {}
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListTypesResult',
              type: 'structure',
              members: {
                TypeSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      TypeName: {},
                      DefaultVersionId: {},
                      TypeArn: {},
                      LastUpdated: {
                        type: 'timestamp'
                      },
                      Description: {},
                      PublisherId: {},
                      OriginalTypeName: {},
                      PublicVersionNumber: {},
                      LatestPublicVersion: {},
                      PublisherIdentity: {},
                      PublisherName: {},
                      IsActivated: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          PublishType: {
            input: {
              type: 'structure',
              members: {
                Type: {},
                Arn: {},
                TypeName: {},
                PublicVersionNumber: {}
              }
            },
            output: {
              resultWrapper: 'PublishTypeResult',
              type: 'structure',
              members: {
                PublicTypeArn: {}
              }
            },
            idempotent: true
          },
          RecordHandlerProgress: {
            input: {
              type: 'structure',
              required: ['BearerToken', 'OperationStatus'],
              members: {
                BearerToken: {},
                OperationStatus: {},
                CurrentOperationStatus: {},
                StatusMessage: {},
                ErrorCode: {},
                ResourceModel: {},
                ClientRequestToken: {}
              }
            },
            output: {
              resultWrapper: 'RecordHandlerProgressResult',
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          RegisterPublisher: {
            input: {
              type: 'structure',
              members: {
                AcceptTermsAndConditions: {
                  type: 'boolean'
                },
                ConnectionArn: {}
              }
            },
            output: {
              resultWrapper: 'RegisterPublisherResult',
              type: 'structure',
              members: {
                PublisherId: {}
              }
            },
            idempotent: true
          },
          RegisterType: {
            input: {
              type: 'structure',
              required: ['TypeName', 'SchemaHandlerPackage'],
              members: {
                Type: {},
                TypeName: {},
                SchemaHandlerPackage: {},
                LoggingConfig: {
                  shape: 'S9'
                },
                ExecutionRoleArn: {},
                ClientRequestToken: {}
              }
            },
            output: {
              resultWrapper: 'RegisterTypeResult',
              type: 'structure',
              members: {
                RegistrationToken: {}
              }
            },
            idempotent: true
          },
          RollbackStack: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                RoleARN: {},
                ClientRequestToken: {},
                RetainExceptOnCreate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'RollbackStackResult',
              type: 'structure',
              members: {
                StackId: {}
              }
            }
          },
          SetStackPolicy: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                StackPolicyBody: {},
                StackPolicyURL: {}
              }
            }
          },
          SetTypeConfiguration: {
            input: {
              type: 'structure',
              required: ['Configuration'],
              members: {
                TypeArn: {},
                Configuration: {},
                ConfigurationAlias: {},
                TypeName: {},
                Type: {}
              }
            },
            output: {
              resultWrapper: 'SetTypeConfigurationResult',
              type: 'structure',
              members: {
                ConfigurationArn: {}
              }
            }
          },
          SetTypeDefaultVersion: {
            input: {
              type: 'structure',
              members: {
                Arn: {},
                Type: {},
                TypeName: {},
                VersionId: {}
              }
            },
            output: {
              resultWrapper: 'SetTypeDefaultVersionResult',
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          SignalResource: {
            input: {
              type: 'structure',
              required: ['StackName', 'LogicalResourceId', 'UniqueId', 'Status'],
              members: {
                StackName: {},
                LogicalResourceId: {},
                UniqueId: {},
                Status: {}
              }
            }
          },
          StartResourceScan: {
            input: {
              type: 'structure',
              members: {
                ClientRequestToken: {}
              }
            },
            output: {
              resultWrapper: 'StartResourceScanResult',
              type: 'structure',
              members: {
                ResourceScanId: {}
              }
            }
          },
          StopStackSetOperation: {
            input: {
              type: 'structure',
              required: ['StackSetName', 'OperationId'],
              members: {
                StackSetName: {},
                OperationId: {},
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'StopStackSetOperationResult',
              type: 'structure',
              members: {}
            }
          },
          TestType: {
            input: {
              type: 'structure',
              members: {
                Arn: {},
                Type: {},
                TypeName: {},
                VersionId: {},
                LogDeliveryBucket: {}
              }
            },
            output: {
              resultWrapper: 'TestTypeResult',
              type: 'structure',
              members: {
                TypeVersionArn: {}
              }
            },
            idempotent: true
          },
          UpdateGeneratedTemplate: {
            input: {
              type: 'structure',
              required: ['GeneratedTemplateName'],
              members: {
                GeneratedTemplateName: {},
                NewGeneratedTemplateName: {},
                AddResources: {
                  shape: 'S2c'
                },
                RemoveResources: {
                  type: 'list',
                  member: {}
                },
                RefreshAllResources: {
                  type: 'boolean'
                },
                TemplateConfiguration: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateGeneratedTemplateResult',
              type: 'structure',
              members: {
                GeneratedTemplateId: {}
              }
            }
          },
          UpdateStack: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                TemplateBody: {},
                TemplateURL: {},
                UsePreviousTemplate: {
                  type: 'boolean'
                },
                StackPolicyDuringUpdateBody: {},
                StackPolicyDuringUpdateURL: {},
                Parameters: {
                  shape: 'S1a'
                },
                Capabilities: {
                  shape: 'S1f'
                },
                ResourceTypes: {
                  shape: 'S1h'
                },
                RoleARN: {},
                RollbackConfiguration: {
                  shape: 'S1j'
                },
                StackPolicyBody: {},
                StackPolicyURL: {},
                NotificationARNs: {
                  shape: 'S1p'
                },
                Tags: {
                  shape: 'S1r'
                },
                DisableRollback: {
                  type: 'boolean'
                },
                ClientRequestToken: {},
                RetainExceptOnCreate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateStackResult',
              type: 'structure',
              members: {
                StackId: {}
              }
            }
          },
          UpdateStackInstances: {
            input: {
              type: 'structure',
              required: ['StackSetName', 'Regions'],
              members: {
                StackSetName: {},
                Accounts: {
                  shape: 'S2v'
                },
                DeploymentTargets: {
                  shape: 'S2x'
                },
                Regions: {
                  shape: 'S32'
                },
                ParameterOverrides: {
                  shape: 'S1a'
                },
                OperationPreferences: {
                  shape: 'S34'
                },
                OperationId: {
                  idempotencyToken: true
                },
                CallAs: {}
              }
            },
            output: {
              resultWrapper: 'UpdateStackInstancesResult',
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          UpdateStackSet: {
            input: {
              type: 'structure',
              required: ['StackSetName'],
              members: {
                StackSetName: {},
                Description: {},
                TemplateBody: {},
                TemplateURL: {},
                UsePreviousTemplate: {
                  type: 'boolean'
                },
                Parameters: {
                  shape: 'S1a'
                },
                Capabilities: {
                  shape: 'S1f'
                },
                Tags: {
                  shape: 'S1r'
                },
                OperationPreferences: {
                  shape: 'S34'
                },
                AdministrationRoleARN: {},
                ExecutionRoleName: {},
                DeploymentTargets: {
                  shape: 'S2x'
                },
                PermissionModel: {},
                AutoDeployment: {
                  shape: 'S3g'
                },
                OperationId: {
                  idempotencyToken: true
                },
                Accounts: {
                  shape: 'S2v'
                },
                Regions: {
                  shape: 'S32'
                },
                CallAs: {},
                ManagedExecution: {
                  shape: 'S3j'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateStackSetResult',
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          UpdateTerminationProtection: {
            input: {
              type: 'structure',
              required: ['EnableTerminationProtection', 'StackName'],
              members: {
                EnableTerminationProtection: {
                  type: 'boolean'
                },
                StackName: {}
              }
            },
            output: {
              resultWrapper: 'UpdateTerminationProtectionResult',
              type: 'structure',
              members: {
                StackId: {}
              }
            }
          },
          ValidateTemplate: {
            input: {
              type: 'structure',
              members: {
                TemplateBody: {},
                TemplateURL: {}
              }
            },
            output: {
              resultWrapper: 'ValidateTemplateResult',
              type: 'structure',
              members: {
                Parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ParameterKey: {},
                      DefaultValue: {},
                      NoEcho: {
                        type: 'boolean'
                      },
                      Description: {}
                    }
                  }
                },
                Description: {},
                Capabilities: {
                  shape: 'S1f'
                },
                CapabilitiesReason: {},
                DeclaredTransforms: {
                  shape: 'Saq'
                }
              }
            }
          }
        },
        shapes: {
          S9: {
            type: 'structure',
            required: ['LogRoleArn', 'LogGroupName'],
            members: {
              LogRoleArn: {},
              LogGroupName: {}
            }
          },
          Si: {
            type: 'structure',
            members: {
              TypeArn: {},
              TypeConfigurationAlias: {},
              TypeConfigurationArn: {},
              Type: {},
              TypeName: {}
            }
          },
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ParameterKey: {},
                ParameterValue: {},
                UsePreviousValue: {
                  type: 'boolean'
                },
                ResolvedValue: {}
              }
            }
          },
          S1f: {
            type: 'list',
            member: {}
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'structure',
            members: {
              RollbackTriggers: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Arn', 'Type'],
                  members: {
                    Arn: {},
                    Type: {}
                  }
                }
              },
              MonitoringTimeInMinutes: {
                type: 'integer'
              }
            }
          },
          S1p: {
            type: 'list',
            member: {}
          },
          S1r: {
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
          S22: {
            type: 'map',
            key: {},
            value: {}
          },
          S2c: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ResourceType', 'ResourceIdentifier'],
              members: {
                ResourceType: {},
                LogicalResourceId: {},
                ResourceIdentifier: {
                  shape: 'S22'
                }
              }
            }
          },
          S2f: {
            type: 'structure',
            members: {
              DeletionPolicy: {},
              UpdateReplacePolicy: {}
            }
          },
          S2v: {
            type: 'list',
            member: {}
          },
          S2x: {
            type: 'structure',
            members: {
              Accounts: {
                shape: 'S2v'
              },
              AccountsUrl: {},
              OrganizationalUnitIds: {
                shape: 'S2z'
              },
              AccountFilterType: {}
            }
          },
          S2z: {
            type: 'list',
            member: {}
          },
          S32: {
            type: 'list',
            member: {}
          },
          S34: {
            type: 'structure',
            members: {
              RegionConcurrencyType: {},
              RegionOrder: {
                shape: 'S32'
              },
              FailureToleranceCount: {
                type: 'integer'
              },
              FailureTolerancePercentage: {
                type: 'integer'
              },
              MaxConcurrentCount: {
                type: 'integer'
              },
              MaxConcurrentPercentage: {
                type: 'integer'
              },
              ConcurrencyMode: {}
            }
          },
          S3g: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              RetainStacksOnAccountRemoval: {
                type: 'boolean'
              }
            }
          },
          S3j: {
            type: 'structure',
            members: {
              Active: {
                type: 'boolean'
              }
            }
          },
          S58: {
            type: 'structure',
            members: {
              TypeHierarchy: {},
              LogicalIdHierarchy: {}
            }
          },
          S7g: {
            type: 'structure',
            members: {
              DetailedStatus: {}
            }
          },
          S7n: {
            type: 'structure',
            required: ['StackResourceDriftStatus'],
            members: {
              StackResourceDriftStatus: {},
              LastCheckTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S7q: {
            type: 'list',
            member: {}
          },
          S7u: {
            type: 'structure',
            required: ['StackId', 'LogicalResourceId', 'ResourceType', 'StackResourceDriftStatus', 'Timestamp'],
            members: {
              StackId: {},
              LogicalResourceId: {},
              PhysicalResourceId: {},
              PhysicalResourceIdContext: {
                shape: 'S7v'
              },
              ResourceType: {},
              ExpectedProperties: {},
              ActualProperties: {},
              PropertyDifferences: {
                shape: 'S80'
              },
              StackResourceDriftStatus: {},
              Timestamp: {
                type: 'timestamp'
              },
              ModuleInfo: {
                shape: 'S58'
              }
            }
          },
          S7v: {
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
          S80: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['PropertyPath', 'ExpectedValue', 'ActualValue', 'DifferenceType'],
              members: {
                PropertyPath: {},
                ExpectedValue: {},
                ActualValue: {},
                DifferenceType: {}
              }
            }
          },
          S8d: {
            type: 'structure',
            members: {
              DriftStatus: {},
              DriftDetectionStatus: {},
              LastDriftCheckTimestamp: {
                type: 'timestamp'
              },
              TotalStackInstancesCount: {
                type: 'integer'
              },
              DriftedStackInstancesCount: {
                type: 'integer'
              },
              InSyncStackInstancesCount: {
                type: 'integer'
              },
              InProgressStackInstancesCount: {
                type: 'integer'
              },
              FailedStackInstancesCount: {
                type: 'integer'
              }
            }
          },
          S8s: {
            type: 'structure',
            members: {
              FailedStackInstancesCount: {
                type: 'integer'
              }
            }
          },
          S9s: {
            type: 'list',
            member: {}
          },
          Saq: {
            type: 'list',
            member: {}
          },
          Sbl: {
            type: 'map',
            key: {},
            value: {}
          },
          Sbq: {
            type: 'structure',
            members: {
              ResourceType: {},
              ResourceIdentifier: {
                shape: 'Sbl'
              },
              ManagedByStack: {
                type: 'boolean'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6ab75b4d51b36c63f95c76dee9ce5dd9c982a12c.js.map