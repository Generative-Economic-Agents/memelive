System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-03-31',
          endpointPrefix: 'glue',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS Glue',
          serviceId: 'Glue',
          signatureVersion: 'v4',
          targetPrefix: 'AWSGlue',
          uid: 'glue-2017-03-31',
          auth: ['aws.auth#sigv4']
        },
        operations: {
          BatchCreatePartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionInputList'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionInputList: {
                  type: 'list',
                  member: {
                    shape: 'S5'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  shape: 'S12'
                }
              }
            }
          },
          BatchDeleteConnection: {
            input: {
              type: 'structure',
              required: ['ConnectionNameList'],
              members: {
                CatalogId: {},
                ConnectionNameList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Succeeded: {
                  shape: 'Sn'
                },
                Errors: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S14'
                  }
                }
              }
            }
          },
          BatchDeletePartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionsToDelete'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionsToDelete: {
                  type: 'list',
                  member: {
                    shape: 'S1c'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  shape: 'S12'
                }
              }
            }
          },
          BatchDeleteTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TablesToDelete'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TablesToDelete: {
                  type: 'list',
                  member: {}
                },
                TransactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TableName: {},
                      ErrorDetail: {
                        shape: 'S14'
                      }
                    }
                  }
                }
              }
            }
          },
          BatchDeleteTableVersion: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'VersionIds'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                VersionIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TableName: {},
                      VersionId: {},
                      ErrorDetail: {
                        shape: 'S14'
                      }
                    }
                  }
                }
              }
            }
          },
          BatchGetBlueprints: {
            input: {
              type: 'structure',
              required: ['Names'],
              members: {
                Names: {
                  type: 'list',
                  member: {}
                },
                IncludeBlueprint: {
                  type: 'boolean'
                },
                IncludeParameterSpec: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blueprints: {
                  type: 'list',
                  member: {
                    shape: 'S1w'
                  }
                },
                MissingBlueprints: {
                  shape: 'S24'
                }
              }
            }
          },
          BatchGetCrawlers: {
            input: {
              type: 'structure',
              required: ['CrawlerNames'],
              members: {
                CrawlerNames: {
                  shape: 'S26'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Crawlers: {
                  shape: 'S28'
                },
                CrawlersNotFound: {
                  shape: 'S26'
                }
              }
            }
          },
          BatchGetCustomEntityTypes: {
            input: {
              type: 'structure',
              required: ['Names'],
              members: {
                Names: {
                  shape: 'S3r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomEntityTypes: {
                  shape: 'S3t'
                },
                CustomEntityTypesNotFound: {
                  shape: 'S3r'
                }
              }
            }
          },
          BatchGetDataQualityResult: {
            input: {
              type: 'structure',
              required: ['ResultIds'],
              members: {
                ResultIds: {
                  shape: 'S3x'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Results'],
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResultId: {},
                      Score: {
                        type: 'double'
                      },
                      DataSource: {
                        shape: 'S43'
                      },
                      RulesetName: {},
                      EvaluationContext: {},
                      StartedOn: {
                        type: 'timestamp'
                      },
                      CompletedOn: {
                        type: 'timestamp'
                      },
                      JobName: {},
                      JobRunId: {},
                      RulesetEvaluationRunId: {},
                      RuleResults: {
                        shape: 'S46'
                      },
                      AnalyzerResults: {
                        shape: 'S4b'
                      },
                      Observations: {
                        shape: 'S4d'
                      }
                    }
                  }
                },
                ResultsNotFound: {
                  shape: 'S3x'
                }
              }
            }
          },
          BatchGetDevEndpoints: {
            input: {
              type: 'structure',
              required: ['DevEndpointNames'],
              members: {
                DevEndpointNames: {
                  shape: 'S4k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DevEndpoints: {
                  shape: 'S4m'
                },
                DevEndpointsNotFound: {
                  shape: 'S4k'
                }
              }
            }
          },
          BatchGetJobs: {
            input: {
              type: 'structure',
              required: ['JobNames'],
              members: {
                JobNames: {
                  shape: 'S4w'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Jobs: {
                  shape: 'S4y'
                },
                JobsNotFound: {
                  shape: 'S4w'
                }
              }
            }
          },
          BatchGetPartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionsToGet'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionsToGet: {
                  shape: 'Saf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Partitions: {
                  shape: 'Sah'
                },
                UnprocessedKeys: {
                  shape: 'Saf'
                }
              }
            }
          },
          BatchGetTableOptimizer: {
            input: {
              type: 'structure',
              required: ['Entries'],
              members: {
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      catalogId: {},
                      databaseName: {},
                      tableName: {},
                      type: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableOptimizers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      catalogId: {},
                      databaseName: {},
                      tableName: {},
                      tableOptimizer: {
                        shape: 'Sas'
                      }
                    }
                  }
                },
                Failures: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      error: {
                        shape: 'S14'
                      },
                      catalogId: {},
                      databaseName: {},
                      tableName: {},
                      type: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetTriggers: {
            input: {
              type: 'structure',
              required: ['TriggerNames'],
              members: {
                TriggerNames: {
                  shape: 'Sb3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Triggers: {
                  shape: 'Sb5'
                },
                TriggersNotFound: {
                  shape: 'Sb3'
                }
              }
            }
          },
          BatchGetWorkflows: {
            input: {
              type: 'structure',
              required: ['Names'],
              members: {
                Names: {
                  shape: 'Sbn'
                },
                IncludeGraph: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Workflows: {
                  type: 'list',
                  member: {
                    shape: 'Sbq'
                  }
                },
                MissingWorkflows: {
                  shape: 'Sbn'
                }
              }
            }
          },
          BatchStopJobRun: {
            input: {
              type: 'structure',
              required: ['JobName', 'JobRunIds'],
              members: {
                JobName: {},
                JobRunIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SuccessfulSubmissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobName: {},
                      JobRunId: {}
                    }
                  }
                },
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobName: {},
                      JobRunId: {},
                      ErrorDetail: {
                        shape: 'S14'
                      }
                    }
                  }
                }
              }
            }
          },
          BatchUpdatePartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'Entries'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['PartitionValueList', 'PartitionInput'],
                    members: {
                      PartitionValueList: {
                        shape: 'Sco'
                      },
                      PartitionInput: {
                        shape: 'S5'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PartitionValueList: {
                        shape: 'Sco'
                      },
                      ErrorDetail: {
                        shape: 'S14'
                      }
                    }
                  }
                }
              }
            }
          },
          CancelDataQualityRuleRecommendationRun: {
            input: {
              type: 'structure',
              required: ['RunId'],
              members: {
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelDataQualityRulesetEvaluationRun: {
            input: {
              type: 'structure',
              required: ['RunId'],
              members: {
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelMLTaskRun: {
            input: {
              type: 'structure',
              required: ['TransformId', 'TaskRunId'],
              members: {
                TransformId: {},
                TaskRunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransformId: {},
                TaskRunId: {},
                Status: {}
              }
            }
          },
          CancelStatement: {
            input: {
              type: 'structure',
              required: ['SessionId', 'Id'],
              members: {
                SessionId: {},
                Id: {
                  type: 'integer'
                },
                RequestOrigin: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CheckSchemaVersionValidity: {
            input: {
              type: 'structure',
              required: ['DataFormat', 'SchemaDefinition'],
              members: {
                DataFormat: {},
                SchemaDefinition: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Valid: {
                  type: 'boolean'
                },
                Error: {}
              }
            }
          },
          CreateBlueprint: {
            input: {
              type: 'structure',
              required: ['Name', 'BlueprintLocation'],
              members: {
                Name: {},
                Description: {},
                BlueprintLocation: {},
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          },
          CreateClassifier: {
            input: {
              type: 'structure',
              members: {
                GrokClassifier: {
                  type: 'structure',
                  required: ['Classification', 'Name', 'GrokPattern'],
                  members: {
                    Classification: {},
                    Name: {},
                    GrokPattern: {},
                    CustomPatterns: {}
                  }
                },
                XMLClassifier: {
                  type: 'structure',
                  required: ['Classification', 'Name'],
                  members: {
                    Classification: {},
                    Name: {},
                    RowTag: {}
                  }
                },
                JsonClassifier: {
                  type: 'structure',
                  required: ['Name', 'JsonPath'],
                  members: {
                    Name: {},
                    JsonPath: {}
                  }
                },
                CsvClassifier: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    Delimiter: {},
                    QuoteSymbol: {},
                    ContainsHeader: {},
                    Header: {
                      shape: 'Sdq'
                    },
                    DisableValueTrimming: {
                      type: 'boolean'
                    },
                    AllowSingleColumn: {
                      type: 'boolean'
                    },
                    CustomDatatypeConfigured: {
                      type: 'boolean'
                    },
                    CustomDatatypes: {
                      shape: 'Sdr'
                    },
                    Serde: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateConnection: {
            input: {
              type: 'structure',
              required: ['ConnectionInput'],
              members: {
                CatalogId: {},
                ConnectionInput: {
                  shape: 'Sdv'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreateConnectionStatus: {}
              }
            }
          },
          CreateCrawler: {
            input: {
              type: 'structure',
              required: ['Name', 'Role', 'Targets'],
              members: {
                Name: {},
                Role: {},
                DatabaseName: {},
                Description: {},
                Targets: {
                  shape: 'S2b'
                },
                Schedule: {},
                Classifiers: {
                  shape: 'S32'
                },
                TablePrefix: {},
                SchemaChangePolicy: {
                  shape: 'S35'
                },
                RecrawlPolicy: {
                  shape: 'S33'
                },
                LineageConfiguration: {
                  shape: 'S38'
                },
                LakeFormationConfiguration: {
                  shape: 'S3o'
                },
                Configuration: {},
                CrawlerSecurityConfiguration: {},
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateCustomEntityType: {
            input: {
              type: 'structure',
              required: ['Name', 'RegexString'],
              members: {
                Name: {},
                RegexString: {},
                ContextWords: {
                  shape: 'S3v'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          },
          CreateDataQualityRuleset: {
            input: {
              type: 'structure',
              required: ['Name', 'Ruleset'],
              members: {
                Name: {},
                Description: {},
                Ruleset: {},
                Tags: {
                  shape: 'Sd9'
                },
                TargetTable: {
                  shape: 'Sep'
                },
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            },
            idempotent: true
          },
          CreateDatabase: {
            input: {
              type: 'structure',
              required: ['DatabaseInput'],
              members: {
                CatalogId: {},
                DatabaseInput: {
                  shape: 'Ses'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDevEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName', 'RoleArn'],
              members: {
                EndpointName: {},
                RoleArn: {},
                SecurityGroupIds: {
                  shape: 'S4p'
                },
                SubnetId: {},
                PublicKey: {},
                PublicKeys: {
                  shape: 'S4t'
                },
                NumberOfNodes: {
                  type: 'integer'
                },
                WorkerType: {},
                GlueVersion: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                ExtraPythonLibsS3Path: {},
                ExtraJarsS3Path: {},
                SecurityConfiguration: {},
                Tags: {
                  shape: 'Sd9'
                },
                Arguments: {
                  shape: 'S4u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointName: {},
                Status: {},
                SecurityGroupIds: {
                  shape: 'S4p'
                },
                SubnetId: {},
                RoleArn: {},
                YarnEndpointAddress: {},
                ZeppelinRemoteSparkInterpreterPort: {
                  type: 'integer'
                },
                NumberOfNodes: {
                  type: 'integer'
                },
                WorkerType: {},
                GlueVersion: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                AvailabilityZone: {},
                VpcId: {},
                ExtraPythonLibsS3Path: {},
                ExtraJarsS3Path: {},
                FailureReason: {},
                SecurityConfiguration: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                Arguments: {
                  shape: 'S4u'
                }
              }
            }
          },
          CreateJob: {
            input: {
              type: 'structure',
              required: ['Name', 'Role', 'Command'],
              members: {
                Name: {},
                JobMode: {},
                Description: {},
                LogUri: {},
                Role: {},
                ExecutionProperty: {
                  shape: 'S53'
                },
                Command: {
                  shape: 'S55'
                },
                DefaultArguments: {
                  shape: 'S59'
                },
                NonOverridableArguments: {
                  shape: 'S59'
                },
                Connections: {
                  shape: 'S5a'
                },
                MaxRetries: {
                  type: 'integer'
                },
                AllocatedCapacity: {
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated, use MaxCapacity instead.',
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                MaxCapacity: {
                  type: 'double'
                },
                SecurityConfiguration: {},
                Tags: {
                  shape: 'Sd9'
                },
                NotificationProperty: {
                  shape: 'S5e'
                },
                GlueVersion: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                WorkerType: {},
                CodeGenConfigurationNodes: {
                  shape: 'S5g'
                },
                ExecutionClass: {},
                SourceControlDetails: {
                  shape: 'Saa'
                },
                MaintenanceWindow: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          },
          CreateMLTransform: {
            input: {
              type: 'structure',
              required: ['Name', 'InputRecordTables', 'Parameters', 'Role'],
              members: {
                Name: {},
                Description: {},
                InputRecordTables: {
                  shape: 'Sf9'
                },
                Parameters: {
                  shape: 'Sfa'
                },
                Role: {},
                GlueVersion: {},
                MaxCapacity: {
                  type: 'double'
                },
                WorkerType: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                MaxRetries: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sd9'
                },
                TransformEncryption: {
                  shape: 'Sfe'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransformId: {}
              }
            }
          },
          CreatePartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionInput'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionInput: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreatePartitionIndex: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionIndex'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionIndex: {
                  shape: 'Sfl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateRegistry: {
            input: {
              type: 'structure',
              required: ['RegistryName'],
              members: {
                RegistryName: {},
                Description: {},
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RegistryArn: {},
                RegistryName: {},
                Description: {},
                Tags: {
                  shape: 'Sd9'
                }
              }
            }
          },
          CreateSchema: {
            input: {
              type: 'structure',
              required: ['SchemaName', 'DataFormat'],
              members: {
                RegistryId: {
                  shape: 'Sfr'
                },
                SchemaName: {},
                DataFormat: {},
                Compatibility: {},
                Description: {},
                Tags: {
                  shape: 'Sd9'
                },
                SchemaDefinition: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegistryName: {},
                RegistryArn: {},
                SchemaName: {},
                SchemaArn: {},
                Description: {},
                DataFormat: {},
                Compatibility: {},
                SchemaCheckpoint: {
                  type: 'long'
                },
                LatestSchemaVersion: {
                  type: 'long'
                },
                NextSchemaVersion: {
                  type: 'long'
                },
                SchemaStatus: {},
                Tags: {
                  shape: 'Sd9'
                },
                SchemaVersionId: {},
                SchemaVersionStatus: {}
              }
            }
          },
          CreateScript: {
            input: {
              type: 'structure',
              members: {
                DagNodes: {
                  shape: 'Sfy'
                },
                DagEdges: {
                  shape: 'Sg6'
                },
                Language: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PythonScript: {},
                ScalaCode: {}
              }
            }
          },
          CreateSecurityConfiguration: {
            input: {
              type: 'structure',
              required: ['Name', 'EncryptionConfiguration'],
              members: {
                Name: {},
                EncryptionConfiguration: {
                  shape: 'Sgd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateSession: {
            input: {
              type: 'structure',
              required: ['Id', 'Role', 'Command'],
              members: {
                Id: {},
                Description: {},
                Role: {},
                Command: {
                  shape: 'Sgp'
                },
                Timeout: {
                  type: 'integer'
                },
                IdleTimeout: {
                  type: 'integer'
                },
                DefaultArguments: {
                  shape: 'Sgq'
                },
                Connections: {
                  shape: 'S5a'
                },
                MaxCapacity: {
                  type: 'double'
                },
                NumberOfWorkers: {
                  type: 'integer'
                },
                WorkerType: {},
                SecurityConfiguration: {},
                GlueVersion: {},
                Tags: {
                  shape: 'Sd9'
                },
                RequestOrigin: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Session: {
                  shape: 'Sgt'
                }
              }
            }
          },
          CreateTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableInput'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableInput: {
                  shape: 'Sgy'
                },
                PartitionIndexes: {
                  type: 'list',
                  member: {
                    shape: 'Sfl'
                  }
                },
                TransactionId: {},
                OpenTableFormatInput: {
                  type: 'structure',
                  members: {
                    IcebergInput: {
                      type: 'structure',
                      required: ['MetadataOperation'],
                      members: {
                        MetadataOperation: {},
                        Version: {}
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
          CreateTableOptimizer: {
            input: {
              type: 'structure',
              required: ['CatalogId', 'DatabaseName', 'TableName', 'Type', 'TableOptimizerConfiguration'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                Type: {},
                TableOptimizerConfiguration: {
                  shape: 'Sat'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateTrigger: {
            input: {
              type: 'structure',
              required: ['Name', 'Type', 'Actions'],
              members: {
                Name: {},
                WorkflowName: {},
                Type: {},
                Schedule: {},
                Predicate: {
                  shape: 'Sbc'
                },
                Actions: {
                  shape: 'Sba'
                },
                Description: {},
                StartOnCreation: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sd9'
                },
                EventBatchingCondition: {
                  shape: 'Sbj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          },
          CreateUserDefinedFunction: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'FunctionInput'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                FunctionInput: {
                  shape: 'Shj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateWorkflow: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                DefaultRunProperties: {
                  shape: 'Sbr'
                },
                Tags: {
                  shape: 'Sd9'
                },
                MaxConcurrentRuns: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          },
          DeleteBlueprint: {
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
                Name: {}
              }
            }
          },
          DeleteClassifier: {
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
          DeleteColumnStatisticsForPartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionValues', 'ColumnName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionValues: {
                  shape: 'S6'
                },
                ColumnName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteColumnStatisticsForTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'ColumnName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                ColumnName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteConnection: {
            input: {
              type: 'structure',
              required: ['ConnectionName'],
              members: {
                CatalogId: {},
                ConnectionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCrawler: {
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
          DeleteCustomEntityType: {
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
                Name: {}
              }
            }
          },
          DeleteDataQualityRuleset: {
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
          DeleteDatabase: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                CatalogId: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDevEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName'],
              members: {
                EndpointName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteJob: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobName: {}
              }
            }
          },
          DeleteMLTransform: {
            input: {
              type: 'structure',
              required: ['TransformId'],
              members: {
                TransformId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransformId: {}
              }
            }
          },
          DeletePartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionValues'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionValues: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePartitionIndex: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'IndexName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                IndexName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRegistry: {
            input: {
              type: 'structure',
              required: ['RegistryId'],
              members: {
                RegistryId: {
                  shape: 'Sfr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RegistryName: {},
                RegistryArn: {},
                Status: {}
              }
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              members: {
                PolicyHashCondition: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSchema: {
            input: {
              type: 'structure',
              required: ['SchemaId'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArn: {},
                SchemaName: {},
                Status: {}
              }
            }
          },
          DeleteSchemaVersions: {
            input: {
              type: 'structure',
              required: ['SchemaId', 'Versions'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                Versions: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaVersionErrors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VersionNumber: {
                        type: 'long'
                      },
                      ErrorDetails: {
                        type: 'structure',
                        members: {
                          ErrorCode: {},
                          ErrorMessage: {}
                        }
                      }
                    }
                  }
                }
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
          DeleteSession: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                RequestOrigin: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {}
              }
            }
          },
          DeleteTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'Name'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                Name: {},
                TransactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTableOptimizer: {
            input: {
              type: 'structure',
              required: ['CatalogId', 'DatabaseName', 'TableName', 'Type'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTableVersion: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'VersionId'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                VersionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTrigger: {
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
                Name: {}
              }
            }
          },
          DeleteUserDefinedFunction: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'FunctionName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                FunctionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWorkflow: {
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
                Name: {}
              }
            }
          },
          GetBlueprint: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                IncludeBlueprint: {
                  type: 'boolean'
                },
                IncludeParameterSpec: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blueprint: {
                  shape: 'S1w'
                }
              }
            }
          },
          GetBlueprintRun: {
            input: {
              type: 'structure',
              required: ['BlueprintName', 'RunId'],
              members: {
                BlueprintName: {},
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BlueprintRun: {
                  shape: 'Sji'
                }
              }
            }
          },
          GetBlueprintRuns: {
            input: {
              type: 'structure',
              required: ['BlueprintName'],
              members: {
                BlueprintName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BlueprintRuns: {
                  type: 'list',
                  member: {
                    shape: 'Sji'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetCatalogImportStatus: {
            input: {
              type: 'structure',
              members: {
                CatalogId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImportStatus: {
                  type: 'structure',
                  members: {
                    ImportCompleted: {
                      type: 'boolean'
                    },
                    ImportTime: {
                      type: 'timestamp'
                    },
                    ImportedBy: {}
                  }
                }
              }
            }
          },
          GetClassifier: {
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
                Classifier: {
                  shape: 'Sjv'
                }
              }
            }
          },
          GetClassifiers: {
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
                Classifiers: {
                  type: 'list',
                  member: {
                    shape: 'Sjv'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetColumnStatisticsForPartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionValues', 'ColumnNames'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionValues: {
                  shape: 'S6'
                },
                ColumnNames: {
                  shape: 'Sk5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ColumnStatisticsList: {
                  shape: 'Sk7'
                },
                Errors: {
                  shape: 'Skp'
                }
              }
            }
          },
          GetColumnStatisticsForTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'ColumnNames'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                ColumnNames: {
                  shape: 'Sk5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ColumnStatisticsList: {
                  shape: 'Sk7'
                },
                Errors: {
                  shape: 'Skp'
                }
              }
            }
          },
          GetColumnStatisticsTaskRun: {
            input: {
              type: 'structure',
              required: ['ColumnStatisticsTaskRunId'],
              members: {
                ColumnStatisticsTaskRunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ColumnStatisticsTaskRun: {
                  shape: 'Skv'
                }
              }
            }
          },
          GetColumnStatisticsTaskRuns: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                DatabaseName: {},
                TableName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ColumnStatisticsTaskRuns: {
                  type: 'list',
                  member: {
                    shape: 'Skv'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetConnection: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                CatalogId: {},
                Name: {},
                HidePassword: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'Sl6'
                }
              }
            }
          },
          GetConnections: {
            input: {
              type: 'structure',
              members: {
                CatalogId: {},
                Filter: {
                  type: 'structure',
                  members: {
                    MatchCriteria: {
                      shape: 'Sdx'
                    },
                    ConnectionType: {}
                  }
                },
                HidePassword: {
                  type: 'boolean'
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
                ConnectionList: {
                  type: 'list',
                  member: {
                    shape: 'Sl6'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetCrawler: {
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
                Crawler: {
                  shape: 'S29'
                }
              }
            }
          },
          GetCrawlerMetrics: {
            input: {
              type: 'structure',
              members: {
                CrawlerNameList: {
                  shape: 'S26'
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
                CrawlerMetricsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CrawlerName: {},
                      TimeLeftSeconds: {
                        type: 'double'
                      },
                      StillEstimating: {
                        type: 'boolean'
                      },
                      LastRuntimeSeconds: {
                        type: 'double'
                      },
                      MedianRuntimeSeconds: {
                        type: 'double'
                      },
                      TablesCreated: {
                        type: 'integer'
                      },
                      TablesUpdated: {
                        type: 'integer'
                      },
                      TablesDeleted: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetCrawlers: {
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
                Crawlers: {
                  shape: 'S28'
                },
                NextToken: {}
              }
            }
          },
          GetCustomEntityType: {
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
                RegexString: {},
                ContextWords: {
                  shape: 'S3v'
                }
              }
            }
          },
          GetDataCatalogEncryptionSettings: {
            input: {
              type: 'structure',
              members: {
                CatalogId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataCatalogEncryptionSettings: {
                  shape: 'Slq'
                }
              }
            }
          },
          GetDataQualityResult: {
            input: {
              type: 'structure',
              required: ['ResultId'],
              members: {
                ResultId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResultId: {},
                Score: {
                  type: 'double'
                },
                DataSource: {
                  shape: 'S43'
                },
                RulesetName: {},
                EvaluationContext: {},
                StartedOn: {
                  type: 'timestamp'
                },
                CompletedOn: {
                  type: 'timestamp'
                },
                JobName: {},
                JobRunId: {},
                RulesetEvaluationRunId: {},
                RuleResults: {
                  shape: 'S46'
                },
                AnalyzerResults: {
                  shape: 'S4b'
                },
                Observations: {
                  shape: 'S4d'
                }
              }
            }
          },
          GetDataQualityRuleRecommendationRun: {
            input: {
              type: 'structure',
              required: ['RunId'],
              members: {
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RunId: {},
                DataSource: {
                  shape: 'S43'
                },
                Role: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                Status: {},
                ErrorString: {},
                StartedOn: {
                  type: 'timestamp'
                },
                LastModifiedOn: {
                  type: 'timestamp'
                },
                CompletedOn: {
                  type: 'timestamp'
                },
                ExecutionTime: {
                  type: 'integer'
                },
                RecommendedRuleset: {},
                CreatedRulesetName: {}
              }
            }
          },
          GetDataQualityRuleset: {
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
                Description: {},
                Ruleset: {},
                TargetTable: {
                  shape: 'Sep'
                },
                CreatedOn: {
                  type: 'timestamp'
                },
                LastModifiedOn: {
                  type: 'timestamp'
                },
                RecommendationRunId: {}
              }
            }
          },
          GetDataQualityRulesetEvaluationRun: {
            input: {
              type: 'structure',
              required: ['RunId'],
              members: {
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RunId: {},
                DataSource: {
                  shape: 'S43'
                },
                Role: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                AdditionalRunOptions: {
                  shape: 'Sm3'
                },
                Status: {},
                ErrorString: {},
                StartedOn: {
                  type: 'timestamp'
                },
                LastModifiedOn: {
                  type: 'timestamp'
                },
                CompletedOn: {
                  type: 'timestamp'
                },
                ExecutionTime: {
                  type: 'integer'
                },
                RulesetNames: {
                  shape: 'Sm4'
                },
                ResultIds: {
                  type: 'list',
                  member: {}
                },
                AdditionalDataSources: {
                  shape: 'Sm6'
                }
              }
            }
          },
          GetDatabase: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                CatalogId: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Database: {
                  shape: 'Sm9'
                }
              }
            }
          },
          GetDatabases: {
            input: {
              type: 'structure',
              members: {
                CatalogId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResourceShareType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DatabaseList'],
              members: {
                DatabaseList: {
                  type: 'list',
                  member: {
                    shape: 'Sm9'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetDataflowGraph: {
            input: {
              type: 'structure',
              members: {
                PythonScript: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DagNodes: {
                  shape: 'Sfy'
                },
                DagEdges: {
                  shape: 'Sg6'
                }
              }
            }
          },
          GetDevEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName'],
              members: {
                EndpointName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DevEndpoint: {
                  shape: 'S4n'
                }
              }
            }
          },
          GetDevEndpoints: {
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
                DevEndpoints: {
                  shape: 'S4m'
                },
                NextToken: {}
              }
            }
          },
          GetJob: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'S4z'
                }
              }
            }
          },
          GetJobBookmark: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {},
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobBookmarkEntry: {
                  shape: 'Smr'
                }
              }
            }
          },
          GetJobRun: {
            input: {
              type: 'structure',
              required: ['JobName', 'RunId'],
              members: {
                JobName: {},
                RunId: {},
                PredecessorsIncluded: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobRun: {
                  shape: 'Sc2'
                }
              }
            }
          },
          GetJobRuns: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobRuns: {
                  shape: 'Sc1'
                },
                NextToken: {}
              }
            }
          },
          GetJobs: {
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
              type: 'structure',
              members: {
                Jobs: {
                  shape: 'S4y'
                },
                NextToken: {}
              }
            }
          },
          GetMLTaskRun: {
            input: {
              type: 'structure',
              required: ['TransformId', 'TaskRunId'],
              members: {
                TransformId: {},
                TaskRunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransformId: {},
                TaskRunId: {},
                Status: {},
                LogGroupName: {},
                Properties: {
                  shape: 'Sn2'
                },
                ErrorString: {},
                StartedOn: {
                  type: 'timestamp'
                },
                LastModifiedOn: {
                  type: 'timestamp'
                },
                CompletedOn: {
                  type: 'timestamp'
                },
                ExecutionTime: {
                  type: 'integer'
                }
              }
            }
          },
          GetMLTaskRuns: {
            input: {
              type: 'structure',
              required: ['TransformId'],
              members: {
                TransformId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filter: {
                  type: 'structure',
                  members: {
                    TaskRunType: {},
                    Status: {},
                    StartedBefore: {
                      type: 'timestamp'
                    },
                    StartedAfter: {
                      type: 'timestamp'
                    }
                  }
                },
                Sort: {
                  type: 'structure',
                  required: ['Column', 'SortDirection'],
                  members: {
                    Column: {},
                    SortDirection: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskRuns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TransformId: {},
                      TaskRunId: {},
                      Status: {},
                      LogGroupName: {},
                      Properties: {
                        shape: 'Sn2'
                      },
                      ErrorString: {},
                      StartedOn: {
                        type: 'timestamp'
                      },
                      LastModifiedOn: {
                        type: 'timestamp'
                      },
                      CompletedOn: {
                        type: 'timestamp'
                      },
                      ExecutionTime: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetMLTransform: {
            input: {
              type: 'structure',
              required: ['TransformId'],
              members: {
                TransformId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransformId: {},
                Name: {},
                Description: {},
                Status: {},
                CreatedOn: {
                  type: 'timestamp'
                },
                LastModifiedOn: {
                  type: 'timestamp'
                },
                InputRecordTables: {
                  shape: 'Sf9'
                },
                Parameters: {
                  shape: 'Sfa'
                },
                EvaluationMetrics: {
                  shape: 'Snl'
                },
                LabelCount: {
                  type: 'integer'
                },
                Schema: {
                  shape: 'Sns'
                },
                Role: {},
                GlueVersion: {},
                MaxCapacity: {
                  type: 'double'
                },
                WorkerType: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                MaxRetries: {
                  type: 'integer'
                },
                TransformEncryption: {
                  shape: 'Sfe'
                }
              }
            }
          },
          GetMLTransforms: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filter: {
                  shape: 'Snv'
                },
                Sort: {
                  shape: 'Snw'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Transforms'],
              members: {
                Transforms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TransformId: {},
                      Name: {},
                      Description: {},
                      Status: {},
                      CreatedOn: {
                        type: 'timestamp'
                      },
                      LastModifiedOn: {
                        type: 'timestamp'
                      },
                      InputRecordTables: {
                        shape: 'Sf9'
                      },
                      Parameters: {
                        shape: 'Sfa'
                      },
                      EvaluationMetrics: {
                        shape: 'Snl'
                      },
                      LabelCount: {
                        type: 'integer'
                      },
                      Schema: {
                        shape: 'Sns'
                      },
                      Role: {},
                      GlueVersion: {},
                      MaxCapacity: {
                        type: 'double'
                      },
                      WorkerType: {},
                      NumberOfWorkers: {
                        type: 'integer'
                      },
                      Timeout: {
                        type: 'integer'
                      },
                      MaxRetries: {
                        type: 'integer'
                      },
                      TransformEncryption: {
                        shape: 'Sfe'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetMapping: {
            input: {
              type: 'structure',
              required: ['Source'],
              members: {
                Source: {
                  shape: 'So2'
                },
                Sinks: {
                  shape: 'So3'
                },
                Location: {
                  shape: 'So4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Mapping'],
              members: {
                Mapping: {
                  shape: 'So6'
                }
              }
            }
          },
          GetPartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionValues'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionValues: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Partition: {
                  shape: 'Sai'
                }
              }
            }
          },
          GetPartitionIndexes: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PartitionIndexDescriptorList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IndexName', 'Keys', 'IndexStatus'],
                    members: {
                      IndexName: {},
                      Keys: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Name', 'Type'],
                          members: {
                            Name: {},
                            Type: {}
                          }
                        }
                      },
                      IndexStatus: {},
                      BackfillErrors: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Code: {},
                            Partitions: {
                              type: 'list',
                              member: {
                                shape: 'S1c'
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
          GetPartitions: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                Expression: {},
                NextToken: {},
                Segment: {
                  shape: 'Sop'
                },
                MaxResults: {
                  type: 'integer'
                },
                ExcludeColumnSchema: {
                  type: 'boolean'
                },
                TransactionId: {},
                QueryAsOfTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Partitions: {
                  shape: 'Sah'
                },
                NextToken: {}
              }
            }
          },
          GetPlan: {
            input: {
              type: 'structure',
              required: ['Mapping', 'Source'],
              members: {
                Mapping: {
                  shape: 'So6'
                },
                Source: {
                  shape: 'So2'
                },
                Sinks: {
                  shape: 'So3'
                },
                Location: {
                  shape: 'So4'
                },
                Language: {},
                AdditionalPlanOptionsMap: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PythonScript: {},
                ScalaCode: {}
              }
            }
          },
          GetRegistry: {
            input: {
              type: 'structure',
              required: ['RegistryId'],
              members: {
                RegistryId: {
                  shape: 'Sfr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RegistryName: {},
                RegistryArn: {},
                Description: {},
                Status: {},
                CreatedTime: {},
                UpdatedTime: {}
              }
            }
          },
          GetResourcePolicies: {
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
              type: 'structure',
              members: {
                GetResourcePoliciesResponseList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyInJson: {},
                      PolicyHash: {},
                      CreateTime: {
                        type: 'timestamp'
                      },
                      UpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetResourcePolicy: {
            input: {
              type: 'structure',
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyInJson: {},
                PolicyHash: {},
                CreateTime: {
                  type: 'timestamp'
                },
                UpdateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetSchema: {
            input: {
              type: 'structure',
              required: ['SchemaId'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RegistryName: {},
                RegistryArn: {},
                SchemaName: {},
                SchemaArn: {},
                Description: {},
                DataFormat: {},
                Compatibility: {},
                SchemaCheckpoint: {
                  type: 'long'
                },
                LatestSchemaVersion: {
                  type: 'long'
                },
                NextSchemaVersion: {
                  type: 'long'
                },
                SchemaStatus: {},
                CreatedTime: {},
                UpdatedTime: {}
              }
            }
          },
          GetSchemaByDefinition: {
            input: {
              type: 'structure',
              required: ['SchemaId', 'SchemaDefinition'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                SchemaDefinition: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaVersionId: {},
                SchemaArn: {},
                DataFormat: {},
                Status: {},
                CreatedTime: {}
              }
            }
          },
          GetSchemaVersion: {
            input: {
              type: 'structure',
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                SchemaVersionId: {},
                SchemaVersionNumber: {
                  shape: 'Spc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaVersionId: {},
                SchemaDefinition: {},
                DataFormat: {},
                SchemaArn: {},
                VersionNumber: {
                  type: 'long'
                },
                Status: {},
                CreatedTime: {}
              }
            }
          },
          GetSchemaVersionsDiff: {
            input: {
              type: 'structure',
              required: ['SchemaId', 'FirstSchemaVersionNumber', 'SecondSchemaVersionNumber', 'SchemaDiffType'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                FirstSchemaVersionNumber: {
                  shape: 'Spc'
                },
                SecondSchemaVersionNumber: {
                  shape: 'Spc'
                },
                SchemaDiffType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Diff: {}
              }
            }
          },
          GetSecurityConfiguration: {
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
                SecurityConfiguration: {
                  shape: 'Spl'
                }
              }
            }
          },
          GetSecurityConfigurations: {
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
                SecurityConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'Spl'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetSession: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                RequestOrigin: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Session: {
                  shape: 'Sgt'
                }
              }
            }
          },
          GetStatement: {
            input: {
              type: 'structure',
              required: ['SessionId', 'Id'],
              members: {
                SessionId: {},
                Id: {
                  type: 'integer'
                },
                RequestOrigin: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Statement: {
                  shape: 'Spt'
                }
              }
            }
          },
          GetTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'Name'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                Name: {},
                TransactionId: {},
                QueryAsOfTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Table: {
                  shape: 'Sq0'
                }
              }
            }
          },
          GetTableOptimizer: {
            input: {
              type: 'structure',
              required: ['CatalogId', 'DatabaseName', 'TableName', 'Type'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                TableOptimizer: {
                  shape: 'Sas'
                }
              }
            }
          },
          GetTableVersion: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                VersionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableVersion: {
                  shape: 'Sq9'
                }
              }
            }
          },
          GetTableVersions: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
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
                TableVersions: {
                  type: 'list',
                  member: {
                    shape: 'Sq9'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetTables: {
            input: {
              type: 'structure',
              required: ['DatabaseName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                Expression: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                TransactionId: {},
                QueryAsOfTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TableList: {
                  shape: 'Sqg'
                },
                NextToken: {}
              }
            }
          },
          GetTags: {
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
                Tags: {
                  shape: 'Sd9'
                }
              }
            }
          },
          GetTrigger: {
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
                Trigger: {
                  shape: 'Sb6'
                }
              }
            }
          },
          GetTriggers: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                DependentJobName: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Triggers: {
                  shape: 'Sb5'
                },
                NextToken: {}
              }
            }
          },
          GetUnfilteredPartitionMetadata: {
            input: {
              type: 'structure',
              required: ['CatalogId', 'DatabaseName', 'TableName', 'PartitionValues', 'SupportedPermissionTypes'],
              members: {
                Region: {},
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionValues: {
                  shape: 'S6'
                },
                AuditContext: {
                  shape: 'Sqo'
                },
                SupportedPermissionTypes: {
                  shape: 'Sqr'
                },
                QuerySessionContext: {
                  shape: 'Sqt'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Partition: {
                  shape: 'Sai'
                },
                AuthorizedColumns: {
                  shape: 'Sn'
                },
                IsRegisteredWithLakeFormation: {
                  type: 'boolean'
                }
              }
            }
          },
          GetUnfilteredPartitionsMetadata: {
            input: {
              type: 'structure',
              required: ['CatalogId', 'DatabaseName', 'TableName', 'SupportedPermissionTypes'],
              members: {
                Region: {},
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                Expression: {},
                AuditContext: {
                  shape: 'Sqo'
                },
                SupportedPermissionTypes: {
                  shape: 'Sqr'
                },
                NextToken: {},
                Segment: {
                  shape: 'Sop'
                },
                MaxResults: {
                  type: 'integer'
                },
                QuerySessionContext: {
                  shape: 'Sqt'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnfilteredPartitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Partition: {
                        shape: 'Sai'
                      },
                      AuthorizedColumns: {
                        shape: 'Sn'
                      },
                      IsRegisteredWithLakeFormation: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetUnfilteredTableMetadata: {
            input: {
              type: 'structure',
              required: ['CatalogId', 'DatabaseName', 'Name', 'SupportedPermissionTypes'],
              members: {
                Region: {},
                CatalogId: {},
                DatabaseName: {},
                Name: {},
                AuditContext: {
                  shape: 'Sqo'
                },
                SupportedPermissionTypes: {
                  shape: 'Sqr'
                },
                ParentResourceArn: {},
                RootResourceArn: {},
                SupportedDialect: {
                  type: 'structure',
                  members: {
                    Dialect: {},
                    DialectVersion: {}
                  }
                },
                Permissions: {
                  shape: 'Sey'
                },
                QuerySessionContext: {
                  shape: 'Sqt'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Table: {
                  shape: 'Sq0'
                },
                AuthorizedColumns: {
                  shape: 'Sn'
                },
                IsRegisteredWithLakeFormation: {
                  type: 'boolean'
                },
                CellFilters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ColumnName: {},
                      RowFilterExpression: {}
                    }
                  }
                },
                QueryAuthorizationId: {},
                IsMultiDialectView: {
                  type: 'boolean'
                },
                ResourceArn: {},
                IsProtected: {
                  type: 'boolean'
                },
                Permissions: {
                  shape: 'Sey'
                },
                RowFilter: {}
              }
            }
          },
          GetUserDefinedFunction: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'FunctionName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                FunctionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserDefinedFunction: {
                  shape: 'Sra'
                }
              }
            }
          },
          GetUserDefinedFunctions: {
            input: {
              type: 'structure',
              required: ['Pattern'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                Pattern: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserDefinedFunctions: {
                  type: 'list',
                  member: {
                    shape: 'Sra'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetWorkflow: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                IncludeGraph: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Workflow: {
                  shape: 'Sbq'
                }
              }
            }
          },
          GetWorkflowRun: {
            input: {
              type: 'structure',
              required: ['Name', 'RunId'],
              members: {
                Name: {},
                RunId: {},
                IncludeGraph: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Run: {
                  shape: 'Sbs'
                }
              }
            }
          },
          GetWorkflowRunProperties: {
            input: {
              type: 'structure',
              required: ['Name', 'RunId'],
              members: {
                Name: {},
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RunProperties: {
                  shape: 'Sbr'
                }
              }
            }
          },
          GetWorkflowRuns: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                IncludeGraph: {
                  type: 'boolean'
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
                Runs: {
                  type: 'list',
                  member: {
                    shape: 'Sbs'
                  }
                },
                NextToken: {}
              }
            }
          },
          ImportCatalogToGlue: {
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
          ListBlueprints: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blueprints: {
                  shape: 'S24'
                },
                NextToken: {}
              }
            }
          },
          ListColumnStatisticsTaskRuns: {
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
                ColumnStatisticsTaskRunIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListCrawlers: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CrawlerNames: {
                  shape: 'S26'
                },
                NextToken: {}
              }
            }
          },
          ListCrawls: {
            input: {
              type: 'structure',
              required: ['CrawlerName'],
              members: {
                CrawlerName: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FieldName: {},
                      FilterOperator: {},
                      FieldValue: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Crawls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CrawlId: {},
                      State: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      Summary: {},
                      ErrorMessage: {},
                      LogGroup: {},
                      LogStream: {},
                      MessagePrefix: {},
                      DPUHour: {
                        type: 'double'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomEntityTypes: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomEntityTypes: {
                  shape: 'S3t'
                },
                NextToken: {}
              }
            }
          },
          ListDataQualityResults: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    DataSource: {
                      shape: 'S43'
                    },
                    JobName: {},
                    JobRunId: {},
                    StartedAfter: {
                      type: 'timestamp'
                    },
                    StartedBefore: {
                      type: 'timestamp'
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
              required: ['Results'],
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResultId: {},
                      DataSource: {
                        shape: 'S43'
                      },
                      JobName: {},
                      JobRunId: {},
                      StartedOn: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDataQualityRuleRecommendationRuns: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  required: ['DataSource'],
                  members: {
                    DataSource: {
                      shape: 'S43'
                    },
                    StartedBefore: {
                      type: 'timestamp'
                    },
                    StartedAfter: {
                      type: 'timestamp'
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
                Runs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RunId: {},
                      Status: {},
                      StartedOn: {
                        type: 'timestamp'
                      },
                      DataSource: {
                        shape: 'S43'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDataQualityRulesetEvaluationRuns: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  required: ['DataSource'],
                  members: {
                    DataSource: {
                      shape: 'S43'
                    },
                    StartedBefore: {
                      type: 'timestamp'
                    },
                    StartedAfter: {
                      type: 'timestamp'
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
                Runs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RunId: {},
                      Status: {},
                      StartedOn: {
                        type: 'timestamp'
                      },
                      DataSource: {
                        shape: 'S43'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDataQualityRulesets: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filter: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Description: {},
                    CreatedBefore: {
                      type: 'timestamp'
                    },
                    CreatedAfter: {
                      type: 'timestamp'
                    },
                    LastModifiedBefore: {
                      type: 'timestamp'
                    },
                    LastModifiedAfter: {
                      type: 'timestamp'
                    },
                    TargetTable: {
                      shape: 'Sep'
                    }
                  }
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rulesets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Description: {},
                      CreatedOn: {
                        type: 'timestamp'
                      },
                      LastModifiedOn: {
                        type: 'timestamp'
                      },
                      TargetTable: {
                        shape: 'Sep'
                      },
                      RecommendationRunId: {},
                      RuleCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDevEndpoints: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DevEndpointNames: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListJobs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobNames: {
                  shape: 'S4w'
                },
                NextToken: {}
              }
            }
          },
          ListMLTransforms: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filter: {
                  shape: 'Snv'
                },
                Sort: {
                  shape: 'Snw'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TransformIds'],
              members: {
                TransformIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListRegistries: {
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
                Registries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RegistryName: {},
                      RegistryArn: {},
                      Description: {},
                      Status: {},
                      CreatedTime: {},
                      UpdatedTime: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSchemaVersions: {
            input: {
              type: 'structure',
              required: ['SchemaId'],
              members: {
                SchemaId: {
                  shape: 'Sw'
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
                Schemas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SchemaArn: {},
                      SchemaVersionId: {},
                      VersionNumber: {
                        type: 'long'
                      },
                      Status: {},
                      CreatedTime: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSchemas: {
            input: {
              type: 'structure',
              members: {
                RegistryId: {
                  shape: 'Sfr'
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
                Schemas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RegistryName: {},
                      SchemaName: {},
                      SchemaArn: {},
                      Description: {},
                      SchemaStatus: {},
                      CreatedTime: {},
                      UpdatedTime: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSessions: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sd9'
                },
                RequestOrigin: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Ids: {
                  type: 'list',
                  member: {}
                },
                Sessions: {
                  type: 'list',
                  member: {
                    shape: 'Sgt'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStatements: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {},
                RequestOrigin: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Statements: {
                  type: 'list',
                  member: {
                    shape: 'Spt'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTableOptimizerRuns: {
            input: {
              type: 'structure',
              required: ['CatalogId', 'DatabaseName', 'TableName', 'Type'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                Type: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                NextToken: {},
                TableOptimizerRuns: {
                  type: 'list',
                  member: {
                    shape: 'Sav'
                  }
                }
              }
            }
          },
          ListTriggers: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                DependentJobName: {},
                MaxResults: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sd9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TriggerNames: {
                  shape: 'Sb3'
                },
                NextToken: {}
              }
            }
          },
          ListWorkflows: {
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
              type: 'structure',
              members: {
                Workflows: {
                  shape: 'Sbn'
                },
                NextToken: {}
              }
            }
          },
          PutDataCatalogEncryptionSettings: {
            input: {
              type: 'structure',
              required: ['DataCatalogEncryptionSettings'],
              members: {
                CatalogId: {},
                DataCatalogEncryptionSettings: {
                  shape: 'Slq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyInJson'],
              members: {
                PolicyInJson: {},
                ResourceArn: {},
                PolicyHashCondition: {},
                PolicyExistsCondition: {},
                EnableHybrid: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyHash: {}
              }
            }
          },
          PutSchemaVersionMetadata: {
            input: {
              type: 'structure',
              required: ['MetadataKeyValue'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                SchemaVersionNumber: {
                  shape: 'Spc'
                },
                SchemaVersionId: {},
                MetadataKeyValue: {
                  shape: 'Su3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArn: {},
                SchemaName: {},
                RegistryName: {},
                LatestVersion: {
                  type: 'boolean'
                },
                VersionNumber: {
                  type: 'long'
                },
                SchemaVersionId: {},
                MetadataKey: {},
                MetadataValue: {}
              }
            }
          },
          PutWorkflowRunProperties: {
            input: {
              type: 'structure',
              required: ['Name', 'RunId', 'RunProperties'],
              members: {
                Name: {},
                RunId: {},
                RunProperties: {
                  shape: 'Sbr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          QuerySchemaVersionMetadata: {
            input: {
              type: 'structure',
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                SchemaVersionNumber: {
                  shape: 'Spc'
                },
                SchemaVersionId: {},
                MetadataList: {
                  type: 'list',
                  member: {
                    shape: 'Su3'
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
                MetadataInfoMap: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      MetadataValue: {},
                      CreatedTime: {},
                      OtherMetadataValueList: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            MetadataValue: {},
                            CreatedTime: {}
                          }
                        }
                      }
                    }
                  }
                },
                SchemaVersionId: {},
                NextToken: {}
              }
            }
          },
          RegisterSchemaVersion: {
            input: {
              type: 'structure',
              required: ['SchemaId', 'SchemaDefinition'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                SchemaDefinition: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaVersionId: {},
                VersionNumber: {
                  type: 'long'
                },
                Status: {}
              }
            }
          },
          RemoveSchemaVersionMetadata: {
            input: {
              type: 'structure',
              required: ['MetadataKeyValue'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                SchemaVersionNumber: {
                  shape: 'Spc'
                },
                SchemaVersionId: {},
                MetadataKeyValue: {
                  shape: 'Su3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArn: {},
                SchemaName: {},
                RegistryName: {},
                LatestVersion: {
                  type: 'boolean'
                },
                VersionNumber: {
                  type: 'long'
                },
                SchemaVersionId: {},
                MetadataKey: {},
                MetadataValue: {}
              }
            }
          },
          ResetJobBookmark: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {},
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobBookmarkEntry: {
                  shape: 'Smr'
                }
              }
            }
          },
          ResumeWorkflowRun: {
            input: {
              type: 'structure',
              required: ['Name', 'RunId', 'NodeIds'],
              members: {
                Name: {},
                RunId: {},
                NodeIds: {
                  shape: 'Suo'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RunId: {},
                NodeIds: {
                  shape: 'Suo'
                }
              }
            }
          },
          RunStatement: {
            input: {
              type: 'structure',
              required: ['SessionId', 'Code'],
              members: {
                SessionId: {},
                Code: {},
                RequestOrigin: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {
                  type: 'integer'
                }
              }
            }
          },
          SearchTables: {
            input: {
              type: 'structure',
              members: {
                CatalogId: {},
                NextToken: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {},
                      Value: {},
                      Comparator: {}
                    }
                  }
                },
                SearchText: {},
                SortCriteria: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FieldName: {},
                      Sort: {}
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                ResourceShareType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TableList: {
                  shape: 'Sqg'
                }
              }
            }
          },
          StartBlueprintRun: {
            input: {
              type: 'structure',
              required: ['BlueprintName', 'RoleArn'],
              members: {
                BlueprintName: {},
                Parameters: {},
                RoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RunId: {}
              }
            }
          },
          StartColumnStatisticsTaskRun: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'Role'],
              members: {
                DatabaseName: {},
                TableName: {},
                ColumnNameList: {
                  shape: 'Skx'
                },
                Role: {},
                SampleSize: {
                  type: 'double'
                },
                CatalogID: {},
                SecurityConfiguration: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ColumnStatisticsTaskRunId: {}
              }
            }
          },
          StartCrawler: {
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
          StartCrawlerSchedule: {
            input: {
              type: 'structure',
              required: ['CrawlerName'],
              members: {
                CrawlerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartDataQualityRuleRecommendationRun: {
            input: {
              type: 'structure',
              required: ['DataSource', 'Role'],
              members: {
                DataSource: {
                  shape: 'S43'
                },
                Role: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                CreatedRulesetName: {},
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RunId: {}
              }
            },
            idempotent: true
          },
          StartDataQualityRulesetEvaluationRun: {
            input: {
              type: 'structure',
              required: ['DataSource', 'Role', 'RulesetNames'],
              members: {
                DataSource: {
                  shape: 'S43'
                },
                Role: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                ClientToken: {},
                AdditionalRunOptions: {
                  shape: 'Sm3'
                },
                RulesetNames: {
                  shape: 'Sm4'
                },
                AdditionalDataSources: {
                  shape: 'Sm6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RunId: {}
              }
            },
            idempotent: true
          },
          StartExportLabelsTaskRun: {
            input: {
              type: 'structure',
              required: ['TransformId', 'OutputS3Path'],
              members: {
                TransformId: {},
                OutputS3Path: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskRunId: {}
              }
            }
          },
          StartImportLabelsTaskRun: {
            input: {
              type: 'structure',
              required: ['TransformId', 'InputS3Path'],
              members: {
                TransformId: {},
                InputS3Path: {},
                ReplaceAllLabels: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskRunId: {}
              }
            }
          },
          StartJobRun: {
            input: {
              type: 'structure',
              required: ['JobName'],
              members: {
                JobName: {},
                JobRunId: {},
                Arguments: {
                  shape: 'S59'
                },
                AllocatedCapacity: {
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated, use MaxCapacity instead.',
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                MaxCapacity: {
                  type: 'double'
                },
                SecurityConfiguration: {},
                NotificationProperty: {
                  shape: 'S5e'
                },
                WorkerType: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                ExecutionClass: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobRunId: {}
              }
            }
          },
          StartMLEvaluationTaskRun: {
            input: {
              type: 'structure',
              required: ['TransformId'],
              members: {
                TransformId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskRunId: {}
              }
            }
          },
          StartMLLabelingSetGenerationTaskRun: {
            input: {
              type: 'structure',
              required: ['TransformId', 'OutputS3Path'],
              members: {
                TransformId: {},
                OutputS3Path: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskRunId: {}
              }
            }
          },
          StartTrigger: {
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
                Name: {}
              }
            }
          },
          StartWorkflowRun: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                RunProperties: {
                  shape: 'Sbr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RunId: {}
              }
            }
          },
          StopColumnStatisticsTaskRun: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                DatabaseName: {},
                TableName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopCrawler: {
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
          StopCrawlerSchedule: {
            input: {
              type: 'structure',
              required: ['CrawlerName'],
              members: {
                CrawlerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopSession: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                RequestOrigin: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {}
              }
            }
          },
          StopTrigger: {
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
                Name: {}
              }
            }
          },
          StopWorkflowRun: {
            input: {
              type: 'structure',
              required: ['Name', 'RunId'],
              members: {
                Name: {},
                RunId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagsToAdd'],
              members: {
                ResourceArn: {},
                TagsToAdd: {
                  shape: 'Sd9'
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
              required: ['ResourceArn', 'TagsToRemove'],
              members: {
                ResourceArn: {},
                TagsToRemove: {
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
          UpdateBlueprint: {
            input: {
              type: 'structure',
              required: ['Name', 'BlueprintLocation'],
              members: {
                Name: {},
                Description: {},
                BlueprintLocation: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          },
          UpdateClassifier: {
            input: {
              type: 'structure',
              members: {
                GrokClassifier: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    Classification: {},
                    GrokPattern: {},
                    CustomPatterns: {}
                  }
                },
                XMLClassifier: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    Classification: {},
                    RowTag: {}
                  }
                },
                JsonClassifier: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    JsonPath: {}
                  }
                },
                CsvClassifier: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    Delimiter: {},
                    QuoteSymbol: {},
                    ContainsHeader: {},
                    Header: {
                      shape: 'Sdq'
                    },
                    DisableValueTrimming: {
                      type: 'boolean'
                    },
                    AllowSingleColumn: {
                      type: 'boolean'
                    },
                    CustomDatatypeConfigured: {
                      type: 'boolean'
                    },
                    CustomDatatypes: {
                      shape: 'Sdr'
                    },
                    Serde: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateColumnStatisticsForPartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionValues', 'ColumnStatisticsList'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionValues: {
                  shape: 'S6'
                },
                ColumnStatisticsList: {
                  shape: 'Swh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  shape: 'Swj'
                }
              }
            }
          },
          UpdateColumnStatisticsForTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'ColumnStatisticsList'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                ColumnStatisticsList: {
                  shape: 'Swh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  shape: 'Swj'
                }
              }
            }
          },
          UpdateConnection: {
            input: {
              type: 'structure',
              required: ['Name', 'ConnectionInput'],
              members: {
                CatalogId: {},
                Name: {},
                ConnectionInput: {
                  shape: 'Sdv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateCrawler: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Role: {},
                DatabaseName: {},
                Description: {},
                Targets: {
                  shape: 'S2b'
                },
                Schedule: {},
                Classifiers: {
                  shape: 'S32'
                },
                TablePrefix: {},
                SchemaChangePolicy: {
                  shape: 'S35'
                },
                RecrawlPolicy: {
                  shape: 'S33'
                },
                LineageConfiguration: {
                  shape: 'S38'
                },
                LakeFormationConfiguration: {
                  shape: 'S3o'
                },
                Configuration: {},
                CrawlerSecurityConfiguration: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateCrawlerSchedule: {
            input: {
              type: 'structure',
              required: ['CrawlerName'],
              members: {
                CrawlerName: {},
                Schedule: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDataQualityRuleset: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                Ruleset: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Description: {},
                Ruleset: {}
              }
            }
          },
          UpdateDatabase: {
            input: {
              type: 'structure',
              required: ['Name', 'DatabaseInput'],
              members: {
                CatalogId: {},
                Name: {},
                DatabaseInput: {
                  shape: 'Ses'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDevEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointName'],
              members: {
                EndpointName: {},
                PublicKey: {},
                AddPublicKeys: {
                  shape: 'S4t'
                },
                DeletePublicKeys: {
                  shape: 'S4t'
                },
                CustomLibraries: {
                  type: 'structure',
                  members: {
                    ExtraPythonLibsS3Path: {},
                    ExtraJarsS3Path: {}
                  }
                },
                UpdateEtlLibraries: {
                  type: 'boolean'
                },
                DeleteArguments: {
                  shape: 'S4p'
                },
                AddArguments: {
                  shape: 'S4u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateJob: {
            input: {
              type: 'structure',
              required: ['JobName', 'JobUpdate'],
              members: {
                JobName: {},
                JobUpdate: {
                  type: 'structure',
                  members: {
                    JobMode: {},
                    Description: {},
                    LogUri: {},
                    Role: {},
                    ExecutionProperty: {
                      shape: 'S53'
                    },
                    Command: {
                      shape: 'S55'
                    },
                    DefaultArguments: {
                      shape: 'S59'
                    },
                    NonOverridableArguments: {
                      shape: 'S59'
                    },
                    Connections: {
                      shape: 'S5a'
                    },
                    MaxRetries: {
                      type: 'integer'
                    },
                    AllocatedCapacity: {
                      deprecated: true,
                      deprecatedMessage: 'This property is deprecated, use MaxCapacity instead.',
                      type: 'integer'
                    },
                    Timeout: {
                      type: 'integer'
                    },
                    MaxCapacity: {
                      type: 'double'
                    },
                    WorkerType: {},
                    NumberOfWorkers: {
                      type: 'integer'
                    },
                    SecurityConfiguration: {},
                    NotificationProperty: {
                      shape: 'S5e'
                    },
                    GlueVersion: {},
                    CodeGenConfigurationNodes: {
                      shape: 'S5g'
                    },
                    ExecutionClass: {},
                    SourceControlDetails: {
                      shape: 'Saa'
                    },
                    MaintenanceWindow: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobName: {}
              }
            }
          },
          UpdateJobFromSourceControl: {
            input: {
              type: 'structure',
              members: {
                JobName: {},
                Provider: {},
                RepositoryName: {},
                RepositoryOwner: {},
                BranchName: {},
                Folder: {},
                CommitId: {},
                AuthStrategy: {},
                AuthToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobName: {}
              }
            }
          },
          UpdateMLTransform: {
            input: {
              type: 'structure',
              required: ['TransformId'],
              members: {
                TransformId: {},
                Name: {},
                Description: {},
                Parameters: {
                  shape: 'Sfa'
                },
                Role: {},
                GlueVersion: {},
                MaxCapacity: {
                  type: 'double'
                },
                WorkerType: {},
                NumberOfWorkers: {
                  type: 'integer'
                },
                Timeout: {
                  type: 'integer'
                },
                MaxRetries: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransformId: {}
              }
            }
          },
          UpdatePartition: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'PartitionValueList', 'PartitionInput'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                PartitionValueList: {
                  shape: 'Sco'
                },
                PartitionInput: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRegistry: {
            input: {
              type: 'structure',
              required: ['RegistryId', 'Description'],
              members: {
                RegistryId: {
                  shape: 'Sfr'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegistryName: {},
                RegistryArn: {}
              }
            }
          },
          UpdateSchema: {
            input: {
              type: 'structure',
              required: ['SchemaId'],
              members: {
                SchemaId: {
                  shape: 'Sw'
                },
                SchemaVersionNumber: {
                  shape: 'Spc'
                },
                Compatibility: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArn: {},
                SchemaName: {},
                RegistryName: {}
              }
            }
          },
          UpdateSourceControlFromJob: {
            input: {
              type: 'structure',
              members: {
                JobName: {},
                Provider: {},
                RepositoryName: {},
                RepositoryOwner: {},
                BranchName: {},
                Folder: {},
                CommitId: {},
                AuthStrategy: {},
                AuthToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobName: {}
              }
            }
          },
          UpdateTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableInput'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableInput: {
                  shape: 'Sgy'
                },
                SkipArchive: {
                  type: 'boolean'
                },
                TransactionId: {},
                VersionId: {},
                ViewUpdateAction: {},
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
          UpdateTableOptimizer: {
            input: {
              type: 'structure',
              required: ['CatalogId', 'DatabaseName', 'TableName', 'Type', 'TableOptimizerConfiguration'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                Type: {},
                TableOptimizerConfiguration: {
                  shape: 'Sat'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateTrigger: {
            input: {
              type: 'structure',
              required: ['Name', 'TriggerUpdate'],
              members: {
                Name: {},
                TriggerUpdate: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Description: {},
                    Schedule: {},
                    Actions: {
                      shape: 'Sba'
                    },
                    Predicate: {
                      shape: 'Sbc'
                    },
                    EventBatchingCondition: {
                      shape: 'Sbj'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Trigger: {
                  shape: 'Sb6'
                }
              }
            }
          },
          UpdateUserDefinedFunction: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'FunctionName', 'FunctionInput'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                FunctionName: {},
                FunctionInput: {
                  shape: 'Shj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateWorkflow: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                DefaultRunProperties: {
                  shape: 'Sbr'
                },
                MaxConcurrentRuns: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {}
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              Values: {
                shape: 'S6'
              },
              LastAccessTime: {
                type: 'timestamp'
              },
              StorageDescriptor: {
                shape: 'S9'
              },
              Parameters: {
                shape: 'Se'
              },
              LastAnalyzedTime: {
                type: 'timestamp'
              }
            }
          },
          S6: {
            type: 'list',
            member: {}
          },
          S9: {
            type: 'structure',
            members: {
              Columns: {
                shape: 'Sa'
              },
              Location: {},
              AdditionalLocations: {
                type: 'list',
                member: {}
              },
              InputFormat: {},
              OutputFormat: {},
              Compressed: {
                type: 'boolean'
              },
              NumberOfBuckets: {
                type: 'integer'
              },
              SerdeInfo: {
                type: 'structure',
                members: {
                  Name: {},
                  SerializationLibrary: {},
                  Parameters: {
                    shape: 'Se'
                  }
                }
              },
              BucketColumns: {
                shape: 'Sn'
              },
              SortColumns: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Column', 'SortOrder'],
                  members: {
                    Column: {},
                    SortOrder: {
                      type: 'integer'
                    }
                  }
                }
              },
              Parameters: {
                shape: 'Se'
              },
              SkewedInfo: {
                type: 'structure',
                members: {
                  SkewedColumnNames: {
                    shape: 'Sn'
                  },
                  SkewedColumnValues: {
                    type: 'list',
                    member: {}
                  },
                  SkewedColumnValueLocationMaps: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                }
              },
              StoredAsSubDirectories: {
                type: 'boolean'
              },
              SchemaReference: {
                type: 'structure',
                members: {
                  SchemaId: {
                    shape: 'Sw'
                  },
                  SchemaVersionId: {},
                  SchemaVersionNumber: {
                    type: 'long'
                  }
                }
              }
            }
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Type: {},
                Comment: {},
                Parameters: {
                  shape: 'Se'
                }
              }
            }
          },
          Se: {
            type: 'map',
            key: {},
            value: {}
          },
          Sn: {
            type: 'list',
            member: {}
          },
          Sw: {
            type: 'structure',
            members: {
              SchemaArn: {},
              SchemaName: {},
              RegistryName: {}
            }
          },
          S12: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PartitionValues: {
                  shape: 'S6'
                },
                ErrorDetail: {
                  shape: 'S14'
                }
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              ErrorCode: {},
              ErrorMessage: {}
            }
          },
          S1c: {
            type: 'structure',
            required: ['Values'],
            members: {
              Values: {
                shape: 'S6'
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              CreatedOn: {
                type: 'timestamp'
              },
              LastModifiedOn: {
                type: 'timestamp'
              },
              ParameterSpec: {},
              BlueprintLocation: {},
              BlueprintServiceLocation: {},
              Status: {},
              ErrorMessage: {},
              LastActiveDefinition: {
                type: 'structure',
                members: {
                  Description: {},
                  LastModifiedOn: {
                    type: 'timestamp'
                  },
                  ParameterSpec: {},
                  BlueprintLocation: {},
                  BlueprintServiceLocation: {}
                }
              }
            }
          },
          S24: {
            type: 'list',
            member: {}
          },
          S26: {
            type: 'list',
            member: {}
          },
          S28: {
            type: 'list',
            member: {
              shape: 'S29'
            }
          },
          S29: {
            type: 'structure',
            members: {
              Name: {},
              Role: {},
              Targets: {
                shape: 'S2b'
              },
              DatabaseName: {},
              Description: {},
              Classifiers: {
                shape: 'S32'
              },
              RecrawlPolicy: {
                shape: 'S33'
              },
              SchemaChangePolicy: {
                shape: 'S35'
              },
              LineageConfiguration: {
                shape: 'S38'
              },
              State: {},
              TablePrefix: {},
              Schedule: {
                type: 'structure',
                members: {
                  ScheduleExpression: {},
                  State: {}
                }
              },
              CrawlElapsedTime: {
                type: 'long'
              },
              CreationTime: {
                type: 'timestamp'
              },
              LastUpdated: {
                type: 'timestamp'
              },
              LastCrawl: {
                type: 'structure',
                members: {
                  Status: {},
                  ErrorMessage: {},
                  LogGroup: {},
                  LogStream: {},
                  MessagePrefix: {},
                  StartTime: {
                    type: 'timestamp'
                  }
                }
              },
              Version: {
                type: 'long'
              },
              Configuration: {},
              CrawlerSecurityConfiguration: {},
              LakeFormationConfiguration: {
                shape: 'S3o'
              }
            }
          },
          S2b: {
            type: 'structure',
            members: {
              S3Targets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Path: {},
                    Exclusions: {
                      shape: 'S2f'
                    },
                    ConnectionName: {},
                    SampleSize: {
                      type: 'integer'
                    },
                    EventQueueArn: {},
                    DlqEventQueueArn: {}
                  }
                }
              },
              JdbcTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ConnectionName: {},
                    Path: {},
                    Exclusions: {
                      shape: 'S2f'
                    },
                    EnableAdditionalMetadata: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              MongoDBTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ConnectionName: {},
                    Path: {},
                    ScanAll: {
                      type: 'boolean'
                    }
                  }
                }
              },
              DynamoDBTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Path: {},
                    scanAll: {
                      type: 'boolean'
                    },
                    scanRate: {
                      type: 'double'
                    }
                  }
                }
              },
              CatalogTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DatabaseName', 'Tables'],
                  members: {
                    DatabaseName: {},
                    Tables: {
                      type: 'list',
                      member: {}
                    },
                    ConnectionName: {},
                    EventQueueArn: {},
                    DlqEventQueueArn: {}
                  }
                }
              },
              DeltaTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    DeltaTables: {
                      shape: 'S2f'
                    },
                    ConnectionName: {},
                    WriteManifest: {
                      type: 'boolean'
                    },
                    CreateNativeDeltaTable: {
                      type: 'boolean'
                    }
                  }
                }
              },
              IcebergTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Paths: {
                      shape: 'S2f'
                    },
                    ConnectionName: {},
                    Exclusions: {
                      shape: 'S2f'
                    },
                    MaximumTraversalDepth: {
                      type: 'integer'
                    }
                  }
                }
              },
              HudiTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Paths: {
                      shape: 'S2f'
                    },
                    ConnectionName: {},
                    Exclusions: {
                      shape: 'S2f'
                    },
                    MaximumTraversalDepth: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          S2f: {
            type: 'list',
            member: {}
          },
          S32: {
            type: 'list',
            member: {}
          },
          S33: {
            type: 'structure',
            members: {
              RecrawlBehavior: {}
            }
          },
          S35: {
            type: 'structure',
            members: {
              UpdateBehavior: {},
              DeleteBehavior: {}
            }
          },
          S38: {
            type: 'structure',
            members: {
              CrawlerLineageSettings: {}
            }
          },
          S3o: {
            type: 'structure',
            members: {
              UseLakeFormationCredentials: {
                type: 'boolean'
              },
              AccountId: {}
            }
          },
          S3r: {
            type: 'list',
            member: {}
          },
          S3t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'RegexString'],
              members: {
                Name: {},
                RegexString: {},
                ContextWords: {
                  shape: 'S3v'
                }
              }
            }
          },
          S3v: {
            type: 'list',
            member: {}
          },
          S3x: {
            type: 'list',
            member: {}
          },
          S43: {
            type: 'structure',
            required: ['GlueTable'],
            members: {
              GlueTable: {
                shape: 'S44'
              }
            }
          },
          S44: {
            type: 'structure',
            required: ['DatabaseName', 'TableName'],
            members: {
              DatabaseName: {},
              TableName: {},
              CatalogId: {},
              ConnectionName: {},
              AdditionalOptions: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S46: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Description: {},
                EvaluationMessage: {},
                Result: {},
                EvaluatedMetrics: {
                  shape: 'S4a'
                }
              }
            }
          },
          S4a: {
            type: 'map',
            key: {},
            value: {
              type: 'double'
            }
          },
          S4b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Description: {},
                EvaluationMessage: {},
                EvaluatedMetrics: {
                  shape: 'S4a'
                }
              }
            }
          },
          S4d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Description: {},
                MetricBasedObservation: {
                  type: 'structure',
                  members: {
                    MetricName: {},
                    MetricValues: {
                      type: 'structure',
                      members: {
                        ActualValue: {
                          type: 'double'
                        },
                        ExpectedValue: {
                          type: 'double'
                        },
                        LowerLimit: {
                          type: 'double'
                        },
                        UpperLimit: {
                          type: 'double'
                        }
                      }
                    },
                    NewRules: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          S4k: {
            type: 'list',
            member: {}
          },
          S4m: {
            type: 'list',
            member: {
              shape: 'S4n'
            }
          },
          S4n: {
            type: 'structure',
            members: {
              EndpointName: {},
              RoleArn: {},
              SecurityGroupIds: {
                shape: 'S4p'
              },
              SubnetId: {},
              YarnEndpointAddress: {},
              PrivateAddress: {},
              ZeppelinRemoteSparkInterpreterPort: {
                type: 'integer'
              },
              PublicAddress: {},
              Status: {},
              WorkerType: {},
              GlueVersion: {},
              NumberOfWorkers: {
                type: 'integer'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              AvailabilityZone: {},
              VpcId: {},
              ExtraPythonLibsS3Path: {},
              ExtraJarsS3Path: {},
              FailureReason: {},
              LastUpdateStatus: {},
              CreatedTimestamp: {
                type: 'timestamp'
              },
              LastModifiedTimestamp: {
                type: 'timestamp'
              },
              PublicKey: {},
              PublicKeys: {
                shape: 'S4t'
              },
              SecurityConfiguration: {},
              Arguments: {
                shape: 'S4u'
              }
            }
          },
          S4p: {
            type: 'list',
            member: {}
          },
          S4t: {
            type: 'list',
            member: {}
          },
          S4u: {
            type: 'map',
            key: {},
            value: {}
          },
          S4w: {
            type: 'list',
            member: {}
          },
          S4y: {
            type: 'list',
            member: {
              shape: 'S4z'
            }
          },
          S4z: {
            type: 'structure',
            members: {
              Name: {},
              JobMode: {},
              Description: {},
              LogUri: {},
              Role: {},
              CreatedOn: {
                type: 'timestamp'
              },
              LastModifiedOn: {
                type: 'timestamp'
              },
              ExecutionProperty: {
                shape: 'S53'
              },
              Command: {
                shape: 'S55'
              },
              DefaultArguments: {
                shape: 'S59'
              },
              NonOverridableArguments: {
                shape: 'S59'
              },
              Connections: {
                shape: 'S5a'
              },
              MaxRetries: {
                type: 'integer'
              },
              AllocatedCapacity: {
                deprecated: true,
                deprecatedMessage: 'This property is deprecated, use MaxCapacity instead.',
                type: 'integer'
              },
              Timeout: {
                type: 'integer'
              },
              MaxCapacity: {
                type: 'double'
              },
              WorkerType: {},
              NumberOfWorkers: {
                type: 'integer'
              },
              SecurityConfiguration: {},
              NotificationProperty: {
                shape: 'S5e'
              },
              GlueVersion: {},
              CodeGenConfigurationNodes: {
                shape: 'S5g'
              },
              ExecutionClass: {},
              SourceControlDetails: {
                shape: 'Saa'
              },
              MaintenanceWindow: {}
            }
          },
          S53: {
            type: 'structure',
            members: {
              MaxConcurrentRuns: {
                type: 'integer'
              }
            }
          },
          S55: {
            type: 'structure',
            members: {
              Name: {},
              ScriptLocation: {},
              PythonVersion: {},
              Runtime: {}
            }
          },
          S59: {
            type: 'map',
            key: {},
            value: {}
          },
          S5a: {
            type: 'structure',
            members: {
              Connections: {
                shape: 'S5b'
              }
            }
          },
          S5b: {
            type: 'list',
            member: {}
          },
          S5e: {
            type: 'structure',
            members: {
              NotifyDelayAfter: {
                type: 'integer'
              }
            }
          },
          S5g: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                AthenaConnectorSource: {
                  type: 'structure',
                  required: ['Name', 'ConnectionName', 'ConnectorName', 'ConnectionType', 'SchemaName'],
                  members: {
                    Name: {},
                    ConnectionName: {},
                    ConnectorName: {},
                    ConnectionType: {},
                    ConnectionTable: {},
                    SchemaName: {},
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                JDBCConnectorSource: {
                  type: 'structure',
                  required: ['Name', 'ConnectionName', 'ConnectorName', 'ConnectionType'],
                  members: {
                    Name: {},
                    ConnectionName: {},
                    ConnectorName: {},
                    ConnectionType: {},
                    AdditionalOptions: {
                      type: 'structure',
                      members: {
                        FilterPredicate: {},
                        PartitionColumn: {},
                        LowerBound: {
                          type: 'long'
                        },
                        UpperBound: {
                          type: 'long'
                        },
                        NumPartitions: {
                          type: 'long'
                        },
                        JobBookmarkKeys: {
                          shape: 'S5v'
                        },
                        JobBookmarkKeysSortOrder: {},
                        DataTypeMapping: {
                          type: 'map',
                          key: {},
                          value: {}
                        }
                      }
                    },
                    ConnectionTable: {},
                    Query: {},
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                SparkConnectorSource: {
                  type: 'structure',
                  required: ['Name', 'ConnectionName', 'ConnectorName', 'ConnectionType'],
                  members: {
                    Name: {},
                    ConnectionName: {},
                    ConnectorName: {},
                    ConnectionType: {},
                    AdditionalOptions: {
                      shape: 'S61'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                CatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {}
                  }
                },
                RedshiftSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {},
                    RedshiftTmpDir: {},
                    TmpDirIAMRole: {}
                  }
                },
                S3CatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {},
                    PartitionPredicate: {},
                    AdditionalOptions: {
                      shape: 'S65'
                    }
                  }
                },
                S3CsvSource: {
                  type: 'structure',
                  required: ['Name', 'Paths', 'Separator', 'QuoteChar'],
                  members: {
                    Name: {},
                    Paths: {
                      shape: 'S5v'
                    },
                    CompressionType: {},
                    Exclusions: {
                      shape: 'S5v'
                    },
                    GroupSize: {},
                    GroupFiles: {},
                    Recurse: {
                      type: 'boolean'
                    },
                    MaxBand: {
                      type: 'integer'
                    },
                    MaxFilesInBand: {
                      type: 'integer'
                    },
                    AdditionalOptions: {
                      shape: 'S6b'
                    },
                    Separator: {},
                    Escaper: {},
                    QuoteChar: {},
                    Multiline: {
                      type: 'boolean'
                    },
                    WithHeader: {
                      type: 'boolean'
                    },
                    WriteHeader: {
                      type: 'boolean'
                    },
                    SkipFirst: {
                      type: 'boolean'
                    },
                    OptimizePerformance: {
                      type: 'boolean'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                S3JsonSource: {
                  type: 'structure',
                  required: ['Name', 'Paths'],
                  members: {
                    Name: {},
                    Paths: {
                      shape: 'S5v'
                    },
                    CompressionType: {},
                    Exclusions: {
                      shape: 'S5v'
                    },
                    GroupSize: {},
                    GroupFiles: {},
                    Recurse: {
                      type: 'boolean'
                    },
                    MaxBand: {
                      type: 'integer'
                    },
                    MaxFilesInBand: {
                      type: 'integer'
                    },
                    AdditionalOptions: {
                      shape: 'S6b'
                    },
                    JsonPath: {},
                    Multiline: {
                      type: 'boolean'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                S3ParquetSource: {
                  type: 'structure',
                  required: ['Name', 'Paths'],
                  members: {
                    Name: {},
                    Paths: {
                      shape: 'S5v'
                    },
                    CompressionType: {},
                    Exclusions: {
                      shape: 'S5v'
                    },
                    GroupSize: {},
                    GroupFiles: {},
                    Recurse: {
                      type: 'boolean'
                    },
                    MaxBand: {
                      type: 'integer'
                    },
                    MaxFilesInBand: {
                      type: 'integer'
                    },
                    AdditionalOptions: {
                      shape: 'S6b'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                RelationalCatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {}
                  }
                },
                DynamoDBCatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {}
                  }
                },
                JDBCConnectorTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'ConnectionName', 'ConnectionTable', 'ConnectorName', 'ConnectionType'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    ConnectionName: {},
                    ConnectionTable: {},
                    ConnectorName: {},
                    ConnectionType: {},
                    AdditionalOptions: {
                      shape: 'S61'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                SparkConnectorTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'ConnectionName', 'ConnectorName', 'ConnectionType'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    ConnectionName: {},
                    ConnectorName: {},
                    ConnectionType: {},
                    AdditionalOptions: {
                      shape: 'S61'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                CatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Database: {},
                    Table: {}
                  }
                },
                RedshiftTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Database: {},
                    Table: {},
                    RedshiftTmpDir: {},
                    TmpDirIAMRole: {},
                    UpsertRedshiftOptions: {
                      type: 'structure',
                      members: {
                        TableLocation: {},
                        ConnectionName: {},
                        UpsertKeys: {
                          type: 'list',
                          member: {}
                        }
                      }
                    }
                  }
                },
                S3CatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Table', 'Database'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    PartitionKeys: {
                      shape: 'S6s'
                    },
                    Table: {},
                    Database: {},
                    SchemaChangePolicy: {
                      shape: 'S6t'
                    }
                  }
                },
                S3GlueParquetTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Path'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    PartitionKeys: {
                      shape: 'S6s'
                    },
                    Path: {},
                    Compression: {},
                    SchemaChangePolicy: {
                      shape: 'S6w'
                    }
                  }
                },
                S3DirectTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Path', 'Format'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    PartitionKeys: {
                      shape: 'S6s'
                    },
                    Path: {},
                    Compression: {},
                    Format: {},
                    SchemaChangePolicy: {
                      shape: 'S6w'
                    }
                  }
                },
                ApplyMapping: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Mapping'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Mapping: {
                      shape: 'S70'
                    }
                  }
                },
                SelectFields: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Paths'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Paths: {
                      shape: 'S6s'
                    }
                  }
                },
                DropFields: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Paths'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Paths: {
                      shape: 'S6s'
                    }
                  }
                },
                RenameField: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'SourcePath', 'TargetPath'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    SourcePath: {
                      shape: 'S5v'
                    },
                    TargetPath: {
                      shape: 'S5v'
                    }
                  }
                },
                Spigot: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Path'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Path: {},
                    Topk: {
                      type: 'integer'
                    },
                    Prob: {
                      type: 'double'
                    }
                  }
                },
                Join: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'JoinType', 'Columns'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S79'
                    },
                    JoinType: {},
                    Columns: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['From', 'Keys'],
                        members: {
                          From: {},
                          Keys: {
                            shape: 'S6s'
                          }
                        }
                      }
                    }
                  }
                },
                SplitFields: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Paths'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Paths: {
                      shape: 'S6s'
                    }
                  }
                },
                SelectFromCollection: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Index'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Index: {
                      type: 'integer'
                    }
                  }
                },
                FillMissingValues: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'ImputedPath'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    ImputedPath: {},
                    FilledPath: {}
                  }
                },
                Filter: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'LogicalOperator', 'Filters'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    LogicalOperator: {},
                    Filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Operation', 'Values'],
                        members: {
                          Operation: {},
                          Negated: {
                            type: 'boolean'
                          },
                          Values: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['Type', 'Value'],
                              members: {
                                Type: {},
                                Value: {
                                  shape: 'S5v'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                CustomCode: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Code', 'ClassName'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S7q'
                    },
                    Code: {},
                    ClassName: {},
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                SparkSQL: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'SqlQuery', 'SqlAliases'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S7q'
                    },
                    SqlQuery: {},
                    SqlAliases: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['From', 'Alias'],
                        members: {
                          From: {},
                          Alias: {}
                        }
                      }
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                DirectKinesisSource: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    WindowSize: {
                      type: 'integer'
                    },
                    DetectSchema: {
                      type: 'boolean'
                    },
                    StreamingOptions: {
                      shape: 'S7x'
                    },
                    DataPreviewOptions: {
                      shape: 'S80'
                    }
                  }
                },
                DirectKafkaSource: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    StreamingOptions: {
                      shape: 'S84'
                    },
                    WindowSize: {
                      type: 'integer'
                    },
                    DetectSchema: {
                      type: 'boolean'
                    },
                    DataPreviewOptions: {
                      shape: 'S80'
                    }
                  }
                },
                CatalogKinesisSource: {
                  type: 'structure',
                  required: ['Name', 'Table', 'Database'],
                  members: {
                    Name: {},
                    WindowSize: {
                      type: 'integer'
                    },
                    DetectSchema: {
                      type: 'boolean'
                    },
                    Table: {},
                    Database: {},
                    StreamingOptions: {
                      shape: 'S7x'
                    },
                    DataPreviewOptions: {
                      shape: 'S80'
                    }
                  }
                },
                CatalogKafkaSource: {
                  type: 'structure',
                  required: ['Name', 'Table', 'Database'],
                  members: {
                    Name: {},
                    WindowSize: {
                      type: 'integer'
                    },
                    DetectSchema: {
                      type: 'boolean'
                    },
                    Table: {},
                    Database: {},
                    StreamingOptions: {
                      shape: 'S84'
                    },
                    DataPreviewOptions: {
                      shape: 'S80'
                    }
                  }
                },
                DropNullFields: {
                  type: 'structure',
                  required: ['Name', 'Inputs'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    NullCheckBoxList: {
                      type: 'structure',
                      members: {
                        IsEmpty: {
                          type: 'boolean'
                        },
                        IsNullString: {
                          type: 'boolean'
                        },
                        IsNegOne: {
                          type: 'boolean'
                        }
                      }
                    },
                    NullTextList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Value', 'Datatype'],
                        members: {
                          Value: {},
                          Datatype: {
                            type: 'structure',
                            required: ['Id', 'Label'],
                            members: {
                              Id: {},
                              Label: {}
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Merge: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Source', 'PrimaryKeys'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S79'
                    },
                    Source: {},
                    PrimaryKeys: {
                      shape: 'S6s'
                    }
                  }
                },
                Union: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'UnionType'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S79'
                    },
                    UnionType: {}
                  }
                },
                PIIDetection: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'PiiType', 'EntityTypesToDetect'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    PiiType: {},
                    EntityTypesToDetect: {
                      shape: 'S5v'
                    },
                    OutputColumnName: {},
                    SampleFraction: {
                      type: 'double'
                    },
                    ThresholdFraction: {
                      type: 'double'
                    },
                    MaskValue: {}
                  }
                },
                Aggregate: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Groups', 'Aggs'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Groups: {
                      shape: 'S6s'
                    },
                    Aggs: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Column', 'AggFunc'],
                        members: {
                          Column: {
                            shape: 'S5v'
                          },
                          AggFunc: {}
                        }
                      }
                    }
                  }
                },
                DropDuplicates: {
                  type: 'structure',
                  required: ['Name', 'Inputs'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Columns: {
                      type: 'list',
                      member: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                GovernedCatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Table', 'Database'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    PartitionKeys: {
                      shape: 'S6s'
                    },
                    Table: {},
                    Database: {},
                    SchemaChangePolicy: {
                      shape: 'S6t'
                    }
                  }
                },
                GovernedCatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {},
                    PartitionPredicate: {},
                    AdditionalOptions: {
                      shape: 'S65'
                    }
                  }
                },
                MicrosoftSQLServerCatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {}
                  }
                },
                MySQLCatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {}
                  }
                },
                OracleSQLCatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {}
                  }
                },
                PostgreSQLCatalogSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {}
                  }
                },
                MicrosoftSQLServerCatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Database: {},
                    Table: {}
                  }
                },
                MySQLCatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Database: {},
                    Table: {}
                  }
                },
                OracleSQLCatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Database: {},
                    Table: {}
                  }
                },
                PostgreSQLCatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Database: {},
                    Table: {}
                  }
                },
                DynamicTransform: {
                  type: 'structure',
                  required: ['Name', 'TransformName', 'Inputs', 'FunctionName', 'Path'],
                  members: {
                    Name: {},
                    TransformName: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Parameters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Name', 'Type'],
                        members: {
                          Name: {},
                          Type: {},
                          ValidationRule: {},
                          ValidationMessage: {},
                          Value: {
                            shape: 'S5v'
                          },
                          ListType: {},
                          IsOptional: {
                            type: 'boolean'
                          }
                        }
                      }
                    },
                    FunctionName: {},
                    Path: {},
                    Version: {},
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                EvaluateDataQuality: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Ruleset'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Ruleset: {},
                    Output: {},
                    PublishingOptions: {
                      shape: 'S98'
                    },
                    StopJobOnFailureOptions: {
                      shape: 'S99'
                    }
                  }
                },
                S3CatalogHudiSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {},
                    AdditionalHudiOptions: {
                      shape: 'S61'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                CatalogHudiSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {},
                    AdditionalHudiOptions: {
                      shape: 'S61'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                S3HudiSource: {
                  type: 'structure',
                  required: ['Name', 'Paths'],
                  members: {
                    Name: {},
                    Paths: {
                      shape: 'S5v'
                    },
                    AdditionalHudiOptions: {
                      shape: 'S61'
                    },
                    AdditionalOptions: {
                      shape: 'S6b'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                S3HudiCatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Table', 'Database', 'AdditionalOptions'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    PartitionKeys: {
                      shape: 'S6s'
                    },
                    Table: {},
                    Database: {},
                    AdditionalOptions: {
                      shape: 'S61'
                    },
                    SchemaChangePolicy: {
                      shape: 'S6t'
                    }
                  }
                },
                S3HudiDirectTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Path', 'Compression', 'Format', 'AdditionalOptions'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    Path: {},
                    Compression: {},
                    PartitionKeys: {
                      shape: 'S6s'
                    },
                    Format: {},
                    AdditionalOptions: {
                      shape: 'S61'
                    },
                    SchemaChangePolicy: {
                      shape: 'S6w'
                    }
                  }
                },
                DirectJDBCSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table', 'ConnectionName', 'ConnectionType'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {},
                    ConnectionName: {},
                    ConnectionType: {},
                    RedshiftTmpDir: {}
                  }
                },
                S3CatalogDeltaSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {},
                    AdditionalDeltaOptions: {
                      shape: 'S61'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                CatalogDeltaSource: {
                  type: 'structure',
                  required: ['Name', 'Database', 'Table'],
                  members: {
                    Name: {},
                    Database: {},
                    Table: {},
                    AdditionalDeltaOptions: {
                      shape: 'S61'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                S3DeltaSource: {
                  type: 'structure',
                  required: ['Name', 'Paths'],
                  members: {
                    Name: {},
                    Paths: {
                      shape: 'S5v'
                    },
                    AdditionalDeltaOptions: {
                      shape: 'S61'
                    },
                    AdditionalOptions: {
                      shape: 'S6b'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                S3DeltaCatalogTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Table', 'Database'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    PartitionKeys: {
                      shape: 'S6s'
                    },
                    Table: {},
                    Database: {},
                    AdditionalOptions: {
                      shape: 'S61'
                    },
                    SchemaChangePolicy: {
                      shape: 'S6t'
                    }
                  }
                },
                S3DeltaDirectTarget: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Path', 'Compression', 'Format'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    PartitionKeys: {
                      shape: 'S6s'
                    },
                    Path: {},
                    Compression: {},
                    Format: {},
                    AdditionalOptions: {
                      shape: 'S61'
                    },
                    SchemaChangePolicy: {
                      shape: 'S6w'
                    }
                  }
                },
                AmazonRedshiftSource: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Data: {
                      shape: 'S9q'
                    }
                  }
                },
                AmazonRedshiftTarget: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Data: {
                      shape: 'S9q'
                    },
                    Inputs: {
                      shape: 'S6l'
                    }
                  }
                },
                EvaluateDataQualityMultiFrame: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'Ruleset'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S7q'
                    },
                    AdditionalDataSources: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    Ruleset: {},
                    PublishingOptions: {
                      shape: 'S98'
                    },
                    AdditionalOptions: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    StopJobOnFailureOptions: {
                      shape: 'S99'
                    }
                  }
                },
                Recipe: {
                  type: 'structure',
                  required: ['Name', 'Inputs', 'RecipeReference'],
                  members: {
                    Name: {},
                    Inputs: {
                      shape: 'S6l'
                    },
                    RecipeReference: {
                      type: 'structure',
                      required: ['RecipeArn', 'RecipeVersion'],
                      members: {
                        RecipeArn: {},
                        RecipeVersion: {}
                      }
                    }
                  }
                },
                SnowflakeSource: {
                  type: 'structure',
                  required: ['Name', 'Data'],
                  members: {
                    Name: {},
                    Data: {
                      shape: 'Sa4'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                SnowflakeTarget: {
                  type: 'structure',
                  required: ['Name', 'Data'],
                  members: {
                    Name: {},
                    Data: {
                      shape: 'Sa4'
                    },
                    Inputs: {
                      shape: 'S6l'
                    }
                  }
                },
                ConnectorDataSource: {
                  type: 'structure',
                  required: ['Name', 'ConnectionType', 'Data'],
                  members: {
                    Name: {},
                    ConnectionType: {},
                    Data: {
                      shape: 'Sa7'
                    },
                    OutputSchemas: {
                      shape: 'S5n'
                    }
                  }
                },
                ConnectorDataTarget: {
                  type: 'structure',
                  required: ['Name', 'ConnectionType', 'Data'],
                  members: {
                    Name: {},
                    ConnectionType: {},
                    Data: {
                      shape: 'Sa7'
                    },
                    Inputs: {
                      shape: 'S6l'
                    }
                  }
                }
              }
            },
            sensitive: true
          },
          S5n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Columns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name'],
                    members: {
                      Name: {},
                      Type: {}
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
          S61: {
            type: 'map',
            key: {},
            value: {}
          },
          S65: {
            type: 'structure',
            members: {
              BoundedSize: {
                type: 'long'
              },
              BoundedFiles: {
                type: 'long'
              }
            }
          },
          S6b: {
            type: 'structure',
            members: {
              BoundedSize: {
                type: 'long'
              },
              BoundedFiles: {
                type: 'long'
              },
              EnableSamplePath: {
                type: 'boolean'
              },
              SamplePath: {}
            }
          },
          S6l: {
            type: 'list',
            member: {}
          },
          S6s: {
            type: 'list',
            member: {
              shape: 'S5v'
            }
          },
          S6t: {
            type: 'structure',
            members: {
              EnableUpdateCatalog: {
                type: 'boolean'
              },
              UpdateBehavior: {}
            }
          },
          S6w: {
            type: 'structure',
            members: {
              EnableUpdateCatalog: {
                type: 'boolean'
              },
              UpdateBehavior: {},
              Table: {},
              Database: {}
            }
          },
          S70: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ToKey: {},
                FromPath: {
                  shape: 'S5v'
                },
                FromType: {},
                ToType: {},
                Dropped: {
                  type: 'boolean'
                },
                Children: {
                  shape: 'S70'
                }
              }
            }
          },
          S79: {
            type: 'list',
            member: {}
          },
          S7q: {
            type: 'list',
            member: {}
          },
          S7x: {
            type: 'structure',
            members: {
              EndpointUrl: {},
              StreamName: {},
              Classification: {},
              Delimiter: {},
              StartingPosition: {},
              MaxFetchTimeInMs: {
                type: 'long'
              },
              MaxFetchRecordsPerShard: {
                type: 'long'
              },
              MaxRecordPerRead: {
                type: 'long'
              },
              AddIdleTimeBetweenReads: {
                type: 'boolean'
              },
              IdleTimeBetweenReadsInMs: {
                type: 'long'
              },
              DescribeShardInterval: {
                type: 'long'
              },
              NumRetries: {
                type: 'integer'
              },
              RetryIntervalMs: {
                type: 'long'
              },
              MaxRetryIntervalMs: {
                type: 'long'
              },
              AvoidEmptyBatches: {
                type: 'boolean'
              },
              StreamArn: {},
              RoleArn: {},
              RoleSessionName: {},
              AddRecordTimestamp: {},
              EmitConsumerLagMetrics: {},
              StartingTimestamp: {
                shape: 'S7z'
              }
            }
          },
          S7z: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S80: {
            type: 'structure',
            members: {
              PollingTime: {
                type: 'long'
              },
              RecordPollingLimit: {
                type: 'long'
              }
            }
          },
          S84: {
            type: 'structure',
            members: {
              BootstrapServers: {},
              SecurityProtocol: {},
              ConnectionName: {},
              TopicName: {},
              Assign: {},
              SubscribePattern: {},
              Classification: {},
              Delimiter: {},
              StartingOffsets: {},
              EndingOffsets: {},
              PollTimeoutMs: {
                type: 'long'
              },
              NumRetries: {
                type: 'integer'
              },
              RetryIntervalMs: {
                type: 'long'
              },
              MaxOffsetsPerTrigger: {
                type: 'long'
              },
              MinPartitions: {
                type: 'integer'
              },
              IncludeHeaders: {
                type: 'boolean'
              },
              AddRecordTimestamp: {},
              EmitConsumerLagMetrics: {},
              StartingTimestamp: {
                shape: 'S7z'
              }
            }
          },
          S98: {
            type: 'structure',
            members: {
              EvaluationContext: {},
              ResultsS3Prefix: {},
              CloudWatchMetricsEnabled: {
                type: 'boolean'
              },
              ResultsPublishingEnabled: {
                type: 'boolean'
              }
            }
          },
          S99: {
            type: 'structure',
            members: {
              StopJobOnFailureTiming: {}
            }
          },
          S9q: {
            type: 'structure',
            members: {
              AccessType: {},
              SourceType: {},
              Connection: {
                shape: 'S9r'
              },
              Schema: {
                shape: 'S9r'
              },
              Table: {
                shape: 'S9r'
              },
              CatalogDatabase: {
                shape: 'S9r'
              },
              CatalogTable: {
                shape: 'S9r'
              },
              CatalogRedshiftSchema: {},
              CatalogRedshiftTable: {},
              TempDir: {},
              IamRole: {
                shape: 'S9r'
              },
              AdvancedOptions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Value: {}
                  }
                }
              },
              SampleQuery: {},
              PreAction: {},
              PostAction: {},
              Action: {},
              TablePrefix: {},
              Upsert: {
                type: 'boolean'
              },
              MergeAction: {},
              MergeWhenMatched: {},
              MergeWhenNotMatched: {},
              MergeClause: {},
              CrawlerConnection: {},
              TableSchema: {
                shape: 'S9u'
              },
              StagingTable: {},
              SelectedColumns: {
                shape: 'S9u'
              }
            }
          },
          S9r: {
            type: 'structure',
            members: {
              Value: {},
              Label: {},
              Description: {}
            }
          },
          S9u: {
            type: 'list',
            member: {
              shape: 'S9r'
            }
          },
          Sa4: {
            type: 'structure',
            members: {
              SourceType: {},
              Connection: {
                shape: 'S9r'
              },
              Schema: {},
              Table: {},
              Database: {},
              TempDir: {},
              IamRole: {
                shape: 'S9r'
              },
              AdditionalOptions: {
                shape: 'S61'
              },
              SampleQuery: {},
              PreAction: {},
              PostAction: {},
              Action: {},
              Upsert: {
                type: 'boolean'
              },
              MergeAction: {},
              MergeWhenMatched: {},
              MergeWhenNotMatched: {},
              MergeClause: {},
              StagingTable: {},
              SelectedColumns: {
                shape: 'S9u'
              },
              AutoPushdown: {
                type: 'boolean'
              },
              TableSchema: {
                shape: 'S9u'
              }
            }
          },
          Sa7: {
            type: 'map',
            key: {},
            value: {}
          },
          Saa: {
            type: 'structure',
            members: {
              Provider: {},
              Repository: {},
              Owner: {},
              Branch: {},
              Folder: {},
              LastCommitId: {},
              AuthStrategy: {},
              AuthToken: {}
            }
          },
          Saf: {
            type: 'list',
            member: {
              shape: 'S1c'
            }
          },
          Sah: {
            type: 'list',
            member: {
              shape: 'Sai'
            }
          },
          Sai: {
            type: 'structure',
            members: {
              Values: {
                shape: 'S6'
              },
              DatabaseName: {},
              TableName: {},
              CreationTime: {
                type: 'timestamp'
              },
              LastAccessTime: {
                type: 'timestamp'
              },
              StorageDescriptor: {
                shape: 'S9'
              },
              Parameters: {
                shape: 'Se'
              },
              LastAnalyzedTime: {
                type: 'timestamp'
              },
              CatalogId: {}
            }
          },
          Sas: {
            type: 'structure',
            members: {
              type: {},
              configuration: {
                shape: 'Sat'
              },
              lastRun: {
                shape: 'Sav'
              }
            }
          },
          Sat: {
            type: 'structure',
            members: {
              roleArn: {},
              enabled: {
                type: 'boolean'
              }
            }
          },
          Sav: {
            type: 'structure',
            members: {
              eventType: {},
              startTimestamp: {
                type: 'timestamp'
              },
              endTimestamp: {
                type: 'timestamp'
              },
              metrics: {
                type: 'structure',
                members: {
                  NumberOfBytesCompacted: {},
                  NumberOfFilesCompacted: {},
                  NumberOfDpus: {},
                  JobDurationInHour: {}
                }
              },
              error: {}
            }
          },
          Sb3: {
            type: 'list',
            member: {}
          },
          Sb5: {
            type: 'list',
            member: {
              shape: 'Sb6'
            }
          },
          Sb6: {
            type: 'structure',
            members: {
              Name: {},
              WorkflowName: {},
              Id: {},
              Type: {},
              State: {},
              Description: {},
              Schedule: {},
              Actions: {
                shape: 'Sba'
              },
              Predicate: {
                shape: 'Sbc'
              },
              EventBatchingCondition: {
                shape: 'Sbj'
              }
            }
          },
          Sba: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                JobName: {},
                Arguments: {
                  shape: 'S59'
                },
                Timeout: {
                  type: 'integer'
                },
                SecurityConfiguration: {},
                NotificationProperty: {
                  shape: 'S5e'
                },
                CrawlerName: {}
              }
            }
          },
          Sbc: {
            type: 'structure',
            members: {
              Logical: {},
              Conditions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    LogicalOperator: {},
                    JobName: {},
                    State: {},
                    CrawlerName: {},
                    CrawlState: {}
                  }
                }
              }
            }
          },
          Sbj: {
            type: 'structure',
            required: ['BatchSize'],
            members: {
              BatchSize: {
                type: 'integer'
              },
              BatchWindow: {
                type: 'integer'
              }
            }
          },
          Sbn: {
            type: 'list',
            member: {}
          },
          Sbq: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              DefaultRunProperties: {
                shape: 'Sbr'
              },
              CreatedOn: {
                type: 'timestamp'
              },
              LastModifiedOn: {
                type: 'timestamp'
              },
              LastRun: {
                shape: 'Sbs'
              },
              Graph: {
                shape: 'Sbv'
              },
              MaxConcurrentRuns: {
                type: 'integer'
              },
              BlueprintDetails: {
                type: 'structure',
                members: {
                  BlueprintName: {},
                  RunId: {}
                }
              }
            }
          },
          Sbr: {
            type: 'map',
            key: {},
            value: {}
          },
          Sbs: {
            type: 'structure',
            members: {
              Name: {},
              WorkflowRunId: {},
              PreviousRunId: {},
              WorkflowRunProperties: {
                shape: 'Sbr'
              },
              StartedOn: {
                type: 'timestamp'
              },
              CompletedOn: {
                type: 'timestamp'
              },
              Status: {},
              ErrorMessage: {},
              Statistics: {
                type: 'structure',
                members: {
                  TotalActions: {
                    type: 'integer'
                  },
                  TimeoutActions: {
                    type: 'integer'
                  },
                  FailedActions: {
                    type: 'integer'
                  },
                  StoppedActions: {
                    type: 'integer'
                  },
                  SucceededActions: {
                    type: 'integer'
                  },
                  RunningActions: {
                    type: 'integer'
                  },
                  ErroredActions: {
                    type: 'integer'
                  },
                  WaitingActions: {
                    type: 'integer'
                  }
                }
              },
              Graph: {
                shape: 'Sbv'
              },
              StartingEventBatchCondition: {
                type: 'structure',
                members: {
                  BatchSize: {
                    type: 'integer'
                  },
                  BatchWindow: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          Sbv: {
            type: 'structure',
            members: {
              Nodes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Type: {},
                    Name: {},
                    UniqueId: {},
                    TriggerDetails: {
                      type: 'structure',
                      members: {
                        Trigger: {
                          shape: 'Sb6'
                        }
                      }
                    },
                    JobDetails: {
                      type: 'structure',
                      members: {
                        JobRuns: {
                          shape: 'Sc1'
                        }
                      }
                    },
                    CrawlerDetails: {
                      type: 'structure',
                      members: {
                        Crawls: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              State: {},
                              StartedOn: {
                                type: 'timestamp'
                              },
                              CompletedOn: {
                                type: 'timestamp'
                              },
                              ErrorMessage: {},
                              LogGroup: {},
                              LogStream: {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              Edges: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SourceId: {},
                    DestinationId: {}
                  }
                }
              }
            }
          },
          Sc1: {
            type: 'list',
            member: {
              shape: 'Sc2'
            }
          },
          Sc2: {
            type: 'structure',
            members: {
              Id: {},
              Attempt: {
                type: 'integer'
              },
              PreviousRunId: {},
              TriggerName: {},
              JobName: {},
              JobMode: {},
              StartedOn: {
                type: 'timestamp'
              },
              LastModifiedOn: {
                type: 'timestamp'
              },
              CompletedOn: {
                type: 'timestamp'
              },
              JobRunState: {},
              Arguments: {
                shape: 'S59'
              },
              ErrorMessage: {},
              PredecessorRuns: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    JobName: {},
                    RunId: {}
                  }
                }
              },
              AllocatedCapacity: {
                deprecated: true,
                deprecatedMessage: 'This property is deprecated, use MaxCapacity instead.',
                type: 'integer'
              },
              ExecutionTime: {
                type: 'integer'
              },
              Timeout: {
                type: 'integer'
              },
              MaxCapacity: {
                type: 'double'
              },
              WorkerType: {},
              NumberOfWorkers: {
                type: 'integer'
              },
              SecurityConfiguration: {},
              LogGroupName: {},
              NotificationProperty: {
                shape: 'S5e'
              },
              GlueVersion: {},
              DPUSeconds: {
                type: 'double'
              },
              ExecutionClass: {},
              MaintenanceWindow: {}
            }
          },
          Sco: {
            type: 'list',
            member: {}
          },
          Sd9: {
            type: 'map',
            key: {},
            value: {}
          },
          Sdq: {
            type: 'list',
            member: {}
          },
          Sdr: {
            type: 'list',
            member: {}
          },
          Sdv: {
            type: 'structure',
            required: ['Name', 'ConnectionType', 'ConnectionProperties'],
            members: {
              Name: {},
              Description: {},
              ConnectionType: {},
              MatchCriteria: {
                shape: 'Sdx'
              },
              ConnectionProperties: {
                shape: 'Sdy'
              },
              PhysicalConnectionRequirements: {
                shape: 'Se0'
              },
              AuthenticationConfiguration: {
                type: 'structure',
                members: {
                  AuthenticationType: {},
                  SecretArn: {},
                  OAuth2Properties: {
                    type: 'structure',
                    members: {
                      OAuth2GrantType: {},
                      OAuth2ClientApplication: {
                        shape: 'Se7'
                      },
                      TokenUrl: {},
                      TokenUrlParametersMap: {
                        shape: 'Seb'
                      },
                      AuthorizationCodeProperties: {
                        type: 'structure',
                        members: {
                          AuthorizationCode: {},
                          RedirectUri: {}
                        }
                      }
                    }
                  }
                }
              },
              ValidateCredentials: {
                type: 'boolean'
              }
            }
          },
          Sdx: {
            type: 'list',
            member: {}
          },
          Sdy: {
            type: 'map',
            key: {},
            value: {}
          },
          Se0: {
            type: 'structure',
            members: {
              SubnetId: {},
              SecurityGroupIdList: {
                type: 'list',
                member: {}
              },
              AvailabilityZone: {}
            }
          },
          Se7: {
            type: 'structure',
            members: {
              UserManagedClientApplicationClientId: {},
              AWSManagedClientApplicationReference: {}
            }
          },
          Seb: {
            type: 'map',
            key: {},
            value: {}
          },
          Sep: {
            type: 'structure',
            required: ['TableName', 'DatabaseName'],
            members: {
              TableName: {},
              DatabaseName: {},
              CatalogId: {}
            }
          },
          Ses: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Description: {},
              LocationUri: {},
              Parameters: {
                shape: 'Se'
              },
              CreateTableDefaultPermissions: {
                shape: 'Seu'
              },
              TargetDatabase: {
                shape: 'Sf0'
              },
              FederatedDatabase: {
                shape: 'Sf1'
              }
            }
          },
          Seu: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Principal: {
                  type: 'structure',
                  members: {
                    DataLakePrincipalIdentifier: {}
                  }
                },
                Permissions: {
                  shape: 'Sey'
                }
              }
            }
          },
          Sey: {
            type: 'list',
            member: {}
          },
          Sf0: {
            type: 'structure',
            members: {
              CatalogId: {},
              DatabaseName: {},
              Region: {}
            }
          },
          Sf1: {
            type: 'structure',
            members: {
              Identifier: {},
              ConnectionName: {}
            }
          },
          Sf9: {
            type: 'list',
            member: {
              shape: 'S44'
            }
          },
          Sfa: {
            type: 'structure',
            required: ['TransformType'],
            members: {
              TransformType: {},
              FindMatchesParameters: {
                type: 'structure',
                members: {
                  PrimaryKeyColumnName: {},
                  PrecisionRecallTradeoff: {
                    type: 'double'
                  },
                  AccuracyCostTradeoff: {
                    type: 'double'
                  },
                  EnforceProvidedLabels: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          Sfe: {
            type: 'structure',
            members: {
              MlUserDataEncryption: {
                type: 'structure',
                required: ['MlUserDataEncryptionMode'],
                members: {
                  MlUserDataEncryptionMode: {},
                  KmsKeyId: {}
                }
              },
              TaskRunSecurityConfigurationName: {}
            }
          },
          Sfl: {
            type: 'structure',
            required: ['Keys', 'IndexName'],
            members: {
              Keys: {
                type: 'list',
                member: {}
              },
              IndexName: {}
            }
          },
          Sfr: {
            type: 'structure',
            members: {
              RegistryName: {},
              RegistryArn: {}
            }
          },
          Sfy: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Id', 'NodeType', 'Args'],
              members: {
                Id: {},
                NodeType: {},
                Args: {
                  shape: 'Sg2'
                },
                LineNumber: {
                  type: 'integer'
                }
              }
            }
          },
          Sg2: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {},
                Param: {
                  type: 'boolean'
                }
              }
            }
          },
          Sg6: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Source', 'Target'],
              members: {
                Source: {},
                Target: {},
                TargetParameter: {}
              }
            }
          },
          Sgd: {
            type: 'structure',
            members: {
              S3Encryption: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    S3EncryptionMode: {},
                    KmsKeyArn: {}
                  }
                }
              },
              CloudWatchEncryption: {
                type: 'structure',
                members: {
                  CloudWatchEncryptionMode: {},
                  KmsKeyArn: {}
                }
              },
              JobBookmarksEncryption: {
                type: 'structure',
                members: {
                  JobBookmarksEncryptionMode: {},
                  KmsKeyArn: {}
                }
              }
            }
          },
          Sgp: {
            type: 'structure',
            members: {
              Name: {},
              PythonVersion: {}
            }
          },
          Sgq: {
            type: 'map',
            key: {},
            value: {}
          },
          Sgt: {
            type: 'structure',
            members: {
              Id: {},
              CreatedOn: {
                type: 'timestamp'
              },
              Status: {},
              ErrorMessage: {},
              Description: {},
              Role: {},
              Command: {
                shape: 'Sgp'
              },
              DefaultArguments: {
                shape: 'Sgq'
              },
              Connections: {
                shape: 'S5a'
              },
              Progress: {
                type: 'double'
              },
              MaxCapacity: {
                type: 'double'
              },
              SecurityConfiguration: {},
              GlueVersion: {},
              NumberOfWorkers: {
                type: 'integer'
              },
              WorkerType: {},
              CompletedOn: {
                type: 'timestamp'
              },
              ExecutionTime: {
                type: 'double'
              },
              DPUSeconds: {
                type: 'double'
              },
              IdleTimeout: {
                type: 'integer'
              }
            }
          },
          Sgy: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Description: {},
              Owner: {},
              LastAccessTime: {
                type: 'timestamp'
              },
              LastAnalyzedTime: {
                type: 'timestamp'
              },
              Retention: {
                type: 'integer'
              },
              StorageDescriptor: {
                shape: 'S9'
              },
              PartitionKeys: {
                shape: 'Sa'
              },
              ViewOriginalText: {},
              ViewExpandedText: {},
              TableType: {},
              Parameters: {
                shape: 'Se'
              },
              TargetTable: {
                shape: 'Sh2'
              },
              ViewDefinition: {
                type: 'structure',
                members: {
                  IsProtected: {
                    type: 'boolean'
                  },
                  Definer: {},
                  Representations: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Dialect: {},
                        DialectVersion: {},
                        ViewOriginalText: {},
                        ValidationConnection: {},
                        ViewExpandedText: {}
                      }
                    }
                  },
                  SubObjects: {
                    shape: 'Sh8'
                  }
                }
              }
            }
          },
          Sh2: {
            type: 'structure',
            members: {
              CatalogId: {},
              DatabaseName: {},
              Name: {},
              Region: {}
            }
          },
          Sh8: {
            type: 'list',
            member: {}
          },
          Shj: {
            type: 'structure',
            members: {
              FunctionName: {},
              ClassName: {},
              OwnerName: {},
              OwnerType: {},
              ResourceUris: {
                shape: 'Shl'
              }
            }
          },
          Shl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceType: {},
                Uri: {}
              }
            }
          },
          Sji: {
            type: 'structure',
            members: {
              BlueprintName: {},
              RunId: {},
              WorkflowName: {},
              State: {},
              StartedOn: {
                type: 'timestamp'
              },
              CompletedOn: {
                type: 'timestamp'
              },
              ErrorMessage: {},
              RollbackErrorMessage: {},
              Parameters: {},
              RoleArn: {}
            }
          },
          Sjv: {
            type: 'structure',
            members: {
              GrokClassifier: {
                type: 'structure',
                required: ['Name', 'Classification', 'GrokPattern'],
                members: {
                  Name: {},
                  Classification: {},
                  CreationTime: {
                    type: 'timestamp'
                  },
                  LastUpdated: {
                    type: 'timestamp'
                  },
                  Version: {
                    type: 'long'
                  },
                  GrokPattern: {},
                  CustomPatterns: {}
                }
              },
              XMLClassifier: {
                type: 'structure',
                required: ['Name', 'Classification'],
                members: {
                  Name: {},
                  Classification: {},
                  CreationTime: {
                    type: 'timestamp'
                  },
                  LastUpdated: {
                    type: 'timestamp'
                  },
                  Version: {
                    type: 'long'
                  },
                  RowTag: {}
                }
              },
              JsonClassifier: {
                type: 'structure',
                required: ['Name', 'JsonPath'],
                members: {
                  Name: {},
                  CreationTime: {
                    type: 'timestamp'
                  },
                  LastUpdated: {
                    type: 'timestamp'
                  },
                  Version: {
                    type: 'long'
                  },
                  JsonPath: {}
                }
              },
              CsvClassifier: {
                type: 'structure',
                required: ['Name'],
                members: {
                  Name: {},
                  CreationTime: {
                    type: 'timestamp'
                  },
                  LastUpdated: {
                    type: 'timestamp'
                  },
                  Version: {
                    type: 'long'
                  },
                  Delimiter: {},
                  QuoteSymbol: {},
                  ContainsHeader: {},
                  Header: {
                    shape: 'Sdq'
                  },
                  DisableValueTrimming: {
                    type: 'boolean'
                  },
                  AllowSingleColumn: {
                    type: 'boolean'
                  },
                  CustomDatatypeConfigured: {
                    type: 'boolean'
                  },
                  CustomDatatypes: {
                    shape: 'Sdr'
                  },
                  Serde: {}
                }
              }
            }
          },
          Sk5: {
            type: 'list',
            member: {}
          },
          Sk7: {
            type: 'list',
            member: {
              shape: 'Sk8'
            }
          },
          Sk8: {
            type: 'structure',
            required: ['ColumnName', 'ColumnType', 'AnalyzedTime', 'StatisticsData'],
            members: {
              ColumnName: {},
              ColumnType: {},
              AnalyzedTime: {
                type: 'timestamp'
              },
              StatisticsData: {
                type: 'structure',
                required: ['Type'],
                members: {
                  Type: {},
                  BooleanColumnStatisticsData: {
                    type: 'structure',
                    required: ['NumberOfTrues', 'NumberOfFalses', 'NumberOfNulls'],
                    members: {
                      NumberOfTrues: {
                        type: 'long'
                      },
                      NumberOfFalses: {
                        type: 'long'
                      },
                      NumberOfNulls: {
                        type: 'long'
                      }
                    }
                  },
                  DateColumnStatisticsData: {
                    type: 'structure',
                    required: ['NumberOfNulls', 'NumberOfDistinctValues'],
                    members: {
                      MinimumValue: {
                        type: 'timestamp'
                      },
                      MaximumValue: {
                        type: 'timestamp'
                      },
                      NumberOfNulls: {
                        type: 'long'
                      },
                      NumberOfDistinctValues: {
                        type: 'long'
                      }
                    }
                  },
                  DecimalColumnStatisticsData: {
                    type: 'structure',
                    required: ['NumberOfNulls', 'NumberOfDistinctValues'],
                    members: {
                      MinimumValue: {
                        shape: 'Skg'
                      },
                      MaximumValue: {
                        shape: 'Skg'
                      },
                      NumberOfNulls: {
                        type: 'long'
                      },
                      NumberOfDistinctValues: {
                        type: 'long'
                      }
                    }
                  },
                  DoubleColumnStatisticsData: {
                    type: 'structure',
                    required: ['NumberOfNulls', 'NumberOfDistinctValues'],
                    members: {
                      MinimumValue: {
                        type: 'double'
                      },
                      MaximumValue: {
                        type: 'double'
                      },
                      NumberOfNulls: {
                        type: 'long'
                      },
                      NumberOfDistinctValues: {
                        type: 'long'
                      }
                    }
                  },
                  LongColumnStatisticsData: {
                    type: 'structure',
                    required: ['NumberOfNulls', 'NumberOfDistinctValues'],
                    members: {
                      MinimumValue: {
                        type: 'long'
                      },
                      MaximumValue: {
                        type: 'long'
                      },
                      NumberOfNulls: {
                        type: 'long'
                      },
                      NumberOfDistinctValues: {
                        type: 'long'
                      }
                    }
                  },
                  StringColumnStatisticsData: {
                    type: 'structure',
                    required: ['MaximumLength', 'AverageLength', 'NumberOfNulls', 'NumberOfDistinctValues'],
                    members: {
                      MaximumLength: {
                        type: 'long'
                      },
                      AverageLength: {
                        type: 'double'
                      },
                      NumberOfNulls: {
                        type: 'long'
                      },
                      NumberOfDistinctValues: {
                        type: 'long'
                      }
                    }
                  },
                  BinaryColumnStatisticsData: {
                    type: 'structure',
                    required: ['MaximumLength', 'AverageLength', 'NumberOfNulls'],
                    members: {
                      MaximumLength: {
                        type: 'long'
                      },
                      AverageLength: {
                        type: 'double'
                      },
                      NumberOfNulls: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          Skg: {
            type: 'structure',
            required: ['UnscaledValue', 'Scale'],
            members: {
              UnscaledValue: {
                type: 'blob'
              },
              Scale: {
                type: 'integer'
              }
            }
          },
          Skp: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ColumnName: {},
                Error: {
                  shape: 'S14'
                }
              }
            }
          },
          Skv: {
            type: 'structure',
            members: {
              CustomerId: {},
              ColumnStatisticsTaskRunId: {},
              DatabaseName: {},
              TableName: {},
              ColumnNameList: {
                shape: 'Skx'
              },
              CatalogID: {},
              Role: {},
              SampleSize: {
                type: 'double'
              },
              SecurityConfiguration: {},
              NumberOfWorkers: {
                type: 'integer'
              },
              WorkerType: {},
              Status: {},
              CreationTime: {
                type: 'timestamp'
              },
              LastUpdated: {
                type: 'timestamp'
              },
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              ErrorMessage: {},
              DPUSeconds: {
                type: 'double'
              }
            }
          },
          Skx: {
            type: 'list',
            member: {}
          },
          Sl6: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              ConnectionType: {},
              MatchCriteria: {
                shape: 'Sdx'
              },
              ConnectionProperties: {
                shape: 'Sdy'
              },
              PhysicalConnectionRequirements: {
                shape: 'Se0'
              },
              CreationTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              },
              LastUpdatedBy: {},
              Status: {},
              StatusReason: {},
              LastConnectionValidationTime: {
                type: 'timestamp'
              },
              AuthenticationConfiguration: {
                type: 'structure',
                members: {
                  AuthenticationType: {},
                  SecretArn: {},
                  OAuth2Properties: {
                    type: 'structure',
                    members: {
                      OAuth2GrantType: {},
                      OAuth2ClientApplication: {
                        shape: 'Se7'
                      },
                      TokenUrl: {},
                      TokenUrlParametersMap: {
                        shape: 'Seb'
                      }
                    }
                  }
                }
              }
            }
          },
          Slq: {
            type: 'structure',
            members: {
              EncryptionAtRest: {
                type: 'structure',
                required: ['CatalogEncryptionMode'],
                members: {
                  CatalogEncryptionMode: {},
                  SseAwsKmsKeyId: {},
                  CatalogEncryptionServiceRole: {}
                }
              },
              ConnectionPasswordEncryption: {
                type: 'structure',
                required: ['ReturnConnectionPasswordEncrypted'],
                members: {
                  ReturnConnectionPasswordEncrypted: {
                    type: 'boolean'
                  },
                  AwsKmsKeyId: {}
                }
              }
            }
          },
          Sm3: {
            type: 'structure',
            members: {
              CloudWatchMetricsEnabled: {
                type: 'boolean'
              },
              ResultsS3Prefix: {}
            }
          },
          Sm4: {
            type: 'list',
            member: {}
          },
          Sm6: {
            type: 'map',
            key: {},
            value: {
              shape: 'S43'
            }
          },
          Sm9: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Description: {},
              LocationUri: {},
              Parameters: {
                shape: 'Se'
              },
              CreateTime: {
                type: 'timestamp'
              },
              CreateTableDefaultPermissions: {
                shape: 'Seu'
              },
              TargetDatabase: {
                shape: 'Sf0'
              },
              CatalogId: {},
              FederatedDatabase: {
                shape: 'Sf1'
              }
            }
          },
          Smr: {
            type: 'structure',
            members: {
              JobName: {},
              Version: {
                type: 'integer'
              },
              Run: {
                type: 'integer'
              },
              Attempt: {
                type: 'integer'
              },
              PreviousRunId: {},
              RunId: {},
              JobBookmark: {}
            }
          },
          Sn2: {
            type: 'structure',
            members: {
              TaskType: {},
              ImportLabelsTaskRunProperties: {
                type: 'structure',
                members: {
                  InputS3Path: {},
                  Replace: {
                    type: 'boolean'
                  }
                }
              },
              ExportLabelsTaskRunProperties: {
                type: 'structure',
                members: {
                  OutputS3Path: {}
                }
              },
              LabelingSetGenerationTaskRunProperties: {
                type: 'structure',
                members: {
                  OutputS3Path: {}
                }
              },
              FindMatchesTaskRunProperties: {
                type: 'structure',
                members: {
                  JobId: {},
                  JobName: {},
                  JobRunId: {}
                }
              }
            }
          },
          Snl: {
            type: 'structure',
            required: ['TransformType'],
            members: {
              TransformType: {},
              FindMatchesMetrics: {
                type: 'structure',
                members: {
                  AreaUnderPRCurve: {
                    type: 'double'
                  },
                  Precision: {
                    type: 'double'
                  },
                  Recall: {
                    type: 'double'
                  },
                  F1: {
                    type: 'double'
                  },
                  ConfusionMatrix: {
                    type: 'structure',
                    members: {
                      NumTruePositives: {
                        type: 'long'
                      },
                      NumFalsePositives: {
                        type: 'long'
                      },
                      NumTrueNegatives: {
                        type: 'long'
                      },
                      NumFalseNegatives: {
                        type: 'long'
                      }
                    }
                  },
                  ColumnImportances: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        ColumnName: {},
                        Importance: {
                          type: 'double'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sns: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                DataType: {}
              }
            }
          },
          Snv: {
            type: 'structure',
            members: {
              Name: {},
              TransformType: {},
              Status: {},
              GlueVersion: {},
              CreatedBefore: {
                type: 'timestamp'
              },
              CreatedAfter: {
                type: 'timestamp'
              },
              LastModifiedBefore: {
                type: 'timestamp'
              },
              LastModifiedAfter: {
                type: 'timestamp'
              },
              Schema: {
                shape: 'Sns'
              }
            }
          },
          Snw: {
            type: 'structure',
            required: ['Column', 'SortDirection'],
            members: {
              Column: {},
              SortDirection: {}
            }
          },
          So2: {
            type: 'structure',
            required: ['DatabaseName', 'TableName'],
            members: {
              DatabaseName: {},
              TableName: {}
            }
          },
          So3: {
            type: 'list',
            member: {
              shape: 'So2'
            }
          },
          So4: {
            type: 'structure',
            members: {
              Jdbc: {
                shape: 'Sg2'
              },
              S3: {
                shape: 'Sg2'
              },
              DynamoDB: {
                shape: 'Sg2'
              }
            }
          },
          So6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SourceTable: {},
                SourcePath: {},
                SourceType: {},
                TargetTable: {},
                TargetPath: {},
                TargetType: {}
              }
            }
          },
          Sop: {
            type: 'structure',
            required: ['SegmentNumber', 'TotalSegments'],
            members: {
              SegmentNumber: {
                type: 'integer'
              },
              TotalSegments: {
                type: 'integer'
              }
            }
          },
          Spc: {
            type: 'structure',
            members: {
              LatestVersion: {
                type: 'boolean'
              },
              VersionNumber: {
                type: 'long'
              }
            }
          },
          Spl: {
            type: 'structure',
            members: {
              Name: {},
              CreatedTimeStamp: {
                type: 'timestamp'
              },
              EncryptionConfiguration: {
                shape: 'Sgd'
              }
            }
          },
          Spt: {
            type: 'structure',
            members: {
              Id: {
                type: 'integer'
              },
              Code: {},
              State: {},
              Output: {
                type: 'structure',
                members: {
                  Data: {
                    type: 'structure',
                    members: {
                      TextPlain: {}
                    }
                  },
                  ExecutionCount: {
                    type: 'integer'
                  },
                  Status: {},
                  ErrorName: {},
                  ErrorValue: {},
                  Traceback: {
                    shape: 'S5b'
                  }
                }
              },
              Progress: {
                type: 'double'
              },
              StartedOn: {
                type: 'long'
              },
              CompletedOn: {
                type: 'long'
              }
            }
          },
          Sq0: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              DatabaseName: {},
              Description: {},
              Owner: {},
              CreateTime: {
                type: 'timestamp'
              },
              UpdateTime: {
                type: 'timestamp'
              },
              LastAccessTime: {
                type: 'timestamp'
              },
              LastAnalyzedTime: {
                type: 'timestamp'
              },
              Retention: {
                type: 'integer'
              },
              StorageDescriptor: {
                shape: 'S9'
              },
              PartitionKeys: {
                shape: 'Sa'
              },
              ViewOriginalText: {},
              ViewExpandedText: {},
              TableType: {},
              Parameters: {
                shape: 'Se'
              },
              CreatedBy: {},
              IsRegisteredWithLakeFormation: {
                type: 'boolean'
              },
              TargetTable: {
                shape: 'Sh2'
              },
              CatalogId: {},
              VersionId: {},
              FederatedTable: {
                type: 'structure',
                members: {
                  Identifier: {},
                  DatabaseIdentifier: {},
                  ConnectionName: {}
                }
              },
              ViewDefinition: {
                type: 'structure',
                members: {
                  IsProtected: {
                    type: 'boolean'
                  },
                  Definer: {},
                  SubObjects: {
                    shape: 'Sh8'
                  },
                  Representations: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Dialect: {},
                        DialectVersion: {},
                        ViewOriginalText: {},
                        ViewExpandedText: {},
                        ValidationConnection: {},
                        IsStale: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                }
              },
              IsMultiDialectView: {
                type: 'boolean'
              }
            }
          },
          Sq9: {
            type: 'structure',
            members: {
              Table: {
                shape: 'Sq0'
              },
              VersionId: {}
            }
          },
          Sqg: {
            type: 'list',
            member: {
              shape: 'Sq0'
            }
          },
          Sqo: {
            type: 'structure',
            members: {
              AdditionalAuditContext: {},
              RequestedColumns: {
                type: 'list',
                member: {}
              },
              AllColumnsRequested: {
                type: 'boolean'
              }
            }
          },
          Sqr: {
            type: 'list',
            member: {}
          },
          Sqt: {
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
          },
          Sra: {
            type: 'structure',
            members: {
              FunctionName: {},
              DatabaseName: {},
              ClassName: {},
              OwnerName: {},
              OwnerType: {},
              CreateTime: {
                type: 'timestamp'
              },
              ResourceUris: {
                shape: 'Shl'
              },
              CatalogId: {}
            }
          },
          Su3: {
            type: 'structure',
            members: {
              MetadataKey: {},
              MetadataValue: {}
            }
          },
          Suo: {
            type: 'list',
            member: {}
          },
          Swh: {
            type: 'list',
            member: {
              shape: 'Sk8'
            }
          },
          Swj: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ColumnStatistics: {
                  shape: 'Sk8'
                },
                Error: {
                  shape: 'S14'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ca1cee6f1ec457e6efd4030a8a863a116e80f28c.js.map