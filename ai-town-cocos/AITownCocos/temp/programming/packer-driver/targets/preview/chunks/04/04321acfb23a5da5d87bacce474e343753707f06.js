System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-11-15',
          endpointPrefix: 'backup',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Backup',
          serviceId: 'Backup',
          signatureVersion: 'v4',
          uid: 'backup-2018-11-15'
        },
        operations: {
          CancelLegalHold: {
            http: {
              method: 'DELETE',
              requestUri: '/legal-holds/{legalHoldId}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['LegalHoldId', 'CancelDescription'],
              members: {
                LegalHoldId: {
                  location: 'uri',
                  locationName: 'legalHoldId'
                },
                CancelDescription: {
                  location: 'querystring',
                  locationName: 'cancelDescription'
                },
                RetainRecordInDays: {
                  location: 'querystring',
                  locationName: 'retainRecordInDays',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          CreateBackupPlan: {
            http: {
              method: 'PUT',
              requestUri: '/backup/plans/'
            },
            input: {
              type: 'structure',
              required: ['BackupPlan'],
              members: {
                BackupPlan: {
                  shape: 'S6'
                },
                BackupPlanTags: {
                  shape: 'Sg'
                },
                CreatorRequestId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupPlanId: {},
                BackupPlanArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                VersionId: {},
                AdvancedBackupSettings: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          CreateBackupSelection: {
            http: {
              method: 'PUT',
              requestUri: '/backup/plans/{backupPlanId}/selections/'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId', 'BackupSelection'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                },
                BackupSelection: {
                  shape: 'Sw'
                },
                CreatorRequestId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SelectionId: {},
                BackupPlanId: {},
                CreationDate: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          CreateBackupVault: {
            http: {
              method: 'PUT',
              requestUri: '/backup-vaults/{backupVaultName}'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                BackupVaultTags: {
                  shape: 'Sg'
                },
                EncryptionKeyArn: {},
                CreatorRequestId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupVaultName: {},
                BackupVaultArn: {},
                CreationDate: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          CreateFramework: {
            http: {
              requestUri: '/audit/frameworks'
            },
            input: {
              type: 'structure',
              required: ['FrameworkName', 'FrameworkControls'],
              members: {
                FrameworkName: {},
                FrameworkDescription: {},
                FrameworkControls: {
                  shape: 'S1e'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                },
                FrameworkTags: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FrameworkName: {},
                FrameworkArn: {}
              }
            },
            idempotent: true
          },
          CreateLegalHold: {
            http: {
              requestUri: '/legal-holds/'
            },
            input: {
              type: 'structure',
              required: ['Title', 'Description'],
              members: {
                Title: {},
                Description: {},
                IdempotencyToken: {},
                RecoveryPointSelection: {
                  shape: 'S1r'
                },
                Tags: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Title: {},
                Status: {},
                Description: {},
                LegalHoldId: {},
                LegalHoldArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                RecoveryPointSelection: {
                  shape: 'S1r'
                }
              }
            },
            idempotent: true
          },
          CreateLogicallyAirGappedBackupVault: {
            http: {
              method: 'PUT',
              requestUri: '/logically-air-gapped-backup-vaults/{backupVaultName}'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'MinRetentionDays', 'MaxRetentionDays'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                BackupVaultTags: {
                  shape: 'Sg'
                },
                CreatorRequestId: {},
                MinRetentionDays: {
                  type: 'long'
                },
                MaxRetentionDays: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupVaultName: {},
                BackupVaultArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                VaultState: {}
              }
            },
            idempotent: true
          },
          CreateReportPlan: {
            http: {
              requestUri: '/audit/report-plans'
            },
            input: {
              type: 'structure',
              required: ['ReportPlanName', 'ReportDeliveryChannel', 'ReportSetting'],
              members: {
                ReportPlanName: {},
                ReportPlanDescription: {},
                ReportDeliveryChannel: {
                  shape: 'S23'
                },
                ReportSetting: {
                  shape: 'S25'
                },
                ReportPlanTags: {
                  shape: 'S1o'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReportPlanName: {},
                ReportPlanArn: {},
                CreationTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          CreateRestoreTestingPlan: {
            http: {
              method: 'PUT',
              requestUri: '/restore-testing/plans',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlan'],
              members: {
                CreatorRequestId: {},
                RestoreTestingPlan: {
                  type: 'structure',
                  required: ['RecoveryPointSelection', 'RestoreTestingPlanName', 'ScheduleExpression'],
                  members: {
                    RecoveryPointSelection: {
                      shape: 'S2c'
                    },
                    RestoreTestingPlanName: {},
                    ScheduleExpression: {},
                    ScheduleExpressionTimezone: {},
                    StartWindowHours: {
                      type: 'integer'
                    }
                  }
                },
                Tags: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CreationTime', 'RestoreTestingPlanArn', 'RestoreTestingPlanName'],
              members: {
                CreationTime: {
                  type: 'timestamp'
                },
                RestoreTestingPlanArn: {},
                RestoreTestingPlanName: {}
              }
            },
            idempotent: true
          },
          CreateRestoreTestingSelection: {
            http: {
              method: 'PUT',
              requestUri: '/restore-testing/plans/{RestoreTestingPlanName}/selections',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlanName', 'RestoreTestingSelection'],
              members: {
                CreatorRequestId: {},
                RestoreTestingPlanName: {
                  location: 'uri',
                  locationName: 'RestoreTestingPlanName'
                },
                RestoreTestingSelection: {
                  type: 'structure',
                  required: ['IamRoleArn', 'ProtectedResourceType', 'RestoreTestingSelectionName'],
                  members: {
                    IamRoleArn: {},
                    ProtectedResourceArns: {
                      shape: 'S26'
                    },
                    ProtectedResourceConditions: {
                      shape: 'S2l'
                    },
                    ProtectedResourceType: {},
                    RestoreMetadataOverrides: {
                      shape: 'S2g'
                    },
                    RestoreTestingSelectionName: {},
                    ValidationWindowHours: {
                      type: 'integer'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CreationTime', 'RestoreTestingPlanArn', 'RestoreTestingPlanName', 'RestoreTestingSelectionName'],
              members: {
                CreationTime: {
                  type: 'timestamp'
                },
                RestoreTestingPlanArn: {},
                RestoreTestingPlanName: {},
                RestoreTestingSelectionName: {}
              }
            },
            idempotent: true
          },
          DeleteBackupPlan: {
            http: {
              method: 'DELETE',
              requestUri: '/backup/plans/{backupPlanId}'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupPlanId: {},
                BackupPlanArn: {},
                DeletionDate: {
                  type: 'timestamp'
                },
                VersionId: {}
              }
            }
          },
          DeleteBackupSelection: {
            http: {
              method: 'DELETE',
              requestUri: '/backup/plans/{backupPlanId}/selections/{selectionId}'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId', 'SelectionId'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                },
                SelectionId: {
                  location: 'uri',
                  locationName: 'selectionId'
                }
              }
            }
          },
          DeleteBackupVault: {
            http: {
              method: 'DELETE',
              requestUri: '/backup-vaults/{backupVaultName}'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                }
              }
            }
          },
          DeleteBackupVaultAccessPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/backup-vaults/{backupVaultName}/access-policy'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                }
              }
            },
            idempotent: true
          },
          DeleteBackupVaultLockConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/backup-vaults/{backupVaultName}/vault-lock'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                }
              }
            },
            idempotent: true
          },
          DeleteBackupVaultNotifications: {
            http: {
              method: 'DELETE',
              requestUri: '/backup-vaults/{backupVaultName}/notification-configuration'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                }
              }
            },
            idempotent: true
          },
          DeleteFramework: {
            http: {
              method: 'DELETE',
              requestUri: '/audit/frameworks/{frameworkName}'
            },
            input: {
              type: 'structure',
              required: ['FrameworkName'],
              members: {
                FrameworkName: {
                  location: 'uri',
                  locationName: 'frameworkName'
                }
              }
            }
          },
          DeleteRecoveryPoint: {
            http: {
              method: 'DELETE',
              requestUri: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'RecoveryPointArn'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                RecoveryPointArn: {
                  location: 'uri',
                  locationName: 'recoveryPointArn'
                }
              }
            },
            idempotent: true
          },
          DeleteReportPlan: {
            http: {
              method: 'DELETE',
              requestUri: '/audit/report-plans/{reportPlanName}'
            },
            input: {
              type: 'structure',
              required: ['ReportPlanName'],
              members: {
                ReportPlanName: {
                  location: 'uri',
                  locationName: 'reportPlanName'
                }
              }
            },
            idempotent: true
          },
          DeleteRestoreTestingPlan: {
            http: {
              method: 'DELETE',
              requestUri: '/restore-testing/plans/{RestoreTestingPlanName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlanName'],
              members: {
                RestoreTestingPlanName: {
                  location: 'uri',
                  locationName: 'RestoreTestingPlanName'
                }
              }
            },
            idempotent: true
          },
          DeleteRestoreTestingSelection: {
            http: {
              method: 'DELETE',
              requestUri: '/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlanName', 'RestoreTestingSelectionName'],
              members: {
                RestoreTestingPlanName: {
                  location: 'uri',
                  locationName: 'RestoreTestingPlanName'
                },
                RestoreTestingSelectionName: {
                  location: 'uri',
                  locationName: 'RestoreTestingSelectionName'
                }
              }
            },
            idempotent: true
          },
          DescribeBackupJob: {
            http: {
              method: 'GET',
              requestUri: '/backup-jobs/{backupJobId}'
            },
            input: {
              type: 'structure',
              required: ['BackupJobId'],
              members: {
                BackupJobId: {
                  location: 'uri',
                  locationName: 'backupJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountId: {},
                BackupJobId: {},
                BackupVaultName: {},
                BackupVaultArn: {},
                RecoveryPointArn: {},
                ResourceArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                CompletionDate: {
                  type: 'timestamp'
                },
                State: {},
                StatusMessage: {},
                PercentDone: {},
                BackupSizeInBytes: {
                  type: 'long'
                },
                IamRoleArn: {},
                CreatedBy: {
                  shape: 'S35'
                },
                ResourceType: {},
                BytesTransferred: {
                  type: 'long'
                },
                ExpectedCompletionDate: {
                  type: 'timestamp'
                },
                StartBy: {
                  type: 'timestamp'
                },
                BackupOptions: {
                  shape: 'Sq'
                },
                BackupType: {},
                ParentJobId: {},
                IsParent: {
                  type: 'boolean'
                },
                NumberOfChildJobs: {
                  type: 'long'
                },
                ChildJobsInState: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'long'
                  }
                },
                ResourceName: {},
                InitiationDate: {
                  type: 'timestamp'
                },
                MessageCategory: {}
              }
            },
            idempotent: true
          },
          DescribeBackupVault: {
            http: {
              method: 'GET',
              requestUri: '/backup-vaults/{backupVaultName}'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                BackupVaultAccountId: {
                  location: 'querystring',
                  locationName: 'backupVaultAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupVaultName: {},
                BackupVaultArn: {},
                VaultType: {},
                EncryptionKeyArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                CreatorRequestId: {},
                NumberOfRecoveryPoints: {
                  type: 'long'
                },
                Locked: {
                  type: 'boolean'
                },
                MinRetentionDays: {
                  type: 'long'
                },
                MaxRetentionDays: {
                  type: 'long'
                },
                LockDate: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          DescribeCopyJob: {
            http: {
              method: 'GET',
              requestUri: '/copy-jobs/{copyJobId}'
            },
            input: {
              type: 'structure',
              required: ['CopyJobId'],
              members: {
                CopyJobId: {
                  location: 'uri',
                  locationName: 'copyJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CopyJob: {
                  shape: 'S3e'
                }
              }
            },
            idempotent: true
          },
          DescribeFramework: {
            http: {
              method: 'GET',
              requestUri: '/audit/frameworks/{frameworkName}'
            },
            input: {
              type: 'structure',
              required: ['FrameworkName'],
              members: {
                FrameworkName: {
                  location: 'uri',
                  locationName: 'frameworkName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FrameworkName: {},
                FrameworkArn: {},
                FrameworkDescription: {},
                FrameworkControls: {
                  shape: 'S1e'
                },
                CreationTime: {
                  type: 'timestamp'
                },
                DeploymentStatus: {},
                FrameworkStatus: {},
                IdempotencyToken: {}
              }
            }
          },
          DescribeGlobalSettings: {
            http: {
              method: 'GET',
              requestUri: '/global-settings'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                GlobalSettings: {
                  shape: 'S3l'
                },
                LastUpdateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeProtectedResource: {
            http: {
              method: 'GET',
              requestUri: '/resources/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                ResourceType: {},
                LastBackupTime: {
                  type: 'timestamp'
                },
                ResourceName: {},
                LastBackupVaultArn: {},
                LastRecoveryPointArn: {},
                LatestRestoreExecutionTimeMinutes: {
                  type: 'long'
                },
                LatestRestoreJobCreationDate: {
                  type: 'timestamp'
                },
                LatestRestoreRecoveryPointCreationDate: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          DescribeRecoveryPoint: {
            http: {
              method: 'GET',
              requestUri: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'RecoveryPointArn'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                RecoveryPointArn: {
                  location: 'uri',
                  locationName: 'recoveryPointArn'
                },
                BackupVaultAccountId: {
                  location: 'querystring',
                  locationName: 'backupVaultAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecoveryPointArn: {},
                BackupVaultName: {},
                BackupVaultArn: {},
                SourceBackupVaultArn: {},
                ResourceArn: {},
                ResourceType: {},
                CreatedBy: {
                  shape: 'S35'
                },
                IamRoleArn: {},
                Status: {},
                StatusMessage: {},
                CreationDate: {
                  type: 'timestamp'
                },
                CompletionDate: {
                  type: 'timestamp'
                },
                BackupSizeInBytes: {
                  type: 'long'
                },
                CalculatedLifecycle: {
                  shape: 'S3t'
                },
                Lifecycle: {
                  shape: 'Se'
                },
                EncryptionKeyArn: {},
                IsEncrypted: {
                  type: 'boolean'
                },
                StorageClass: {},
                LastRestoreTime: {
                  type: 'timestamp'
                },
                ParentRecoveryPointArn: {},
                CompositeMemberIdentifier: {},
                IsParent: {
                  type: 'boolean'
                },
                ResourceName: {},
                VaultType: {}
              }
            },
            idempotent: true
          },
          DescribeRegionSettings: {
            http: {
              method: 'GET',
              requestUri: '/account-settings'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                ResourceTypeOptInPreference: {
                  shape: 'S3x'
                },
                ResourceTypeManagementPreference: {
                  shape: 'S3z'
                }
              }
            }
          },
          DescribeReportJob: {
            http: {
              method: 'GET',
              requestUri: '/audit/report-jobs/{reportJobId}'
            },
            input: {
              type: 'structure',
              required: ['ReportJobId'],
              members: {
                ReportJobId: {
                  location: 'uri',
                  locationName: 'reportJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReportJob: {
                  shape: 'S43'
                }
              }
            }
          },
          DescribeReportPlan: {
            http: {
              method: 'GET',
              requestUri: '/audit/report-plans/{reportPlanName}'
            },
            input: {
              type: 'structure',
              required: ['ReportPlanName'],
              members: {
                ReportPlanName: {
                  location: 'uri',
                  locationName: 'reportPlanName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReportPlan: {
                  shape: 'S47'
                }
              }
            }
          },
          DescribeRestoreJob: {
            http: {
              method: 'GET',
              requestUri: '/restore-jobs/{restoreJobId}'
            },
            input: {
              type: 'structure',
              required: ['RestoreJobId'],
              members: {
                RestoreJobId: {
                  location: 'uri',
                  locationName: 'restoreJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountId: {},
                RestoreJobId: {},
                RecoveryPointArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                CompletionDate: {
                  type: 'timestamp'
                },
                Status: {},
                StatusMessage: {},
                PercentDone: {},
                BackupSizeInBytes: {
                  type: 'long'
                },
                IamRoleArn: {},
                ExpectedCompletionTimeMinutes: {
                  type: 'long'
                },
                CreatedResourceArn: {},
                ResourceType: {},
                RecoveryPointCreationDate: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'S4c'
                },
                ValidationStatus: {},
                ValidationStatusMessage: {},
                DeletionStatus: {},
                DeletionStatusMessage: {}
              }
            },
            idempotent: true
          },
          DisassociateRecoveryPoint: {
            http: {
              requestUri: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/disassociate'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'RecoveryPointArn'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                RecoveryPointArn: {
                  location: 'uri',
                  locationName: 'recoveryPointArn'
                }
              }
            }
          },
          DisassociateRecoveryPointFromParent: {
            http: {
              method: 'DELETE',
              requestUri: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/parentAssociation',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'RecoveryPointArn'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                RecoveryPointArn: {
                  location: 'uri',
                  locationName: 'recoveryPointArn'
                }
              }
            }
          },
          ExportBackupPlanTemplate: {
            http: {
              method: 'GET',
              requestUri: '/backup/plans/{backupPlanId}/toTemplate/'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupPlanTemplateJson: {}
              }
            }
          },
          GetBackupPlan: {
            http: {
              method: 'GET',
              requestUri: '/backup/plans/{backupPlanId}/'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupPlan: {
                  shape: 'S4l'
                },
                BackupPlanId: {},
                BackupPlanArn: {},
                VersionId: {},
                CreatorRequestId: {},
                CreationDate: {
                  type: 'timestamp'
                },
                DeletionDate: {
                  type: 'timestamp'
                },
                LastExecutionDate: {
                  type: 'timestamp'
                },
                AdvancedBackupSettings: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          GetBackupPlanFromJSON: {
            http: {
              requestUri: '/backup/template/json/toPlan'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanTemplateJson'],
              members: {
                BackupPlanTemplateJson: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupPlan: {
                  shape: 'S4l'
                }
              }
            }
          },
          GetBackupPlanFromTemplate: {
            http: {
              method: 'GET',
              requestUri: '/backup/template/plans/{templateId}/toPlan'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanTemplateId'],
              members: {
                BackupPlanTemplateId: {
                  location: 'uri',
                  locationName: 'templateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupPlanDocument: {
                  shape: 'S4l'
                }
              }
            }
          },
          GetBackupSelection: {
            http: {
              method: 'GET',
              requestUri: '/backup/plans/{backupPlanId}/selections/{selectionId}'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId', 'SelectionId'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                },
                SelectionId: {
                  location: 'uri',
                  locationName: 'selectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupSelection: {
                  shape: 'Sw'
                },
                SelectionId: {},
                BackupPlanId: {},
                CreationDate: {
                  type: 'timestamp'
                },
                CreatorRequestId: {}
              }
            },
            idempotent: true
          },
          GetBackupVaultAccessPolicy: {
            http: {
              method: 'GET',
              requestUri: '/backup-vaults/{backupVaultName}/access-policy'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupVaultName: {},
                BackupVaultArn: {},
                Policy: {}
              }
            },
            idempotent: true
          },
          GetBackupVaultNotifications: {
            http: {
              method: 'GET',
              requestUri: '/backup-vaults/{backupVaultName}/notification-configuration'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupVaultName: {},
                BackupVaultArn: {},
                SNSTopicArn: {},
                BackupVaultEvents: {
                  shape: 'S4z'
                }
              }
            },
            idempotent: true
          },
          GetLegalHold: {
            http: {
              method: 'GET',
              requestUri: '/legal-holds/{legalHoldId}/'
            },
            input: {
              type: 'structure',
              required: ['LegalHoldId'],
              members: {
                LegalHoldId: {
                  location: 'uri',
                  locationName: 'legalHoldId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Title: {},
                Status: {},
                Description: {},
                CancelDescription: {},
                LegalHoldId: {},
                LegalHoldArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                CancellationDate: {
                  type: 'timestamp'
                },
                RetainRecordUntil: {
                  type: 'timestamp'
                },
                RecoveryPointSelection: {
                  shape: 'S1r'
                }
              }
            },
            idempotent: true
          },
          GetRecoveryPointRestoreMetadata: {
            http: {
              method: 'GET',
              requestUri: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/restore-metadata'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'RecoveryPointArn'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                RecoveryPointArn: {
                  location: 'uri',
                  locationName: 'recoveryPointArn'
                },
                BackupVaultAccountId: {
                  location: 'querystring',
                  locationName: 'backupVaultAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupVaultArn: {},
                RecoveryPointArn: {},
                RestoreMetadata: {
                  shape: 'S55'
                },
                ResourceType: {}
              }
            },
            idempotent: true
          },
          GetRestoreJobMetadata: {
            http: {
              method: 'GET',
              requestUri: '/restore-jobs/{restoreJobId}/metadata'
            },
            input: {
              type: 'structure',
              required: ['RestoreJobId'],
              members: {
                RestoreJobId: {
                  location: 'uri',
                  locationName: 'restoreJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RestoreJobId: {},
                Metadata: {
                  shape: 'S55'
                }
              }
            }
          },
          GetRestoreTestingInferredMetadata: {
            http: {
              method: 'GET',
              requestUri: '/restore-testing/inferred-metadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'RecoveryPointArn'],
              members: {
                BackupVaultAccountId: {
                  location: 'querystring',
                  locationName: 'BackupVaultAccountId'
                },
                BackupVaultName: {
                  location: 'querystring',
                  locationName: 'BackupVaultName'
                },
                RecoveryPointArn: {
                  location: 'querystring',
                  locationName: 'RecoveryPointArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InferredMetadata'],
              members: {
                InferredMetadata: {
                  shape: 'S1o'
                }
              }
            }
          },
          GetRestoreTestingPlan: {
            http: {
              method: 'GET',
              requestUri: '/restore-testing/plans/{RestoreTestingPlanName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlanName'],
              members: {
                RestoreTestingPlanName: {
                  location: 'uri',
                  locationName: 'RestoreTestingPlanName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RestoreTestingPlan'],
              members: {
                RestoreTestingPlan: {
                  type: 'structure',
                  required: ['CreationTime', 'RecoveryPointSelection', 'RestoreTestingPlanArn', 'RestoreTestingPlanName', 'ScheduleExpression'],
                  members: {
                    CreationTime: {
                      type: 'timestamp'
                    },
                    CreatorRequestId: {},
                    LastExecutionTime: {
                      type: 'timestamp'
                    },
                    LastUpdateTime: {
                      type: 'timestamp'
                    },
                    RecoveryPointSelection: {
                      shape: 'S2c'
                    },
                    RestoreTestingPlanArn: {},
                    RestoreTestingPlanName: {},
                    ScheduleExpression: {},
                    ScheduleExpressionTimezone: {},
                    StartWindowHours: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          GetRestoreTestingSelection: {
            http: {
              method: 'GET',
              requestUri: '/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlanName', 'RestoreTestingSelectionName'],
              members: {
                RestoreTestingPlanName: {
                  location: 'uri',
                  locationName: 'RestoreTestingPlanName'
                },
                RestoreTestingSelectionName: {
                  location: 'uri',
                  locationName: 'RestoreTestingSelectionName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RestoreTestingSelection'],
              members: {
                RestoreTestingSelection: {
                  type: 'structure',
                  required: ['CreationTime', 'IamRoleArn', 'ProtectedResourceType', 'RestoreTestingPlanName', 'RestoreTestingSelectionName'],
                  members: {
                    CreationTime: {
                      type: 'timestamp'
                    },
                    CreatorRequestId: {},
                    IamRoleArn: {},
                    ProtectedResourceArns: {
                      shape: 'S26'
                    },
                    ProtectedResourceConditions: {
                      shape: 'S2l'
                    },
                    ProtectedResourceType: {},
                    RestoreMetadataOverrides: {
                      shape: 'S2g'
                    },
                    RestoreTestingPlanName: {},
                    RestoreTestingSelectionName: {},
                    ValidationWindowHours: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          GetSupportedResourceTypes: {
            http: {
              method: 'GET',
              requestUri: '/supported-resource-types'
            },
            output: {
              type: 'structure',
              members: {
                ResourceTypes: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListBackupJobSummaries: {
            http: {
              method: 'GET',
              requestUri: '/audit/backup-job-summaries'
            },
            input: {
              type: 'structure',
              members: {
                AccountId: {
                  location: 'querystring',
                  locationName: 'AccountId'
                },
                State: {
                  location: 'querystring',
                  locationName: 'State'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'ResourceType'
                },
                MessageCategory: {
                  location: 'querystring',
                  locationName: 'MessageCategory'
                },
                AggregationPeriod: {
                  location: 'querystring',
                  locationName: 'AggregationPeriod'
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
                BackupJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Region: {},
                      AccountId: {},
                      State: {},
                      ResourceType: {},
                      MessageCategory: {},
                      Count: {
                        type: 'integer'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                AggregationPeriod: {},
                NextToken: {}
              }
            }
          },
          ListBackupJobs: {
            http: {
              method: 'GET',
              requestUri: '/backup-jobs/'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                ByResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                ByState: {
                  location: 'querystring',
                  locationName: 'state'
                },
                ByBackupVaultName: {
                  location: 'querystring',
                  locationName: 'backupVaultName'
                },
                ByCreatedBefore: {
                  location: 'querystring',
                  locationName: 'createdBefore',
                  type: 'timestamp'
                },
                ByCreatedAfter: {
                  location: 'querystring',
                  locationName: 'createdAfter',
                  type: 'timestamp'
                },
                ByResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                ByAccountId: {
                  location: 'querystring',
                  locationName: 'accountId'
                },
                ByCompleteAfter: {
                  location: 'querystring',
                  locationName: 'completeAfter',
                  type: 'timestamp'
                },
                ByCompleteBefore: {
                  location: 'querystring',
                  locationName: 'completeBefore',
                  type: 'timestamp'
                },
                ByParentJobId: {
                  location: 'querystring',
                  locationName: 'parentJobId'
                },
                ByMessageCategory: {
                  location: 'querystring',
                  locationName: 'messageCategory'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      BackupJobId: {},
                      BackupVaultName: {},
                      BackupVaultArn: {},
                      RecoveryPointArn: {},
                      ResourceArn: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      CompletionDate: {
                        type: 'timestamp'
                      },
                      State: {},
                      StatusMessage: {},
                      PercentDone: {},
                      BackupSizeInBytes: {
                        type: 'long'
                      },
                      IamRoleArn: {},
                      CreatedBy: {
                        shape: 'S35'
                      },
                      ExpectedCompletionDate: {
                        type: 'timestamp'
                      },
                      StartBy: {
                        type: 'timestamp'
                      },
                      ResourceType: {},
                      BytesTransferred: {
                        type: 'long'
                      },
                      BackupOptions: {
                        shape: 'Sq'
                      },
                      BackupType: {},
                      ParentJobId: {},
                      IsParent: {
                        type: 'boolean'
                      },
                      ResourceName: {},
                      InitiationDate: {
                        type: 'timestamp'
                      },
                      MessageCategory: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListBackupPlanTemplates: {
            http: {
              method: 'GET',
              requestUri: '/backup/template/plans'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                BackupPlanTemplatesList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BackupPlanTemplateId: {},
                      BackupPlanTemplateName: {}
                    }
                  }
                }
              }
            }
          },
          ListBackupPlanVersions: {
            http: {
              method: 'GET',
              requestUri: '/backup/plans/{backupPlanId}/versions/'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                BackupPlanVersionsList: {
                  type: 'list',
                  member: {
                    shape: 'S64'
                  }
                }
              }
            },
            idempotent: true
          },
          ListBackupPlans: {
            http: {
              method: 'GET',
              requestUri: '/backup/plans/'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                IncludeDeleted: {
                  location: 'querystring',
                  locationName: 'includeDeleted',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                BackupPlansList: {
                  type: 'list',
                  member: {
                    shape: 'S64'
                  }
                }
              }
            },
            idempotent: true
          },
          ListBackupSelections: {
            http: {
              method: 'GET',
              requestUri: '/backup/plans/{backupPlanId}/selections/'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                BackupSelectionsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SelectionId: {},
                      SelectionName: {},
                      BackupPlanId: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      CreatorRequestId: {},
                      IamRoleArn: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ListBackupVaults: {
            http: {
              method: 'GET',
              requestUri: '/backup-vaults/'
            },
            input: {
              type: 'structure',
              members: {
                ByVaultType: {
                  location: 'querystring',
                  locationName: 'vaultType'
                },
                ByShared: {
                  location: 'querystring',
                  locationName: 'shared',
                  type: 'boolean'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupVaultList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BackupVaultName: {},
                      BackupVaultArn: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      EncryptionKeyArn: {},
                      CreatorRequestId: {},
                      NumberOfRecoveryPoints: {
                        type: 'long'
                      },
                      Locked: {
                        type: 'boolean'
                      },
                      MinRetentionDays: {
                        type: 'long'
                      },
                      MaxRetentionDays: {
                        type: 'long'
                      },
                      LockDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListCopyJobSummaries: {
            http: {
              method: 'GET',
              requestUri: '/audit/copy-job-summaries'
            },
            input: {
              type: 'structure',
              members: {
                AccountId: {
                  location: 'querystring',
                  locationName: 'AccountId'
                },
                State: {
                  location: 'querystring',
                  locationName: 'State'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'ResourceType'
                },
                MessageCategory: {
                  location: 'querystring',
                  locationName: 'MessageCategory'
                },
                AggregationPeriod: {
                  location: 'querystring',
                  locationName: 'AggregationPeriod'
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
                CopyJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Region: {},
                      AccountId: {},
                      State: {},
                      ResourceType: {},
                      MessageCategory: {},
                      Count: {
                        type: 'integer'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                AggregationPeriod: {},
                NextToken: {}
              }
            }
          },
          ListCopyJobs: {
            http: {
              method: 'GET',
              requestUri: '/copy-jobs/'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                ByResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                ByState: {
                  location: 'querystring',
                  locationName: 'state'
                },
                ByCreatedBefore: {
                  location: 'querystring',
                  locationName: 'createdBefore',
                  type: 'timestamp'
                },
                ByCreatedAfter: {
                  location: 'querystring',
                  locationName: 'createdAfter',
                  type: 'timestamp'
                },
                ByResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                ByDestinationVaultArn: {
                  location: 'querystring',
                  locationName: 'destinationVaultArn'
                },
                ByAccountId: {
                  location: 'querystring',
                  locationName: 'accountId'
                },
                ByCompleteBefore: {
                  location: 'querystring',
                  locationName: 'completeBefore',
                  type: 'timestamp'
                },
                ByCompleteAfter: {
                  location: 'querystring',
                  locationName: 'completeAfter',
                  type: 'timestamp'
                },
                ByParentJobId: {
                  location: 'querystring',
                  locationName: 'parentJobId'
                },
                ByMessageCategory: {
                  location: 'querystring',
                  locationName: 'messageCategory'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CopyJobs: {
                  type: 'list',
                  member: {
                    shape: 'S3e'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFrameworks: {
            http: {
              method: 'GET',
              requestUri: '/audit/frameworks'
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Frameworks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FrameworkName: {},
                      FrameworkArn: {},
                      FrameworkDescription: {},
                      NumberOfControls: {
                        type: 'integer'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      DeploymentStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLegalHolds: {
            http: {
              method: 'GET',
              requestUri: '/legal-holds/'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                LegalHolds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Title: {},
                      Status: {},
                      Description: {},
                      LegalHoldId: {},
                      LegalHoldArn: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      CancellationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ListProtectedResources: {
            http: {
              method: 'GET',
              requestUri: '/resources/'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  shape: 'S6z'
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListProtectedResourcesByBackupVault: {
            http: {
              method: 'GET',
              requestUri: '/backup-vaults/{backupVaultName}/resources/'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                BackupVaultAccountId: {
                  location: 'querystring',
                  locationName: 'backupVaultAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  shape: 'S6z'
                },
                NextToken: {}
              }
            }
          },
          ListRecoveryPointsByBackupVault: {
            http: {
              method: 'GET',
              requestUri: '/backup-vaults/{backupVaultName}/recovery-points/'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                BackupVaultAccountId: {
                  location: 'querystring',
                  locationName: 'backupVaultAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                ByResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                ByResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                ByBackupPlanId: {
                  location: 'querystring',
                  locationName: 'backupPlanId'
                },
                ByCreatedBefore: {
                  location: 'querystring',
                  locationName: 'createdBefore',
                  type: 'timestamp'
                },
                ByCreatedAfter: {
                  location: 'querystring',
                  locationName: 'createdAfter',
                  type: 'timestamp'
                },
                ByParentRecoveryPointArn: {
                  location: 'querystring',
                  locationName: 'parentRecoveryPointArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                RecoveryPoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecoveryPointArn: {},
                      BackupVaultName: {},
                      BackupVaultArn: {},
                      SourceBackupVaultArn: {},
                      ResourceArn: {},
                      ResourceType: {},
                      CreatedBy: {
                        shape: 'S35'
                      },
                      IamRoleArn: {},
                      Status: {},
                      StatusMessage: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      CompletionDate: {
                        type: 'timestamp'
                      },
                      BackupSizeInBytes: {
                        type: 'long'
                      },
                      CalculatedLifecycle: {
                        shape: 'S3t'
                      },
                      Lifecycle: {
                        shape: 'Se'
                      },
                      EncryptionKeyArn: {},
                      IsEncrypted: {
                        type: 'boolean'
                      },
                      LastRestoreTime: {
                        type: 'timestamp'
                      },
                      ParentRecoveryPointArn: {},
                      CompositeMemberIdentifier: {},
                      IsParent: {
                        type: 'boolean'
                      },
                      ResourceName: {},
                      VaultType: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ListRecoveryPointsByLegalHold: {
            http: {
              method: 'GET',
              requestUri: '/legal-holds/{legalHoldId}/recovery-points'
            },
            input: {
              type: 'structure',
              required: ['LegalHoldId'],
              members: {
                LegalHoldId: {
                  location: 'uri',
                  locationName: 'legalHoldId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecoveryPoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecoveryPointArn: {},
                      ResourceArn: {},
                      ResourceType: {},
                      BackupVaultName: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListRecoveryPointsByResource: {
            http: {
              method: 'GET',
              requestUri: '/resources/{resourceArn}/recovery-points/'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                ManagedByAWSBackupOnly: {
                  location: 'querystring',
                  locationName: 'managedByAWSBackupOnly',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                RecoveryPoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecoveryPointArn: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      Status: {},
                      StatusMessage: {},
                      EncryptionKeyArn: {},
                      BackupSizeBytes: {
                        type: 'long'
                      },
                      BackupVaultName: {},
                      IsParent: {
                        type: 'boolean'
                      },
                      ParentRecoveryPointArn: {},
                      ResourceName: {},
                      VaultType: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ListReportJobs: {
            http: {
              method: 'GET',
              requestUri: '/audit/report-jobs'
            },
            input: {
              type: 'structure',
              members: {
                ByReportPlanName: {
                  location: 'querystring',
                  locationName: 'ReportPlanName'
                },
                ByCreationBefore: {
                  location: 'querystring',
                  locationName: 'CreationBefore',
                  type: 'timestamp'
                },
                ByCreationAfter: {
                  location: 'querystring',
                  locationName: 'CreationAfter',
                  type: 'timestamp'
                },
                ByStatus: {
                  location: 'querystring',
                  locationName: 'Status'
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
                ReportJobs: {
                  type: 'list',
                  member: {
                    shape: 'S43'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListReportPlans: {
            http: {
              method: 'GET',
              requestUri: '/audit/report-plans'
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReportPlans: {
                  type: 'list',
                  member: {
                    shape: 'S47'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRestoreJobSummaries: {
            http: {
              method: 'GET',
              requestUri: '/audit/restore-job-summaries'
            },
            input: {
              type: 'structure',
              members: {
                AccountId: {
                  location: 'querystring',
                  locationName: 'AccountId'
                },
                State: {
                  location: 'querystring',
                  locationName: 'State'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'ResourceType'
                },
                AggregationPeriod: {
                  location: 'querystring',
                  locationName: 'AggregationPeriod'
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
                RestoreJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Region: {},
                      AccountId: {},
                      State: {},
                      ResourceType: {},
                      Count: {
                        type: 'integer'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                AggregationPeriod: {},
                NextToken: {}
              }
            }
          },
          ListRestoreJobs: {
            http: {
              method: 'GET',
              requestUri: '/restore-jobs/'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                ByAccountId: {
                  location: 'querystring',
                  locationName: 'accountId'
                },
                ByResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                ByCreatedBefore: {
                  location: 'querystring',
                  locationName: 'createdBefore',
                  type: 'timestamp'
                },
                ByCreatedAfter: {
                  location: 'querystring',
                  locationName: 'createdAfter',
                  type: 'timestamp'
                },
                ByStatus: {
                  location: 'querystring',
                  locationName: 'status'
                },
                ByCompleteBefore: {
                  location: 'querystring',
                  locationName: 'completeBefore',
                  type: 'timestamp'
                },
                ByCompleteAfter: {
                  location: 'querystring',
                  locationName: 'completeAfter',
                  type: 'timestamp'
                },
                ByRestoreTestingPlanArn: {
                  location: 'querystring',
                  locationName: 'restoreTestingPlanArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RestoreJobs: {
                  shape: 'S7s'
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListRestoreJobsByProtectedResource: {
            http: {
              method: 'GET',
              requestUri: '/resources/{resourceArn}/restore-jobs/'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                ByStatus: {
                  location: 'querystring',
                  locationName: 'status'
                },
                ByRecoveryPointCreationDateAfter: {
                  location: 'querystring',
                  locationName: 'recoveryPointCreationDateAfter',
                  type: 'timestamp'
                },
                ByRecoveryPointCreationDateBefore: {
                  location: 'querystring',
                  locationName: 'recoveryPointCreationDateBefore',
                  type: 'timestamp'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RestoreJobs: {
                  shape: 'S7s'
                },
                NextToken: {}
              }
            }
          },
          ListRestoreTestingPlans: {
            http: {
              method: 'GET',
              requestUri: '/restore-testing/plans',
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
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RestoreTestingPlans'],
              members: {
                NextToken: {},
                RestoreTestingPlans: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CreationTime', 'RestoreTestingPlanArn', 'RestoreTestingPlanName', 'ScheduleExpression'],
                    members: {
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastExecutionTime: {
                        type: 'timestamp'
                      },
                      LastUpdateTime: {
                        type: 'timestamp'
                      },
                      RestoreTestingPlanArn: {},
                      RestoreTestingPlanName: {},
                      ScheduleExpression: {},
                      ScheduleExpressionTimezone: {},
                      StartWindowHours: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          ListRestoreTestingSelections: {
            http: {
              method: 'GET',
              requestUri: '/restore-testing/plans/{RestoreTestingPlanName}/selections',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlanName'],
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
                RestoreTestingPlanName: {
                  location: 'uri',
                  locationName: 'RestoreTestingPlanName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RestoreTestingSelections'],
              members: {
                NextToken: {},
                RestoreTestingSelections: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CreationTime', 'IamRoleArn', 'ProtectedResourceType', 'RestoreTestingPlanName', 'RestoreTestingSelectionName'],
                    members: {
                      CreationTime: {
                        type: 'timestamp'
                      },
                      IamRoleArn: {},
                      ProtectedResourceType: {},
                      RestoreTestingPlanName: {},
                      RestoreTestingSelectionName: {},
                      ValidationWindowHours: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTags: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}/'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Tags: {
                  shape: 'Sg'
                }
              }
            },
            idempotent: true
          },
          PutBackupVaultAccessPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/backup-vaults/{backupVaultName}/access-policy'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                Policy: {}
              }
            },
            idempotent: true
          },
          PutBackupVaultLockConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/backup-vaults/{backupVaultName}/vault-lock'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                MinRetentionDays: {
                  type: 'long'
                },
                MaxRetentionDays: {
                  type: 'long'
                },
                ChangeableForDays: {
                  type: 'long'
                }
              }
            },
            idempotent: true
          },
          PutBackupVaultNotifications: {
            http: {
              method: 'PUT',
              requestUri: '/backup-vaults/{backupVaultName}/notification-configuration'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'SNSTopicArn', 'BackupVaultEvents'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                SNSTopicArn: {},
                BackupVaultEvents: {
                  shape: 'S4z'
                }
              }
            },
            idempotent: true
          },
          PutRestoreValidationResult: {
            http: {
              method: 'PUT',
              requestUri: '/restore-jobs/{restoreJobId}/validations',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['RestoreJobId', 'ValidationStatus'],
              members: {
                RestoreJobId: {
                  location: 'uri',
                  locationName: 'restoreJobId'
                },
                ValidationStatus: {},
                ValidationStatusMessage: {}
              }
            },
            idempotent: true
          },
          StartBackupJob: {
            http: {
              method: 'PUT',
              requestUri: '/backup-jobs'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'ResourceArn', 'IamRoleArn'],
              members: {
                BackupVaultName: {},
                ResourceArn: {},
                IamRoleArn: {},
                IdempotencyToken: {},
                StartWindowMinutes: {
                  type: 'long'
                },
                CompleteWindowMinutes: {
                  type: 'long'
                },
                Lifecycle: {
                  shape: 'Se'
                },
                RecoveryPointTags: {
                  shape: 'Sg'
                },
                BackupOptions: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupJobId: {},
                RecoveryPointArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                IsParent: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          StartCopyJob: {
            http: {
              method: 'PUT',
              requestUri: '/copy-jobs'
            },
            input: {
              type: 'structure',
              required: ['RecoveryPointArn', 'SourceBackupVaultName', 'DestinationBackupVaultArn', 'IamRoleArn'],
              members: {
                RecoveryPointArn: {},
                SourceBackupVaultName: {},
                DestinationBackupVaultArn: {},
                IamRoleArn: {},
                IdempotencyToken: {},
                Lifecycle: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CopyJobId: {},
                CreationDate: {
                  type: 'timestamp'
                },
                IsParent: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          StartReportJob: {
            http: {
              requestUri: '/audit/report-jobs/{reportPlanName}'
            },
            input: {
              type: 'structure',
              required: ['ReportPlanName'],
              members: {
                ReportPlanName: {
                  location: 'uri',
                  locationName: 'reportPlanName'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReportJobId: {}
              }
            },
            idempotent: true
          },
          StartRestoreJob: {
            http: {
              method: 'PUT',
              requestUri: '/restore-jobs'
            },
            input: {
              type: 'structure',
              required: ['RecoveryPointArn', 'Metadata'],
              members: {
                RecoveryPointArn: {},
                Metadata: {
                  shape: 'S55'
                },
                IamRoleArn: {},
                IdempotencyToken: {},
                ResourceType: {},
                CopySourceTagsToRestoredResource: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RestoreJobId: {}
              }
            },
            idempotent: true
          },
          StopBackupJob: {
            http: {
              requestUri: '/backup-jobs/{backupJobId}'
            },
            input: {
              type: 'structure',
              required: ['BackupJobId'],
              members: {
                BackupJobId: {
                  location: 'uri',
                  locationName: 'backupJobId'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'Sg'
                }
              }
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              requestUri: '/untag/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeyList'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeyList: {
                  type: 'list',
                  member: {},
                  sensitive: true
                }
              }
            },
            idempotent: true
          },
          UpdateBackupPlan: {
            http: {
              requestUri: '/backup/plans/{backupPlanId}'
            },
            input: {
              type: 'structure',
              required: ['BackupPlanId', 'BackupPlan'],
              members: {
                BackupPlanId: {
                  location: 'uri',
                  locationName: 'backupPlanId'
                },
                BackupPlan: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupPlanId: {},
                BackupPlanArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                VersionId: {},
                AdvancedBackupSettings: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          UpdateFramework: {
            http: {
              method: 'PUT',
              requestUri: '/audit/frameworks/{frameworkName}'
            },
            input: {
              type: 'structure',
              required: ['FrameworkName'],
              members: {
                FrameworkName: {
                  location: 'uri',
                  locationName: 'frameworkName'
                },
                FrameworkDescription: {},
                FrameworkControls: {
                  shape: 'S1e'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FrameworkName: {},
                FrameworkArn: {},
                CreationTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          UpdateGlobalSettings: {
            http: {
              method: 'PUT',
              requestUri: '/global-settings'
            },
            input: {
              type: 'structure',
              members: {
                GlobalSettings: {
                  shape: 'S3l'
                }
              }
            }
          },
          UpdateRecoveryPointLifecycle: {
            http: {
              requestUri: '/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}'
            },
            input: {
              type: 'structure',
              required: ['BackupVaultName', 'RecoveryPointArn'],
              members: {
                BackupVaultName: {
                  location: 'uri',
                  locationName: 'backupVaultName'
                },
                RecoveryPointArn: {
                  location: 'uri',
                  locationName: 'recoveryPointArn'
                },
                Lifecycle: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupVaultArn: {},
                RecoveryPointArn: {},
                Lifecycle: {
                  shape: 'Se'
                },
                CalculatedLifecycle: {
                  shape: 'S3t'
                }
              }
            },
            idempotent: true
          },
          UpdateRegionSettings: {
            http: {
              method: 'PUT',
              requestUri: '/account-settings'
            },
            input: {
              type: 'structure',
              members: {
                ResourceTypeOptInPreference: {
                  shape: 'S3x'
                },
                ResourceTypeManagementPreference: {
                  shape: 'S3z'
                }
              }
            }
          },
          UpdateReportPlan: {
            http: {
              method: 'PUT',
              requestUri: '/audit/report-plans/{reportPlanName}'
            },
            input: {
              type: 'structure',
              required: ['ReportPlanName'],
              members: {
                ReportPlanName: {
                  location: 'uri',
                  locationName: 'reportPlanName'
                },
                ReportPlanDescription: {},
                ReportDeliveryChannel: {
                  shape: 'S23'
                },
                ReportSetting: {
                  shape: 'S25'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReportPlanName: {},
                ReportPlanArn: {},
                CreationTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          UpdateRestoreTestingPlan: {
            http: {
              method: 'PUT',
              requestUri: '/restore-testing/plans/{RestoreTestingPlanName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlan', 'RestoreTestingPlanName'],
              members: {
                RestoreTestingPlan: {
                  type: 'structure',
                  members: {
                    RecoveryPointSelection: {
                      shape: 'S2c'
                    },
                    ScheduleExpression: {},
                    ScheduleExpressionTimezone: {},
                    StartWindowHours: {
                      type: 'integer'
                    }
                  }
                },
                RestoreTestingPlanName: {
                  location: 'uri',
                  locationName: 'RestoreTestingPlanName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CreationTime', 'RestoreTestingPlanArn', 'RestoreTestingPlanName', 'UpdateTime'],
              members: {
                CreationTime: {
                  type: 'timestamp'
                },
                RestoreTestingPlanArn: {},
                RestoreTestingPlanName: {},
                UpdateTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          UpdateRestoreTestingSelection: {
            http: {
              method: 'PUT',
              requestUri: '/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['RestoreTestingPlanName', 'RestoreTestingSelection', 'RestoreTestingSelectionName'],
              members: {
                RestoreTestingPlanName: {
                  location: 'uri',
                  locationName: 'RestoreTestingPlanName'
                },
                RestoreTestingSelection: {
                  type: 'structure',
                  members: {
                    IamRoleArn: {},
                    ProtectedResourceArns: {
                      shape: 'S26'
                    },
                    ProtectedResourceConditions: {
                      shape: 'S2l'
                    },
                    RestoreMetadataOverrides: {
                      shape: 'S2g'
                    },
                    ValidationWindowHours: {
                      type: 'integer'
                    }
                  }
                },
                RestoreTestingSelectionName: {
                  location: 'uri',
                  locationName: 'RestoreTestingSelectionName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CreationTime', 'RestoreTestingPlanArn', 'RestoreTestingPlanName', 'RestoreTestingSelectionName', 'UpdateTime'],
              members: {
                CreationTime: {
                  type: 'timestamp'
                },
                RestoreTestingPlanArn: {},
                RestoreTestingPlanName: {},
                RestoreTestingSelectionName: {},
                UpdateTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            required: ['BackupPlanName', 'Rules'],
            members: {
              BackupPlanName: {},
              Rules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['RuleName', 'TargetBackupVaultName'],
                  members: {
                    RuleName: {},
                    TargetBackupVaultName: {},
                    ScheduleExpression: {},
                    StartWindowMinutes: {
                      type: 'long'
                    },
                    CompletionWindowMinutes: {
                      type: 'long'
                    },
                    Lifecycle: {
                      shape: 'Se'
                    },
                    RecoveryPointTags: {
                      shape: 'Sg'
                    },
                    CopyActions: {
                      shape: 'Sj'
                    },
                    EnableContinuousBackup: {
                      type: 'boolean'
                    },
                    ScheduleExpressionTimezone: {}
                  }
                }
              },
              AdvancedBackupSettings: {
                shape: 'Sn'
              }
            }
          },
          Se: {
            type: 'structure',
            members: {
              MoveToColdStorageAfterDays: {
                type: 'long'
              },
              DeleteAfterDays: {
                type: 'long'
              },
              OptInToArchiveForSupportedResources: {
                type: 'boolean'
              }
            }
          },
          Sg: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DestinationBackupVaultArn'],
              members: {
                Lifecycle: {
                  shape: 'Se'
                },
                DestinationBackupVaultArn: {}
              }
            }
          },
          Sn: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceType: {},
                BackupOptions: {
                  shape: 'Sq'
                }
              }
            }
          },
          Sq: {
            type: 'map',
            key: {},
            value: {}
          },
          Sw: {
            type: 'structure',
            required: ['SelectionName', 'IamRoleArn'],
            members: {
              SelectionName: {},
              IamRoleArn: {},
              Resources: {
                shape: 'Sz'
              },
              ListOfTags: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ConditionType', 'ConditionKey', 'ConditionValue'],
                  members: {
                    ConditionType: {},
                    ConditionKey: {},
                    ConditionValue: {}
                  }
                }
              },
              NotResources: {
                shape: 'Sz'
              },
              Conditions: {
                type: 'structure',
                members: {
                  StringEquals: {
                    shape: 'S16'
                  },
                  StringNotEquals: {
                    shape: 'S16'
                  },
                  StringLike: {
                    shape: 'S16'
                  },
                  StringNotLike: {
                    shape: 'S16'
                  }
                }
              }
            }
          },
          Sz: {
            type: 'list',
            member: {}
          },
          S16: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ConditionKey: {},
                ConditionValue: {}
              }
            }
          },
          S1e: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ControlName'],
              members: {
                ControlName: {},
                ControlInputParameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ParameterName: {},
                      ParameterValue: {}
                    }
                  }
                },
                ControlScope: {
                  type: 'structure',
                  members: {
                    ComplianceResourceIds: {
                      type: 'list',
                      member: {}
                    },
                    ComplianceResourceTypes: {
                      type: 'list',
                      member: {}
                    },
                    Tags: {
                      shape: 'S1o'
                    }
                  }
                }
              }
            }
          },
          S1o: {
            type: 'map',
            key: {},
            value: {}
          },
          S1r: {
            type: 'structure',
            members: {
              VaultNames: {
                type: 'list',
                member: {}
              },
              ResourceIdentifiers: {
                type: 'list',
                member: {}
              },
              DateRange: {
                type: 'structure',
                required: ['FromDate', 'ToDate'],
                members: {
                  FromDate: {
                    type: 'timestamp'
                  },
                  ToDate: {
                    type: 'timestamp'
                  }
                }
              }
            }
          },
          S23: {
            type: 'structure',
            required: ['S3BucketName'],
            members: {
              S3BucketName: {},
              S3KeyPrefix: {},
              Formats: {
                type: 'list',
                member: {}
              }
            }
          },
          S25: {
            type: 'structure',
            required: ['ReportTemplate'],
            members: {
              ReportTemplate: {},
              FrameworkArns: {
                shape: 'S26'
              },
              NumberOfFrameworks: {
                type: 'integer'
              },
              Accounts: {
                shape: 'S26'
              },
              OrganizationUnits: {
                shape: 'S26'
              },
              Regions: {
                shape: 'S26'
              }
            }
          },
          S26: {
            type: 'list',
            member: {}
          },
          S2c: {
            type: 'structure',
            members: {
              Algorithm: {},
              ExcludeVaults: {
                shape: 'S26'
              },
              IncludeVaults: {
                shape: 'S26'
              },
              RecoveryPointTypes: {
                type: 'list',
                member: {}
              },
              SelectionWindowDays: {
                type: 'integer'
              }
            }
          },
          S2g: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S2l: {
            type: 'structure',
            members: {
              StringEquals: {
                shape: 'S2m'
              },
              StringNotEquals: {
                shape: 'S2m'
              }
            }
          },
          S2m: {
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
          S35: {
            type: 'structure',
            members: {
              BackupPlanId: {},
              BackupPlanArn: {},
              BackupPlanVersion: {},
              BackupRuleId: {}
            }
          },
          S3e: {
            type: 'structure',
            members: {
              AccountId: {},
              CopyJobId: {},
              SourceBackupVaultArn: {},
              SourceRecoveryPointArn: {},
              DestinationBackupVaultArn: {},
              DestinationRecoveryPointArn: {},
              ResourceArn: {},
              CreationDate: {
                type: 'timestamp'
              },
              CompletionDate: {
                type: 'timestamp'
              },
              State: {},
              StatusMessage: {},
              BackupSizeInBytes: {
                type: 'long'
              },
              IamRoleArn: {},
              CreatedBy: {
                shape: 'S35'
              },
              ResourceType: {},
              ParentJobId: {},
              IsParent: {
                type: 'boolean'
              },
              CompositeMemberIdentifier: {},
              NumberOfChildJobs: {
                type: 'long'
              },
              ChildJobsInState: {
                type: 'map',
                key: {},
                value: {
                  type: 'long'
                }
              },
              ResourceName: {},
              MessageCategory: {}
            }
          },
          S3l: {
            type: 'map',
            key: {},
            value: {}
          },
          S3t: {
            type: 'structure',
            members: {
              MoveToColdStorageAt: {
                type: 'timestamp'
              },
              DeleteAt: {
                type: 'timestamp'
              }
            }
          },
          S3x: {
            type: 'map',
            key: {},
            value: {
              type: 'boolean'
            }
          },
          S3z: {
            type: 'map',
            key: {},
            value: {
              type: 'boolean'
            }
          },
          S43: {
            type: 'structure',
            members: {
              ReportJobId: {},
              ReportPlanArn: {},
              ReportTemplate: {},
              CreationTime: {
                type: 'timestamp'
              },
              CompletionTime: {
                type: 'timestamp'
              },
              Status: {},
              StatusMessage: {},
              ReportDestination: {
                type: 'structure',
                members: {
                  S3BucketName: {},
                  S3Keys: {
                    shape: 'S26'
                  }
                }
              }
            }
          },
          S47: {
            type: 'structure',
            members: {
              ReportPlanArn: {},
              ReportPlanName: {},
              ReportPlanDescription: {},
              ReportSetting: {
                shape: 'S25'
              },
              ReportDeliveryChannel: {
                shape: 'S23'
              },
              DeploymentStatus: {},
              CreationTime: {
                type: 'timestamp'
              },
              LastAttemptedExecutionTime: {
                type: 'timestamp'
              },
              LastSuccessfulExecutionTime: {
                type: 'timestamp'
              }
            }
          },
          S4c: {
            type: 'structure',
            members: {
              RestoreTestingPlanArn: {}
            }
          },
          S4l: {
            type: 'structure',
            required: ['BackupPlanName', 'Rules'],
            members: {
              BackupPlanName: {},
              Rules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['RuleName', 'TargetBackupVaultName'],
                  members: {
                    RuleName: {},
                    TargetBackupVaultName: {},
                    ScheduleExpression: {},
                    StartWindowMinutes: {
                      type: 'long'
                    },
                    CompletionWindowMinutes: {
                      type: 'long'
                    },
                    Lifecycle: {
                      shape: 'Se'
                    },
                    RecoveryPointTags: {
                      shape: 'Sg'
                    },
                    RuleId: {},
                    CopyActions: {
                      shape: 'Sj'
                    },
                    EnableContinuousBackup: {
                      type: 'boolean'
                    },
                    ScheduleExpressionTimezone: {}
                  }
                }
              },
              AdvancedBackupSettings: {
                shape: 'Sn'
              }
            }
          },
          S4z: {
            type: 'list',
            member: {}
          },
          S55: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S64: {
            type: 'structure',
            members: {
              BackupPlanArn: {},
              BackupPlanId: {},
              CreationDate: {
                type: 'timestamp'
              },
              DeletionDate: {
                type: 'timestamp'
              },
              VersionId: {},
              BackupPlanName: {},
              CreatorRequestId: {},
              LastExecutionDate: {
                type: 'timestamp'
              },
              AdvancedBackupSettings: {
                shape: 'Sn'
              }
            }
          },
          S6z: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceArn: {},
                ResourceType: {},
                LastBackupTime: {
                  type: 'timestamp'
                },
                ResourceName: {},
                LastBackupVaultArn: {},
                LastRecoveryPointArn: {}
              }
            }
          },
          S7s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AccountId: {},
                RestoreJobId: {},
                RecoveryPointArn: {},
                CreationDate: {
                  type: 'timestamp'
                },
                CompletionDate: {
                  type: 'timestamp'
                },
                Status: {},
                StatusMessage: {},
                PercentDone: {},
                BackupSizeInBytes: {
                  type: 'long'
                },
                IamRoleArn: {},
                ExpectedCompletionTimeMinutes: {
                  type: 'long'
                },
                CreatedResourceArn: {},
                ResourceType: {},
                RecoveryPointCreationDate: {
                  type: 'timestamp'
                },
                CreatedBy: {
                  shape: 'S4c'
                },
                ValidationStatus: {},
                ValidationStatusMessage: {},
                DeletionStatus: {},
                DeletionStatusMessage: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=04321acfb23a5da5d87bacce474e343753707f06.js.map