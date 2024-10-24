System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-08-14',
          endpointPrefix: 'kinesisanalytics',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Kinesis Analytics',
          serviceFullName: 'Amazon Kinesis Analytics',
          serviceId: 'Kinesis Analytics',
          signatureVersion: 'v4',
          targetPrefix: 'KinesisAnalytics_20150814',
          uid: 'kinesisanalytics-2015-08-14'
        },
        operations: {
          AddApplicationCloudWatchLoggingOption: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'CloudWatchLoggingOption'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                CloudWatchLoggingOption: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AddApplicationInput: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'Input'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                Input: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AddApplicationInputProcessingConfiguration: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'InputId', 'InputProcessingConfiguration'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                InputId: {},
                InputProcessingConfiguration: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AddApplicationOutput: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'Output'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                Output: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AddApplicationReferenceDataSource: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'ReferenceDataSource'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                ReferenceDataSource: {
                  type: 'structure',
                  required: ['TableName', 'ReferenceSchema'],
                  members: {
                    TableName: {},
                    S3ReferenceDataSource: {
                      type: 'structure',
                      required: ['BucketARN', 'FileKey', 'ReferenceRoleARN'],
                      members: {
                        BucketARN: {},
                        FileKey: {},
                        ReferenceRoleARN: {}
                      }
                    },
                    ReferenceSchema: {
                      shape: 'Si'
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
          CreateApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                ApplicationDescription: {},
                Inputs: {
                  type: 'list',
                  member: {
                    shape: 'S9'
                  }
                },
                Outputs: {
                  type: 'list',
                  member: {
                    shape: 'S12'
                  }
                },
                CloudWatchLoggingOptions: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                ApplicationCode: {},
                Tags: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationSummary'],
              members: {
                ApplicationSummary: {
                  shape: 'S1q'
                }
              }
            }
          },
          DeleteApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CreateTimestamp'],
              members: {
                ApplicationName: {},
                CreateTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApplicationCloudWatchLoggingOption: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'CloudWatchLoggingOptionId'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                CloudWatchLoggingOptionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApplicationInputProcessingConfiguration: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'InputId'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                InputId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApplicationOutput: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'OutputId'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                OutputId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApplicationReferenceDataSource: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'ReferenceId'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                ReferenceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationDetail'],
              members: {
                ApplicationDetail: {
                  type: 'structure',
                  required: ['ApplicationName', 'ApplicationARN', 'ApplicationStatus', 'ApplicationVersionId'],
                  members: {
                    ApplicationName: {},
                    ApplicationDescription: {},
                    ApplicationARN: {},
                    ApplicationStatus: {},
                    CreateTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdateTimestamp: {
                      type: 'timestamp'
                    },
                    InputDescriptions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          InputId: {},
                          NamePrefix: {},
                          InAppStreamNames: {
                            type: 'list',
                            member: {}
                          },
                          InputProcessingConfigurationDescription: {
                            type: 'structure',
                            members: {
                              InputLambdaProcessorDescription: {
                                type: 'structure',
                                members: {
                                  ResourceARN: {},
                                  RoleARN: {}
                                }
                              }
                            }
                          },
                          KinesisStreamsInputDescription: {
                            type: 'structure',
                            members: {
                              ResourceARN: {},
                              RoleARN: {}
                            }
                          },
                          KinesisFirehoseInputDescription: {
                            type: 'structure',
                            members: {
                              ResourceARN: {},
                              RoleARN: {}
                            }
                          },
                          InputSchema: {
                            shape: 'Si'
                          },
                          InputParallelism: {
                            shape: 'Sg'
                          },
                          InputStartingPositionConfiguration: {
                            shape: 'S2d'
                          }
                        }
                      }
                    },
                    OutputDescriptions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          OutputId: {},
                          Name: {},
                          KinesisStreamsOutputDescription: {
                            type: 'structure',
                            members: {
                              ResourceARN: {},
                              RoleARN: {}
                            }
                          },
                          KinesisFirehoseOutputDescription: {
                            type: 'structure',
                            members: {
                              ResourceARN: {},
                              RoleARN: {}
                            }
                          },
                          LambdaOutputDescription: {
                            type: 'structure',
                            members: {
                              ResourceARN: {},
                              RoleARN: {}
                            }
                          },
                          DestinationSchema: {
                            shape: 'S16'
                          }
                        }
                      }
                    },
                    ReferenceDataSourceDescriptions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['ReferenceId', 'TableName', 'S3ReferenceDataSourceDescription'],
                        members: {
                          ReferenceId: {},
                          TableName: {},
                          S3ReferenceDataSourceDescription: {
                            type: 'structure',
                            required: ['BucketARN', 'FileKey', 'ReferenceRoleARN'],
                            members: {
                              BucketARN: {},
                              FileKey: {},
                              ReferenceRoleARN: {}
                            }
                          },
                          ReferenceSchema: {
                            shape: 'Si'
                          }
                        }
                      }
                    },
                    CloudWatchLoggingOptionDescriptions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['LogStreamARN', 'RoleARN'],
                        members: {
                          CloudWatchLoggingOptionId: {},
                          LogStreamARN: {},
                          RoleARN: {}
                        }
                      }
                    },
                    ApplicationCode: {},
                    ApplicationVersionId: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          DiscoverInputSchema: {
            input: {
              type: 'structure',
              members: {
                ResourceARN: {},
                RoleARN: {},
                InputStartingPositionConfiguration: {
                  shape: 'S2d'
                },
                S3Configuration: {
                  type: 'structure',
                  required: ['RoleARN', 'BucketARN', 'FileKey'],
                  members: {
                    RoleARN: {},
                    BucketARN: {},
                    FileKey: {}
                  }
                },
                InputProcessingConfiguration: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InputSchema: {
                  shape: 'Si'
                },
                ParsedInputRecords: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {}
                  }
                },
                ProcessedInputRecords: {
                  type: 'list',
                  member: {}
                },
                RawInputRecords: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListApplications: {
            input: {
              type: 'structure',
              members: {
                Limit: {
                  type: 'integer'
                },
                ExclusiveStartApplicationName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationSummaries', 'HasMoreApplications'],
              members: {
                ApplicationSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S1q'
                  }
                },
                HasMoreApplications: {
                  type: 'boolean'
                }
              }
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
                  shape: 'S1l'
                }
              }
            }
          },
          StartApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'InputConfigurations'],
              members: {
                ApplicationName: {},
                InputConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'InputStartingPositionConfiguration'],
                    members: {
                      Id: {},
                      InputStartingPositionConfiguration: {
                        shape: 'S2d'
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
          StopApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {}
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
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S1l'
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
          UpdateApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId', 'ApplicationUpdate'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                ApplicationUpdate: {
                  type: 'structure',
                  members: {
                    InputUpdates: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['InputId'],
                        members: {
                          InputId: {},
                          NamePrefixUpdate: {},
                          InputProcessingConfigurationUpdate: {
                            type: 'structure',
                            required: ['InputLambdaProcessorUpdate'],
                            members: {
                              InputLambdaProcessorUpdate: {
                                type: 'structure',
                                members: {
                                  ResourceARNUpdate: {},
                                  RoleARNUpdate: {}
                                }
                              }
                            }
                          },
                          KinesisStreamsInputUpdate: {
                            type: 'structure',
                            members: {
                              ResourceARNUpdate: {},
                              RoleARNUpdate: {}
                            }
                          },
                          KinesisFirehoseInputUpdate: {
                            type: 'structure',
                            members: {
                              ResourceARNUpdate: {},
                              RoleARNUpdate: {}
                            }
                          },
                          InputSchemaUpdate: {
                            type: 'structure',
                            members: {
                              RecordFormatUpdate: {
                                shape: 'Sj'
                              },
                              RecordEncodingUpdate: {},
                              RecordColumnUpdates: {
                                shape: 'Ss'
                              }
                            }
                          },
                          InputParallelismUpdate: {
                            type: 'structure',
                            members: {
                              CountUpdate: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      }
                    },
                    ApplicationCodeUpdate: {},
                    OutputUpdates: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['OutputId'],
                        members: {
                          OutputId: {},
                          NameUpdate: {},
                          KinesisStreamsOutputUpdate: {
                            type: 'structure',
                            members: {
                              ResourceARNUpdate: {},
                              RoleARNUpdate: {}
                            }
                          },
                          KinesisFirehoseOutputUpdate: {
                            type: 'structure',
                            members: {
                              ResourceARNUpdate: {},
                              RoleARNUpdate: {}
                            }
                          },
                          LambdaOutputUpdate: {
                            type: 'structure',
                            members: {
                              ResourceARNUpdate: {},
                              RoleARNUpdate: {}
                            }
                          },
                          DestinationSchemaUpdate: {
                            shape: 'S16'
                          }
                        }
                      }
                    },
                    ReferenceDataSourceUpdates: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['ReferenceId'],
                        members: {
                          ReferenceId: {},
                          TableNameUpdate: {},
                          S3ReferenceDataSourceUpdate: {
                            type: 'structure',
                            members: {
                              BucketARNUpdate: {},
                              FileKeyUpdate: {},
                              ReferenceRoleARNUpdate: {}
                            }
                          },
                          ReferenceSchemaUpdate: {
                            shape: 'Si'
                          }
                        }
                      }
                    },
                    CloudWatchLoggingOptionUpdates: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['CloudWatchLoggingOptionId'],
                        members: {
                          CloudWatchLoggingOptionId: {},
                          LogStreamARNUpdate: {},
                          RoleARNUpdate: {}
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
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['LogStreamARN', 'RoleARN'],
            members: {
              LogStreamARN: {},
              RoleARN: {}
            }
          },
          S9: {
            type: 'structure',
            required: ['NamePrefix', 'InputSchema'],
            members: {
              NamePrefix: {},
              InputProcessingConfiguration: {
                shape: 'Sb'
              },
              KinesisStreamsInput: {
                type: 'structure',
                required: ['ResourceARN', 'RoleARN'],
                members: {
                  ResourceARN: {},
                  RoleARN: {}
                }
              },
              KinesisFirehoseInput: {
                type: 'structure',
                required: ['ResourceARN', 'RoleARN'],
                members: {
                  ResourceARN: {},
                  RoleARN: {}
                }
              },
              InputParallelism: {
                shape: 'Sg'
              },
              InputSchema: {
                shape: 'Si'
              }
            }
          },
          Sb: {
            type: 'structure',
            required: ['InputLambdaProcessor'],
            members: {
              InputLambdaProcessor: {
                type: 'structure',
                required: ['ResourceARN', 'RoleARN'],
                members: {
                  ResourceARN: {},
                  RoleARN: {}
                }
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              Count: {
                type: 'integer'
              }
            }
          },
          Si: {
            type: 'structure',
            required: ['RecordFormat', 'RecordColumns'],
            members: {
              RecordFormat: {
                shape: 'Sj'
              },
              RecordEncoding: {},
              RecordColumns: {
                shape: 'Ss'
              }
            }
          },
          Sj: {
            type: 'structure',
            required: ['RecordFormatType'],
            members: {
              RecordFormatType: {},
              MappingParameters: {
                type: 'structure',
                members: {
                  JSONMappingParameters: {
                    type: 'structure',
                    required: ['RecordRowPath'],
                    members: {
                      RecordRowPath: {}
                    }
                  },
                  CSVMappingParameters: {
                    type: 'structure',
                    required: ['RecordRowDelimiter', 'RecordColumnDelimiter'],
                    members: {
                      RecordRowDelimiter: {},
                      RecordColumnDelimiter: {}
                    }
                  }
                }
              }
            }
          },
          Ss: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'SqlType'],
              members: {
                Name: {},
                Mapping: {},
                SqlType: {}
              }
            }
          },
          S12: {
            type: 'structure',
            required: ['Name', 'DestinationSchema'],
            members: {
              Name: {},
              KinesisStreamsOutput: {
                type: 'structure',
                required: ['ResourceARN', 'RoleARN'],
                members: {
                  ResourceARN: {},
                  RoleARN: {}
                }
              },
              KinesisFirehoseOutput: {
                type: 'structure',
                required: ['ResourceARN', 'RoleARN'],
                members: {
                  ResourceARN: {},
                  RoleARN: {}
                }
              },
              LambdaOutput: {
                type: 'structure',
                required: ['ResourceARN', 'RoleARN'],
                members: {
                  ResourceARN: {},
                  RoleARN: {}
                }
              },
              DestinationSchema: {
                shape: 'S16'
              }
            }
          },
          S16: {
            type: 'structure',
            required: ['RecordFormatType'],
            members: {
              RecordFormatType: {}
            }
          },
          S1l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S1q: {
            type: 'structure',
            required: ['ApplicationName', 'ApplicationARN', 'ApplicationStatus'],
            members: {
              ApplicationName: {},
              ApplicationARN: {},
              ApplicationStatus: {}
            }
          },
          S2d: {
            type: 'structure',
            members: {
              InputStartingPosition: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=355dba0b773426860ebf5184e2d17947417b4f64.js.map