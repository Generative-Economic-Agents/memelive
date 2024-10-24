System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-08-10',
          endpointPrefix: 'dynamodb',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'DynamoDB',
          serviceFullName: 'Amazon DynamoDB',
          serviceId: 'DynamoDB',
          signatureVersion: 'v4',
          targetPrefix: 'DynamoDB_20120810',
          uid: 'dynamodb-2012-08-10'
        },
        operations: {
          BatchExecuteStatement: {
            input: {
              type: 'structure',
              required: ['Statements'],
              members: {
                Statements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Statement'],
                    members: {
                      Statement: {},
                      Parameters: {
                        shape: 'S5'
                      },
                      ConsistentRead: {
                        type: 'boolean'
                      },
                      ReturnValuesOnConditionCheckFailure: {}
                    }
                  }
                },
                ReturnConsumedCapacity: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Responses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Error: {
                        type: 'structure',
                        members: {
                          Code: {},
                          Message: {},
                          Item: {
                            shape: 'Sr'
                          }
                        }
                      },
                      TableName: {},
                      Item: {
                        shape: 'Sr'
                      }
                    }
                  }
                },
                ConsumedCapacity: {
                  shape: 'St'
                }
              }
            }
          },
          BatchGetItem: {
            input: {
              type: 'structure',
              required: ['RequestItems'],
              members: {
                RequestItems: {
                  shape: 'S11'
                },
                ReturnConsumedCapacity: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Responses: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S1b'
                  }
                },
                UnprocessedKeys: {
                  shape: 'S11'
                },
                ConsumedCapacity: {
                  shape: 'St'
                }
              }
            },
            endpointdiscovery: {}
          },
          BatchWriteItem: {
            input: {
              type: 'structure',
              required: ['RequestItems'],
              members: {
                RequestItems: {
                  shape: 'S1d'
                },
                ReturnConsumedCapacity: {},
                ReturnItemCollectionMetrics: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedItems: {
                  shape: 'S1d'
                },
                ItemCollectionMetrics: {
                  shape: 'S1l'
                },
                ConsumedCapacity: {
                  shape: 'St'
                }
              }
            },
            endpointdiscovery: {}
          },
          CreateBackup: {
            input: {
              type: 'structure',
              required: ['TableName', 'BackupName'],
              members: {
                TableName: {},
                BackupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupDetails: {
                  shape: 'S1u'
                }
              }
            },
            endpointdiscovery: {}
          },
          CreateGlobalTable: {
            input: {
              type: 'structure',
              required: ['GlobalTableName', 'ReplicationGroup'],
              members: {
                GlobalTableName: {},
                ReplicationGroup: {
                  shape: 'S22'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalTableDescription: {
                  shape: 'S26'
                }
              }
            },
            endpointdiscovery: {}
          },
          CreateTable: {
            input: {
              type: 'structure',
              required: ['AttributeDefinitions', 'TableName', 'KeySchema'],
              members: {
                AttributeDefinitions: {
                  shape: 'S2o'
                },
                TableName: {},
                KeySchema: {
                  shape: 'S2s'
                },
                LocalSecondaryIndexes: {
                  shape: 'S2v'
                },
                GlobalSecondaryIndexes: {
                  shape: 'S31'
                },
                BillingMode: {},
                ProvisionedThroughput: {
                  shape: 'S33'
                },
                StreamSpecification: {
                  shape: 'S36'
                },
                SSESpecification: {
                  shape: 'S39'
                },
                Tags: {
                  shape: 'S3c'
                },
                TableClass: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                ResourcePolicy: {},
                OnDemandThroughput: {
                  shape: 'S34'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableDescription: {
                  shape: 'S3j'
                }
              }
            },
            endpointdiscovery: {}
          },
          DeleteBackup: {
            input: {
              type: 'structure',
              required: ['BackupArn'],
              members: {
                BackupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupDescription: {
                  shape: 'S45'
                }
              }
            },
            endpointdiscovery: {}
          },
          DeleteItem: {
            input: {
              type: 'structure',
              required: ['TableName', 'Key'],
              members: {
                TableName: {},
                Key: {
                  shape: 'S14'
                },
                Expected: {
                  shape: 'S4i'
                },
                ConditionalOperator: {},
                ReturnValues: {},
                ReturnConsumedCapacity: {},
                ReturnItemCollectionMetrics: {},
                ConditionExpression: {},
                ExpressionAttributeNames: {
                  shape: 'S17'
                },
                ExpressionAttributeValues: {
                  shape: 'S4q'
                },
                ReturnValuesOnConditionCheckFailure: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sr'
                },
                ConsumedCapacity: {
                  shape: 'Su'
                },
                ItemCollectionMetrics: {
                  shape: 'S1n'
                }
              }
            },
            endpointdiscovery: {}
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                ExpectedRevisionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RevisionId: {}
              }
            },
            endpointdiscovery: {}
          },
          DeleteTable: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableDescription: {
                  shape: 'S3j'
                }
              }
            },
            endpointdiscovery: {}
          },
          DescribeBackup: {
            input: {
              type: 'structure',
              required: ['BackupArn'],
              members: {
                BackupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupDescription: {
                  shape: 'S45'
                }
              }
            },
            endpointdiscovery: {}
          },
          DescribeContinuousBackups: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContinuousBackupsDescription: {
                  shape: 'S53'
                }
              }
            },
            endpointdiscovery: {}
          },
          DescribeContributorInsights: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {},
                IndexName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableName: {},
                IndexName: {},
                ContributorInsightsRuleList: {
                  type: 'list',
                  member: {}
                },
                ContributorInsightsStatus: {},
                LastUpdateDateTime: {
                  type: 'timestamp'
                },
                FailureException: {
                  type: 'structure',
                  members: {
                    ExceptionName: {},
                    ExceptionDescription: {}
                  }
                }
              }
            }
          },
          DescribeEndpoints: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['Endpoints'],
              members: {
                Endpoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Address', 'CachePeriodInMinutes'],
                    members: {
                      Address: {},
                      CachePeriodInMinutes: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            },
            endpointoperation: true
          },
          DescribeExport: {
            input: {
              type: 'structure',
              required: ['ExportArn'],
              members: {
                ExportArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExportDescription: {
                  shape: 'S5o'
                }
              }
            }
          },
          DescribeGlobalTable: {
            input: {
              type: 'structure',
              required: ['GlobalTableName'],
              members: {
                GlobalTableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalTableDescription: {
                  shape: 'S26'
                }
              }
            },
            endpointdiscovery: {}
          },
          DescribeGlobalTableSettings: {
            input: {
              type: 'structure',
              required: ['GlobalTableName'],
              members: {
                GlobalTableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalTableName: {},
                ReplicaSettings: {
                  shape: 'S6d'
                }
              }
            },
            endpointdiscovery: {}
          },
          DescribeImport: {
            input: {
              type: 'structure',
              required: ['ImportArn'],
              members: {
                ImportArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ImportTableDescription'],
              members: {
                ImportTableDescription: {
                  shape: 'S6r'
                }
              }
            }
          },
          DescribeKinesisStreamingDestination: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableName: {},
                KinesisDataStreamDestinations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StreamArn: {},
                      DestinationStatus: {},
                      DestinationStatusDescription: {},
                      ApproximateCreationDateTimePrecision: {}
                    }
                  }
                }
              }
            },
            endpointdiscovery: {}
          },
          DescribeLimits: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AccountMaxReadCapacityUnits: {
                  type: 'long'
                },
                AccountMaxWriteCapacityUnits: {
                  type: 'long'
                },
                TableMaxReadCapacityUnits: {
                  type: 'long'
                },
                TableMaxWriteCapacityUnits: {
                  type: 'long'
                }
              }
            },
            endpointdiscovery: {}
          },
          DescribeTable: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Table: {
                  shape: 'S3j'
                }
              }
            },
            endpointdiscovery: {}
          },
          DescribeTableReplicaAutoScaling: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableAutoScalingDescription: {
                  shape: 'S7k'
                }
              }
            }
          },
          DescribeTimeToLive: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TimeToLiveDescription: {
                  shape: 'S4e'
                }
              }
            },
            endpointdiscovery: {}
          },
          DisableKinesisStreamingDestination: {
            input: {
              shape: 'S7r'
            },
            output: {
              shape: 'S7t'
            },
            endpointdiscovery: {}
          },
          EnableKinesisStreamingDestination: {
            input: {
              shape: 'S7r'
            },
            output: {
              shape: 'S7t'
            },
            endpointdiscovery: {}
          },
          ExecuteStatement: {
            input: {
              type: 'structure',
              required: ['Statement'],
              members: {
                Statement: {},
                Parameters: {
                  shape: 'S5'
                },
                ConsistentRead: {
                  type: 'boolean'
                },
                NextToken: {},
                ReturnConsumedCapacity: {},
                Limit: {
                  type: 'integer'
                },
                ReturnValuesOnConditionCheckFailure: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  shape: 'S1b'
                },
                NextToken: {},
                ConsumedCapacity: {
                  shape: 'Su'
                },
                LastEvaluatedKey: {
                  shape: 'S14'
                }
              }
            }
          },
          ExecuteTransaction: {
            input: {
              type: 'structure',
              required: ['TransactStatements'],
              members: {
                TransactStatements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Statement'],
                    members: {
                      Statement: {},
                      Parameters: {
                        shape: 'S5'
                      },
                      ReturnValuesOnConditionCheckFailure: {}
                    }
                  }
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                ReturnConsumedCapacity: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Responses: {
                  shape: 'S83'
                },
                ConsumedCapacity: {
                  shape: 'St'
                }
              }
            }
          },
          ExportTableToPointInTime: {
            input: {
              type: 'structure',
              required: ['TableArn', 'S3Bucket'],
              members: {
                TableArn: {},
                ExportTime: {
                  type: 'timestamp'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                S3Bucket: {},
                S3BucketOwner: {},
                S3Prefix: {},
                S3SseAlgorithm: {},
                S3SseKmsKeyId: {},
                ExportFormat: {},
                ExportType: {},
                IncrementalExportSpecification: {
                  shape: 'S65'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ExportDescription: {
                  shape: 'S5o'
                }
              }
            }
          },
          GetItem: {
            input: {
              type: 'structure',
              required: ['TableName', 'Key'],
              members: {
                TableName: {},
                Key: {
                  shape: 'S14'
                },
                AttributesToGet: {
                  shape: 'S15'
                },
                ConsistentRead: {
                  type: 'boolean'
                },
                ReturnConsumedCapacity: {},
                ProjectionExpression: {},
                ExpressionAttributeNames: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Item: {
                  shape: 'Sr'
                },
                ConsumedCapacity: {
                  shape: 'Su'
                }
              }
            },
            endpointdiscovery: {}
          },
          GetResourcePolicy: {
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
                Policy: {},
                RevisionId: {}
              }
            },
            endpointdiscovery: {}
          },
          ImportTable: {
            input: {
              type: 'structure',
              required: ['S3BucketSource', 'InputFormat', 'TableCreationParameters'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                S3BucketSource: {
                  shape: 'S6t'
                },
                InputFormat: {},
                InputFormatOptions: {
                  shape: 'S6x'
                },
                InputCompressionType: {},
                TableCreationParameters: {
                  shape: 'S73'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ImportTableDescription'],
              members: {
                ImportTableDescription: {
                  shape: 'S6r'
                }
              }
            }
          },
          ListBackups: {
            input: {
              type: 'structure',
              members: {
                TableName: {},
                Limit: {
                  type: 'integer'
                },
                TimeRangeLowerBound: {
                  type: 'timestamp'
                },
                TimeRangeUpperBound: {
                  type: 'timestamp'
                },
                ExclusiveStartBackupArn: {},
                BackupType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BackupSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TableName: {},
                      TableId: {},
                      TableArn: {},
                      BackupArn: {},
                      BackupName: {},
                      BackupCreationDateTime: {
                        type: 'timestamp'
                      },
                      BackupExpiryDateTime: {
                        type: 'timestamp'
                      },
                      BackupStatus: {},
                      BackupType: {},
                      BackupSizeBytes: {
                        type: 'long'
                      }
                    }
                  }
                },
                LastEvaluatedBackupArn: {}
              }
            },
            endpointdiscovery: {}
          },
          ListContributorInsights: {
            input: {
              type: 'structure',
              members: {
                TableName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContributorInsightsSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TableName: {},
                      IndexName: {},
                      ContributorInsightsStatus: {}
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
                TableArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExportSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ExportArn: {},
                      ExportStatus: {},
                      ExportType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListGlobalTables: {
            input: {
              type: 'structure',
              members: {
                ExclusiveStartGlobalTableName: {},
                Limit: {
                  type: 'integer'
                },
                RegionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalTables: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GlobalTableName: {},
                      ReplicationGroup: {
                        shape: 'S22'
                      }
                    }
                  }
                },
                LastEvaluatedGlobalTableName: {}
              }
            },
            endpointdiscovery: {}
          },
          ListImports: {
            input: {
              type: 'structure',
              members: {
                TableArn: {},
                PageSize: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImportSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ImportArn: {},
                      ImportStatus: {},
                      TableArn: {},
                      S3BucketSource: {
                        shape: 'S6t'
                      },
                      CloudWatchLogGroupArn: {},
                      InputFormat: {},
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
          ListTables: {
            input: {
              type: 'structure',
              members: {
                ExclusiveStartTableName: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableNames: {
                  type: 'list',
                  member: {}
                },
                LastEvaluatedTableName: {}
              }
            },
            endpointdiscovery: {}
          },
          ListTagsOfResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S3c'
                },
                NextToken: {}
              }
            },
            endpointdiscovery: {}
          },
          PutItem: {
            input: {
              type: 'structure',
              required: ['TableName', 'Item'],
              members: {
                TableName: {},
                Item: {
                  shape: 'S1h'
                },
                Expected: {
                  shape: 'S4i'
                },
                ReturnValues: {},
                ReturnConsumedCapacity: {},
                ReturnItemCollectionMetrics: {},
                ConditionalOperator: {},
                ConditionExpression: {},
                ExpressionAttributeNames: {
                  shape: 'S17'
                },
                ExpressionAttributeValues: {
                  shape: 'S4q'
                },
                ReturnValuesOnConditionCheckFailure: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sr'
                },
                ConsumedCapacity: {
                  shape: 'Su'
                },
                ItemCollectionMetrics: {
                  shape: 'S1n'
                }
              }
            },
            endpointdiscovery: {}
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Policy'],
              members: {
                ResourceArn: {},
                Policy: {},
                ExpectedRevisionId: {},
                ConfirmRemoveSelfResourceAccess: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RevisionId: {}
              }
            },
            endpointdiscovery: {}
          },
          Query: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {},
                IndexName: {},
                Select: {},
                AttributesToGet: {
                  shape: 'S15'
                },
                Limit: {
                  type: 'integer'
                },
                ConsistentRead: {
                  type: 'boolean'
                },
                KeyConditions: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S9l'
                  }
                },
                QueryFilter: {
                  shape: 'S9m'
                },
                ConditionalOperator: {},
                ScanIndexForward: {
                  type: 'boolean'
                },
                ExclusiveStartKey: {
                  shape: 'S14'
                },
                ReturnConsumedCapacity: {},
                ProjectionExpression: {},
                FilterExpression: {},
                KeyConditionExpression: {},
                ExpressionAttributeNames: {
                  shape: 'S17'
                },
                ExpressionAttributeValues: {
                  shape: 'S4q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  shape: 'S1b'
                },
                Count: {
                  type: 'integer'
                },
                ScannedCount: {
                  type: 'integer'
                },
                LastEvaluatedKey: {
                  shape: 'S14'
                },
                ConsumedCapacity: {
                  shape: 'Su'
                }
              }
            },
            endpointdiscovery: {}
          },
          RestoreTableFromBackup: {
            input: {
              type: 'structure',
              required: ['TargetTableName', 'BackupArn'],
              members: {
                TargetTableName: {},
                BackupArn: {},
                BillingModeOverride: {},
                GlobalSecondaryIndexOverride: {
                  shape: 'S31'
                },
                LocalSecondaryIndexOverride: {
                  shape: 'S2v'
                },
                ProvisionedThroughputOverride: {
                  shape: 'S33'
                },
                OnDemandThroughputOverride: {
                  shape: 'S34'
                },
                SSESpecificationOverride: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableDescription: {
                  shape: 'S3j'
                }
              }
            },
            endpointdiscovery: {}
          },
          RestoreTableToPointInTime: {
            input: {
              type: 'structure',
              required: ['TargetTableName'],
              members: {
                SourceTableArn: {},
                SourceTableName: {},
                TargetTableName: {},
                UseLatestRestorableTime: {
                  type: 'boolean'
                },
                RestoreDateTime: {
                  type: 'timestamp'
                },
                BillingModeOverride: {},
                GlobalSecondaryIndexOverride: {
                  shape: 'S31'
                },
                LocalSecondaryIndexOverride: {
                  shape: 'S2v'
                },
                ProvisionedThroughputOverride: {
                  shape: 'S33'
                },
                OnDemandThroughputOverride: {
                  shape: 'S34'
                },
                SSESpecificationOverride: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableDescription: {
                  shape: 'S3j'
                }
              }
            },
            endpointdiscovery: {}
          },
          Scan: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {},
                IndexName: {},
                AttributesToGet: {
                  shape: 'S15'
                },
                Limit: {
                  type: 'integer'
                },
                Select: {},
                ScanFilter: {
                  shape: 'S9m'
                },
                ConditionalOperator: {},
                ExclusiveStartKey: {
                  shape: 'S14'
                },
                ReturnConsumedCapacity: {},
                TotalSegments: {
                  type: 'integer'
                },
                Segment: {
                  type: 'integer'
                },
                ProjectionExpression: {},
                FilterExpression: {},
                ExpressionAttributeNames: {
                  shape: 'S17'
                },
                ExpressionAttributeValues: {
                  shape: 'S4q'
                },
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  shape: 'S1b'
                },
                Count: {
                  type: 'integer'
                },
                ScannedCount: {
                  type: 'integer'
                },
                LastEvaluatedKey: {
                  shape: 'S14'
                },
                ConsumedCapacity: {
                  shape: 'Su'
                }
              }
            },
            endpointdiscovery: {}
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S3c'
                }
              }
            },
            endpointdiscovery: {}
          },
          TransactGetItems: {
            input: {
              type: 'structure',
              required: ['TransactItems'],
              members: {
                TransactItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Get'],
                    members: {
                      Get: {
                        type: 'structure',
                        required: ['Key', 'TableName'],
                        members: {
                          Key: {
                            shape: 'S14'
                          },
                          TableName: {},
                          ProjectionExpression: {},
                          ExpressionAttributeNames: {
                            shape: 'S17'
                          }
                        }
                      }
                    }
                  }
                },
                ReturnConsumedCapacity: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConsumedCapacity: {
                  shape: 'St'
                },
                Responses: {
                  shape: 'S83'
                }
              }
            },
            endpointdiscovery: {}
          },
          TransactWriteItems: {
            input: {
              type: 'structure',
              required: ['TransactItems'],
              members: {
                TransactItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConditionCheck: {
                        type: 'structure',
                        required: ['Key', 'TableName', 'ConditionExpression'],
                        members: {
                          Key: {
                            shape: 'S14'
                          },
                          TableName: {},
                          ConditionExpression: {},
                          ExpressionAttributeNames: {
                            shape: 'S17'
                          },
                          ExpressionAttributeValues: {
                            shape: 'S4q'
                          },
                          ReturnValuesOnConditionCheckFailure: {}
                        }
                      },
                      Put: {
                        type: 'structure',
                        required: ['Item', 'TableName'],
                        members: {
                          Item: {
                            shape: 'S1h'
                          },
                          TableName: {},
                          ConditionExpression: {},
                          ExpressionAttributeNames: {
                            shape: 'S17'
                          },
                          ExpressionAttributeValues: {
                            shape: 'S4q'
                          },
                          ReturnValuesOnConditionCheckFailure: {}
                        }
                      },
                      Delete: {
                        type: 'structure',
                        required: ['Key', 'TableName'],
                        members: {
                          Key: {
                            shape: 'S14'
                          },
                          TableName: {},
                          ConditionExpression: {},
                          ExpressionAttributeNames: {
                            shape: 'S17'
                          },
                          ExpressionAttributeValues: {
                            shape: 'S4q'
                          },
                          ReturnValuesOnConditionCheckFailure: {}
                        }
                      },
                      Update: {
                        type: 'structure',
                        required: ['Key', 'UpdateExpression', 'TableName'],
                        members: {
                          Key: {
                            shape: 'S14'
                          },
                          UpdateExpression: {},
                          TableName: {},
                          ConditionExpression: {},
                          ExpressionAttributeNames: {
                            shape: 'S17'
                          },
                          ExpressionAttributeValues: {
                            shape: 'S4q'
                          },
                          ReturnValuesOnConditionCheckFailure: {}
                        }
                      }
                    }
                  }
                },
                ReturnConsumedCapacity: {},
                ReturnItemCollectionMetrics: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConsumedCapacity: {
                  shape: 'St'
                },
                ItemCollectionMetrics: {
                  shape: 'S1l'
                }
              }
            },
            endpointdiscovery: {}
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
            },
            endpointdiscovery: {}
          },
          UpdateContinuousBackups: {
            input: {
              type: 'structure',
              required: ['TableName', 'PointInTimeRecoverySpecification'],
              members: {
                TableName: {},
                PointInTimeRecoverySpecification: {
                  type: 'structure',
                  required: ['PointInTimeRecoveryEnabled'],
                  members: {
                    PointInTimeRecoveryEnabled: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContinuousBackupsDescription: {
                  shape: 'S53'
                }
              }
            },
            endpointdiscovery: {}
          },
          UpdateContributorInsights: {
            input: {
              type: 'structure',
              required: ['TableName', 'ContributorInsightsAction'],
              members: {
                TableName: {},
                IndexName: {},
                ContributorInsightsAction: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableName: {},
                IndexName: {},
                ContributorInsightsStatus: {}
              }
            }
          },
          UpdateGlobalTable: {
            input: {
              type: 'structure',
              required: ['GlobalTableName', 'ReplicaUpdates'],
              members: {
                GlobalTableName: {},
                ReplicaUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Create: {
                        type: 'structure',
                        required: ['RegionName'],
                        members: {
                          RegionName: {}
                        }
                      },
                      Delete: {
                        type: 'structure',
                        required: ['RegionName'],
                        members: {
                          RegionName: {}
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalTableDescription: {
                  shape: 'S26'
                }
              }
            },
            endpointdiscovery: {}
          },
          UpdateGlobalTableSettings: {
            input: {
              type: 'structure',
              required: ['GlobalTableName'],
              members: {
                GlobalTableName: {},
                GlobalTableBillingMode: {},
                GlobalTableProvisionedWriteCapacityUnits: {
                  type: 'long'
                },
                GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: {
                  shape: 'Sas'
                },
                GlobalTableGlobalSecondaryIndexSettingsUpdate: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IndexName'],
                    members: {
                      IndexName: {},
                      ProvisionedWriteCapacityUnits: {
                        type: 'long'
                      },
                      ProvisionedWriteCapacityAutoScalingSettingsUpdate: {
                        shape: 'Sas'
                      }
                    }
                  }
                },
                ReplicaSettingsUpdate: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RegionName'],
                    members: {
                      RegionName: {},
                      ReplicaProvisionedReadCapacityUnits: {
                        type: 'long'
                      },
                      ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: {
                        shape: 'Sas'
                      },
                      ReplicaGlobalSecondaryIndexSettingsUpdate: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['IndexName'],
                          members: {
                            IndexName: {},
                            ProvisionedReadCapacityUnits: {
                              type: 'long'
                            },
                            ProvisionedReadCapacityAutoScalingSettingsUpdate: {
                              shape: 'Sas'
                            }
                          }
                        }
                      },
                      ReplicaTableClass: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalTableName: {},
                ReplicaSettings: {
                  shape: 'S6d'
                }
              }
            },
            endpointdiscovery: {}
          },
          UpdateItem: {
            input: {
              type: 'structure',
              required: ['TableName', 'Key'],
              members: {
                TableName: {},
                Key: {
                  shape: 'S14'
                },
                AttributeUpdates: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      Value: {
                        shape: 'S6'
                      },
                      Action: {}
                    }
                  }
                },
                Expected: {
                  shape: 'S4i'
                },
                ConditionalOperator: {},
                ReturnValues: {},
                ReturnConsumedCapacity: {},
                ReturnItemCollectionMetrics: {},
                UpdateExpression: {},
                ConditionExpression: {},
                ExpressionAttributeNames: {
                  shape: 'S17'
                },
                ExpressionAttributeValues: {
                  shape: 'S4q'
                },
                ReturnValuesOnConditionCheckFailure: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sr'
                },
                ConsumedCapacity: {
                  shape: 'Su'
                },
                ItemCollectionMetrics: {
                  shape: 'S1n'
                }
              }
            },
            endpointdiscovery: {}
          },
          UpdateKinesisStreamingDestination: {
            input: {
              type: 'structure',
              required: ['TableName', 'StreamArn'],
              members: {
                TableName: {},
                StreamArn: {},
                UpdateKinesisStreamingConfiguration: {
                  shape: 'Sb9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableName: {},
                StreamArn: {},
                DestinationStatus: {},
                UpdateKinesisStreamingConfiguration: {
                  shape: 'Sb9'
                }
              }
            },
            endpointdiscovery: {}
          },
          UpdateTable: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                AttributeDefinitions: {
                  shape: 'S2o'
                },
                TableName: {},
                BillingMode: {},
                ProvisionedThroughput: {
                  shape: 'S33'
                },
                GlobalSecondaryIndexUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Update: {
                        type: 'structure',
                        required: ['IndexName'],
                        members: {
                          IndexName: {},
                          ProvisionedThroughput: {
                            shape: 'S33'
                          },
                          OnDemandThroughput: {
                            shape: 'S34'
                          }
                        }
                      },
                      Create: {
                        type: 'structure',
                        required: ['IndexName', 'KeySchema', 'Projection'],
                        members: {
                          IndexName: {},
                          KeySchema: {
                            shape: 'S2s'
                          },
                          Projection: {
                            shape: 'S2x'
                          },
                          ProvisionedThroughput: {
                            shape: 'S33'
                          },
                          OnDemandThroughput: {
                            shape: 'S34'
                          }
                        }
                      },
                      Delete: {
                        type: 'structure',
                        required: ['IndexName'],
                        members: {
                          IndexName: {}
                        }
                      }
                    }
                  }
                },
                StreamSpecification: {
                  shape: 'S36'
                },
                SSESpecification: {
                  shape: 'S39'
                },
                ReplicaUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Create: {
                        type: 'structure',
                        required: ['RegionName'],
                        members: {
                          RegionName: {},
                          KMSMasterKeyId: {},
                          ProvisionedThroughputOverride: {
                            shape: 'S2d'
                          },
                          OnDemandThroughputOverride: {
                            shape: 'S2f'
                          },
                          GlobalSecondaryIndexes: {
                            shape: 'Sbk'
                          },
                          TableClassOverride: {}
                        }
                      },
                      Update: {
                        type: 'structure',
                        required: ['RegionName'],
                        members: {
                          RegionName: {},
                          KMSMasterKeyId: {},
                          ProvisionedThroughputOverride: {
                            shape: 'S2d'
                          },
                          OnDemandThroughputOverride: {
                            shape: 'S2f'
                          },
                          GlobalSecondaryIndexes: {
                            shape: 'Sbk'
                          },
                          TableClassOverride: {}
                        }
                      },
                      Delete: {
                        type: 'structure',
                        required: ['RegionName'],
                        members: {
                          RegionName: {}
                        }
                      }
                    }
                  }
                },
                TableClass: {},
                DeletionProtectionEnabled: {
                  type: 'boolean'
                },
                OnDemandThroughput: {
                  shape: 'S34'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableDescription: {
                  shape: 'S3j'
                }
              }
            },
            endpointdiscovery: {}
          },
          UpdateTableReplicaAutoScaling: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                GlobalSecondaryIndexUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IndexName: {},
                      ProvisionedWriteCapacityAutoScalingUpdate: {
                        shape: 'Sas'
                      }
                    }
                  }
                },
                TableName: {},
                ProvisionedWriteCapacityAutoScalingUpdate: {
                  shape: 'Sas'
                },
                ReplicaUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RegionName'],
                    members: {
                      RegionName: {},
                      ReplicaGlobalSecondaryIndexUpdates: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            IndexName: {},
                            ProvisionedReadCapacityAutoScalingUpdate: {
                              shape: 'Sas'
                            }
                          }
                        }
                      },
                      ReplicaProvisionedReadCapacityAutoScalingUpdate: {
                        shape: 'Sas'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableAutoScalingDescription: {
                  shape: 'S7k'
                }
              }
            }
          },
          UpdateTimeToLive: {
            input: {
              type: 'structure',
              required: ['TableName', 'TimeToLiveSpecification'],
              members: {
                TableName: {},
                TimeToLiveSpecification: {
                  shape: 'Sby'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TimeToLiveSpecification: {
                  shape: 'Sby'
                }
              }
            },
            endpointdiscovery: {}
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {
              shape: 'S6'
            }
          },
          S6: {
            type: 'structure',
            members: {
              S: {},
              N: {},
              B: {
                type: 'blob'
              },
              SS: {
                type: 'list',
                member: {}
              },
              NS: {
                type: 'list',
                member: {}
              },
              BS: {
                type: 'list',
                member: {
                  type: 'blob'
                }
              },
              M: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S6'
                }
              },
              L: {
                type: 'list',
                member: {
                  shape: 'S6'
                }
              },
              NULL: {
                type: 'boolean'
              },
              BOOL: {
                type: 'boolean'
              }
            }
          },
          Sr: {
            type: 'map',
            key: {},
            value: {
              shape: 'S6'
            }
          },
          St: {
            type: 'list',
            member: {
              shape: 'Su'
            }
          },
          Su: {
            type: 'structure',
            members: {
              TableName: {},
              CapacityUnits: {
                type: 'double'
              },
              ReadCapacityUnits: {
                type: 'double'
              },
              WriteCapacityUnits: {
                type: 'double'
              },
              Table: {
                shape: 'Sx'
              },
              LocalSecondaryIndexes: {
                shape: 'Sy'
              },
              GlobalSecondaryIndexes: {
                shape: 'Sy'
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              ReadCapacityUnits: {
                type: 'double'
              },
              WriteCapacityUnits: {
                type: 'double'
              },
              CapacityUnits: {
                type: 'double'
              }
            }
          },
          Sy: {
            type: 'map',
            key: {},
            value: {
              shape: 'Sx'
            }
          },
          S11: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['Keys'],
              members: {
                Keys: {
                  type: 'list',
                  member: {
                    shape: 'S14'
                  }
                },
                AttributesToGet: {
                  shape: 'S15'
                },
                ConsistentRead: {
                  type: 'boolean'
                },
                ProjectionExpression: {},
                ExpressionAttributeNames: {
                  shape: 'S17'
                }
              }
            }
          },
          S14: {
            type: 'map',
            key: {},
            value: {
              shape: 'S6'
            }
          },
          S15: {
            type: 'list',
            member: {}
          },
          S17: {
            type: 'map',
            key: {},
            value: {}
          },
          S1b: {
            type: 'list',
            member: {
              shape: 'Sr'
            }
          },
          S1d: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {
                type: 'structure',
                members: {
                  PutRequest: {
                    type: 'structure',
                    required: ['Item'],
                    members: {
                      Item: {
                        shape: 'S1h'
                      }
                    }
                  },
                  DeleteRequest: {
                    type: 'structure',
                    required: ['Key'],
                    members: {
                      Key: {
                        shape: 'S14'
                      }
                    }
                  }
                }
              }
            }
          },
          S1h: {
            type: 'map',
            key: {},
            value: {
              shape: 'S6'
            }
          },
          S1l: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {
                shape: 'S1n'
              }
            }
          },
          S1n: {
            type: 'structure',
            members: {
              ItemCollectionKey: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S6'
                }
              },
              SizeEstimateRangeGB: {
                type: 'list',
                member: {
                  type: 'double'
                }
              }
            }
          },
          S1u: {
            type: 'structure',
            required: ['BackupArn', 'BackupName', 'BackupStatus', 'BackupType', 'BackupCreationDateTime'],
            members: {
              BackupArn: {},
              BackupName: {},
              BackupSizeBytes: {
                type: 'long'
              },
              BackupStatus: {},
              BackupType: {},
              BackupCreationDateTime: {
                type: 'timestamp'
              },
              BackupExpiryDateTime: {
                type: 'timestamp'
              }
            }
          },
          S22: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RegionName: {}
              }
            }
          },
          S26: {
            type: 'structure',
            members: {
              ReplicationGroup: {
                shape: 'S27'
              },
              GlobalTableArn: {},
              CreationDateTime: {
                type: 'timestamp'
              },
              GlobalTableStatus: {},
              GlobalTableName: {}
            }
          },
          S27: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RegionName: {},
                ReplicaStatus: {},
                ReplicaStatusDescription: {},
                ReplicaStatusPercentProgress: {},
                KMSMasterKeyId: {},
                ProvisionedThroughputOverride: {
                  shape: 'S2d'
                },
                OnDemandThroughputOverride: {
                  shape: 'S2f'
                },
                GlobalSecondaryIndexes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IndexName: {},
                      ProvisionedThroughputOverride: {
                        shape: 'S2d'
                      },
                      OnDemandThroughputOverride: {
                        shape: 'S2f'
                      }
                    }
                  }
                },
                ReplicaInaccessibleDateTime: {
                  type: 'timestamp'
                },
                ReplicaTableClassSummary: {
                  shape: 'S2j'
                }
              }
            }
          },
          S2d: {
            type: 'structure',
            members: {
              ReadCapacityUnits: {
                type: 'long'
              }
            }
          },
          S2f: {
            type: 'structure',
            members: {
              MaxReadRequestUnits: {
                type: 'long'
              }
            }
          },
          S2j: {
            type: 'structure',
            members: {
              TableClass: {},
              LastUpdateDateTime: {
                type: 'timestamp'
              }
            }
          },
          S2o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AttributeName', 'AttributeType'],
              members: {
                AttributeName: {},
                AttributeType: {}
              }
            }
          },
          S2s: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AttributeName', 'KeyType'],
              members: {
                AttributeName: {},
                KeyType: {}
              }
            }
          },
          S2v: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['IndexName', 'KeySchema', 'Projection'],
              members: {
                IndexName: {},
                KeySchema: {
                  shape: 'S2s'
                },
                Projection: {
                  shape: 'S2x'
                }
              }
            }
          },
          S2x: {
            type: 'structure',
            members: {
              ProjectionType: {},
              NonKeyAttributes: {
                type: 'list',
                member: {}
              }
            }
          },
          S31: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['IndexName', 'KeySchema', 'Projection'],
              members: {
                IndexName: {},
                KeySchema: {
                  shape: 'S2s'
                },
                Projection: {
                  shape: 'S2x'
                },
                ProvisionedThroughput: {
                  shape: 'S33'
                },
                OnDemandThroughput: {
                  shape: 'S34'
                }
              }
            }
          },
          S33: {
            type: 'structure',
            required: ['ReadCapacityUnits', 'WriteCapacityUnits'],
            members: {
              ReadCapacityUnits: {
                type: 'long'
              },
              WriteCapacityUnits: {
                type: 'long'
              }
            }
          },
          S34: {
            type: 'structure',
            members: {
              MaxReadRequestUnits: {
                type: 'long'
              },
              MaxWriteRequestUnits: {
                type: 'long'
              }
            }
          },
          S36: {
            type: 'structure',
            required: ['StreamEnabled'],
            members: {
              StreamEnabled: {
                type: 'boolean'
              },
              StreamViewType: {}
            }
          },
          S39: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              SSEType: {},
              KMSMasterKeyId: {}
            }
          },
          S3c: {
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
          S3j: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                shape: 'S2o'
              },
              TableName: {},
              KeySchema: {
                shape: 'S2s'
              },
              TableStatus: {},
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                shape: 'S3l'
              },
              TableSizeBytes: {
                type: 'long'
              },
              ItemCount: {
                type: 'long'
              },
              TableArn: {},
              TableId: {},
              BillingModeSummary: {
                shape: 'S3o'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    IndexName: {},
                    KeySchema: {
                      shape: 'S2s'
                    },
                    Projection: {
                      shape: 'S2x'
                    },
                    IndexSizeBytes: {
                      type: 'long'
                    },
                    ItemCount: {
                      type: 'long'
                    },
                    IndexArn: {}
                  }
                }
              },
              GlobalSecondaryIndexes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    IndexName: {},
                    KeySchema: {
                      shape: 'S2s'
                    },
                    Projection: {
                      shape: 'S2x'
                    },
                    IndexStatus: {},
                    Backfilling: {
                      type: 'boolean'
                    },
                    ProvisionedThroughput: {
                      shape: 'S3l'
                    },
                    IndexSizeBytes: {
                      type: 'long'
                    },
                    ItemCount: {
                      type: 'long'
                    },
                    IndexArn: {},
                    OnDemandThroughput: {
                      shape: 'S34'
                    }
                  }
                }
              },
              StreamSpecification: {
                shape: 'S36'
              },
              LatestStreamLabel: {},
              LatestStreamArn: {},
              GlobalTableVersion: {},
              Replicas: {
                shape: 'S27'
              },
              RestoreSummary: {
                type: 'structure',
                required: ['RestoreDateTime', 'RestoreInProgress'],
                members: {
                  SourceBackupArn: {},
                  SourceTableArn: {},
                  RestoreDateTime: {
                    type: 'timestamp'
                  },
                  RestoreInProgress: {
                    type: 'boolean'
                  }
                }
              },
              SSEDescription: {
                shape: 'S3y'
              },
              ArchivalSummary: {
                type: 'structure',
                members: {
                  ArchivalDateTime: {
                    type: 'timestamp'
                  },
                  ArchivalReason: {},
                  ArchivalBackupArn: {}
                }
              },
              TableClassSummary: {
                shape: 'S2j'
              },
              DeletionProtectionEnabled: {
                type: 'boolean'
              },
              OnDemandThroughput: {
                shape: 'S34'
              }
            }
          },
          S3l: {
            type: 'structure',
            members: {
              LastIncreaseDateTime: {
                type: 'timestamp'
              },
              LastDecreaseDateTime: {
                type: 'timestamp'
              },
              NumberOfDecreasesToday: {
                type: 'long'
              },
              ReadCapacityUnits: {
                type: 'long'
              },
              WriteCapacityUnits: {
                type: 'long'
              }
            }
          },
          S3o: {
            type: 'structure',
            members: {
              BillingMode: {},
              LastUpdateToPayPerRequestDateTime: {
                type: 'timestamp'
              }
            }
          },
          S3y: {
            type: 'structure',
            members: {
              Status: {},
              SSEType: {},
              KMSMasterKeyArn: {},
              InaccessibleEncryptionDateTime: {
                type: 'timestamp'
              }
            }
          },
          S45: {
            type: 'structure',
            members: {
              BackupDetails: {
                shape: 'S1u'
              },
              SourceTableDetails: {
                type: 'structure',
                required: ['TableName', 'TableId', 'KeySchema', 'TableCreationDateTime', 'ProvisionedThroughput'],
                members: {
                  TableName: {},
                  TableId: {},
                  TableArn: {},
                  TableSizeBytes: {
                    type: 'long'
                  },
                  KeySchema: {
                    shape: 'S2s'
                  },
                  TableCreationDateTime: {
                    type: 'timestamp'
                  },
                  ProvisionedThroughput: {
                    shape: 'S33'
                  },
                  OnDemandThroughput: {
                    shape: 'S34'
                  },
                  ItemCount: {
                    type: 'long'
                  },
                  BillingMode: {}
                }
              },
              SourceTableFeatureDetails: {
                type: 'structure',
                members: {
                  LocalSecondaryIndexes: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        IndexName: {},
                        KeySchema: {
                          shape: 'S2s'
                        },
                        Projection: {
                          shape: 'S2x'
                        }
                      }
                    }
                  },
                  GlobalSecondaryIndexes: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        IndexName: {},
                        KeySchema: {
                          shape: 'S2s'
                        },
                        Projection: {
                          shape: 'S2x'
                        },
                        ProvisionedThroughput: {
                          shape: 'S33'
                        },
                        OnDemandThroughput: {
                          shape: 'S34'
                        }
                      }
                    }
                  },
                  StreamDescription: {
                    shape: 'S36'
                  },
                  TimeToLiveDescription: {
                    shape: 'S4e'
                  },
                  SSEDescription: {
                    shape: 'S3y'
                  }
                }
              }
            }
          },
          S4e: {
            type: 'structure',
            members: {
              TimeToLiveStatus: {},
              AttributeName: {}
            }
          },
          S4i: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Value: {
                  shape: 'S6'
                },
                Exists: {
                  type: 'boolean'
                },
                ComparisonOperator: {},
                AttributeValueList: {
                  shape: 'S4m'
                }
              }
            }
          },
          S4m: {
            type: 'list',
            member: {
              shape: 'S6'
            }
          },
          S4q: {
            type: 'map',
            key: {},
            value: {
              shape: 'S6'
            }
          },
          S53: {
            type: 'structure',
            required: ['ContinuousBackupsStatus'],
            members: {
              ContinuousBackupsStatus: {},
              PointInTimeRecoveryDescription: {
                type: 'structure',
                members: {
                  PointInTimeRecoveryStatus: {},
                  EarliestRestorableDateTime: {
                    type: 'timestamp'
                  },
                  LatestRestorableDateTime: {
                    type: 'timestamp'
                  }
                }
              }
            }
          },
          S5o: {
            type: 'structure',
            members: {
              ExportArn: {},
              ExportStatus: {},
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              ExportManifest: {},
              TableArn: {},
              TableId: {},
              ExportTime: {
                type: 'timestamp'
              },
              ClientToken: {},
              S3Bucket: {},
              S3BucketOwner: {},
              S3Prefix: {},
              S3SseAlgorithm: {},
              S3SseKmsKeyId: {},
              FailureCode: {},
              FailureMessage: {},
              ExportFormat: {},
              BilledSizeBytes: {
                type: 'long'
              },
              ItemCount: {
                type: 'long'
              },
              ExportType: {},
              IncrementalExportSpecification: {
                shape: 'S65'
              }
            }
          },
          S65: {
            type: 'structure',
            members: {
              ExportFromTime: {
                type: 'timestamp'
              },
              ExportToTime: {
                type: 'timestamp'
              },
              ExportViewType: {}
            }
          },
          S6d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['RegionName'],
              members: {
                RegionName: {},
                ReplicaStatus: {},
                ReplicaBillingModeSummary: {
                  shape: 'S3o'
                },
                ReplicaProvisionedReadCapacityUnits: {
                  type: 'long'
                },
                ReplicaProvisionedReadCapacityAutoScalingSettings: {
                  shape: 'S6f'
                },
                ReplicaProvisionedWriteCapacityUnits: {
                  type: 'long'
                },
                ReplicaProvisionedWriteCapacityAutoScalingSettings: {
                  shape: 'S6f'
                },
                ReplicaGlobalSecondaryIndexSettings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IndexName'],
                    members: {
                      IndexName: {},
                      IndexStatus: {},
                      ProvisionedReadCapacityUnits: {
                        type: 'long'
                      },
                      ProvisionedReadCapacityAutoScalingSettings: {
                        shape: 'S6f'
                      },
                      ProvisionedWriteCapacityUnits: {
                        type: 'long'
                      },
                      ProvisionedWriteCapacityAutoScalingSettings: {
                        shape: 'S6f'
                      }
                    }
                  }
                },
                ReplicaTableClassSummary: {
                  shape: 'S2j'
                }
              }
            }
          },
          S6f: {
            type: 'structure',
            members: {
              MinimumUnits: {
                type: 'long'
              },
              MaximumUnits: {
                type: 'long'
              },
              AutoScalingDisabled: {
                type: 'boolean'
              },
              AutoScalingRoleArn: {},
              ScalingPolicies: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PolicyName: {},
                    TargetTrackingScalingPolicyConfiguration: {
                      type: 'structure',
                      required: ['TargetValue'],
                      members: {
                        DisableScaleIn: {
                          type: 'boolean'
                        },
                        ScaleInCooldown: {
                          type: 'integer'
                        },
                        ScaleOutCooldown: {
                          type: 'integer'
                        },
                        TargetValue: {
                          type: 'double'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S6r: {
            type: 'structure',
            members: {
              ImportArn: {},
              ImportStatus: {},
              TableArn: {},
              TableId: {},
              ClientToken: {},
              S3BucketSource: {
                shape: 'S6t'
              },
              ErrorCount: {
                type: 'long'
              },
              CloudWatchLogGroupArn: {},
              InputFormat: {},
              InputFormatOptions: {
                shape: 'S6x'
              },
              InputCompressionType: {},
              TableCreationParameters: {
                shape: 'S73'
              },
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              ProcessedSizeBytes: {
                type: 'long'
              },
              ProcessedItemCount: {
                type: 'long'
              },
              ImportedItemCount: {
                type: 'long'
              },
              FailureCode: {},
              FailureMessage: {}
            }
          },
          S6t: {
            type: 'structure',
            required: ['S3Bucket'],
            members: {
              S3BucketOwner: {},
              S3Bucket: {},
              S3KeyPrefix: {}
            }
          },
          S6x: {
            type: 'structure',
            members: {
              Csv: {
                type: 'structure',
                members: {
                  Delimiter: {},
                  HeaderList: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S73: {
            type: 'structure',
            required: ['TableName', 'AttributeDefinitions', 'KeySchema'],
            members: {
              TableName: {},
              AttributeDefinitions: {
                shape: 'S2o'
              },
              KeySchema: {
                shape: 'S2s'
              },
              BillingMode: {},
              ProvisionedThroughput: {
                shape: 'S33'
              },
              OnDemandThroughput: {
                shape: 'S34'
              },
              SSESpecification: {
                shape: 'S39'
              },
              GlobalSecondaryIndexes: {
                shape: 'S31'
              }
            }
          },
          S7k: {
            type: 'structure',
            members: {
              TableName: {},
              TableStatus: {},
              Replicas: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    RegionName: {},
                    GlobalSecondaryIndexes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          IndexName: {},
                          IndexStatus: {},
                          ProvisionedReadCapacityAutoScalingSettings: {
                            shape: 'S6f'
                          },
                          ProvisionedWriteCapacityAutoScalingSettings: {
                            shape: 'S6f'
                          }
                        }
                      }
                    },
                    ReplicaProvisionedReadCapacityAutoScalingSettings: {
                      shape: 'S6f'
                    },
                    ReplicaProvisionedWriteCapacityAutoScalingSettings: {
                      shape: 'S6f'
                    },
                    ReplicaStatus: {}
                  }
                }
              }
            }
          },
          S7r: {
            type: 'structure',
            required: ['TableName', 'StreamArn'],
            members: {
              TableName: {},
              StreamArn: {},
              EnableKinesisStreamingConfiguration: {
                shape: 'S7s'
              }
            }
          },
          S7s: {
            type: 'structure',
            members: {
              ApproximateCreationDateTimePrecision: {}
            }
          },
          S7t: {
            type: 'structure',
            members: {
              TableName: {},
              StreamArn: {},
              DestinationStatus: {},
              EnableKinesisStreamingConfiguration: {
                shape: 'S7s'
              }
            }
          },
          S83: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Item: {
                  shape: 'Sr'
                }
              }
            }
          },
          S9l: {
            type: 'structure',
            required: ['ComparisonOperator'],
            members: {
              AttributeValueList: {
                shape: 'S4m'
              },
              ComparisonOperator: {}
            }
          },
          S9m: {
            type: 'map',
            key: {},
            value: {
              shape: 'S9l'
            }
          },
          Sas: {
            type: 'structure',
            members: {
              MinimumUnits: {
                type: 'long'
              },
              MaximumUnits: {
                type: 'long'
              },
              AutoScalingDisabled: {
                type: 'boolean'
              },
              AutoScalingRoleArn: {},
              ScalingPolicyUpdate: {
                type: 'structure',
                required: ['TargetTrackingScalingPolicyConfiguration'],
                members: {
                  PolicyName: {},
                  TargetTrackingScalingPolicyConfiguration: {
                    type: 'structure',
                    required: ['TargetValue'],
                    members: {
                      DisableScaleIn: {
                        type: 'boolean'
                      },
                      ScaleInCooldown: {
                        type: 'integer'
                      },
                      ScaleOutCooldown: {
                        type: 'integer'
                      },
                      TargetValue: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          Sb9: {
            type: 'structure',
            members: {
              ApproximateCreationDateTimePrecision: {}
            }
          },
          Sbk: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['IndexName'],
              members: {
                IndexName: {},
                ProvisionedThroughputOverride: {
                  shape: 'S2d'
                },
                OnDemandThroughputOverride: {
                  shape: 'S2f'
                }
              }
            }
          },
          Sby: {
            type: 'structure',
            required: ['Enabled', 'AttributeName'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              AttributeName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ba7f1ceab71c4fc86d0a0d6eebf42bdf98e88d0c.js.map