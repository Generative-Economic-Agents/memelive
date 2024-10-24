System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-05-18',
          endpointPrefix: 'athena',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'Amazon Athena',
          serviceId: 'Athena',
          signatureVersion: 'v4',
          targetPrefix: 'AmazonAthena',
          uid: 'athena-2017-05-18'
        },
        operations: {
          BatchGetNamedQuery: {
            input: {
              type: 'structure',
              required: ['NamedQueryIds'],
              members: {
                NamedQueryIds: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NamedQueries: {
                  type: 'list',
                  member: {
                    shape: 'S6'
                  }
                },
                UnprocessedNamedQueryIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      NamedQueryId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetPreparedStatement: {
            input: {
              type: 'structure',
              required: ['PreparedStatementNames', 'WorkGroup'],
              members: {
                PreparedStatementNames: {
                  type: 'list',
                  member: {}
                },
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PreparedStatements: {
                  type: 'list',
                  member: {
                    shape: 'Sl'
                  }
                },
                UnprocessedPreparedStatementNames: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StatementName: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetQueryExecution: {
            input: {
              type: 'structure',
              required: ['QueryExecutionIds'],
              members: {
                QueryExecutionIds: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryExecutions: {
                  type: 'list',
                  member: {
                    shape: 'Su'
                  }
                },
                UnprocessedQueryExecutionIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      QueryExecutionId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          CancelCapacityReservation: {
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
            },
            idempotent: true
          },
          CreateCapacityReservation: {
            input: {
              type: 'structure',
              required: ['TargetDpus', 'Name'],
              members: {
                TargetDpus: {
                  type: 'integer'
                },
                Name: {},
                Tags: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          CreateDataCatalog: {
            input: {
              type: 'structure',
              required: ['Name', 'Type'],
              members: {
                Name: {},
                Type: {},
                Description: {},
                Parameters: {
                  shape: 'S22'
                },
                Tags: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateNamedQuery: {
            input: {
              type: 'structure',
              required: ['Name', 'Database', 'QueryString'],
              members: {
                Name: {},
                Description: {},
                Database: {},
                QueryString: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NamedQueryId: {}
              }
            },
            idempotent: true
          },
          CreateNotebook: {
            input: {
              type: 'structure',
              required: ['WorkGroup', 'Name'],
              members: {
                WorkGroup: {},
                Name: {},
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookId: {}
              }
            }
          },
          CreatePreparedStatement: {
            input: {
              type: 'structure',
              required: ['StatementName', 'WorkGroup', 'QueryStatement'],
              members: {
                StatementName: {},
                WorkGroup: {},
                QueryStatement: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreatePresignedNotebookUrl: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['NotebookUrl', 'AuthToken', 'AuthTokenExpirationTime'],
              members: {
                NotebookUrl: {},
                AuthToken: {},
                AuthTokenExpirationTime: {
                  type: 'long'
                }
              }
            }
          },
          CreateWorkGroup: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Configuration: {
                  shape: 'S2l'
                },
                Description: {},
                Tags: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCapacityReservation: {
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
            },
            idempotent: true
          },
          DeleteDataCatalog: {
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
          DeleteNamedQuery: {
            input: {
              type: 'structure',
              required: ['NamedQueryId'],
              members: {
                NamedQueryId: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteNotebook: {
            input: {
              type: 'structure',
              required: ['NotebookId'],
              members: {
                NotebookId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePreparedStatement: {
            input: {
              type: 'structure',
              required: ['StatementName', 'WorkGroup'],
              members: {
                StatementName: {},
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWorkGroup: {
            input: {
              type: 'structure',
              required: ['WorkGroup'],
              members: {
                WorkGroup: {},
                RecursiveDeleteOption: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          ExportNotebook: {
            input: {
              type: 'structure',
              required: ['NotebookId'],
              members: {
                NotebookId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookMetadata: {
                  shape: 'S38'
                },
                Payload: {}
              }
            }
          },
          GetCalculationExecution: {
            input: {
              type: 'structure',
              required: ['CalculationExecutionId'],
              members: {
                CalculationExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CalculationExecutionId: {},
                SessionId: {},
                Description: {},
                WorkingDirectory: {},
                Status: {
                  shape: 'S3f'
                },
                Statistics: {
                  shape: 'S3h'
                },
                Result: {
                  type: 'structure',
                  members: {
                    StdOutS3Uri: {},
                    StdErrorS3Uri: {},
                    ResultS3Uri: {},
                    ResultType: {}
                  }
                }
              }
            }
          },
          GetCalculationExecutionCode: {
            input: {
              type: 'structure',
              required: ['CalculationExecutionId'],
              members: {
                CalculationExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CodeBlock: {}
              }
            }
          },
          GetCalculationExecutionStatus: {
            input: {
              type: 'structure',
              required: ['CalculationExecutionId'],
              members: {
                CalculationExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  shape: 'S3f'
                },
                Statistics: {
                  shape: 'S3h'
                }
              }
            }
          },
          GetCapacityAssignmentConfiguration: {
            input: {
              type: 'structure',
              required: ['CapacityReservationName'],
              members: {
                CapacityReservationName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CapacityAssignmentConfiguration'],
              members: {
                CapacityAssignmentConfiguration: {
                  type: 'structure',
                  members: {
                    CapacityReservationName: {},
                    CapacityAssignments: {
                      shape: 'S3s'
                    }
                  }
                }
              }
            }
          },
          GetCapacityReservation: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CapacityReservation'],
              members: {
                CapacityReservation: {
                  shape: 'S3x'
                }
              }
            }
          },
          GetDataCatalog: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataCatalog: {
                  type: 'structure',
                  required: ['Name', 'Type'],
                  members: {
                    Name: {},
                    Description: {},
                    Type: {},
                    Parameters: {
                      shape: 'S22'
                    }
                  }
                }
              }
            }
          },
          GetDatabase: {
            input: {
              type: 'structure',
              required: ['CatalogName', 'DatabaseName'],
              members: {
                CatalogName: {},
                DatabaseName: {},
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Database: {
                  shape: 'S48'
                }
              }
            }
          },
          GetNamedQuery: {
            input: {
              type: 'structure',
              required: ['NamedQueryId'],
              members: {
                NamedQueryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NamedQuery: {
                  shape: 'S6'
                }
              }
            }
          },
          GetNotebookMetadata: {
            input: {
              type: 'structure',
              required: ['NotebookId'],
              members: {
                NotebookId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookMetadata: {
                  shape: 'S38'
                }
              }
            }
          },
          GetPreparedStatement: {
            input: {
              type: 'structure',
              required: ['StatementName', 'WorkGroup'],
              members: {
                StatementName: {},
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PreparedStatement: {
                  shape: 'Sl'
                }
              }
            }
          },
          GetQueryExecution: {
            input: {
              type: 'structure',
              required: ['QueryExecutionId'],
              members: {
                QueryExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryExecution: {
                  shape: 'Su'
                }
              }
            }
          },
          GetQueryResults: {
            input: {
              type: 'structure',
              required: ['QueryExecutionId'],
              members: {
                QueryExecutionId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpdateCount: {
                  type: 'long'
                },
                ResultSet: {
                  type: 'structure',
                  members: {
                    Rows: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Data: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                VarCharValue: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    ResultSetMetadata: {
                      type: 'structure',
                      members: {
                        ColumnInfo: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['Name', 'Type'],
                            members: {
                              CatalogName: {},
                              SchemaName: {},
                              TableName: {},
                              Name: {},
                              Label: {},
                              Type: {},
                              Precision: {
                                type: 'integer'
                              },
                              Scale: {
                                type: 'integer'
                              },
                              Nullable: {},
                              CaseSensitive: {
                                type: 'boolean'
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
          GetQueryRuntimeStatistics: {
            input: {
              type: 'structure',
              required: ['QueryExecutionId'],
              members: {
                QueryExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryRuntimeStatistics: {
                  type: 'structure',
                  members: {
                    Timeline: {
                      type: 'structure',
                      members: {
                        QueryQueueTimeInMillis: {
                          type: 'long'
                        },
                        ServicePreProcessingTimeInMillis: {
                          type: 'long'
                        },
                        QueryPlanningTimeInMillis: {
                          type: 'long'
                        },
                        EngineExecutionTimeInMillis: {
                          type: 'long'
                        },
                        ServiceProcessingTimeInMillis: {
                          type: 'long'
                        },
                        TotalExecutionTimeInMillis: {
                          type: 'long'
                        }
                      }
                    },
                    Rows: {
                      type: 'structure',
                      members: {
                        InputRows: {
                          type: 'long'
                        },
                        InputBytes: {
                          type: 'long'
                        },
                        OutputBytes: {
                          type: 'long'
                        },
                        OutputRows: {
                          type: 'long'
                        }
                      }
                    },
                    OutputStage: {
                      shape: 'S51'
                    }
                  }
                }
              }
            }
          },
          GetSession: {
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
                Description: {},
                WorkGroup: {},
                EngineVersion: {},
                EngineConfiguration: {
                  shape: 'S58'
                },
                NotebookVersion: {},
                SessionConfiguration: {
                  type: 'structure',
                  members: {
                    ExecutionRole: {},
                    WorkingDirectory: {},
                    IdleTimeoutSeconds: {
                      type: 'long'
                    },
                    EncryptionConfiguration: {
                      shape: 'Sy'
                    }
                  }
                },
                Status: {
                  shape: 'S5d'
                },
                Statistics: {
                  type: 'structure',
                  members: {
                    DpuExecutionInMillis: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          GetSessionStatus: {
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
                Status: {
                  shape: 'S5d'
                }
              }
            }
          },
          GetTableMetadata: {
            input: {
              type: 'structure',
              required: ['CatalogName', 'DatabaseName', 'TableName'],
              members: {
                CatalogName: {},
                DatabaseName: {},
                TableName: {},
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableMetadata: {
                  shape: 'S5k'
                }
              }
            }
          },
          GetWorkGroup: {
            input: {
              type: 'structure',
              required: ['WorkGroup'],
              members: {
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkGroup: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    State: {},
                    Configuration: {
                      shape: 'S2l'
                    },
                    Description: {},
                    CreationTime: {
                      type: 'timestamp'
                    },
                    IdentityCenterApplicationArn: {}
                  }
                }
              }
            }
          },
          ImportNotebook: {
            input: {
              type: 'structure',
              required: ['WorkGroup', 'Name', 'Type'],
              members: {
                WorkGroup: {},
                Name: {},
                Payload: {},
                Type: {},
                NotebookS3LocationUri: {},
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotebookId: {}
              }
            }
          },
          ListApplicationDPUSizes: {
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
                ApplicationDPUSizes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationRuntimeId: {},
                      SupportedDPUSizes: {
                        type: 'list',
                        member: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCalculationExecutions: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {},
                StateFilter: {},
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
                Calculations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CalculationExecutionId: {},
                      Description: {},
                      Status: {
                        shape: 'S3f'
                      }
                    }
                  }
                }
              }
            }
          },
          ListCapacityReservations: {
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
              required: ['CapacityReservations'],
              members: {
                NextToken: {},
                CapacityReservations: {
                  type: 'list',
                  member: {
                    shape: 'S3x'
                  }
                }
              }
            }
          },
          ListDataCatalogs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DataCatalogsSummary: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CatalogName: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDatabases: {
            input: {
              type: 'structure',
              required: ['CatalogName'],
              members: {
                CatalogName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DatabaseList: {
                  type: 'list',
                  member: {
                    shape: 'S48'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEngineVersions: {
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
                EngineVersions: {
                  type: 'list',
                  member: {
                    shape: 'S1i'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListExecutors: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {},
                ExecutorStateFilter: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {},
                NextToken: {},
                ExecutorsSummary: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ExecutorId'],
                    members: {
                      ExecutorId: {},
                      ExecutorType: {},
                      StartDateTime: {
                        type: 'long'
                      },
                      TerminationDateTime: {
                        type: 'long'
                      },
                      ExecutorState: {},
                      ExecutorSize: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          ListNamedQueries: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NamedQueryIds: {
                  shape: 'S2'
                },
                NextToken: {}
              }
            }
          },
          ListNotebookMetadata: {
            input: {
              type: 'structure',
              required: ['WorkGroup'],
              members: {
                Filters: {
                  type: 'structure',
                  members: {
                    Name: {}
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                NotebookMetadataList: {
                  type: 'list',
                  member: {
                    shape: 'S38'
                  }
                }
              }
            }
          },
          ListNotebookSessions: {
            input: {
              type: 'structure',
              required: ['NotebookId'],
              members: {
                NotebookId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['NotebookSessionsList'],
              members: {
                NotebookSessionsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SessionId: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPreparedStatements: {
            input: {
              type: 'structure',
              required: ['WorkGroup'],
              members: {
                WorkGroup: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PreparedStatements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StatementName: {},
                      LastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListQueryExecutions: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryExecutionIds: {
                  shape: 'Sq'
                },
                NextToken: {}
              }
            }
          },
          ListSessions: {
            input: {
              type: 'structure',
              required: ['WorkGroup'],
              members: {
                WorkGroup: {},
                StateFilter: {},
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
                Sessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SessionId: {},
                      Description: {},
                      EngineVersion: {
                        shape: 'S1i'
                      },
                      NotebookVersion: {},
                      Status: {
                        shape: 'S5d'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTableMetadata: {
            input: {
              type: 'structure',
              required: ['CatalogName', 'DatabaseName'],
              members: {
                CatalogName: {},
                DatabaseName: {},
                Expression: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                WorkGroup: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TableMetadataList: {
                  type: 'list',
                  member: {
                    shape: 'S5k'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S1v'
                },
                NextToken: {}
              }
            }
          },
          ListWorkGroups: {
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
                WorkGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      State: {},
                      Description: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      EngineVersion: {
                        shape: 'S1i'
                      },
                      IdentityCenterApplicationArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PutCapacityAssignmentConfiguration: {
            input: {
              type: 'structure',
              required: ['CapacityReservationName', 'CapacityAssignments'],
              members: {
                CapacityReservationName: {},
                CapacityAssignments: {
                  shape: 'S3s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          StartCalculationExecution: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {},
                Description: {},
                CalculationConfiguration: {
                  deprecated: true,
                  deprecatedMessage: 'Kepler Post GA Tasks : https://sim.amazon.com/issues/ATHENA-39828',
                  type: 'structure',
                  members: {
                    CodeBlock: {}
                  }
                },
                CodeBlock: {},
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CalculationExecutionId: {},
                State: {}
              }
            }
          },
          StartQueryExecution: {
            input: {
              type: 'structure',
              required: ['QueryString'],
              members: {
                QueryString: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                QueryExecutionContext: {
                  shape: 'S18'
                },
                ResultConfiguration: {
                  shape: 'Sw'
                },
                WorkGroup: {},
                ExecutionParameters: {
                  shape: 'S1j'
                },
                ResultReuseConfiguration: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryExecutionId: {}
              }
            },
            idempotent: true
          },
          StartSession: {
            input: {
              type: 'structure',
              required: ['WorkGroup', 'EngineConfiguration'],
              members: {
                Description: {},
                WorkGroup: {},
                EngineConfiguration: {
                  shape: 'S58'
                },
                NotebookVersion: {},
                SessionIdleTimeoutInMinutes: {
                  type: 'integer'
                },
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SessionId: {},
                State: {}
              }
            }
          },
          StopCalculationExecution: {
            input: {
              type: 'structure',
              required: ['CalculationExecutionId'],
              members: {
                CalculationExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                State: {}
              }
            }
          },
          StopQueryExecution: {
            input: {
              type: 'structure',
              required: ['QueryExecutionId'],
              members: {
                QueryExecutionId: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S1v'
                }
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
                State: {}
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
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
          UpdateCapacityReservation: {
            input: {
              type: 'structure',
              required: ['TargetDpus', 'Name'],
              members: {
                TargetDpus: {
                  type: 'integer'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDataCatalog: {
            input: {
              type: 'structure',
              required: ['Name', 'Type'],
              members: {
                Name: {},
                Type: {},
                Description: {},
                Parameters: {
                  shape: 'S22'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateNamedQuery: {
            input: {
              type: 'structure',
              required: ['NamedQueryId', 'Name', 'QueryString'],
              members: {
                NamedQueryId: {},
                Name: {},
                Description: {},
                QueryString: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateNotebook: {
            input: {
              type: 'structure',
              required: ['NotebookId', 'Payload', 'Type'],
              members: {
                NotebookId: {},
                Payload: {},
                Type: {},
                SessionId: {},
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateNotebookMetadata: {
            input: {
              type: 'structure',
              required: ['NotebookId', 'Name'],
              members: {
                NotebookId: {},
                ClientRequestToken: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdatePreparedStatement: {
            input: {
              type: 'structure',
              required: ['StatementName', 'WorkGroup', 'QueryStatement'],
              members: {
                StatementName: {},
                WorkGroup: {},
                QueryStatement: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateWorkGroup: {
            input: {
              type: 'structure',
              required: ['WorkGroup'],
              members: {
                WorkGroup: {},
                Description: {},
                ConfigurationUpdates: {
                  type: 'structure',
                  members: {
                    EnforceWorkGroupConfiguration: {
                      type: 'boolean'
                    },
                    ResultConfigurationUpdates: {
                      type: 'structure',
                      members: {
                        OutputLocation: {},
                        RemoveOutputLocation: {
                          type: 'boolean'
                        },
                        EncryptionConfiguration: {
                          shape: 'Sy'
                        },
                        RemoveEncryptionConfiguration: {
                          type: 'boolean'
                        },
                        ExpectedBucketOwner: {},
                        RemoveExpectedBucketOwner: {
                          type: 'boolean'
                        },
                        AclConfiguration: {
                          shape: 'S12'
                        },
                        RemoveAclConfiguration: {
                          type: 'boolean'
                        }
                      }
                    },
                    PublishCloudWatchMetricsEnabled: {
                      type: 'boolean'
                    },
                    BytesScannedCutoffPerQuery: {
                      type: 'long'
                    },
                    RemoveBytesScannedCutoffPerQuery: {
                      type: 'boolean'
                    },
                    RequesterPaysEnabled: {
                      type: 'boolean'
                    },
                    EngineVersion: {
                      shape: 'S1i'
                    },
                    RemoveCustomerContentEncryptionConfiguration: {
                      type: 'boolean'
                    },
                    AdditionalConfiguration: {},
                    ExecutionRole: {},
                    CustomerContentEncryptionConfiguration: {
                      shape: 'S2o'
                    },
                    EnableMinimumEncryptionConfiguration: {
                      type: 'boolean'
                    },
                    QueryResultsS3AccessGrantsConfiguration: {
                      shape: 'S1l'
                    }
                  }
                },
                State: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'structure',
            required: ['Name', 'Database', 'QueryString'],
            members: {
              Name: {},
              Description: {},
              Database: {},
              QueryString: {},
              NamedQueryId: {},
              WorkGroup: {}
            }
          },
          Sl: {
            type: 'structure',
            members: {
              StatementName: {},
              QueryStatement: {},
              WorkGroupName: {},
              Description: {},
              LastModifiedTime: {
                type: 'timestamp'
              }
            }
          },
          Sq: {
            type: 'list',
            member: {}
          },
          Su: {
            type: 'structure',
            members: {
              QueryExecutionId: {},
              Query: {},
              StatementType: {},
              ResultConfiguration: {
                shape: 'Sw'
              },
              ResultReuseConfiguration: {
                shape: 'S14'
              },
              QueryExecutionContext: {
                shape: 'S18'
              },
              Status: {
                type: 'structure',
                members: {
                  State: {},
                  StateChangeReason: {},
                  SubmissionDateTime: {
                    type: 'timestamp'
                  },
                  CompletionDateTime: {
                    type: 'timestamp'
                  },
                  AthenaError: {
                    type: 'structure',
                    members: {
                      ErrorCategory: {
                        type: 'integer'
                      },
                      ErrorType: {
                        type: 'integer'
                      },
                      Retryable: {
                        type: 'boolean'
                      },
                      ErrorMessage: {}
                    }
                  }
                }
              },
              Statistics: {
                type: 'structure',
                members: {
                  EngineExecutionTimeInMillis: {
                    type: 'long'
                  },
                  DataScannedInBytes: {
                    type: 'long'
                  },
                  DataManifestLocation: {},
                  TotalExecutionTimeInMillis: {
                    type: 'long'
                  },
                  QueryQueueTimeInMillis: {
                    type: 'long'
                  },
                  ServicePreProcessingTimeInMillis: {
                    type: 'long'
                  },
                  QueryPlanningTimeInMillis: {
                    type: 'long'
                  },
                  ServiceProcessingTimeInMillis: {
                    type: 'long'
                  },
                  ResultReuseInformation: {
                    type: 'structure',
                    required: ['ReusedPreviousResult'],
                    members: {
                      ReusedPreviousResult: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              },
              WorkGroup: {},
              EngineVersion: {
                shape: 'S1i'
              },
              ExecutionParameters: {
                shape: 'S1j'
              },
              SubstatementType: {},
              QueryResultsS3AccessGrantsConfiguration: {
                shape: 'S1l'
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              OutputLocation: {},
              EncryptionConfiguration: {
                shape: 'Sy'
              },
              ExpectedBucketOwner: {},
              AclConfiguration: {
                shape: 'S12'
              }
            }
          },
          Sy: {
            type: 'structure',
            required: ['EncryptionOption'],
            members: {
              EncryptionOption: {},
              KmsKey: {}
            }
          },
          S12: {
            type: 'structure',
            required: ['S3AclOption'],
            members: {
              S3AclOption: {}
            }
          },
          S14: {
            type: 'structure',
            members: {
              ResultReuseByAgeConfiguration: {
                type: 'structure',
                required: ['Enabled'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  MaxAgeInMinutes: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S18: {
            type: 'structure',
            members: {
              Database: {},
              Catalog: {}
            }
          },
          S1i: {
            type: 'structure',
            members: {
              SelectedEngineVersion: {},
              EffectiveEngineVersion: {}
            }
          },
          S1j: {
            type: 'list',
            member: {}
          },
          S1l: {
            type: 'structure',
            required: ['EnableS3AccessGrants', 'AuthenticationType'],
            members: {
              EnableS3AccessGrants: {
                type: 'boolean'
              },
              CreateUserLevelPrefix: {
                type: 'boolean'
              },
              AuthenticationType: {}
            }
          },
          S1v: {
            type: 'list',
            member: {
              type: 'structure',
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
          S2l: {
            type: 'structure',
            members: {
              ResultConfiguration: {
                shape: 'Sw'
              },
              EnforceWorkGroupConfiguration: {
                type: 'boolean'
              },
              PublishCloudWatchMetricsEnabled: {
                type: 'boolean'
              },
              BytesScannedCutoffPerQuery: {
                type: 'long'
              },
              RequesterPaysEnabled: {
                type: 'boolean'
              },
              EngineVersion: {
                shape: 'S1i'
              },
              AdditionalConfiguration: {},
              ExecutionRole: {},
              CustomerContentEncryptionConfiguration: {
                shape: 'S2o'
              },
              EnableMinimumEncryptionConfiguration: {
                type: 'boolean'
              },
              IdentityCenterConfiguration: {
                type: 'structure',
                members: {
                  EnableIdentityCenter: {
                    type: 'boolean'
                  },
                  IdentityCenterInstanceArn: {}
                }
              },
              QueryResultsS3AccessGrantsConfiguration: {
                shape: 'S1l'
              }
            }
          },
          S2o: {
            type: 'structure',
            required: ['KmsKey'],
            members: {
              KmsKey: {}
            }
          },
          S38: {
            type: 'structure',
            members: {
              NotebookId: {},
              Name: {},
              WorkGroup: {},
              CreationTime: {
                type: 'timestamp'
              },
              Type: {},
              LastModifiedTime: {
                type: 'timestamp'
              }
            }
          },
          S3f: {
            type: 'structure',
            members: {
              SubmissionDateTime: {
                type: 'timestamp'
              },
              CompletionDateTime: {
                type: 'timestamp'
              },
              State: {},
              StateChangeReason: {}
            }
          },
          S3h: {
            type: 'structure',
            members: {
              DpuExecutionInMillis: {
                type: 'long'
              },
              Progress: {}
            }
          },
          S3s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                WorkGroupNames: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S3x: {
            type: 'structure',
            required: ['Name', 'Status', 'TargetDpus', 'AllocatedDpus', 'CreationTime'],
            members: {
              Name: {},
              Status: {},
              TargetDpus: {
                type: 'integer'
              },
              AllocatedDpus: {
                type: 'integer'
              },
              LastAllocation: {
                type: 'structure',
                required: ['Status', 'RequestTime'],
                members: {
                  Status: {},
                  StatusMessage: {},
                  RequestTime: {
                    type: 'timestamp'
                  },
                  RequestCompletionTime: {
                    type: 'timestamp'
                  }
                }
              },
              LastSuccessfulAllocationTime: {
                type: 'timestamp'
              },
              CreationTime: {
                type: 'timestamp'
              }
            }
          },
          S48: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Description: {},
              Parameters: {
                shape: 'S22'
              }
            }
          },
          S51: {
            type: 'structure',
            members: {
              StageId: {
                type: 'long'
              },
              State: {},
              OutputBytes: {
                type: 'long'
              },
              OutputRows: {
                type: 'long'
              },
              InputBytes: {
                type: 'long'
              },
              InputRows: {
                type: 'long'
              },
              ExecutionTime: {
                type: 'long'
              },
              QueryStagePlan: {
                shape: 'S52'
              },
              SubStages: {
                type: 'list',
                member: {
                  shape: 'S51'
                }
              }
            }
          },
          S52: {
            type: 'structure',
            members: {
              Name: {},
              Identifier: {},
              Children: {
                type: 'list',
                member: {
                  shape: 'S52'
                }
              },
              RemoteSources: {
                type: 'list',
                member: {}
              }
            }
          },
          S58: {
            type: 'structure',
            required: ['MaxConcurrentDpus'],
            members: {
              CoordinatorDpuSize: {
                type: 'integer'
              },
              MaxConcurrentDpus: {
                type: 'integer'
              },
              DefaultExecutorDpuSize: {
                type: 'integer'
              },
              AdditionalConfigs: {
                shape: 'S22'
              },
              SparkProperties: {
                shape: 'S22'
              }
            }
          },
          S5d: {
            type: 'structure',
            members: {
              StartDateTime: {
                type: 'timestamp'
              },
              LastModifiedDateTime: {
                type: 'timestamp'
              },
              EndDateTime: {
                type: 'timestamp'
              },
              IdleSinceDateTime: {
                type: 'timestamp'
              },
              State: {},
              StateChangeReason: {}
            }
          },
          S5k: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              CreateTime: {
                type: 'timestamp'
              },
              LastAccessTime: {
                type: 'timestamp'
              },
              TableType: {},
              Columns: {
                shape: 'S5m'
              },
              PartitionKeys: {
                shape: 'S5m'
              },
              Parameters: {
                shape: 'S22'
              }
            }
          },
          S5m: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Type: {},
                Comment: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ac3af4c5022a3bc3a4ac701efff78a2c72abed7d.js.map