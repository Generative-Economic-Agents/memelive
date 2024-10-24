System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-04-21',
          endpointPrefix: 'redshift-serverless',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Redshift Serverless',
          serviceId: 'Redshift Serverless',
          signatureVersion: 'v4',
          signingName: 'redshift-serverless',
          targetPrefix: 'RedshiftServerless',
          uid: 'redshift-serverless-2021-04-21'
        },
        operations: {
          ConvertRecoveryPointToSnapshot: {
            input: {
              type: 'structure',
              required: ['recoveryPointId', 'snapshotName'],
              members: {
                recoveryPointId: {},
                retentionPeriod: {
                  type: 'integer'
                },
                snapshotName: {},
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            }
          },
          CreateCustomDomainAssociation: {
            input: {
              type: 'structure',
              required: ['customDomainCertificateArn', 'customDomainName', 'workgroupName'],
              members: {
                customDomainCertificateArn: {},
                customDomainName: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                customDomainCertificateArn: {},
                customDomainCertificateExpiryTime: {
                  shape: 'Se'
                },
                customDomainName: {},
                workgroupName: {}
              }
            }
          },
          CreateEndpointAccess: {
            input: {
              type: 'structure',
              required: ['endpointName', 'subnetIds', 'workgroupName'],
              members: {
                endpointName: {},
                ownerAccount: {},
                subnetIds: {
                  shape: 'Sn'
                },
                vpcSecurityGroupIds: {
                  shape: 'Sp'
                },
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                endpoint: {
                  shape: 'Ss'
                }
              }
            },
            idempotent: true
          },
          CreateNamespace: {
            input: {
              type: 'structure',
              required: ['namespaceName'],
              members: {
                adminPasswordSecretKmsKeyId: {},
                adminUserPassword: {
                  shape: 'Sz'
                },
                adminUsername: {
                  shape: 'S10'
                },
                dbName: {},
                defaultIamRoleArn: {},
                iamRoles: {
                  shape: 'S11'
                },
                kmsKeyId: {},
                logExports: {
                  shape: 'S13'
                },
                manageAdminPassword: {
                  type: 'boolean'
                },
                namespaceName: {},
                redshiftIdcApplicationArn: {},
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                namespace: {
                  shape: 'S19'
                }
              }
            },
            idempotent: true
          },
          CreateScheduledAction: {
            input: {
              type: 'structure',
              required: ['namespaceName', 'roleArn', 'schedule', 'scheduledActionName', 'targetAction'],
              members: {
                enabled: {
                  type: 'boolean'
                },
                endTime: {
                  type: 'timestamp'
                },
                namespaceName: {},
                roleArn: {},
                schedule: {
                  shape: 'S1d'
                },
                scheduledActionDescription: {},
                scheduledActionName: {},
                startTime: {
                  type: 'timestamp'
                },
                targetAction: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                scheduledAction: {
                  shape: 'S1j'
                }
              }
            },
            idempotent: true
          },
          CreateSnapshot: {
            input: {
              type: 'structure',
              required: ['namespaceName', 'snapshotName'],
              members: {
                namespaceName: {},
                retentionPeriod: {
                  type: 'integer'
                },
                snapshotName: {},
                tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          CreateSnapshotCopyConfiguration: {
            input: {
              type: 'structure',
              required: ['destinationRegion', 'namespaceName'],
              members: {
                destinationKmsKeyId: {},
                destinationRegion: {},
                namespaceName: {},
                snapshotRetentionPeriod: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['snapshotCopyConfiguration'],
              members: {
                snapshotCopyConfiguration: {
                  shape: 'S1q'
                }
              }
            },
            idempotent: true
          },
          CreateUsageLimit: {
            input: {
              type: 'structure',
              required: ['amount', 'resourceArn', 'usageType'],
              members: {
                amount: {
                  type: 'long'
                },
                breachAction: {},
                period: {},
                resourceArn: {},
                usageType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                usageLimit: {
                  shape: 'S1w'
                }
              }
            },
            idempotent: true
          },
          CreateWorkgroup: {
            input: {
              type: 'structure',
              required: ['namespaceName', 'workgroupName'],
              members: {
                baseCapacity: {
                  type: 'integer'
                },
                configParameters: {
                  shape: 'S1y'
                },
                enhancedVpcRouting: {
                  type: 'boolean'
                },
                maxCapacity: {
                  type: 'integer'
                },
                namespaceName: {},
                port: {
                  type: 'integer'
                },
                publiclyAccessible: {
                  type: 'boolean'
                },
                securityGroupIds: {
                  shape: 'S22'
                },
                subnetIds: {
                  shape: 'Sn'
                },
                tags: {
                  shape: 'S4'
                },
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                workgroup: {
                  shape: 'S25'
                }
              }
            },
            idempotent: true
          },
          DeleteCustomDomainAssociation: {
            input: {
              type: 'structure',
              required: ['customDomainName', 'workgroupName'],
              members: {
                customDomainName: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEndpointAccess: {
            input: {
              type: 'structure',
              required: ['endpointName'],
              members: {
                endpointName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                endpoint: {
                  shape: 'Ss'
                }
              }
            },
            idempotent: true
          },
          DeleteNamespace: {
            input: {
              type: 'structure',
              required: ['namespaceName'],
              members: {
                finalSnapshotName: {},
                finalSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                namespaceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['namespace'],
              members: {
                namespace: {
                  shape: 'S19'
                }
              }
            },
            idempotent: true
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteScheduledAction: {
            input: {
              type: 'structure',
              required: ['scheduledActionName'],
              members: {
                scheduledActionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                scheduledAction: {
                  shape: 'S1j'
                }
              }
            },
            idempotent: true
          },
          DeleteSnapshot: {
            input: {
              type: 'structure',
              required: ['snapshotName'],
              members: {
                snapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          DeleteSnapshotCopyConfiguration: {
            input: {
              type: 'structure',
              required: ['snapshotCopyConfigurationId'],
              members: {
                snapshotCopyConfigurationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['snapshotCopyConfiguration'],
              members: {
                snapshotCopyConfiguration: {
                  shape: 'S1q'
                }
              }
            },
            idempotent: true
          },
          DeleteUsageLimit: {
            input: {
              type: 'structure',
              required: ['usageLimitId'],
              members: {
                usageLimitId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                usageLimit: {
                  shape: 'S1w'
                }
              }
            },
            idempotent: true
          },
          DeleteWorkgroup: {
            input: {
              type: 'structure',
              required: ['workgroupName'],
              members: {
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['workgroup'],
              members: {
                workgroup: {
                  shape: 'S25'
                }
              }
            },
            idempotent: true
          },
          GetCredentials: {
            input: {
              type: 'structure',
              members: {
                customDomainName: {},
                dbName: {},
                durationSeconds: {
                  type: 'integer'
                },
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                dbPassword: {
                  shape: 'Sz'
                },
                dbUser: {
                  shape: 'S10'
                },
                expiration: {
                  type: 'timestamp'
                },
                nextRefreshTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetCustomDomainAssociation: {
            input: {
              type: 'structure',
              required: ['customDomainName', 'workgroupName'],
              members: {
                customDomainName: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                customDomainCertificateArn: {},
                customDomainCertificateExpiryTime: {
                  shape: 'Se'
                },
                customDomainName: {},
                workgroupName: {}
              }
            }
          },
          GetEndpointAccess: {
            input: {
              type: 'structure',
              required: ['endpointName'],
              members: {
                endpointName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                endpoint: {
                  shape: 'Ss'
                }
              }
            }
          },
          GetNamespace: {
            input: {
              type: 'structure',
              required: ['namespaceName'],
              members: {
                namespaceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['namespace'],
              members: {
                namespace: {
                  shape: 'S19'
                }
              }
            }
          },
          GetRecoveryPoint: {
            input: {
              type: 'structure',
              required: ['recoveryPointId'],
              members: {
                recoveryPointId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                recoveryPoint: {
                  shape: 'S33'
                }
              }
            }
          },
          GetResourcePolicy: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourcePolicy: {
                  shape: 'S36'
                }
              }
            }
          },
          GetScheduledAction: {
            input: {
              type: 'structure',
              required: ['scheduledActionName'],
              members: {
                scheduledActionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                scheduledAction: {
                  shape: 'S1j'
                }
              }
            }
          },
          GetSnapshot: {
            input: {
              type: 'structure',
              members: {
                ownerAccount: {},
                snapshotArn: {},
                snapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            }
          },
          GetTableRestoreStatus: {
            input: {
              type: 'structure',
              required: ['tableRestoreRequestId'],
              members: {
                tableRestoreRequestId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tableRestoreStatus: {
                  shape: 'S3d'
                }
              }
            }
          },
          GetUsageLimit: {
            input: {
              type: 'structure',
              required: ['usageLimitId'],
              members: {
                usageLimitId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                usageLimit: {
                  shape: 'S1w'
                }
              }
            }
          },
          GetWorkgroup: {
            input: {
              type: 'structure',
              required: ['workgroupName'],
              members: {
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['workgroup'],
              members: {
                workgroup: {
                  shape: 'S25'
                }
              }
            }
          },
          ListCustomDomainAssociations: {
            input: {
              type: 'structure',
              members: {
                customDomainCertificateArn: {},
                customDomainName: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                associations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      customDomainCertificateArn: {},
                      customDomainCertificateExpiryTime: {
                        shape: 'Se'
                      },
                      customDomainName: {},
                      workgroupName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEndpointAccess: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                ownerAccount: {},
                vpcId: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['endpoints'],
              members: {
                endpoints: {
                  type: 'list',
                  member: {
                    shape: 'Ss'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListNamespaces: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['namespaces'],
              members: {
                namespaces: {
                  type: 'list',
                  member: {
                    shape: 'S19'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRecoveryPoints: {
            input: {
              type: 'structure',
              members: {
                endTime: {
                  type: 'timestamp'
                },
                maxResults: {
                  type: 'integer'
                },
                namespaceArn: {},
                namespaceName: {},
                nextToken: {},
                startTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                recoveryPoints: {
                  type: 'list',
                  member: {
                    shape: 'S33'
                  }
                }
              }
            }
          },
          ListScheduledActions: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                namespaceName: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                scheduledActions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      namespaceName: {},
                      scheduledActionName: {}
                    }
                  }
                }
              }
            }
          },
          ListSnapshotCopyConfigurations: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                namespaceName: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['snapshotCopyConfigurations'],
              members: {
                nextToken: {},
                snapshotCopyConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'S1q'
                  }
                }
              }
            }
          },
          ListSnapshots: {
            input: {
              type: 'structure',
              members: {
                endTime: {
                  type: 'timestamp'
                },
                maxResults: {
                  type: 'integer'
                },
                namespaceArn: {},
                namespaceName: {},
                nextToken: {},
                ownerAccount: {},
                startTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                snapshots: {
                  type: 'list',
                  member: {
                    shape: 'S9'
                  }
                }
              }
            }
          },
          ListTableRestoreStatus: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                namespaceName: {},
                nextToken: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                tableRestoreStatuses: {
                  type: 'list',
                  member: {
                    shape: 'S3d'
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S4'
                }
              }
            }
          },
          ListUsageLimits: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resourceArn: {},
                usageType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                usageLimits: {
                  type: 'list',
                  member: {
                    shape: 'S1w'
                  }
                }
              }
            }
          },
          ListWorkgroups: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                ownerAccount: {}
              }
            },
            output: {
              type: 'structure',
              required: ['workgroups'],
              members: {
                nextToken: {},
                workgroups: {
                  type: 'list',
                  member: {
                    shape: 'S25'
                  }
                }
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['policy', 'resourceArn'],
              members: {
                policy: {},
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourcePolicy: {
                  shape: 'S36'
                }
              }
            }
          },
          RestoreFromRecoveryPoint: {
            input: {
              type: 'structure',
              required: ['namespaceName', 'recoveryPointId', 'workgroupName'],
              members: {
                namespaceName: {},
                recoveryPointId: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                namespace: {
                  shape: 'S19'
                },
                recoveryPointId: {}
              }
            }
          },
          RestoreFromSnapshot: {
            input: {
              type: 'structure',
              required: ['namespaceName', 'workgroupName'],
              members: {
                adminPasswordSecretKmsKeyId: {},
                manageAdminPassword: {
                  type: 'boolean'
                },
                namespaceName: {},
                ownerAccount: {},
                snapshotArn: {},
                snapshotName: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                namespace: {
                  shape: 'S19'
                },
                ownerAccount: {},
                snapshotName: {}
              }
            },
            idempotent: true
          },
          RestoreTableFromRecoveryPoint: {
            input: {
              type: 'structure',
              required: ['namespaceName', 'newTableName', 'recoveryPointId', 'sourceDatabaseName', 'sourceTableName', 'workgroupName'],
              members: {
                activateCaseSensitiveIdentifier: {
                  type: 'boolean'
                },
                namespaceName: {},
                newTableName: {},
                recoveryPointId: {},
                sourceDatabaseName: {},
                sourceSchemaName: {},
                sourceTableName: {},
                targetDatabaseName: {},
                targetSchemaName: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tableRestoreStatus: {
                  shape: 'S3d'
                }
              }
            }
          },
          RestoreTableFromSnapshot: {
            input: {
              type: 'structure',
              required: ['namespaceName', 'newTableName', 'snapshotName', 'sourceDatabaseName', 'sourceTableName', 'workgroupName'],
              members: {
                activateCaseSensitiveIdentifier: {
                  type: 'boolean'
                },
                namespaceName: {},
                newTableName: {},
                snapshotName: {},
                sourceDatabaseName: {},
                sourceSchemaName: {},
                sourceTableName: {},
                targetDatabaseName: {},
                targetSchemaName: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tableRestoreStatus: {
                  shape: 'S3d'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'S4'
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
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
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
          UpdateCustomDomainAssociation: {
            input: {
              type: 'structure',
              required: ['customDomainCertificateArn', 'customDomainName', 'workgroupName'],
              members: {
                customDomainCertificateArn: {},
                customDomainName: {},
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                customDomainCertificateArn: {},
                customDomainCertificateExpiryTime: {
                  shape: 'Se'
                },
                customDomainName: {},
                workgroupName: {}
              }
            }
          },
          UpdateEndpointAccess: {
            input: {
              type: 'structure',
              required: ['endpointName'],
              members: {
                endpointName: {},
                vpcSecurityGroupIds: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                endpoint: {
                  shape: 'Ss'
                }
              }
            }
          },
          UpdateNamespace: {
            input: {
              type: 'structure',
              required: ['namespaceName'],
              members: {
                adminPasswordSecretKmsKeyId: {},
                adminUserPassword: {
                  shape: 'Sz'
                },
                adminUsername: {
                  shape: 'S10'
                },
                defaultIamRoleArn: {},
                iamRoles: {
                  shape: 'S11'
                },
                kmsKeyId: {},
                logExports: {
                  shape: 'S13'
                },
                manageAdminPassword: {
                  type: 'boolean'
                },
                namespaceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['namespace'],
              members: {
                namespace: {
                  shape: 'S19'
                }
              }
            }
          },
          UpdateScheduledAction: {
            input: {
              type: 'structure',
              required: ['scheduledActionName'],
              members: {
                enabled: {
                  type: 'boolean'
                },
                endTime: {
                  type: 'timestamp'
                },
                roleArn: {},
                schedule: {
                  shape: 'S1d'
                },
                scheduledActionDescription: {},
                scheduledActionName: {},
                startTime: {
                  type: 'timestamp'
                },
                targetAction: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                scheduledAction: {
                  shape: 'S1j'
                }
              }
            },
            idempotent: true
          },
          UpdateSnapshot: {
            input: {
              type: 'structure',
              required: ['snapshotName'],
              members: {
                retentionPeriod: {
                  type: 'integer'
                },
                snapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                snapshot: {
                  shape: 'S9'
                }
              }
            }
          },
          UpdateSnapshotCopyConfiguration: {
            input: {
              type: 'structure',
              required: ['snapshotCopyConfigurationId'],
              members: {
                snapshotCopyConfigurationId: {},
                snapshotRetentionPeriod: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['snapshotCopyConfiguration'],
              members: {
                snapshotCopyConfiguration: {
                  shape: 'S1q'
                }
              }
            }
          },
          UpdateUsageLimit: {
            input: {
              type: 'structure',
              required: ['usageLimitId'],
              members: {
                amount: {
                  type: 'long'
                },
                breachAction: {},
                usageLimitId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                usageLimit: {
                  shape: 'S1w'
                }
              }
            }
          },
          UpdateWorkgroup: {
            input: {
              type: 'structure',
              required: ['workgroupName'],
              members: {
                baseCapacity: {
                  type: 'integer'
                },
                configParameters: {
                  shape: 'S1y'
                },
                enhancedVpcRouting: {
                  type: 'boolean'
                },
                maxCapacity: {
                  type: 'integer'
                },
                port: {
                  type: 'integer'
                },
                publiclyAccessible: {
                  type: 'boolean'
                },
                securityGroupIds: {
                  shape: 'S22'
                },
                subnetIds: {
                  shape: 'Sn'
                },
                workgroupName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['workgroup'],
              members: {
                workgroup: {
                  shape: 'S25'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
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
          S9: {
            type: 'structure',
            members: {
              accountsWithProvisionedRestoreAccess: {
                shape: 'Sa'
              },
              accountsWithRestoreAccess: {
                shape: 'Sa'
              },
              actualIncrementalBackupSizeInMegaBytes: {
                type: 'double'
              },
              adminPasswordSecretArn: {},
              adminPasswordSecretKmsKeyId: {},
              adminUsername: {},
              backupProgressInMegaBytes: {
                type: 'double'
              },
              currentBackupRateInMegaBytesPerSecond: {
                type: 'double'
              },
              elapsedTimeInSeconds: {
                type: 'long'
              },
              estimatedSecondsToCompletion: {
                type: 'long'
              },
              kmsKeyId: {},
              namespaceArn: {},
              namespaceName: {},
              ownerAccount: {},
              snapshotArn: {},
              snapshotCreateTime: {
                shape: 'Se'
              },
              snapshotName: {},
              snapshotRemainingDays: {
                type: 'integer'
              },
              snapshotRetentionPeriod: {
                type: 'integer'
              },
              snapshotRetentionStartTime: {
                shape: 'Se'
              },
              status: {},
              totalBackupSizeInMegaBytes: {
                type: 'double'
              }
            }
          },
          Sa: {
            type: 'list',
            member: {}
          },
          Se: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sn: {
            type: 'list',
            member: {}
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Ss: {
            type: 'structure',
            members: {
              address: {},
              endpointArn: {},
              endpointCreateTime: {
                shape: 'Se'
              },
              endpointName: {},
              endpointStatus: {},
              port: {
                type: 'integer'
              },
              subnetIds: {
                shape: 'Sn'
              },
              vpcEndpoint: {
                shape: 'St'
              },
              vpcSecurityGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    status: {},
                    vpcSecurityGroupId: {}
                  }
                }
              },
              workgroupName: {}
            }
          },
          St: {
            type: 'structure',
            members: {
              networkInterfaces: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    availabilityZone: {},
                    networkInterfaceId: {},
                    privateIpAddress: {},
                    subnetId: {}
                  }
                }
              },
              vpcEndpointId: {},
              vpcId: {}
            }
          },
          Sz: {
            type: 'string',
            sensitive: true
          },
          S10: {
            type: 'string',
            sensitive: true
          },
          S11: {
            type: 'list',
            member: {}
          },
          S13: {
            type: 'list',
            member: {}
          },
          S19: {
            type: 'structure',
            members: {
              adminPasswordSecretArn: {},
              adminPasswordSecretKmsKeyId: {},
              adminUsername: {
                shape: 'S10'
              },
              creationDate: {
                shape: 'Se'
              },
              dbName: {},
              defaultIamRoleArn: {},
              iamRoles: {
                shape: 'S11'
              },
              kmsKeyId: {},
              logExports: {
                shape: 'S13'
              },
              namespaceArn: {},
              namespaceId: {},
              namespaceName: {},
              status: {}
            }
          },
          S1d: {
            type: 'structure',
            members: {
              at: {
                type: 'timestamp'
              },
              cron: {}
            },
            union: true
          },
          S1f: {
            type: 'structure',
            members: {
              createSnapshot: {
                type: 'structure',
                required: ['namespaceName', 'snapshotNamePrefix'],
                members: {
                  namespaceName: {},
                  retentionPeriod: {
                    type: 'integer'
                  },
                  snapshotNamePrefix: {},
                  tags: {
                    shape: 'S4'
                  }
                }
              }
            },
            union: true
          },
          S1j: {
            type: 'structure',
            members: {
              endTime: {
                type: 'timestamp'
              },
              namespaceName: {},
              nextInvocations: {
                type: 'list',
                member: {
                  type: 'timestamp'
                }
              },
              roleArn: {},
              schedule: {
                shape: 'S1d'
              },
              scheduledActionDescription: {},
              scheduledActionName: {},
              scheduledActionUuid: {},
              startTime: {
                type: 'timestamp'
              },
              state: {},
              targetAction: {
                shape: 'S1f'
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              destinationKmsKeyId: {},
              destinationRegion: {},
              namespaceName: {},
              snapshotCopyConfigurationArn: {},
              snapshotCopyConfigurationId: {},
              snapshotRetentionPeriod: {
                type: 'integer'
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              amount: {
                type: 'long'
              },
              breachAction: {},
              period: {},
              resourceArn: {},
              usageLimitArn: {},
              usageLimitId: {},
              usageType: {}
            }
          },
          S1y: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                parameterKey: {},
                parameterValue: {}
              }
            }
          },
          S22: {
            type: 'list',
            member: {}
          },
          S25: {
            type: 'structure',
            members: {
              baseCapacity: {
                type: 'integer'
              },
              configParameters: {
                shape: 'S1y'
              },
              creationDate: {
                shape: 'Se'
              },
              crossAccountVpcs: {
                type: 'list',
                member: {}
              },
              customDomainCertificateArn: {},
              customDomainCertificateExpiryTime: {
                shape: 'Se'
              },
              customDomainName: {},
              endpoint: {
                type: 'structure',
                members: {
                  address: {},
                  port: {
                    type: 'integer'
                  },
                  vpcEndpoints: {
                    type: 'list',
                    member: {
                      shape: 'St'
                    }
                  }
                }
              },
              enhancedVpcRouting: {
                type: 'boolean'
              },
              maxCapacity: {
                type: 'integer'
              },
              namespaceName: {},
              patchVersion: {},
              port: {
                type: 'integer'
              },
              publiclyAccessible: {
                type: 'boolean'
              },
              securityGroupIds: {
                shape: 'S22'
              },
              status: {},
              subnetIds: {
                shape: 'Sn'
              },
              workgroupArn: {},
              workgroupId: {},
              workgroupName: {},
              workgroupVersion: {}
            }
          },
          S33: {
            type: 'structure',
            members: {
              namespaceArn: {},
              namespaceName: {},
              recoveryPointCreateTime: {
                shape: 'Se'
              },
              recoveryPointId: {},
              totalSizeInMegaBytes: {
                type: 'double'
              },
              workgroupName: {}
            }
          },
          S36: {
            type: 'structure',
            members: {
              policy: {},
              resourceArn: {}
            }
          },
          S3d: {
            type: 'structure',
            members: {
              message: {},
              namespaceName: {},
              newTableName: {},
              progressInMegaBytes: {
                type: 'long'
              },
              recoveryPointId: {},
              requestTime: {
                type: 'timestamp'
              },
              snapshotName: {},
              sourceDatabaseName: {},
              sourceSchemaName: {},
              sourceTableName: {},
              status: {},
              tableRestoreRequestId: {},
              targetDatabaseName: {},
              targetSchemaName: {},
              totalDataInMegaBytes: {
                type: 'long'
              },
              workgroupName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=dfa305eb7f9e635d01e4a8a8e8a09c7951b64bf3.js.map