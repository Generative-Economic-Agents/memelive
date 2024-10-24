System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-11-06',
          endpointPrefix: 'ssm',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'Amazon SSM',
          serviceFullName: 'Amazon Simple Systems Manager (SSM)',
          serviceId: 'SSM',
          signatureVersion: 'v4',
          targetPrefix: 'AmazonSSM',
          uid: 'ssm-2014-11-06'
        },
        operations: {
          AddTagsToResource: {
            input: {
              type: 'structure',
              required: ['ResourceType', 'ResourceId', 'Tags'],
              members: {
                ResourceType: {},
                ResourceId: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateOpsItemRelatedItem: {
            input: {
              type: 'structure',
              required: ['OpsItemId', 'AssociationType', 'ResourceType', 'ResourceUri'],
              members: {
                OpsItemId: {},
                AssociationType: {},
                ResourceType: {},
                ResourceUri: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationId: {}
              }
            }
          },
          CancelCommand: {
            input: {
              type: 'structure',
              required: ['CommandId'],
              members: {
                CommandId: {},
                InstanceIds: {
                  shape: 'Si'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelMaintenanceWindowExecution: {
            input: {
              type: 'structure',
              required: ['WindowExecutionId'],
              members: {
                WindowExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowExecutionId: {}
              }
            }
          },
          CreateActivation: {
            input: {
              type: 'structure',
              required: ['IamRole'],
              members: {
                Description: {},
                DefaultInstanceName: {},
                IamRole: {},
                RegistrationLimit: {
                  type: 'integer'
                },
                ExpirationDate: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'S4'
                },
                RegistrationMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Value'],
                    members: {
                      Key: {},
                      Value: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ActivationId: {},
                ActivationCode: {}
              }
            }
          },
          CreateAssociation: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                DocumentVersion: {},
                InstanceId: {},
                Parameters: {
                  shape: 'S14'
                },
                Targets: {
                  shape: 'S18'
                },
                ScheduleExpression: {},
                OutputLocation: {
                  shape: 'S1e'
                },
                AssociationName: {},
                AutomationTargetParameterName: {},
                MaxErrors: {},
                MaxConcurrency: {},
                ComplianceSeverity: {},
                SyncCompliance: {},
                ApplyOnlyAtCronInterval: {
                  type: 'boolean'
                },
                CalendarNames: {
                  shape: 'S1q'
                },
                TargetLocations: {
                  shape: 'S1s'
                },
                ScheduleOffset: {
                  type: 'integer'
                },
                Duration: {
                  type: 'integer'
                },
                TargetMaps: {
                  shape: 'S26'
                },
                Tags: {
                  shape: 'S4'
                },
                AlarmConfiguration: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationDescription: {
                  shape: 'S2c'
                }
              }
            }
          },
          CreateAssociationBatch: {
            input: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    shape: 'S2t'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Successful: {
                  type: 'list',
                  member: {
                    shape: 'S2c'
                  }
                },
                Failed: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Entry: {
                        shape: 'S2t'
                      },
                      Message: {},
                      Fault: {}
                    }
                  }
                }
              }
            }
          },
          CreateDocument: {
            input: {
              type: 'structure',
              required: ['Content', 'Name'],
              members: {
                Content: {},
                Requires: {
                  shape: 'S32'
                },
                Attachments: {
                  shape: 'S36'
                },
                Name: {},
                DisplayName: {},
                VersionName: {},
                DocumentType: {},
                DocumentFormat: {},
                TargetType: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentDescription: {
                  shape: 'S3i'
                }
              }
            }
          },
          CreateMaintenanceWindow: {
            input: {
              type: 'structure',
              required: ['Name', 'Schedule', 'Duration', 'Cutoff', 'AllowUnassociatedTargets'],
              members: {
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                StartDate: {},
                EndDate: {},
                Schedule: {},
                ScheduleTimezone: {},
                ScheduleOffset: {
                  type: 'integer'
                },
                Duration: {
                  type: 'integer'
                },
                Cutoff: {
                  type: 'integer'
                },
                AllowUnassociatedTargets: {
                  type: 'boolean'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {}
              }
            }
          },
          CreateOpsItem: {
            input: {
              type: 'structure',
              required: ['Description', 'Source', 'Title'],
              members: {
                Description: {},
                OpsItemType: {},
                OperationalData: {
                  shape: 'S4q'
                },
                Notifications: {
                  shape: 'S4v'
                },
                Priority: {
                  type: 'integer'
                },
                RelatedOpsItems: {
                  shape: 'S4z'
                },
                Source: {},
                Title: {},
                Tags: {
                  shape: 'S4'
                },
                Category: {},
                Severity: {},
                ActualStartTime: {
                  type: 'timestamp'
                },
                ActualEndTime: {
                  type: 'timestamp'
                },
                PlannedStartTime: {
                  type: 'timestamp'
                },
                PlannedEndTime: {
                  type: 'timestamp'
                },
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OpsItemId: {},
                OpsItemArn: {}
              }
            }
          },
          CreateOpsMetadata: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {},
                Metadata: {
                  shape: 'S5a'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OpsMetadataArn: {}
              }
            }
          },
          CreatePatchBaseline: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                OperatingSystem: {},
                Name: {},
                GlobalFilters: {
                  shape: 'S5j'
                },
                ApprovalRules: {
                  shape: 'S5p'
                },
                ApprovedPatches: {
                  shape: 'S5v'
                },
                ApprovedPatchesComplianceLevel: {},
                ApprovedPatchesEnableNonSecurity: {
                  type: 'boolean'
                },
                RejectedPatches: {
                  shape: 'S5v'
                },
                RejectedPatchesAction: {},
                Description: {},
                Sources: {
                  shape: 'S5z'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {}
              }
            }
          },
          CreateResourceDataSync: {
            input: {
              type: 'structure',
              required: ['SyncName'],
              members: {
                SyncName: {},
                S3Destination: {
                  shape: 'S69'
                },
                SyncType: {},
                SyncSource: {
                  shape: 'S6i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteActivation: {
            input: {
              type: 'structure',
              required: ['ActivationId'],
              members: {
                ActivationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAssociation: {
            input: {
              type: 'structure',
              members: {
                Name: {},
                InstanceId: {},
                AssociationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDocument: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                DocumentVersion: {},
                VersionName: {},
                Force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInventory: {
            input: {
              type: 'structure',
              required: ['TypeName'],
              members: {
                TypeName: {},
                SchemaDeleteOption: {},
                DryRun: {
                  type: 'boolean'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeletionId: {},
                TypeName: {},
                DeletionSummary: {
                  shape: 'S76'
                }
              }
            }
          },
          DeleteMaintenanceWindow: {
            input: {
              type: 'structure',
              required: ['WindowId'],
              members: {
                WindowId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {}
              }
            }
          },
          DeleteOpsItem: {
            input: {
              type: 'structure',
              required: ['OpsItemId'],
              members: {
                OpsItemId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteOpsMetadata: {
            input: {
              type: 'structure',
              required: ['OpsMetadataArn'],
              members: {
                OpsMetadataArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteParameter: {
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
          DeleteParameters: {
            input: {
              type: 'structure',
              required: ['Names'],
              members: {
                Names: {
                  shape: 'S7n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeletedParameters: {
                  shape: 'S7n'
                },
                InvalidParameters: {
                  shape: 'S7n'
                }
              }
            }
          },
          DeletePatchBaseline: {
            input: {
              type: 'structure',
              required: ['BaselineId'],
              members: {
                BaselineId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {}
              }
            }
          },
          DeleteResourceDataSync: {
            input: {
              type: 'structure',
              required: ['SyncName'],
              members: {
                SyncName: {},
                SyncType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'PolicyId', 'PolicyHash'],
              members: {
                ResourceArn: {},
                PolicyId: {},
                PolicyHash: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterManagedInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterPatchBaselineForPatchGroup: {
            input: {
              type: 'structure',
              required: ['BaselineId', 'PatchGroup'],
              members: {
                BaselineId: {},
                PatchGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {},
                PatchGroup: {}
              }
            }
          },
          DeregisterTargetFromMaintenanceWindow: {
            input: {
              type: 'structure',
              required: ['WindowId', 'WindowTargetId'],
              members: {
                WindowId: {},
                WindowTargetId: {},
                Safe: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {},
                WindowTargetId: {}
              }
            }
          },
          DeregisterTaskFromMaintenanceWindow: {
            input: {
              type: 'structure',
              required: ['WindowId', 'WindowTaskId'],
              members: {
                WindowId: {},
                WindowTaskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {},
                WindowTaskId: {}
              }
            }
          },
          DescribeActivations: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FilterKey: {},
                      FilterValues: {
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
                ActivationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ActivationId: {},
                      Description: {},
                      DefaultInstanceName: {},
                      IamRole: {},
                      RegistrationLimit: {
                        type: 'integer'
                      },
                      RegistrationsCount: {
                        type: 'integer'
                      },
                      ExpirationDate: {
                        type: 'timestamp'
                      },
                      Expired: {
                        type: 'boolean'
                      },
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      Tags: {
                        shape: 'S4'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAssociation: {
            input: {
              type: 'structure',
              members: {
                Name: {},
                InstanceId: {},
                AssociationId: {},
                AssociationVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationDescription: {
                  shape: 'S2c'
                }
              }
            }
          },
          DescribeAssociationExecutionTargets: {
            input: {
              type: 'structure',
              required: ['AssociationId', 'ExecutionId'],
              members: {
                AssociationId: {},
                ExecutionId: {},
                Filters: {
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
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationExecutionTargets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssociationId: {},
                      AssociationVersion: {},
                      ExecutionId: {},
                      ResourceId: {},
                      ResourceType: {},
                      Status: {},
                      DetailedStatus: {},
                      LastExecutionDate: {
                        type: 'timestamp'
                      },
                      OutputSource: {
                        type: 'structure',
                        members: {
                          OutputSourceId: {},
                          OutputSourceType: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAssociationExecutions: {
            input: {
              type: 'structure',
              required: ['AssociationId'],
              members: {
                AssociationId: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Value', 'Type'],
                    members: {
                      Key: {},
                      Value: {},
                      Type: {}
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
                AssociationExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssociationId: {},
                      AssociationVersion: {},
                      ExecutionId: {},
                      Status: {},
                      DetailedStatus: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastExecutionDate: {
                        type: 'timestamp'
                      },
                      ResourceCountByStatus: {},
                      AlarmConfiguration: {
                        shape: 'S1z'
                      },
                      TriggeredAlarms: {
                        shape: 'S2o'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAutomationExecutions: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values'],
                    members: {
                      Key: {},
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
                AutomationExecutionMetadataList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AutomationExecutionId: {},
                      DocumentName: {},
                      DocumentVersion: {},
                      AutomationExecutionStatus: {},
                      ExecutionStartTime: {
                        type: 'timestamp'
                      },
                      ExecutionEndTime: {
                        type: 'timestamp'
                      },
                      ExecutedBy: {},
                      LogFile: {},
                      Outputs: {
                        shape: 'S9n'
                      },
                      Mode: {},
                      ParentAutomationExecutionId: {},
                      CurrentStepName: {},
                      CurrentAction: {},
                      FailureMessage: {},
                      TargetParameterName: {},
                      Targets: {
                        shape: 'S18'
                      },
                      TargetMaps: {
                        shape: 'S26'
                      },
                      ResolvedTargets: {
                        shape: 'S9s'
                      },
                      MaxConcurrency: {},
                      MaxErrors: {},
                      Target: {},
                      AutomationType: {},
                      AlarmConfiguration: {
                        shape: 'S1z'
                      },
                      TriggeredAlarms: {
                        shape: 'S2o'
                      },
                      AutomationSubtype: {},
                      ScheduledTime: {
                        type: 'timestamp'
                      },
                      Runbooks: {
                        shape: 'S9w'
                      },
                      OpsItemId: {},
                      AssociationId: {},
                      ChangeRequestName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAutomationStepExecutions: {
            input: {
              type: 'structure',
              required: ['AutomationExecutionId'],
              members: {
                AutomationExecutionId: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values'],
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ReverseOrder: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StepExecutions: {
                  shape: 'Sa6'
                },
                NextToken: {}
              }
            }
          },
          DescribeAvailablePatches: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sah'
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
                Patches: {
                  type: 'list',
                  member: {
                    shape: 'Sap'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeDocument: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                DocumentVersion: {},
                VersionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Document: {
                  shape: 'S3i'
                }
              }
            }
          },
          DescribeDocumentPermission: {
            input: {
              type: 'structure',
              required: ['Name', 'PermissionType'],
              members: {
                Name: {},
                PermissionType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountIds: {
                  shape: 'Sbk'
                },
                AccountSharingInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      SharedDocumentVersion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeEffectiveInstanceAssociations: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
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
                    type: 'structure',
                    members: {
                      AssociationId: {},
                      InstanceId: {},
                      Content: {},
                      AssociationVersion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeEffectivePatchesForPatchBaseline: {
            input: {
              type: 'structure',
              required: ['BaselineId'],
              members: {
                BaselineId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EffectivePatches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Patch: {
                        shape: 'Sap'
                      },
                      PatchStatus: {
                        type: 'structure',
                        members: {
                          DeploymentStatus: {},
                          ComplianceLevel: {},
                          ApprovalDate: {
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
          DescribeInstanceAssociationsStatus: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceAssociationStatusInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssociationId: {},
                      Name: {},
                      DocumentVersion: {},
                      AssociationVersion: {},
                      InstanceId: {},
                      ExecutionDate: {
                        type: 'timestamp'
                      },
                      Status: {},
                      DetailedStatus: {},
                      ExecutionSummary: {},
                      ErrorCode: {},
                      OutputUrl: {
                        type: 'structure',
                        members: {
                          S3OutputUrl: {
                            type: 'structure',
                            members: {
                              OutputUrl: {}
                            }
                          }
                        }
                      },
                      AssociationName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInstanceInformation: {
            input: {
              type: 'structure',
              members: {
                InstanceInformationFilterList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['key', 'valueSet'],
                    members: {
                      key: {},
                      valueSet: {
                        shape: 'Scd'
                      }
                    }
                  }
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values'],
                    members: {
                      Key: {},
                      Values: {
                        shape: 'Scd'
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
                InstanceInformationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InstanceId: {},
                      PingStatus: {},
                      LastPingDateTime: {
                        type: 'timestamp'
                      },
                      AgentVersion: {},
                      IsLatestVersion: {
                        type: 'boolean'
                      },
                      PlatformType: {},
                      PlatformName: {},
                      PlatformVersion: {},
                      ActivationId: {},
                      IamRole: {},
                      RegistrationDate: {
                        type: 'timestamp'
                      },
                      ResourceType: {},
                      Name: {},
                      IPAddress: {},
                      ComputerName: {},
                      AssociationStatus: {},
                      LastAssociationExecutionDate: {
                        type: 'timestamp'
                      },
                      LastSuccessfulAssociationExecutionDate: {
                        type: 'timestamp'
                      },
                      AssociationOverview: {
                        shape: 'Scr'
                      },
                      SourceId: {},
                      SourceType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInstancePatchStates: {
            input: {
              type: 'structure',
              required: ['InstanceIds'],
              members: {
                InstanceIds: {
                  shape: 'Si'
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
                InstancePatchStates: {
                  type: 'list',
                  member: {
                    shape: 'Scz'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInstancePatchStatesForPatchGroup: {
            input: {
              type: 'structure',
              required: ['PatchGroup'],
              members: {
                PatchGroup: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values', 'Type'],
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      },
                      Type: {}
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
              type: 'structure',
              members: {
                InstancePatchStates: {
                  type: 'list',
                  member: {
                    shape: 'Scz'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInstancePatches: {
            input: {
              type: 'structure',
              required: ['InstanceId'],
              members: {
                InstanceId: {},
                Filters: {
                  shape: 'Sah'
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
                Patches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Title', 'KBId', 'Classification', 'Severity', 'State', 'InstalledTime'],
                    members: {
                      Title: {},
                      KBId: {},
                      Classification: {},
                      Severity: {},
                      State: {},
                      InstalledTime: {
                        type: 'timestamp'
                      },
                      CVEIds: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInstanceProperties: {
            input: {
              type: 'structure',
              members: {
                InstancePropertyFilterList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['key', 'valueSet'],
                    members: {
                      key: {},
                      valueSet: {
                        shape: 'Sdz'
                      }
                    }
                  }
                },
                FiltersWithOperator: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values'],
                    members: {
                      Key: {},
                      Values: {
                        shape: 'Sdz'
                      },
                      Operator: {}
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
                InstanceProperties: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      InstanceId: {},
                      InstanceType: {},
                      InstanceRole: {},
                      KeyName: {},
                      InstanceState: {},
                      Architecture: {},
                      IPAddress: {},
                      LaunchTime: {
                        type: 'timestamp'
                      },
                      PingStatus: {},
                      LastPingDateTime: {
                        type: 'timestamp'
                      },
                      AgentVersion: {},
                      PlatformType: {},
                      PlatformName: {},
                      PlatformVersion: {},
                      ActivationId: {},
                      IamRole: {},
                      RegistrationDate: {
                        type: 'timestamp'
                      },
                      ResourceType: {},
                      ComputerName: {},
                      AssociationStatus: {},
                      LastAssociationExecutionDate: {
                        type: 'timestamp'
                      },
                      LastSuccessfulAssociationExecutionDate: {
                        type: 'timestamp'
                      },
                      AssociationOverview: {
                        shape: 'Scr'
                      },
                      SourceId: {},
                      SourceType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInventoryDeletions: {
            input: {
              type: 'structure',
              members: {
                DeletionId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InventoryDeletions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DeletionId: {},
                      TypeName: {},
                      DeletionStartTime: {
                        type: 'timestamp'
                      },
                      LastStatus: {},
                      LastStatusMessage: {},
                      DeletionSummary: {
                        shape: 'S76'
                      },
                      LastStatusUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMaintenanceWindowExecutionTaskInvocations: {
            input: {
              type: 'structure',
              required: ['WindowExecutionId', 'TaskId'],
              members: {
                WindowExecutionId: {},
                TaskId: {},
                Filters: {
                  shape: 'Ser'
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
                WindowExecutionTaskInvocationIdentities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WindowExecutionId: {},
                      TaskExecutionId: {},
                      InvocationId: {},
                      ExecutionId: {},
                      TaskType: {},
                      Parameters: {
                        shape: 'Sf3'
                      },
                      Status: {},
                      StatusDetails: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      OwnerInformation: {
                        shape: 'Sd2'
                      },
                      WindowTargetId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMaintenanceWindowExecutionTasks: {
            input: {
              type: 'structure',
              required: ['WindowExecutionId'],
              members: {
                WindowExecutionId: {},
                Filters: {
                  shape: 'Ser'
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
                WindowExecutionTaskIdentities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WindowExecutionId: {},
                      TaskExecutionId: {},
                      Status: {},
                      StatusDetails: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      TaskArn: {},
                      TaskType: {},
                      AlarmConfiguration: {
                        shape: 'S1z'
                      },
                      TriggeredAlarms: {
                        shape: 'S2o'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMaintenanceWindowExecutions: {
            input: {
              type: 'structure',
              required: ['WindowId'],
              members: {
                WindowId: {},
                Filters: {
                  shape: 'Ser'
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
                WindowExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WindowId: {},
                      WindowExecutionId: {},
                      Status: {},
                      StatusDetails: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMaintenanceWindowSchedule: {
            input: {
              type: 'structure',
              members: {
                WindowId: {},
                Targets: {
                  shape: 'S18'
                },
                ResourceType: {},
                Filters: {
                  shape: 'Sah'
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
                ScheduledWindowExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WindowId: {},
                      Name: {},
                      ExecutionTime: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMaintenanceWindowTargets: {
            input: {
              type: 'structure',
              required: ['WindowId'],
              members: {
                WindowId: {},
                Filters: {
                  shape: 'Ser'
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
                Targets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WindowId: {},
                      WindowTargetId: {},
                      ResourceType: {},
                      Targets: {
                        shape: 'S18'
                      },
                      OwnerInformation: {
                        shape: 'Sd2'
                      },
                      Name: {},
                      Description: {
                        shape: 'S4c'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMaintenanceWindowTasks: {
            input: {
              type: 'structure',
              required: ['WindowId'],
              members: {
                WindowId: {},
                Filters: {
                  shape: 'Ser'
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
                Tasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WindowId: {},
                      WindowTaskId: {},
                      TaskArn: {},
                      Type: {},
                      Targets: {
                        shape: 'S18'
                      },
                      TaskParameters: {
                        shape: 'Sfu'
                      },
                      Priority: {
                        type: 'integer'
                      },
                      LoggingInfo: {
                        shape: 'Sg0'
                      },
                      ServiceRoleArn: {},
                      MaxConcurrency: {},
                      MaxErrors: {},
                      Name: {},
                      Description: {
                        shape: 'S4c'
                      },
                      CutoffBehavior: {},
                      AlarmConfiguration: {
                        shape: 'S1z'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMaintenanceWindows: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Ser'
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
                WindowIdentities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WindowId: {},
                      Name: {},
                      Description: {
                        shape: 'S4c'
                      },
                      Enabled: {
                        type: 'boolean'
                      },
                      Duration: {
                        type: 'integer'
                      },
                      Cutoff: {
                        type: 'integer'
                      },
                      Schedule: {},
                      ScheduleTimezone: {},
                      ScheduleOffset: {
                        type: 'integer'
                      },
                      EndDate: {},
                      StartDate: {},
                      NextExecutionTime: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeMaintenanceWindowsForTarget: {
            input: {
              type: 'structure',
              required: ['Targets', 'ResourceType'],
              members: {
                Targets: {
                  shape: 'S18'
                },
                ResourceType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowIdentities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WindowId: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeOpsItems: {
            input: {
              type: 'structure',
              members: {
                OpsItemFilters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values', 'Operator'],
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      },
                      Operator: {}
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
                NextToken: {},
                OpsItemSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedBy: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedBy: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      },
                      Priority: {
                        type: 'integer'
                      },
                      Source: {},
                      Status: {},
                      OpsItemId: {},
                      Title: {},
                      OperationalData: {
                        shape: 'S4q'
                      },
                      Category: {},
                      Severity: {},
                      OpsItemType: {},
                      ActualStartTime: {
                        type: 'timestamp'
                      },
                      ActualEndTime: {
                        type: 'timestamp'
                      },
                      PlannedStartTime: {
                        type: 'timestamp'
                      },
                      PlannedEndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeParameters: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values'],
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                ParameterFilters: {
                  shape: 'Sgu'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Shared: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      ARN: {},
                      Type: {},
                      KeyId: {},
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      LastModifiedUser: {},
                      Description: {},
                      AllowedPattern: {},
                      Version: {
                        type: 'long'
                      },
                      Tier: {},
                      Policies: {
                        shape: 'Sh9'
                      },
                      DataType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePatchBaselines: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sah'
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
                BaselineIdentities: {
                  type: 'list',
                  member: {
                    shape: 'Shf'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePatchGroupState: {
            input: {
              type: 'structure',
              required: ['PatchGroup'],
              members: {
                PatchGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Instances: {
                  type: 'integer'
                },
                InstancesWithInstalledPatches: {
                  type: 'integer'
                },
                InstancesWithInstalledOtherPatches: {
                  type: 'integer'
                },
                InstancesWithInstalledPendingRebootPatches: {
                  type: 'integer'
                },
                InstancesWithInstalledRejectedPatches: {
                  type: 'integer'
                },
                InstancesWithMissingPatches: {
                  type: 'integer'
                },
                InstancesWithFailedPatches: {
                  type: 'integer'
                },
                InstancesWithNotApplicablePatches: {
                  type: 'integer'
                },
                InstancesWithUnreportedNotApplicablePatches: {
                  type: 'integer'
                },
                InstancesWithCriticalNonCompliantPatches: {
                  type: 'integer'
                },
                InstancesWithSecurityNonCompliantPatches: {
                  type: 'integer'
                },
                InstancesWithOtherNonCompliantPatches: {
                  type: 'integer'
                }
              }
            }
          },
          DescribePatchGroups: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'Sah'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Mappings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PatchGroup: {},
                      BaselineIdentity: {
                        shape: 'Shf'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePatchProperties: {
            input: {
              type: 'structure',
              required: ['OperatingSystem', 'Property'],
              members: {
                OperatingSystem: {},
                Property: {},
                PatchSet: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Properties: {
                  type: 'list',
                  member: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSessions: {
            input: {
              type: 'structure',
              required: ['State'],
              members: {
                State: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['key', 'value'],
                    members: {
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Sessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SessionId: {},
                      Target: {},
                      Status: {},
                      StartDate: {
                        type: 'timestamp'
                      },
                      EndDate: {
                        type: 'timestamp'
                      },
                      DocumentName: {},
                      Owner: {},
                      Reason: {},
                      Details: {},
                      OutputUrl: {
                        type: 'structure',
                        members: {
                          S3OutputUrl: {},
                          CloudWatchOutputUrl: {}
                        }
                      },
                      MaxSessionDuration: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DisassociateOpsItemRelatedItem: {
            input: {
              type: 'structure',
              required: ['OpsItemId', 'AssociationId'],
              members: {
                OpsItemId: {},
                AssociationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAutomationExecution: {
            input: {
              type: 'structure',
              required: ['AutomationExecutionId'],
              members: {
                AutomationExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AutomationExecution: {
                  type: 'structure',
                  members: {
                    AutomationExecutionId: {},
                    DocumentName: {},
                    DocumentVersion: {},
                    ExecutionStartTime: {
                      type: 'timestamp'
                    },
                    ExecutionEndTime: {
                      type: 'timestamp'
                    },
                    AutomationExecutionStatus: {},
                    StepExecutions: {
                      shape: 'Sa6'
                    },
                    StepExecutionsTruncated: {
                      type: 'boolean'
                    },
                    Parameters: {
                      shape: 'S9n'
                    },
                    Outputs: {
                      shape: 'S9n'
                    },
                    FailureMessage: {},
                    Mode: {},
                    ParentAutomationExecutionId: {},
                    ExecutedBy: {},
                    CurrentStepName: {},
                    CurrentAction: {},
                    TargetParameterName: {},
                    Targets: {
                      shape: 'S18'
                    },
                    TargetMaps: {
                      shape: 'S26'
                    },
                    ResolvedTargets: {
                      shape: 'S9s'
                    },
                    MaxConcurrency: {},
                    MaxErrors: {},
                    Target: {},
                    TargetLocations: {
                      shape: 'S1s'
                    },
                    ProgressCounters: {
                      type: 'structure',
                      members: {
                        TotalSteps: {
                          type: 'integer'
                        },
                        SuccessSteps: {
                          type: 'integer'
                        },
                        FailedSteps: {
                          type: 'integer'
                        },
                        CancelledSteps: {
                          type: 'integer'
                        },
                        TimedOutSteps: {
                          type: 'integer'
                        }
                      }
                    },
                    AlarmConfiguration: {
                      shape: 'S1z'
                    },
                    TriggeredAlarms: {
                      shape: 'S2o'
                    },
                    AutomationSubtype: {},
                    ScheduledTime: {
                      type: 'timestamp'
                    },
                    Runbooks: {
                      shape: 'S9w'
                    },
                    OpsItemId: {},
                    AssociationId: {},
                    ChangeRequestName: {},
                    Variables: {
                      shape: 'S9n'
                    }
                  }
                }
              }
            }
          },
          GetCalendarState: {
            input: {
              type: 'structure',
              required: ['CalendarNames'],
              members: {
                CalendarNames: {
                  shape: 'S1q'
                },
                AtTime: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                State: {},
                AtTime: {},
                NextTransitionTime: {}
              }
            }
          },
          GetCommandInvocation: {
            input: {
              type: 'structure',
              required: ['CommandId', 'InstanceId'],
              members: {
                CommandId: {},
                InstanceId: {},
                PluginName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CommandId: {},
                InstanceId: {},
                Comment: {},
                DocumentName: {},
                DocumentVersion: {},
                PluginName: {},
                ResponseCode: {
                  type: 'integer'
                },
                ExecutionStartDateTime: {},
                ExecutionElapsedTime: {},
                ExecutionEndDateTime: {},
                Status: {},
                StatusDetails: {},
                StandardOutputContent: {},
                StandardOutputUrl: {},
                StandardErrorContent: {},
                StandardErrorUrl: {},
                CloudWatchOutputConfig: {
                  shape: 'Sj0'
                }
              }
            }
          },
          GetConnectionStatus: {
            input: {
              type: 'structure',
              required: ['Target'],
              members: {
                Target: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Target: {},
                Status: {}
              }
            }
          },
          GetDefaultPatchBaseline: {
            input: {
              type: 'structure',
              members: {
                OperatingSystem: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {},
                OperatingSystem: {}
              }
            }
          },
          GetDeployablePatchSnapshotForInstance: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'SnapshotId'],
              members: {
                InstanceId: {},
                SnapshotId: {},
                BaselineOverride: {
                  type: 'structure',
                  members: {
                    OperatingSystem: {},
                    GlobalFilters: {
                      shape: 'S5j'
                    },
                    ApprovalRules: {
                      shape: 'S5p'
                    },
                    ApprovedPatches: {
                      shape: 'S5v'
                    },
                    ApprovedPatchesComplianceLevel: {},
                    RejectedPatches: {
                      shape: 'S5v'
                    },
                    RejectedPatchesAction: {},
                    ApprovedPatchesEnableNonSecurity: {
                      type: 'boolean'
                    },
                    Sources: {
                      shape: 'S5z'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceId: {},
                SnapshotId: {},
                SnapshotDownloadUrl: {},
                Product: {}
              }
            }
          },
          GetDocument: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                VersionName: {},
                DocumentVersion: {},
                DocumentFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                CreatedDate: {
                  type: 'timestamp'
                },
                DisplayName: {},
                VersionName: {},
                DocumentVersion: {},
                Status: {},
                StatusInformation: {},
                Content: {},
                DocumentType: {},
                DocumentFormat: {},
                Requires: {
                  shape: 'S32'
                },
                AttachmentsContent: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Size: {
                        type: 'long'
                      },
                      Hash: {},
                      HashType: {},
                      Url: {}
                    }
                  }
                },
                ReviewStatus: {}
              }
            }
          },
          GetInventory: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sjm'
                },
                Aggregators: {
                  shape: 'Sjs'
                },
                ResultAttributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TypeName'],
                    members: {
                      TypeName: {}
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
              type: 'structure',
              members: {
                Entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Data: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'structure',
                          required: ['TypeName', 'SchemaVersion', 'Content'],
                          members: {
                            TypeName: {},
                            SchemaVersion: {},
                            CaptureTime: {},
                            ContentHash: {},
                            Content: {
                              shape: 'Sk9'
                            }
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
          GetInventorySchema: {
            input: {
              type: 'structure',
              members: {
                TypeName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Aggregator: {
                  type: 'boolean'
                },
                SubType: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Schemas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TypeName', 'Attributes'],
                    members: {
                      TypeName: {},
                      Version: {},
                      Attributes: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Name', 'DataType'],
                          members: {
                            Name: {},
                            DataType: {}
                          }
                        }
                      },
                      DisplayName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetMaintenanceWindow: {
            input: {
              type: 'structure',
              required: ['WindowId'],
              members: {
                WindowId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {},
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                StartDate: {},
                EndDate: {},
                Schedule: {},
                ScheduleTimezone: {},
                ScheduleOffset: {
                  type: 'integer'
                },
                NextExecutionTime: {},
                Duration: {
                  type: 'integer'
                },
                Cutoff: {
                  type: 'integer'
                },
                AllowUnassociatedTargets: {
                  type: 'boolean'
                },
                Enabled: {
                  type: 'boolean'
                },
                CreatedDate: {
                  type: 'timestamp'
                },
                ModifiedDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetMaintenanceWindowExecution: {
            input: {
              type: 'structure',
              required: ['WindowExecutionId'],
              members: {
                WindowExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowExecutionId: {},
                TaskIds: {
                  type: 'list',
                  member: {}
                },
                Status: {},
                StatusDetails: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetMaintenanceWindowExecutionTask: {
            input: {
              type: 'structure',
              required: ['WindowExecutionId', 'TaskId'],
              members: {
                WindowExecutionId: {},
                TaskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowExecutionId: {},
                TaskExecutionId: {},
                TaskArn: {},
                ServiceRole: {},
                Type: {},
                TaskParameters: {
                  type: 'list',
                  member: {
                    shape: 'Sfu'
                  },
                  sensitive: true
                },
                Priority: {
                  type: 'integer'
                },
                MaxConcurrency: {},
                MaxErrors: {},
                Status: {},
                StatusDetails: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                AlarmConfiguration: {
                  shape: 'S1z'
                },
                TriggeredAlarms: {
                  shape: 'S2o'
                }
              }
            }
          },
          GetMaintenanceWindowExecutionTaskInvocation: {
            input: {
              type: 'structure',
              required: ['WindowExecutionId', 'TaskId', 'InvocationId'],
              members: {
                WindowExecutionId: {},
                TaskId: {},
                InvocationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowExecutionId: {},
                TaskExecutionId: {},
                InvocationId: {},
                ExecutionId: {},
                TaskType: {},
                Parameters: {
                  shape: 'Sf3'
                },
                Status: {},
                StatusDetails: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                OwnerInformation: {
                  shape: 'Sd2'
                },
                WindowTargetId: {}
              }
            }
          },
          GetMaintenanceWindowTask: {
            input: {
              type: 'structure',
              required: ['WindowId', 'WindowTaskId'],
              members: {
                WindowId: {},
                WindowTaskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {},
                WindowTaskId: {},
                Targets: {
                  shape: 'S18'
                },
                TaskArn: {},
                ServiceRoleArn: {},
                TaskType: {},
                TaskParameters: {
                  shape: 'Sfu'
                },
                TaskInvocationParameters: {
                  shape: 'Sl0'
                },
                Priority: {
                  type: 'integer'
                },
                MaxConcurrency: {},
                MaxErrors: {},
                LoggingInfo: {
                  shape: 'Sg0'
                },
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                CutoffBehavior: {},
                AlarmConfiguration: {
                  shape: 'S1z'
                }
              }
            }
          },
          GetOpsItem: {
            input: {
              type: 'structure',
              required: ['OpsItemId'],
              members: {
                OpsItemId: {},
                OpsItemArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OpsItem: {
                  type: 'structure',
                  members: {
                    CreatedBy: {},
                    OpsItemType: {},
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    Description: {},
                    LastModifiedBy: {},
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    Notifications: {
                      shape: 'S4v'
                    },
                    Priority: {
                      type: 'integer'
                    },
                    RelatedOpsItems: {
                      shape: 'S4z'
                    },
                    Status: {},
                    OpsItemId: {},
                    Version: {},
                    Title: {},
                    Source: {},
                    OperationalData: {
                      shape: 'S4q'
                    },
                    Category: {},
                    Severity: {},
                    ActualStartTime: {
                      type: 'timestamp'
                    },
                    ActualEndTime: {
                      type: 'timestamp'
                    },
                    PlannedStartTime: {
                      type: 'timestamp'
                    },
                    PlannedEndTime: {
                      type: 'timestamp'
                    },
                    OpsItemArn: {}
                  }
                }
              }
            }
          },
          GetOpsMetadata: {
            input: {
              type: 'structure',
              required: ['OpsMetadataArn'],
              members: {
                OpsMetadataArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceId: {},
                Metadata: {
                  shape: 'S5a'
                },
                NextToken: {}
              }
            }
          },
          GetOpsSummary: {
            input: {
              type: 'structure',
              members: {
                SyncName: {},
                Filters: {
                  shape: 'Sln'
                },
                Aggregators: {
                  shape: 'Slt'
                },
                ResultAttributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TypeName'],
                    members: {
                      TypeName: {}
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
              type: 'structure',
              members: {
                Entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Data: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'structure',
                          members: {
                            CaptureTime: {},
                            Content: {
                              type: 'list',
                              member: {
                                type: 'map',
                                key: {},
                                value: {}
                              }
                            }
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
          GetParameter: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                WithDecryption: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Parameter: {
                  shape: 'Smf'
                }
              }
            }
          },
          GetParameterHistory: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                WithDecryption: {
                  type: 'boolean'
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
                Parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Type: {},
                      KeyId: {},
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      LastModifiedUser: {},
                      Description: {},
                      Value: {
                        shape: 'Smg'
                      },
                      AllowedPattern: {},
                      Version: {
                        type: 'long'
                      },
                      Labels: {
                        shape: 'Smm'
                      },
                      Tier: {},
                      Policies: {
                        shape: 'Sh9'
                      },
                      DataType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetParameters: {
            input: {
              type: 'structure',
              required: ['Names'],
              members: {
                Names: {
                  shape: 'S7n'
                },
                WithDecryption: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Parameters: {
                  shape: 'Smq'
                },
                InvalidParameters: {
                  shape: 'S7n'
                }
              }
            }
          },
          GetParametersByPath: {
            input: {
              type: 'structure',
              required: ['Path'],
              members: {
                Path: {},
                Recursive: {
                  type: 'boolean'
                },
                ParameterFilters: {
                  shape: 'Sgu'
                },
                WithDecryption: {
                  type: 'boolean'
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
                Parameters: {
                  shape: 'Smq'
                },
                NextToken: {}
              }
            }
          },
          GetPatchBaseline: {
            input: {
              type: 'structure',
              required: ['BaselineId'],
              members: {
                BaselineId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {},
                Name: {},
                OperatingSystem: {},
                GlobalFilters: {
                  shape: 'S5j'
                },
                ApprovalRules: {
                  shape: 'S5p'
                },
                ApprovedPatches: {
                  shape: 'S5v'
                },
                ApprovedPatchesComplianceLevel: {},
                ApprovedPatchesEnableNonSecurity: {
                  type: 'boolean'
                },
                RejectedPatches: {
                  shape: 'S5v'
                },
                RejectedPatchesAction: {},
                PatchGroups: {
                  type: 'list',
                  member: {}
                },
                CreatedDate: {
                  type: 'timestamp'
                },
                ModifiedDate: {
                  type: 'timestamp'
                },
                Description: {},
                Sources: {
                  shape: 'S5z'
                }
              }
            }
          },
          GetPatchBaselineForPatchGroup: {
            input: {
              type: 'structure',
              required: ['PatchGroup'],
              members: {
                PatchGroup: {},
                OperatingSystem: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {},
                PatchGroup: {},
                OperatingSystem: {}
              }
            }
          },
          GetResourcePolicies: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Policies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyId: {},
                      PolicyHash: {},
                      Policy: {}
                    }
                  }
                }
              }
            }
          },
          GetServiceSetting: {
            input: {
              type: 'structure',
              required: ['SettingId'],
              members: {
                SettingId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceSetting: {
                  shape: 'Sn8'
                }
              }
            }
          },
          LabelParameterVersion: {
            input: {
              type: 'structure',
              required: ['Name', 'Labels'],
              members: {
                Name: {},
                ParameterVersion: {
                  type: 'long'
                },
                Labels: {
                  shape: 'Smm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InvalidLabels: {
                  shape: 'Smm'
                },
                ParameterVersion: {
                  type: 'long'
                }
              }
            }
          },
          ListAssociationVersions: {
            input: {
              type: 'structure',
              required: ['AssociationId'],
              members: {
                AssociationId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssociationId: {},
                      AssociationVersion: {},
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      Name: {},
                      DocumentVersion: {},
                      Parameters: {
                        shape: 'S14'
                      },
                      Targets: {
                        shape: 'S18'
                      },
                      ScheduleExpression: {},
                      OutputLocation: {
                        shape: 'S1e'
                      },
                      AssociationName: {},
                      MaxErrors: {},
                      MaxConcurrency: {},
                      ComplianceSeverity: {},
                      SyncCompliance: {},
                      ApplyOnlyAtCronInterval: {
                        type: 'boolean'
                      },
                      CalendarNames: {
                        shape: 'S1q'
                      },
                      TargetLocations: {
                        shape: 'S1s'
                      },
                      ScheduleOffset: {
                        type: 'integer'
                      },
                      Duration: {
                        type: 'integer'
                      },
                      TargetMaps: {
                        shape: 'S26'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAssociations: {
            input: {
              type: 'structure',
              members: {
                AssociationFilterList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['key', 'value'],
                    members: {
                      key: {},
                      value: {}
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
                Associations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      InstanceId: {},
                      AssociationId: {},
                      AssociationVersion: {},
                      DocumentVersion: {},
                      Targets: {
                        shape: 'S18'
                      },
                      LastExecutionDate: {
                        type: 'timestamp'
                      },
                      Overview: {
                        shape: 'S2j'
                      },
                      ScheduleExpression: {},
                      AssociationName: {},
                      ScheduleOffset: {
                        type: 'integer'
                      },
                      Duration: {
                        type: 'integer'
                      },
                      TargetMaps: {
                        shape: 'S26'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCommandInvocations: {
            input: {
              type: 'structure',
              members: {
                CommandId: {},
                InstanceId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'Snq'
                },
                Details: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CommandInvocations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CommandId: {},
                      InstanceId: {},
                      InstanceName: {},
                      Comment: {},
                      DocumentName: {},
                      DocumentVersion: {},
                      RequestedDateTime: {
                        type: 'timestamp'
                      },
                      Status: {},
                      StatusDetails: {},
                      TraceOutput: {},
                      StandardOutputUrl: {},
                      StandardErrorUrl: {},
                      CommandPlugins: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Status: {},
                            StatusDetails: {},
                            ResponseCode: {
                              type: 'integer'
                            },
                            ResponseStartDateTime: {
                              type: 'timestamp'
                            },
                            ResponseFinishDateTime: {
                              type: 'timestamp'
                            },
                            Output: {},
                            StandardOutputUrl: {},
                            StandardErrorUrl: {},
                            OutputS3Region: {},
                            OutputS3BucketName: {},
                            OutputS3KeyPrefix: {}
                          }
                        }
                      },
                      ServiceRole: {},
                      NotificationConfig: {
                        shape: 'Sl2'
                      },
                      CloudWatchOutputConfig: {
                        shape: 'Sj0'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCommands: {
            input: {
              type: 'structure',
              members: {
                CommandId: {},
                InstanceId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'Snq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Commands: {
                  type: 'list',
                  member: {
                    shape: 'So6'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListComplianceItems: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sod'
                },
                ResourceIds: {
                  type: 'list',
                  member: {}
                },
                ResourceTypes: {
                  type: 'list',
                  member: {}
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
                ComplianceItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ComplianceType: {},
                      ResourceType: {},
                      ResourceId: {},
                      Id: {},
                      Title: {},
                      Status: {},
                      Severity: {},
                      ExecutionSummary: {
                        shape: 'Sov'
                      },
                      Details: {
                        shape: 'Soy'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListComplianceSummaries: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sod'
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
                ComplianceSummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ComplianceType: {},
                      CompliantSummary: {
                        shape: 'Sp3'
                      },
                      NonCompliantSummary: {
                        shape: 'Sp6'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDocumentMetadataHistory: {
            input: {
              type: 'structure',
              required: ['Name', 'Metadata'],
              members: {
                Name: {},
                DocumentVersion: {},
                Metadata: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                DocumentVersion: {},
                Author: {},
                Metadata: {
                  type: 'structure',
                  members: {
                    ReviewerResponse: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          CreateTime: {
                            type: 'timestamp'
                          },
                          UpdatedTime: {
                            type: 'timestamp'
                          },
                          ReviewStatus: {},
                          Comment: {
                            shape: 'Spd'
                          },
                          Reviewer: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDocumentVersions: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      DisplayName: {},
                      DocumentVersion: {},
                      VersionName: {},
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      IsDefaultVersion: {
                        type: 'boolean'
                      },
                      DocumentFormat: {},
                      Status: {},
                      StatusInformation: {},
                      ReviewStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDocuments: {
            input: {
              type: 'structure',
              members: {
                DocumentFilterList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['key', 'value'],
                    members: {
                      key: {},
                      value: {}
                    }
                  }
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {},
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
                DocumentIdentifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      DisplayName: {},
                      Owner: {},
                      VersionName: {},
                      PlatformTypes: {
                        shape: 'S3w'
                      },
                      DocumentVersion: {},
                      DocumentType: {},
                      SchemaVersion: {},
                      DocumentFormat: {},
                      TargetType: {},
                      Tags: {
                        shape: 'S4'
                      },
                      Requires: {
                        shape: 'S32'
                      },
                      ReviewStatus: {},
                      Author: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInventoryEntries: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'TypeName'],
              members: {
                InstanceId: {},
                TypeName: {},
                Filters: {
                  shape: 'Sjm'
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
                TypeName: {},
                InstanceId: {},
                SchemaVersion: {},
                CaptureTime: {},
                Entries: {
                  shape: 'Sk9'
                },
                NextToken: {}
              }
            }
          },
          ListOpsItemEvents: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values', 'Operator'],
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      },
                      Operator: {}
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
                NextToken: {},
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      OpsItemId: {},
                      EventId: {},
                      Source: {},
                      DetailType: {},
                      Detail: {},
                      CreatedBy: {
                        shape: 'Sqb'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListOpsItemRelatedItems: {
            input: {
              type: 'structure',
              members: {
                OpsItemId: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values', 'Operator'],
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      },
                      Operator: {}
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
                NextToken: {},
                Summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      OpsItemId: {},
                      AssociationId: {},
                      ResourceType: {},
                      AssociationType: {},
                      ResourceUri: {},
                      CreatedBy: {
                        shape: 'Sqb'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastModifiedBy: {
                        shape: 'Sqb'
                      },
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListOpsMetadata: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key', 'Values'],
                    members: {
                      Key: {},
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
                OpsMetadataList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceId: {},
                      OpsMetadataArn: {},
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      LastModifiedUser: {},
                      CreationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceComplianceSummaries: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sod'
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
                ResourceComplianceSummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ComplianceType: {},
                      ResourceType: {},
                      ResourceId: {},
                      Status: {},
                      OverallSeverity: {},
                      ExecutionSummary: {
                        shape: 'Sov'
                      },
                      CompliantSummary: {
                        shape: 'Sp3'
                      },
                      NonCompliantSummary: {
                        shape: 'Sp6'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceDataSync: {
            input: {
              type: 'structure',
              members: {
                SyncType: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceDataSyncItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SyncName: {},
                      SyncType: {},
                      SyncSource: {
                        type: 'structure',
                        members: {
                          SourceType: {},
                          AwsOrganizationsSource: {
                            shape: 'S6k'
                          },
                          SourceRegions: {
                            shape: 'S6p'
                          },
                          IncludeFutureRegions: {
                            type: 'boolean'
                          },
                          State: {},
                          EnableAllOpsDataSources: {
                            type: 'boolean'
                          }
                        }
                      },
                      S3Destination: {
                        shape: 'S69'
                      },
                      LastSyncTime: {
                        type: 'timestamp'
                      },
                      LastSuccessfulSyncTime: {
                        type: 'timestamp'
                      },
                      SyncLastModifiedTime: {
                        type: 'timestamp'
                      },
                      LastStatus: {},
                      SyncCreatedTime: {
                        type: 'timestamp'
                      },
                      LastSyncStatusMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceType', 'ResourceId'],
              members: {
                ResourceType: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TagList: {
                  shape: 'S4'
                }
              }
            }
          },
          ModifyDocumentPermission: {
            input: {
              type: 'structure',
              required: ['Name', 'PermissionType'],
              members: {
                Name: {},
                PermissionType: {},
                AccountIdsToAdd: {
                  shape: 'Sbk'
                },
                AccountIdsToRemove: {
                  shape: 'Sbk'
                },
                SharedDocumentVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutComplianceItems: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'ResourceType', 'ComplianceType', 'ExecutionSummary', 'Items'],
              members: {
                ResourceId: {},
                ResourceType: {},
                ComplianceType: {},
                ExecutionSummary: {
                  shape: 'Sov'
                },
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Severity', 'Status'],
                    members: {
                      Id: {},
                      Title: {},
                      Severity: {},
                      Status: {},
                      Details: {
                        shape: 'Soy'
                      }
                    }
                  }
                },
                ItemContentHash: {},
                UploadType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutInventory: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'Items'],
              members: {
                InstanceId: {},
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TypeName', 'SchemaVersion', 'CaptureTime'],
                    members: {
                      TypeName: {},
                      SchemaVersion: {},
                      CaptureTime: {},
                      ContentHash: {},
                      Content: {
                        shape: 'Sk9'
                      },
                      Context: {
                        type: 'map',
                        key: {},
                        value: {}
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {}
              }
            }
          },
          PutParameter: {
            input: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Description: {},
                Value: {
                  shape: 'Smg'
                },
                Type: {},
                KeyId: {},
                Overwrite: {
                  type: 'boolean'
                },
                AllowedPattern: {},
                Tags: {
                  shape: 'S4'
                },
                Tier: {},
                Policies: {},
                DataType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Version: {
                  type: 'long'
                },
                Tier: {}
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Policy'],
              members: {
                ResourceArn: {},
                Policy: {},
                PolicyId: {},
                PolicyHash: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyId: {},
                PolicyHash: {}
              }
            }
          },
          RegisterDefaultPatchBaseline: {
            input: {
              type: 'structure',
              required: ['BaselineId'],
              members: {
                BaselineId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {}
              }
            }
          },
          RegisterPatchBaselineForPatchGroup: {
            input: {
              type: 'structure',
              required: ['BaselineId', 'PatchGroup'],
              members: {
                BaselineId: {},
                PatchGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {},
                PatchGroup: {}
              }
            }
          },
          RegisterTargetWithMaintenanceWindow: {
            input: {
              type: 'structure',
              required: ['WindowId', 'ResourceType', 'Targets'],
              members: {
                WindowId: {},
                ResourceType: {},
                Targets: {
                  shape: 'S18'
                },
                OwnerInformation: {
                  shape: 'Sd2'
                },
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowTargetId: {}
              }
            }
          },
          RegisterTaskWithMaintenanceWindow: {
            input: {
              type: 'structure',
              required: ['WindowId', 'TaskArn', 'TaskType'],
              members: {
                WindowId: {},
                Targets: {
                  shape: 'S18'
                },
                TaskArn: {},
                ServiceRoleArn: {},
                TaskType: {},
                TaskParameters: {
                  shape: 'Sfu'
                },
                TaskInvocationParameters: {
                  shape: 'Sl0'
                },
                Priority: {
                  type: 'integer'
                },
                MaxConcurrency: {},
                MaxErrors: {},
                LoggingInfo: {
                  shape: 'Sg0'
                },
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                CutoffBehavior: {},
                AlarmConfiguration: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowTaskId: {}
              }
            }
          },
          RemoveTagsFromResource: {
            input: {
              type: 'structure',
              required: ['ResourceType', 'ResourceId', 'TagKeys'],
              members: {
                ResourceType: {},
                ResourceId: {},
                TagKeys: {
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
          ResetServiceSetting: {
            input: {
              type: 'structure',
              required: ['SettingId'],
              members: {
                SettingId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceSetting: {
                  shape: 'Sn8'
                }
              }
            }
          },
          ResumeSession: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SessionId: {},
                TokenValue: {},
                StreamUrl: {}
              }
            }
          },
          SendAutomationSignal: {
            input: {
              type: 'structure',
              required: ['AutomationExecutionId', 'SignalType'],
              members: {
                AutomationExecutionId: {},
                SignalType: {},
                Payload: {
                  shape: 'S9n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendCommand: {
            input: {
              type: 'structure',
              required: ['DocumentName'],
              members: {
                InstanceIds: {
                  shape: 'Si'
                },
                Targets: {
                  shape: 'S18'
                },
                DocumentName: {},
                DocumentVersion: {},
                DocumentHash: {},
                DocumentHashType: {},
                TimeoutSeconds: {
                  type: 'integer'
                },
                Comment: {},
                Parameters: {
                  shape: 'S14'
                },
                OutputS3Region: {},
                OutputS3BucketName: {},
                OutputS3KeyPrefix: {},
                MaxConcurrency: {},
                MaxErrors: {},
                ServiceRoleArn: {},
                NotificationConfig: {
                  shape: 'Sl2'
                },
                CloudWatchOutputConfig: {
                  shape: 'Sj0'
                },
                AlarmConfiguration: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Command: {
                  shape: 'So6'
                }
              }
            }
          },
          StartAssociationsOnce: {
            input: {
              type: 'structure',
              required: ['AssociationIds'],
              members: {
                AssociationIds: {
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
          StartAutomationExecution: {
            input: {
              type: 'structure',
              required: ['DocumentName'],
              members: {
                DocumentName: {},
                DocumentVersion: {},
                Parameters: {
                  shape: 'S9n'
                },
                ClientToken: {},
                Mode: {},
                TargetParameterName: {},
                Targets: {
                  shape: 'S18'
                },
                TargetMaps: {
                  shape: 'S26'
                },
                MaxConcurrency: {},
                MaxErrors: {},
                TargetLocations: {
                  shape: 'S1s'
                },
                Tags: {
                  shape: 'S4'
                },
                AlarmConfiguration: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AutomationExecutionId: {}
              }
            }
          },
          StartChangeRequestExecution: {
            input: {
              type: 'structure',
              required: ['DocumentName', 'Runbooks'],
              members: {
                ScheduledTime: {
                  type: 'timestamp'
                },
                DocumentName: {},
                DocumentVersion: {},
                Parameters: {
                  shape: 'S9n'
                },
                ChangeRequestName: {},
                ClientToken: {},
                AutoApprove: {
                  type: 'boolean'
                },
                Runbooks: {
                  shape: 'S9w'
                },
                Tags: {
                  shape: 'S4'
                },
                ScheduledEndTime: {
                  type: 'timestamp'
                },
                ChangeDetails: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AutomationExecutionId: {}
              }
            }
          },
          StartSession: {
            input: {
              type: 'structure',
              required: ['Target'],
              members: {
                Target: {},
                DocumentName: {},
                Reason: {},
                Parameters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SessionId: {},
                TokenValue: {},
                StreamUrl: {}
              }
            }
          },
          StopAutomationExecution: {
            input: {
              type: 'structure',
              required: ['AutomationExecutionId'],
              members: {
                AutomationExecutionId: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TerminateSession: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SessionId: {}
              }
            }
          },
          UnlabelParameterVersion: {
            input: {
              type: 'structure',
              required: ['Name', 'ParameterVersion', 'Labels'],
              members: {
                Name: {},
                ParameterVersion: {
                  type: 'long'
                },
                Labels: {
                  shape: 'Smm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RemovedLabels: {
                  shape: 'Smm'
                },
                InvalidLabels: {
                  shape: 'Smm'
                }
              }
            }
          },
          UpdateAssociation: {
            input: {
              type: 'structure',
              required: ['AssociationId'],
              members: {
                AssociationId: {},
                Parameters: {
                  shape: 'S14'
                },
                DocumentVersion: {},
                ScheduleExpression: {},
                OutputLocation: {
                  shape: 'S1e'
                },
                Name: {},
                Targets: {
                  shape: 'S18'
                },
                AssociationName: {},
                AssociationVersion: {},
                AutomationTargetParameterName: {},
                MaxErrors: {},
                MaxConcurrency: {},
                ComplianceSeverity: {},
                SyncCompliance: {},
                ApplyOnlyAtCronInterval: {
                  type: 'boolean'
                },
                CalendarNames: {
                  shape: 'S1q'
                },
                TargetLocations: {
                  shape: 'S1s'
                },
                ScheduleOffset: {
                  type: 'integer'
                },
                Duration: {
                  type: 'integer'
                },
                TargetMaps: {
                  shape: 'S26'
                },
                AlarmConfiguration: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationDescription: {
                  shape: 'S2c'
                }
              }
            }
          },
          UpdateAssociationStatus: {
            input: {
              type: 'structure',
              required: ['Name', 'InstanceId', 'AssociationStatus'],
              members: {
                Name: {},
                InstanceId: {},
                AssociationStatus: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssociationDescription: {
                  shape: 'S2c'
                }
              }
            }
          },
          UpdateDocument: {
            input: {
              type: 'structure',
              required: ['Content', 'Name'],
              members: {
                Content: {},
                Attachments: {
                  shape: 'S36'
                },
                Name: {},
                DisplayName: {},
                VersionName: {},
                DocumentVersion: {},
                DocumentFormat: {},
                TargetType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentDescription: {
                  shape: 'S3i'
                }
              }
            }
          },
          UpdateDocumentDefaultVersion: {
            input: {
              type: 'structure',
              required: ['Name', 'DocumentVersion'],
              members: {
                Name: {},
                DocumentVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Description: {
                  type: 'structure',
                  members: {
                    Name: {},
                    DefaultVersion: {},
                    DefaultVersionName: {}
                  }
                }
              }
            }
          },
          UpdateDocumentMetadata: {
            input: {
              type: 'structure',
              required: ['Name', 'DocumentReviews'],
              members: {
                Name: {},
                DocumentVersion: {},
                DocumentReviews: {
                  type: 'structure',
                  required: ['Action'],
                  members: {
                    Action: {},
                    Comment: {
                      shape: 'Spd'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateMaintenanceWindow: {
            input: {
              type: 'structure',
              required: ['WindowId'],
              members: {
                WindowId: {},
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                StartDate: {},
                EndDate: {},
                Schedule: {},
                ScheduleTimezone: {},
                ScheduleOffset: {
                  type: 'integer'
                },
                Duration: {
                  type: 'integer'
                },
                Cutoff: {
                  type: 'integer'
                },
                AllowUnassociatedTargets: {
                  type: 'boolean'
                },
                Enabled: {
                  type: 'boolean'
                },
                Replace: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {},
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                StartDate: {},
                EndDate: {},
                Schedule: {},
                ScheduleTimezone: {},
                ScheduleOffset: {
                  type: 'integer'
                },
                Duration: {
                  type: 'integer'
                },
                Cutoff: {
                  type: 'integer'
                },
                AllowUnassociatedTargets: {
                  type: 'boolean'
                },
                Enabled: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateMaintenanceWindowTarget: {
            input: {
              type: 'structure',
              required: ['WindowId', 'WindowTargetId'],
              members: {
                WindowId: {},
                WindowTargetId: {},
                Targets: {
                  shape: 'S18'
                },
                OwnerInformation: {
                  shape: 'Sd2'
                },
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                Replace: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {},
                WindowTargetId: {},
                Targets: {
                  shape: 'S18'
                },
                OwnerInformation: {
                  shape: 'Sd2'
                },
                Name: {},
                Description: {
                  shape: 'S4c'
                }
              }
            }
          },
          UpdateMaintenanceWindowTask: {
            input: {
              type: 'structure',
              required: ['WindowId', 'WindowTaskId'],
              members: {
                WindowId: {},
                WindowTaskId: {},
                Targets: {
                  shape: 'S18'
                },
                TaskArn: {},
                ServiceRoleArn: {},
                TaskParameters: {
                  shape: 'Sfu'
                },
                TaskInvocationParameters: {
                  shape: 'Sl0'
                },
                Priority: {
                  type: 'integer'
                },
                MaxConcurrency: {},
                MaxErrors: {},
                LoggingInfo: {
                  shape: 'Sg0'
                },
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                Replace: {
                  type: 'boolean'
                },
                CutoffBehavior: {},
                AlarmConfiguration: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WindowId: {},
                WindowTaskId: {},
                Targets: {
                  shape: 'S18'
                },
                TaskArn: {},
                ServiceRoleArn: {},
                TaskParameters: {
                  shape: 'Sfu'
                },
                TaskInvocationParameters: {
                  shape: 'Sl0'
                },
                Priority: {
                  type: 'integer'
                },
                MaxConcurrency: {},
                MaxErrors: {},
                LoggingInfo: {
                  shape: 'Sg0'
                },
                Name: {},
                Description: {
                  shape: 'S4c'
                },
                CutoffBehavior: {},
                AlarmConfiguration: {
                  shape: 'S1z'
                }
              }
            }
          },
          UpdateManagedInstanceRole: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'IamRole'],
              members: {
                InstanceId: {},
                IamRole: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateOpsItem: {
            input: {
              type: 'structure',
              required: ['OpsItemId'],
              members: {
                Description: {},
                OperationalData: {
                  shape: 'S4q'
                },
                OperationalDataToDelete: {
                  type: 'list',
                  member: {}
                },
                Notifications: {
                  shape: 'S4v'
                },
                Priority: {
                  type: 'integer'
                },
                RelatedOpsItems: {
                  shape: 'S4z'
                },
                Status: {},
                OpsItemId: {},
                Title: {},
                Category: {},
                Severity: {},
                ActualStartTime: {
                  type: 'timestamp'
                },
                ActualEndTime: {
                  type: 'timestamp'
                },
                PlannedStartTime: {
                  type: 'timestamp'
                },
                PlannedEndTime: {
                  type: 'timestamp'
                },
                OpsItemArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateOpsMetadata: {
            input: {
              type: 'structure',
              required: ['OpsMetadataArn'],
              members: {
                OpsMetadataArn: {},
                MetadataToUpdate: {
                  shape: 'S5a'
                },
                KeysToDelete: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OpsMetadataArn: {}
              }
            }
          },
          UpdatePatchBaseline: {
            input: {
              type: 'structure',
              required: ['BaselineId'],
              members: {
                BaselineId: {},
                Name: {},
                GlobalFilters: {
                  shape: 'S5j'
                },
                ApprovalRules: {
                  shape: 'S5p'
                },
                ApprovedPatches: {
                  shape: 'S5v'
                },
                ApprovedPatchesComplianceLevel: {},
                ApprovedPatchesEnableNonSecurity: {
                  type: 'boolean'
                },
                RejectedPatches: {
                  shape: 'S5v'
                },
                RejectedPatchesAction: {},
                Description: {},
                Sources: {
                  shape: 'S5z'
                },
                Replace: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BaselineId: {},
                Name: {},
                OperatingSystem: {},
                GlobalFilters: {
                  shape: 'S5j'
                },
                ApprovalRules: {
                  shape: 'S5p'
                },
                ApprovedPatches: {
                  shape: 'S5v'
                },
                ApprovedPatchesComplianceLevel: {},
                ApprovedPatchesEnableNonSecurity: {
                  type: 'boolean'
                },
                RejectedPatches: {
                  shape: 'S5v'
                },
                RejectedPatchesAction: {},
                CreatedDate: {
                  type: 'timestamp'
                },
                ModifiedDate: {
                  type: 'timestamp'
                },
                Description: {},
                Sources: {
                  shape: 'S5z'
                }
              }
            }
          },
          UpdateResourceDataSync: {
            input: {
              type: 'structure',
              required: ['SyncName', 'SyncType', 'SyncSource'],
              members: {
                SyncName: {},
                SyncType: {},
                SyncSource: {
                  shape: 'S6i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateServiceSetting: {
            input: {
              type: 'structure',
              required: ['SettingId', 'SettingValue'],
              members: {
                SettingId: {},
                SettingValue: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S4: {
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
          Si: {
            type: 'list',
            member: {}
          },
          S14: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            },
            sensitive: true
          },
          S18: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1e: {
            type: 'structure',
            members: {
              S3Location: {
                type: 'structure',
                members: {
                  OutputS3Region: {},
                  OutputS3BucketName: {},
                  OutputS3KeyPrefix: {}
                }
              }
            }
          },
          S1q: {
            type: 'list',
            member: {}
          },
          S1s: {
            type: 'list',
            member: {
              shape: 'S1t'
            }
          },
          S1t: {
            type: 'structure',
            members: {
              Accounts: {
                type: 'list',
                member: {}
              },
              Regions: {
                type: 'list',
                member: {}
              },
              TargetLocationMaxConcurrency: {},
              TargetLocationMaxErrors: {},
              ExecutionRoleName: {},
              TargetLocationAlarmConfiguration: {
                shape: 'S1z'
              }
            }
          },
          S1z: {
            type: 'structure',
            required: ['Alarms'],
            members: {
              IgnorePollAlarmFailure: {
                type: 'boolean'
              },
              Alarms: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {}
                  }
                }
              }
            }
          },
          S26: {
            type: 'list',
            member: {
              type: 'map',
              key: {},
              value: {
                type: 'list',
                member: {}
              }
            }
          },
          S2c: {
            type: 'structure',
            members: {
              Name: {},
              InstanceId: {},
              AssociationVersion: {},
              Date: {
                type: 'timestamp'
              },
              LastUpdateAssociationDate: {
                type: 'timestamp'
              },
              Status: {
                shape: 'S2f'
              },
              Overview: {
                shape: 'S2j'
              },
              DocumentVersion: {},
              AutomationTargetParameterName: {},
              Parameters: {
                shape: 'S14'
              },
              AssociationId: {},
              Targets: {
                shape: 'S18'
              },
              ScheduleExpression: {},
              OutputLocation: {
                shape: 'S1e'
              },
              LastExecutionDate: {
                type: 'timestamp'
              },
              LastSuccessfulExecutionDate: {
                type: 'timestamp'
              },
              AssociationName: {},
              MaxErrors: {},
              MaxConcurrency: {},
              ComplianceSeverity: {},
              SyncCompliance: {},
              ApplyOnlyAtCronInterval: {
                type: 'boolean'
              },
              CalendarNames: {
                shape: 'S1q'
              },
              TargetLocations: {
                shape: 'S1s'
              },
              ScheduleOffset: {
                type: 'integer'
              },
              Duration: {
                type: 'integer'
              },
              TargetMaps: {
                shape: 'S26'
              },
              AlarmConfiguration: {
                shape: 'S1z'
              },
              TriggeredAlarms: {
                shape: 'S2o'
              }
            }
          },
          S2f: {
            type: 'structure',
            required: ['Date', 'Name', 'Message'],
            members: {
              Date: {
                type: 'timestamp'
              },
              Name: {},
              Message: {},
              AdditionalInfo: {}
            }
          },
          S2j: {
            type: 'structure',
            members: {
              Status: {},
              DetailedStatus: {},
              AssociationStatusAggregatedCount: {
                type: 'map',
                key: {},
                value: {
                  type: 'integer'
                }
              }
            }
          },
          S2o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'State'],
              members: {
                Name: {},
                State: {}
              }
            }
          },
          S2t: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              InstanceId: {},
              Parameters: {
                shape: 'S14'
              },
              AutomationTargetParameterName: {},
              DocumentVersion: {},
              Targets: {
                shape: 'S18'
              },
              ScheduleExpression: {},
              OutputLocation: {
                shape: 'S1e'
              },
              AssociationName: {},
              MaxErrors: {},
              MaxConcurrency: {},
              ComplianceSeverity: {},
              SyncCompliance: {},
              ApplyOnlyAtCronInterval: {
                type: 'boolean'
              },
              CalendarNames: {
                shape: 'S1q'
              },
              TargetLocations: {
                shape: 'S1s'
              },
              ScheduleOffset: {
                type: 'integer'
              },
              Duration: {
                type: 'integer'
              },
              TargetMaps: {
                shape: 'S26'
              },
              AlarmConfiguration: {
                shape: 'S1z'
              }
            }
          },
          S32: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Version: {},
                RequireType: {},
                VersionName: {}
              }
            }
          },
          S36: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Values: {
                  type: 'list',
                  member: {}
                },
                Name: {}
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              Sha1: {},
              Hash: {},
              HashType: {},
              Name: {},
              DisplayName: {},
              VersionName: {},
              Owner: {},
              CreatedDate: {
                type: 'timestamp'
              },
              Status: {},
              StatusInformation: {},
              DocumentVersion: {},
              Description: {},
              Parameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Type: {},
                    Description: {},
                    DefaultValue: {}
                  }
                }
              },
              PlatformTypes: {
                shape: 'S3w'
              },
              DocumentType: {},
              SchemaVersion: {},
              LatestVersion: {},
              DefaultVersion: {},
              DocumentFormat: {},
              TargetType: {},
              Tags: {
                shape: 'S4'
              },
              AttachmentsInformation: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {}
                  }
                }
              },
              Requires: {
                shape: 'S32'
              },
              Author: {},
              ReviewInformation: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ReviewedTime: {
                      type: 'timestamp'
                    },
                    Status: {},
                    Reviewer: {}
                  }
                }
              },
              ApprovedVersion: {},
              PendingReviewVersion: {},
              ReviewStatus: {},
              Category: {
                type: 'list',
                member: {}
              },
              CategoryEnum: {
                type: 'list',
                member: {}
              }
            }
          },
          S3w: {
            type: 'list',
            member: {}
          },
          S4c: {
            type: 'string',
            sensitive: true
          },
          S4q: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Value: {},
                Type: {}
              }
            }
          },
          S4v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {}
              }
            }
          },
          S4z: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['OpsItemId'],
              members: {
                OpsItemId: {}
              }
            }
          },
          S5a: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Value: {}
              }
            }
          },
          S5j: {
            type: 'structure',
            required: ['PatchFilters'],
            members: {
              PatchFilters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Key', 'Values'],
                  members: {
                    Key: {},
                    Values: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          S5p: {
            type: 'structure',
            required: ['PatchRules'],
            members: {
              PatchRules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['PatchFilterGroup'],
                  members: {
                    PatchFilterGroup: {
                      shape: 'S5j'
                    },
                    ComplianceLevel: {},
                    ApproveAfterDays: {
                      type: 'integer'
                    },
                    ApproveUntilDate: {},
                    EnableNonSecurity: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S5v: {
            type: 'list',
            member: {}
          },
          S5z: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Products', 'Configuration'],
              members: {
                Name: {},
                Products: {
                  type: 'list',
                  member: {}
                },
                Configuration: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S69: {
            type: 'structure',
            required: ['BucketName', 'SyncFormat', 'Region'],
            members: {
              BucketName: {},
              Prefix: {},
              SyncFormat: {},
              Region: {},
              AWSKMSKeyARN: {},
              DestinationDataSharing: {
                type: 'structure',
                members: {
                  DestinationDataSharingType: {}
                }
              }
            }
          },
          S6i: {
            type: 'structure',
            required: ['SourceType', 'SourceRegions'],
            members: {
              SourceType: {},
              AwsOrganizationsSource: {
                shape: 'S6k'
              },
              SourceRegions: {
                shape: 'S6p'
              },
              IncludeFutureRegions: {
                type: 'boolean'
              },
              EnableAllOpsDataSources: {
                type: 'boolean'
              }
            }
          },
          S6k: {
            type: 'structure',
            required: ['OrganizationSourceType'],
            members: {
              OrganizationSourceType: {},
              OrganizationalUnits: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    OrganizationalUnitId: {}
                  }
                }
              }
            }
          },
          S6p: {
            type: 'list',
            member: {}
          },
          S76: {
            type: 'structure',
            members: {
              TotalCount: {
                type: 'integer'
              },
              RemainingCount: {
                type: 'integer'
              },
              SummaryItems: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Version: {},
                    Count: {
                      type: 'integer'
                    },
                    RemainingCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          S7n: {
            type: 'list',
            member: {}
          },
          S9n: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          S9s: {
            type: 'structure',
            members: {
              ParameterValues: {
                type: 'list',
                member: {}
              },
              Truncated: {
                type: 'boolean'
              }
            }
          },
          S9w: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DocumentName'],
              members: {
                DocumentName: {},
                DocumentVersion: {},
                Parameters: {
                  shape: 'S9n'
                },
                TargetParameterName: {},
                Targets: {
                  shape: 'S18'
                },
                TargetMaps: {
                  shape: 'S26'
                },
                MaxConcurrency: {},
                MaxErrors: {},
                TargetLocations: {
                  shape: 'S1s'
                }
              }
            }
          },
          Sa6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StepName: {},
                Action: {},
                TimeoutSeconds: {
                  type: 'long'
                },
                OnFailure: {},
                MaxAttempts: {
                  type: 'integer'
                },
                ExecutionStartTime: {
                  type: 'timestamp'
                },
                ExecutionEndTime: {
                  type: 'timestamp'
                },
                StepStatus: {},
                ResponseCode: {},
                Inputs: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                Outputs: {
                  shape: 'S9n'
                },
                Response: {},
                FailureMessage: {},
                FailureDetails: {
                  type: 'structure',
                  members: {
                    FailureStage: {},
                    FailureType: {},
                    Details: {
                      shape: 'S9n'
                    }
                  }
                },
                StepExecutionId: {},
                OverriddenParameters: {
                  shape: 'S9n'
                },
                IsEnd: {
                  type: 'boolean'
                },
                NextStep: {},
                IsCritical: {
                  type: 'boolean'
                },
                ValidNextSteps: {
                  type: 'list',
                  member: {}
                },
                Targets: {
                  shape: 'S18'
                },
                TargetLocation: {
                  shape: 'S1t'
                },
                TriggeredAlarms: {
                  shape: 'S2o'
                },
                ParentStepDetails: {
                  type: 'structure',
                  members: {
                    StepExecutionId: {},
                    StepName: {},
                    Action: {},
                    Iteration: {
                      type: 'integer'
                    },
                    IteratorValue: {}
                  }
                }
              }
            }
          },
          Sah: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Sap: {
            type: 'structure',
            members: {
              Id: {},
              ReleaseDate: {
                type: 'timestamp'
              },
              Title: {},
              Description: {},
              ContentUrl: {},
              Vendor: {},
              ProductFamily: {},
              Product: {},
              Classification: {},
              MsrcSeverity: {},
              KbNumber: {},
              MsrcNumber: {},
              Language: {},
              AdvisoryIds: {
                type: 'list',
                member: {}
              },
              BugzillaIds: {
                type: 'list',
                member: {}
              },
              CVEIds: {
                type: 'list',
                member: {}
              },
              Name: {},
              Epoch: {
                type: 'integer'
              },
              Version: {},
              Release: {},
              Arch: {},
              Severity: {},
              Repository: {}
            }
          },
          Sbk: {
            type: 'list',
            member: {}
          },
          Scd: {
            type: 'list',
            member: {}
          },
          Scr: {
            type: 'structure',
            members: {
              DetailedStatus: {},
              InstanceAssociationStatusAggregatedCount: {
                type: 'map',
                key: {},
                value: {
                  type: 'integer'
                }
              }
            }
          },
          Scz: {
            type: 'structure',
            required: ['InstanceId', 'PatchGroup', 'BaselineId', 'OperationStartTime', 'OperationEndTime', 'Operation'],
            members: {
              InstanceId: {},
              PatchGroup: {},
              BaselineId: {},
              SnapshotId: {},
              InstallOverrideList: {},
              OwnerInformation: {
                shape: 'Sd2'
              },
              InstalledCount: {
                type: 'integer'
              },
              InstalledOtherCount: {
                type: 'integer'
              },
              InstalledPendingRebootCount: {
                type: 'integer'
              },
              InstalledRejectedCount: {
                type: 'integer'
              },
              MissingCount: {
                type: 'integer'
              },
              FailedCount: {
                type: 'integer'
              },
              UnreportedNotApplicableCount: {
                type: 'integer'
              },
              NotApplicableCount: {
                type: 'integer'
              },
              OperationStartTime: {
                type: 'timestamp'
              },
              OperationEndTime: {
                type: 'timestamp'
              },
              Operation: {},
              LastNoRebootInstallOperationTime: {
                type: 'timestamp'
              },
              RebootOption: {},
              CriticalNonCompliantCount: {
                type: 'integer'
              },
              SecurityNonCompliantCount: {
                type: 'integer'
              },
              OtherNonCompliantCount: {
                type: 'integer'
              }
            }
          },
          Sd2: {
            type: 'string',
            sensitive: true
          },
          Sdz: {
            type: 'list',
            member: {}
          },
          Ser: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Sf3: {
            type: 'string',
            sensitive: true
          },
          Sfu: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Values: {
                  type: 'list',
                  member: {
                    type: 'string',
                    sensitive: true
                  },
                  sensitive: true
                }
              },
              sensitive: true
            },
            sensitive: true
          },
          Sg0: {
            type: 'structure',
            required: ['S3BucketName', 'S3Region'],
            members: {
              S3BucketName: {},
              S3KeyPrefix: {},
              S3Region: {}
            }
          },
          Sgu: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Option: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Sh9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PolicyText: {},
                PolicyType: {},
                PolicyStatus: {}
              }
            }
          },
          Shf: {
            type: 'structure',
            members: {
              BaselineId: {},
              BaselineName: {},
              OperatingSystem: {},
              BaselineDescription: {},
              DefaultBaseline: {
                type: 'boolean'
              }
            }
          },
          Sj0: {
            type: 'structure',
            members: {
              CloudWatchLogGroupName: {},
              CloudWatchOutputEnabled: {
                type: 'boolean'
              }
            }
          },
          Sjm: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Values'],
              members: {
                Key: {},
                Values: {
                  type: 'list',
                  member: {}
                },
                Type: {}
              }
            }
          },
          Sjs: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Expression: {},
                Aggregators: {
                  shape: 'Sjs'
                },
                Groups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Filters'],
                    members: {
                      Name: {},
                      Filters: {
                        shape: 'Sjm'
                      }
                    }
                  }
                }
              }
            }
          },
          Sk9: {
            type: 'list',
            member: {
              type: 'map',
              key: {},
              value: {}
            }
          },
          Sl0: {
            type: 'structure',
            members: {
              RunCommand: {
                type: 'structure',
                members: {
                  Comment: {},
                  CloudWatchOutputConfig: {
                    shape: 'Sj0'
                  },
                  DocumentHash: {},
                  DocumentHashType: {},
                  DocumentVersion: {},
                  NotificationConfig: {
                    shape: 'Sl2'
                  },
                  OutputS3BucketName: {},
                  OutputS3KeyPrefix: {},
                  Parameters: {
                    shape: 'S14'
                  },
                  ServiceRoleArn: {},
                  TimeoutSeconds: {
                    type: 'integer'
                  }
                }
              },
              Automation: {
                type: 'structure',
                members: {
                  DocumentVersion: {},
                  Parameters: {
                    shape: 'S9n'
                  }
                }
              },
              StepFunctions: {
                type: 'structure',
                members: {
                  Input: {
                    type: 'string',
                    sensitive: true
                  },
                  Name: {}
                }
              },
              Lambda: {
                type: 'structure',
                members: {
                  ClientContext: {},
                  Qualifier: {},
                  Payload: {
                    type: 'blob',
                    sensitive: true
                  }
                }
              }
            }
          },
          Sl2: {
            type: 'structure',
            members: {
              NotificationArn: {},
              NotificationEvents: {
                type: 'list',
                member: {}
              },
              NotificationType: {}
            }
          },
          Sln: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Values'],
              members: {
                Key: {},
                Values: {
                  type: 'list',
                  member: {}
                },
                Type: {}
              }
            }
          },
          Slt: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AggregatorType: {},
                TypeName: {},
                AttributeName: {},
                Values: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                Filters: {
                  shape: 'Sln'
                },
                Aggregators: {
                  shape: 'Slt'
                }
              }
            }
          },
          Smf: {
            type: 'structure',
            members: {
              Name: {},
              Type: {},
              Value: {
                shape: 'Smg'
              },
              Version: {
                type: 'long'
              },
              Selector: {},
              SourceResult: {},
              LastModifiedDate: {
                type: 'timestamp'
              },
              ARN: {},
              DataType: {}
            }
          },
          Smg: {
            type: 'string',
            sensitive: true
          },
          Smm: {
            type: 'list',
            member: {}
          },
          Smq: {
            type: 'list',
            member: {
              shape: 'Smf'
            }
          },
          Sn8: {
            type: 'structure',
            members: {
              SettingId: {},
              SettingValue: {},
              LastModifiedDate: {
                type: 'timestamp'
              },
              LastModifiedUser: {},
              ARN: {},
              Status: {}
            }
          },
          Snq: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          So6: {
            type: 'structure',
            members: {
              CommandId: {},
              DocumentName: {},
              DocumentVersion: {},
              Comment: {},
              ExpiresAfter: {
                type: 'timestamp'
              },
              Parameters: {
                shape: 'S14'
              },
              InstanceIds: {
                shape: 'Si'
              },
              Targets: {
                shape: 'S18'
              },
              RequestedDateTime: {
                type: 'timestamp'
              },
              Status: {},
              StatusDetails: {},
              OutputS3Region: {},
              OutputS3BucketName: {},
              OutputS3KeyPrefix: {},
              MaxConcurrency: {},
              MaxErrors: {},
              TargetCount: {
                type: 'integer'
              },
              CompletedCount: {
                type: 'integer'
              },
              ErrorCount: {
                type: 'integer'
              },
              DeliveryTimedOutCount: {
                type: 'integer'
              },
              ServiceRole: {},
              NotificationConfig: {
                shape: 'Sl2'
              },
              CloudWatchOutputConfig: {
                shape: 'Sj0'
              },
              TimeoutSeconds: {
                type: 'integer'
              },
              AlarmConfiguration: {
                shape: 'S1z'
              },
              TriggeredAlarms: {
                shape: 'S2o'
              }
            }
          },
          Sod: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Values: {
                  type: 'list',
                  member: {}
                },
                Type: {}
              }
            }
          },
          Sov: {
            type: 'structure',
            required: ['ExecutionTime'],
            members: {
              ExecutionTime: {
                type: 'timestamp'
              },
              ExecutionId: {},
              ExecutionType: {}
            }
          },
          Soy: {
            type: 'map',
            key: {},
            value: {}
          },
          Sp3: {
            type: 'structure',
            members: {
              CompliantCount: {
                type: 'integer'
              },
              SeveritySummary: {
                shape: 'Sp5'
              }
            }
          },
          Sp5: {
            type: 'structure',
            members: {
              CriticalCount: {
                type: 'integer'
              },
              HighCount: {
                type: 'integer'
              },
              MediumCount: {
                type: 'integer'
              },
              LowCount: {
                type: 'integer'
              },
              InformationalCount: {
                type: 'integer'
              },
              UnspecifiedCount: {
                type: 'integer'
              }
            }
          },
          Sp6: {
            type: 'structure',
            members: {
              NonCompliantCount: {
                type: 'integer'
              },
              SeveritySummary: {
                shape: 'Sp5'
              }
            }
          },
          Spd: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Content: {}
              }
            }
          },
          Sqb: {
            type: 'structure',
            members: {
              Arn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=63450c154e5f8186456ed0bde1675038b4a0c344.js.map