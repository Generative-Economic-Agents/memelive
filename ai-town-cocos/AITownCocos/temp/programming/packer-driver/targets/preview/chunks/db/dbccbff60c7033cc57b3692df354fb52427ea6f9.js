System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-23',
          endpointPrefix: 'kinesisanalytics',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Kinesis Analytics V2',
          serviceFullName: 'Amazon Kinesis Analytics',
          serviceId: 'Kinesis Analytics V2',
          signatureVersion: 'v4',
          signingName: 'kinesisanalytics',
          targetPrefix: 'KinesisAnalytics_20180523',
          uid: 'kinesisanalyticsv2-2018-05-23'
        },
        operations: {
          AddApplicationCloudWatchLoggingOption: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CloudWatchLoggingOption'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                CloudWatchLoggingOption: {
                  shape: 'S4'
                },
                ConditionalToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                },
                CloudWatchLoggingOptionDescriptions: {
                  shape: 'S9'
                }
              }
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
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                },
                InputDescriptions: {
                  shape: 'S12'
                }
              }
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
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                },
                InputId: {},
                InputProcessingConfigurationDescription: {
                  shape: 'S15'
                }
              }
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
                  shape: 'S1e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                },
                OutputDescriptions: {
                  shape: 'S1k'
                }
              }
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
                  shape: 'S1q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                },
                ReferenceDataSourceDescriptions: {
                  shape: 'S1w'
                }
              }
            }
          },
          AddApplicationVpcConfiguration: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'VpcConfiguration'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                VpcConfiguration: {
                  shape: 'S20'
                },
                ConditionalToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                },
                VpcConfigurationDescription: {
                  shape: 'S26'
                }
              }
            }
          },
          CreateApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'RuntimeEnvironment', 'ServiceExecutionRole'],
              members: {
                ApplicationName: {},
                ApplicationDescription: {},
                RuntimeEnvironment: {},
                ServiceExecutionRole: {},
                ApplicationConfiguration: {
                  type: 'structure',
                  members: {
                    SqlApplicationConfiguration: {
                      type: 'structure',
                      members: {
                        Inputs: {
                          type: 'list',
                          member: {
                            shape: 'Se'
                          }
                        },
                        Outputs: {
                          type: 'list',
                          member: {
                            shape: 'S1e'
                          }
                        },
                        ReferenceDataSources: {
                          type: 'list',
                          member: {
                            shape: 'S1q'
                          }
                        }
                      }
                    },
                    FlinkApplicationConfiguration: {
                      type: 'structure',
                      members: {
                        CheckpointConfiguration: {
                          type: 'structure',
                          required: ['ConfigurationType'],
                          members: {
                            ConfigurationType: {},
                            CheckpointingEnabled: {
                              type: 'boolean'
                            },
                            CheckpointInterval: {
                              type: 'long'
                            },
                            MinPauseBetweenCheckpoints: {
                              type: 'long'
                            }
                          }
                        },
                        MonitoringConfiguration: {
                          type: 'structure',
                          required: ['ConfigurationType'],
                          members: {
                            ConfigurationType: {},
                            MetricsLevel: {},
                            LogLevel: {}
                          }
                        },
                        ParallelismConfiguration: {
                          type: 'structure',
                          required: ['ConfigurationType'],
                          members: {
                            ConfigurationType: {},
                            Parallelism: {
                              type: 'integer'
                            },
                            ParallelismPerKPU: {
                              type: 'integer'
                            },
                            AutoScalingEnabled: {
                              type: 'boolean'
                            }
                          }
                        }
                      }
                    },
                    EnvironmentProperties: {
                      type: 'structure',
                      required: ['PropertyGroups'],
                      members: {
                        PropertyGroups: {
                          shape: 'S2t'
                        }
                      }
                    },
                    ApplicationCodeConfiguration: {
                      type: 'structure',
                      required: ['CodeContentType'],
                      members: {
                        CodeContent: {
                          type: 'structure',
                          members: {
                            TextContent: {},
                            ZipFileContent: {
                              type: 'blob'
                            },
                            S3ContentLocation: {
                              shape: 'S32'
                            }
                          }
                        },
                        CodeContentType: {}
                      }
                    },
                    ApplicationSnapshotConfiguration: {
                      type: 'structure',
                      required: ['SnapshotsEnabled'],
                      members: {
                        SnapshotsEnabled: {
                          type: 'boolean'
                        }
                      }
                    },
                    VpcConfigurations: {
                      type: 'list',
                      member: {
                        shape: 'S20'
                      }
                    },
                    ZeppelinApplicationConfiguration: {
                      type: 'structure',
                      members: {
                        MonitoringConfiguration: {
                          type: 'structure',
                          required: ['LogLevel'],
                          members: {
                            LogLevel: {}
                          }
                        },
                        CatalogConfiguration: {
                          type: 'structure',
                          required: ['GlueDataCatalogConfiguration'],
                          members: {
                            GlueDataCatalogConfiguration: {
                              type: 'structure',
                              required: ['DatabaseARN'],
                              members: {
                                DatabaseARN: {}
                              }
                            }
                          }
                        },
                        DeployAsApplicationConfiguration: {
                          type: 'structure',
                          required: ['S3ContentLocation'],
                          members: {
                            S3ContentLocation: {
                              type: 'structure',
                              required: ['BucketARN'],
                              members: {
                                BucketARN: {},
                                BasePath: {}
                              }
                            }
                          }
                        },
                        CustomArtifactsConfiguration: {
                          shape: 'S3f'
                        }
                      }
                    }
                  }
                },
                CloudWatchLoggingOptions: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                Tags: {
                  shape: 'S3n'
                },
                ApplicationMode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationDetail'],
              members: {
                ApplicationDetail: {
                  shape: 'S3t'
                }
              }
            }
          },
          CreateApplicationPresignedUrl: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'UrlType'],
              members: {
                ApplicationName: {},
                UrlType: {},
                SessionExpirationDurationInSeconds: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthorizedUrl: {}
              }
            }
          },
          CreateApplicationSnapshot: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'SnapshotName'],
              members: {
                ApplicationName: {},
                SnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
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
              required: ['ApplicationName', 'CloudWatchLoggingOptionId'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                CloudWatchLoggingOptionId: {},
                ConditionalToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                },
                CloudWatchLoggingOptionDescriptions: {
                  shape: 'S9'
                }
              }
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
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                }
              }
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
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                }
              }
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
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                }
              }
            }
          },
          DeleteApplicationSnapshot: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'SnapshotName', 'SnapshotCreationTimestamp'],
              members: {
                ApplicationName: {},
                SnapshotName: {},
                SnapshotCreationTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApplicationVpcConfiguration: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'VpcConfigurationId'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                VpcConfigurationId: {},
                ConditionalToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationVersionId: {
                  type: 'long'
                }
              }
            }
          },
          DescribeApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                IncludeAdditionalDetails: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationDetail'],
              members: {
                ApplicationDetail: {
                  shape: 'S3t'
                }
              }
            }
          },
          DescribeApplicationSnapshot: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'SnapshotName'],
              members: {
                ApplicationName: {},
                SnapshotName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SnapshotDetails'],
              members: {
                SnapshotDetails: {
                  shape: 'S5g'
                }
              }
            }
          },
          DescribeApplicationVersion: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'ApplicationVersionId'],
              members: {
                ApplicationName: {},
                ApplicationVersionId: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationVersionDetail: {
                  shape: 'S3t'
                }
              }
            }
          },
          DiscoverInputSchema: {
            input: {
              type: 'structure',
              required: ['ServiceExecutionRole'],
              members: {
                ResourceARN: {},
                ServiceExecutionRole: {},
                InputStartingPositionConfiguration: {
                  shape: 'S19'
                },
                S3Configuration: {
                  type: 'structure',
                  required: ['BucketARN', 'FileKey'],
                  members: {
                    BucketARN: {},
                    FileKey: {}
                  }
                },
                InputProcessingConfiguration: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InputSchema: {
                  shape: 'Sm'
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
          ListApplicationSnapshots: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SnapshotSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S5g'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListApplicationVersions: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationVersionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ApplicationVersionId', 'ApplicationStatus'],
                    members: {
                      ApplicationVersionId: {
                        type: 'long'
                      },
                      ApplicationStatus: {}
                    }
                  }
                },
                NextToken: {}
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
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationSummaries'],
              members: {
                ApplicationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ApplicationName', 'ApplicationARN', 'ApplicationStatus', 'ApplicationVersionId', 'RuntimeEnvironment'],
                    members: {
                      ApplicationName: {},
                      ApplicationARN: {},
                      ApplicationStatus: {},
                      ApplicationVersionId: {
                        type: 'long'
                      },
                      RuntimeEnvironment: {},
                      ApplicationMode: {}
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
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S3n'
                }
              }
            }
          },
          RollbackApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'CurrentApplicationVersionId'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationDetail'],
              members: {
                ApplicationDetail: {
                  shape: 'S3t'
                }
              }
            }
          },
          StartApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                RunConfiguration: {
                  type: 'structure',
                  members: {
                    FlinkRunConfiguration: {
                      shape: 'S47'
                    },
                    SqlRunConfigurations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['InputId', 'InputStartingPositionConfiguration'],
                        members: {
                          InputId: {},
                          InputStartingPositionConfiguration: {
                            shape: 'S19'
                          }
                        }
                      }
                    },
                    ApplicationRestoreConfiguration: {
                      shape: 'S44'
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
                ApplicationName: {},
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
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S3n'
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
              required: ['ApplicationName'],
              members: {
                ApplicationName: {},
                CurrentApplicationVersionId: {
                  type: 'long'
                },
                ApplicationConfigurationUpdate: {
                  type: 'structure',
                  members: {
                    SqlApplicationConfigurationUpdate: {
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
                                    required: ['ResourceARNUpdate'],
                                    members: {
                                      ResourceARNUpdate: {}
                                    }
                                  }
                                }
                              },
                              KinesisStreamsInputUpdate: {
                                type: 'structure',
                                required: ['ResourceARNUpdate'],
                                members: {
                                  ResourceARNUpdate: {}
                                }
                              },
                              KinesisFirehoseInputUpdate: {
                                type: 'structure',
                                required: ['ResourceARNUpdate'],
                                members: {
                                  ResourceARNUpdate: {}
                                }
                              },
                              InputSchemaUpdate: {
                                type: 'structure',
                                members: {
                                  RecordFormatUpdate: {
                                    shape: 'Sn'
                                  },
                                  RecordEncodingUpdate: {},
                                  RecordColumnUpdates: {
                                    shape: 'Sw'
                                  }
                                }
                              },
                              InputParallelismUpdate: {
                                type: 'structure',
                                required: ['CountUpdate'],
                                members: {
                                  CountUpdate: {
                                    type: 'integer'
                                  }
                                }
                              }
                            }
                          }
                        },
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
                                required: ['ResourceARNUpdate'],
                                members: {
                                  ResourceARNUpdate: {}
                                }
                              },
                              KinesisFirehoseOutputUpdate: {
                                type: 'structure',
                                required: ['ResourceARNUpdate'],
                                members: {
                                  ResourceARNUpdate: {}
                                }
                              },
                              LambdaOutputUpdate: {
                                type: 'structure',
                                required: ['ResourceARNUpdate'],
                                members: {
                                  ResourceARNUpdate: {}
                                }
                              },
                              DestinationSchemaUpdate: {
                                shape: 'S1i'
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
                                  FileKeyUpdate: {}
                                }
                              },
                              ReferenceSchemaUpdate: {
                                shape: 'Sm'
                              }
                            }
                          }
                        }
                      }
                    },
                    ApplicationCodeConfigurationUpdate: {
                      type: 'structure',
                      members: {
                        CodeContentTypeUpdate: {},
                        CodeContentUpdate: {
                          type: 'structure',
                          members: {
                            TextContentUpdate: {},
                            ZipFileContentUpdate: {
                              type: 'blob'
                            },
                            S3ContentLocationUpdate: {
                              type: 'structure',
                              members: {
                                BucketARNUpdate: {},
                                FileKeyUpdate: {},
                                ObjectVersionUpdate: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    FlinkApplicationConfigurationUpdate: {
                      type: 'structure',
                      members: {
                        CheckpointConfigurationUpdate: {
                          type: 'structure',
                          members: {
                            ConfigurationTypeUpdate: {},
                            CheckpointingEnabledUpdate: {
                              type: 'boolean'
                            },
                            CheckpointIntervalUpdate: {
                              type: 'long'
                            },
                            MinPauseBetweenCheckpointsUpdate: {
                              type: 'long'
                            }
                          }
                        },
                        MonitoringConfigurationUpdate: {
                          type: 'structure',
                          members: {
                            ConfigurationTypeUpdate: {},
                            MetricsLevelUpdate: {},
                            LogLevelUpdate: {}
                          }
                        },
                        ParallelismConfigurationUpdate: {
                          type: 'structure',
                          members: {
                            ConfigurationTypeUpdate: {},
                            ParallelismUpdate: {
                              type: 'integer'
                            },
                            ParallelismPerKPUUpdate: {
                              type: 'integer'
                            },
                            AutoScalingEnabledUpdate: {
                              type: 'boolean'
                            }
                          }
                        }
                      }
                    },
                    EnvironmentPropertyUpdates: {
                      type: 'structure',
                      required: ['PropertyGroups'],
                      members: {
                        PropertyGroups: {
                          shape: 'S2t'
                        }
                      }
                    },
                    ApplicationSnapshotConfigurationUpdate: {
                      type: 'structure',
                      required: ['SnapshotsEnabledUpdate'],
                      members: {
                        SnapshotsEnabledUpdate: {
                          type: 'boolean'
                        }
                      }
                    },
                    VpcConfigurationUpdates: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['VpcConfigurationId'],
                        members: {
                          VpcConfigurationId: {},
                          SubnetIdUpdates: {
                            shape: 'S21'
                          },
                          SecurityGroupIdUpdates: {
                            shape: 'S23'
                          }
                        }
                      }
                    },
                    ZeppelinApplicationConfigurationUpdate: {
                      type: 'structure',
                      members: {
                        MonitoringConfigurationUpdate: {
                          type: 'structure',
                          required: ['LogLevelUpdate'],
                          members: {
                            LogLevelUpdate: {}
                          }
                        },
                        CatalogConfigurationUpdate: {
                          type: 'structure',
                          required: ['GlueDataCatalogConfigurationUpdate'],
                          members: {
                            GlueDataCatalogConfigurationUpdate: {
                              type: 'structure',
                              required: ['DatabaseARNUpdate'],
                              members: {
                                DatabaseARNUpdate: {}
                              }
                            }
                          }
                        },
                        DeployAsApplicationConfigurationUpdate: {
                          type: 'structure',
                          members: {
                            S3ContentLocationUpdate: {
                              type: 'structure',
                              members: {
                                BucketARNUpdate: {},
                                BasePathUpdate: {}
                              }
                            }
                          }
                        },
                        CustomArtifactsConfigurationUpdate: {
                          shape: 'S3f'
                        }
                      }
                    }
                  }
                },
                ServiceExecutionRoleUpdate: {},
                RunConfigurationUpdate: {
                  type: 'structure',
                  members: {
                    FlinkRunConfiguration: {
                      shape: 'S47'
                    },
                    ApplicationRestoreConfiguration: {
                      shape: 'S44'
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
                      LogStreamARNUpdate: {}
                    }
                  }
                },
                ConditionalToken: {},
                RuntimeEnvironmentUpdate: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationDetail'],
              members: {
                ApplicationDetail: {
                  shape: 'S3t'
                }
              }
            }
          },
          UpdateApplicationMaintenanceConfiguration: {
            input: {
              type: 'structure',
              required: ['ApplicationName', 'ApplicationMaintenanceConfigurationUpdate'],
              members: {
                ApplicationName: {},
                ApplicationMaintenanceConfigurationUpdate: {
                  type: 'structure',
                  required: ['ApplicationMaintenanceWindowStartTimeUpdate'],
                  members: {
                    ApplicationMaintenanceWindowStartTimeUpdate: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationARN: {},
                ApplicationMaintenanceConfigurationDescription: {
                  shape: 'S4o'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['LogStreamARN'],
            members: {
              LogStreamARN: {}
            }
          },
          S9: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['LogStreamARN'],
              members: {
                CloudWatchLoggingOptionId: {},
                LogStreamARN: {},
                RoleARN: {}
              }
            }
          },
          Se: {
            type: 'structure',
            required: ['NamePrefix', 'InputSchema'],
            members: {
              NamePrefix: {},
              InputProcessingConfiguration: {
                shape: 'Sg'
              },
              KinesisStreamsInput: {
                type: 'structure',
                required: ['ResourceARN'],
                members: {
                  ResourceARN: {}
                }
              },
              KinesisFirehoseInput: {
                type: 'structure',
                required: ['ResourceARN'],
                members: {
                  ResourceARN: {}
                }
              },
              InputParallelism: {
                shape: 'Sk'
              },
              InputSchema: {
                shape: 'Sm'
              }
            }
          },
          Sg: {
            type: 'structure',
            required: ['InputLambdaProcessor'],
            members: {
              InputLambdaProcessor: {
                type: 'structure',
                required: ['ResourceARN'],
                members: {
                  ResourceARN: {}
                }
              }
            }
          },
          Sk: {
            type: 'structure',
            members: {
              Count: {
                type: 'integer'
              }
            }
          },
          Sm: {
            type: 'structure',
            required: ['RecordFormat', 'RecordColumns'],
            members: {
              RecordFormat: {
                shape: 'Sn'
              },
              RecordEncoding: {},
              RecordColumns: {
                shape: 'Sw'
              }
            }
          },
          Sn: {
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
          Sw: {
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
                  shape: 'S15'
                },
                KinesisStreamsInputDescription: {
                  type: 'structure',
                  required: ['ResourceARN'],
                  members: {
                    ResourceARN: {},
                    RoleARN: {}
                  }
                },
                KinesisFirehoseInputDescription: {
                  type: 'structure',
                  required: ['ResourceARN'],
                  members: {
                    ResourceARN: {},
                    RoleARN: {}
                  }
                },
                InputSchema: {
                  shape: 'Sm'
                },
                InputParallelism: {
                  shape: 'Sk'
                },
                InputStartingPositionConfiguration: {
                  shape: 'S19'
                }
              }
            }
          },
          S15: {
            type: 'structure',
            members: {
              InputLambdaProcessorDescription: {
                type: 'structure',
                required: ['ResourceARN'],
                members: {
                  ResourceARN: {},
                  RoleARN: {}
                }
              }
            }
          },
          S19: {
            type: 'structure',
            members: {
              InputStartingPosition: {}
            }
          },
          S1e: {
            type: 'structure',
            required: ['Name', 'DestinationSchema'],
            members: {
              Name: {},
              KinesisStreamsOutput: {
                type: 'structure',
                required: ['ResourceARN'],
                members: {
                  ResourceARN: {}
                }
              },
              KinesisFirehoseOutput: {
                type: 'structure',
                required: ['ResourceARN'],
                members: {
                  ResourceARN: {}
                }
              },
              LambdaOutput: {
                type: 'structure',
                required: ['ResourceARN'],
                members: {
                  ResourceARN: {}
                }
              },
              DestinationSchema: {
                shape: 'S1i'
              }
            }
          },
          S1i: {
            type: 'structure',
            required: ['RecordFormatType'],
            members: {
              RecordFormatType: {}
            }
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                OutputId: {},
                Name: {},
                KinesisStreamsOutputDescription: {
                  type: 'structure',
                  required: ['ResourceARN'],
                  members: {
                    ResourceARN: {},
                    RoleARN: {}
                  }
                },
                KinesisFirehoseOutputDescription: {
                  type: 'structure',
                  required: ['ResourceARN'],
                  members: {
                    ResourceARN: {},
                    RoleARN: {}
                  }
                },
                LambdaOutputDescription: {
                  type: 'structure',
                  required: ['ResourceARN'],
                  members: {
                    ResourceARN: {},
                    RoleARN: {}
                  }
                },
                DestinationSchema: {
                  shape: 'S1i'
                }
              }
            }
          },
          S1q: {
            type: 'structure',
            required: ['TableName', 'ReferenceSchema'],
            members: {
              TableName: {},
              S3ReferenceDataSource: {
                type: 'structure',
                members: {
                  BucketARN: {},
                  FileKey: {}
                }
              },
              ReferenceSchema: {
                shape: 'Sm'
              }
            }
          },
          S1w: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ReferenceId', 'TableName', 'S3ReferenceDataSourceDescription'],
              members: {
                ReferenceId: {},
                TableName: {},
                S3ReferenceDataSourceDescription: {
                  type: 'structure',
                  required: ['BucketARN', 'FileKey'],
                  members: {
                    BucketARN: {},
                    FileKey: {},
                    ReferenceRoleARN: {}
                  }
                },
                ReferenceSchema: {
                  shape: 'Sm'
                }
              }
            }
          },
          S20: {
            type: 'structure',
            required: ['SubnetIds', 'SecurityGroupIds'],
            members: {
              SubnetIds: {
                shape: 'S21'
              },
              SecurityGroupIds: {
                shape: 'S23'
              }
            }
          },
          S21: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'list',
            member: {}
          },
          S26: {
            type: 'structure',
            required: ['VpcConfigurationId', 'VpcId', 'SubnetIds', 'SecurityGroupIds'],
            members: {
              VpcConfigurationId: {},
              VpcId: {},
              SubnetIds: {
                shape: 'S21'
              },
              SecurityGroupIds: {
                shape: 'S23'
              }
            }
          },
          S2t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['PropertyGroupId', 'PropertyMap'],
              members: {
                PropertyGroupId: {},
                PropertyMap: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          S32: {
            type: 'structure',
            required: ['BucketARN', 'FileKey'],
            members: {
              BucketARN: {},
              FileKey: {},
              ObjectVersion: {}
            }
          },
          S3f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ArtifactType'],
              members: {
                ArtifactType: {},
                S3ContentLocation: {
                  shape: 'S32'
                },
                MavenReference: {
                  shape: 'S3i'
                }
              }
            }
          },
          S3i: {
            type: 'structure',
            required: ['GroupId', 'ArtifactId', 'Version'],
            members: {
              GroupId: {},
              ArtifactId: {},
              Version: {}
            }
          },
          S3n: {
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
          S3t: {
            type: 'structure',
            required: ['ApplicationARN', 'ApplicationName', 'RuntimeEnvironment', 'ApplicationStatus', 'ApplicationVersionId'],
            members: {
              ApplicationARN: {},
              ApplicationDescription: {},
              ApplicationName: {},
              RuntimeEnvironment: {},
              ServiceExecutionRole: {},
              ApplicationStatus: {},
              ApplicationVersionId: {
                type: 'long'
              },
              CreateTimestamp: {
                type: 'timestamp'
              },
              LastUpdateTimestamp: {
                type: 'timestamp'
              },
              ApplicationConfigurationDescription: {
                type: 'structure',
                members: {
                  SqlApplicationConfigurationDescription: {
                    type: 'structure',
                    members: {
                      InputDescriptions: {
                        shape: 'S12'
                      },
                      OutputDescriptions: {
                        shape: 'S1k'
                      },
                      ReferenceDataSourceDescriptions: {
                        shape: 'S1w'
                      }
                    }
                  },
                  ApplicationCodeConfigurationDescription: {
                    type: 'structure',
                    required: ['CodeContentType'],
                    members: {
                      CodeContentType: {},
                      CodeContentDescription: {
                        type: 'structure',
                        members: {
                          TextContent: {},
                          CodeMD5: {},
                          CodeSize: {
                            type: 'long'
                          },
                          S3ApplicationCodeLocationDescription: {
                            type: 'structure',
                            required: ['BucketARN', 'FileKey'],
                            members: {
                              BucketARN: {},
                              FileKey: {},
                              ObjectVersion: {}
                            }
                          }
                        }
                      }
                    }
                  },
                  RunConfigurationDescription: {
                    type: 'structure',
                    members: {
                      ApplicationRestoreConfigurationDescription: {
                        shape: 'S44'
                      },
                      FlinkRunConfigurationDescription: {
                        shape: 'S47'
                      }
                    }
                  },
                  FlinkApplicationConfigurationDescription: {
                    type: 'structure',
                    members: {
                      CheckpointConfigurationDescription: {
                        type: 'structure',
                        members: {
                          ConfigurationType: {},
                          CheckpointingEnabled: {
                            type: 'boolean'
                          },
                          CheckpointInterval: {
                            type: 'long'
                          },
                          MinPauseBetweenCheckpoints: {
                            type: 'long'
                          }
                        }
                      },
                      MonitoringConfigurationDescription: {
                        type: 'structure',
                        members: {
                          ConfigurationType: {},
                          MetricsLevel: {},
                          LogLevel: {}
                        }
                      },
                      ParallelismConfigurationDescription: {
                        type: 'structure',
                        members: {
                          ConfigurationType: {},
                          Parallelism: {
                            type: 'integer'
                          },
                          ParallelismPerKPU: {
                            type: 'integer'
                          },
                          CurrentParallelism: {
                            type: 'integer'
                          },
                          AutoScalingEnabled: {
                            type: 'boolean'
                          }
                        }
                      },
                      JobPlanDescription: {}
                    }
                  },
                  EnvironmentPropertyDescriptions: {
                    type: 'structure',
                    members: {
                      PropertyGroupDescriptions: {
                        shape: 'S2t'
                      }
                    }
                  },
                  ApplicationSnapshotConfigurationDescription: {
                    type: 'structure',
                    required: ['SnapshotsEnabled'],
                    members: {
                      SnapshotsEnabled: {
                        type: 'boolean'
                      }
                    }
                  },
                  VpcConfigurationDescriptions: {
                    type: 'list',
                    member: {
                      shape: 'S26'
                    }
                  },
                  ZeppelinApplicationConfigurationDescription: {
                    type: 'structure',
                    required: ['MonitoringConfigurationDescription'],
                    members: {
                      MonitoringConfigurationDescription: {
                        type: 'structure',
                        members: {
                          LogLevel: {}
                        }
                      },
                      CatalogConfigurationDescription: {
                        type: 'structure',
                        required: ['GlueDataCatalogConfigurationDescription'],
                        members: {
                          GlueDataCatalogConfigurationDescription: {
                            type: 'structure',
                            required: ['DatabaseARN'],
                            members: {
                              DatabaseARN: {}
                            }
                          }
                        }
                      },
                      DeployAsApplicationConfigurationDescription: {
                        type: 'structure',
                        required: ['S3ContentLocationDescription'],
                        members: {
                          S3ContentLocationDescription: {
                            type: 'structure',
                            required: ['BucketARN'],
                            members: {
                              BucketARN: {},
                              BasePath: {}
                            }
                          }
                        }
                      },
                      CustomArtifactsConfigurationDescription: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ArtifactType: {},
                            S3ContentLocationDescription: {
                              shape: 'S32'
                            },
                            MavenReferenceDescription: {
                              shape: 'S3i'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              CloudWatchLoggingOptionDescriptions: {
                shape: 'S9'
              },
              ApplicationMaintenanceConfigurationDescription: {
                shape: 'S4o'
              },
              ApplicationVersionUpdatedFrom: {
                type: 'long'
              },
              ApplicationVersionRolledBackFrom: {
                type: 'long'
              },
              ConditionalToken: {},
              ApplicationVersionRolledBackTo: {
                type: 'long'
              },
              ApplicationMode: {}
            }
          },
          S44: {
            type: 'structure',
            required: ['ApplicationRestoreType'],
            members: {
              ApplicationRestoreType: {},
              SnapshotName: {}
            }
          },
          S47: {
            type: 'structure',
            members: {
              AllowNonRestoredState: {
                type: 'boolean'
              }
            }
          },
          S4o: {
            type: 'structure',
            required: ['ApplicationMaintenanceWindowStartTime', 'ApplicationMaintenanceWindowEndTime'],
            members: {
              ApplicationMaintenanceWindowStartTime: {},
              ApplicationMaintenanceWindowEndTime: {}
            }
          },
          S5g: {
            type: 'structure',
            required: ['SnapshotName', 'SnapshotStatus', 'ApplicationVersionId'],
            members: {
              SnapshotName: {},
              SnapshotStatus: {},
              ApplicationVersionId: {
                type: 'long'
              },
              SnapshotCreationTimestamp: {
                type: 'timestamp'
              },
              RuntimeEnvironment: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=dbccbff60c7033cc57b3692df354fb52427ea6f9.js.map