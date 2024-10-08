System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-11-01',
          endpointPrefix: 'query.timestream',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'Timestream Query',
          serviceFullName: 'Amazon Timestream Query',
          serviceId: 'Timestream Query',
          signatureVersion: 'v4',
          signingName: 'timestream',
          targetPrefix: 'Timestream_20181101',
          uid: 'timestream-query-2018-11-01'
        },
        operations: {
          CancelQuery: {
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
                CancellationMessage: {}
              }
            },
            endpointdiscovery: {
              required: true
            },
            idempotent: true
          },
          CreateScheduledQuery: {
            input: {
              type: 'structure',
              required: ['Name', 'QueryString', 'ScheduleConfiguration', 'NotificationConfiguration', 'ScheduledQueryExecutionRoleArn', 'ErrorReportConfiguration'],
              members: {
                Name: {},
                QueryString: {
                  shape: 'S7'
                },
                ScheduleConfiguration: {
                  shape: 'S8'
                },
                NotificationConfiguration: {
                  shape: 'Sa'
                },
                TargetConfiguration: {
                  shape: 'Sd'
                },
                ClientToken: {
                  shape: 'Sr',
                  idempotencyToken: true
                },
                ScheduledQueryExecutionRoleArn: {},
                Tags: {
                  shape: 'Ss'
                },
                KmsKeyId: {},
                ErrorReportConfiguration: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            endpointdiscovery: {
              required: true
            },
            idempotent: true
          },
          DeleteScheduledQuery: {
            input: {
              type: 'structure',
              required: ['ScheduledQueryArn'],
              members: {
                ScheduledQueryArn: {}
              }
            },
            endpointdiscovery: {
              required: true
            },
            idempotent: true
          },
          DescribeAccountSettings: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                MaxQueryTCU: {
                  type: 'integer'
                },
                QueryPricingModel: {}
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
          DescribeScheduledQuery: {
            input: {
              type: 'structure',
              required: ['ScheduledQueryArn'],
              members: {
                ScheduledQueryArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ScheduledQuery'],
              members: {
                ScheduledQuery: {
                  type: 'structure',
                  required: ['Arn', 'Name', 'QueryString', 'State', 'ScheduleConfiguration', 'NotificationConfiguration'],
                  members: {
                    Arn: {},
                    Name: {},
                    QueryString: {
                      shape: 'S7'
                    },
                    CreationTime: {
                      type: 'timestamp'
                    },
                    State: {},
                    PreviousInvocationTime: {
                      type: 'timestamp'
                    },
                    NextInvocationTime: {
                      type: 'timestamp'
                    },
                    ScheduleConfiguration: {
                      shape: 'S8'
                    },
                    NotificationConfiguration: {
                      shape: 'Sa'
                    },
                    TargetConfiguration: {
                      shape: 'Sd'
                    },
                    ScheduledQueryExecutionRoleArn: {},
                    KmsKeyId: {},
                    ErrorReportConfiguration: {
                      shape: 'Sx'
                    },
                    LastRunSummary: {
                      shape: 'S1i'
                    },
                    RecentlyFailedRuns: {
                      type: 'list',
                      member: {
                        shape: 'S1i'
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
          ExecuteScheduledQuery: {
            input: {
              type: 'structure',
              required: ['ScheduledQueryArn', 'InvocationTime'],
              members: {
                ScheduledQueryArn: {},
                InvocationTime: {
                  type: 'timestamp'
                },
                ClientToken: {
                  shape: 'Sr',
                  idempotencyToken: true
                }
              }
            },
            endpointdiscovery: {
              required: true
            },
            idempotent: true
          },
          ListScheduledQueries: {
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
              required: ['ScheduledQueries'],
              members: {
                ScheduledQueries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'Name', 'State'],
                    members: {
                      Arn: {},
                      Name: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      State: {},
                      PreviousInvocationTime: {
                        type: 'timestamp'
                      },
                      NextInvocationTime: {
                        type: 'timestamp'
                      },
                      ErrorReportConfiguration: {
                        shape: 'Sx'
                      },
                      TargetDestination: {
                        type: 'structure',
                        members: {
                          TimestreamDestination: {
                            type: 'structure',
                            members: {
                              DatabaseName: {},
                              TableName: {}
                            }
                          }
                        }
                      },
                      LastRunStatus: {}
                    }
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
                ResourceARN: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Ss'
                },
                NextToken: {}
              }
            },
            endpointdiscovery: {
              required: true
            }
          },
          PrepareQuery: {
            input: {
              type: 'structure',
              required: ['QueryString'],
              members: {
                QueryString: {
                  shape: 'S7'
                },
                ValidateOnly: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['QueryString', 'Columns', 'Parameters'],
              members: {
                QueryString: {
                  shape: 'S7'
                },
                Columns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Type: {
                        shape: 'S28'
                      },
                      DatabaseName: {},
                      TableName: {},
                      Aliased: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                Parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Type'],
                    members: {
                      Name: {},
                      Type: {
                        shape: 'S28'
                      }
                    }
                  }
                }
              }
            },
            endpointdiscovery: {
              required: true
            },
            idempotent: true
          },
          Query: {
            input: {
              type: 'structure',
              required: ['QueryString'],
              members: {
                QueryString: {
                  shape: 'S7'
                },
                ClientToken: {
                  idempotencyToken: true,
                  type: 'string',
                  sensitive: true
                },
                NextToken: {},
                MaxRows: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['QueryId', 'Rows', 'ColumnInfo'],
              members: {
                QueryId: {},
                NextToken: {},
                Rows: {
                  type: 'list',
                  member: {
                    shape: 'S2k'
                  }
                },
                ColumnInfo: {
                  shape: 'S2b'
                },
                QueryStatus: {
                  type: 'structure',
                  members: {
                    ProgressPercentage: {
                      type: 'double'
                    },
                    CumulativeBytesScanned: {
                      type: 'long'
                    },
                    CumulativeBytesMetered: {
                      type: 'long'
                    }
                  }
                }
              }
            },
            endpointdiscovery: {
              required: true
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
                  shape: 'Ss'
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
          UpdateAccountSettings: {
            input: {
              type: 'structure',
              members: {
                MaxQueryTCU: {
                  type: 'integer'
                },
                QueryPricingModel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MaxQueryTCU: {
                  type: 'integer'
                },
                QueryPricingModel: {}
              }
            },
            endpointdiscovery: {
              required: true
            },
            idempotent: true
          },
          UpdateScheduledQuery: {
            input: {
              type: 'structure',
              required: ['ScheduledQueryArn', 'State'],
              members: {
                ScheduledQueryArn: {},
                State: {}
              }
            },
            endpointdiscovery: {
              required: true
            }
          }
        },
        shapes: {
          S7: {
            type: 'string',
            sensitive: true
          },
          S8: {
            type: 'structure',
            required: ['ScheduleExpression'],
            members: {
              ScheduleExpression: {}
            }
          },
          Sa: {
            type: 'structure',
            required: ['SnsConfiguration'],
            members: {
              SnsConfiguration: {
                type: 'structure',
                required: ['TopicArn'],
                members: {
                  TopicArn: {}
                }
              }
            }
          },
          Sd: {
            type: 'structure',
            required: ['TimestreamConfiguration'],
            members: {
              TimestreamConfiguration: {
                type: 'structure',
                required: ['DatabaseName', 'TableName', 'TimeColumn', 'DimensionMappings'],
                members: {
                  DatabaseName: {},
                  TableName: {},
                  TimeColumn: {},
                  DimensionMappings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Name', 'DimensionValueType'],
                      members: {
                        Name: {},
                        DimensionValueType: {}
                      }
                    }
                  },
                  MultiMeasureMappings: {
                    type: 'structure',
                    required: ['MultiMeasureAttributeMappings'],
                    members: {
                      TargetMultiMeasureName: {},
                      MultiMeasureAttributeMappings: {
                        shape: 'Sl'
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
                          shape: 'Sl'
                        }
                      }
                    }
                  },
                  MeasureNameColumn: {}
                }
              }
            }
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SourceColumn', 'MeasureValueType'],
              members: {
                SourceColumn: {},
                TargetMultiMeasureAttributeName: {},
                MeasureValueType: {}
              }
            }
          },
          Sr: {
            type: 'string',
            sensitive: true
          },
          Ss: {
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
          Sx: {
            type: 'structure',
            required: ['S3Configuration'],
            members: {
              S3Configuration: {
                type: 'structure',
                required: ['BucketName'],
                members: {
                  BucketName: {},
                  ObjectKeyPrefix: {},
                  EncryptionOption: {}
                }
              }
            }
          },
          S1i: {
            type: 'structure',
            members: {
              InvocationTime: {
                type: 'timestamp'
              },
              TriggerTime: {
                type: 'timestamp'
              },
              RunStatus: {},
              ExecutionStats: {
                type: 'structure',
                members: {
                  ExecutionTimeInMillis: {
                    type: 'long'
                  },
                  DataWrites: {
                    type: 'long'
                  },
                  BytesMetered: {
                    type: 'long'
                  },
                  CumulativeBytesScanned: {
                    type: 'long'
                  },
                  RecordsIngested: {
                    type: 'long'
                  },
                  QueryResultRows: {
                    type: 'long'
                  }
                }
              },
              ErrorReportLocation: {
                type: 'structure',
                members: {
                  S3ReportLocation: {
                    type: 'structure',
                    members: {
                      BucketName: {},
                      ObjectKey: {}
                    }
                  }
                }
              },
              FailureReason: {}
            }
          },
          S28: {
            type: 'structure',
            members: {
              ScalarType: {},
              ArrayColumnInfo: {
                shape: 'S2a'
              },
              TimeSeriesMeasureValueColumnInfo: {
                shape: 'S2a'
              },
              RowColumnInfo: {
                shape: 'S2b'
              }
            }
          },
          S2a: {
            type: 'structure',
            required: ['Type'],
            members: {
              Name: {},
              Type: {
                shape: 'S28'
              }
            }
          },
          S2b: {
            type: 'list',
            member: {
              shape: 'S2a'
            }
          },
          S2k: {
            type: 'structure',
            required: ['Data'],
            members: {
              Data: {
                shape: 'S2l'
              }
            }
          },
          S2l: {
            type: 'list',
            member: {
              shape: 'S2m'
            }
          },
          S2m: {
            type: 'structure',
            members: {
              ScalarValue: {},
              TimeSeriesValue: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Time', 'Value'],
                  members: {
                    Time: {},
                    Value: {
                      shape: 'S2m'
                    }
                  }
                }
              },
              ArrayValue: {
                shape: 'S2l'
              },
              RowValue: {
                shape: 'S2k'
              },
              NullValue: {
                type: 'boolean'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1f9d3bbcf287c41bb6446243a2ac1d506a3242ff.js.map