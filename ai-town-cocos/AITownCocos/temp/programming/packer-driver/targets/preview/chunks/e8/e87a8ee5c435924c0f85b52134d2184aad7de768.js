System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-11-01',
          endpointPrefix: 'ingest.timestream',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceAbbreviation: 'Timestream Write',
          serviceFullName: 'Amazon Timestream Write',
          serviceId: 'Timestream Write',
          signatureVersion: 'v4',
          signingName: 'timestream',
          targetPrefix: 'Timestream_20181101',
          uid: 'timestream-write-2018-11-01'
        },
        operations: {
          CreateBatchLoadTask: {
            input: {
              type: 'structure',
              required: ['DataSourceConfiguration', 'ReportConfiguration', 'TargetDatabaseName', 'TargetTableName'],
              members: {
                ClientToken: {
                  idempotencyToken: true,
                  type: 'string',
                  sensitive: true
                },
                DataModelConfiguration: {
                  shape: 'S3'
                },
                DataSourceConfiguration: {
                  shape: 'Sk'
                },
                ReportConfiguration: {
                  shape: 'Sq'
                },
                TargetDatabaseName: {},
                TargetTableName: {},
                RecordVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TaskId'],
              members: {
                TaskId: {}
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          CreateDatabase: {
            input: {
              type: 'structure',
              required: ['DatabaseName'],
              members: {
                DatabaseName: {},
                KmsKeyId: {},
                Tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Database: {
                  shape: 'S15'
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          CreateTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                DatabaseName: {},
                TableName: {},
                RetentionProperties: {
                  shape: 'S1b'
                },
                Tags: {
                  shape: 'S10'
                },
                MagneticStoreWriteProperties: {
                  shape: 'S1e'
                },
                Schema: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Table: {
                  shape: 'S1n'
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          DeleteDatabase: {
            input: {
              type: 'structure',
              required: ['DatabaseName'],
              members: {
                DatabaseName: {}
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          DeleteTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                DatabaseName: {},
                TableName: {}
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          DescribeBatchLoadTask: {
            input: {
              type: 'structure',
              required: ['TaskId'],
              members: {
                TaskId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['BatchLoadTaskDescription'],
              members: {
                BatchLoadTaskDescription: {
                  type: 'structure',
                  members: {
                    TaskId: {},
                    ErrorMessage: {},
                    DataSourceConfiguration: {
                      shape: 'Sk'
                    },
                    ProgressReport: {
                      type: 'structure',
                      members: {
                        RecordsProcessed: {
                          type: 'long'
                        },
                        RecordsIngested: {
                          type: 'long'
                        },
                        ParseFailures: {
                          type: 'long'
                        },
                        RecordIngestionFailures: {
                          type: 'long'
                        },
                        FileFailures: {
                          type: 'long'
                        },
                        BytesMetered: {
                          type: 'long'
                        }
                      }
                    },
                    ReportConfiguration: {
                      shape: 'Sq'
                    },
                    DataModelConfiguration: {
                      shape: 'S3'
                    },
                    TargetDatabaseName: {},
                    TargetTableName: {},
                    TaskStatus: {},
                    RecordVersion: {
                      type: 'long'
                    },
                    CreationTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    ResumableUntil: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          DescribeDatabase: {
            input: {
              type: 'structure',
              required: ['DatabaseName'],
              members: {
                DatabaseName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Database: {
                  shape: 'S15'
                }
              }
            },
            endpointdiscovery: {
              required: true
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
          DescribeTable: {
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
              members: {
                Table: {
                  shape: 'S1n'
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          ListBatchLoadTasks: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                TaskStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                BatchLoadTasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TaskId: {},
                      TaskStatus: {},
                      DatabaseName: {},
                      TableName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      ResumableUntil: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          ListDatabases: {
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
                Databases: {
                  type: 'list',
                  member: {
                    shape: 'S15'
                  }
                },
                NextToken: {}
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          ListTables: {
            input: {
              type: 'structure',
              members: {
                DatabaseName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tables: {
                  type: 'list',
                  member: {
                    shape: 'S1n'
                  }
                },
                NextToken: {}
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S10'
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          ResumeBatchLoadTask: {
            input: {
              type: 'structure',
              required: ['TaskId'],
              members: {
                TaskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpointdiscovery: {
              required: true
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpointdiscovery: {
              required: true
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
            },
            endpointdiscovery: {
              required: true
            }
          },
          UpdateDatabase: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'KmsKeyId'],
              members: {
                DatabaseName: {},
                KmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Database: {
                  shape: 'S15'
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          UpdateTable: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                DatabaseName: {},
                TableName: {},
                RetentionProperties: {
                  shape: 'S1b'
                },
                MagneticStoreWriteProperties: {
                  shape: 'S1e'
                },
                Schema: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Table: {
                  shape: 'S1n'
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          WriteRecords: {
            input: {
              type: 'structure',
              required: ['DatabaseName', 'TableName', 'Records'],
              members: {
                DatabaseName: {},
                TableName: {},
                CommonAttributes: {
                  shape: 'S2v'
                },
                Records: {
                  type: 'list',
                  member: {
                    shape: 'S2v'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordsIngested: {
                  type: 'structure',
                  members: {
                    Total: {
                      type: 'integer'
                    },
                    MemoryStore: {
                      type: 'integer'
                    },
                    MagneticStore: {
                      type: 'integer'
                    }
                  }
                }
              }
            },
            endpointdiscovery: {
              required: true
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              DataModel: {
                type: 'structure',
                required: ['DimensionMappings'],
                members: {
                  TimeColumn: {},
                  TimeUnit: {},
                  DimensionMappings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        SourceColumn: {},
                        DestinationColumn: {}
                      }
                    }
                  },
                  MultiMeasureMappings: {
                    type: 'structure',
                    required: ['MultiMeasureAttributeMappings'],
                    members: {
                      TargetMultiMeasureName: {},
                      MultiMeasureAttributeMappings: {
                        shape: 'Sb'
                      }
                    }
                  },
                  MixedMeasureMappings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['MeasureValueType'],
                      members: {
                        MeasureName: {},
                        SourceColumn: {},
                        TargetMeasureName: {},
                        MeasureValueType: {},
                        MultiMeasureAttributeMappings: {
                          shape: 'Sb'
                        }
                      }
                    }
                  },
                  MeasureNameColumn: {}
                }
              },
              DataModelS3Configuration: {
                type: 'structure',
                members: {
                  BucketName: {},
                  ObjectKey: {}
                }
              }
            }
          },
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SourceColumn'],
              members: {
                SourceColumn: {},
                TargetMultiMeasureAttributeName: {},
                MeasureValueType: {}
              }
            }
          },
          Sk: {
            type: 'structure',
            required: ['DataSourceS3Configuration', 'DataFormat'],
            members: {
              DataSourceS3Configuration: {
                type: 'structure',
                required: ['BucketName'],
                members: {
                  BucketName: {},
                  ObjectKeyPrefix: {}
                }
              },
              CsvConfiguration: {
                type: 'structure',
                members: {
                  ColumnSeparator: {},
                  EscapeChar: {},
                  QuoteChar: {},
                  NullValue: {},
                  TrimWhiteSpace: {
                    type: 'boolean'
                  }
                }
              },
              DataFormat: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              ReportS3Configuration: {
                type: 'structure',
                required: ['BucketName'],
                members: {
                  BucketName: {},
                  ObjectKeyPrefix: {},
                  EncryptionOption: {},
                  KmsKeyId: {}
                }
              }
            }
          },
          S10: {
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
          S15: {
            type: 'structure',
            members: {
              Arn: {},
              DatabaseName: {},
              TableCount: {
                type: 'long'
              },
              KmsKeyId: {},
              CreationTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              }
            }
          },
          S1b: {
            type: 'structure',
            required: ['MemoryStoreRetentionPeriodInHours', 'MagneticStoreRetentionPeriodInDays'],
            members: {
              MemoryStoreRetentionPeriodInHours: {
                type: 'long'
              },
              MagneticStoreRetentionPeriodInDays: {
                type: 'long'
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['EnableMagneticStoreWrites'],
            members: {
              EnableMagneticStoreWrites: {
                type: 'boolean'
              },
              MagneticStoreRejectedDataLocation: {
                type: 'structure',
                members: {
                  S3Configuration: {
                    type: 'structure',
                    members: {
                      BucketName: {},
                      ObjectKeyPrefix: {},
                      EncryptionOption: {},
                      KmsKeyId: {}
                    }
                  }
                }
              }
            }
          },
          S1h: {
            type: 'structure',
            members: {
              CompositePartitionKey: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Type'],
                  members: {
                    Type: {},
                    Name: {},
                    EnforcementInRecord: {}
                  }
                }
              }
            }
          },
          S1n: {
            type: 'structure',
            members: {
              Arn: {},
              TableName: {},
              DatabaseName: {},
              TableStatus: {},
              RetentionProperties: {
                shape: 'S1b'
              },
              CreationTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              },
              MagneticStoreWriteProperties: {
                shape: 'S1e'
              },
              Schema: {
                shape: 'S1h'
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              Dimensions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Value'],
                  members: {
                    Name: {},
                    Value: {},
                    DimensionValueType: {}
                  }
                }
              },
              MeasureName: {},
              MeasureValue: {},
              MeasureValueType: {},
              Time: {},
              TimeUnit: {},
              Version: {
                type: 'long'
              },
              MeasureValues: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Value', 'Type'],
                  members: {
                    Name: {},
                    Value: {},
                    Type: {}
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e87a8ee5c435924c0f85b52134d2184aad7de768.js.map