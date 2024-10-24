System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-03-31',
          endpointPrefix: 'lakeformation',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS Lake Formation',
          serviceId: 'LakeFormation',
          signatureVersion: 'v4',
          signingName: 'lakeformation',
          uid: 'lakeformation-2017-03-31'
        },
        operations: {
          AddLFTagsToResource: {
            http: {
              requestUri: '/AddLFTagsToResource'
            },
            input: {
              type: 'structure',
              required: ['Resource', 'LFTags'],
              members: {
                CatalogId: {},
                Resource: {
                  shape: 'S3'
                },
                LFTags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Failures: {
                  shape: 'Sq'
                }
              }
            }
          },
          AssumeDecoratedRoleWithSAML: {
            http: {
              requestUri: '/AssumeDecoratedRoleWithSAML'
            },
            input: {
              type: 'structure',
              required: ['SAMLAssertion', 'RoleArn', 'PrincipalArn'],
              members: {
                SAMLAssertion: {},
                RoleArn: {},
                PrincipalArn: {},
                DurationSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessKeyId: {},
                SecretAccessKey: {},
                SessionToken: {},
                Expiration: {
                  type: 'timestamp'
                }
              }
            }
          },
          BatchGrantPermissions: {
            http: {
              requestUri: '/BatchGrantPermissions'
            },
            input: {
              type: 'structure',
              required: ['Entries'],
              members: {
                CatalogId: {},
                Entries: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Failures: {
                  shape: 'S1d'
                }
              }
            }
          },
          BatchRevokePermissions: {
            http: {
              requestUri: '/BatchRevokePermissions'
            },
            input: {
              type: 'structure',
              required: ['Entries'],
              members: {
                CatalogId: {},
                Entries: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Failures: {
                  shape: 'S1d'
                }
              }
            }
          },
          CancelTransaction: {
            http: {
              requestUri: '/CancelTransaction'
            },
            input: {
              type: 'structure',
              required: ['TransactionId'],
              members: {
                TransactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CommitTransaction: {
            http: {
              requestUri: '/CommitTransaction'
            },
            input: {
              type: 'structure',
              required: ['TransactionId'],
              members: {
                TransactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransactionStatus: {}
              }
            }
          },
          CreateDataCellsFilter: {
            http: {
              requestUri: '/CreateDataCellsFilter'
            },
            input: {
              type: 'structure',
              required: ['TableData'],
              members: {
                TableData: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateLFTag: {
            http: {
              requestUri: '/CreateLFTag'
            },
            input: {
              type: 'structure',
              required: ['TagKey', 'TagValues'],
              members: {
                CatalogId: {},
                TagKey: {},
                TagValues: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateLakeFormationIdentityCenterConfiguration: {
            http: {
              requestUri: '/CreateLakeFormationIdentityCenterConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                CatalogId: {},
                InstanceArn: {},
                ExternalFiltering: {
                  shape: 'S1y'
                },
                ShareRecipients: {
                  shape: 'S22'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationArn: {}
              }
            }
          },
          CreateLakeFormationOptIn: {
            http: {
              requestUri: '/CreateLakeFormationOptIn'
            },
            input: {
              type: 'structure',
              required: ['Principal', 'Resource'],
              members: {
                Principal: {
                  shape: 'S18'
                },
                Resource: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDataCellsFilter: {
            http: {
              requestUri: '/DeleteDataCellsFilter'
            },
            input: {
              type: 'structure',
              members: {
                TableCatalogId: {},
                DatabaseName: {},
                TableName: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLFTag: {
            http: {
              requestUri: '/DeleteLFTag'
            },
            input: {
              type: 'structure',
              required: ['TagKey'],
              members: {
                CatalogId: {},
                TagKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLakeFormationIdentityCenterConfiguration: {
            http: {
              requestUri: '/DeleteLakeFormationIdentityCenterConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                CatalogId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLakeFormationOptIn: {
            http: {
              requestUri: '/DeleteLakeFormationOptIn'
            },
            input: {
              type: 'structure',
              required: ['Principal', 'Resource'],
              members: {
                Principal: {
                  shape: 'S18'
                },
                Resource: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteObjectsOnCancel: {
            http: {
              requestUri: '/DeleteObjectsOnCancel'
            },
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'TransactionId', 'Objects'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                TransactionId: {},
                Objects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Uri'],
                    members: {
                      Uri: {},
                      ETag: {}
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
          DeregisterResource: {
            http: {
              requestUri: '/DeregisterResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeLakeFormationIdentityCenterConfiguration: {
            http: {
              requestUri: '/DescribeLakeFormationIdentityCenterConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                CatalogId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CatalogId: {},
                InstanceArn: {},
                ApplicationArn: {},
                ExternalFiltering: {
                  shape: 'S1y'
                },
                ShareRecipients: {
                  shape: 'S22'
                },
                ResourceShare: {}
              }
            }
          },
          DescribeResource: {
            http: {
              requestUri: '/DescribeResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceInfo: {
                  shape: 'S2s'
                }
              }
            }
          },
          DescribeTransaction: {
            http: {
              requestUri: '/DescribeTransaction'
            },
            input: {
              type: 'structure',
              required: ['TransactionId'],
              members: {
                TransactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransactionDescription: {
                  shape: 'S2x'
                }
              }
            }
          },
          ExtendTransaction: {
            http: {
              requestUri: '/ExtendTransaction'
            },
            input: {
              type: 'structure',
              members: {
                TransactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetDataCellsFilter: {
            http: {
              requestUri: '/GetDataCellsFilter'
            },
            input: {
              type: 'structure',
              required: ['TableCatalogId', 'DatabaseName', 'TableName', 'Name'],
              members: {
                TableCatalogId: {},
                DatabaseName: {},
                TableName: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataCellsFilter: {
                  shape: 'S1o'
                }
              }
            }
          },
          GetDataLakePrincipal: {
            http: {
              requestUri: '/GetDataLakePrincipal'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Identity: {}
              }
            }
          },
          GetDataLakeSettings: {
            http: {
              requestUri: '/GetDataLakeSettings'
            },
            input: {
              type: 'structure',
              members: {
                CatalogId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataLakeSettings: {
                  shape: 'S38'
                }
              }
            }
          },
          GetEffectivePermissionsForPath: {
            http: {
              requestUri: '/GetEffectivePermissionsForPath'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                CatalogId: {},
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
                Permissions: {
                  shape: 'S3k'
                },
                NextToken: {}
              }
            }
          },
          GetLFTag: {
            http: {
              requestUri: '/GetLFTag'
            },
            input: {
              type: 'structure',
              required: ['TagKey'],
              members: {
                CatalogId: {},
                TagKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CatalogId: {},
                TagKey: {},
                TagValues: {
                  shape: 'Sg'
                }
              }
            }
          },
          GetQueryState: {
            http: {
              requestUri: '/GetQueryState',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['QueryId'],
              members: {
                QueryId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['State'],
              members: {
                Error: {},
                State: {}
              }
            },
            endpoint: {
              hostPrefix: 'query-'
            }
          },
          GetQueryStatistics: {
            http: {
              requestUri: '/GetQueryStatistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['QueryId'],
              members: {
                QueryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExecutionStatistics: {
                  type: 'structure',
                  members: {
                    AverageExecutionTimeMillis: {
                      type: 'long'
                    },
                    DataScannedBytes: {
                      type: 'long'
                    },
                    WorkUnitsExecutedCount: {
                      type: 'long'
                    }
                  }
                },
                PlanningStatistics: {
                  type: 'structure',
                  members: {
                    EstimatedDataToScanBytes: {
                      type: 'long'
                    },
                    PlanningTimeMillis: {
                      type: 'long'
                    },
                    QueueTimeMillis: {
                      type: 'long'
                    },
                    WorkUnitsGeneratedCount: {
                      type: 'long'
                    }
                  }
                },
                QuerySubmissionTime: {
                  type: 'timestamp',
                  timestampFormat: 'iso8601'
                }
              }
            },
            endpoint: {
              hostPrefix: 'query-'
            }
          },
          GetResourceLFTags: {
            http: {
              requestUri: '/GetResourceLFTags'
            },
            input: {
              type: 'structure',
              required: ['Resource'],
              members: {
                CatalogId: {},
                Resource: {
                  shape: 'S3'
                },
                ShowAssignedLFTags: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LFTagOnDatabase: {
                  shape: 'Sn'
                },
                LFTagsOnTable: {
                  shape: 'Sn'
                },
                LFTagsOnColumns: {
                  shape: 'S47'
                }
              }
            }
          },
          GetTableObjects: {
            http: {
              requestUri: '/GetTableObjects'
            },
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                TransactionId: {},
                QueryAsOfTime: {
                  type: 'timestamp'
                },
                PartitionPredicate: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Objects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PartitionValues: {
                        shape: 'S4e'
                      },
                      Objects: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Uri: {},
                            ETag: {},
                            Size: {
                              type: 'long'
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
          GetTemporaryGluePartitionCredentials: {
            http: {
              requestUri: '/GetTemporaryGluePartitionCredentials'
            },
            input: {
              type: 'structure',
              required: ['TableArn', 'Partition'],
              members: {
                TableArn: {},
                Partition: {
                  type: 'structure',
                  required: ['Values'],
                  members: {
                    Values: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                Permissions: {
                  shape: 'S1a'
                },
                DurationSeconds: {
                  type: 'integer'
                },
                AuditContext: {
                  shape: 'S4n'
                },
                SupportedPermissionTypes: {
                  shape: 'S4p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessKeyId: {},
                SecretAccessKey: {},
                SessionToken: {},
                Expiration: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetTemporaryGlueTableCredentials: {
            http: {
              requestUri: '/GetTemporaryGlueTableCredentials'
            },
            input: {
              type: 'structure',
              required: ['TableArn'],
              members: {
                TableArn: {},
                Permissions: {
                  shape: 'S1a'
                },
                DurationSeconds: {
                  type: 'integer'
                },
                AuditContext: {
                  shape: 'S4n'
                },
                SupportedPermissionTypes: {
                  shape: 'S4p'
                },
                S3Path: {},
                QuerySessionContext: {
                  type: 'structure',
                  members: {
                    QueryId: {},
                    QueryStartTime: {
                      type: 'timestamp'
                    },
                    ClusterId: {},
                    QueryAuthorizationId: {},
                    AdditionalContext: {
                      type: 'map',
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
                AccessKeyId: {},
                SecretAccessKey: {},
                SessionToken: {},
                Expiration: {
                  type: 'timestamp'
                },
                VendedS3Path: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          GetWorkUnitResults: {
            http: {
              requestUri: '/GetWorkUnitResults',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['QueryId', 'WorkUnitId', 'WorkUnitToken'],
              members: {
                QueryId: {},
                WorkUnitId: {
                  type: 'long'
                },
                WorkUnitToken: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResultStream: {
                  type: 'blob',
                  streaming: true
                }
              },
              payload: 'ResultStream'
            },
            endpoint: {
              hostPrefix: 'data-'
            }
          },
          GetWorkUnits: {
            http: {
              requestUri: '/GetWorkUnits',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['QueryId'],
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                },
                QueryId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['QueryId', 'WorkUnitRanges'],
              members: {
                NextToken: {},
                QueryId: {},
                WorkUnitRanges: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['WorkUnitIdMax', 'WorkUnitIdMin', 'WorkUnitToken'],
                    members: {
                      WorkUnitIdMax: {
                        type: 'long'
                      },
                      WorkUnitIdMin: {
                        type: 'long'
                      },
                      WorkUnitToken: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'query-'
            }
          },
          GrantPermissions: {
            http: {
              requestUri: '/GrantPermissions'
            },
            input: {
              type: 'structure',
              required: ['Principal', 'Resource', 'Permissions'],
              members: {
                CatalogId: {},
                Principal: {
                  shape: 'S18'
                },
                Resource: {
                  shape: 'S3'
                },
                Permissions: {
                  shape: 'S1a'
                },
                PermissionsWithGrantOption: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListDataCellsFilter: {
            http: {
              requestUri: '/ListDataCellsFilter'
            },
            input: {
              type: 'structure',
              members: {
                Table: {
                  shape: 'S7'
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
                DataCellsFilters: {
                  type: 'list',
                  member: {
                    shape: 'S1o'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLFTags: {
            http: {
              requestUri: '/ListLFTags'
            },
            input: {
              type: 'structure',
              members: {
                CatalogId: {},
                ResourceShareType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LFTags: {
                  shape: 'Sn'
                },
                NextToken: {}
              }
            }
          },
          ListLakeFormationOptIns: {
            http: {
              requestUri: '/ListLakeFormationOptIns'
            },
            input: {
              type: 'structure',
              members: {
                Principal: {
                  shape: 'S18'
                },
                Resource: {
                  shape: 'S3'
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
                LakeFormationOptInsInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Resource: {
                        shape: 'S3'
                      },
                      Principal: {
                        shape: 'S18'
                      },
                      LastModified: {
                        type: 'timestamp'
                      },
                      LastUpdatedBy: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPermissions: {
            http: {
              requestUri: '/ListPermissions'
            },
            input: {
              type: 'structure',
              members: {
                CatalogId: {},
                Principal: {
                  shape: 'S18'
                },
                ResourceType: {},
                Resource: {
                  shape: 'S3'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                IncludeRelated: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PrincipalResourcePermissions: {
                  shape: 'S3k'
                },
                NextToken: {}
              }
            }
          },
          ListResources: {
            http: {
              requestUri: '/ListResources'
            },
            input: {
              type: 'structure',
              members: {
                FilterConditionList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Field: {},
                      ComparisonOperator: {},
                      StringValueList: {
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
                ResourceInfoList: {
                  type: 'list',
                  member: {
                    shape: 'S2s'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTableStorageOptimizers: {
            http: {
              requestUri: '/ListTableStorageOptimizers'
            },
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                StorageOptimizerType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageOptimizerList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StorageOptimizerType: {},
                      Config: {
                        shape: 'S6b'
                      },
                      ErrorMessage: {},
                      Warnings: {},
                      LastRunDetails: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTransactions: {
            http: {
              requestUri: '/ListTransactions'
            },
            input: {
              type: 'structure',
              members: {
                CatalogId: {},
                StatusFilter: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Transactions: {
                  type: 'list',
                  member: {
                    shape: 'S2x'
                  }
                },
                NextToken: {}
              }
            }
          },
          PutDataLakeSettings: {
            http: {
              requestUri: '/PutDataLakeSettings'
            },
            input: {
              type: 'structure',
              required: ['DataLakeSettings'],
              members: {
                CatalogId: {},
                DataLakeSettings: {
                  shape: 'S38'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RegisterResource: {
            http: {
              requestUri: '/RegisterResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                UseServiceLinkedRole: {
                  type: 'boolean'
                },
                RoleArn: {},
                WithFederation: {
                  type: 'boolean'
                },
                HybridAccessEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RemoveLFTagsFromResource: {
            http: {
              requestUri: '/RemoveLFTagsFromResource'
            },
            input: {
              type: 'structure',
              required: ['Resource', 'LFTags'],
              members: {
                CatalogId: {},
                Resource: {
                  shape: 'S3'
                },
                LFTags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Failures: {
                  shape: 'Sq'
                }
              }
            }
          },
          RevokePermissions: {
            http: {
              requestUri: '/RevokePermissions'
            },
            input: {
              type: 'structure',
              required: ['Principal', 'Resource', 'Permissions'],
              members: {
                CatalogId: {},
                Principal: {
                  shape: 'S18'
                },
                Resource: {
                  shape: 'S3'
                },
                Permissions: {
                  shape: 'S1a'
                },
                PermissionsWithGrantOption: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SearchDatabasesByLFTags: {
            http: {
              requestUri: '/SearchDatabasesByLFTags'
            },
            input: {
              type: 'structure',
              required: ['Expression'],
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CatalogId: {},
                Expression: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                DatabaseList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Database: {
                        shape: 'S5'
                      },
                      LFTags: {
                        shape: 'Sn'
                      }
                    }
                  }
                }
              }
            }
          },
          SearchTablesByLFTags: {
            http: {
              requestUri: '/SearchTablesByLFTags'
            },
            input: {
              type: 'structure',
              required: ['Expression'],
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                CatalogId: {},
                Expression: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TableList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Table: {
                        shape: 'S7'
                      },
                      LFTagOnDatabase: {
                        shape: 'Sn'
                      },
                      LFTagsOnTable: {
                        shape: 'Sn'
                      },
                      LFTagsOnColumns: {
                        shape: 'S47'
                      }
                    }
                  }
                }
              }
            }
          },
          StartQueryPlanning: {
            http: {
              requestUri: '/StartQueryPlanning',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['QueryPlanningContext', 'QueryString'],
              members: {
                QueryPlanningContext: {
                  type: 'structure',
                  required: ['DatabaseName'],
                  members: {
                    CatalogId: {},
                    DatabaseName: {},
                    QueryAsOfTime: {
                      type: 'timestamp'
                    },
                    QueryParameters: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    TransactionId: {}
                  }
                },
                QueryString: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['QueryId'],
              members: {
                QueryId: {}
              }
            },
            endpoint: {
              hostPrefix: 'query-'
            }
          },
          StartTransaction: {
            http: {
              requestUri: '/StartTransaction'
            },
            input: {
              type: 'structure',
              members: {
                TransactionType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransactionId: {}
              }
            }
          },
          UpdateDataCellsFilter: {
            http: {
              requestUri: '/UpdateDataCellsFilter'
            },
            input: {
              type: 'structure',
              required: ['TableData'],
              members: {
                TableData: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLFTag: {
            http: {
              requestUri: '/UpdateLFTag'
            },
            input: {
              type: 'structure',
              required: ['TagKey'],
              members: {
                CatalogId: {},
                TagKey: {},
                TagValuesToDelete: {
                  shape: 'Sg'
                },
                TagValuesToAdd: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLakeFormationIdentityCenterConfiguration: {
            http: {
              requestUri: '/UpdateLakeFormationIdentityCenterConfiguration'
            },
            input: {
              type: 'structure',
              members: {
                CatalogId: {},
                ShareRecipients: {
                  shape: 'S22'
                },
                ApplicationStatus: {},
                ExternalFiltering: {
                  shape: 'S1y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateResource: {
            http: {
              requestUri: '/UpdateResource'
            },
            input: {
              type: 'structure',
              required: ['RoleArn', 'ResourceArn'],
              members: {
                RoleArn: {},
                ResourceArn: {},
                WithFederation: {
                  type: 'boolean'
                },
                HybridAccessEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateTableObjects: {
            http: {
              requestUri: '/UpdateTableObjects'
            },
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'WriteOperations'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                TransactionId: {},
                WriteOperations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AddObject: {
                        type: 'structure',
                        required: ['Uri', 'ETag', 'Size'],
                        members: {
                          Uri: {},
                          ETag: {},
                          Size: {
                            type: 'long'
                          },
                          PartitionValues: {
                            shape: 'S4e'
                          }
                        }
                      },
                      DeleteObject: {
                        type: 'structure',
                        required: ['Uri'],
                        members: {
                          Uri: {},
                          ETag: {},
                          PartitionValues: {
                            shape: 'S4e'
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
              members: {}
            }
          },
          UpdateTableStorageOptimizer: {
            http: {
              requestUri: '/UpdateTableStorageOptimizer'
            },
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'StorageOptimizerConfig'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                StorageOptimizerConfig: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S6b'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Result: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              Catalog: {
                type: 'structure',
                members: {}
              },
              Database: {
                shape: 'S5'
              },
              Table: {
                shape: 'S7'
              },
              TableWithColumns: {
                type: 'structure',
                required: ['DatabaseName', 'Name'],
                members: {
                  CatalogId: {},
                  DatabaseName: {},
                  Name: {},
                  ColumnNames: {
                    shape: 'Sa'
                  },
                  ColumnWildcard: {
                    shape: 'Sb'
                  }
                }
              },
              DataLocation: {
                type: 'structure',
                required: ['ResourceArn'],
                members: {
                  CatalogId: {},
                  ResourceArn: {}
                }
              },
              DataCellsFilter: {
                type: 'structure',
                members: {
                  TableCatalogId: {},
                  DatabaseName: {},
                  TableName: {},
                  Name: {}
                }
              },
              LFTag: {
                type: 'structure',
                required: ['TagKey', 'TagValues'],
                members: {
                  CatalogId: {},
                  TagKey: {},
                  TagValues: {
                    shape: 'Sg'
                  }
                }
              },
              LFTagPolicy: {
                type: 'structure',
                required: ['ResourceType', 'Expression'],
                members: {
                  CatalogId: {},
                  ResourceType: {},
                  Expression: {
                    shape: 'Sk'
                  }
                }
              }
            }
          },
          S5: {
            type: 'structure',
            required: ['Name'],
            members: {
              CatalogId: {},
              Name: {}
            }
          },
          S7: {
            type: 'structure',
            required: ['DatabaseName'],
            members: {
              CatalogId: {},
              DatabaseName: {},
              Name: {},
              TableWildcard: {
                type: 'structure',
                members: {}
              }
            }
          },
          Sa: {
            type: 'list',
            member: {}
          },
          Sb: {
            type: 'structure',
            members: {
              ExcludedColumnNames: {
                shape: 'Sa'
              }
            }
          },
          Sg: {
            type: 'list',
            member: {}
          },
          Sk: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['TagKey', 'TagValues'],
              members: {
                TagKey: {},
                TagValues: {
                  shape: 'Sg'
                }
              }
            }
          },
          Sn: {
            type: 'list',
            member: {
              shape: 'So'
            }
          },
          So: {
            type: 'structure',
            required: ['TagKey', 'TagValues'],
            members: {
              CatalogId: {},
              TagKey: {},
              TagValues: {
                shape: 'Sg'
              }
            }
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LFTag: {
                  shape: 'So'
                },
                Error: {
                  shape: 'Ss'
                }
              }
            }
          },
          Ss: {
            type: 'structure',
            members: {
              ErrorCode: {},
              ErrorMessage: {}
            }
          },
          S15: {
            type: 'list',
            member: {
              shape: 'S16'
            }
          },
          S16: {
            type: 'structure',
            required: ['Id'],
            members: {
              Id: {},
              Principal: {
                shape: 'S18'
              },
              Resource: {
                shape: 'S3'
              },
              Permissions: {
                shape: 'S1a'
              },
              PermissionsWithGrantOption: {
                shape: 'S1a'
              }
            }
          },
          S18: {
            type: 'structure',
            members: {
              DataLakePrincipalIdentifier: {}
            }
          },
          S1a: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RequestEntry: {
                  shape: 'S16'
                },
                Error: {
                  shape: 'Ss'
                }
              }
            }
          },
          S1o: {
            type: 'structure',
            required: ['TableCatalogId', 'DatabaseName', 'TableName', 'Name'],
            members: {
              TableCatalogId: {},
              DatabaseName: {},
              TableName: {},
              Name: {},
              RowFilter: {
                type: 'structure',
                members: {
                  FilterExpression: {},
                  AllRowsWildcard: {
                    type: 'structure',
                    members: {}
                  }
                }
              },
              ColumnNames: {
                shape: 'Sa'
              },
              ColumnWildcard: {
                shape: 'Sb'
              },
              VersionId: {}
            }
          },
          S1y: {
            type: 'structure',
            required: ['Status', 'AuthorizedTargets'],
            members: {
              Status: {},
              AuthorizedTargets: {
                type: 'list',
                member: {}
              }
            }
          },
          S22: {
            type: 'list',
            member: {
              shape: 'S18'
            }
          },
          S2s: {
            type: 'structure',
            members: {
              ResourceArn: {},
              RoleArn: {},
              LastModified: {
                type: 'timestamp'
              },
              WithFederation: {
                type: 'boolean'
              },
              HybridAccessEnabled: {
                type: 'boolean'
              }
            }
          },
          S2x: {
            type: 'structure',
            members: {
              TransactionId: {},
              TransactionStatus: {},
              TransactionStartTime: {
                type: 'timestamp'
              },
              TransactionEndTime: {
                type: 'timestamp'
              }
            }
          },
          S38: {
            type: 'structure',
            members: {
              DataLakeAdmins: {
                shape: 'S22'
              },
              ReadOnlyAdmins: {
                shape: 'S22'
              },
              CreateDatabaseDefaultPermissions: {
                shape: 'S39'
              },
              CreateTableDefaultPermissions: {
                shape: 'S39'
              },
              Parameters: {
                type: 'map',
                key: {},
                value: {}
              },
              TrustedResourceOwners: {
                type: 'list',
                member: {}
              },
              AllowExternalDataFiltering: {
                type: 'boolean'
              },
              AllowFullTableExternalDataAccess: {
                type: 'boolean'
              },
              ExternalDataFilteringAllowList: {
                shape: 'S22'
              },
              AuthorizedSessionTagValueList: {
                type: 'list',
                member: {}
              }
            }
          },
          S39: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Principal: {
                  shape: 'S18'
                },
                Permissions: {
                  shape: 'S1a'
                }
              }
            }
          },
          S3k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Principal: {
                  shape: 'S18'
                },
                Resource: {
                  shape: 'S3'
                },
                Permissions: {
                  shape: 'S1a'
                },
                PermissionsWithGrantOption: {
                  shape: 'S1a'
                },
                AdditionalDetails: {
                  type: 'structure',
                  members: {
                    ResourceShare: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                LastUpdated: {
                  type: 'timestamp'
                },
                LastUpdatedBy: {}
              }
            }
          },
          S47: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                LFTags: {
                  shape: 'Sn'
                }
              }
            }
          },
          S4e: {
            type: 'list',
            member: {}
          },
          S4n: {
            type: 'structure',
            members: {
              AdditionalAuditContext: {}
            }
          },
          S4p: {
            type: 'list',
            member: {}
          },
          S6b: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0eed9f25f0bce51d24e8d137dfedd7b443b447a3.js.map